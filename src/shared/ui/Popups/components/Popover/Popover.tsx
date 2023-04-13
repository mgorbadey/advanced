import { Popover as HeadlessPopover } from '@headlessui/react';
import { ReactNode } from 'react';
import { mapDirectionClass } from '../../styles/consts';
import popupCls from '../../styles/popup.module.scss';
import { classNames } from '@/shared/lib/classNames/classNames';
import { DropdownDirection } from '@/shared/types/ui';
import cls from './Popover.module.scss';

interface PopoverProps {
    className?: string;
    trigger: ReactNode;
    direction?: DropdownDirection;
    children: ReactNode;
}

export function Popover(props: PopoverProps) {
    const { className, trigger, direction = 'bottom right', children } = props;
    const panelClasses = [mapDirectionClass[direction]];

    return (
        <HeadlessPopover
            className={classNames(cls.Popover, {}, [className, popupCls.popup])}
        >
            <HeadlessPopover.Button as="div" className={popupCls.trigger}>
                {trigger}
            </HeadlessPopover.Button>

            <HeadlessPopover.Panel
                className={classNames(cls.panel, {}, panelClasses)}
            >
                {children}
            </HeadlessPopover.Panel>
        </HeadlessPopover>
    );
}
