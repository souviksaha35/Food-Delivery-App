import React, {useState} from 'react'
import { TouchableNativeFeedback, View, Image, Text } from 'react-native'
import {useNavigation} from '@react-navigation/native';

const Category = ({ foods }) => {

  const navigation = useNavigation();
  const [rippleOverflow, setRippleOverflow] = useState(false);

  const onPress = () => {
    setRippleOverflow(!rippleOverflow);
    navigation.navigate('Food', {type: foods.type, name: foods.name, image: foods.imageUri});
  }
  return (
    <TouchableNativeFeedback onPress={onPress}
    useForeground={true}
    background={TouchableNativeFeedback.Ripple('#d4d4d4', rippleOverflow)}>
      <View style={{width: 100, height: 70, borderRadius: 10, marginRight: 8,}}>
        
        <Image source={{ uri: foods.imageUri}} style={{ width: 100, height: 70, borderRadius: 10}}/>
        <Text style={{marginTop: -30, color: 'white', marginLeft: 30, fontSize: 16,}}>
          {foods.type}
        </Text>
        
      </View>
      </TouchableNativeFeedback>
  )
}

export default Category;
