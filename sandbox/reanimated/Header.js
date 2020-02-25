import * as React from "react"
import {Text, View } from "react-native"

const HEADER_HEIGHT = 60

export const Header = () => {
  return (
    <View
      style={{
        height: HEADER_HEIGHT,
        position: "absolute",
        top: 0,
        width: "100%",
        zIndex: 2,
        backgroundColor: "#ffb74d",
        justifyContent: "center",
        alignItems: "center",
      }}
    >
      <Text>Header</Text>
    </View>
  )
}