import { RuleTester } from 'eslint';
import pathChecker from '../../../lib/rules/path-checker.js';

const cwd = 'C:\\Users\\ravshan_mu\\otus\\eslint-plugin-fsd';
const filename = `${cwd}\\src\\entities\\user\\ui\\card\\index.tsx`;
const errors = [{ message: 'Path should be relative' }];

const ruleTester = new RuleTester();
ruleTester.run('path-checker', pathChecker, {
    valid: [
        {
            filename,
            code: "import { User } from '../../model';",
        },
    ],
    invalid: [
        {
            filename,
            code: "import { User } from 'entities/user/model';",
            output: "import { User } from '../../model';",
            errors,
        },
        {
            filename,
            code: "import { User } from '@/entities/user/model';",
            output: "import { User } from '../../model';",
            errors,
            options: [
                {
                    alias: '@',
                },
            ],
        },
    ],
});
