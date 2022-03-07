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
  TextInput
} from 'react-native';

type Props = {};

const BottomChatBar = (props: Props) => {
    return (
        <View style={styles.msg_bar}>
                <TouchableOpacity style={styles.pick_img}>
                    <Image
                        source={IMAGES.picture}>
                    </Image>
                </TouchableOpacity>

                <View 
                    style={styles.msg_input} 
                >
                    <TextInput
                        style={{width: 225, paddingLeft: 15}}
                        numberOfLines={1}
                    />

                    <TouchableOpacity>
                    <Image source={IMAGES.send}/>
                    </TouchableOpacity>
                </View>

                <TouchableOpacity style={styles.heart}>
                    <Image
                        source={IMAGES.heart}>
                    </Image>
                </TouchableOpacity>
            </View>
    );
};

export default BottomChatBar;

const styles = StyleSheet.create({
    msg_bar: {
        height: 58,
        justifyContent: 'space-between',
        alignSelf: 'center',
        marginBottom: 24,
        flexDirection: 'row',
        alignItems: 'center',

    },
    pick_img: {
        backgroundColor: '#E9F0F7',
        height: 37,
        width: 37,
        borderRadius: 60,
        justifyContent: 'center',
        alignItems: 'center',

        shadowOffset: {
            width: 4,
            height: 4,
        },
        shadowOpacity: 0.3,
        elevation: 5,
        shadowColor: '#8A9BBD'
    },
    heart: {
        backgroundColor: '#E9F0F7',
        height: 37, 
        width: 37,
        borderRadius: 60,
        justifyContent: 'center',
        alignItems: 'center',
        marginLeft: 16,

        shadowOffset: {
            width: 4,
            height: 4,
        },
        shadowOpacity: 0.3,
        elevation: 5,
        shadowColor: '#8A9BBD'
    },
    msg_input: {
        flexDirection: 'row',
        width: 252,
        height: 48,
        borderRadius: 60,
        marginLeft: 10,
        borderColor: '#8F9BB2',
        borderWidth: 1,
        backgroundColor: '#E9F0F7',
        alignItems: 'center'
    },
});
