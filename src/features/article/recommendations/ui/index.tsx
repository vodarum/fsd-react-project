import { memo } from 'react';
import { useTranslation } from 'react-i18next';
import { ArticleList, ArticleViewTypes } from 'entities/article';
import { VStack } from 'shared/ui/stack';
import { Text } from 'shared/ui/text';
import cls from './index.module.scss';
import { useGetRecommendationsQuery } from '../api';

export const ArticleRecommendations = memo(() => {
    const { t } = useTranslation('article');
    const { data, isLoading } = useGetRecommendationsQuery(4);

    if (!data) return null;

    return (
        <VStack align='stretch' gap={16}>
            <Text className={cls.title}>{t('Рекомендуем')}</Text>
            <ArticleList
                className={cls.list}
                items={data}
                loading={isLoading}
                openInNewTab={true}
                view={ArticleViewTypes.slider}
            />
        </VStack>
    );
});
