import {scaleSize} from '@core/utils';
import {IMAGES} from '@src/assets';
import {COLORS, FONTS} from '@src/assets/const';
import Box from '@src/components/Box';
import Button from '@src/components/Button';
import React from 'react';
import {Image, StyleSheet, Text, TextInput, View} from 'react-native';

const UserChatHomeScreen = ({navigation}) => {
    return (
        <Box bgColor={COLORS.gray_1} container>
            <Text style={styles.new_label}>New Contact</Text>
            <View>
                <Button
                    title={'With stranger'}
                    style={styles.button}
                    onPress={() => navigation.navigate('WithStrangerChat')}
                    textStyle={{fontWeight: '500', fontFamily: 'Roboto'}}
                />
                <Button
                    title={'With expert'}
                    style={styles.button}
                    onPress={() => navigation.navigate('WithExpertChat')}
                    textStyle={{fontWeight: '500', fontFamily: 'Roboto'}}
                />
            </View>
            <Text style={styles.msg_label}>Message</Text>

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
        </Box>
    );
};

export default UserChatHomeScreen;

const styles = StyleSheet.create({
    container: {
        backgroundColor: COLORS.gray_1,
        flex: 1,
    },
    new_label: {
        ...FONTS.subtitle2,
        color: '#193566',
        marginLeft: scaleSize(25),
        marginTop: scaleSize(20),
    },
    msg_label: {
        fontSize: scaleSize(25),
        fontFamily: 'Roboto',
        fontWeight: '500',
        color: '#193566',
        marginLeft: scaleSize(25),
        marginTop: scaleSize(21),
    },
    button: {
        width: scaleSize(211),
        height: scaleSize(44),
        borderRadius: scaleSize(60),
        marginTop: scaleSize(23),
        alignSelf: 'center',
        alignItems: 'center',
        shadowOffset: {
            width: scaleSize(3),
            height: scaleSize(3),
        },
        shadowOpacity: 0.48,
        elevation: 10,
        shadowColor: '#8A9BBD',
    },
    button_text: {
        fontSize: scaleSize(20),
        color: '#8F9BB2',
    },

    search_input: {
        marginTop: scaleSize(11),
        fontSize: scaleSize(20),
        fontFamily: 'Roboto',
        color: '#8F9BB2',
        marginLeft: scaleSize(13),
    },
    search_container: {
        width: scaleSize(359),
        height: scaleSize(40),
        borderRadius: scaleSize(60),
        backgroundColor: '#E9F0F7',
        borderColor: '#8F9BB2',
        borderWidth: scaleSize(1),
        alignSelf: 'center',
        flexDirection: 'row',
        marginTop: scaleSize(16),
        alignItems: 'center',
    },
    search_img: {
        width: scaleSize(18),
        height: scaleSize(18),
        alignSelf: 'center',
        marginLeft: scaleSize(13),
    },

    container_msg: {
        flexDirection: 'row',
        marginTop: scaleSize(38),
    },
    profile_img: {
        height: scaleSize(74),
        width: scaleSize(74),
        marginLeft: scaleSize(22),
    },

    name_container: {
        marginLeft: scaleSize(27),
        alignItems: 'flex-start',
        width: scaleSize(252),
        height: scaleSize(71),
        flexWrap: 'wrap',
    },
    name_text: {
        fontSize: scaleSize(22),
        fontWeight: '500',
        fontFamily: 'Roboto',
        color: '#193566',
    },
    message: {
        fontSize: scaleSize(17),
        fontWeight: 'normal',
        fontFamily: 'Roboto',
        color: '#8F9BB2',
    },
    line: {
        width: scaleSize(358),
        height: scaleSize(1),
    },
});
