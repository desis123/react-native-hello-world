import * as React from "react"
import { View } from "react-native"
import { Header } from "./sandbox/reanimated/Header"
import { List } from "./sandbox/reanimated/List"

export const App = () => {
  return (
    <View>
      <Header />
      <List />
    </View>
  )
}

export default App