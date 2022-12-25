import { ArticleDetails } from 'entities/Article';
import { memo } from 'react';
import { useTranslation } from 'react-i18next';
import { useParams } from 'react-router-dom';
import { classNames } from 'shared/lib/classNames/classNames';
import cls from './ArticleDetailsPage.module.scss';

interface ArticleDetailsPageProps {
  className?: string
}

const ArticleDetailsPage = (props: ArticleDetailsPageProps) => {
    const { className } = props;
    const { t } = useTranslation();
    let { id } = useParams<{id:string}>();

    if (__PROJECT__ === 'storybook') { // штука для нормальной работы сторибука
        id = '1';
    }

    if (!id) {
        return (
            <div className={classNames(cls.ArticleDetailsPage, {}, [className])}>
                {t('Article not found')}
            </div>
        );
    }

    return (
        <div className={classNames(cls.ArticleDetailsPage, {}, [className])}>
            <ArticleDetails id={id} />
        </div>
    );
};

export default memo(ArticleDetailsPage);
