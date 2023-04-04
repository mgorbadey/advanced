import { addDecorator } from '@storybook/react';
import { RouterDecorator } from '../../src/shared/config/storybook/RouterDecorator/RouterDecotator';
import { StyleDecorator } from '../../src/shared/config/storybook/StyleDecorator/StyleDecorator';
import { SuspenseDecorator } from '../../src/shared/config/storybook/SuspenseDecorator/SuspenseDecorator';
import { ThemeDecorator } from '../../src/shared/config/storybook/ThemeDecorator/ThemeDecorator';
import { Theme } from '../../src/shared/const/theme';

export const parameters = {
    actions: { argTypesRegex: '^on[A-Z].*' },
    controls: {
        matchers: {
            color: /(background|color)$/i,
            date: /Date$/,
        },
    },
    layout: 'fullscreen',
    themes: {
        default: 'Light',
        list: [
            { name: 'Light', class: Theme.LIGHT, color: '#ffffff' },
            { name: 'Dark', class: Theme.DARK, color: '#000000' },
            { name: 'Green', class: Theme.GREEN, color: '#34501b' },
        ],
    },
};

addDecorator(StyleDecorator);
addDecorator(ThemeDecorator(Theme.LIGHT)); // дефолтно декорируем светлой темой, где надо тёмную - навешиваем прям на стори
addDecorator(RouterDecorator);
addDecorator(SuspenseDecorator);
