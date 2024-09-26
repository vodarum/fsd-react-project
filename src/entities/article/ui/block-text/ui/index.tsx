import { Text } from 'shared/ui/text';
import cls from './index.module.scss';
import { ArticleBlockText } from '../../../model';

type BlockTextProps = {
    className?: string;
    data: ArticleBlockText;
};

export const BlockText = ({ className, data }: BlockTextProps) => {
    return (
        <div className={className}>
            {data.title && <Text className={cls.title}>{data.title}</Text>}

            {data.paragraphs.map((p) => (
                <Text key={p} className={cls.paragraph}>
                    {p}
                </Text>
            ))}
        </div>
    );
};
