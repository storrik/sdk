// File generated from our OpenAPI spec by Stainless. See CONTRIBUTING.md for details.

import Storrik from 'storrik';

const client = new Storrik({
  apiKey: 'My API Key',
  publishableKey: 'My Publishable Key',
  accessToken: 'My Access Token',
  customerSessionToken: 'My Customer Session Token',
  baseURL: process.env["TEST_API_BASE_URL"] ?? 'http://127.0.0.1:4010',
});

describe('resource customer', () => {
  // Mock server tests are disabled
  test.skip('login: only required params', async () => {
    const responsePromise = client.customer.login({ email: 'dev@stainless.com' });
    const rawResponse = await responsePromise.asResponse();
    expect(rawResponse).toBeInstanceOf(Response);
    const response = await responsePromise;
    expect(response).not.toBeInstanceOf(Response);
    const dataAndResponse = await responsePromise.withResponse();
    expect(dataAndResponse.data).toBe(response);
    expect(dataAndResponse.response).toBe(rawResponse);
  });

  // Mock server tests are disabled
  test.skip('login: required and optional params', async () => {
    const response = await client.customer.login({ email: 'dev@stainless.com' });
  });

  // Mock server tests are disabled
  test.skip('logout', async () => {
    const responsePromise = client.customer.logout();
    const rawResponse = await responsePromise.asResponse();
    expect(rawResponse).toBeInstanceOf(Response);
    const response = await responsePromise;
    expect(response).not.toBeInstanceOf(Response);
    const dataAndResponse = await responsePromise.withResponse();
    expect(dataAndResponse.data).toBe(response);
    expect(dataAndResponse.response).toBe(rawResponse);
  });

  // Mock server tests are disabled
  test.skip('me', async () => {
    const responsePromise = client.customer.me();
    const rawResponse = await responsePromise.asResponse();
    expect(rawResponse).toBeInstanceOf(Response);
    const response = await responsePromise;
    expect(response).not.toBeInstanceOf(Response);
    const dataAndResponse = await responsePromise.withResponse();
    expect(dataAndResponse.data).toBe(response);
    expect(dataAndResponse.response).toBe(rawResponse);
  });

  // Mock server tests are disabled
  test.skip('verifyLogin: only required params', async () => {
    const responsePromise = client.customer.verifyLogin({ code: 'xxxx', email: 'dev@stainless.com' });
    const rawResponse = await responsePromise.asResponse();
    expect(rawResponse).toBeInstanceOf(Response);
    const response = await responsePromise;
    expect(response).not.toBeInstanceOf(Response);
    const dataAndResponse = await responsePromise.withResponse();
    expect(dataAndResponse.data).toBe(response);
    expect(dataAndResponse.response).toBe(rawResponse);
  });

  // Mock server tests are disabled
  test.skip('verifyLogin: required and optional params', async () => {
    const response = await client.customer.verifyLogin({ code: 'xxxx', email: 'dev@stainless.com' });
  });
});
