import { scaleSize } from '../../../../../core/utils';
import { COLORS } from '../../../../assets/const';
import {IMAGES} from '../../../../assets'
import React from 'react';
import {
  TouchableOpacity,
  View,
  Image,
  StyleSheet,
  Text,
} from 'react-native';

interface ExpertCardProps {
    name: string,
};

const ExpertCard: React.FC<ExpertCardProps> = props => {
    const {name} = props;
    return (
        <View style={{marginTop: 23}}>
            <TouchableOpacity  style={styles.expert}>
                <Image source={IMAGES.expert_img}></Image>
                <Text style={styles.name}>{name}</Text>
            </TouchableOpacity>
        </View>
    );
};

export default ExpertCard;

const styles = StyleSheet.create({
    expert: {
        height: 73,
        width: 354,
        alignItems: 'center',
        flexDirection: 'row',
        marginLeft: 20
    },
    name: {
        fontFamily: 'Roboto',
        fontSize: 22,
        fontWeight: '500',
        color: '#193566',
        marginLeft: 28
    },
});
