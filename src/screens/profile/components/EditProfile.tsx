import { scaleSize } from '../../../../core/utils';
import { COLORS, FONTS, STYLES } from '../../../assets/const';
import {IMAGES} from '../../../assets'
import React, {useState} from 'react';
import Ionicons from 'react-native-vector-icons/Ionicons';
import {useTranslation} from 'react-i18next';
import { launchCamera, launchImageLibrary } from 'react-native-image-picker';
import {
  TouchableOpacity,
  View,
  Image,
  StyleSheet,
  Text,
  TextInput,
  Alert,
  Modal,
  Pressable
} from 'react-native';


type EditProfileProps = {
    name: string, 
    image: string,
};

const EditProfile = (props: EditProfileProps) => {
    const [profileImage, setProfileImage] = useState(null)
    const [changeAvatarModalVisible, setChangeAvatarModalVisible] = useState(false);

    const {name, image} = props;
    const {t} = useTranslation();

    const openCamera = () => {
        const option = {
            mediaType: 'photo',
            quality: 1
        }
    
        launchCamera(option, (res) =>{
            if(res.didCancel){
                console.log('User Cancelled image picker')
            }
            else if(res.errorCode){
                console.log(res.errorMessage)
            }
            else{
                const data = res.assets[0]
                setProfileImage(data)
                console.log(data)
                setChangeAvatarModalVisible(false)
            }
        })
    }

    const openLibrary = () => {
        const option = {
            mediaType: 'photo',
            quality: 1
        }

        launchImageLibrary(option, (res) =>{
            if(res.didCancel){
                console.log('User Cancelled image picker')
            }
            else if(res.errorCode){
                console.log(res.errorMessage)
            }
            else{
                const data = res.assets[0]
                setProfileImage(data)
                console.log(data)
                setChangeAvatarModalVisible(false)
            }
        })
    }

    function alertBack(){
        Alert.alert(
            "Notice", "If you cancel now, your changes will be discarded.",
            [
                {text: "OK", onPress: () => console.log("OK Pressed")},
                {text: "Cancel", onPress: () => console.log("Cancel Pressed")}
            ]
        )
    }
    
    return (
        <View>
            <Modal
                animationType="fade"
                transparent={true}
                visible={changeAvatarModalVisible}
            >
                <View style={{flex: 1, paddingBottom: scaleSize(33), justifyContent: "flex-end", alignItems: "center", alignSelf: 'center', backgroundColor: 'rgba(0,0,0,0.5)'}}>
                    <View style={styles.modalView}>
                        <Pressable
                            onPress={openCamera}
                            style={{marginTop: scaleSize(14)}}
                        >
                            <Text style={{fontSize: scaleSize(23), color: '#1D325E'}}>Take Photo</Text>
                        </Pressable>
                        <View style={{backgroundColor: '#BABCC1', height: scaleSize(1), width: scaleSize(376)}}/>
                        <Pressable
                            onPress={openLibrary}
                            style={{marginTop: scaleSize(10)}}
                        >
                            <Text style={{fontSize: scaleSize(23), color: '#1D325E'}}>Choose From Library</Text>
                        </Pressable>
                        <View style={{backgroundColor: '#BABCC1', height: scaleSize(1), width: scaleSize(376)}}/>
                        <Pressable
                            onPress={() => setChangeAvatarModalVisible(!changeAvatarModalVisible)}
                            style={{marginBottom: scaleSize(14)}}
                        >
                            <Text style={{fontSize: scaleSize(23), color: '#1D325E', fontWeight: 'bold'}}>Cancel</Text>
                        </Pressable>
                    </View>
                </View>
            </Modal>

            <View style={styles.top}> 
                <TouchableOpacity 
                    style={styles.backButton}
                    onPress={alertBack}
                >
                    <Ionicons name="chevron-back-outline" size={scaleSize(20)} color={COLORS.dark_gray_2}/>
                </TouchableOpacity>
                
                <Text style={styles.editText}>{t('Edit Profile')}</Text>

                <TouchableOpacity style={styles.doneButton}>
                    <Text style={styles.doneButtonText}>{t('Done')}</Text>
                </TouchableOpacity>
            </View>

            <View style={{marginTop: scaleSize(28), alignItems: 'center'}}>
                
                {
                    profileImage != null &&
                    <Image
                        source={{uri: profileImage.uri}}
                        // source={IMAGES.profile}
                        style={{height: scaleSize(89), width: scaleSize(89), borderRadius: scaleSize(89/2)}}
                    />
                }
                
                <TouchableOpacity 
                    style={styles.changeAvatarButton}
                    onPress={() => setChangeAvatarModalVisible(true)}
                >
                    <Text style={{...FONTS.h1, fontSize: scaleSize(18), color: '#193566'}}>{t('CHANGE AVATAR')}</Text>
                </TouchableOpacity>
            </View>

            <View>
                <Text style={styles.nameLabel}>{t('About me')}</Text>
                <View style={styles.textInputContainer}>
                    <TextInput 
                        style={{...FONTS.body2, fontSize: scaleSize(20), paddingLeft: scaleSize(15)}}
                        value={name}
                        placeholder="Edit Name Here"
                    />   
                </View>
            </View>
        </View>
    );
};

export default EditProfile;

const styles = StyleSheet.create({
    top: {
        flexDirection: 'row',
        alignItems: 'center',
        justifyContent: 'space-between',
        marginTop: scaleSize(16),
    },
    backButton: {
        height: scaleSize(40),
        width: scaleSize(40),
        borderRadius: scaleSize(40/2),
        backgroundColor: '#E9F0F7',
        marginLeft: scaleSize(16),
        justifyContent: 'center',
        alignItems: 'center',

        ...STYLES.deepShadow
    },
    editText: {
        ...FONTS.subtitle2,
        fontSize: scaleSize(26),
        color: '#193566',
        alignSelf: 'center',
        justifyContent: 'center'
    },
    doneButton: {
        alignItems: 'center',
        width: scaleSize(63),
        height: scaleSize(40),
        backgroundColor: '#E9F0F7',
        justifyContent: 'center',
        alignSelf: 'center',
        borderRadius: 60,
        marginRight: scaleSize(15),

        ...STYLES.deepShadow
    },
    doneButtonText: {
        ...FONTS.h4,
        fontSize: scaleSize(20),
        fontWeight: '600',
        color: '#274170',
        justifyContent: 'center',
        alignSelf: 'center'
    },
    changeAvatarButton: {
        borderRadius: 60,
        backgroundColor: '#E9F0F7',
        height: scaleSize(40),
        width: scaleSize(174),
        marginTop: scaleSize(15),
        alignItems: 'center',
        justifyContent: 'center',

        ...STYLES.deepShadow
    },
    nameLabel: {
        ...FONTS.subtitle2,
        fontSize: scaleSize(20),
        color: '#8F9BB2',
        marginTop: scaleSize(14),
        marginLeft: scaleSize(15),
    },
    textInputContainer: {
        width: scaleSize(358),
        height: scaleSize(45),
        borderRadius: 60,
        backgroundColor: '#F5F9FD',
        borderWidth: scaleSize(1),
        borderColor: '#8F9BB2',
        justifyContent: 'center',
        alignSelf: 'center',
        marginTop: scaleSize(9),
    },
    modalView: {
        ...STYLES.deepShadow, 
        height: scaleSize(183), 
        width: scaleSize(376), 
        alignSelf: 'center', 
        alignItems: 'center', 
        justifyContent: 'space-between',
        backgroundColor: '#F5F9FD',
        borderRadius: 10
    }
});
