import { memo, useCallback } from 'react';
import { useTranslation } from 'react-i18next';
import { classNames } from 'shared/lib/classNames/classNames';
import { Select } from 'shared/ui/Select/Select';
import { Country } from '../../model/types/country';

interface CountrySelectProps {
  className?: string,
  value?: Country,
  onChange?: (value: Country) => void,
  readonly?: boolean
}

const options = [
    { value: Country.Russia, content: Country.Russia },
    { value: Country.Armenia, content: Country.Armenia },
    { value: Country.Georgia, content: Country.Georgia },
    { value: Country.Kazahstan, content: Country.Kazahstan },
    { value: Country.Greece, content: Country.Greece },
    { value: Country.UnitedStates, content: Country.UnitedStates },
];

export const CountrySelect = memo((props: CountrySelectProps) => {
    const {
        className,
        value,
        onChange,
        readonly,
    } = props;

    const { t } = useTranslation('profile');

    const onChangeHandler = useCallback((value:string) => {
        onChange?.(value as Country);
    }, [onChange]);

    return (
        <Select
            className={classNames('', {}, [className])}
            label={t('Select country')}
            options={options}
            value={value}
            onChange={onChangeHandler}
            readonly={readonly}
        />

    );
});
