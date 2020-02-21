import React from 'react'
import { View, Text , TouchableOpacity , StyleSheet} from 'react-native'

const RenderInner = () =>{ 
    
    return (
    <View style={styles.panel}>
      <TouchableOpacity style={styles.panelButton}>
        <Text style={styles.panelButtonTitle}>Sample</Text>
      </TouchableOpacity>
      <TouchableOpacity style={styles.panelButton}>
        <Text style={styles.panelButtonTitle}>Buttons</Text>
      </TouchableOpacity>
      <TouchableOpacity style={styles.panelButton}>
        <Text style={styles.panelButtonTitle}>Which</Text>
      </TouchableOpacity>
      <TouchableOpacity style={styles.panelButton}>
        <Text style={styles.panelButtonTitle}>Could</Text>
      </TouchableOpacity>
      <TouchableOpacity style={styles.panelButton}>
        <Text style={styles.panelButtonTitle}>Be</Text>
      </TouchableOpacity>
      <TouchableOpacity style={styles.panelButton}  onPress={() => bs.current.snapTo(1)}>
        <Text style={styles.panelButtonTitle}>Clicked</Text>
      </TouchableOpacity>
    </View>
  )} 

export default RenderInner

const styles = StyleSheet.create({
  panelButtonTitle: {
    fontSize: 17,
    fontWeight: 'bold',
    color: 'white',
  },
  panel: {
    height: 600,
    padding: 20,
    backgroundColor: '#2c2c2fAA',
    paddingTop: 20,
    borderTopLeftRadius: 20,
    borderTopRightRadius: 20,
    shadowColor: '#000000',
    shadowOffset: { width: 0, height: 0 },
    shadowRadius: 5,
    shadowOpacity: 0.4,
  },

  panelButton: {
    padding: 13,
    borderRadius: 10,
    backgroundColor: '#292929',
    alignItems: 'center',
    marginVertical: 7,
  },
  
})
