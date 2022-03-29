import { useTranslation } from 'react-i18next';
import {IMAGES} from '../../../assets/index';

const {t} = useTranslation()

const Contents = [
    {
        id: 1,
        text: t('Receiving guidelines\nfrom psychologists'),
        image: IMAGES.img_intro_step_1,
        bgImage: IMAGES.bg_intro_step_1,
    },
    {
        id: 2,
        text: t('Noting down your\nemotion diary'),
        image: IMAGES.img_intro_step_2,
        bgImage: IMAGES.bg_intro_step_2,
    },
    {
        id: 3,
        text: t('Exploring posts and events about mental health'),
        image: IMAGES.img_intro_step_3,
        bgImage: IMAGES.bg_intro_step_3,
    },
    {
        id: 4,
        text: t('Chatting with strangers\n'),
        image: IMAGES.img_intro_step_4,
        bgImage: IMAGES.bg_intro_step_4,
    },
];

export default Contents;
