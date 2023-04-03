import { ReactNode } from 'react';
import { Overlay } from '../Overlay/Overlay';
import { Portal } from '../Portal/Portal';
import { classNames, Mods } from '@/shared/lib/classNames/classNames';
import { useModal } from '@/shared/lib/hooks/useModal/useModal';
import cls from './Modal.module.scss';

interface ModalProps {
  className?: string,
  children?:ReactNode,
  isOpen?:boolean,
  onClose?:()=>void,
  lazy?: boolean
}

export const Modal = (props: ModalProps) => {
    const {
        className, children, isOpen, onClose, lazy,
    } = props;

    const { isClosing, isMounted, closeHandler } = useModal({ onClose, isOpen, animationDelay: 300 });

    const mods:Mods = {
        [cls.opened]: isOpen,
        [cls.isClosing]: isClosing,
    };

    if (lazy && !isMounted) {
        return null;
    }

    return (
        <Portal>
            <div className={classNames(cls.Modal, mods, [className])}>
                <Overlay onClick={closeHandler} />
                <div className={cls.content}>
                    {children}
                </div>
            </div>
        </Portal>
    );
};
