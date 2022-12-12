import { memo } from 'react';
import { classNames } from 'shared/lib/classNames/classNames';
import cls from './ArticleDetailsPage.module.scss';

interface ArticleDetailsPageProps {
  className?: string
}

const ArticleDetailsPage = (props: ArticleDetailsPageProps) => {
    const { className } = props;

    return (
        // eslint-disable-next-line i18next/no-literal-string
        <div className={classNames(cls.ArticleDetailsPage, {}, [className])}>
            Article details
        </div>
    );
};

export default memo(ArticleDetailsPage);
