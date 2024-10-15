import { ComponentProps } from 'react';
import { Flex } from '../flex';

type VStackProps = Omit<ComponentProps<typeof Flex>, 'direction'>;

export const VStack = ({ children, ...props }: VStackProps) => {
    return (
        <Flex {...props} direction='column'>
            {children}
        </Flex>
    );
};
