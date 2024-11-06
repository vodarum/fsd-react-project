import type { User } from '../model';
import ImageMan from './man.jpg';
import ImageSunnyLion from './sunny-lion.jpg';
import ImageGloomyLion from './gloomy-lion.webp';

const mockUsers: User[] = [
    {
        id: 1,
        username: 'vodarum',
        password: 'qwerty123',
        firstName: 'Nashvar',
        lastName: 'Vodarum',
        birthday: '1993-08-13',
        currency: 'RUB',
        country: 'Russia',
        city: 'Волгоград',
        avatar: ImageSunnyLion,
        // avatar: 'https://us.123rf.com/450wm/whitecity/whitecity2403/whitecity240301752/227835211-lion-in-sunglasses-vector-illustration-of-a-lion-with-sunglasses.jpg?ver=6',
        // avatar: 'https://png.pngtree.com/png-clipart/20230916/original/pngtree-cartoon-sticker-cute-lion-with-glasses-clipart-vector-png-image_12252135.png',
        roles: ['admin'],
    },
    {
        id: 2,
        username: 'nirvam',
        password: 'qwerty321',
        firstName: 'Sats',
        lastName: 'Nirvam',
        birthday: '1992-07-10',
        currency: 'RUB',
        country: 'Russia',
        city: 'Волгоград',
        avatar: ImageMan,
        // avatar: 'https://img.freepik.com/premium-photo/3d-style-avatar-profile-picture-featuring-male-character-generative-ai_739548-13626.jpg',
        roles: ['user'],
    },
    {
        id: 3,
        username: 'leo',
        password: 'leo123',
        firstName: 'Leo',
        lastName: 'Leo',
        birthday: '1993-08-13',
        currency: 'RUB',
        country: 'Russia',
        city: 'Волгоград',
        avatar: ImageGloomyLion,
        // avatar: 'https://thumbs.dreamstime.com/b/cartoon-lion-glasses-poses-confidently-casual-clothing-character-wearing-attire-long-hair-329908583.jpg',
        roles: ['manager'],
    },
];

export { mockUsers };
