import {
    MouseEvent,
    PropsWithChildren,
    useCallback,
    useEffect,
    useState,
} from 'react';
import { classNames } from 'shared/lib/class-names';
import { useTheme } from 'shared/lib/theme';
import { Portal } from 'shared/ui/portal';
import cls from './index.module.scss';

type ModalProps = PropsWithChildren & {
    className?: string;
    isOpen?: boolean;
    keepOnClose?: boolean;
    onClose?: () => void;
    targetContainer?: Element;
};

export const Modal = (props: ModalProps) => {
    const { theme } = useTheme();
    const {
        children,
        className,
        isOpen,
        keepOnClose,
        onClose,
        targetContainer,
    } = props;
    const [isMounted, setIsMounted] = useState(false);
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
            setIsMounted(true);
        }

        return () => {
            removeEventListener('keydown', handleKeyDown);
        };
    }, [isOpen, handleKeyDown]);

    if (!isMounted || (!keepOnClose && !isOpen)) return null;

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
