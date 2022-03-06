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
  StyleProp,
  ViewStyle
} from 'react-native';

interface ExpertCardProps {
    date: string,
    content: string,
    style?: StyleProp<ViewStyle>;
};

const EventCard: React.FC<ExpertCardProps> = props => {
    const {date, content, style} = props;
    return (
        <View style={styles.container}> 
            <Text style={styles.time}>{date}</Text>
            <Text style={styles.content}>{content}</Text>
        </View>
    );
};

export default EventCard;

const styles = StyleSheet.create({
    container: {
        height: 'auto',
        with: scaleSize(358),
        alignSelf: 'center',
        borderRadius: 10,
        backgroundColor: '#F5F9FD',
        paddingLeft: 16,
        paddingTop: 18,
        paddingBottom: 24,
        paddingRight: 16,
        marginTop: 11
        //thêm shadow nha Quyên
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
