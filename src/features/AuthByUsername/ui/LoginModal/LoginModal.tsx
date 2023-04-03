import { Suspense } from 'react';
import { LoginFormAsync } from '../LoginForm/LoginForm.async';
import { classNames } from '@/shared/lib/classNames/classNames';
import { Loader } from '@/shared/ui/Loader';
import { Modal } from '@/shared/ui/Modal';
import cls from './LoginModal.module.scss';

interface LoginModalProps {
  className?: string,
  isOpen:boolean,
  onClose: ()=>void
}

export const LoginModal = ({ className, isOpen, onClose }: LoginModalProps) => (
    <Modal
        className={classNames(cls.LoginModal, {}, [className])}
        isOpen={isOpen}
        onClose={onClose}
        lazy
    >
        <Suspense fallback={<Loader />}>
            <LoginFormAsync onSuccess={onClose} />
        </Suspense>
    </Modal>
);
