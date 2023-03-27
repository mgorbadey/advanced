import { memo } from 'react';
import { classNames } from '@/shared/lib/classNames/classNames';
import BlockIcon from '@/shared/assets/icons/block.svg';
import ListIcon from '@/shared/assets/icons/list.svg';
import Button, { ButtonTheme } from '@/shared/ui/Button/Button';
import { Icon } from '@/shared/ui/Icon/Icon';
import { ArticleView } from '../../model/consts/articleConsts';
import cls from './ArticleViewSelector.module.scss';

interface ArticleViewSelectorProps {
  className?: string,
  view: ArticleView,
  onViewClick?: (view: ArticleView) => void
}

const viewTypes = [
    {
        view: ArticleView.BLOCK,
        icon: BlockIcon,
    },
    {
        view: ArticleView.LIST,
        icon: ListIcon,
    },
];

export const ArticleViewSelector = memo((props: ArticleViewSelectorProps) => {
    const { className, view, onViewClick } = props;

    const onClick = (newView:ArticleView) => () => {
        onViewClick?.(newView);
    };

    return (
        <div className={classNames(cls.ArticleViewSelector, {}, [className])}>
            {viewTypes.map((viewType) => (
                <Button
                    key={viewType.view}
                    theme={ButtonTheme.CLEAR}
                    onClick={onClick(viewType.view)}
                >
                    <Icon
                        Svg={viewType.icon}
                        className={classNames('', { [cls.notSelected]: viewType.view !== view })}
                    />
                </Button>
            ))}
        </div>
    );
});
