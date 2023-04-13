import { ComponentStory, ComponentMeta } from '@storybook/react';
import React from 'react';
import withMock from 'storybook-addon-mock';
import { StoreDecorator } from '@/shared/config/storybook/StoreDecorator/StoreDecorator';
import { NotificationList } from './NotificationList';

export default {
    title: 'entities/Notification/NotificationList',
    component: NotificationList,
    argTypes: {
        backgroundColor: { control: 'color' },
    },
    decorators: [withMock],
} as ComponentMeta<typeof NotificationList>;

const Template: ComponentStory<typeof NotificationList> = (args) => (
    <NotificationList {...args} />
);

export const WithNotifications = Template.bind({});
WithNotifications.args = {};
WithNotifications.decorators = [StoreDecorator({})];
WithNotifications.parameters = {
    mockData: [
        {
            url: `${__API__}/notifications`,
            method: 'GET',
            status: 200,
            response: [
                {
                    id: '1',
                    title: 'Notification 1',
                    description: 'Notification description',
                },
                {
                    id: '2',
                    title: 'Notification 2',
                    description: 'Notification description',
                },
                {
                    id: '3',
                    title: 'Notification 3',
                    description: 'Link to Google',
                    href: 'www.google.com',
                },
            ],
        },
    ],
};
// export const Loading = Template.bind({});
// Loading.args = {};
// Loading.decorators = [StoreDecorator({})];
// Loading.parameters = {
//     mockData: [
//         {
//             url: `${__API__}/notifications`,
//             method: 'GET',
//             status: 202,
//             isLoading: true,
//             isFetching: true,
//         },
//     ],
// };
