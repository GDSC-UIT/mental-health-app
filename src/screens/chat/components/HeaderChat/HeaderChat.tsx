import {scaleSize} from '@core/utils';
import {COLORS, STYLES} from '@src/assets/const';
import {IMAGES} from '@src/assets';
import React, {useState} from 'react';
import {
    View,
    StyleSheet,
    Text,
    TouchableOpacity,
    Image,
    Modal,
    KeyboardAvoidingView,
    TextInput,
    Alert,
} from 'react-native';
import {useNavigation} from '@react-navigation/native';
import {useTranslation} from 'react-i18next';
import Box from '@src/components/Box';
import BackButton from '@src/screens/chat/components/BackButton';
import ChatTitle from '@src/screens/chat/components/HeaderChat/ChatTitle';
import IconButton from '@src/components/IconButton';
import Ionicons from 'react-native-vector-icons/Ionicons';
import {WithUserChatScreenProps} from '@src/navigation/AuthStackParams';

type Props = {};

const HeaderChat: React.FC<Props> = props => {
    const navigation = useNavigation<WithUserChatScreenProps['navigation']>();
    const {t} = useTranslation();

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
        <Box bgC={COLORS.gray_1} safeArea={false}>
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
                                        fontSize: scaleSize(20),
                                        fontWeight: '600',
                                        color: COLORS.black_2,
                                        alignSelf: 'center',
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
                            <Ionicons name="add-outline" size={30} />
                        </TouchableOpacity>
                        <TouchableOpacity
                            onPress={() => {
                                setModal2Visible(false);
                                setModal1Visible(false);
                                setModal3Visible(true);
                            }}>
                            <Text
                                style={{
                                    fontSize: scaleSize(20),
                                    fontWeight: '600',
                                    color: COLORS.black_2,
                                    alignSelf: 'center',
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
                            width: scaleSize(278),
                            height: scaleSize(116),
                            borderRadius: scaleSize(10),
                            backgroundColor: COLORS.white_1,
                            alignItems: 'center',
                            ...STYLES.deepShadow,
                        }}>
                        <Text style={styles.sorry_text}>Sorry about your problem.</Text>

                        <TouchableOpacity style={{marginTop: 26}} onPress={() => navigation.navigate('ExpertChatHome')}>
                            <Text style={styles.ok_text}>OK</Text>
                        </TouchableOpacity>
                    </View>
                </View>
            </Modal>

            <View
                style={{
                    flexDirection: 'row',
                    justifyContent: 'space-between',
                    alignItems: 'center',
                    position: 'relative',
                }}>
                <View style={{flexDirection: 'row', alignItems: 'center'}}>
                    <BackButton />
                    <ChatTitle name={'Kary'} />
                </View>
                <IconButton
                    style={styles.button}
                    onPress={() => setViewVisible(!viewVisible)}
                    icon={<Ionicons name="ellipsis-horizontal" size={scaleSize(30)} color={COLORS.dark_gray_2} />}
                />
                <View
                    style={{
                        top: scaleSize(55),
                        right: scaleSize(12),
                        position: 'absolute',
                        zIndex: 10,
                    }}>
                    {viewVisible ? (
                        <View style={styles.optionsView}>
                            <TouchableOpacity onPress={() => navigation.push('UserProfile')}>
                                <Text style={styles.optionsText}>{t('Go to profile')}</Text>
                            </TouchableOpacity>
                            <Image source={IMAGES.line} style={{width: 140, marginTop: 6, marginLeft: 9}} />
                            <TouchableOpacity onPress={deleteConversationAlert}>
                                <Text style={[styles.optionsText, {marginTop: scaleSize(5)}]}>
                                    {t('Delete conversation')}
                                </Text>
                            </TouchableOpacity>
                            <Image source={IMAGES.line} style={{width: 140, marginTop: 6, marginLeft: 9}} />
                            <TouchableOpacity onPress={reportAlert}>
                                <Text style={[styles.optionsText, {paddingTop: scaleSize(5)}]}>{t('Report')}</Text>
                            </TouchableOpacity>
                        </View>
                    ) : null}
                </View>
            </View>
            <Image source={IMAGES.line} style={styles.line} />
        </Box>
    );
};

export default HeaderChat;

const styles = StyleSheet.create({
    line: {
        alignSelf: 'center',
        marginTop: scaleSize(10),
        zIndex: -10,
    },
    optionsView: {
        justifyContent: 'center',
        width: scaleSize(160),
        height: 'auto',
        borderRadius: scaleSize(10),
        backgroundColor: COLORS.white_3,
        paddingVertical: scaleSize(10),
        ...STYLES.deepShadow,
    },
    button: {
        height: scaleSize(40),
        width: scaleSize(40),
        borderRadius: scaleSize(40),
        marginHorizontal: scaleSize(17),
        ...STYLES.deepShadow,
    },
    optionsText: {
        fontSize: scaleSize(14),
        fontWeight: '500',
        color: '#8F9BB2',
        marginLeft: scaleSize(9),
    },
    centeredView: {
        flex: 1,
        justifyContent: 'center',
        alignItems: 'center',
    },
    modalView: {
        width: scaleSize(318),
        height: scaleSize(192),
        borderRadius: scaleSize(10),
        backgroundColor: COLORS.white_1,
        ...STYLES.deepShadow,
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
        color: COLORS.black_2,
    },
    please_text: {
        marginLeft: scaleSize(15),
        marginTop: scaleSize(9),
        fontSize: scaleSize(18),
        color: COLORS.black_2,
    },
    problem_input: {
        width: scaleSize(280),
        height: scaleSize(58),
        borderRadius: scaleSize(15),
        backgroundColor: COLORS.white_3,
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
        color: COLORS.black_2,
        alignSelf: 'center',
        marginTop: scaleSize(11),
    },
    upload_text: {
        fontSize: scaleSize(18),
        color: COLORS.black_2,
        alignSelf: 'center',
        textAlign: 'center',
        flexWrap: 'wrap',
        width: scaleSize(280),
        marginTop: scaleSize(9),
    },
    add_button: {
        width: scaleSize(62),
        height: scaleSize(49),
        borderRadius: scaleSize(10),
        backgroundColor: COLORS.white_3,
        alignSelf: 'center',
        alignItems: 'center',
        justifyContent: 'center',
        marginVertical: scaleSize(11),
    },
    sorry_text: {
        fontSize: scaleSize(18),
        color: COLORS.black_2,
        marginTop: scaleSize(33),
    },
    ok_text: {
        fontSize: scaleSize(22),
        fontWeight: '600',
        color: '#0B7DDF',
    },
});
