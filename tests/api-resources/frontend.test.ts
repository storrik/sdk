// File generated from our OpenAPI spec by Stainless. See CONTRIBUTING.md for details.

import Storrik from 'storrik';

const client = new Storrik({
  apiKey: 'My API Key',
  publishableKey: 'My Publishable Key',
  accessToken: 'My Access Token',
  customerSessionToken: 'My Customer Session Token',
  baseURL: process.env['TEST_API_BASE_URL'] ?? 'http://127.0.0.1:4010',
});

describe('resource frontend', () => {
  // Mock server tests are disabled
  test.skip('forgotPassword: only required params', async () => {
    const responsePromise = client.frontend.forgotPassword({ email: 'test@storrik.com' });
    const rawResponse = await responsePromise.asResponse();
    expect(rawResponse).toBeInstanceOf(Response);
    const response = await responsePromise;
    expect(response).not.toBeInstanceOf(Response);
    const dataAndResponse = await responsePromise.withResponse();
    expect(dataAndResponse.data).toBe(response);
    expect(dataAndResponse.response).toBe(rawResponse);
  });

  // Mock server tests are disabled
  test.skip('forgotPassword: required and optional params', async () => {
    const response = await client.frontend.forgotPassword({ email: 'test@storrik.com' });
  });

  // Mock server tests are disabled
  test.skip('login: only required params', async () => {
    const responsePromise = client.frontend.login({
      email: 'test@storrik.com',
      password: 'supersecurepassword',
    });
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
    const response = await client.frontend.login({
      email: 'test@storrik.com',
      password: 'supersecurepassword',
    });
  });

  // Mock server tests are disabled
  test.skip('logout', async () => {
    const responsePromise = client.frontend.logout();
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
    const responsePromise = client.frontend.me();
    const rawResponse = await responsePromise.asResponse();
    expect(rawResponse).toBeInstanceOf(Response);
    const response = await responsePromise;
    expect(response).not.toBeInstanceOf(Response);
    const dataAndResponse = await responsePromise.withResponse();
    expect(dataAndResponse.data).toBe(response);
    expect(dataAndResponse.response).toBe(rawResponse);
  });

  // Mock server tests are disabled
  test.skip('refresh', async () => {
    const responsePromise = client.frontend.refresh();
    const rawResponse = await responsePromise.asResponse();
    expect(rawResponse).toBeInstanceOf(Response);
    const response = await responsePromise;
    expect(response).not.toBeInstanceOf(Response);
    const dataAndResponse = await responsePromise.withResponse();
    expect(dataAndResponse.data).toBe(response);
    expect(dataAndResponse.response).toBe(rawResponse);
  });

  // Mock server tests are disabled
  test.skip('register: only required params', async () => {
    const responsePromise = client.frontend.register({
      email: 'test@storrik.com',
      password: 'supersecurepassword',
    });
    const rawResponse = await responsePromise.asResponse();
    expect(rawResponse).toBeInstanceOf(Response);
    const response = await responsePromise;
    expect(response).not.toBeInstanceOf(Response);
    const dataAndResponse = await responsePromise.withResponse();
    expect(dataAndResponse.data).toBe(response);
    expect(dataAndResponse.response).toBe(rawResponse);
  });

  // Mock server tests are disabled
  test.skip('register: required and optional params', async () => {
    const response = await client.frontend.register({
      email: 'test@storrik.com',
      password: 'supersecurepassword',
    });
  });

  // Mock server tests are disabled
  test.skip('resetPassword: only required params', async () => {
    const responsePromise = client.frontend.resetPassword({
      token: 'reset_token_here',
      new_password: 'newpassword123',
    });
    const rawResponse = await responsePromise.asResponse();
    expect(rawResponse).toBeInstanceOf(Response);
    const response = await responsePromise;
    expect(response).not.toBeInstanceOf(Response);
    const dataAndResponse = await responsePromise.withResponse();
    expect(dataAndResponse.data).toBe(response);
    expect(dataAndResponse.response).toBe(rawResponse);
  });

  // Mock server tests are disabled
  test.skip('resetPassword: required and optional params', async () => {
    const response = await client.frontend.resetPassword({
      token: 'reset_token_here',
      new_password: 'newpassword123',
    });
  });

  // Mock server tests are disabled
  test.skip('verifyEmail: only required params', async () => {
    const responsePromise = client.frontend.verifyEmail({ token: 'email_token_here' });
    const rawResponse = await responsePromise.asResponse();
    expect(rawResponse).toBeInstanceOf(Response);
    const response = await responsePromise;
    expect(response).not.toBeInstanceOf(Response);
    const dataAndResponse = await responsePromise.withResponse();
    expect(dataAndResponse.data).toBe(response);
    expect(dataAndResponse.response).toBe(rawResponse);
  });

  // Mock server tests are disabled
  test.skip('verifyEmail: required and optional params', async () => {
    const response = await client.frontend.verifyEmail({ token: 'email_token_here' });
  });
});
