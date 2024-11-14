import { RuleTester } from 'eslint';
import layerImports from '../../../lib/rules/layer-imports.js';

const cwd = 'C:\\Users\\ravshan_mu\\otus\\eslint-plugin-fsd';
const errors = [
    { message: 'Imports should only be made from underlying layers' },
];
const options = [{ alias: '@' }];

const ruleTester = new RuleTester();
ruleTester.run('layer-imports', layerImports, {
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
            filename: `${cwd}\\src\\pages\\article\\ui\\index.ts`,
            code: "import { Section } from '@/widgets/section';",
            options,
        },
        {
            filename: `${cwd}\\src\\app\\providers\\router\\config\\routes.tsx`,
            code: "import { Article } from '@/pages/article';",
            options,
        },
        {
            filename: `${cwd}\\src\\entities\\article\\model\\slices\\article-list\\index.ts`,
            code: "import { State } from '@/app/providers/store-provider';",
            options: [
                {
                    alias: '@',
                    ignoreImportPatterns: ['**/store-provider'],
                },
            ],
        },
    ],

    invalid: [
        {
            filename: `${cwd}\\src\\entities\\user\\ui\\index.test.ts`,
            code: "import { mockUsers } from '@/entities/user/model/__mocks__';",
            errors,
            options,
        },
        {
            filename: `${cwd}\\src\\entities\\article\\recommendations\\ui\\index.test.tsx`,
            code: "import { mockUsers } from '@/features/user/testing';",
            errors,
            options,
        },
        {
            filename: `${cwd}\\src\\entities\\article\\model\\slices\\article-list\\index.ts`,
            code: "import { State } from '@/app/providers/store-provider';",
            errors,
            options,
        },
    ],
});
