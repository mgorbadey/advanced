import React from 'react';
import { ComponentStory, ComponentMeta } from '@storybook/react';
import { ThemeDecorator } from '@/shared/config/storybook/ThemeDecorator/ThemeDecorator';
import { Modal } from './Modal';
import { Theme } from '@/shared/const/theme';

export default {
    title: 'shared/Modal',
    component: Modal,
    argTypes: {
        backgroundColor: { control: 'color' },
    },
} as ComponentMeta<typeof Modal>;

const Template: ComponentStory<typeof Modal> = (args) => <Modal {...args} />;

export const Light = Template.bind({});
Light.args = {
    isOpen: true,
    children: `Lorem Ipsum is simply dummy text of the printing and typesetting industry.
    Lorem Ipsum has been the industry standard dummy text ever since the 1500s,
    when an unknown printer took a galley of type
    and scrambled it to make a type specimen book.
    It has survived not only five centuries, but
    also the leap into electronic typesetting,
    remaining essentially unchanged. It was popularised in the 1960s with the release of
    Letraset sheets containing Lorem Ipsum passages,
    and more recently with desktop publishing software
    like Aldus PageMaker including versions of Lorem Ipsum.`,
};

export const Dark = Template.bind({});
Dark.args = {
    isOpen: true,
    children: `Lorem Ipsum is simply dummy text of the printing and typesetting industry.
    Lorem Ipsum has been the industry standard dummy text ever since the 1500s,
    when an unknown printer took a galley of type
    and scrambled it to make a type specimen book.
    It has survived not only five centuries, but
    also the leap into electronic typesetting,
    remaining essentially unchanged. It was popularised in the 1960s with the release of
    Letraset sheets containing Lorem Ipsum passages,
    and more recently with desktop publishing software
    like Aldus PageMaker including versions of Lorem Ipsum.`,
};
Dark.decorators = [ThemeDecorator(Theme.DARK)];
