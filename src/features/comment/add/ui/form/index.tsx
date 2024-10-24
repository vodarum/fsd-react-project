import cls from './index.module.scss';
import { Input } from '@/shared/ui/input';
import { Button } from '@/shared/ui/button';
import { useTranslation } from 'react-i18next';
import { memo, useCallback } from 'react';
import { useSelector } from 'react-redux';
import {
    addCommentActions,
    addCommentReducer,
    addCommentSelectors,
} from '../../model';
import { useAppDispatch, useAsyncStore } from '@/shared/lib/hooks';

type CommentFormProps = {
    className?: string;
    onSubmit?: (value: string) => void;
};

export const CommentForm = memo(({ className, onSubmit }: CommentFormProps) => {
    const { t } = useTranslation();
    const dispatch = useAppDispatch();
    const text = useSelector(addCommentSelectors.selectText);

    const handleChange = useCallback(
        (text: string) => {
            dispatch(addCommentActions.setText(text));
        },
        [text],
    );

    const handleClick = useCallback(() => {
        onSubmit?.(text || '');
        handleChange('');
    }, [onSubmit, handleChange, text]);

    useAsyncStore({
        addComment: addCommentReducer,
    });

    return (
        <div className={className}>
            <Input value={text} onChange={handleChange} />
            <Button className={cls.btn} onClick={handleClick}>
                {t('Отправить')}
            </Button>
        </div>
    );
});
