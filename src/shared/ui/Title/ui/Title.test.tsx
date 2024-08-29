import { render } from '@testing-library/react';
import { Title, TitleLevels } from './Title';

const testTitle = 'Test title';

describe('Title', () => {
    test.each(Object.keys(TitleLevels).map((k) => [k]))(
        'test render level "%i"',
        (titleLevelKey: keyof typeof TitleLevels) => {
            render(
                TitleLevels.H1 === TitleLevels[titleLevelKey] ? (
                    <Title>{testTitle}</Title>
                ) : (
                    <Title level={TitleLevels[titleLevelKey]}>
                        {testTitle}
                    </Title>
                ),
            );

            const titleSelector = titleLevelKey.toLocaleLowerCase();
            expect(document.querySelector(titleSelector)).toHaveClass(
                `title-${TitleLevels[titleLevelKey]}`,
            );
        },
    );
});
