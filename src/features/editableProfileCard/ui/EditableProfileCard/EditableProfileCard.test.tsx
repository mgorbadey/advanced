import { screen } from '@testing-library/react';
import userEvent from '@testing-library/user-event';
import { profileReducer } from '../../model/slice/profileSlice';
import { Country } from '@/entities/Country';
import { Currency } from '@/entities/Currency';
import { Profile } from '@/entities/Profile';
import { $api } from '@/shared/api/api';
import { componentRender } from '@/shared/lib/tests/componentRender/componentRender';
import { EditableProfileCard } from './EditableProfileCard';

const profile: Profile = {
    id: '1',
    firstname: 'admin',
    lastname: 'admin',
    username: 'AdminOfTheWorld',
    age: 25,
    city: 'Moscow',
    country: Country.Russia,
    currency: Currency.RUB,
};

const options = {
    initialState: {
        profile: {
            readonly: true,
            data: profile,
            form: profile,
        },
        user: {
            authData: { id: '1' },
        },
    },
    asyncReducers: {
        profile: profileReducer,
    },
};

describe('features/EditableProfileCard', () => {
    test('Profile becomes editable', async () => {
        componentRender(<EditableProfileCard id="1" />, options);
        await userEvent.click(screen.getByTestId('EditableProfileCard.EditButton'));
        expect(screen.getByTestId('EditableProfileCard.CancelButton')).toBeInTheDocument();
    });

    test('Cancelling editing returns initial values', async () => {
        componentRender(<EditableProfileCard id="1" />, options);
        await userEvent.click(screen.getByTestId('EditableProfileCard.EditButton'));

        await userEvent.clear(screen.getByTestId('ProfileCard.FirstNameInput'));
        await userEvent.clear(screen.getByTestId('ProfileCard.LastNameInput'));

        await userEvent.type(screen.getByTestId('ProfileCard.FirstNameInput'), 'newValue');
        await userEvent.type(screen.getByTestId('ProfileCard.LastNameInput'), 'newValue');
        expect(screen.getByTestId('ProfileCard.FirstNameInput')).toHaveValue('newValue');
        expect(screen.getByTestId('ProfileCard.LastNameInput')).toHaveValue('newValue');

        await userEvent.click(screen.getByTestId('EditableProfileCard.CancelButton'));

        expect(screen.getByTestId('ProfileCard.FirstNameInput')).toHaveValue('admin');
        expect(screen.getByTestId('ProfileCard.LastNameInput')).toHaveValue('admin');
    });

    test('An error should appear', async () => {
        componentRender(<EditableProfileCard id="1" />, options);
        await userEvent.click(screen.getByTestId('EditableProfileCard.EditButton'));

        await userEvent.clear(screen.getByTestId('ProfileCard.FirstNameInput'));

        await userEvent.click(screen.getByTestId('EditableProfileCard.SaveButton'));

        expect(screen.getByTestId('EditableProfileCard.Error.Paragraph')).toBeInTheDocument();
    });

    test('In case of no validation errors a PUT request should be sent', async () => {
        const mockPutReq = jest.spyOn($api, 'put');
        componentRender(<EditableProfileCard id="1" />, options);
        await userEvent.click(screen.getByTestId('EditableProfileCard.EditButton'));

        await userEvent.type(screen.getByTestId('ProfileCard.FirstNameInput'), 'newValue');

        await userEvent.click(screen.getByTestId('EditableProfileCard.SaveButton'));

        expect(mockPutReq).toHaveBeenCalled();
    });
});
