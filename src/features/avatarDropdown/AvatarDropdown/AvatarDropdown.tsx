import { memo, useCallback } from 'react';
import { useTranslation } from 'react-i18next';
import { useDispatch, useSelector } from 'react-redux';
import {
    getUserAuthData, isUserAdmin, isUserManager, userActions,
} from '@/entities/User';
import { getRouteAdminPanel, getRouteProfile } from '@/shared/const/router';
import { classNames } from '@/shared/lib/classNames/classNames';
import { Avatar } from '@/shared/ui/Avatar';
import { Dropdown } from '@/shared/ui/Popups';

interface AvatarDropdownProps {
  className?: string,
}

export const AvatarDropdown = memo((props: AvatarDropdownProps) => {
    const { className } = props;
    const { t } = useTranslation();
    const dispatch = useDispatch();
    const authData = useSelector(getUserAuthData);
    const isAdmin = useSelector(isUserAdmin);
    const isManager = useSelector(isUserManager);

    const isAdminPanelAvailable = isAdmin || isManager;

    const onLogout = useCallback(() => {
        dispatch(userActions.logout());
    }, [dispatch]);

    if (!authData) {
        return null;
    }

    return (
        <Dropdown
            className={classNames('', {}, [className])}
            trigger={<Avatar size={30} src={authData.avatar} fallbackInverted />}
            direction="bottom left"
            items={[
                ...(isAdminPanelAvailable
                    ? [{
                        content: t('Admin panel'),
                        href: getRouteAdminPanel(),
                    }]
                    : []),
                {
                    content: t('Profile'),
                    href: getRouteProfile(authData.id),
                },
                {
                    content: t('Logout'),
                    onClick: onLogout,
                },
            ]}
        />

    );
});
