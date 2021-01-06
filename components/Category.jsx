import React, {useState} from 'react'
import { TouchableNativeFeedback, View, Image, Text } from 'react-native'

const Category = ({ foods }) => {
  const [rippleOverflow, setRippleOverflow] = useState(false);
  return (
    <TouchableNativeFeedback onPress={() => {
      setRippleOverflow(!rippleOverflow);
    }}
    useForeground={true}
    background={TouchableNativeFeedback.Ripple('#d4d4d4', rippleOverflow)}>
      <View style={{width: 100, height: 70, borderRadius: 10, marginRight: 8,}}>
        
        <Image source={{ uri: foods.imageUri}} style={{ width: 100, height: 70, borderRadius: 10}}/>
        <Text style={{marginTop: -30, color: 'white', marginLeft: 30, fontSize: 16,}}>
          {foods.name}
        </Text>
        
      </View>
      </TouchableNativeFeedback>
  )
}

export default Category;
