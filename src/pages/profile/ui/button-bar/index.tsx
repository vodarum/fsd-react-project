import { memo } from 'react';
import { useTranslation } from 'react-i18next';
import { useSelector } from 'react-redux';
import { useAppDispatch } from 'shared/lib/hooks/use-app-dispatch';
import { Button } from 'shared/ui/button';
import cls from './index.module.scss';
import { userActions, userSelectors, update } from 'features/user';

export const ProfileButtonBar = memo(() => {
    const { t } = useTranslation();
    const dispatch = useAppDispatch();
    const editable = useSelector(userSelectors.selectEditable);

    const handleEditBtnClick = () => {
        dispatch(userActions.setEditable(true));
    };
    const handleCancelBtnClick = () => {
        dispatch(userActions.cancelEditing());
    };
    const handleSaveBtnClick = () => {
        // @ts-ignore
        dispatch(update());
    };

    return (
        <div className={cls.wrapper} data-testid='ProfileButtonBar.wrapper'>
            {editable ? (
                <>
                    <Button
                        className={cls.cancelBtn}
                        onClick={handleCancelBtnClick}
                        data-testid='ProfileButtonBar.cancel'
                    >
                        {t('Отменить')}
                    </Button>
                    <Button
                        className={cls.saveBtn}
                        onClick={handleSaveBtnClick}
                        data-testid='ProfileButtonBar.save'
                    >
                        {t('Сохранить')}
                    </Button>
                </>
            ) : (
                <Button
                    className={cls.editBtn}
                    onClick={handleEditBtnClick}
                    data-testid='ProfileButtonBar.edit'
                >
                    {t('Редактировать')}
                </Button>
            )}
        </div>
    );
});
