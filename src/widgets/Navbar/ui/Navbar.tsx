import { classNames } from 'shared/lib/classNames/classNames';
import cls from './Navbar.module.scss';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faBars } from '@fortawesome/free-solid-svg-icons';

type NavbarProps = {
    className?: string;
    handlerDrawer?: () => void;
};

export const Navbar = ({ className, handlerDrawer }: NavbarProps) => {
    return (
        <div className={classNames(cls.navbar, {}, [className])}>
            <FontAwesomeIcon
                icon={faBars}
                onClick={handlerDrawer}
                className={classNames(cls.btnMenu)}
            />
        </div>
    );
};
