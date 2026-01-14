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
   * The response excludes all sensitive fields such as fees, customer details,
   * metadata.
   */
  client(transactionID: string, options?: RequestOptions): APIPromise<TransactionClientResponse> {
    return this._client.get(path`/v1/payments/transactions/${transactionID}/client`, options);
  }
}

export interface TransactionClientResponse {
  ok: boolean;

  transaction: TransactionClientResponse.Transaction;
}

export namespace TransactionClientResponse {
  export interface Transaction {
    /**
     * Transaction ID.
     */
    id: string;

    /**
     * Gross amount in the smallest currency unit.
     */
    amount: number;

    /**
     * UNIX timestamp when the transaction was created.
     */
    createdAt: number;

    /**
     * ISO currency code.
     */
    currency: string;

    quantity: number;

    /**
     * Current transaction status.
     */
    status: string;

    /**
     * UNIX timestamp when the transaction was last updated.
     */
    updatedAt: number;

    /**
     * Product ID from the original order snapshot.
     */
    productId?: string | null;

    /**
     * Variant ID from the original order snapshot.
     */
    variantId?: string | null;
  }
}

export declare namespace Transactions {
  export { type TransactionClientResponse as TransactionClientResponse };
}
