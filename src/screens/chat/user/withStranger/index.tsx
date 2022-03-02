import {
    StyleSheet,
    Text,
    TouchableOpacity,
    View,
    Alert,
    Image,
    Modal,
    Pressable,
    TextInput,
    KeyboardAvoidingView,
    Platform,
    ScrollView,
} from 'react-native';
import React, {useState} from 'react';
import {SafeAreaView} from 'react-native-safe-area-context';
import {scaleSize} from '@core/utils';
import {IMAGES} from '@src/assets';
import {COLORS} from '@src/assets/const';
import Button from '@src/components/Button';
import BackButton from '@src/screens/chat/components/BackButton';
import ChatTitle from '@src/screens/chat/components/ChatTitle';
import SelfMessage from '@src/screens/chat/components/SelfMessage';
import AnotherMessage from '@src/screens/chat/components/AnotherMessage';
import BottomChatBar from '@src/screens/chat/components/BottomChatBar';

type Props = {};

const WithStrangerChatScreen = () => {
    const [viewVisible, setViewVisible] = useState(false);
    const [modal1Visible, setModal1Visible] = useState(false);
    const [modal2Visible, setModal2Visible] = useState(false);
    const [modal3Visible, setModal3Visible] = useState(false);

    function deleteConversationAlert() {
        Alert.alert('Notice', 'Are you sure you want to delete this conversation?', [
            {text: 'OK', onPress: () => console.log('OK Pressed')},
            {text: 'Cancel', onPress: () => console.log('Cancel Pressed')},
        ]);
    }

    function reportAlert() {
        Alert.alert('Notice', 'Are you sure you want to report this person?', [
            {text: 'OK', onPress: () => setModal1Visible(true)},
            {text: 'Cancel', onPress: () => setModal1Visible(false)},
        ]);
    }

    return (
        <SafeAreaView style={styles.container}>
            <Modal animationType="fade" transparent={true} visible={modal1Visible}>
                <View style={styles.centeredView}>
                    <KeyboardAvoidingView enabled behavior={Platform.OS === 'ios' ? 'padding' : 'height'}>
                        <View style={styles.modalView}>
                            <TouchableOpacity style={styles.cancel_button}>
                                <Text style={styles.cancel_text} onPress={() => setModal1Visible(!modal1Visible)}>
                                    Cancel
                                </Text>
                            </TouchableOpacity>

                            <Text style={styles.please_text}>Please type your problem</Text>

                            <TextInput style={styles.problem_input} numberOfLines={1} />

                            <TouchableOpacity
                                style={styles.send_button}
                                onPress={() => {
                                    setModal1Visible(false);
                                    setModal2Visible(true);
                                }}>
                                <Text
                                    style={{
                                        fontSize: 20,
                                        fontWeight: '600',
                                        color: '#1D325E',
                                        alignSelf: 'center',
                                        justifyContent: 'center',
                                    }}>
                                    Continue
                                </Text>
                            </TouchableOpacity>
                        </View>
                    </KeyboardAvoidingView>
                </View>
            </Modal>

            <Modal animationType="fade" transparent={true} visible={modal2Visible}>
                <View style={styles.centeredView}>
                    <View style={styles.modalView}>
                        <Text style={styles.notice_text}>Notice</Text>
                        <Text style={styles.upload_text}>Upload the picture that describe your problem.</Text>
                        {/* Chưa làm chức năng up ảnh */}
                        <TouchableOpacity style={styles.add_button}>
                            <Image source={IMAGES.plus} />
                        </TouchableOpacity>
                        <TouchableOpacity
                            onPress={() => {
                                setModal2Visible(false);
                                setModal1Visible(false);
                                setModal3Visible(true);
                            }}>
                            <Text
                                style={{
                                    fontSize: 20,
                                    fontWeight: '600',
                                    color: '#1D325E',
                                    alignSelf: 'center',
                                    justifyContent: 'center',
                                    marginTop: 6,
                                }}>
                                Send
                            </Text>
                        </TouchableOpacity>
                    </View>
                </View>
            </Modal>

            <Modal animationType="fade" transparent={true} visible={modal3Visible}>
                <View style={styles.centeredView}>
                    <View
                        style={{
                            width: 278,
                            height: 116,
                            borderRadius: 10,
                            backgroundColor: '#F5F9FD',
                            alignItems: 'center',

                            shadowColor: '#000',
                            shadowOffset: {
                                width: 0,
                                height: 2,
                            },
                            shadowOpacity: 0.25,
                            shadowRadius: 4,
                            elevation: 5,
                        }}>
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
                    <BackButton />
                    <ChatTitle name={'Tan Mot Cu'} />
                </View>

                <TouchableOpacity style={styles.more_button} onPress={() => setViewVisible(!viewVisible)}>
                    <Image source={IMAGES.options} />
                </TouchableOpacity>

                <View style={styles.optionsContainer}>
                    {viewVisible ? (
                        <View style={styles.optionsView}>
                            <TouchableOpacity onPress={deleteConversationAlert}>
                                <Text style={styles.deleteOptionsText}>Delete conversation</Text>
                            </TouchableOpacity>

                            <Image source={IMAGES.line} style={{width: 140, marginTop: 6, marginLeft: 9}} />

                            <TouchableOpacity onPress={reportAlert}>
                                <Text style={styles.reportOptionsText}>Report</Text>
                            </TouchableOpacity>
                        </View>
                    ) : null}
                </View>
            </View>
            <Image source={IMAGES.line} style={styles.line} />

            <ScrollView>
                <AnotherMessage message="Hi there" />

                <SelfMessage message="Hi, who are you?" />

                <AnotherMessage message="My name is Doraemon and I am from the future!" />

                <SelfMessage message="That is amazing" />

                <AnotherMessage message="Yeah, do you wanna go to another earth?" />

                <SelfMessage message="That is amazing again" />
            </ScrollView>

            <BottomChatBar />
        </SafeAreaView>
    );
};

