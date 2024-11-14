import { RuleTester } from 'eslint';
import mockImports from '../../../lib/rules/mock-imports.js';

const cwd = 'C:\\Users\\ravshan_mu\\otus\\eslint-plugin-fsd';
const errors = [
    { message: 'Import mocks into production files is prohibited' },
];
const options = [
    {
        alias: '@',
        testFilePatterns: ['**/*.test.ts', '**/*.(test|stories).tsx'],
    },
];

const ruleTester = new RuleTester();
ruleTester.run('mock-imports', mockImports, {
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
            code: "import { mockUsers } from '@/entities/user/model/__mocks__';",
            options,
        },
        {
            filename: `${cwd}\\src\\features\\article\\comments\\ui\\index.test.tsx`,
            code: "import { mockUsers } from '@/entities/user/model/__mocks__';",
            options,
        },
        {
            filename: `${cwd}\\src\\features\\article\\recommendations\\ui\\index.stories.tsx`,
            code: "import { mockUsers } from '@/entities/user/model/__mocks__';",
            options,
        },
    ],

    invalid: [
        {
            filename: `${cwd}\\src\\features\\article\\comments\\model\\slice\\index.ts`,
            code: "import { mockUsers } from '../__mocks__';",
            errors,
            options,
        },
        {
            filename: `${cwd}\\src\\features\\article\\comments\\model\\slice\\index.ts`,
            code: "import { mockUsers } from '@/entities/user/model/__mocks__';",
            errors,
            options,
        },
        {
            filename: `${cwd}\\src\\features\\article\\recommendations\\ui\\index.tsx`,
            code: "import { mockUsers } from '@/entities/user/model/__mocks__';",
            errors,
            options,
        },
    ],
});
