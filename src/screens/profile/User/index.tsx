import {scaleSize} from '@core/utils';
import { IMAGES } from '@src/assets';
import {COLORS, FONTS, STYLES} from '@src/assets/const';
import Button from '@src/components/Button';
import {UserProfileScreenProps} from '@src/navigation/user/type';
import Events from '@src/screens/explore/event/events';
import {Event} from '@src/screens/explore/event/types';
import React, { useState } from 'react';
import {useTranslation} from 'react-i18next';
import {Image, ScrollView, StyleSheet, Text, TouchableOpacity, View} from 'react-native';
import {SafeAreaView} from 'react-native-safe-area-context';
import Ionicons from 'react-native-vector-icons/Ionicons';
import AvatarContainer from '../components/AvatarContainer';
import EventCard from '../components/EventCard';

const UserProfileScreen: React.FC<UserProfileScreenProps> = ({navigation}) => {
    const {t} = useTranslation();
    const [optionsViewVisible, setOptionsViewVisible] = useState(false);
    const renderItem = (item: Event) => {
        return <EventCard event={item} key={item.id} />;
    };
    return (
        <SafeAreaView style={styles.container}>
            <ScrollView /*contentContainerStyle={{paddingBottom: SIZES.bottomBarHeight + scaleSize(20)}}*/>
                <View style={{position: 'relative'}}>
                    <TouchableOpacity
                        style={styles.editButton}
                        onPress={() => setOptionsViewVisible(!optionsViewVisible)}
                    >
                        {<Ionicons name="ellipsis-horizontal" size={30} />}
                    </TouchableOpacity>
                    
                    <View 
                        style={{
                            top: scaleSize(65),
                            right: scaleSize(12),
                            position: 'absolute',
                            zIndex: 10,
                    }}>
                        {
                            optionsViewVisible? (
                                <View style={styles.optionsView}>
                                    <TouchableOpacity onPress={() => {
                                        navigation.navigate('UserProfile', {
                                            screen: 'EditProfile',}
                                        ), 
                                        setOptionsViewVisible(false)
                                    }}>
                                        <Text style={styles.optionsText}>{t('Edit Profile')}</Text>
                                    </TouchableOpacity>
                                    <Image source={IMAGES.optionsLine} style={styles.lineOption}/>
                                    <TouchableOpacity>
                                        <Text style={styles.optionsText}>{t('Change to Vietnamese')}</Text>
                                    </TouchableOpacity>
                                </View>
                            ) : null
                        }
                    </View>
                </View>

                <AvatarContainer name="Tan User" image="" style={{zIndex: -10}} />
                
                <Text style={styles.aboutText}>{t('About me')}</Text>
                <View style={styles.emailDescriptionContainer}>
                    <Text style={styles.descriptionText}>
                        {t('Email')}: {'@gmail.com'}
                    </Text>
                </View>

                <Button
                    title="Emotion Diary"
                    style={{
                        width: scaleSize(152),
                        height: scaleSize(40),
                        alignSelf: 'center',
                        marginTop: scaleSize(25),
                    }}
                    textStyle={{color: COLORS.dark_blue_2, fontSize: scaleSize(16)}}
                    onPress={() =>
                        navigation.navigate('UserProfile', {
                            screen: 'EmotionDiary',
                        })
                    }
                />

                
                <View style={{paddingHorizontal: scaleSize(16), marginTop: scaleSize(20)}}>
                    <Text style={styles.activitiesText}>{t('Interested Posts and Events')}</Text>
                    {
                        Events.length?(
                            <View>{Events.map(renderItem)}</View>
                        ) : <Text style={styles.noEventText}>No interested posts or events</Text>
                    }
                </View>

                {/* <Text style={styles.noEventText}>No posts or events</Text> */}
            </ScrollView>
        </SafeAreaView>
    );
};

export default UserProfileScreen;

const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: COLORS.gray_1,
    },
    emailDescriptionContainer: {
        width: scaleSize(358),
        height: 'auto',
        borderRadius: 30,
        alignSelf: 'center',
        marginTop: scaleSize(11),
        backgroundColor: '#F5F9FD',
        justifyContent: 'center',
        padding: scaleSize(15),
        minHeight: scaleSize(48),
    },
    descriptionText: {
        ...FONTS.body3,
        fontSize: scaleSize(20),
        color: COLORS.dark_blue_2,
    },
    activitiesText: {
        ...FONTS.body3,
        fontSize: scaleSize(20),
        fontFamily: 'Roboto-Medium',
        color: COLORS.dark_gray_2,
        marginTop: scaleSize(29)
    },
    editButton: {
        height: scaleSize(40),
        width: scaleSize(40),
        marginTop: scaleSize(16),
        marginRight: scaleSize(16),
        alignSelf: 'flex-end',
        borderRadius: 60,
        backgroundColor: '#F5F9FD',
        alignItems: 'center',
        justifyContent: 'center',
        ...STYLES.deepShadow
    },
    aboutText: {
        fontSize: scaleSize(20),
        fontFamily: 'Roboto',
        fontWeight: '500',
        color: '#8F9BB2',
        marginLeft: scaleSize(16),
        marginTop: scaleSize(30),
    },
    optionsButton: {
        height: scaleSize(40),
        width: scaleSize(40),
        borderRadius: scaleSize(40),
        marginHorizontal: scaleSize(17),
        ...STYLES.deepShadow,
    },
    optionsView: {
        justifyContent: 'space-between',
        width: scaleSize(200),
        height: 'auto',
        borderRadius: scaleSize(10),
        backgroundColor: COLORS.white_3,
        paddingVertical: scaleSize(10),
        ...STYLES.deepShadow,
    },
    optionsText: {
        ...FONTS.subtitle4,
        fontSize: scaleSize(17),
        color: COLORS.dark_gray_2,
        marginLeft: scaleSize(10),
    },
    lineOption: {
        width: scaleSize(180),
        marginVertical: scaleSize(5),
        marginLeft: scaleSize(9),
    },
    noEventText: {
        ...FONTS.body1,
        fontSize: scaleSize(18),
        color: '#1D325E',
        alignSelf: 'center',
        marginTop: scaleSize(25)
    }
});
