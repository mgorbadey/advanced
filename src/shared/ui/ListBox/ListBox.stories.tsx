import React from 'react';
import { ComponentStory, ComponentMeta } from '@storybook/react';
import { ListBox } from './ListBox';

export default {
    title: 'shared/ListBox',
    component: ListBox,
    argTypes: {
        backgroundColor: { control: 'color' },
    },
} as ComponentMeta < typeof ListBox>;

const Template: ComponentStory<typeof ListBox> = (args) => <ListBox {...args} />;

export const Primary = Template.bind({});
Primary.args = {
    defaultValue: 'Choose value',
    value: undefined,
    items: [
        { value: '1', content: '1' },
        { value: '2', content: '2', disabled: true },
        { value: '3', content: '3' },
    ],
};
