import { StateSchema } from '@/app/providers/StoreProvider';
import { Country } from '@/entities/Country';
import { Currency } from '@/entities/Currency';
import { getProfileData } from './getProfileData';

describe('getProfileData.test', () => {
    test('should return profile data', () => {
        const data = {
            username: 'gormisha',
            age: 25,
            firstname: 'Mike',
            lastname: 'Smith',
            city: 'San Francisco',
            currency: Currency.USD,
            country: Country.Russia,
        };

        const state:DeepPartial<StateSchema> = {
            profile: {
                data,
            },
        };
        expect(getProfileData(state as StateSchema)).toEqual(data);
    });
    test('should work with empty state', () => {
        const state:DeepPartial<StateSchema> = {};
        expect(getProfileData(state as StateSchema)).toEqual(undefined);
    });
});
