import {StyleSheet, Text, TouchableOpacity, View, Alert, Image, Modal, Pressable, TextInput, KeyboardAvoidingView, Platform, ScrollView} from 'react-native';
import React, { useState } from 'react';
import { SafeAreaView } from 'react-native-safe-area-context';
import {scaleSize} from '@core/utils';
import {IMAGES} from '@src/assets';
import { COLORS } from '@src/assets/const';
import Button from '@src/components/Button';
import BackButton from '../components/BackButton'
import ChatTitle from '../components/ChatTitle';
import SelfMessage from '../components/SelfMessage';
import AnotherMessage from '../components/AnotherMessage';
import BottomChatBar from '../components/BottomChatBar';

type Props = {};

const WithStrangerChat = () => {
    const [viewVisible, setViewVisible] = useState(false);
    const [modal1Visible, setModal1Visible] = useState(false);
    const [modal2Visible, setModal2Visible] = useState(false); 
    const [modal3Visible, setModal3Visible] = useState(false);
    
    function deleteConversationAlert(){
        Alert.alert(
            "Notice", "Are you sure you want to delete this conversation?",
            [
                {text: "OK", onPress: () => console.log("OK Pressed")},
                {text: "Cancel", onPress: () => console.log("Cancel Pressed")}
            ]
        )
    }

    function reportAlert(){
        Alert.alert(
            "Notice", "Are you sure you want to report this person?",
            [
                {text: "OK", onPress: () => setModal1Visible(true)},
                {text: "Cancel", onPress: () => setModal1Visible(false)}
            ]
        )
    }

    return (
        <SafeAreaView style={styles.container}>

            <Modal
                animationType="fade"
                transparent={true}
                visible={modal1Visible}
            >
                <View style={styles.centeredView}>
                    <KeyboardAvoidingView enabled behavior={Platform.OS === 'ios' ? 'padding' : 'height'}>
                        <View style={styles.modalView}>
                            <TouchableOpacity style={styles.cancel_button}>
                                <Text 
                                    style={styles.cancel_text}
                                    onPress={() => setModal1Visible(!modal1Visible)}
                                >Cancel</Text>
                            </TouchableOpacity>

                            <Text style={styles.please_text}>Please type your problem</Text>
                            
                            
                                <TextInput 
                                    style={styles.problem_input}
                                    numberOfLines= {1}
                                />

                            <TouchableOpacity 
                                style={styles.send_button}
                                onPress={()=>{setModal1Visible(false);setModal2Visible(true)}}
                            >
                                <Text
                                    style={{
                                        fontSize: 20,
                                        fontWeight: '600',
                                        color: '#1D325E',
                                        alignSelf: 'center',
                                        justifyContent: 'center',  
                                    }}
                                >Continue</Text>
                            </TouchableOpacity>
                        </View>
                    </KeyboardAvoidingView>
                </View>
            </Modal>

            <Modal
                animationType="fade"
                transparent={true}
                visible={modal2Visible}
            >
                <View style={styles.centeredView}>
                <View style={styles.modalView}>
                    
                    <Text style={styles.notice_text}>Notice</Text>

                    <Text style={styles.upload_text}>
                    Upload the picture that describe
                    your problem.
                    </Text>
                    
                    // Chưa làm chức năng up ảnh
                    <TouchableOpacity style={styles.add_button}>
                    <Image source={IMAGES.plus}></Image>
                    </TouchableOpacity>

                    <TouchableOpacity onPress={()=>{setModal2Visible(false),setModal1Visible(false),setModal3Visible(true)}}>
                        <Text 
                            style={{
                                fontSize: 20,
                                fontWeight: '600',
                                color: '#1D325E',
                                alignSelf: 'center',
                                justifyContent: 'center',  
                                marginTop: 6
                            }}
                        >Send</Text>
                    </TouchableOpacity>
                </View>
                </View>
            </Modal>

            <Modal
                animationType="fade"
                transparent={true}
                visible={modal3Visible}
            >
                <View style={styles.centeredView}>
                <View
                    style={{width: 278,
                        height: 116,
                        borderRadius: 10,
                        backgroundColor: '#F5F9FD',
                        alignItems: 'center',
                    
                        shadowColor: "#000",
                        shadowOffset: {
                          width: 0,
                          height: 2
                        },
                        shadowOpacity: 0.25,
                        shadowRadius: 4,
                        elevation: 5}}
                >
                    
                    <Text style={styles.sorry_text}>Sorry about your problem.</Text>

                    <TouchableOpacity 
                        style={{marginTop: 26}}
                        //set Navigation quay về lại home chat
                    >
                    <Text style={styles.ok_text}>OK</Text>
                    </TouchableOpacity>

                </View>
                </View>
            </Modal>


            <View style={styles.top}>
                <View style={{flexDirection: 'row', alignItems: 'center'}}>
                    <BackButton/>
                    <ChatTitle name={'Tan Mot Cu'}/>
                </View>

                <TouchableOpacity
                    style={styles.more_button}
                    onPress={() => setViewVisible(!viewVisible)}
                >
                    <Image
                        source={IMAGES.options}>
                    </Image>
                </TouchableOpacity>

                <View style={styles.optionsContainer}>
                {
                    viewVisible ? (
                        <View style={styles.optionsView}>
                            <TouchableOpacity 
                                onPress={deleteConversationAlert}
                            >
                                <Text style={styles.deleteOptionsText}>Delete conversation</Text>
                            </TouchableOpacity>
                            
                            <Image source={IMAGES.line} style={{width: 140, marginTop: 6, marginLeft: 9}}/>
                            
                            <TouchableOpacity 
                                onPress={reportAlert}
                            > 
                                <Text style={styles.reportOptionsText}>Report</Text>
                            </TouchableOpacity>
                        </View>
                    ) : null
                }
                </View>
            </View>
            <Image
                source={IMAGES.line}
                style={styles.line}>
            </Image>

            <ScrollView>
                <AnotherMessage message='Hi there'/>

                <SelfMessage message='Hi, who are you?'/>

                <AnotherMessage message='My name is Doraemon and I am from the future!'/>

                <SelfMessage message='That is amazing'/>

                <AnotherMessage message='Yeah, do you wanna go to another earth?'/>

                <SelfMessage message='That is amazing again'/>
                
            </ScrollView>

            <BottomChatBar/>

        </SafeAreaView>
    );
};

