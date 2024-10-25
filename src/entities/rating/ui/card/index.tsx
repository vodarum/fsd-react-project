import { memo, useCallback, useState } from 'react';
import { useTranslation } from 'react-i18next';
import { PropsWithClassName } from '@/shared/api';
import { classNames } from '@/shared/lib/class-names';
import { Button } from '@/shared/ui/button';
import { Card } from '@/shared/ui/card';
import { Input } from '@/shared/ui/input';
import { Modal } from '@/shared/ui/modal';
import { Rating as RatingStars } from '@/shared/ui/rating';
import { HStack, VStack } from '@/shared/ui/stack';
import { Text } from '@/shared/ui/text';
import cls from './index.module.scss';
import type { Rating } from '../../model/types';

type RatingCardProps = PropsWithClassName & {
    data?: Rating;
    title?: string;
    feedbackTitle?: string;
    onSubmit?: (value: Rating) => void;
};

export const RatingCard = memo((props: RatingCardProps) => {
    const { className, data, title, feedbackTitle, onSubmit } = props;
    const { t } = useTranslation();

    const [isOpenModal, setIsOpenModal] = useState(false);
    const [rating, setRating] = useState(data?.rating ?? 0);
    const [feedback, setFeedback] = useState(data?.feedback ?? '');

    const handleRatingChange = useCallback(
        (value: number) => {
            setRating(value);
            onSubmit?.({ rating: value });

            if (feedbackTitle) {
                setIsOpenModal(true);
            }
        },
        [feedbackTitle, onSubmit],
    );

    const handleCloseBtnClick = useCallback(() => {
        setIsOpenModal(false);
    }, []);

    const handleSubmitBtnClick = useCallback(() => {
        if (!feedback) return;
        onSubmit?.({ rating, feedback });
        handleCloseBtnClick();
    }, [rating, feedback, onSubmit]);

    return (
        <Card className={classNames(cls.wrapper, {}, [className])}>
            {title && (
                <Text className={cls.title} align='center'>
                    {data?.rating ? t('Ваша оценка') : title}
                </Text>
            )}
            <RatingStars value={rating} onChange={handleRatingChange} />
            {feedbackTitle && (
                <Modal open={isOpenModal} className={cls.modal}>
                    <VStack align='stretch' gap={8}>
                        <Text>{feedbackTitle}</Text>
                        <Input value={feedback} onChange={setFeedback} />
                        <HStack justify='end' gap={8}>
                            <Button
                                className={cls.btnClose}
                                onClick={handleCloseBtnClick}
                            >
                                {t('Закрыть')}
                            </Button>
                            <Button
                                className={cls.btnSubmit}
                                onClick={handleSubmitBtnClick}
                                disabled={!feedback}
                            >
                                {t('Отправить')}
                            </Button>
                        </HStack>
                    </VStack>
                </Modal>
            )}
        </Card>
    );
});
