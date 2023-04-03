import { ComponentStory, ComponentMeta } from '@storybook/react';
import React from 'react';
import { Flex } from './Flex';

export default {
    title: 'shared/Flex',
    component: Flex,
    argTypes: {
        backgroundColor: { control: 'color' },
    },
} as ComponentMeta < typeof Flex>;

const Template: ComponentStory<typeof Flex> = (args) => <Flex {...args} />;

export const Row = Template.bind({});
Row.args = {
    children: (
        <>
            <div>First</div>
            <div>Second</div>
            <div>Third</div>
            <div>Forth</div>
        </>
    ),
};

export const RowGap4 = Template.bind({});
RowGap4.args = {
    gap: '4',
    children: (
        <>
            <div>First</div>
            <div>Second</div>
            <div>Third</div>
            <div>Forth</div>
        </>
    ),
};

export const RowGap8 = Template.bind({});
RowGap8.args = {
    gap: '8',
    children: (
        <>
            <div>First</div>
            <div>Second</div>
            <div>Third</div>
            <div>Forth</div>
        </>
    ),
};

export const RowGap16 = Template.bind({});
RowGap16.args = {
    gap: '16',
    children: (
        <>
            <div>First</div>
            <div>Second</div>
            <div>Third</div>
            <div>Forth</div>
        </>
    ),
};
export const RowGap32 = Template.bind({});
RowGap32.args = {
    gap: '32',
    children: (
        <>
            <div>First</div>
            <div>Second</div>
            <div>Third</div>
            <div>Forth</div>
        </>
    ),
};

export const Column = Template.bind({});
Column.args = {
    direction: 'column',
    children: (
        <>
            <div>First</div>
            <div>Second</div>
            <div>Third</div>
            <div>Forth</div>
        </>
    ),
};
export const ColumnAlignEnd = Template.bind({});
ColumnAlignEnd.args = {
    align: 'end',
    direction: 'column',
    children: (
        <>
            <div>First</div>
            <div>Second</div>
            <div>Third</div>
            <div>Forth</div>
        </>
    ),
};

export const ColumnGap8 = Template.bind({});
ColumnGap8.args = {
    gap: '8',
    direction: 'column',
    children: (
        <>
            <div>First</div>
            <div>Second</div>
            <div>Third</div>
            <div>Forth</div>
        </>
    ),
};

export const ColumnGap32 = Template.bind({});
ColumnGap32.args = {
    gap: '32',
    direction: 'column',
    children: (
        <>
            <div>First</div>
            <div>Second</div>
            <div>Third</div>
            <div>Forth</div>
        </>
    ),
};
