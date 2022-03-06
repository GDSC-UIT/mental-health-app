import { scaleSize } from '../../../../core/utils';
import { COLORS } from '../../../assets/const';
import {IMAGES} from '../../../assets'
import React from 'react';
import {Event} from './types';
import {
  TouchableOpacity,
  View,
  Image,
  StyleSheet,
  Text,
  StyleProp,
  ViewStyle
} from 'react-native';

interface EventCardProps {
    event: Event;
    style?: StyleProp<ViewStyle>;
};

const EventCard: React.FC<EventCardProps> = props => {
    const {
        event: {title, time},
    } = props;

    return (
        <View style={styles.container}> 
            <Text style={styles.time}>{time}</Text>
            <Text style={styles.content}>{title}</Text>
        </View>
    );
};

export default EventCard;

const styles = StyleSheet.create({
    container: {
        height: 'auto',
        width: scaleSize(358),
        alignSelf: 'center',
        borderRadius: 10,
        backgroundColor: '#F5F9FD',
        paddingLeft: 16,
        paddingTop: 18,
        paddingBottom: 24,
        paddingRight: 16,
        marginTop: 11,
        
        // shadowOffset: {
        //     width: 3,
        //     height: 3,
        // },
        // shadowOpacity: 0.48,
        // elevation: 10,
        // shadowColor: '#8A9BBD'
    },
    time: {
        fontSize: 16,
        fontFamily: 'Roboto',
        color: '#8F9BB2'
    },
    content: {
        fontSize: 20,
        fontFamily: 'Roboto',
        color: '#334C78'
    }
});
