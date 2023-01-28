import { ArticleDetailsCommentsSchema } from './ArticleDetailsCommentsSchema';
import {
    ArticleDetailsRecommendationsSchema,
} from './ArticleDetailsRecommendationsSchema';

export { ArticleDetailsCommentsSchema } from './ArticleDetailsCommentsSchema';
export { ArticleDetailsRecommendationsSchema } from './ArticleDetailsRecommendationsSchema';

export interface ArticleDetailsPageSchema {
    comments: ArticleDetailsCommentsSchema;
    recommendations: ArticleDetailsRecommendationsSchema
}
