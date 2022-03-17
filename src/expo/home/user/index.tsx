import React from 'react';
import { Image, Text, View, StyleSheet, TouchableOpacity, ImageBackground } from 'react-native';

const App: React.FC = () => {
  return (
    <>
      <View style={styles.container}>
        <Image source={require('./assets/image1.png')} style={styles.backgroundTop} />
        <Image source={require('./assets/image2.png')} style={styles.backgroundCenter} />
        <Image source={require('./assets/image3.png')} style={styles.backgroundBottom} />

        <View style={styles.textContainer}>
          <Text style={styles.text1}>Hi Tan, </Text>
          <Text style={styles.text2}>Suggest for you </Text>

          <View style={styles.spacebetween}>
            <View style={styles.wrapper}>
                <TouchableOpacity style={styles.Post1}>
                <Image source={{uri:'https://picsum.photos/200/300?grayscale'}} style={{
                  flex: 1,
                  position: "absolute",
                  left: 12/2,
                  flexDirection: "row",
                  alignItems: "center",
                }} />
                  <Text numberOfLines={1} ellipsizeMode="tail" 
                    style={styles.PostText}>
                    Meet your goals
                  </Text>
                  <Text style={{
                    position: "absolute",
                    //marginBottom: 20,
                    marginLeft: 85,
                    fontSize: 14,
                    color: "#8F9BB2",
                    fontWeight: "400",
                  }}>Galant</Text> 
                </TouchableOpacity>
            </View>

            <View style={styles.wrapper}>
                <TouchableOpacity style={styles.Post2}>
                <Image source={{uri:'https://picsum.photos/200/300?grayscale'}} style={{
                  flex: 1,
                  position: "absolute",
                  left: 12/2,
                  flexDirection: "row",
                  alignItems: "center",
                }} />                  
                  <Text numberOfLines={1} ellipsizeMode="tail"
                    style={styles.PostText} >Know more about yourself </Text>
                  <Text style={{
                    position: "absolute",
                    //marginBottom: 20,
                    marginLeft: 85,
                    fontSize: 14,
                    color: "#8F9BB2",
                    fontWeight: "400",
                  }}>Galant</Text> 
                </TouchableOpacity>
            </View>
          </View>
        </View>



        <View style={{alignItems: "center", top:300}}>
        <TouchableOpacity style={styles.Slide}>
            {/* ICON chevron  len */}
          <Image source={require('./assets/image4.png')} style={styles.img} />
            <Text style={styles.SlideText} > How are you feeling </Text>
            {/* ICON chevron len */}
          <Image source={require('./assets/image4.png')} style={{
            flex: 1,
            position: "absolute",
            left: 40/2,
            flexDirection: "row",
            alignItems: "center",
          }} />
        </TouchableOpacity>
        </View>
        
      </View>
    </>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    //justifyContent: 'center',
    backgroundColor: '#EBF3FA',
  },
  backgroundTop: {
    flex: 1,
    position: 'absolute',
    top: 40,
    right: 10,

  },
  backgroundCenter: {
    flex: 1,
    position: 'absolute',
    bottom: 450,
    left: 50,
  },
  backgroundBottom: {
    flex: 1,
    position: 'absolute',
    bottom: 200,
    right: 30,
  },
  textContainer: {
    marginTop: 100,
    marginLeft: -10,
  },
  text1: {
    marginHorizontal: 30,
    color: "#8F9BB2",
    fontSize: 24,
    fontWeight: 'bold',
  },
  text2: {
    marginTop: 5,
    marginHorizontal: 30,
    color: "#334C78",
    fontSize: 24,
    fontWeight: 'bold',
  },

  Post1: {
    justifyContent: "center",
    height: 80,
    width: 350,
    borderRadius: 10,
    backgroundColor: "#F5F9FD",
    shadowOffset: {
      width: 3,
      height: 3,
    },
    shadowOpacity: 1,
    shadowRadius: 6,
    shadowColor: "#B7C4DD",
    elevation: 14
  },
  Post2: {
    marginTop: -5,
    marginLeft: 45,
    justifyContent: "center",
    height: 80,
    width: 330,
    borderRadius: 10,
    backgroundColor: "#F5F9FD",
    shadowOffset: {
      width: 3,
      height: 3,
    },
    shadowOpacity: 1,
    shadowRadius: 6,
    shadowColor: "#B7C4DD",
    elevation: 14
  },
  PostText: {
    marginTop: -40,
    marginLeft: 85,
    fontSize: 16,
    color: "#1D325E",
    fontWeight: "500",
  },

  spacebetween: {
    //justifyContent: "space-between",
    marginHorizontal: 30,
    marginTop: 10,
    position:'relative',
  },
  backgroundLine: {
    position: 'absolute',
    left:10,
    bottom: 59,
  },
  wrapper: {
    flexDirection: 'row',
    alignItems: 'center',
    marginVertical: 15,
  },
  img: {
    flex: 1,
    position: 'absolute',
    //bottom: 20,
    right: 40/2,
    flexDirection: "row",
    alignItems: "center"
  },
  Slide:{
    //marginHorizontal: 90,
    justifyContent: "center",
    height: 45,
    width: 300,
    borderRadius: 60,
    backgroundColor: "#F5F9FD",
    shadowOffset: {
      width: 3,
      height: 3,
    },
    shadowOpacity: 1,
    shadowRadius: 6,
    shadowColor: "#B7C4DD",
    elevation: 14
  },
  SlideText:{
    textAlign: "center",
    color: "#8F9BB2",
    fontSize: 16,
    fontWeight: "500",
    }
});
export default App;

