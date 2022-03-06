import {scaleSize} from '@core/utils';
import {IMAGES} from '@src/assets';
import {COLORS} from '@src/assets/const';
import Button from '@src/components/Button';
import React from 'react';
import {Alert, Image, StyleSheet, Text, View, TouchableOpacity, ScrollView} from 'react-native';
import {SafeAreaView} from 'react-native-safe-area-context';
import BackButton from '../components/BackButton';
import EventCard from './components/EventCard';
import ExpertCard from './components/ExpertCard';

interface ExpertProfileProps {
    image: string,
    name: string,
    email: string,
    about: string
};

const ExpertProfileChat: React.FC<ExpertProfileProps> = props => {
    const {image, name, email, about} = props;
    return (
        <SafeAreaView style={styles.container}>
            <View style={{marginTop: 16}}>
                <BackButton/>
            </View>
            <ScrollView>
                <View style={styles.avatarContainer}>
                    <Image 
                        // source={{uri: image}}
                        source={IMAGES.profile}
                        style={styles.profileImage}
                    />
                    <Text style={styles.name}>Tan Mot Cu</Text>
                </View>

                <Text style={styles.aboutText}>About me</Text>

                <View style={styles.emailDescriptionContainer}>
                    <Text style={styles.descriptionText}>Email: {email}</Text>
                </View>

                <View style={styles.aboutDescriptionContainer}>
                    <Text style={styles.descriptionText}>About: {about}</Text>
                </View>

                <Text style={styles.activitiesText}>Activities</Text>

                <EventCard date='Friday, Jan 21, 2022 at 22:41 PM' content='Know more about yourselft, How to be happier' style={{marginTop: 11}}/>
                
                <EventCard date='Friday, Jan 22, 2022 at 22:41 PM' content='Know more about yourselft, How to be happier' style={{marginTop: 14}}/>
            
                <EventCard date='Friday, Jan 22, 2022 at 22:41 PM' content='Know more about yourselft, How to be happier' style={{marginTop: 14}}/>
            </ScrollView>
        </SafeAreaView>
    );
};

export default ExpertProfileChat;

const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: COLORS.gray_1
    },
    avatarContainer: {
        width: scaleSize(232),
        height: scaleSize(160),
        borderRadius: 10,
        backgroundColor: '#F5F9FD',
        alignSelf: 'center',
        marginTop: 20
    },
    profileImage: {
        width: scaleSize(89),
        height: scaleSize(89),
        borderRadius: scaleSize(89)/2,
        marginTop: 13,
        alignSelf: 'center'
    },
    name: {
        fontSize: scaleSize(26),
        fontFamily: 'Roboto',
        fontWeight: 'bold',
        color: '#334C78',
        alignSelf: 'center'
    },
    aboutText: {
        fontSize: scaleSize(20),
        fontFamily: 'Roboto',
        fontWeight: '500',
        color: '#8F9BB2',
        marginLeft: scaleSize(16),
        marginTop: scaleSize(30)
    },
    emailDescriptionContainer: {
        width: scaleSize(358),
        height: scaleSize(48),
        borderRadius: 60,
        alignSelf: 'center',
        marginTop: scaleSize(11),
        backgroundColor: '#F5F9FD',
        justifyContent: 'center',
        paddingLeft: scaleSize(15)
    },
    aboutDescriptionContainer: {
        width: scaleSize(358),
        height: 'auto',
        borderRadius: 60,
        alignSelf: 'center',
        marginTop: scaleSize(11),
        backgroundColor: '#F5F9FD',
        justifyContent: 'center',
        paddingLeft: scaleSize(15)
    },
    descriptionText: {
        fontSize: scaleSize(20),
        fontFamily: 'Roboto',
        fontWeight: '500',
        color: '#334C78',
    },
    activitiesText: {
        fontSize: scaleSize(20),
        fontFamily: 'Roboto',
        fontWeight: '500',
        color: '#8F9BB2',
        marginLeft: scaleSize(16),
        marginTop: scaleSize(28)
    }
});