import { PropsWithChildren } from 'react';
import cls from './index.module.scss';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faXmark } from '@fortawesome/free-solid-svg-icons';
import { ModalOptions, PropsWithClassName } from '@/shared/api';
import { classNames } from '@/shared/lib/class-names';
import { useModal } from '@/shared/lib/hooks';
import { HStack } from '@/shared/ui/stack';
import { Title, TitleLevels } from '@/shared/ui/title';

type DrawerProps = PropsWithChildren &
    PropsWithClassName &
    ModalOptions & {
        placement?: 'top' | 'bottom' | 'left' | 'right';
        width?: number;
        title?: string;
        closable?: boolean;
    };

export const Drawer = (props: DrawerProps) => {
    const {
        className,
        children,
        placement = 'left',
        // width = 350, // TODO: использовать для стилизации
        title,
        closable = true,
        open,
        onClose,
    } = props;

    useModal({
        open,
        onClose,
    });

    return (
        <div
            className={classNames(cls.drawer, { [cls.open]: open }, [
                className,
            ])}
        >
            {open && <div className={cls.overlay} onClick={onClose} />}

            <section className={classNames(cls.content, {}, [cls[placement]])}>
                {(title || closable) && (
                    <HStack
                        className={cls.header}
                        justify='between'
                        align='center'
                    >
                        {title && <Title level={TitleLevels.H3}>{title}</Title>}
                        {closable && (
                            <FontAwesomeIcon icon={faXmark} onClick={onClose} />
                        )}
                    </HStack>
                )}
                <div className={cls.body}>{children}</div>
            </section>
        </div>
    );
};
