/* eslint-disable max-len */
import { ArticleList, ArticleView } from 'entities/Article';
import { memo } from 'react';
import { classNames } from 'shared/lib/classNames/classNames';
import cls from './ArticlesPage.module.scss';

interface ArticlesPageProps {
  className?: string,
}

const ArticlesPage = (props: ArticlesPageProps) => {
    const { className } = props;

    return (
        <div className={classNames(cls.ArticlesPage, {}, [className])}>
            <ArticleList
                isLoading
                view={ArticleView.LIST}
                articles={[]}
            />
        </div>
    );
};

export default memo(ArticlesPage);
