import { ComponentStory, ComponentMeta } from '@storybook/react';
import React from 'react';
import { ArticleTypeTabs } from './ArticleTypeTabs';

export default {
    title: 'entities/ArticleTypeTabs',
    component: ArticleTypeTabs,
    argTypes: {
        backgroundColor: { control: 'color' },
    },
} as ComponentMeta < typeof ArticleTypeTabs>;

const Template: ComponentStory<typeof ArticleTypeTabs> = (args) => <ArticleTypeTabs {...args} />;

export const Primary = Template.bind({});
Primary.args = {

};
