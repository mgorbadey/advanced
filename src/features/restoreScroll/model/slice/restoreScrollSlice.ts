import { createSlice, PayloadAction } from '@reduxjs/toolkit';

import { RestoreScrollSchema } from '../types/restoreScrollSchema';

const initialState: RestoreScrollSchema = {
    scroll: {},
};

export const restoreScrollSlice = createSlice({
    name: 'restoreScroll',
    initialState,
    reducers: {
        setScrollPosition: (state, action:PayloadAction<{path:string, position:number}>) => {
            state.scroll[action.payload.path] = action.payload.position;
        },
    },
});

// Action creators are generated for each case reducer function
export const { actions: restoreScrollActions } = restoreScrollSlice;
export const { reducer: restoreScrollReducer } = restoreScrollSlice;
