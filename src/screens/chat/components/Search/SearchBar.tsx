import {scaleSize} from '@core/utils';
import {StyleSheet} from 'react-native';
import React from 'react';
import {COLORS} from '@src/assets/const';
import {useTranslation} from 'react-i18next';
import Input from '@src/components/Input';
import Box from '@src/components/Box';
import Stack from '@src/components/Stack';
import Ionicons from 'react-native-vector-icons/Ionicons';
import {ChatSearchScreenProps} from '@src/navigation/expert/type';
import {useNavigation} from '@react-navigation/native';

const SearchBar = () => {
    const navigation = useNavigation<WithUserChatScreenProps['navigation']>();
    const {t} = useTranslation();

    return (
        <Box bgColor={COLORS.gray_1} margin={scaleSize(15)}>
            <Stack direction="row">
                <Input
                    placeholder={t('Search')}
                    textInputStyle={{fontSize: scaleSize(20)}}
                    style={{flex: 1}}
                    inputStyle={{height: scaleSize(40)}}
                    onPressIn={() => navigation.push('ChatStack', {screen: 'SearchScreen'})}
                    icon={<Ionicons name="search" size={scaleSize(20)} color={COLORS.dark_gray_2} />}
                    iconPosition="start"
                />
            </Stack>
        </Box>
    );
};

export default SearchBar;

const styles = StyleSheet.create({});
