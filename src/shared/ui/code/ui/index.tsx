import { classNames } from '@/shared/lib/class-names';
import cls from './index.module.scss';
import { memo, useCallback } from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faCopy } from '@fortawesome/free-solid-svg-icons';
import { Button, ButtonVariants } from '@/shared/ui/button';

type CodeProps = {
    className?: string;
    content: string;
};

export const Code = memo(({ className, content }: CodeProps) => {
    const handleCopyClick = useCallback(() => {
        navigator.clipboard.writeText(content);
    }, [content]);

    return (
        <pre
            className={classNames(cls.wrapper, {}, [className])}
            data-testid='wrapper'
        >
            <Button
                className={cls.btn}
                onClick={handleCopyClick}
                variant={ButtonVariants.clear}
            >
                <FontAwesomeIcon icon={faCopy} />
            </Button>
            <code>{content}</code>
        </pre>
    );
});
