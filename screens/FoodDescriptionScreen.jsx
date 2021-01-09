import React from 'react';
import { View, StyleSheet, ImageBackground } from 'react-native'
import {useRoute, useNavigation} from '@react-navigation/native';
import {Button} from 'react-native-elements';
import { Entypo } from '@expo/vector-icons';

function FoodDescriptionScreen() {
  const route = useRoute();
  const navigation = useNavigation();

  const onPress = () => {
    
  }

  const {image, name} = route.params;
  return (
    <View style={styles.container}>
      <View style={styles.upperContainer}>
        <ImageBackground
        source={{uri: image}}
        style={{width: '100%', height: '100%'}}>
          <View style={{flexDirection: 'row', justifyContent: 'space-between',}}>
            <Button
            onPress={() => navigation.goBack()}
            icon={
              <Entypo name="cross" size={26} color="black" />
            }
            buttonStyle={{
              width: 40,
              height: 40,
              margin: 35,
              backgroundColor: 'white',
              borderRadius: 20,
            }}/>

            
            <Button
            onPress={onPress}
            icon={
              <Entypo name="star" size={24} color="grey" />
            }
            buttonStyle={{
              width: 40,
              height: 40,
              margin: 35,
              backgroundColor: 'white',
              borderRadius: 20,
            }}
            />
          </View>
        </ImageBackground>
      </View>
    </View>
  )
}

export default FoodDescriptionScreen;

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
  upperContainer: {
    width: '100%',
    height: '35%',
    backgroundColor: 'black',
  }
})