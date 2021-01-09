import React, {useState} from 'react'
import { Text, View, StyleSheet, Image, ScrollView, TouchableNativeFeedback } from 'react-native';
import {Appbar} from 'react-native-paper';
import { AntDesign } from '@expo/vector-icons';
import {useNavigation} from '@react-navigation/native';
import {useRoute} from '@react-navigation/native';
import {Button} from 'react-native-elements';


function FoodScreen() {
  const navigation = useNavigation();
  const route = useRoute();
  const [rippleOverflow, setRippleOverflow] = useState(false);

  const onPress = () => {
    setRippleOverflow(!rippleOverflow);
    navigation.navigate('FoodDescription', {name: name, image: image});
  }

  const {type,name, image} = route.params;
  return (
    <View style={styles.container}>
      <Appbar.Header style={{backgroundColor: '#05b328'}}>
        <Appbar.BackAction onPress={() => navigation.goBack()}/>
        <Appbar.Content title={type} style={{alignSelf: 'center',}} />
      
        <Appbar.Action icon="dots-vertical"/>
      </Appbar.Header>
      <View style={styles.itemsContainer}>
        <TouchableNativeFeedback onPress={onPress}
        useForeground={true}
        background={TouchableNativeFeedback.Ripple('#d4d4d4', rippleOverflow)}>
          <View style={styles.foodDetailContainer}>
            <Image source={{ uri: image }} style={{ width: '40%', height: '100%',  borderTopLeftRadius: 10, borderBottomLeftRadius: 10,}}/>
            <View style={{flexDirection: 'column'}}>
              <Text style={{margin: 10, fontSize: 16, fontWeight:'bold'}}>
                {name}
              </Text>
              <View style={{flexDirection: 'row',}}>
                <Text style={{marginTop: 45, marginLeft: 10, fontSize: 20, fontWeight: 'bold', color: '#05b328'}}>
                  $ 10.99
                </Text>

                <Button
                icon={
                  <AntDesign name="plus" size={15} color="white" />
                }
                buttonStyle={{
                  marginTop: 42,
                  marginLeft: 60,
                  width: 30, 
                  height: 30,
                  borderRadius: 20,
                  backgroundColor: '#ff0059'
                }}/>
              </View>
            </View>
          </View>
        </TouchableNativeFeedback>
      </View>
      
    </View>
  )
}

export default FoodScreen;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    
  },

  itemsContainer: {
    width: '90%',
    height: '90%',
    margin: 20,
  },
  foodDetailContainer: {
    // backgroundColor: 'black',
    height: 120,
    borderColor: '#cccccc',
    borderWidth: 1,
    borderRadius: 10,
    flexDirection: 'row',
    width: '100%'
  }
})