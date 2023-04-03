import { memo } from 'react';
import { useParams } from 'react-router-dom';

import cls from './ArticleEditPage.module.scss';

import { classNames } from '@/shared/lib/classNames/classNames';
import { Page } from '@/widgets/Page';

interface ArticleEditPageProps {
    className?: string,
}

const ArticleEditPage = memo((props: ArticleEditPageProps) => {
    const { className } = props;
    const { id } = useParams<{ id: string }>();
    const isEdit = Boolean(id);

    return (
        <Page className={classNames(cls.ArticleEditPage, {}, [className])}>
            {isEdit
                ? `Editing article with id = ${id}`
                : 'Creating new article'}
        </Page>
    );
});

export default ArticleEditPage;
