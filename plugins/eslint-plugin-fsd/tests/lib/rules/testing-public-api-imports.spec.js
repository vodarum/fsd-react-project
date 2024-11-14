import { RuleTester } from 'eslint';
import testingPublicApiImports from '../../../lib/rules/testing-public-api-imports.js';

const cwd = 'C:\\Users\\ravshan_mu\\otus\\eslint-plugin-fsd';
const errors = [
    {
        message:
            "Import into production files shouldn't be done from a public API for tests",
    },
];
const options = [
    {
        alias: '@',
        testFilePatterns: [
            '**/*.test.ts',
            '**/*.(test|stories).tsx',
            '**/__mocks__/*.ts',
        ],
    },
];

const ruleTester = new RuleTester();
ruleTester.run('testing-public-api-imports', testingPublicApiImports, {
    valid: [
        {
            filename: `${cwd}\\src\\entities\\user\\model\\services\\fetch-by-id.ts`,
            code: "import { User } from '../../model';",
        },
        {
            filename: `${cwd}\\src\\features\\article\\recommendations\\ui\\index.tsx`,
            code: "import { User } from '@/entities/user';",
            options,
        },
        {
            filename: `${cwd}\\src\\shared\\ui\\popups\\ui\\listbox\\ui\\index.tsx`,
            code: "import { Button } from '@/shared/ui/button';",
            options,
        },
        {
            filename: `${cwd}\\src\\entities\\article\\model\\types.ts`,
            code: "import { User } from '@/entities/user/@x/comment';",
            options,
        },
        {
            filename: `${cwd}\\src\\features\\article\\comments\\model\\slice\\index.test.ts`,
            code: "import { articleCommentsReducer } from '.';",
            options,
        },
        {
            filename: `${cwd}\\src\\features\\article\\comments\\ui\\index.test.tsx`,
            code: "import { User } from '@/entities/user/testing';",
            options,
        },
        {
            filename: `${cwd}\\src\\features\\article\\recommendations\\ui\\index.stories.tsx`,
            code: "import { User } from '@/entities/user/testing';",
            options,
        },
        {
            filename: `${cwd}\\src\\features\\article\\recommendations\\__mocks__\\index.ts`,
            code: "import { mockUsers } from '@/entities/user/testing';",
            options,
        },
    ],

    invalid: [
        {
            filename: `${cwd}\\src\\features\\article\\comments\\model\\slice\\index.ts`,
            code: "import { User } from '@/entities/user/testing';",
            errors,
            options,
        },
        {
            filename: `${cwd}\\src\\features\\article\\recommendations\\ui\\index.tsx`,
            code: "import { User } from '@/entities/user/testing';",
            errors,
            options,
        },
    ],
});
