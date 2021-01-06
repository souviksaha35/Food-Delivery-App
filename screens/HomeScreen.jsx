import React, {useState} from 'react'
import { View,Image,FlatList, StyleSheet, ImageBackground, Text, TouchableOpacity, TouchableNativeFeedback } from 'react-native'
import Foods from '../data/foods';
import Category from '../components/Category';

function HomeScreen() {
  const [rippleOverflow, setRippleOverflow] = useState(false);

  const renderCategory = ({ item }) => {
    <Category foods={item}/>
  }
  return (
    <View style={styles.container}>
      <View style={styles.categoryContainer}>
        <View style={{flexDirection: 'row', margin: 15, justifyContent: 'space-between'}}>
          <Text style={{fontSize: 18, fontWeight: 'bold',}}>
              Categories
          </Text>

          <TouchableOpacity>
            <Text style={{fontWeight: 'bold', fontSize: 14, color: '#05b328'}}>
              View all
            </Text>
          </TouchableOpacity>
        </View>

        <View style={{margin: 10,}}>
          {/* <TouchableNativeFeedback onPress={() => {
            setRippleOverflow(!rippleOverflow);
          }}
          background={TouchableNativeFeedback.Ripple('#d4d4d4', rippleOverflow)}>
            <View style={{width: 100, height: 70, borderRadius: 10}}>
              
              <Image source={require('../assets/pizza1.jpg')} style={{ width: 100, height: 70, borderRadius: 10}}/>
              <Text style={{marginTop: -30, color: 'white', marginLeft: 30, fontSize: 16,}}>
                Pizza
              </Text>
              
            </View>
            </TouchableNativeFeedback> */}
            <FlatList
            horizontal
            data={Foods}
            renderItem={({ item }) => <Category foods={item}/>}
            keyExtractor={(item) => item.id}
            showsHorizontalScrollIndicator={false}
            />
        </View>
      </View>
    </View>
  )
}

export default HomeScreen;


const styles = StyleSheet.create({
  container: {
    flex: 1,
  },

  categoryContainer: {
    flexDirection: 'column',
    height: 150,
    marginTop: 20,
  }
})