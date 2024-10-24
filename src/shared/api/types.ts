import { Countries, Currencies, SortOrders } from './const';

type Country = (typeof Countries)[keyof typeof Countries];

type Currency = (typeof Currencies)[keyof typeof Currencies];

type ModalOptions = {
    open?: boolean;
    onClose?: () => void;
};

type PropsWithClassName = {
    className?: string;
};

type SortOrder = (typeof SortOrders)[keyof typeof SortOrders];

export type { Country, Currency, ModalOptions, PropsWithClassName, SortOrder };
