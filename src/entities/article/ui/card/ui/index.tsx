import { classNames } from '@/shared/lib/class-names';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faEye } from '@fortawesome/free-solid-svg-icons';
import { memo } from 'react';
import { Skeleton } from '@/shared/ui/skeleton';
import { Text } from '@/shared/ui/text';
import {
    Article,
    ArticleBlockText,
    ArticleBlockTypes,
    ArticleViewType,
    ArticleViewTypes,
} from '../../../model';
import cls from './index.module.scss';
import { AppLink, AppLinkVariants } from '@/shared/ui/app-link';
import { Avatar } from '@/shared/ui/avatar';
import { useTranslation } from 'react-i18next';
import { BlockText } from '../../block-text';

type ArticleCardBaseProps = {
    className?: string;
    view: ArticleViewType;
    openInNewTab?: boolean;
};

type ArticleCardProps = ArticleCardBaseProps & {
    data: Article;
};

const ArticleCardSkeleton = memo(
    ({ className, view }: ArticleCardBaseProps) => {
        if (view === ArticleViewTypes.list) {
            return (
                <div
                    className={classNames(cls.card, {}, [className, cls[view]])}
                >
                    <div className={cls.header}>
                        <div className={cls.author}>
                            <Skeleton
                                active
                                width={30}
                                height={30}
                                radius={'50%'}
                            />
                            <Skeleton active width={150} height={16} />
                        </div>

                        <Skeleton
                            className={cls.date}
                            active
                            width={150}
                            height={16}
                        />
                    </div>

                    <Skeleton
                        className={cls.title}
                        active
                        width={'50%'}
                        height={24}
                    />

                    <Skeleton
                        className={cls.types}
                        active
                        width={100}
                        height={16}
                    />

                    <Skeleton className={cls.img} active height={350} />

                    <Skeleton className={cls.date} active width={150} />

                    <Skeleton
                        className={cls.block}
                        active
                        width={'100%'}
                        height={100}
                    />

                    <div className={cls.footer}>
                        <Skeleton
                            className={cls.readMoreBtn}
                            active
                            width={100}
                            height={32}
                        />
                        <Skeleton
                            className={cls.views}
                            active
                            width={80}
                            height={16}
                        />
                    </div>
                </div>
            );
        }

        return (
            <div className={classNames(cls.card, {}, [className, cls[view]])}>
                <div className={cls.imageWrapper}>
                    <Skeleton
                        className={cls.img}
                        active
                        width={'100%'}
                        height={236}
                    />
                </div>
                <div className={cls.textWrapper}>
                    <div className={cls.infoWrapper}>
                        <Skeleton
                            className={cls.types}
                            active
                            width={100}
                            height={16}
                        />
                        <Skeleton
                            className={cls.views}
                            active
                            width={80}
                            height={16}
                        />
                    </div>
                    <Skeleton
                        className={cls.title}
                        active
                        width={150}
                        height={16}
                    />
                </div>
            </div>
        );
    },
);

const ArticleCard = memo(
    ({ className, data, view, openInNewTab }: ArticleCardProps) => {
        const { t } = useTranslation();

        const articleTypes = data?.type.length ? (
            <Text className={cls.types}>{data.type.join(', ')}</Text>
        ) : null;
        const articleViews = (
            <div className={cls.views}>
                <Text>{data?.views}</Text>
                <FontAwesomeIcon icon={faEye} />
            </div>
        );

        if (view === ArticleViewTypes.list) {
            const blockTextData = data?.blocks.find(
                (block) => block.type === ArticleBlockTypes.text,
            ) as ArticleBlockText;

            return (
                <div
                    className={classNames(cls.card, {}, [className, cls[view]])}
                >
                    <div className={cls.header}>
                        <div className={cls.author}>
                            <Avatar src={data?.user?.avatar} size={30} />
                            <Text>{data?.user?.username}</Text>
                        </div>

                        <Text className={cls.date}>{data?.createdAt}</Text>
                    </div>

                    <Text className={cls.title}>{data?.title}</Text>

                    {articleTypes}

                    <img
                        className={cls.img}
                        src={data?.img}
                        alt={data?.title}
                    />

                    {blockTextData && (
                        <BlockText className={cls.block} data={blockTextData} />
                    )}

                    <div className={cls.footer}>
                        <AppLink
                            className={cls.readMoreBtn}
                            variant={AppLinkVariants.bordered}
                            to={`/articles/${data.id}`}
                            target={openInNewTab ? '_blank' : '_self'}
                        >
                            {t('Читать далее')}
                        </AppLink>
                        {articleViews}
                    </div>
                </div>
            );
        }

        return (
            <AppLink
                className={classNames(cls.card, {}, [className, cls[view]])}
                to={`/articles/${data.id}`}
                target={openInNewTab ? '_blank' : '_self'}
            >
                <div className={cls.imageWrapper}>
                    <img
                        className={cls.img}
                        src={data?.img}
                        alt={data?.title}
                    />
                    <Text className={cls.date}>{data?.createdAt}</Text>
                </div>
                <div className={cls.textWrapper}>
                    <div className={cls.infoWrapper}>
                        {articleTypes}
                        {articleViews}
                    </div>
                    <Text className={cls.title}>{data?.title}</Text>
                </div>
            </AppLink>
        );
    },
);

export { ArticleCard, ArticleCardSkeleton };
