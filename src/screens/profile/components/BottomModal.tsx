import {Modal, Pressable, StyleSheet, Text, View} from 'react-native';
import React from 'react';
import {scaleSize} from '@core/utils';
import {STYLES} from '@src/assets/const';

interface Props {
    visible: boolean;
    onOpenLibraryPress: () => void;
    onOpenCameraPress: () => void;
    onCancel: () => void;
}

const BottomModal: React.FC<Props> = props => {
    const {visible, onOpenLibraryPress, onOpenCameraPress, onCancel} = props;
    return (
        <Modal animationType="fade" transparent={true} visible={visible}>
            <View
                style={{
                    flex: 1,
                    paddingBottom: scaleSize(33),
                    justifyContent: 'flex-end',
                    alignItems: 'center',
                    alignSelf: 'center',
                    backgroundColor: 'rgba(0,0,0,0.5)',
                }}>
                <View style={styles.modalView}>
                    <View style={styles.takePhotoModalOption}>
                        <Pressable onPress={onOpenCameraPress} style={{marginTop: scaleSize(14)}}>
                            <Text style={{fontSize: scaleSize(23), color: '#1D325E'}}>Take Photo</Text>
                        </Pressable>
                        <View style={{backgroundColor: '#BABCC1', height: scaleSize(1), width: scaleSize(376)}} />
                        <Pressable onPress={onOpenLibraryPress} style={{marginTop: scaleSize(10)}}>
                            <Text style={{fontSize: scaleSize(23), color: '#1D325E', marginBottom: scaleSize(19)}}>
                                Choose From Library
                            </Text>
                        </Pressable>
                    </View>

                    <View style={styles.chooseLibraryModalOption}>
                        <Pressable onPress={() => onCancel()} style={{marginBottom: scaleSize(14)}}>
                            <Text
                                style={{
                                    fontSize: scaleSize(23),
                                    color: '#1D325E',
                                    fontWeight: 'bold',
                                    marginTop: scaleSize(14),
                                }}>
                                Cancel
                            </Text>
                        </Pressable>
                    </View>
                </View>
            </View>
        </Modal>
    );
};

export default BottomModal;

const styles = StyleSheet.create({
    modalView: {
        ...STYLES.deepShadow,
        height: scaleSize(184),
        width: scaleSize(376),
        alignSelf: 'center',
        alignItems: 'center',
        justifyContent: 'space-between',
        //backgroundColor: '#F5F9FD',
        borderRadius: 10,
    },
    takePhotoModalOption: {
        ...STYLES.deepShadow,
        height: scaleSize(112),
        width: scaleSize(376),
        alignSelf: 'center',
        alignItems: 'center',
        justifyContent: 'space-between',
        backgroundColor: '#F5F9FD',
        borderRadius: 10,
    },
    chooseLibraryModalOption: {
        ...STYLES.deepShadow,
        height: scaleSize(56),
        width: scaleSize(376),
        alignSelf: 'center',
        alignItems: 'center',
        backgroundColor: '#F5F9FD',
        borderRadius: 10,
    },
});
