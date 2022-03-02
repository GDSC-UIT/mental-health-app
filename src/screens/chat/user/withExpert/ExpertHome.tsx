import {scaleSize} from '@core/utils';
import {IMAGES} from '@src/assets';
import {COLORS} from '@src/assets/const';
import Button from '@src/components/Button';
import React from 'react';
import {Alert, Image, StyleSheet, Text, View, TouchableOpacity, TextInput, ScrollView} from 'react-native';
import {SafeAreaView} from 'react-native-safe-area-context';
import BackButton from '../components/BackButton';
import ExpertCard from './components/ExpertCard';

const ExpertChat = () => {
    return (
        <SafeAreaView style={styles.container}>
            <View style={styles.top}>
                <BackButton />

                <Text style={styles.label}>With an expert</Text>
            </View>

            <View style={styles.search_container}>
                <Image source={IMAGES.search} style={{marginLeft: 13}} />
                <TextInput placeholder="Search" style={styles.search_input} />
            </View>

            <ScrollView>
                <ExpertCard name={'Karry'} />

                <Image source={IMAGES.line} style={styles.line} />

                <ExpertCard name={'Joyce'} />

                <Image source={IMAGES.line} style={styles.line} />

                <ExpertCard name={'Jackson'} />

                <Image source={IMAGES.line} style={styles.line} />

                <ExpertCard name={'Taylor'} />

                <Image source={IMAGES.line} style={styles.line} />

                <ExpertCard name={'Hyu'} />

                <Image source={IMAGES.line} style={styles.line} />

                <ExpertCard name={'The Vi'} />
            </ScrollView>

            <Button title={'Random Expert'} style={{marginBottom: 30, width: 211, height: 44, alignSelf: 'center'}} />
            {/* <TouchableOpacity style={styles.random_button}>
                <Text style={styles.random_text}>Random expert</Text>
            </TouchableOpacity> */}
        </SafeAreaView>
    );
};

export default ExpertChat;

const styles = StyleSheet.create({
    container: {
        backgroundColor: COLORS.gray_1,
        flex: 1,
    },
    top: {
        marginTop: 20,
        alignItems: 'center',
        flexDirection: 'row',
    },
    back_button: {
        height: 40,
        width: 40,
        borderRadius: 60,
        backgroundColor: '#E9F0F7',
        marginLeft: 21,
        justifyContent: 'center',
        alignItems: 'center',

        shadowOffset: {
            width: 3,
            height: 3,
        },
        shadowOpacity: 0.48,
        elevation: 10,
        shadowColor: '#8A9BBD',
    },
    back_button_img: {
        height: 20,
        width: 20,
        alignSelf: 'center',
    },
    label: {
        fontSize: 24,
        fontFamily: 'Roboto',
        fontWeight: 'bold',
        color: '#193566',
        marginLeft: 60,
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
        marginTop: 25,
        alignItems: 'center',
    },
    line: {
        justifyContent: 'center',
        alignSelf: 'center',
        marginTop: 9,
    },
});
