import {scaleSize} from '@core/utils';
import {COLORS, FONTS} from '@src/assets/const';
import {IMAGES} from '@src/assets';
import Box from '@src/components/Box';
import Button from '@src/components/Button';
import Input from '@src/components/Input';
import Stack from '@src/components/Stack';
import React from 'react';
import {useTranslation} from 'react-i18next';
import {FlatList, ListRenderItem, StyleSheet, Text, TouchableOpacity, Image, View} from 'react-native';
import Ionicons from 'react-native-vector-icons/Ionicons';
import {useNavigation} from '@react-navigation/native';
import ContactData from '../contact';

interface ISearchScreen {
    cancel?: boolean;
}

const SearchScreen: React.FC<ISearchScreen> = props => {
    const {t} = useTranslation();
    const navigation = useNavigation<ExpertChatScreenCompositeProps['navigation']>();
    const {cancel = 'true'} = props;

    const renderItem: ListRenderItem<ContactData> = ({item}) => {
        return (
            <TouchableOpacity onPress={() => navigation.push('ChatStack', {screen: 'MainChat', params: {user: item}})}>
                <Stack direction="row" space={scaleSize(18)} alignItems="center" height={scaleSize(95)}>
                    <Image source={{uri: item.image}} style={styles.userAvatar} />
                    <Text style={styles.userName}>{item.username}</Text>
                </Stack>
            </TouchableOpacity>
        );
    };
    const SeperateLine = () => {
        return <Image style={{alignSelf: 'center'}} source={IMAGES.line} />;
    };
    return (
        <Box container bgColor={COLORS.gray_1} paddingHorizontal={scaleSize(15)}>
            <Stack direction="row" space={scaleSize(10)} marginVertical={scaleSize(15)}>
                <Input
                    style={{flex: 1}}
                    inputStyle={{paddingVertical: scaleSize(10)}}
                    icon={<Ionicons name="search" size={scaleSize(20)} color={COLORS.dark_gray_2} />}
                    iconPosition="start"
                    placeholder={t('Search')}
                    textInputStyle={{fontSize: scaleSize(23)}}
                />
                {cancel ? (
                    <Text
                        style={[styles.text, styles.bold]}
                        onPress={() => {
                            navigation.goBack();
                        }}>
                        {t('Cancel')}
                    </Text>
                ) : null}
            </Stack>
            <FlatList
                data={ContactData}
                renderItem={renderItem}
                keyExtractor={item => item.id}
                ItemSeparatorComponent={SeperateLine}
            />
        </Box>
    );
};

export default SearchScreen;

const styles = StyleSheet.create({
    text: {
        fontSize: scaleSize(18),
        alignSelf: 'center',
    },
    bold: {
        color: COLORS.black_2,
        fontWeight: '700',
    },
    userAvatar: {
        height: scaleSize(74),
        width: scaleSize(74),
        borderRadius: scaleSize(44.5),
        alignSelf: 'center',
    },
    userName: {
        ...FONTS.subtitle2,
        fontSize: scaleSize(22),
        marginBottom: scaleSize(3),
    },
});
