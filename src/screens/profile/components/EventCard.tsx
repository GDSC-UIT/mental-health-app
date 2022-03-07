import React from 'react';
import {StyleProp, StyleSheet, Text, View, ViewStyle} from 'react-native';
import {scaleSize} from '../../../../core/utils';
import {Event} from './types';

interface EventCardProps {
    event: Event;
    style?: StyleProp<ViewStyle>;
}

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
        paddingLeft: scaleSize(14),
        paddingTop: 18,
        paddingBottom: 24,
        paddingRight: 16,
        marginTop: 11,
    },
    time: {
        fontSize: 16,
        fontFamily: 'Roboto',
        color: '#8F9BB2',
    },
    content: {
        fontSize: 20,
        fontFamily: 'Roboto',
        color: '#334C78',
    },
});
