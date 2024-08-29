import { Modal } from 'shared/ui/Modal';
import { LoginForm } from '../login-form/LoginForm.async';
import { ComponentProps } from 'react';

type CommonModalProps = Pick<
    ComponentProps<typeof Modal>,
    'isOpen' | 'onClose'
>;

type LoginModalProps = CommonModalProps & {
    className?: string;
};

export const LoginModal = (props: LoginModalProps) => {
    return (
        <Modal {...props} keepOnClose>
            <LoginForm isOpen={props.isOpen} />
        </Modal>
    );
};
