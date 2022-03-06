import {scaleSize} from '@core/utils';
import {COLORS, FONTS} from '@src/assets/const';
import Box from '@src/components/Box';
import Button from '@src/components/Button';
import DismissKeyboardView from '@src/components/DismissKeyboardView';
import Input from '@src/components/Input';
import {CreatePostScreenProps} from '@src/navigation/expert/type';
import React, {useEffect, useState} from 'react';
import {Controller, useForm} from 'react-hook-form';
import {useTranslation} from 'react-i18next';
import {ScrollView, StyleSheet, Text, TextInput, View} from 'react-native';
import Header from '../components/Header';
import LabelCheckBox from './CheckBox';

const FEELS = ['Happy', 'Angry', 'Sad', 'Normal', 'Scared', 'Worry', 'Depression'];
type Data = {
    title: string;
    description: string;
};
const CreatePostScreen: React.FC<CreatePostScreenProps> = ({navigation}) => {
    const {t} = useTranslation();

    const {
        control,
        handleSubmit,
        formState: {errors, isValid},
    } = useForm<Data>({
        defaultValues: {
            title: '',
            description: '',
        },
        mode: 'onChange',
    });
    const [selectedTag, setSelectedTag] = useState<string | undefined>(undefined);
    const [dirtyTag, setDirtyTag] = useState<boolean>(false);
    const [image, setImage] = useState<string | undefined>(undefined);

    const onSubmit = (data: Data) => {
        console.log({...data, selectedTag});
    };

    const onCheckboxChange = (tag: string | undefined) => {
        setDirtyTag(true);
        setSelectedTag(prev => (prev === tag ? undefined : tag));
    };
    return (
        <Box container bgColor={COLORS.gray_1}>
            <DismissKeyboardView>
                <ScrollView contentContainerStyle={{flexGrow: 1, paddingBottom: scaleSize(20)}}>
                    <Header
                        title="Create Post"
                        submitButtonOption={{
                            onPress: handleSubmit(onSubmit),
                            disabled: !isValid || !selectedTag,
                        }}
                        goBack={() => {
                            navigation.canGoBack() && navigation.goBack();
                        }}
                    />
                    <Box container paddingHorizontal={scaleSize(10)}>
                        <View>
                            <Text style={styles.subtitle}>{t('Title')}</Text>
                        </View>
                        <View>
                            <Controller
                                control={control}
                                rules={{
                                    required: `${t('Please enter title')}`,
                                }}
                                render={({field: {onChange, onBlur, value}}) => (
                                    <Input
                                        onBlur={onBlur}
                                        onChangeText={onChange}
                                        value={value}
                                        error={errors.title?.message}
                                    />
                                )}
                                name="title"
                            />
                        </View>
                        <View style={styles.tagWrapper}>
                            <Text style={styles.subtitle}>{t('Tag')}:</Text>
                            <View style={styles.checkboxWrapper}>
                                <View style={styles.items}>
                                    {FEELS.slice(0, 4).map(tag => (
                                        <LabelCheckBox
                                            key={tag}
                                            label={tag}
                                            disabled={false}
                                            value={selectedTag === tag}
                                            onValueChange={() => onCheckboxChange(tag)}
                                        />
                                    ))}
                                </View>

                                <View style={styles.items}>
                                    {FEELS.slice(4, 7).map(tag => (
                                        <LabelCheckBox
                                            key={tag}
                                            label={tag}
                                            disabled={false}
                                            value={selectedTag === tag}
                                            onValueChange={() => onCheckboxChange(tag)}
                                        />
                                    ))}
                                </View>
                            </View>
                        </View>
                        {dirtyTag && !selectedTag && <Text style={styles.error}>{t('Please choose tag')}</Text>}

                        <View style={{marginTop: scaleSize(20)}}>
                            <View style={styles.textarea}>
                                {!!image && (
                                    <View
                                        style={{backgroundColor: 'red', width: 100, height: 100, alignSelf: 'center'}}
                                    />
                                )}
                                <Controller
                                    control={control}
                                    rules={{
                                        required: `${t('Please enter description')}`,
                                    }}
                                    render={({field: {onChange, onBlur, value}}) => (
                                        <TextInput
                                            placeholder={t('Write something here...')}
                                            placeholderTextColor="#8F9BB2"
                                            multiline={true}
                                            numberOfLines={10}
                                            textAlignVertical="top"
                                            onBlur={onBlur}
                                            onChangeText={onChange}
                                            value={value}
                                        />
                                    )}
                                    name="description"
                                />
                            </View>
                            {errors.description && <Text style={styles.error}>{errors.description?.message}</Text>}
                        </View>

                        {image ? (
                            <Button
                                title="Reselect picture"
                                onPress={() => setImage(undefined)}
                                style={{marginVertical: scaleSize(20)}}
                            />
                        ) : (
                            <Button
                                title="Add picture"
                                variant="secondary"
                                onPress={() => setImage('something')}
                                style={{marginVertical: scaleSize(20)}}
                            />
                        )}
                    </Box>
                </ScrollView>
            </DismissKeyboardView>
        </Box>
    );
};

export default CreatePostScreen;

const styles = StyleSheet.create({
    wrapper: {
        flexDirection: 'row',
        justifyContent: 'space-between',
        alignItems: 'center',
    },
    subtitle: {
        ...FONTS.h3,
        color: COLORS.dark_gray_2,
        marginVertical: scaleSize(6),
        marginRight: scaleSize(20),
        marginLeft: scaleSize(6),
    },
    tagWrapper: {
        flexDirection: 'row',
        marginTop: scaleSize(10),
    },
    checkboxWrapper: {
        flex: 1,
        flexDirection: 'row',
        justifyContent: 'space-around',
    },
    items: {},
    textarea: {
        backgroundColor: COLORS.gray_1,
        borderWidth: 1,
        borderColor: COLORS.dark_gray_2,
        borderRadius: scaleSize(20),
        padding: scaleSize(10),
    },
    error: {
        color: COLORS.error_1,
        fontSize: scaleSize(16),
        marginTop: scaleSize(4),
        marginLeft: scaleSize(8),
    },
});