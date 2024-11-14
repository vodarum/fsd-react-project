import { RuleTester } from 'eslint';
import publicApiImports from '../../../lib/rules/public-api-imports.js';

const cwd = 'C:\\Users\\ravshan_mu\\otus\\eslint-plugin-fsd';
const errors = [{ message: 'Import should be done from a public API' }];
const options = [{ alias: '@' }];

const ruleTester = new RuleTester();
ruleTester.run('public-api-imports', publicApiImports, {
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
            filename: `${cwd}\\src\\entities\\article\\__mocks__\\index.ts`,
            code: "import { User } from '@/entities/user/testing';",
            options,
        },
        {
            filename: `${cwd}\\src\\pages\\articles\\model\\services\\init\\index.ts`,
            code: "import { ThunkAPI } from '@/app/providers/store-provider';",
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
            filename: `${cwd}\\src\\features\\article\\recommendations\\ui\\index.tsx`,
            code: "import { ArticleViewType } from '@/entities/article/model';",
            output: "import { ArticleViewType } from '@/entities/article';",
            errors,
            options,
        },
        {
            filename: `${cwd}\\src\\features\\article\\recommendations\\ui\\index.tsx`,
            code: "import { ArticleList } from '@/entities/article/ui';",
            output: "import { ArticleList } from '@/entities/article';",
            errors,
            options,
        },
        {
            filename: `${cwd}\\src\\pages\\articles\\model\\services\\init\\index.ts`,
            code: "import { ThunkAPI } from '@/app/providers/store-provider';",
            output: "import { ThunkAPI } from '@/app/providers';",
            errors,
            options,
        },
    ],
});