export default WithStrangerChatScreen;

const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: COLORS.gray_1,
    },
    optionsView: {
        justifyContent: 'center',
        width: scaleSize(160),
        height: scaleSize(70),
        borderRadius: scaleSize(10),
        backgroundColor: '#E9F0F7',
        position: 'relative',
        marginTop: scaleSize(10),

        shadowColor: '#000',
        shadowOffset: {
            width: 4,
            height: 4,
        },
        shadowOpacity: 0.48,
        elevation: 16,
    },
    top: {
        marginTop: scaleSize(22),
        alignItems: 'center',
        justifyContent: 'space-between',
        flexDirection: 'row',
        position: 'relative',
        zIndex: 2,
    },
    more_button: {
        height: scaleSize(40),
        width: scaleSize(40),
        borderRadius: scaleSize(40),
        backgroundColor: '#E9F0F7',
        alignItems: 'center',
        justifyContent: 'center',
        marginRight: scaleSize(17),

        shadowOffset: {
            width: 2,
            height: 2,
        },
        shadowOpacity: 0.3,
        elevation: 5,
        shadowColor: '#8A9BBD',
    },
    line: {
        alignSelf: 'center',
        justifyContent: 'center',
        marginTop: scaleSize(12),
    },
    optionsContainer: {
        top: scaleSize(50),
        right: scaleSize(11),
        justifyContent: 'center',
        position: 'absolute',
        zIndex: 2,
    },

    deleteOptionsText: {
        fontSize: scaleSize(14),
        fontWeight: '500',
        color: '#8F9BB2',
        marginLeft: scaleSize(9),
    },
    reportOptionsText: {
        fontSize: scaleSize(14),
        fontWeight: '500',
        color: '#8F9BB2',
        marginLeft: scaleSize(9),
        marginTop: scaleSize(5),
    },

    centeredView: {
        flex: 1,
        justifyContent: 'center',
        alignItems: 'center',
        marginTop: scaleSize(22),
    },
    modalView: {
        width: scaleSize(318),
        height: scaleSize(192),
        borderRadius: scaleSize(10),
        backgroundColor: '#F5F9FD',

        shadowColor: '#000',
        shadowOffset: {
            width: 0,
            height: 2,
        },
        shadowOpacity: 0.25,
        shadowRadius: 4,
        elevation: 5,
    },
    cancel_button: {
        marginLeft: scaleSize(252),
        marginTop: scaleSize(11),
        width: scaleSize(56),
        height: scaleSize(21),
    },
    cancel_text: {
        fontSize: scaleSize(18),
        fontWeight: '500',
        color: '#1D325E',
    },
    please_text: {
        marginLeft: scaleSize(15),
        marginTop: scaleSize(9),
        fontSize: scaleSize(18),
        fontWeight: 'normal',
        color: '#1D325E',
    },
    problem_input: {
        width: scaleSize(280),
        height: scaleSize(58),
        borderRadius: scaleSize(15),
        backgroundColor: '#E9F0F7',
        marginLeft: scaleSize(15),
        marginTop: scaleSize(3),
        padding: scaleSize(10),
    },
    send_button: {
        width: scaleSize(168),
        height: scaleSize(40),
        alignItems: 'center',
        justifyContent: 'center',
        alignSelf: 'center',
        marginTop: scaleSize(16),
    },
    notice_text: {
        fontSize: scaleSize(22),
        fontWeight: '600',
        color: '#1D325E',
        alignSelf: 'center',
        marginTop: scaleSize(11),
    },
    upload_text: {
        fontSize: scaleSize(18),
        fontWeight: 'normal',
        color: '#1D325E',
        alignSelf: 'center',
        flexWrap: 'wrap',
        textAlign: 'center',
        width: scaleSize(280),
        marginTop: scaleSize(9),
    },
    add_button: {
        width: scaleSize(62),
        height: scaleSize(49),
        borderRadius: scaleSize(10),
        backgroundColor: '#E9F0F7',
        alignSelf: 'center',
        alignItems: 'center',
        justifyContent: 'center',
        marginTop: scaleSize(11),

        shadowOffset: {
            width: 3,
            height: 3,
        },
    },
    sorry_text: {
        fontSize: scaleSize(18),
        color: '#1D325E',
        marginTop: scaleSize(33),
    },
    ok_text: {
        fontSize: scaleSize(22),
        fontWeight: '600',
        color: '#0B7DDF',
    },
});
