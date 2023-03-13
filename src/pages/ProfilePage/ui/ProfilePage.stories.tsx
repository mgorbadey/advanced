import React from 'react';
import { ComponentStory, ComponentMeta } from '@storybook/react';
import { ThemeDecorator } from 'shared/config/storybook/ThemeDecorator/ThemeDecorator';
import { Theme } from 'app/providers/ThemeProvider';
import { StoreDecorator } from 'shared/config/storybook/StoreDecorator/StoreDecorator';
import { Currency } from 'entities/Currency';
import { Country } from 'entities/Country';
import ProfilePage from './ProfilePage';

export default {
    title: 'pages/ProfilePage/ProfilePage',
    component: ProfilePage,
    argTypes: {
        backgroundColor: { control: 'color' },
    },
} as ComponentMeta<typeof ProfilePage>;

const Template: ComponentStory<typeof ProfilePage> = () => <ProfilePage />;

export const Light = Template.bind({});
Light.args = {};
Light.decorators = [StoreDecorator({
    profile: {
        readonly: true,
        form: {
            username: 'gormisha',
            age: 25,
            firstname: 'Mike',
            lastname: 'Smith',
            city: 'San Francisco',
            currency: Currency.USD,
            country: Country.Russia,
        },
    },
})];

export const Dark = Template.bind({});
Dark.args = {};
Dark.decorators = [
    ThemeDecorator(Theme.DARK),
    StoreDecorator({
        profile: {
            readonly: true,
            form: {
                username: 'gormisha',
                age: 25,
                firstname: 'Mike',
                lastname: 'Smith',
                city: 'San Francisco',
                currency: Currency.USD,
                country: Country.Russia,
            },
        },
    }),
];
