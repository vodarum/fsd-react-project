import { classNames } from './classNames';

const mockData = [
    {
        args: {
            base: 'app',
        },
        result: 'app',
    },
    {
        args: {
            base: 'app',
            mods: {
                cls1: true,
                cls2: true,
            },
        },
        result: 'app cls1 cls2',
    },
    {
        args: {
            base: 'app',
            mods: {},
            additional: ['cls3', 'cls4'],
        },
        result: 'app cls3 cls4',
    },
    {
        args: {
            base: 'app',
            mods: {
                cls1: true,
                cls2: false,
                cls3: undefined as any, // eslint-disable-line @typescript-eslint/no-explicit-any
            },
            additional: ['cls3'],
        },
        result: 'app cls1 cls3',
    },
];

describe('classNames', () => {
    test.each(mockData)('', ({ args, result }) => {
        expect(classNames(args.base, args.mods, args.additional)).toBe(result);
    });
});
