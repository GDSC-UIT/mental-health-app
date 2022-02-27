import { StyleSheet, Text,
  Alert, View, TextInput, Button, TouchableOpacity } from "react-native";
import React, { Component } from "react";
import { Header } from "react-native/Libraries/NewAppScreen";
import { SafeAreaView } from "react-native-safe-area-context";

export default function Reset3() {
  const [pass1, setpassword1] = React.useState('');
  const [pass2, setpassword2] = React.useState('');
  
  return (
    <View style={styles.body}>

      <View style={styles.wrapper}>
        <Text style={styles.circle}> b </Text>
        <Text style={styles.main}>Reset Password </Text>
        <TouchableOpacity style={styles.bgsend}>
          <Text style={styles.send}> Send </Text>
        </TouchableOpacity> 
      </View>

      <View>
        <Text style={styles.email}>New password:</Text>
      </View>

      <View>
        <TextInput style={styles.input}
             value={pass1}
             onChangeText={(text) => 
              setpassword1(text)
            }
             secureTextEntry={true}
             ></TextInput>
      </View>

      <View>
        <Text style={styles.email}>Confirm password:</Text>
      </View>

      <View>
        <TextInput style={styles.input}
             value={pass2}
             onChangeText={(text) => setpassword2(text)}
             secureTextEntry={true}
             ></TextInput>
      </View>
      
     {
      <View>
        <Text style={styles.note}>
          {" "}
          You must enter the same password twice in order to confirm it.
        </Text>
      </View>
}

    {/* <SafeAreaView style={styles.safe}>
              <Button title="somthing"
                  onPress={() =>
                    Alert.alert(
                      "Notice",
                      "Password Reset Successfully",
                      [
                        {
                          text:"OK",
                        }
                      ]
                    )
              }>
                  
            
 
         </Button>

        </SafeAreaView> */}
      
     </View>
  );
}


const styles = StyleSheet.create({
  body:{
    flex:1,
    paddingTop: 50,
    paddingHorizontal: 10,
  },

  wrapper: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
  },
      

  circle: {
    width:30,
    height: 30,
    backgroundColor: "#E9F0F7",
    borderRadius: 100,
    color:"black",
    textAlign:"center",
    shadowRadius: 10,
    shadowOpacity: 0.3,
    shadowOffset: { width: 0, height: 0 },

  },

  main:{
    color: "#193566",
    fontSize: 26,
    textAlign: "center",
    fontWeight: 'bold',
    
  },

  email: {
    color: "#8F9BB2",
    marginLeft: 0,
    fontSize: 20,
    paddingTop: 30,
    paddingBottom:5,
  },

  input: {
    backgroundColor: "#E9F0F7",
    paddingTop:4,
    marginLeft: 4,
    marginRight: 4,
    borderColor:"#8F9BB2",
    borderWidth: 1,
    borderRadius: 15,
    padding: 10,
    shadowRadius: 10,
    shadowOpacity: 0.3,
    shadowOffset: { width: 0, height: 0 },
  },


  note: {
    color:"#FF4906",
    paddingHorizontal: 4,
    paddingTop: 10,
    fontStyle: "normal",
    textAlign: "left",
    fontSize: 15,
  },


  bgsend: {
    marginTop:20,
    backgroundColor: "#E9F0F7",
    marginLeft: 250,
    marginRight: 10,
    borderRadius: 30,
    shadowColor: "#000000",
    shadowRadius: 10,
    shadowOpacity: 0.3,
    shadowOffset: { width: 0, height: 0 },
  },
  send: {
    color: "#193566",
    fontSize: 24,
    fontStyle: "normal",
    fontWeight: 'bold',
    justifyContent: "center",
    textAlign: "center",
  },

  safe:{
    padding: 30,
    backgroundColor: "#E9F0F7",
    borderRadius: 30,
    shadowColor: "#000000",
    shadowRadius: 30,
    shadowOpacity: 0.3,
    shadowOffset: { width: 0, height: 0 },
  },
});
