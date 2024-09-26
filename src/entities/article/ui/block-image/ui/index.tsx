import { Text } from 'shared/ui/text';
import cls from './index.module.scss';
import { ArticleBlockImage } from '../../../model';

type BlockImageProps = {
    className?: string;
    data: ArticleBlockImage;
};

export const BlockImage = ({ className, data }: BlockImageProps) => {
    return (
        <div className={className}>
            <img className={cls.image} src={data.src} alt={data.title} />
            {data.title && <Text className={cls.title}>{data.title}</Text>}
        </div>
    );
};
