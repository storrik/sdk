// File generated from our OpenAPI spec by Stainless. See CONTRIBUTING.md for details.

import { APIResource } from '../core/resource';
import { APIPromise } from '../core/api-promise';
import { RequestOptions } from '../internal/request-options';

export class Payments extends APIResource {
  /**
   * Creates a payment intent for a product or fixed amount.
   *
   * Default behavior:
   *
   * - If `type` is not provided, it defaults to `hosted` and returns a hosted
   *   checkout url.
   * - If `type` is `embed`, it returns a client secret for embedded flows.
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
   * Currency used on the payment.
   */
  currency: 'USD' | 'EUR' | 'GBP' | 'AUD' | 'CYN' | 'CAD';

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

  /**
   * Checkout mode. Defaults to hosted.
   */
  type?: 'embed' | 'hosted';

  variantId?: string;
}

export type PaymentIntentResponse = PaymentIntentResponse.Embed | PaymentIntentResponse.Hosted;

export namespace PaymentIntentResponse {
  export interface Embed {
    /**
     * Client secret for confirming the payment intent.
     */
    clientSecret: string;

    ok: boolean;

    /**
     * Publishable key to use on the client.
     */
    pk: string;
  }

  export interface Hosted {
    /**
     * Hosted checkout url to redirect the customer to.
     */
    checkoutUrl: string;

    ok: boolean;
  }
}

export interface PaymentCreateIntentParams {
  /**
   * Amount in the smallest currency unit (cents).
   */
  amount: number;

  /**
   * Currency used on the payment.
   */
  currency: 'USD' | 'EUR' | 'GBP' | 'AUD' | 'CYN' | 'CAD';

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

  /**
   * Checkout mode. Defaults to hosted.
   */
  type?: 'embed' | 'hosted';

  variantId?: string;
}

export declare namespace Payments {
  export {
    type PaymentIntentRequest as PaymentIntentRequest,
    type PaymentIntentResponse as PaymentIntentResponse,
    type PaymentCreateIntentParams as PaymentCreateIntentParams,
  };
}
