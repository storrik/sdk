// File generated from our OpenAPI spec by Stainless. See CONTRIBUTING.md for details.

import Storrik from 'storrik';

const client = new Storrik({ baseURL: process.env['TEST_API_BASE_URL'] ?? 'http://127.0.0.1:4010' });

describe('resource checkout', () => {
  // Prism tests are disabled
  test.skip('create: only required params', async () => {
    const responsePromise = client.checkout.create({ product_id: 'PROD_FOO' });
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
      product_id: 'PROD_FOO',
      amount_cents: 500,
      cancel_url: 'https://foo.bar/cancel',
      compare_price_cents: 1000,
      crypto_asset: 'BTC',
      discount_code: 'FOO10',
      email: 'customer@foo.bar',
      method: 'card',
      success_url: 'https://foo.bar/success',
      title: 'Foo Bar',
      variant_id: 'VAR_FOO',
    });
  });
});
