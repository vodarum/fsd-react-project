/// <reference types="cypress" />

import { Article } from '../../src/entities/article';
import { type User } from '../../src/entities/user';
import * as common from './commands/common';
import * as article from './commands/article';

Cypress.Commands.addAll(common);
Cypress.Commands.addAll(article);

// Cypress.Commands.add('drag', { prevSubject: 'element'}, (subject, options) => { ... })
// Cypress.Commands.add('dismiss', { prevSubject: 'optional'}, (subject, options) => { ... })
// Cypress.Commands.overwrite('visit', (originalFn, url, options) => { ... })
//
declare global {
    // eslint-disable-next-line @typescript-eslint/no-namespace
    namespace Cypress {
        interface Chainable {
            login(username?: string, password?: string): Chainable<void>;
            getByTestId(testId: string): Chainable<JQuery<HTMLElement>>;
            getUserById(id: number): Chainable<User>;
            createArticle(): Chainable<Article>;
            deleteArticle(id: number): Chainable<void>;
            // drag(subject: string, options?: Partial<TypeOptions>): Chainable<Element>;
            // dismiss(subject: string, options?: Partial<TypeOptions>): Chainable<Element>;
            // visit(originalFn: CommandOriginalFn, url: string, options: Partial<VisitOptions>): Chainable<Element>;
        }
    }
}

export {};
