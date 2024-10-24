import { Text } from '@/shared/ui/text';
import { VStack } from '@/shared/ui/stack';
import cls from './index.module.scss';
import { ArticleBlockImage } from '../../../model';

type BlockImageProps = {
    className?: string;
    data: ArticleBlockImage;
};

export const BlockImage = ({ className, data }: BlockImageProps) => {
    return (
        <VStack className={className} gap={8}>
            <img className={cls.image} src={data.src} alt={data.title} />
            {data.title && <Text>{data.title}</Text>}
        </VStack>
    );
};
