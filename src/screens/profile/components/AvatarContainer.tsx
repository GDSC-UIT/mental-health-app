import { scaleSize } from '../../../../core/utils';
import { COLORS } from '../../../assets/const';
import {IMAGES} from '../../../assets'
import React from 'react';
import {
  TouchableOpacity,
  View,
  Image,
  StyleSheet,
  Text,
} from 'react-native';

interface EditButtonProps {
    name: string,
};

const AvatarContainer: React.FC<EditButtonProps> = props => {
    const {name} = props;
    return (
        <View style={styles.avatarContainer}>
            <Image 
                // source={{uri: image}}
                source={IMAGES.profile}
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
        borderRadius: scaleSize(89)/2,
        marginTop: 13,
        alignSelf: 'center'
    },
    name: {
        fontSize: scaleSize(26),
        fontFamily: 'Roboto',
        fontWeight: 'bold',
        color: '#334C78',
        alignSelf: 'center'
    },
    avatarContainer: {
        width: scaleSize(232),
        height: scaleSize(160),
        borderRadius: 10,
        backgroundColor: '#F5F9FD',
        alignSelf: 'center',
        marginTop: 20
    },
});
