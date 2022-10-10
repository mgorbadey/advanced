/* eslint-disable i18next/no-literal-string */
import { render, screen } from '@testing-library/react';
import { Button } from 'shared/ui/Button/Button';

describe('Button tests', () => {
    test('Button test', () => {
        render(<Button>TEST</Button>);
        expect(screen.getByText('TEST')).toBeInTheDocument();
    });
});
