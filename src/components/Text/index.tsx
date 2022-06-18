import * as React from "react"
import { StyleProp, Text as ReactNativeText, TextProps as RNTextProps, TextStyle } from "react-native"
import { presets, TextPresets } from "./presets"

interface TextProps extends RNTextProps {
  children?: React.ReactNode
  style?: StyleProp<TextStyle>
  preset?: TextPresets
}

export function Text(props: TextProps) {
  // grab the props
  const { preset = "default", children, style: styleOverride, ...rest } = props

  const style = presets[preset] || presets.default
  const styles = [style, styleOverride]

  return (
    <ReactNativeText {...rest} style={styles}>
      {children}
    </ReactNativeText>
  )
}
