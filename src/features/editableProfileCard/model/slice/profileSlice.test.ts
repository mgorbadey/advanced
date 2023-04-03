import { ValidateProfileError } from '../consts/editableProfileCardconsts';
import { updateProfileData } from '../services/updateProfileData/updateProfileData';
import { ProfileSchema } from '../types/editableProfileCardSchema';
import { Country } from '@/entities/Country';
import { Currency } from '@/entities/Currency';
import { profileActions, profileReducer } from './profileSlice';

const data = {
    username: 'admin',
    age: 22,
    country: Country.Russia,
    lastname: 'admin',
    firstname: 'asd',
    city: 'Tashkent',
    currency: Currency.USD,
};

describe('profileSlice.test', () => {
    test('test set readonly', () => {
        const state:DeepPartial<ProfileSchema> = { readonly: false };

        expect(profileReducer(state as ProfileSchema, profileActions.setReadOnly(true)))
            .toEqual({ readonly: true });
    });

    test('test update profile', () => {
        const state: DeepPartial<ProfileSchema> = { form: { username: '123' } };

        expect(profileReducer(state as ProfileSchema, profileActions.updateProfile({ username: '123456' })))
            .toEqual({ form: { username: '123456' } });
    });

    test('test cancel edit', () => {
        const state:DeepPartial<ProfileSchema> = { data, form: { username: '' } };

        expect(profileReducer(state as ProfileSchema, profileActions.cancelEdit()))
            .toEqual({
                readonly: true,
                validateErrors: undefined,
                data,
                form: data,
            });
    });

    test('test update profile service pending', () => {
        const state: DeepPartial<ProfileSchema> = { isLoading: false, validateProfileErrors: [ValidateProfileError.SERVER_ERROR] };

        expect(profileReducer(state as ProfileSchema, updateProfileData.pending))
            .toEqual({ isLoading: true, validateProfileErrors: undefined });
    });

    test('test update profile service fullfiled', () => {
        const state: DeepPartial<ProfileSchema> = { isLoading: true };

        expect(profileReducer(state as ProfileSchema, updateProfileData.fulfilled(data, '')))
            .toEqual({
                data,
                form: data,
                isLoading: false,
                error: undefined,
                readonly: true,
                validateProfileErrors: undefined,
            });
    });
});
