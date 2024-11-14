import { RuleTester } from 'eslint';
import mockExports from '../../../lib/rules/mock-exports.js';

const cwd = 'C:\\Users\\ravshan_mu\\otus\\eslint-plugin-fsd';
const errors = [
    { message: 'Export mocks should be done from a testing public API' },
];
const options = [{ alias: '@' }];

const ruleTester = new RuleTester();
ruleTester.run('mock-exports', mockExports, {
    valid: [
        {
            filename: `${cwd}\\src\\entities\\user\\model\\services\\fetch-by-id.ts`,
            code: "export { User } from '../../model';",
        },
        {
            filename: `${cwd}\\src\\features\\article\\recommendations\\ui\\index.tsx`,
            code: "export { User } from '@/entities/user';",
            options,
        },
        {
            filename: `${cwd}\\src\\features\\article\\comments\\testing.ts`,
            code: "export { mockUsers } from '@/entities/user/model/__mocks__';",
            options,
        },
        {
            filename: `${cwd}\\src\\features\\article\\comments\\testing.ts`,
            code: "export * from './__mocks__';",
            options,
        },
        {
            filename: `${cwd}\\src\\features\\article\\comments\\testing.ts`,
            code: "export { mockUsers } from './__mocks__';",
            options,
        },
    ],

    invalid: [
        {
            filename: `${cwd}\\src\\features\\article\\comments\\model\\slice\\index.test.ts`,
            code: "export { mockUsers } from '@/entities/user/model/__mocks__';",
            errors,
            options,
        },
        {
            filename: `${cwd}\\src\\features\\article\\comments\\ui\\index.test.tsx`,
            code: "export { mockUsers } from '@/entities/user/model/__mocks__';",
            errors,
            options,
        },
        {
            filename: `${cwd}\\src\\features\\article\\recommendations\\ui\\index.stories.tsx`,
            code: "export { mockUsers } from '@/entities/user/model/__mocks__';",
            errors,
            options,
        },
        {
            filename: `${cwd}\\src\\features\\article\\comments\\model\\index.ts`,
            code: "export * from './__mocks__';",
            errors,
            options,
        },
        {
            filename: `${cwd}\\src\\features\\article\\comments\\model\\index.ts`,
            code: "export { mockUsers } from './__mocks__';",
            errors,
            options,
        },
    ],
});
