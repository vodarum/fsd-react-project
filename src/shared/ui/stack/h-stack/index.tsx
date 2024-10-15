import { ComponentProps } from 'react';
import { Flex } from '../flex';

type HStackProps = Omit<ComponentProps<typeof Flex>, 'direction'>;

export const HStack = ({ children, ...props }: HStackProps) => {
    return <Flex {...props}>{children}</Flex>;
};
