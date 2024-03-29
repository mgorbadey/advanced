import { ComponentStory, ComponentMeta } from '@storybook/react';
import React from 'react';
import { ThemeDecorator } from '@/shared/config/storybook/ThemeDecorator/ThemeDecorator';
import { Theme } from '@/shared/const/theme';
import { NotificationItem } from './NotificationItem';

export default {
    title: 'entities/Notification/NotificationItem',
    component: NotificationItem,
    argTypes: {
        backgroundColor: { control: 'color' },
    },
} as ComponentMeta<typeof NotificationItem>;

const Template: ComponentStory<typeof NotificationItem> = (args) => (
    <NotificationItem {...args} />
);

export const NoLinkDark = Template.bind({});
NoLinkDark.args = {
    item: {
        id: '1',
        title: 'Notification',
        description: 'Notification content',
    },
};
NoLinkDark.decorators = [ThemeDecorator(Theme.DARK)];

export const WithLink = Template.bind({});
WithLink.args = {
    item: {
        id: '1',
        title: 'Notification',
        description: 'Link to Google',
        href: 'www.google.com',
    },
};
