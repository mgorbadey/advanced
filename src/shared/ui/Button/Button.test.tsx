import { render, screen } from '@testing-library/react';
import { Button, ButtonTheme } from './Button';

describe('Button tests', () => {
    test('Button test', () => {
        render(<Button>TEST</Button>);
        expect(screen.getByText('TEST')).toBeInTheDocument();
    });
    test('Button test with CLEAR theme', () => {
        render(<Button theme={ButtonTheme.CLEAR}>TEST</Button>);
        expect(screen.getByText('TEST')).toHaveClass('clear');
    });
});
