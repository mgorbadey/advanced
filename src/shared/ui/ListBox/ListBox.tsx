import { Fragment, ReactNode } from 'react';
import { Listbox as HeadlessListBox } from '@headlessui/react';
import { classNames } from 'shared/lib/classNames/classNames';
import { HStack } from '../Stack';
import Button from '../Button/Button';
import cls from './ListBox.module.scss';

export interface ListBoxItem {
  value: string;
  content: ReactNode;
  disabled?: boolean;
}

type DropdownDirection = 'top' | 'bottom'

interface ListBoxProps{
  items?: ListBoxItem[];
  className?: string;
  value?: string;
  defaultValue?: string;
  onChange: (value: string) => void;
  readonly?: boolean;
  direction?: DropdownDirection;
  label?: string;
}

const mapDirectionClass: Record<DropdownDirection, string> = {
    top: cls.optionsTop,
    bottom: cls.optionsBottom,
};

export function ListBox(props: ListBoxProps) {
    const {
        items, className, value, defaultValue, onChange, readonly, direction = 'bottom', label,
    } = props;

    const optionsClasses = [mapDirectionClass[direction]];

    return (
        <HStack gap="4">
            {label && <span>{`${label}>`}</span>}
            <HeadlessListBox
                as="div"
                className={classNames(cls.ListBox, {}, [className])}
                value={value}
                onChange={onChange}
                disabled={readonly}
            >
                <HeadlessListBox.Button disabled={readonly} className={cls.trigger}>
                    <Button disabled={readonly}>
                        {value ?? defaultValue}
                    </Button>
                </HeadlessListBox.Button>
                <HeadlessListBox.Options className={classNames(cls.options, {}, optionsClasses)}>
                    {items?.map((item) => (
                        <HeadlessListBox.Option
                            key={item.value}
                            value={item.value}
                            disabled={item.disabled}
                            as={Fragment}
                        >
                            {({ active, selected }) => (
                                <li className={classNames(
                                    cls.item,
                                    {
                                        [cls.active]: active,
                                        [cls.selected]: selected,
                                        [cls.disabled]: item.disabled,
                                    },
                                )}
                                >
                                    {item.content}
                                </li>
                            )}
                        </HeadlessListBox.Option>
                    ))}
                </HeadlessListBox.Options>
            </HeadlessListBox>
        </HStack>
    );
}
