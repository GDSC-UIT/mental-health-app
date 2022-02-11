import {StyleSheet, Text, View, ViewProps} from 'react-native';
import React, {FC} from 'react';
import {transformStyleProps} from './helper';
import InnerShadowART from './InnerShadowART';

const InnerShadow: FC<ViewProps> = props => {
    const {style, children, ...containerProps} = props;
    let {outsideViewStyle, insideViewStyle, allShadowProps} = transformStyleProps(style);
    const {backgroundColor, width, height, borderRadius} = allShadowProps;
    const viewStyle = {borderRadius, width, height};

    return (
        <View style={{...viewStyle, ...outsideViewStyle}} {...containerProps}>
            <View style={[styles.container, {...viewStyle, backgroundColor}]}>
                <InnerShadowART {...allShadowProps} />
            </View>
            <View style={{...viewStyle, ...insideViewStyle}}>{children}</View>
        </View>
    );
};

export default InnerShadow;

const styles = StyleSheet.create({
    container: {
        backgroundColor: 'transparent',
        position: 'absolute',
        overflow: 'hidden',
    },
});
