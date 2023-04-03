import { ComponentStory, ComponentMeta } from '@storybook/react';
import React from 'react';

import { Drawer } from './Drawer';

export default {
    title: 'shared/Drawer',
    component: Drawer,
    argTypes: {
        backgroundColor: { control: 'color' },
    },
} as ComponentMeta<typeof Drawer>;
const children = (
    <>
        <div>12345678</div>
        <div>12345678</div>
        <div>12345678</div>
        <div>12345678</div>
    </>
);

const Template: ComponentStory<typeof Drawer> = (args) => <Drawer {...args} />;

export const Primary = Template.bind({});
Primary.args = {
    isOpen: true,
    children,
};
