 import React from "react"
 import { NavigationContainer, NavigationContainerProps } from "@react-navigation/native"
 import { createNativeStackNavigator } from "@react-navigation/native-stack"
 import { 
   Home,
   QRScanner,
   BookingDetails
  } from "../containers"
 import { navigationRef, useBackButtonHandler } from "./navigation-utilities"
 
 export type NavigatorParamList = {
   home: undefined
   qrScanner: undefined
   bookingDetails: undefined
 }
 
 const Stack = createNativeStackNavigator<NavigatorParamList>()
 
 const AppStack = () => {
   return (
     <Stack.Navigator
       screenOptions={{
         headerShown: false,
       }}
       initialRouteName="home"
     >
       <Stack.Screen name="home" component={Home} />
       <Stack.Screen name="qrScanner" component={QRScanner} />
       <Stack.Screen name="bookingDetails" component={BookingDetails} />
     </Stack.Navigator>
   )
 }
 
 interface NavigationProps extends Partial<React.ComponentProps<typeof NavigationContainer>> {}

 export const AppNavigator = (props: NavigationProps) => {
   useBackButtonHandler(canExit)
   return (
     <NavigationContainer
       ref={navigationRef}
       {...props}
     >
       <AppStack />
     </NavigationContainer>
   )
 }
 
 AppNavigator.displayName = "AppNavigator"
 
 const exitRoutes = ["welcome"]
 export const canExit = (routeName: string) => exitRoutes.includes(routeName)
 