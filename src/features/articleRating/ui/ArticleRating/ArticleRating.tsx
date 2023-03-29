import { memo, useCallback } from 'react';
import { useTranslation } from 'react-i18next';
import { useSelector } from 'react-redux';
import { RatingCard } from '@/entities/Rating';
import { useGetAtricleRating, useRateArticle } from '../../api/articleRatingApi';
import { getUserAuthData } from '@/entities/User';
import { Skeleton } from '@/shared/ui/Skeleton/Skeleton';

export interface ArticleRatingProps {
  className?: string;
  articleId: string;
}

const ArticleRating = memo((props: ArticleRatingProps) => {
    const { className, articleId } = props;
    const { t } = useTranslation();
    const userData = useSelector(getUserAuthData);
    const { data, isLoading } = useGetAtricleRating({ userId: userData?.id ?? '', articleId });
    const [rateAaticleMutation] = useRateArticle();

    const rating = data?.[0];

    const handleRateArticle = useCallback((starsCount:number, feedback?: string) => {
        try {
            rateAaticleMutation({
                userId: userData?.id ?? '',
                articleId,
                rate: starsCount,
                feedback,
            });
        } catch (error) {
            console.log(error);
        }
    }, [articleId, rateAaticleMutation, userData?.id]);

    const onAccept = useCallback((starsCount:number, feedback?: string) => {
        handleRateArticle(starsCount, feedback);
    }, [handleRateArticle]);

    const onCancel = useCallback((starsCount:number) => {
        handleRateArticle(starsCount);
    }, [handleRateArticle]);

    if (isLoading) {
        return <Skeleton width="100%" height={120} />;
    }

    return (
        <RatingCard
            rate={rating?.rate}
            onAccept={onAccept}
            onCancel={onCancel}
            className={className}
            title={t('Rank an article!')}
            feedbackTitle={t('Write a review')}
            hasFeedback
        />
    );
});

export default ArticleRating;
