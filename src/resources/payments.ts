// File generated from our OpenAPI spec by Stainless. See CONTRIBUTING.md for details.

import { APIResource } from '../core/resource';
import { APIPromise } from '../core/api-promise';
import { RequestOptions } from '../internal/request-options';

export class Payments extends APIResource {
  /**
   * Creates a payment intent for a product or fixed amount.
   * The response will return either a hosted checkout url or a client secret for
   * embedded mode.
   */
  createIntent(body: PaymentCreateIntentParams, options?: RequestOptions): APIPromise<PaymentIntentResponse> {
    return this._client.post('/v1/payments/intents', { body, ...options });
  }
}

export interface PaymentIntentRequest {
  /**
   * Amount in the smallest currency unit (cents).
   */
  amount: number;

  /**
   * currency used on the payment.
   */
  currency: 'USD' | 'EUR' | 'GBP' | 'AUD' | 'CYN';

  /**
   * Checkout mode. Hosted returns a redirect url.
   */
  type: 'embed' | 'hosted';

  cancel_url?: string;

  collect_billing?: boolean;

  collect_shipping?: boolean;

  /**
   * Optional ISO country code. Auto determined if missing.
   */
  country?: string;

  coupon?: string;

  customerId?: string;

  description?: string;

  email?: string;

  metadata?: { [key: string]: string };

  /**
   * Payment method. Defaults to card.
   */
  method?: 'card';

  productId?: string;

  quantity?: number;

  receipt_email?: string;

  success_url?: string;

  variantId?: string;
}

export type PaymentIntentResponse = PaymentIntentResponse.Embed | PaymentIntentResponse.Hosted;

export namespace PaymentIntentResponse {
  export interface Embed {
    clientSecret?: string;

    ok?: boolean;
  }

  export interface Hosted {
    ok?: boolean;

    url?: string;
  }
}

export interface PaymentCreateIntentParams {
  /**
   * Amount in the smallest currency unit (cents).
   */
  amount: number;

  /**
   * currency used on the payment.
   */
  currency: 'USD' | 'EUR' | 'GBP' | 'AUD' | 'CYN';

  /**
   * Checkout mode. Hosted returns a redirect url.
   */
  type: 'embed' | 'hosted';

  cancel_url?: string;

  collect_billing?: boolean;

  collect_shipping?: boolean;

  /**
   * Optional ISO country code. Auto determined if missing.
   */
  country?: string;

  coupon?: string;

  customerId?: string;

  description?: string;

  email?: string;

  metadata?: { [key: string]: string };

  /**
   * Payment method. Defaults to card.
   */
  method?: 'card';

  productId?: string;

  quantity?: number;

  receipt_email?: string;

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
