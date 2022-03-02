import React from 'react';
import {View, FlatList, StyleSheet, Text, Image} from 'react-native';
import ContactData from './ContactData';
import {COLORS, FONTS} from '@src/assets/const';

const ContactList = () => {
    const renderItem = ({item}) => {
        return (
            <View style={styles.userDataContainer}>
                <Image source={item.image} style={styles.userAvatar} />
                <View style={styles.userDetailsContainer}>
                    <Text style={styles.userName}>{item.username}</Text>
                    <Text style={styles.LastMessage}>{item.lastMessage}</Text>
                </View>
            </View>
        );
    };
    const SeperateLine = () => {
        return (
            <View
                style={{
                    height: 2,
                    width: '90%',
                    backgroundColor: COLORS.black_2,
                    alignSelf: 'center',
                    opacity: 0.1,
                }}
            />
        );
    };

    return (
        <FlatList
            data={ContactData}
            renderItem={renderItem}
            keyExtractor={item => item.key}
            ItemSeparatorComponent={SeperateLine}
        />
    );
};
export default ContactList;

const styles = StyleSheet.create({
    userDataContainer: {
        display: 'flex',
        flexDirection: 'row',
        padding: 15,
        alignItems: 'center',
    },
    userAvatar: {
        height: 74,
        width: 74,
        borderRadius: 44.5,
    },
    userDetailsContainer: {
        marginLeft: 15,
    },
    userName: {
        ...FONTS.h3,
        color: COLORS.black_1,
    },
    LastMessage: {
        ...FONTS.body4,
        color: COLORS.gray_2,
    },
});
