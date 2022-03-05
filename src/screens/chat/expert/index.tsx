import {StyleSheet, Text} from 'react-native';
import React from 'react';
import Box from '@src/components/Box';
import {useTranslation} from 'react-i18next';
import {COLORS, FONTS} from '@src/assets/const';
import SearchBar from '@src/screens/chat/components/SearchBar';
import ContactList from '@src/screens/chat/components/ContactList';

const ExpertChatHomeScreen = () => {
    const {t} = useTranslation();
    return (
        <Box bgColor={COLORS.gray_1} container>
            <Text style={styles.screenTitle}>{t('Messages')}</Text>
            <SearchBar />
            <ContactList />
        </Box>
    );
};

export default ExpertChatHomeScreen;

const styles = StyleSheet.create({
    screenTitle: {
        textAlign: 'center',
        alignSelf: 'center',
        padding: 18,
        ...FONTS.h2,
        color: COLORS.black_1,
    },
});
