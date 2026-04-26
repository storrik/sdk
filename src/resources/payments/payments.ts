// File generated from our OpenAPI spec by Stainless. See CONTRIBUTING.md for details.

import { APIResource } from '../../core/resource';
import * as TransactionsAPI from './transactions';
import { TransactionClientResponse, Transactions } from './transactions';
import { APIPromise } from '../../core/api-promise';
import { RequestOptions } from '../../internal/request-options';

export class Payments extends APIResource {
  transactions: TransactionsAPI.Transactions = new TransactionsAPI.Transactions(this._client);

  /**
   * Creates a payment intent for a product or fixed amount.
   *
   * Default behavior:
   *
   * - If `type` is not provided, it defaults to `hosted` and returns a hosted
   *   checkout URL.
   * - If `type` is `embed`, it returns a client secret for embedded flows.
   */
  createIntent(body: PaymentCreateIntentParams, options?: RequestOptions): APIPromise<PaymentCreateIntentResponse> {
    return this._client.post('/v1/payments/intents', { body, ...options });
  }
}

export interface PaymentCreateIntentResponse {
  type: 'hosted' | 'embed';

  checkout_url?: string | null;

  client_secret?: string | null;

  transaction_id?: string | null;
}

export interface PaymentCreateIntentParams {
  /**
   * Amount in the smallest currency unit.
   */
  amount: number;

  /**
   * Currency used on the payment.
   */
  currency: 'USD' | 'EUR' | 'GBP' | 'AUD' | 'CYN' | 'CAD';

  /**
   * Optional redirect URL after cancelled payment.
   */
  cancel_url?: string;

  /**
   * Optional ISO country code.
   */
  country?: string;

  email?: string;

  /**
   * Optional metadata for the payment.
   */
  metadata?: { [key: string]: unknown };

  /**
   * Payment method. Defaults to card.
   */
  method?: 'card';

  /**
   * Optional product identifier.
   */
  product_id?: string;

  /**
   * Optional redirect URL after successful payment.
   */
  success_url?: string;

  /**
   * Checkout mode. Defaults to hosted.
   */
  type?: 'embed' | 'hosted';
}

Payments.Transactions = Transactions;

export declare namespace Payments {
  export {
    type PaymentCreateIntentResponse as PaymentCreateIntentResponse,
    type PaymentCreateIntentParams as PaymentCreateIntentParams
  };

  export {
    Transactions as Transactions,
    type TransactionClientResponse as TransactionClientResponse
  };
}
