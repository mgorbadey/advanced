import { ComponentStory, ComponentMeta } from '@storybook/react';
import React from 'react';
import { StoreDecorator } from '@/shared/config/storybook/StoreDecorator/StoreDecorator';
import { ArticleDetailsComments } from './ArticleDetailsComments';

export default {
    title: 'pages/ArticleDetailsPage/ArticleDetailsComments',
    component: ArticleDetailsComments,
    argTypes: {
        backgroundColor: { control: 'color' },
    },
} as ComponentMeta < typeof ArticleDetailsComments>;

const Template: ComponentStory<typeof ArticleDetailsComments> = (args) => <ArticleDetailsComments {...args} />;

export const Primary = Template.bind({});
Primary.args = {
    id: '1',
};
Primary.decorators = [StoreDecorator({})];
