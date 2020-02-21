import React, { useRef } from "react";
import { View, Button , Text } from "react-native";
import RBSheet from "react-native-raw-bottom-sheet";

export default function App() {
  const refRBSheet = useRef();
  return (
    <View
      style={{
        flex: 1,
        justifyContent: "center",
        alignItems: "center",
        backgroundColor: "#000"
      }}
    >
      <Button title="OPEN BOTTOM SHEET" onPress={() => refRBSheet.current.open()} />
      <RBSheet
        ref={refRBSheet}
        closeOnDragDown={true}
        closeOnPressMask={true}
        customStyles={{
          wrapper: {
            backgroundColor: "transparent"
          },
          draggableIcon: {
            backgroundColor: "#000"
          },
          container: {
            flex: 1,
            flexDirection: 'column',
            borderTopRightRadius: 50,
          },
        }}
      >
        <YourOwnComponent />
      </RBSheet>
    </View>
  );
}

const YourOwnComponent =()=>{
    return(
        <View style={
            {
                borderRadius:20,

            }
        }><Text>My Coponenent </Text></View>
    )
}