module.exports = (
    componentName,
) => `import { classNames } from 'shared/lib/class-names';
import cls from './index.module.scss';

type ${componentName}Props = {
    className?: string;
};

const ${componentName} = ({ className, ...otherProps }: ${componentName}Props) => {
    return (
        <div
            className={classNames(cls.${componentName}, {}, [className])}
            {...otherProps}
        >
        
        </div>
    );
};

export { ${componentName} };`;
