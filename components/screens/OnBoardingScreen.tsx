import { StyleSheet, Text, View, Image, TouchableOpacity } from 'react-native'
import React from 'react'
import Onboarding from 'react-native-onboarding-swiper';
import { useNavigation } from '@react-navigation/native';

export default function OnBoardingScreen() {

   const navigation: any = useNavigation();
    const DoneButtonComponent = ({...props}) => {
        return (
            <TouchableOpacity {...props} style={{marginHorizontal: 15}} >
                <Text>Done</Text>
            </TouchableOpacity>
        )
    }


    const DotComponent = ({selected}) => {
        return (
            <View style={{
                height: selected ? 12 : 6,
                width: selected ? 20:  6,
                borderRadius: 12,
                backgroundColor: selected ? '#133E87': '#608BC1',
                marginHorizontal: 5
            }} />
        )
    }

    const onDone = () => {
        navigation.navigate('LoginScreen')
    }

   



  return (
    <Onboarding
    DoneButtonComponent={DoneButtonComponent}
    DotComponent={DotComponent}
    onDone={onDone}
    
    pages={[
      {
        backgroundColor: '#C9E6F0',
        image: <Image source={require('../../components/assets/images/tom.png')} />,
        title: 'Hey I am Tom',
        subtitle: 'You childhood happiness ',
      },

      {
        backgroundColor: '#FEF3E2',
        image: <Image source={require('../../components/assets/images/jerry.png')} />,
        title: 'Hey I am Jerry',
        subtitle: 'Nice to see you',
      },

      {
        backgroundColor: '#9EDF9C',
        image: <Image source={require('../../components/assets/images/image2.png')} />,
        title: 'Hey I am John',
        subtitle: 'Nice to see you',
      },

      {
        backgroundColor: '#C5D3E8',
        image: <Image source={require('../../components/assets/images/image1.png')} />,
        title: 'Hey I am John',
        subtitle: 'Nice to see you',
      },
    
    ]}
  />
  )
}

const styles = StyleSheet.create({})