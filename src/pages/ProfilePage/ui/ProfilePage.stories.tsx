import { ComponentStory, ComponentMeta } from '@storybook/react';
import React from 'react';

import ProfilePage from './ProfilePage';

import { Country } from '@/entities/Country';
import { Currency } from '@/entities/Currency';
import { StoreDecorator } from '@/shared/config/storybook/StoreDecorator/StoreDecorator';
import { ThemeDecorator } from '@/shared/config/storybook/ThemeDecorator/ThemeDecorator';
import { Theme } from '@/shared/const/theme';

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
