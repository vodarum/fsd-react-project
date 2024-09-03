import { render } from '@testing-library/react';
import { Title, TitleLevels } from '.';

const testTitle = 'Test title';

describe('Title', () => {
    test.each(Object.keys(TitleLevels).map((k) => [k]))(
        'test render level "%i"',
        (lk) => {
            const titleLevelKey = lk as keyof typeof TitleLevels;

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
