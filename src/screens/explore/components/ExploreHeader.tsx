import {scaleSize} from '@core/utils';
import {useNavigation} from '@react-navigation/native';
import {COLORS, FONTS} from '@src/assets/const';
import Button from '@src/components/Button';
import IconButton from '@src/components/IconButton';
import Neumorph from '@src/components/Neumorph';
import Stack from '@src/components/Stack';
import {MainTabCompositeProps} from '@src/navigation/AppStackParams';
import React from 'react';
import {StyleSheet, View} from 'react-native';
import Ionicons from 'react-native-vector-icons/Ionicons';

interface IProps {
    route: 'Post' | 'Event';
    navigate: (_: 'Event' | 'Post') => void;
}
const ExploreHeader: React.FC<IProps> = props => {
    const {route, navigate: redirect} = props;
    const {navigate} = useNavigation<MainTabCompositeProps<'Explore'>['navigation']>();
    return (
        <View style={styles.header}>
            <Stack direction="row" space={scaleSize(10)} style={{marginTop: scaleSize(20)}}>
                <Button
                    title={'Post'}
                    selected={route === 'Post'}
                    onPress={() => {
                        redirect('Post');
                    }}
                />
                <Button
                    title={'Event'}
                    selected={route === 'Event'}
                    onPress={() => {
                        redirect('Event');
                    }}
                />
            </Stack>
            <View style={styles.headerRight}>
                <Neumorph circle>
                    <IconButton
                        icon={<Ionicons name="search" size={24} color={COLORS.dark_gray_2} />}
                        onPress={() => navigate('ExploreSearch')}
                    />
                </Neumorph>
            </View>
        </View>
    );
};

const styles = StyleSheet.create({
    header: {
        backgroundColor: COLORS.gray_1,
        alignItems: 'center',
        justifyContent: 'center',
    },
    titleWrapper: {
        flex: 1,
        alignItems: 'center',
    },
    title: {
        ...FONTS.h2,
        color: COLORS.black_1,
    },
    headerLeft: {
        position: 'absolute',
        alignItems: 'center',
        justifyContent: 'center',
        left: scaleSize(10),
    },
    headerRight: {
        position: 'absolute',
        alignItems: 'center',
        justifyContent: 'center',
        right: scaleSize(10),
        bottom: 0,
    },
});
export default ExploreHeader;
