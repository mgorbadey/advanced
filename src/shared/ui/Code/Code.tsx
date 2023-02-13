import { memo, useCallback } from 'react';
import { classNames } from 'shared/lib/classNames/classNames';
import Button, { ButtonTheme } from '../Button/Button';
import CopyInon from '../../assets/icons/copy.svg';
import cls from './Code.module.scss';

interface CodeProps {
  className?: string;
  codeText: string
}

export const Code = memo((props: CodeProps) => {
    const { className, codeText } = props;

    const onCopy = useCallback(() => {
        navigator.clipboard.writeText(codeText);
    }, [codeText]);

    return (
        <pre className={classNames(cls.Code, {}, [className])}>
            <Button
                className={cls.copyBtn}
                theme={ButtonTheme.CLEAR}
                onClick={onCopy}
            >
                <CopyInon className={cls.copyIcon} />
            </Button>
            <code>
                {codeText}
            </code>
        </pre>
    );
});
