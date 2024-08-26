import { MouseEvent, PropsWithChildren, useCallback, useEffect } from 'react';
import { classNames } from 'shared/lib/classNames/classNames';
import { useTheme } from 'shared/lib/theme';
import { Portal } from 'shared/ui/Portal';
import cls from './Modal.module.scss';

type ModalProps = PropsWithChildren & {
    className?: string;
    isOpen?: boolean;
    onClose?: () => void;
    targetContainer?: Element;
};

export const Modal = (props: ModalProps) => {
    const { theme } = useTheme();
    const { children, className, isOpen, onClose, targetContainer } = props;
    const dataRole = `modalWrapper`;

    const handleClick = useCallback(
        (e: MouseEvent) => {
            const parent = (e.target as HTMLElement)?.parentElement;
            if (parent.dataset.role === dataRole) onClose?.();
        },
        [onClose],
    );

    const handleKeyDown = useCallback(
        (e: KeyboardEvent) => {
            if (e.key === 'Escape') onClose?.();
        },
        [onClose],
    );

    useEffect(() => {
        if (isOpen) {
            addEventListener('keydown', handleKeyDown);
        }

        return () => {
            removeEventListener('keydown', handleKeyDown);
        };
    }, [isOpen, handleKeyDown]);

    return (
        <Portal container={targetContainer}>
            <div
                className={classNames(cls.modal, { [cls.opened]: isOpen }, [
                    className,
                    theme,
                ])}
                onClick={handleClick}
                data-role={dataRole}
            >
                <div className={cls.overlay}>
                    <div className={cls.content}>{children}</div>
                </div>
            </div>
        </Portal>
    );
};
