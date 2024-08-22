import { classNames } from 'shared/lib/classNames/classNames';
import cls from './PageError.module.scss';
import { useTranslation } from 'react-i18next';
import { Button } from 'shared/ui/Button';

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
