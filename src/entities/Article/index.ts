export { ArticleDetails } from './ui/ArticleDetails/ArticleDetails';
export { ArticleList } from './ui/ArticleList/ArticleList';
export { getArticleDetailsData } from './model/selectors/articleDetails';
export {
    articleDetailsActions,
    articleDetailsReducer,
} from './model/slice/articleDetailsSlice';

export { fetchArticleById } from './model/services/fetchArticleById/fetchArticleById';

export type { Article } from './model/types/article';
export type { ArticleDetailsSchema } from './model/types/articleDetailsSchema';
export {
    ArticleView,
    ArticleSortField,
    ArticleType,
    ArticleBlockType,
} from './model/consts/articleConsts';
