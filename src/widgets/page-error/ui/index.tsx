import { classNames } from 'shared/lib/class-names';
import cls from './index.module.scss';
import { useTranslation } from 'react-i18next';
import { Button } from 'shared/ui/button';

type PageErrorProps = {
    className?: string;
};

export const PageError = ({ className }: PageErrorProps) => {
    const { t } = useTranslation();

    const handleRefreshButtonClick = () => {
        location.reload();
    };

    return (
        <div className={classNames(cls.pageError, {}, [className])}>
            <p>{t('Произошла непредвиденная ошибка')}</p>
            <Button onClick={handleRefreshButtonClick}>
                {t('Обновить страницу')}
            </Button>
        </div>
    );
};
