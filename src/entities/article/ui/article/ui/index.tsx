import { classNames } from 'shared/lib/class-names';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faCalendar, faEye } from '@fortawesome/free-solid-svg-icons';
import { memo } from 'react';
import { useTranslation } from 'react-i18next';
import { useSelector } from 'react-redux';
import {
    useAppDispatch,
    useAsyncStore,
    useInitialEffect,
} from 'shared/lib/hooks';
import { Avatar } from 'shared/ui/avatar';
import { Skeleton } from 'shared/ui/skeleton';
import { Text } from 'shared/ui/text';
import { Title } from 'shared/ui/title';
import {
    ArticleBlock,
    ArticleBlockTypes,
    articleReducer,
    articleSelectors,
    fetchById,
} from '../../../model';
import { BlockCode } from '../../block-code';
import { BlockText } from '../../block-text';
import { BlockImage } from '../../block-image';
import cls from './index.module.scss';
import { HStack, VStack } from 'shared/ui/stack';

type ArticleProps = {
    className?: string;
    id: number;
};

const ArticleLoading = memo(() => {
    return (
        <VStack className={cls.article} gap={8}>
            <Skeleton
                className={cls.avatar}
                active
                width={150}
                height={150}
                radius={'50%'}
            />
            <Skeleton active width={'50%'} height={32} />
            <Skeleton active width={'100%'} height={32} />
            <Skeleton active width={'100%'} height={32} />
            <Skeleton active width={'100%'} height={32} />
            <Skeleton active width={'100%'} height={128} />
        </VStack>
    );
});

const renderBlock = (block: ArticleBlock) => {
    switch (block.type) {
        case ArticleBlockTypes.code:
            return <BlockCode key={block.id} data={block} />;

        case ArticleBlockTypes.image:
            return <BlockImage key={block.id} data={block} />;

        case ArticleBlockTypes.text:
            return <BlockText key={block.id} data={block} />;

        default:
            return null;
    }
};

export const Article = memo(({ className, id }: ArticleProps) => {
    const { t } = useTranslation('article');
    const dispatch = useAppDispatch();
    const data = useSelector(articleSelectors.selectArticleData);
    const error = useSelector(articleSelectors.selectError);
    const loading = useSelector(articleSelectors.selectLoading);

    useAsyncStore({
        article: articleReducer,
    });

    useInitialEffect(() => {
        // @ts-ignore
        dispatch(fetchById(id));
    }, [dispatch, id]);

    if (loading) {
        return <ArticleLoading />;
    }

    if (error) {
        return <Text className='text-error'>{t('Статья не найдена')}</Text>;
    }

    return (
        <VStack className={classNames(cls.article, {}, [className])} gap={16}>
            <Avatar size={150} src={data?.img} className={cls.avatar} />

            <VStack gap={8}>
                <Title>{data?.title}</Title>
                <Text>{data?.subtitle}</Text>
            </VStack>

            <VStack gap={4}>
                <HStack gap={8} align='center'>
                    <FontAwesomeIcon icon={faEye} />
                    <Text>{data?.views}</Text>
                </HStack>

                <HStack gap={8} align='center'>
                    <FontAwesomeIcon icon={faCalendar} />
                    <Text>{data?.createdAt}</Text>
                </HStack>
            </VStack>

            {data?.blocks.length && (
                <VStack align='stretch' gap={32}>
                    {data.blocks.map(renderBlock)}
                </VStack>
            )}
        </VStack>
    );
});
