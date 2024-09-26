import { Code } from 'shared/ui/code';
import { ArticleBlockCode } from '../../model';

type BlockCodeProps = {
    className?: string;
    data: ArticleBlockCode;
};

export const BlockCode = ({ className, data }: BlockCodeProps) => {
    return (
        <div className={className}>
            <Code content={data.code} />
        </div>
    );
};
