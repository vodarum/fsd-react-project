import { useCallback, useEffect, useState } from 'react';
import { ModalOptions } from 'shared/api';

export const useModal = ({ open = false, onClose }: ModalOptions) => {
    const [isMounted, setIsMounted] = useState(false);

    const handleKeyDown = useCallback(
        (e: KeyboardEvent) => {
            if (e.key === 'Escape') onClose?.();
        },
        [onClose],
    );

    useEffect(() => {
        if (open) {
            addEventListener('keydown', handleKeyDown);
            setIsMounted(true);
        }

        return () => {
            removeEventListener('keydown', handleKeyDown);
        };
    }, [open, handleKeyDown]);

    return { isMounted };
};
