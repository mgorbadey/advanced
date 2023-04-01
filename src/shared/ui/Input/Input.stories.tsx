import React from 'react';
import { ComponentStory, ComponentMeta } from '@storybook/react';
import { ThemeDecorator } from '@/shared/config/storybook/ThemeDecorator/ThemeDecorator';
import { Input } from './Input';
import { Theme } from '@/shared/const/theme';

export default {
    title: 'shared/Input',
    component: Input,
    argTypes: {
        backgroundColor: { control: 'color' },
    },
} as ComponentMeta<typeof Input>;

const Template: ComponentStory<typeof Input> = (args) => <Input {...args} />;

export const Light = Template.bind({});
Light.args = {
    placeholder: 'Placeholder',
    value: 'Text',
};

export const Dark = Template.bind({});
Dark.args = {
    placeholder: 'Placeholder',
    value: 'Text',
};
Dark.decorators = [ThemeDecorator(Theme.DARK)]; // пример применения декоратора прям в стори
