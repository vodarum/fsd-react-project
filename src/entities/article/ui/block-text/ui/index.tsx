import { Text } from '@/shared/ui/text';
import cls from './index.module.scss';
import { ArticleBlockText } from '../../../model';
import { VStack } from '@/shared/ui/stack';

type BlockTextProps = {
    className?: string;
    data: ArticleBlockText;
};

export const BlockText = ({ className, data }: BlockTextProps) => {
    return (
        <VStack className={className} gap={8}>
            {data.title && <Text className={cls.title}>{data.title}</Text>}

            {data.paragraphs.map((p) => (
                <Text key={p}>{p}</Text>
            ))}
        </VStack>
    );
};
