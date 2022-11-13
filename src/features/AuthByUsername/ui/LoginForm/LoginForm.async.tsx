import { LoginFormProps } from 'features/AuthByUsername/ui/LoginForm/LoginForm';
import { FC, lazy } from 'react';

export const LoginFormAsync = lazy<FC<LoginFormProps>>(async () => await import('./LoginForm'));
