import {scaleSize} from '@core/utils';
import {IMAGES} from '@src/assets';
import {COLORS, SIZES} from '@src/assets/const';
import Button from '@src/components/Button';
import React from 'react';
import {
    Alert,
    Image,
    ListRenderItem,
    StyleSheet,
    Text,
    View,
    TouchableOpacity,
    ScrollView,
    FlatList,
} from 'react-native';
import {SafeAreaView} from 'react-native-safe-area-context';
import BackButton from '../../chat/components/BackButton';
import AvatarContainer from '../components/AvatarContainer';
import Events from '../components/events';
import {Event} from '../components/types';
import EventCard from '../components/EventCard';
import {useTranslation} from 'react-i18next';

interface ExpertCardProps {
    image: string;
    name: string;
    email: string;
    about: string;
}

const UserProfileScreen: React.FC<ExpertCardProps> = props => {
    const {image, name, email, about} = props;

    const renderItem = (item: Event) => {
        return <EventCard event={item} key={item.id} />;
    };

    const {t} = useTranslation();
    return (
        <SafeAreaView style={styles.container}>
            <TouchableOpacity style={styles.editButton}>
                <Image source={IMAGES.edit} />
            </TouchableOpacity>

            <ScrollView contentContainerStyle={{paddingBottom: SIZES.bottomBarHeight + scaleSize(20)}}>
                <AvatarContainer name="Tan Cu" />

                <Text style={styles.aboutText}>{t('About')}</Text>

                <View style={styles.emailDescriptionContainer}>
                    <Text style={styles.descriptionText}>
                        {t('Email')}: {email}
                    </Text>
                </View>

                <Button
                    title={t('Emotion Diary')}
                    style={{marginTop: 25, width: scaleSize(180), alignSelf: 'center'}}
                />

                <Text style={styles.aboutText}>{t('Interested Posts and Events')}</Text>

                {/* <FlatList
                    data={Events}
                    renderItem={renderItem}
                    keyExtractor={item => item.id}
                    style={{marginTop: 28}}
                    contentContainerStyle={{
                        paddingBottom: SIZES.bottomBarHeight,
                    }}
                /> */}
                {Events.map(renderItem)}
            </ScrollView>

            {/* <Text style={styles.noEventText}>No interested posts or events</Text> */}
        </SafeAreaView>
    );
};

export default UserProfileScreen;

const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: COLORS.gray_1,
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
    descriptionText: {
        fontSize: 20,
        fontFamily: 'Roboto',
        fontWeight: '500',
        color: '#334C78',
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
    noEventText: {
        fontSize: 18,
        fontFamily: 'Roboto',
        color: '#1D325E',
        alignSelf: 'center',
        justifyContent: 'center',
        marginTop: 25,
    },
});
