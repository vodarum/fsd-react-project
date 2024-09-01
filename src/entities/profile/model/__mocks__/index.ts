import type { State } from 'app/providers/store-provider';
import type { Profile, ProfileState } from '../types';
import { Countries, Currencies } from 'shared/api';

const mockProfile: Profile = {
    firstName: 'Nashvar',
    lastName: 'Vodarum',
    age: 31,
    currency: Currencies.rub,
    country: Countries.Russia,
    city: 'Волгоград',
    username: 'vodarum',
    avatar: 'https://www.google.com/url?sa=i&url=https%3A%2F%2Fpikabu.ru%2Fstory%2Favatarki_zverushek_9946640&psig=AOvVaw2z0MQCWU4hrkcYR_IOsTs9&ust=1725299245158000&source=images&cd=vfe&opi=89978449&ved=0CBQQjRxqFwoTCICbvOKmoogDFQAAAAAdAAAAABAE',
};

const mockProfileState: ProfileState = {
    data: undefined,
    loading: false,
    readonly: true,
};

const mockInitialAppState: State = {
    profile: undefined,
} as State;

export { mockProfile, mockProfileState, mockInitialAppState };
