import { useEffect, useMemo, useRef, useState } from 'react';

export interface API<T> {
  getData(p?: { lastItem?: any }): Promise<T>;
}

export type APIState<T, U extends any[]> = {
  loading: boolean;
  loadingNext: boolean;
  canLoadNext: boolean;
  refreshing: boolean;
  data?: T;
  error?: string;
  setPageSize(pageSize: number): void;
  setData(data: T): void;
  request(...args: U): void;
  refresh(...args: U): void;
  loadNext(...args: U): void;
};

export function useAPI<T, U extends any[]>(
  api: (...args: U) => API<T>
): APIState<T, U> {
  const [state, setState] = useState({
    loading: false,
    loadingNext: false,
    canLoadNext: false,
    refreshing: false
  });

  const [pageSize, setPageSize] = useState(10);

  const stateRef = useRef(state);
  stateRef.current = state;

  const apiRef = useRef(api);
  apiRef.current = api;

  const mountedRef = useRef(true);

  const functions = useMemo(() => {
    function startRequest(...args: U) {
      apiRef
        .current(...args)
        .getData()
        .then((v: any) => {
          mountedRef.current &&
            setState((s: any) => ({
              ...s,
              data: v,
              loading: false,
              loadingNext: false,
              refreshing: false,
              canLoadNext: v.length === pageSize
            }));
        })
        .catch((err) => {
          mountedRef.current &&
            setState((s) => ({
              ...s,
              loading: false,
              loadingNext: false,
              refreshing: false,
              error: err.message ?? err
            }));
        });
    }

    function nextRequest(...args: U) {
      const { data } = stateRef.current as any;

      const lastItem = data[data.length - 1];

      apiRef
        .current(...args)
        .getData({ lastItem })
        .then((v: any) => {
          mountedRef.current &&
            setState((s: any) => ({
              ...s,
              data: [...s.data, ...v],
              loading: false,
              loadingNext: false,
              refreshing: false,
              canLoadNext: v.length === pageSize
            }));
        })
        .catch((err) => {
          mountedRef.current &&
            setState((s) => ({
              ...s,
              loading: false,
              loadingNext: false,
              refreshing: false,
              error: err.message ?? err
            }));
        });
    }

    function request(...args: U) {
      setState((s) => ({ ...s, loading: true, error: undefined }));
      startRequest(...args);
    }

    function refresh(...args: U) {
      setState((s) => ({ ...s, refreshing: true, error: undefined }));
      startRequest(...args);
    }

    function loadNext(...args: U) {
      if (!stateRef.current.canLoadNext || stateRef.current.loadingNext) {
        return;
      }
      setState((s) => ({ ...s, loadingNext: true, error: undefined }));
      nextRequest(...args);
    }

    function setData(data: T) {
      setState((s) => ({ ...s, data }));
    }

    return { request, refresh, loadNext, setData, setPageSize };
  }, []);

  // Cancel request if screen is removed from stack
  useEffect(() => {
    return () => {
      mountedRef.current = false;
    };
  }, []);

  return { ...state, ...functions };
}

export function useResult<T>(value: T, fn: (v: NonNullable<T>) => void): void {
  const oldValue = useRef(value);
  useEffect(() => {
    oldValue.current != value && value != null && fn(value!);
    oldValue.current = value;
  });
}
