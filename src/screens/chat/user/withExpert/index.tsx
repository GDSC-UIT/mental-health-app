import {scaleSize} from '@core/utils';
import {COLORS, FONTS} from '@src/assets/const';
import Box from '@src/components/Box';
import Button from '@src/components/Button';
import React from 'react';
import {StyleSheet, Text, View, ListRenderItem} from 'react-native';
import {useNavigation} from '@react-navigation/native';
import {useTranslation} from 'react-i18next';
import BackButton from '@src/screens/chat/components/BackButton';
import SearchScreen from '@src/screens/chat/components/Search/SearchScreen';

const ChatWithExpertScreen = () => {
    const {t} = useTranslation();
    const navigation = useNavigation<ExpertChatScreenCompositeProps['navigation']>();

    return (
        <Box bgColor={COLORS.gray_1} container safeArea={true}>
            <View style={styles.top}>
                <BackButton />
                <Text style={styles.label}>{t('With an expert')}</Text>
            </View>

            <SearchScreen
                cancel={false}
                onPress={() => navigation.push('ChatStack', {screen: 'MainChat', params: {user: item}})}
            />

            <Button
                title={t('Random Expert')}
                style={{marginBottom: scaleSize(55), width: scaleSize(211), height: scaleSize(44), alignSelf: 'center'}}
                onPress={() =>
                    navigation.push('ChatStack', {
                        screen: 'MainChat',
                        params: {user: {role: 'expert'}},
                    })
                }
            />
        </Box>
    );
};

export default ChatWithExpertScreen;

const styles = StyleSheet.create({
    top: {
        marginVertical: scaleSize(18),
        alignItems: 'center',
        flexDirection: 'row',
    },
    label: {
        ...FONTS.subtitle2,
        marginLeft: scaleSize(60),
    },
});
