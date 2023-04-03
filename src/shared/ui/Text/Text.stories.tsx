import { ComponentStory, ComponentMeta } from '@storybook/react';
import React from 'react';
import { ThemeDecorator } from '@/shared/config/storybook/ThemeDecorator/ThemeDecorator';
import { Theme } from '@/shared/const/theme';
import { Text, TextSize, TextTheme } from './Text';

export default {
    title: 'shared/Text',
    component: Text,
    argTypes: {
        backgroundColor: { control: 'color' },
    },
} as ComponentMeta<typeof Text>;

const Template: ComponentStory<typeof Text> = (args) => <Text {...args} />;

export const Light = Template.bind({});
Light.args = {
    title: 'Title',
    text: 'Text',
};

export const SizeS = Template.bind({});
SizeS.args = {
    title: 'Title',
    text: 'Text',
    size: TextSize.S,
};
export const SizeM = Template.bind({});
SizeM.args = {
    title: 'Title',
    text: 'Text',
    size: TextSize.M,
};
export const SizeL = Template.bind({});
SizeL.args = {
    title: 'Title',
    text: 'Text',
    size: TextSize.L,
};

export const LightOnlyTitle = Template.bind({});
LightOnlyTitle.args = {
    title: 'Title',
};

export const LightOnlyText = Template.bind({});
LightOnlyText.args = {
    text: 'Text',
};

export const Dark = Template.bind({});
Dark.args = {
    title: 'Title',
    text: 'Text',
};
Dark.decorators = [ThemeDecorator(Theme.DARK)];

export const DarkOnlyTitle = Template.bind({});
DarkOnlyTitle.args = {
    title: 'Title',
};
DarkOnlyTitle.decorators = [ThemeDecorator(Theme.DARK)];

export const DarkOnlyText = Template.bind({});
DarkOnlyText.args = {
    text: 'Text',
};
DarkOnlyText.decorators = [ThemeDecorator(Theme.DARK)];

export const Error = Template.bind({});
Error.args = {
    title: 'Title',
    text: 'Text',
    theme: TextTheme.ERROR,
};
