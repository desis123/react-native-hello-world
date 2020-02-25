import * as React from "react"
import { ScrollView, Image } from "react-native"

export const List = () => {
  return (
    <ScrollView
      scrollEventThrottle={16}
      contentContainerStyle={{ paddingTop: 50 }}
    >
      {Array.from({ length: 10 }, (v, k) => (
        <Image
          style={{ width: "100%", height: 200, marginTop: 50 }}
          key={k + ""}
          source={{ uri: "https://picsum.photos/200/300" }}
        />
      ))}
    </ScrollView>
  )
}