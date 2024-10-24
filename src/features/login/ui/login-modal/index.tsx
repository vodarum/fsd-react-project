import { LoginForm } from '../login-form/index.async';
import { ModalOptions, PropsWithClassName } from '@/shared/api';
import { Modal } from '@/shared/ui/modal';

type LoginModalProps = ModalOptions & PropsWithClassName;

export const LoginModal = (props: LoginModalProps) => {
    return (
        <Modal {...props} keepOnClose>
            <LoginForm open={props.open} />
        </Modal>
    );
};
