import { PropsWithChildren } from 'react';
import { createPortal } from 'react-dom';

type PortalProps = PropsWithChildren & {
    container?: Element | DocumentFragment;
};

export const Portal = ({ children, container }: PortalProps) =>
    createPortal(children, container ?? document.body);
