import { memo } from 'react';
import { useTranslation } from 'react-i18next';
import { useSelector } from 'react-redux';
import { useAppDispatch } from 'shared/lib/hooks/use-app-dispatch';
import { Button } from 'shared/ui/button';
import cls from './index.module.scss';
import {
    profileActions,
    profileSelectors,
    updateProfileData,
} from '../../model';

export const ProfileButtonBar = memo(() => {
    const { t } = useTranslation();
    const dispatch = useAppDispatch();
    const editable = useSelector(profileSelectors.selectEditable);

    const handleEditBtnClick = () => {
        dispatch(profileActions.setEditable(true));
    };
    const handleCancelBtnClick = () => {
        dispatch(profileActions.cancelEditing());
    };
    const handleSaveBtnClick = () => {
        // @ts-ignore
        dispatch(updateProfileData());
    };

    return (
        <div className={cls.wrapper}>
            {editable ? (
                <>
                    <Button
                        className={cls.cancelBtn}
                        onClick={handleCancelBtnClick}
                    >
                        {t('Отменить')}
                    </Button>
                    <Button
                        className={cls.saveBtn}
                        onClick={handleSaveBtnClick}
                    >
                        {t('Сохранить')}
                    </Button>
                </>
            ) : (
                <Button className={cls.editBtn} onClick={handleEditBtnClick}>
                    {t('Редактировать')}
                </Button>
            )}
        </div>
    );
});
