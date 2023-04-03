import { createAsyncThunk } from '@reduxjs/toolkit';
import { Article } from '../../types/article';
import { ThunkConfig } from '@/app/providers/StoreProvider';

export const fetchArticleById = createAsyncThunk<
Article,
string | undefined,
ThunkConfig<string>
>(
    'articleDetails/fetchArticleById',
    async (articleId, thunkApi) => {
        const { rejectWithValue, extra } = thunkApi;
        try {
            if (!articleId) {
                throw new Error('Article not found');
            }
            const response = await extra.api.get<Article>(`/articles/${articleId}`, {
                params: {
                    _expand: 'user',
                },
            });

            if (!response.data) {
                throw new Error();
            }

            return response.data;
        } catch (error) {
            console.log(error);
            return rejectWithValue('error');
        }
    },
);
