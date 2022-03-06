import {scaleSize} from '@core/utils';
import {IMAGES} from '@src/assets';
import {COLORS} from '@src/assets/const';
import React from 'react';
import {Alert, Image, StyleSheet, Text, View, TouchableOpacity, TextInput} from 'react-native';
import {SafeAreaView} from 'react-native-safe-area-context';

const UserChatHome = () => {
    return (
        <SafeAreaView style={styles.container}>
            <View>
                <Text style={styles.new_label}>New Contact</Text>
            </View>
            <View>
                <TouchableOpacity style={styles.stranger_button}>
                    <Text style={styles.button_text}>With stranger</Text>
                </TouchableOpacity>
                <TouchableOpacity style={styles.expert_button}>
                    <Text style={styles.button_text}>With expert</Text>
                </TouchableOpacity>
            </View>
            <View>
                <Text style={styles.msg_label}>Message</Text>
            </View>

            <View style={styles.search_container}>
                <Image source={IMAGES.search} style={styles.search_img} />

                <TextInput placeholder="Search" style={styles.search_input} />
            </View>

            <View style={styles.container_msg}>
                <Image source={IMAGES.user_chat} style={styles.profile_img} />

                <View style={styles.name_container}>
                    <Text style={styles.name_text}>The Vi</Text>
                    <Text style={styles.message}>Sai Gon than yeu</Text>
                </View>
                <Image source={IMAGES.line} style={styles.line} />
            </View>
        </SafeAreaView>
    );
};

export default UserChatHome;

const styles = StyleSheet.create({
    container: {
        backgroundColor: COLORS.gray_1,
        flex: 1,
        // justifyContent: 'center',
        // alignItems: 'center',
    },
    new_label: {
        fontSize: 25,
        fontFamily: 'Roboto',
        fontWeight: '500',
        color: '#193566',
        marginLeft: 25,
        marginTop: 20,
    },
    msg_label: {
        fontSize: 25,
        fontFamily: 'Roboto',
        fontWeight: '500',
        color: '#193566',
        marginLeft: 25,
        marginTop: 21,
    },
    stranger_button: {
        width: 211,
        height: 44,
        borderRadius: 60,
        marginTop: 14,
        alignSelf: 'center',
        alignItems: 'center',
        backgroundColor: '#E9F0F7',
        justifyContent: 'center',

        shadowOffset: {
            width: 3,
            height: 3,
        },
        shadowOpacity: 0.48,
        elevation: 10,
        shadowColor: '#8A9BBD',
    },
    expert_button: {
        width: 211,
        height: 44,
        borderRadius: 60,
        marginTop: 23,
        alignSelf: 'center',
        alignItems: 'center',
        backgroundColor: '#E9F0F7',
        justifyContent: 'center',

        shadowOffset: {
            width: 3,
            height: 3,
        },
        shadowOpacity: 0.48,
        elevation: 10,
        shadowColor: '#8A9BBD',
    },
    button_text: {
        fontSize: 20,
        fontFamily: 'Roboto',
        fontWeight: '500',
        color: '#8F9BB2',
    },

    search_input: {
        marginTop: 11,
        fontSize: 20,
        fontFamily: 'Roboto',
        color: '#8F9BB2',
        marginLeft: 13,
    },
    search_container: {
        width: 359,
        height: 40,
        borderRadius: 60,
        backgroundColor: '#E9F0F7',
        borderColor: '#8F9BB2',
        borderWidth: 1,
        alignSelf: 'center',
        flexDirection: 'row',
        marginTop: 16,
        alignItems: 'center',
    },
    search_img: {
        width: 18,
        height: 18,
        alignSelf: 'center',
        marginLeft: 13,
    },

    container_msg: {
        flexDirection: 'row',
        marginTop: 38,
    },
    profile_img: {
        height: 74,
        width: 74,
        marginLeft: 22,
    },

    name_container: {
        marginLeft: 27,
        alignItems: 'flex-start',
        width: 252,
        height: 71,
        flexWrap: 'wrap',
    },
    name_text: {
        fontSize: 22,
        fontWeight: '500',
        fontFamily: 'Roboto',
        color: '#193566',
    },
    message: {
        fontSize: 17,
        fontWeight: 'normal',
        fontFamily: 'Roboto',
        color: '#8F9BB2',
    },
    line: {
        width: 358,
        height: 1,
    },
});
