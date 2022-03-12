import React from 'react';
import {StyleProp, StyleSheet, Text, View, ViewStyle} from 'react-native';
import {scaleSize} from '@core/utils';
import {Event} from './types';
import {COLORS, FONTS, STYLES} from '@src/assets/const';

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
        borderRadius: scaleSize(10),
        backgroundColor: '#F5F9FD',
        paddingHorizontal: scaleSize(16),
        paddingVertical: scaleSize(18),
        marginTop: scaleSize(11),
        ...STYLES.shadow,
    },
    time: {
        ...FONTS.body3,
        color: COLORS.dark_gray_2,
    },
    content: {
        ...FONTS.body3,
        color: COLORS.dark_blue_2,
    },
});
