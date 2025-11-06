// File generated from our OpenAPI spec by Stainless. See CONTRIBUTING.md for details.

import { APIResource } from '../core/resource';
import { APIPromise } from '../core/api-promise';
import { RequestOptions } from '../internal/request-options';

export class Payments extends APIResource {
  /**
   * Creates a **Payment Intent**, representing a pending charge for a product or
   * custom amount.
   * Depending on `type`, the response will include either:
   *
   * - a `client_secret` for client-side confirmation (`embed` mode), or
   * - a hosted checkout `url` for redirect-based checkout (`hosted` mode).
   *
   * @example
   * ```ts
   * const response = await client.payments.createIntent({
   *   amount: 50,
   *   currency: 'usd',
   * });
   * ```
   */
  createIntent(
    body: PaymentCreateIntentParams,
    options?: RequestOptions,
  ): APIPromise<PaymentCreateIntentResponse> {
    return this._client.post('/v1/payments/intents', { body, ...options });
  }
}

export type PaymentCreateIntentResponse =
  | PaymentCreateIntentResponse.EmbedClientSide
  | PaymentCreateIntentResponse.HostedRedirectCheckout;

export namespace PaymentCreateIntentResponse {
  export interface EmbedClientSide {
    clientSecret?: string;

    ok?: boolean;
  }

  export interface HostedRedirectCheckout {
    ok?: boolean;

    url?: string;
  }
}

export interface PaymentCreateIntentParams {
  /**
   * Amount in smallest currency unit (e.g., cents). Minimum 50.
   */
  amount: number;

  /**
   * ISO 4217 currency code (`usd`, `eur`).
   */
  currency: string;

  /**
   * Redirect URL after cancellation (hosted only).
   */
  cancel_url?: string;

  /**
   * Optional existing customer ID. Created automatically if not provided.
   */
  customerId?: string;

  /**
   * Short description of the payment or item.
   */
  description?: string;

  /**
   * Customer email address.
   */
  email?: string;

  /**
   * Optional metadata object stored with the payment.
   */
  metadata?: { [key: string]: string };

  /**
   * Payment method. Currently only `card` is supported.
   */
  method?: 'card' | 'crypto' | 'paypal';

  /**
   * Optional product ID linked to the payment.
   */
  productId?: string;

  /**
   * Email for receipts (defaults to `email`).
   */
  receipt_email?: string;

  /**
   * Optional store ID (auto-inferred from your API key if omitted).
   */
  storeId?: string;

  /**
   * Redirect URL after successful payment (hosted or embed with redirect).
   */
  success_url?: string;

  /**
   * - **embed** → Returns a `client_secret` for client-side confirmation
   * - **hosted** → Returns a hosted checkout `url` for redirect-based checkout.
   */
  type?: 'embed' | 'hosted';
}

export declare namespace Payments {
  export {
    type PaymentCreateIntentResponse as PaymentCreateIntentResponse,
    type PaymentCreateIntentParams as PaymentCreateIntentParams,
  };
}
