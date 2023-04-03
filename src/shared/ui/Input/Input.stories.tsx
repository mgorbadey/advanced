import { ComponentStory, ComponentMeta } from '@storybook/react';
import React from 'react';
import { ThemeDecorator } from '@/shared/config/storybook/ThemeDecorator/ThemeDecorator';
import { Theme } from '@/shared/const/theme';
import { Input } from './Input';

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
