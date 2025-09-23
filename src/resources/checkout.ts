// File generated from our OpenAPI spec by Stainless. See CONTRIBUTING.md for details.

import { APIResource } from '../core/resource';
import { APIPromise } from '../core/api-promise';
import { RequestOptions } from '../internal/request-options';

export class Checkout extends APIResource {
  /**
   * Creates a checkout for a store product or custom amount.
   */
  create(body: CheckoutCreateParams, options?: RequestOptions): APIPromise<CheckoutCreateResponse> {
    return this._client.post('/v1/checkout', { body, ...options });
  }
}

export interface CheckoutCreateResponse {
  id?: string;

  status?: string;

  url?: string;
}

export interface CheckoutCreateParams {
  store_id: string;

  amount_cents?: number;

  cancel_url?: string;

  compare_price_cents?: number;

  crypto_asset?: 'BTC' | 'LTC';

  discount_code?: string;

  email?: string;

  method?: 'card' | 'crypto';

  product_id?: string;

  success_url?: string;

  title?: string;

  variant_id?: string;
}

export declare namespace Checkout {
  export {
    type CheckoutCreateResponse as CheckoutCreateResponse,
    type CheckoutCreateParams as CheckoutCreateParams,
  };
}
