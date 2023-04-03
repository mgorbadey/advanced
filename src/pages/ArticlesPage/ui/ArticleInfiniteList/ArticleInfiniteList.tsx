import { memo } from 'react';
import { useTranslation } from 'react-i18next';
import { useSelector } from 'react-redux';
import {
    getArticlesPageError, getArticlesPageIsLoading, getArticlesPageView,
} from '../../model/selectors/articlesPageSelectors';
import { getArticles } from '../../model/slice/articlesPageSlice';
import { ArticleList } from '@/entities/Article';
import { Text } from '@/shared/ui/Text';

interface ArticleInfiniteListProps {
  className?: string,
}

export const ArticleInfiniteList = memo((props: ArticleInfiniteListProps) => {
    const { className } = props;
    const { t } = useTranslation();
    const articles = useSelector(getArticles.selectAll);
    const isLoading = useSelector(getArticlesPageIsLoading);
    const error = useSelector(getArticlesPageError);
    const view = useSelector(getArticlesPageView);

    if (error) {
        return (
            <Text title={t('An error occured while loadind articles')} />
        );
    }

    return (
        <ArticleList
            articles={articles}
            isLoading={isLoading}
            view={view}
            className={className}
        />
    );
});