export default WithStrangerChat;

const styles = StyleSheet.create({
    container: {
        flex: 1,
        // justifyContent: "center",
        // alignItems: "center",
        backgroundColor: COLORS.gray_1
      },
      optionsView: {
        justifyContent: 'center',
        width: 160,
        height: 70,
        borderRadius: 10,
        backgroundColor: '#E9F0F7',
        position: 'relative',
        marginTop: 10,

        shadowColor: "#000",
        shadowOffset: {
          width: 4,
          height: 4
        },
        shadowOpacity: 0.48,
        elevation: 16
      },
    top: {
        marginTop: 22,
        alignItems: 'center',
        justifyContent: 'space-between',
        flexDirection: 'row',
        position: 'relative'
    },
    more_button: {
        height: 40,
        width: 40,
        borderRadius: 40,
        backgroundColor: '#E9F0F7',
        alignItems: 'center',  
        justifyContent: 'center',
        marginRight: 17,

        shadowOffset: {
            width: 2,
            height: 2,
        },
        shadowOpacity: 0.3,
        elevation: 5,
        shadowColor: '#8A9BBD'
    },
    line: {
        alignSelf: 'center',
        justifyContent: 'center',
        marginTop: 12,
    },
    optionsContainer: {
        top: 50,
        right: 11,
        justifyContent: 'center',
        position: 'absolute',
        zIndex: 2
    },

    deleteOptionsText: {
        fontSize: 14,
        fontWeight: '500',
        color: '#8F9BB2',
        marginLeft: 9,
    },
    reportOptionsText: {
        fontSize: 14,
        fontWeight: '500',
        color: '#8F9BB2',
        marginLeft: 9,
        marginTop: 5
    },

    centeredView: {
        flex: 1,
        justifyContent: "center",
        alignItems: "center",
        marginTop: 22
      },
    modalView: {
        width: 318,
        height: 192,
        borderRadius: 10,
        backgroundColor: '#F5F9FD',

        shadowColor: "#000",
        shadowOffset: {
            width: 0,
            height: 2
        },
        shadowOpacity: 0.25,
        shadowRadius: 4,
        elevation: 5
        },
        cancel_button: {
        marginLeft: 252,
        marginTop: 11,
        width: 56,
        height: 21,
    },
    cancel_text: {
        fontSize: 18,
        fontWeight: '500',
        color: '#1D325E',
    },
    please_text: {
      marginLeft: 15,
      marginTop: 9,
      fontSize: 18,
      fontWeight: 'normal',
      color: '#1D325E',
    },
    problem_input: {
        width: 280,
        height: 58,
        borderRadius: 15,
        backgroundColor: '#E9F0F7',
        marginLeft: 15,
        marginTop: 3,
        padding: 10
    },
    send_button:{
        width: 168,
        height: 40,
        alignItems: 'center',
        justifyContent: 'center',
        alignSelf: 'center',
        marginTop: 16
    },
    notice_text: {
        fontSize: 22,
        fontWeight: '600',
        color: '#1D325E',
        alignSelf: 'center',
        marginTop: 11
    },
    upload_text: {
        fontSize: 18,
        fontWeight: 'normal',
        color: '#1D325E',
        alignSelf: 'center',
        flexWrap: 'wrap',
        textAlign: 'center',
        width: 280,
        marginTop: 9
    },
    add_button: {
        width: 62,
        height: 49,
        borderRadius: 10,
        backgroundColor: '#E9F0F7',
        alignSelf: 'center',
        alignItems: 'center',
        justifyContent: 'center',
        marginTop: 11,
    
        shadowOffset: {
          width: 3,
          height: 3,
        }
    },
    sorry_text: {
        fontSize: 18,
        color: '#1D325E',
        marginTop: 33
    },
    ok_text:{
        fontSize: 22,
        fontWeight: '600',
        color: '#0B7DDF'
    } 
});
