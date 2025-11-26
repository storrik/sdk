// File generated from our OpenAPI spec by Stainless. See CONTRIBUTING.md for details.

import { APIResource } from '../core/resource';
import { APIPromise } from '../core/api-promise';
import { RequestOptions } from '../internal/request-options';

export class Payments extends APIResource {
  /**
   * Creates a payment intent.
   */
  createIntent(body: PaymentCreateIntentParams, options?: RequestOptions): APIPromise<PaymentIntentResponse> {
    return this._client.post('/v1/payments/intents', { body, ...options });
  }
}

export interface PaymentIntentRequest {
  amount: number;

  currency: string;

  method: 'card';

  type: 'embed' | 'hosted';

  cancel_url?: string;

  collect_billing?: boolean;

  collect_shipping?: boolean;

  country?: string;

  coupon?: string;

  customerId?: string;

  description?: string;

  email?: string;

  metadata?: { [key: string]: string };

  productId?: string;

  quantity?: number;

  receipt_email?: string;

  storeId?: string;

  success_url?: string;

  variantId?: string;
}

export type PaymentIntentResponse =
  | PaymentIntentResponse.EmbedResponse
  | PaymentIntentResponse.HostedResponse;

export namespace PaymentIntentResponse {
  export interface EmbedResponse {
    clientSecret?: string;

    ok?: boolean;
  }

  export interface HostedResponse {
    ok?: boolean;

    url?: string;
  }
}

export interface PaymentCreateIntentParams {
  amount: number;

  currency: string;

  method: 'card';

  type: 'embed' | 'hosted';

  cancel_url?: string;

  collect_billing?: boolean;

  collect_shipping?: boolean;

  country?: string;

  coupon?: string;

  customerId?: string;

  description?: string;

  email?: string;

  metadata?: { [key: string]: string };

  productId?: string;

  quantity?: number;

  receipt_email?: string;

  storeId?: string;

  success_url?: string;

  variantId?: string;
}

export declare namespace Payments {
  export {
    type PaymentIntentRequest as PaymentIntentRequest,
    type PaymentIntentResponse as PaymentIntentResponse,
    type PaymentCreateIntentParams as PaymentCreateIntentParams,
  };
}
