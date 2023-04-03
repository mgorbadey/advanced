import { createSelector } from '@reduxjs/toolkit';
import { SidebarItemType } from '../types/sidebar';
import { getUserAuthData } from '@/entities/User';
import AboutIcon from '@/shared/assets/icons/about.svg';
import ArticleIcon from '@/shared/assets/icons/article.svg';
import MainIcon from '@/shared/assets/icons/main.svg';
import ProfileIcon from '@/shared/assets/icons/profile.svg';
import { RoutePath } from '@/shared/const/router';

export const getSidebatItems = createSelector(
    getUserAuthData,
    (userData) => {
        const sidebarItemsList:SidebarItemType[] = [
            {
                path: RoutePath.main,
                text: 'Main Page',
                Icon: MainIcon,
            },
            {
                path: RoutePath.about,
                text: 'About',
                Icon: AboutIcon,
            },
        ];
        if (userData) {
            sidebarItemsList.push(
                {
                    path: RoutePath.profile + userData.id,
                    text: 'Profile',
                    Icon: ProfileIcon,
                    authOnly: true,
                },
                {
                    path: RoutePath.articles,
                    text: 'Articles',
                    Icon: ArticleIcon,
                    authOnly: true,
                },
            );
        }
        return sidebarItemsList;
    },
);
