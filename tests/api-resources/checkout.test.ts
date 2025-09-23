// File generated from our OpenAPI spec by Stainless. See CONTRIBUTING.md for details.

import Storrik from 'storrik';

const client = new Storrik({
  apiKey: 'My API Key',
  baseURL: process.env['TEST_API_BASE_URL'] ?? 'http://127.0.0.1:4010',
});

describe('resource checkout', () => {
  // Prism tests are disabled
  test.skip('create: only required params', async () => {
    const responsePromise = client.checkout.create({ product_id: 'product_id' });
    const rawResponse = await responsePromise.asResponse();
    expect(rawResponse).toBeInstanceOf(Response);
    const response = await responsePromise;
    expect(response).not.toBeInstanceOf(Response);
    const dataAndResponse = await responsePromise.withResponse();
    expect(dataAndResponse.data).toBe(response);
    expect(dataAndResponse.response).toBe(rawResponse);
  });

  // Prism tests are disabled
  test.skip('create: required and optional params', async () => {
    const response = await client.checkout.create({
      product_id: 'product_id',
      amount_cents: 50,
      cancel_url: 'https://example.com',
      compare_price_cents: 0,
      crypto_asset: 'BTC',
      discount_code: 'discount_code',
      email: 'dev@stainless.com',
      method: 'card',
      success_url: 'https://example.com',
      title: 'title',
      variant_id: 'variant_id',
    });
  });
});
