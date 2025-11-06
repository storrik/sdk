// File generated from our OpenAPI spec by Stainless. See CONTRIBUTING.md for details.

import Storrik from 'storrik';

const client = new Storrik({ baseURL: process.env['TEST_API_BASE_URL'] ?? 'http://127.0.0.1:4010' });

describe('resource payments', () => {
  // Prism tests are disabled
  test.skip('createIntent: only required params', async () => {
    const responsePromise = client.payments.createIntent({ amount: 50, currency: 'usd' });
    const rawResponse = await responsePromise.asResponse();
    expect(rawResponse).toBeInstanceOf(Response);
    const response = await responsePromise;
    expect(response).not.toBeInstanceOf(Response);
    const dataAndResponse = await responsePromise.withResponse();
    expect(dataAndResponse.data).toBe(response);
    expect(dataAndResponse.response).toBe(rawResponse);
  });

  // Prism tests are disabled
  test.skip('createIntent: required and optional params', async () => {
    const response = await client.payments.createIntent({
      amount: 50,
      currency: 'usd',
      cancel_url: 'https://example.com',
      customerId: 'customerId',
      description: 'description',
      email: 'dev@stainless.com',
      metadata: { foo: 'string' },
      method: 'card',
      productId: 'productId',
      receipt_email: 'dev@stainless.com',
      storeId: 'storeId',
      success_url: 'https://example.com',
      type: 'embed',
    });
  });
});
