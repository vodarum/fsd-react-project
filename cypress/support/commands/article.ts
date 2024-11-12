import article from '../../fixtures/article.json';
import { getApiEndpoint } from '../../helpers';
import { type Article } from '../../../src/entities/article';

const createArticle = () => {
    const { id, ...body } = article; // eslint-disable-line @typescript-eslint/no-unused-vars

    return cy
        .request<Article>({
            method: 'POST',
            url: getApiEndpoint('articles'),
            headers: {
                authorization: 'token',
            },
            body,
        })
        .then(({ body }) => body);
};

const deleteArticle = (id: number) => {
    cy.request<void>({
        method: 'DELETE',
        headers: {
            authorization: 'token',
        },
        url: getApiEndpoint(`articles/${id}`),
    });
};

export { createArticle, deleteArticle };
