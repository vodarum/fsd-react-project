const getApiEndpoint = (path: string) => `${Cypress.env('apiUrl')}/${path}`;

export { getApiEndpoint };
