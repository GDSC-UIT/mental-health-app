import React from 'react';
import {StyleProp, StyleSheet, View, ViewProps} from 'react-native';
import {isAndroid, scaleSize} from '@core/utils';
import {COLORS, SIZES} from '@src/assets/const';
import {ViewStyle} from 'react-native';

interface IProps extends ViewProps {
    borderRadius?: number;
    circle?: boolean;
    shadowContainerStyle?: StyleProp<ViewStyle>;
}
//Just only on IOS
const Neumorph: React.FC<IProps> = ({children, circle, borderRadius, shadowContainerStyle, style, ...others}) => {
    const borderStyle = borderRadius
        ? {borderRadius: borderRadius}
        : {borderRadius: circle ? SIZES.circleButton / 2 : 0};

    if (isAndroid) {
        return (
            <View style={[styles.androidShadow, borderStyle, shadowContainerStyle, style]} {...others}>
                {children}
            </View>
        );
    }
    return (
        <View style={[styles.topShadow, borderStyle, shadowContainerStyle]}>
            <View style={[styles.bottomShadow, borderStyle]}>
                <View style={style} {...others}>
                    {children}
                </View>
            </View>
        </View>
    );
};

export default Neumorph;

const styles = StyleSheet.create({
    topShadow: {
        borderRadius: scaleSize(12),
        shadowColor: '#FFFFFF',
        shadowOffset: {
            width: -3,
            height: -3,
        },
        shadowOpacity: 0.4,
        shadowRadius: 10,
    },
    bottomShadow: {
        borderRadius: scaleSize(12),
        shadowColor: COLORS.dark_blue_2,
        shadowOffset: {
            width: 3,
            height: 3,
        },
        shadowOpacity: 0.4,
        shadowRadius: 6,
    },
    androidShadow: {
        elevation: 4,
        shadowOpacity: 0.48,
    },
});
