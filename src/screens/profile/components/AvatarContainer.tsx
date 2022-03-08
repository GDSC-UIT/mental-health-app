import { scaleSize } from '../../../../core/utils';
import { COLORS } from '../../../assets/const';
import {IMAGES} from '../../../assets'
import React from 'react';
import {FONTS} from '@src/assets/const';
import {
  TouchableOpacity,
  View,
  Image,
  StyleSheet,
  Text,
} from 'react-native';

interface avatarContainerProps {
    name: string,
    image: string
};

const AvatarContainer = (props: avatarContainerProps) => {
    const {name, image} = props;
    return (
        <View style={styles.avatarContainer}>
            <Image 
                source={{uri: image}}
                //source={IMAGES.profile}
                style={styles.profileImage}
            />
            <Text style={styles.name}>{name}</Text>
        </View>
    );
};

export default AvatarContainer;

const styles = StyleSheet.create({
    profileImage: {
        width: scaleSize(89),
        height: scaleSize(89),
        borderRadius: scaleSize(89/2),
        marginTop: scaleSize(13),
        alignSelf: 'center'
    },
    name: {
        alignSelf: 'center',
        ...FONTS.subtitle2,
        fontSize: scaleSize(26),
        color: '#334C78',
        marginTop: scaleSize(10),
    },
    avatarContainer: {
        width: scaleSize(232),
        height: scaleSize(160),
        borderRadius: 10,
        backgroundColor: '#F5F9FD',
        alignSelf: 'center',
        marginTop: scaleSize(20)
    },
});
