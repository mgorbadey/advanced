import { ComponentStory, ComponentMeta } from '@storybook/react';
import React from 'react';

import { ListBox } from './ListBox';

export default {
    title: 'shared/ListBox',
    component: ListBox,
    argTypes: {
        backgroundColor: { control: 'color' },
    },
    decorators: [
        (Story) => <div style={{ padding: 100 }}><Story /></div>,
    ],
} as ComponentMeta < typeof ListBox>;

const Template: ComponentStory<typeof ListBox> = (args) => <ListBox {...args} />;

export const DefaultBottomRight = Template.bind({});
DefaultBottomRight.args = {
    defaultValue: 'Choose value',
    value: undefined,
    items: [
        { value: '1', content: '12345213451234512345' },
        { value: '2', content: '12345213451234512345', disabled: true },
        { value: '3', content: '12345213451234512345' },
    ],
};
export const BottomLeft = Template.bind({});
BottomLeft.args = {
    direction: 'bottom left',
    defaultValue: 'Choose value',
    value: undefined,
    items: [
        { value: '1', content: '12345213451234512345' },
        { value: '2', content: '12345213451234512345', disabled: true },
        { value: '3', content: '12345213451234512345' },
    ],
};
export const TopRight = Template.bind({});
TopRight.args = {
    direction: 'top right',
    defaultValue: 'Choose value',
    value: undefined,
    items: [
        { value: '1', content: '12345213451234512345' },
        { value: '2', content: '12345213451234512345', disabled: true },
        { value: '3', content: '12345213451234512345' },
    ],
};
export const TopLeft = Template.bind({});
TopLeft.args = {
    direction: 'top left',
    defaultValue: 'Choose value',
    value: undefined,
    items: [
        { value: '1', content: '12345213451234512345' },
        { value: '2', content: '12345213451234512345', disabled: true },
        { value: '3', content: '12345213451234512345' },
    ],
};
