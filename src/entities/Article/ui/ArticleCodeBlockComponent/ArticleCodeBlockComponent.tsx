/* eslint-disable i18next/no-literal-string */
import { memo } from 'react';
import { classNames } from 'shared/lib/classNames/classNames';
import { Code } from 'shared/ui/Code/Code';
import { ArticleCodeBlock } from '../../model/types/article';
import cls from './ArticleCodeBlockComponent.module.scss';

interface ArticleCodeBlockComponentProps {
    className?: string;
    block: ArticleCodeBlock
}

export const ArticleCodeBlockComponent = memo((props: ArticleCodeBlockComponentProps) => {
    const { className, block } = props;

    return (
        <div className={classNames(cls.ArticleCodeBlockComponent, {}, [className])}>
            <Code codeText={block.code} />
        </div>
    );
});
