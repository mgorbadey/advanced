import { RouteProps } from 'react-router-dom';
// eslint-disable-next-line fsd-path-checker-plugin/layer-imports
import { UserRole } from '@/entities/User';

export type AppRouteProps = RouteProps & {
    authOnly?: boolean;
    roles?: UserRole[]
}
