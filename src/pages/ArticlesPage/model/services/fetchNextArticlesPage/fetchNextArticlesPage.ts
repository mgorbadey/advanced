import { createAsyncThunk } from '@reduxjs/toolkit';
import {
    getArticlesPageHasMore,
    getArticlesPageIsLoading,
    getArticlesPageNum,
} from '../../selectors/articlesPageSelectors';
import { articlesPageActions } from '../../slice/articlesPageSlice';
import { fetchArticlesList } from '../fetchArticlesList/fetchArticlesList';
import { ThunkConfig } from '@/app/providers/StoreProvider';

export const fetchNextArticlesPage = createAsyncThunk<
void,
void,
ThunkConfig<string>
>(
    'articlesPage/fetchNextArticlesPage',
    async (_, thunkApi) => {
        const { dispatch, getState } = thunkApi;
        const hasMore = getArticlesPageHasMore(getState());
        const page = getArticlesPageNum(getState());
        const isLoading = getArticlesPageIsLoading(getState());
        if (hasMore && !isLoading) {
            dispatch(articlesPageActions.setPage(page + 1));
            dispatch(fetchArticlesList({}));
        }
    },
);
