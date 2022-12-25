export {
    ArticleDetails,
} from './ui/ArticleDetails/ArticleDetails';

export {
    articleDetailsActions,
    articleDetailsReducer,
} from './model/slice/articleDetailsSlice';

export { fetchArticleById } from './model/services/fetchArticleById/fetchArticleById';

export type { Article } from './model/types/article';
export type { ArticleDetailsSchema } from './model/types/articleDetailsSchema';
