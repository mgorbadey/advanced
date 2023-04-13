import { memo } from 'react';
import { useTranslation } from 'react-i18next';
import { useArticleRecommendationsList } from '../../api/articleRecommendationsApi';
import { ArticleList } from '@/entities/Article';
import { classNames } from '@/shared/lib/classNames/classNames';
import { Loader } from '@/shared/ui/Loader';
import { VStack } from '@/shared/ui/Stack';
import { Text, TextSize, TextTheme } from '@/shared/ui/Text';

interface ArticleRecommendationsListProps {
    className?: string;
}

export const ArticleRecommendationsList = memo(
    (props: ArticleRecommendationsListProps) => {
        const { className } = props;
        const { t } = useTranslation();
        const {
            data: articles,
            isLoading,
            error,
        } = useArticleRecommendationsList(3);

        if (isLoading) {
            return <Loader />;
        }
        if (error || !articles) {
            return (
                <Text
                    title={t('Recommendations not found')}
                    theme={TextTheme.ERROR}
                    size={TextSize.M}
                />
            );
        }

        return (
            <VStack
                data-testid="ArticleRecommendationsList"
                gap="8"
                className={classNames('', {}, [className])}
            >
                <Text size={TextSize.L} title={t('Recommended')} />
                <ArticleList articles={articles} target="_blank" />
            </VStack>
        );
    },
);
