export { ArticleDetails } from './ui/ArticleDetails/ArticleDetails';
export { ArticleList } from './ui/ArticleList/ArticleList';

export {
    articleDetailsActions,
    articleDetailsReducer,
} from './model/slice/articleDetailsSlice';

export { fetchArticleById } from './model/services/fetchArticleById/fetchArticleById';

export { Article, ArticleView } from './model/types/article';
export type { ArticleDetailsSchema } from './model/types/articleDetailsSchema';
