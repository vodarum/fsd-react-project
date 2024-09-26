import { classNames } from 'shared/lib/class-names';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faCalendar, faEye } from '@fortawesome/free-solid-svg-icons';
import { memo, useEffect } from 'react';
import { useTranslation } from 'react-i18next';
import { useSelector } from 'react-redux';
import { useAppDispatch, useAsyncStore } from 'shared/lib/hooks';
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

type ArticleProps = {
    className?: string;
    id: number;
};

const ArticleLoading = memo(() => {
    return (
        <div className={classNames(cls.skeletonWrapper, {}, [cls.article])}>
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
        </div>
    );
});

const renderBlock = (block: ArticleBlock) => {
    switch (block.type) {
        case ArticleBlockTypes.code:
            return (
                <BlockCode key={block.id} data={block} className={cls.block} />
            );

        case ArticleBlockTypes.image:
            return (
                <BlockImage key={block.id} data={block} className={cls.block} />
            );

        case ArticleBlockTypes.text:
            return (
                <BlockText key={block.id} data={block} className={cls.block} />
            );

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

    useEffect(() => {
        if (__PROJECT__ !== 'storybook') {
            // @ts-ignore
            dispatch(fetchById(id));
        }
    }, [dispatch, id]);

    if (loading) {
        return <ArticleLoading />;
    }

    if (error) {
        return <Text className='text-error'>{t('Статья не найдена')}</Text>;
    }

    return (
        <div className={classNames(cls.article, {}, [className])}>
            <Avatar size={150} src={data?.img} className={cls.avatar} />

            <Title>{data?.title}</Title>
            <Text>{data?.subtitle}</Text>

            <div className={cls.info}>
                <FontAwesomeIcon icon={faEye} />
                <Text>{data?.views}</Text>
            </div>

            <div className={cls.info}>
                <FontAwesomeIcon icon={faCalendar} />
                <Text>{data?.createdAt}</Text>
            </div>

            {data?.blocks.map(renderBlock)}
        </div>
    );
});
