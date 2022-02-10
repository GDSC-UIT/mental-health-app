import React from 'react';
import {View, Text, Image, StyleSheet, StatusBar, Dimensions} from 'react-native';
import AppIntroSlider from 'react-native-app-intro-slider';
import {useFonts, Roboto_400Regular, Roboto_500Medium, Roboto_700Bold} from '@expo-google-fonts/roboto';
import AppLoading from 'expo-app-loading';
import {AntDesign} from '@expo/vector-icons';

const data = [
  {
    key: 1,
    text: 'Receiving guidelines\nfrom psychologists',
    image: require('../assets/img/1/Saly-22.png'),
    bgimage: require('../assets/img/1/image3.png'),
  },
  {
    key: 2,
    text: 'Noting down your\nemotion diary',
    image: require('../assets/img/2/Saly-1.png'),
    bgimage: require('../assets/img/2/image19.png'),
  },
  {
    key: 3,
    text: 'Exploring posts and events about mental health',
    image: require('../assets/img/3/Saly-34.png'),
    bgimage: require('../assets/img/3/image17.png'),
  },
  {
    key: 4,
    text: 'Chatting with strangers\n',
    image: require('../assets/img/4/Saly-14.png'),
    bgimage: require('../assets/img/4/image3.png'),
  },
];

const {width, height} = Dimensions.get('window');

const Onboard = () => {
  let [fontsLoaded, error] = useFonts({
    Regular: Roboto_400Regular,
    Medium: Roboto_500Medium,
    Bold: Roboto_700Bold,
  });

  if (!fontsLoaded) {
    return <AppLoading />;
  }
  const keyExtractor = (item) => item.key;

  const renderItem = ({item, index}) => {
    if (index == 0) {
      return (
        <View style={styles.slide}>
          <Image source={item.bgimage} style={{position: 'absolute', bottom: 0.48*height, left: 0}} />
          <Image source={item.image} style={{position: 'absolute', bottom: 0.325*height, alignSelf: 'center'}} />
        <View style={styles.textbox}>
          <Text style={styles.text}>{item.text}</Text>
        </View>
      </View>
      )
    }
    else if (index == 1) {
      return (
        <View style={styles.slide}>
          <Image source={item.bgimage} style={{position: 'absolute', bottom: 0.338*height, left: 0}} />
          <Image source={item.image} style={{position: 'absolute', bottom: 0.24*height, alignSelf: 'center'}} />
        <View style={styles.textbox}>
          <Text style={styles.text}>{item.text}</Text>
        </View>
      </View>
      )
    }
    else if (index == 2) {
      return (
        <View style={styles.slide}>
          <Image source={item.bgimage} style={{position: 'absolute', top: 0, right: 0}} />
          <Image source={item.image} style={{position: 'absolute', bottom: 0.289*height, alignSelf: 'center'}} />
        <View style={styles.textbox}>
          <Text style={styles.text}>{item.text}</Text>
        </View>
      </View>
      )
    }
    else {
      return (
        <View style={styles.slide}>
          <Image source={item.bgimage} style={{position: 'absolute', bottom: 0.04*height, right: 0}} />
          <Image source={item.image} style={{position: 'absolute', bottom: 0.217*height, alignSelf: 'center'}} />
        <View style={styles.textbox}>
          <Text style={styles.text}>{item.text}</Text>
        </View>
      </View>
      ) 
    }
  }

  const renderDoneButton = () => {
    return (
      <View style={[styles.buttonWrapper, styles.elevation]}>
        <Text style={styles.buttonText}>GO!</Text>
      </View>
    )
  }

  const renderNextButton = () => {
    return (
      <View>
        <AntDesign name="arrowright" size={44} color="#728AB7"/>
      </View>
    )
  }

  const renderPrevButton = () => {
    return (
      <View>
        <AntDesign name="arrowleft" size={44} color="#728AB7" />
      </View>
    )
  }
  
  return (
    <View style={{flex: 1}}>
      <StatusBar translucent backgroundColor="transparent" barStyle="dark-content"/>
      <AppIntroSlider
        keyExtractor={keyExtractor}
        renderItem={renderItem}
        renderDoneButton={renderDoneButton}
        renderNextButton={renderNextButton}
        renderPrevButton={renderPrevButton}
        showPrevButton
        activeDotStyle={styles.activeDotStyle}
        data={data}
      />
    </View>
  );
};

const styles = StyleSheet.create({
  slide: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center',
    backgroundColor: '#EBF3FA',
  },
  textbox: {
    position: 'absolute',
    justifyContent: 'center',
    alignItems: 'center',
    bottom: 0.128*height,
    left: 0,
    right: 0,
  },
  text: {
    fontFamily: 'Bold',
    fontSize: 28,
    color: '#193566',
    textAlign: 'center',
  },
  buttonWrapper: {
    justifyContent: 'center',
    alignItems: 'center',
    width: 128,
    height: 45,
    borderRadius: 50,
    backgroundColor: '#E9F0F7',
  },
  elevation: {
    elevation: 5,
    shadowColor: '#8a9bbc',
  },
  buttonText: {
    fontFamily: 'Medium',
    fontSize: 20,
    color: '#728AB7',
  },
  activeDotStyle: {
    backgroundColor: '#728AB7',
  },
});

export default Onboard;