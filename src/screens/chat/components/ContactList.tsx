import {scaleSize} from '@core/utils';
import {useNavigation} from '@react-navigation/native';
import {IMAGES} from '@src/assets';
import {COLORS} from '@src/assets/const';
import {ExpertChatScreenCompositeProps} from '@src/navigation/expert/type';
import React from 'react';
import {FlatList, Image, ListRenderItem, StyleSheet, Text, TouchableOpacity, View} from 'react-native';
import ContactData from './contact';
import {Contact} from './types';

type Props = {};

const ContactList: React.FC<Props> = props => {
    const navigation = useNavigation<ExpertChatScreenCompositeProps['navigation']>();

    const renderItem = ({item}: ListRenderItem<Contact>) => {
        return (
            <TouchableOpacity
                onPress={() => navigation.push('ChatStack', {screen: 'WithUserChat', username: item.username})}>
                <View style={styles.userDataContainer}>
                    <Image source={{uri: item.image}} style={styles.userAvatar} />
                    <View style={styles.userDetailsContainer}>
                        <Text style={styles.userName}>{item.username}</Text>
                        <Text numberOfLines={2} ellipsizeMode="tail" style={styles.lastMessage}>
                            {item.lastmessage}
                        </Text>
                    </View>
                </View>
            </TouchableOpacity>
        );
    };
    const SeperateLine = () => {
        return (
            <Image
                style={{
                    alignSelf: 'center',
                }}
                source={IMAGES.line}
            />
        );
    };

    return (
        <FlatList
            data={ContactData}
            renderItem={renderItem}
            keyExtractor={item => item.id}
            ItemSeparatorComponent={SeperateLine}
        />
    );
};
export default ContactList;

const styles = StyleSheet.create({
    userDataContainer: {
        flexDirection: 'row',
        marginHorizontal: scaleSize(20),
        height: scaleSize(95),
    },
    userAvatar: {
        height: scaleSize(74),
        width: scaleSize(74),
        borderRadius: scaleSize(44.5),
        alignSelf: 'center',
    },
    userDetailsContainer: {
        margin: scaleSize(15),
        flexDirection: 'column',
        width: '70%',
    },
    userName: {
        fontSize: scaleSize(22),
        fontWeight: '500',
        color: COLORS.black_1,
        marginBottom: scaleSize(3),
    },
    lastMessage: {
        fontSize: scaleSize(17),
        color: COLORS.gray_2,
    },
});
