import { createSelector } from '@reduxjs/toolkit';

import { StateSchema } from '@/app/providers/StoreProvider';

export const getRestoreScroll = (state: StateSchema) => state.restoreScroll.scroll;

export const getRestoreScrollByPath = createSelector(
    getRestoreScroll,
    (state: StateSchema, path: string) => path,
    (scroll, path) => scroll[path] || 0,
);
