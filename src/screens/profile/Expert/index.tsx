import {scaleSize} from '@core/utils';
import {useNavigation} from '@react-navigation/native';
import {COLORS, RANDOM_IMAGE, SIZES} from '@src/assets/const';
import {ExpertMainTabProps} from '@src/navigation/expert/type';
import React from 'react';
import {useTranslation} from 'react-i18next';
import {ScrollView, StyleSheet, Text, TouchableOpacity, View} from 'react-native';
import {SafeAreaView} from 'react-native-safe-area-context';
import Ionicons from 'react-native-vector-icons/Ionicons';
import AvatarContainer from '../components/AvatarContainer';
import EventCard from '../components/EventCard';
import Events from '../components/events';
import {Event} from '../components/types';

const ExpertProfileScreen: React.FC = () => {
    const navigation = useNavigation<ExpertMainTabProps<'Profile'>['navigation']>();
    const renderItem = (item: Event) => {
        return <EventCard event={item} key={item.id} />;
    };
    const {t} = useTranslation();
    return (
        <SafeAreaView style={styles.container}>
            <ScrollView contentContainerStyle={{paddingBottom: SIZES.bottomBarHeight + scaleSize(20)}}>
                <TouchableOpacity style={styles.editButton} onPress={() => navigation.navigate('EditProfile')}>
                    {<Ionicons name="pencil-outline" size={20} />}
                </TouchableOpacity>

                <AvatarContainer name="Tan Expert" image={RANDOM_IMAGE} />

                <Text style={styles.aboutText}>{t('About me')}</Text>

                <View style={styles.emailDescriptionContainer}>
                    <Text style={styles.descriptionText}>
                        {t('Email')}: {'@gmail.com'}
                    </Text>
                </View>

                <View style={styles.aboutDescriptionContainer}>
                    <Text style={styles.descriptionText}>
                        {t('About')}: {'Dat DT'}
                    </Text>
                </View>

                <Text style={styles.activitiesText}>{t('Activities')}</Text>

                {Events.map(renderItem)}

                {/* <Text style={styles.noEventText}>No posts or events</Text> */}
            </ScrollView>
        </SafeAreaView>
    );
};

export default ExpertProfileScreen;

const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: COLORS.gray_1,
    },
    avatarContainer: {
        width: scaleSize(232),
        height: scaleSize(160),
        borderRadius: 10,
        backgroundColor: '#F5F9FD',
        alignSelf: 'center',
        marginTop: 20,
    },
    profileImage: {
        width: scaleSize(89),
        height: scaleSize(89),
        borderRadius: scaleSize(89) / 2,
        marginTop: 13,
        alignSelf: 'center',
    },
    name: {
        fontSize: scaleSize(26),
        fontFamily: 'Roboto',
        fontWeight: 'bold',
        color: '#334C78',
        alignSelf: 'center',
    },
    aboutText: {
        fontSize: scaleSize(20),
        fontFamily: 'Roboto',
        fontWeight: '500',
        color: '#8F9BB2',
        marginLeft: scaleSize(16),
        marginTop: scaleSize(30),
    },
    emailDescriptionContainer: {
        width: scaleSize(358),
        height: scaleSize(48),
        borderRadius: 60,
        alignSelf: 'center',
        marginTop: scaleSize(11),
        backgroundColor: '#F5F9FD',
        justifyContent: 'center',
        paddingLeft: scaleSize(15),
    },
    aboutDescriptionContainer: {
        width: scaleSize(358),
        height: 'auto',
        borderRadius: 60,
        alignSelf: 'center',
        marginTop: scaleSize(11),
        backgroundColor: '#F5F9FD',
        justifyContent: 'center',
        paddingLeft: scaleSize(15),
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
        marginTop: scaleSize(28),
    },
    editButton: {
        height: scaleSize(40),
        width: scaleSize(40),
        marginTop: 16,
        marginRight: 16,
        alignSelf: 'flex-end',
        borderRadius: 60,
        backgroundColor: '#F5F9FD',
        alignItems: 'center',
        justifyContent: 'center',
    },
});
