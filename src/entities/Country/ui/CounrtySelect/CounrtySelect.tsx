import { memo, useCallback } from 'react';
import { useTranslation } from 'react-i18next';
import { ListBox } from 'shared/ui/Popups/index';
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
        <ListBox
            className={className}
            defaultValue={t('Select country')}
            items={options}
            value={value}
            onChange={onChangeHandler}
            readonly={readonly}
            direction="bottom right"
        />
    );
});
