import { Popover as HeadlessPopover } from '@headlessui/react';
import { ReactNode } from 'react';
import { classNames } from 'shared/lib/classNames/classNames';
import { DropdownDirection } from 'shared/types/ui';
import { mapDirectionClass } from '../../styles/consts';
import popupCls from '../../styles/popup.module.scss';
import cls from './Popover.module.scss';

interface PopoverProps {
  className?: string,
  trigger: ReactNode;
  direction?: DropdownDirection;
  children: ReactNode;
}

export function Popover(props: PopoverProps) {
    const {
        className, trigger, direction = 'bottom right', children,
    } = props;
    const panelClasses = [mapDirectionClass[direction]];

    return (
        <HeadlessPopover className={classNames(cls.Popover, {}, [className, popupCls.popup])}>
            <HeadlessPopover.Button className={popupCls.trigger}>
                { trigger}
            </HeadlessPopover.Button>

            <HeadlessPopover.Panel className={classNames(cls.panel, {}, panelClasses)}>
                { children}
            </HeadlessPopover.Panel>
        </HeadlessPopover>
    );
}