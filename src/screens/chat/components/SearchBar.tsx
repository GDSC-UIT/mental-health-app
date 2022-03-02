import {StyleSheet, Text, View, Image, TextInput} from 'react-native';
import React from 'react';
import {COLORS, FONTS} from '@src/assets/const';
import {IMAGES} from '@src/assets';

//FIXME: thay doi thay components
const SearchBar = () => {
    return (
        <View style={styles.contentContainer}>
            <Image style={styles.SearchIcon} source={IMAGES.search_icon} />
            <TextInput placeholder="Search" style={styles.input} />
        </View>
    );
};

export default SearchBar;

const styles = StyleSheet.create({
    contentContainer: {
        flexDirection: 'row',
        backgroundColor: COLORS.gray_1,
        marginHorizontal: 15,
        borderRadius: 50,
        borderWidth: 1,
        borderColor: COLORS.dark_gray_1,
        height: 45,
    },
    SearchIcon: {
        width: 20,
        height: 20,
        alignSelf: 'center',
        marginLeft: 15,
        marginRight: 10,
    },
    input: {
        height: 40,
        padding: 1,
        ...FONTS.body3,
        alignSelf: 'center',
    },
});
