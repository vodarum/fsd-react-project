import { PropsWithChildren } from 'react';
import cls from './index.module.scss';
import { ModalOptions, PropsWithClassName } from '@/shared/api';
import { classNames } from '@/shared/lib/class-names';
import { useModal } from '@/shared/lib/hooks';
import { useTheme } from '@/shared/lib/theme';
import { Portal } from '@/shared/ui/portal';

type ModalProps = PropsWithChildren &
    PropsWithClassName &
    ModalOptions & {
        keepOnClose?: boolean;
        targetContainer?: Element;
    };

export const Modal = (props: ModalProps) => {
    const { theme } = useTheme();
    const { children, className, open, keepOnClose, onClose, targetContainer } =
        props;
    const { isMounted } = useModal({
        open,
        onClose,
    });

    if (!isMounted || (!keepOnClose && !open)) return null;

    return (
        <Portal container={targetContainer}>
            <div
                className={classNames(cls.modal, { [cls.open]: open }, [theme])}
            >
                {open && <div className={cls.overlay} onClick={onClose} />}

                <div className={classNames(cls.content, {}, [className])}>
                    {children}
                </div>
            </div>
        </Portal>
    );
};
