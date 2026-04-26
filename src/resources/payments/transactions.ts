// File generated from our OpenAPI spec by Stainless. See CONTRIBUTING.md for details.

import { APIResource } from '../../core/resource';
import { APIPromise } from '../../core/api-promise';
import { RequestOptions } from '../../internal/request-options';
import { path } from '../../internal/utils/path';

export class Transactions extends APIResource {
  /**
   * Retrieves a client-safe view of a transaction using a publishable key. Intended
   * for checkout or embed flows to poll or fetch transaction status.
   *
   * The response excludes all sensitive fields such as fees, customer details, and
   * metadata.
   */
  client(transactionID: string, options?: RequestOptions): APIPromise<TransactionClientResponse> {
    return this._client.get(path`/v1/payments/transactions/${transactionID}/client`, options);
  }
}

export interface TransactionClientResponse {
  amount: number;

  currency: string;

  status: 'pending' | 'processing' | 'succeeded' | 'failed' | 'cancelled';

  transaction_id: string;

  /**
   * Unix timestamp.
   */
  created_at?: number;

  product_name?: string | null;
}

export declare namespace Transactions {
  export {
    type TransactionClientResponse as TransactionClientResponse
  };
}
