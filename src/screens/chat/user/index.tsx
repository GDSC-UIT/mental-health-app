import {scaleSize} from '@core/utils';
import {IMAGES} from '@src/assets';
import {COLORS, FONTS, STYLES} from '@src/assets/const';
import Box from '@src/components/Box';
import Button from '@src/components/Button';
import ContactList from '@src/screens/chat/components/ContactList';
import SearchBar from '@src/screens/chat/components/Search/SearchBar';
import React from 'react';
import {StyleSheet, Text} from 'react-native';
import {useNavigation} from '@react-navigation/native';
import {useTranslation} from 'react-i18next';

const UserChatHomeScreen = props => {
    const {t} = useTranslation();
    const navigation = useNavigation<ExpertChatScreenCompositeProps['navigation']>();

    return (
        <Box bgColor={COLORS.gray_1} container safeArea={true}>
            <Text style={styles.label}>{t('New Contact')}</Text>
            <Button
                title={t('With stranger')}
                style={styles.button}
                onPress={() =>
                    navigation.push('ChatStack', {
                        screen: 'MainChat',
                        params: {user: {role: 'user'}},
                    })
                }
                textStyle={{fontWeight: '600'}}
            />
            <Button
                title={t('With expert')}
                style={styles.button}
                onPress={() => navigation.push('ChatStack', {screen: 'ChatWithExpert'})}
                textStyle={{fontWeight: '600'}}
            />
            <Text style={styles.label}>{t('Messages')}</Text>

            <SearchBar />

            <ContactList
                onPress={() =>
                    navigation.push('ChatStack', {
                        screen: 'MainChat',
                        params: {user: {id: 'bd7acbea-c1b1-46c2-aed5-3ad53abb28ba'}},
                    })
                }
            />
        </Box>
    );
};

export default UserChatHomeScreen;

const styles = StyleSheet.create({
    label: {
        ...FONTS.subtitle2,
        color: COLORS.black_1,
        marginLeft: scaleSize(25),
        marginTop: scaleSize(20),
    },
    button: {
        width: scaleSize(211),
        height: scaleSize(44),
        marginTop: scaleSize(23),
        alignSelf: 'center',
        ...STYLES.shadow,
    },
});
