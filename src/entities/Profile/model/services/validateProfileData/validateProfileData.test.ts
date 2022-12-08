import { Country } from 'entities/Country';
import { Currency } from 'entities/Currency';
import { ValidateProfileError } from 'entities/Profile/model/types/profile';
import { validateProfileData } from './validateProfileData';

const data = {
    username: 'gormisha',
    age: 25,
    firstname: 'Mike',
    lastname: 'Smith',
    city: 'San Francisco',
    currency: Currency.USD,
    country: Country.Russia,
};

describe('validateProfileData.test', () => {
    test('success', async () => {
        const result = validateProfileData(data);

        expect(result).toEqual([]);
    });

    test('without any data', async () => {
        const result = validateProfileData();

        expect(result).toEqual([ValidateProfileError.NO_DATA]);
    });

    test('without first and last name', async () => {
        const result = validateProfileData({ ...data, firstname: '', lastname: '' });

        expect(result).toEqual([ValidateProfileError.INCORRECT_USER_DATA]);
    });

    test('incorrect age', async () => {
        const result = validateProfileData({ ...data, age: undefined });

        expect(result).toEqual([ValidateProfileError.INCORRECT_AGE]);
    });

    test('incorrect city', async () => {
        const result = validateProfileData({ ...data, city: '' });

        expect(result).toEqual([ValidateProfileError.INCORRECT_CITY]);
    });

    test('incorrect all', async () => {
        const result = validateProfileData({});

        expect(result).toContain(ValidateProfileError.INCORRECT_USER_DATA);
        expect(result).toContain(ValidateProfileError.INCORRECT_AGE);
        expect(result).toContain(ValidateProfileError.INCORRECT_CITY);
    });
});
