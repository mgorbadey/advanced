import { memo, useCallback } from 'react';
import { useTranslation } from 'react-i18next';
import { ListBox } from '@/shared/ui/Popups/index';
import { Currency } from '../../model/types/currency';

interface CurrencySelectProps {
  className?: string,
  value?: Currency,
  onChange?: (value: Currency) => void,
  readonly?: boolean
}

const options = [
    { value: Currency.RUB, content: Currency.RUB },
    { value: Currency.USD, content: Currency.USD },
    { value: Currency.EUR, content: Currency.EUR },
];

export const CurrencySelect = memo((props: CurrencySelectProps) => {
    const {
        className,
        value,
        onChange,
        readonly,
    } = props;

    const { t } = useTranslation('profile');

    const onChangeHandler = useCallback((value:string) => {
        onChange?.(value as Currency);
    }, [onChange]);

    return (
        <ListBox
            className={className}
            defaultValue={t('Select currency')}
            items={options}
            value={value}
            onChange={onChangeHandler}
            readonly={readonly}
            direction="bottom right"
        />
    );
});
