import { Article } from '../../../src/entities/Article';

const defaultArticle = {
    title: 'Testing Article',
    subtitle: 'Что нового в JS за 2022 год?',
    img: 'https://teknotower.com/wp-content/uploads/2020/11/js.png',
    views: 1022,
    createdAt: '26.04.2022',
    userId: '1',
    type: ['IT'],
    blocks: [],
};

export const createArticle = (article?: Article) => {
    cy.request({
        method: 'POST',
        url: 'http://localhost:8000/articles',
        headers: { Authorization: 'Auth' },
        body: article ?? defaultArticle,
    }).then((responce) => responce.body);
};

export const removeArticle = (articleId: string) => cy.request({
    method: 'DELETE',
    url: `http://localhost:8000/articles/${articleId}`,
    headers: { Authorization: 'Auth' },
});

declare global {
    namespace Cypress {
      interface Chainable {
        createArticle(article?: Article): Chainable<Article>;
        removeArticle(articleId: string): Chainable<void>
      }
    }
  }
