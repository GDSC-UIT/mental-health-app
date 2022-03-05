import {scaleSize} from '@core/utils';
import {StyleSheet, Text, View, Image, TextInput} from 'react-native';
import React from 'react';
import {COLORS, FONTS} from '@src/assets/const';
import {IMAGES} from '@src/assets';
import {useTranslation} from 'react-i18next';
import Input from '@src/components/Input';
import Box from '@src/components/Box';
import Stack from '@src/components/Stack';
import Ionicons from 'react-native-vector-icons/Ionicons';

//FIXME: thay doi thay components
const SearchBar = () => {
    const {t} = useTranslation();
    return (
        <Box safeArea={false} bgColor={COLORS.gray_1} marginHorizontal={scaleSize(15)}>
            <Stack direction="row">
                <Input
                    placeholder={t('Search')}
                    textInputStyle={{fontSize: scaleSize(20)}}
                    style={{flex: 1}}
                    inputStyle={{height: scaleSize(40)}}
                    icon={<Ionicons name="search" size={scaleSize(20)} color={COLORS.dark_gray_2} />}
                    iconPosition="start"
                />
            </Stack>
        </Box>
    );
};

export default SearchBar;

const styles = StyleSheet.create({});
