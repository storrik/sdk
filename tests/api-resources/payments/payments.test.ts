// File generated from our OpenAPI spec by Stainless. See CONTRIBUTING.md for details.

import Storrik from 'storrik';

const client = new Storrik({
  apiKey: 'My API Key',
  baseURL: process.env['TEST_API_BASE_URL'] ?? 'http://127.0.0.1:4010',
});

describe('resource payments', () => {
  // Prism tests are disabled
  test.skip('createIntent: only required params', async () => {
    const responsePromise = client.payments.createIntent({ amount: 50, currency: 'USD' });
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
      currency: 'USD',
      cancel_url: 'https://example.com',
      collect_billing: true,
      collect_shipping: true,
      country: 'xx',
      coupon: 'coupon',
      customerId: 'customerId',
      description: 'description',
      email: 'dev@stainless.com',
      metadata: { foo: 'string' },
      method: 'card',
      productId: 'productId',
      quantity: 1,
      receipt_email: 'dev@stainless.com',
      success_url: 'https://example.com',
      type: 'embed',
      variantId: 'variantId',
    });
  });
});
