import { createAsyncThunk } from '@reduxjs/toolkit';
import { ThunkConfig } from 'app/providers/StoreProvider';
import { SortOrder } from 'shared/types';
import { ArticleSortField, ArticleType } from 'entities/Article';
import { getArticlesPageInited } from '../../selectors/articlesPageSelectors';
import { fetchArticlesList } from '../fetchArticlesList/fetchArticlesList';
import { articlesPageActions } from '../../slice/articlesPageSlice';

export const initArticlesPage = createAsyncThunk<
void,
URLSearchParams,
ThunkConfig<string>
>(
    'articlesPage/initArticlesPage',
    async (searchParams, thunkApi) => {
        const { dispatch, getState } = thunkApi;
        const inited = getArticlesPageInited(getState());
        if (!inited) {
            const orderFromUrl = searchParams.get('order') as SortOrder;
            const sortFromUrl = searchParams.get('sort') as ArticleSortField;
            const searchFromUrl = searchParams.get('search');
            const typeFromUrl = searchParams.get('type') as ArticleType;

            if (orderFromUrl) {
                articlesPageActions.setOrder(orderFromUrl);
            }
            if (sortFromUrl) {
                articlesPageActions.setSort(sortFromUrl);
            }
            if (searchFromUrl) {
                articlesPageActions.setSearch(searchFromUrl);
            }
            if (typeFromUrl) {
                articlesPageActions.setType(typeFromUrl);
            }

            dispatch(articlesPageActions.initState());
            dispatch(fetchArticlesList({}));
        }
    },
);
