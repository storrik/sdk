// File generated from our OpenAPI spec by Stainless. See CONTRIBUTING.md for details.

import { APIResource } from '../core/resource';
import { APIPromise } from '../core/api-promise';
import { RequestOptions } from '../internal/request-options';

export class Orders extends APIResource {
  /**
   * Verifies if an order is completed by either `order_id` or a combination of
   * `store_id` and `email`. Optionally include `product_id` to validate against a
   * specific product.
   *
   * @example
   * ```ts
   * const verifyOrderResponse = await client.orders.verify();
   * ```
   */
  verify(body: OrderVerifyParams, options?: RequestOptions): APIPromise<VerifyOrderResponse> {
    return this._client.post('/v1/order/verify', { body, ...options });
  }
}

export interface VerifyOrderError {
  /**
   * Human-readable error message.
   */
  error?: string;

  issues?: Array<VerifyOrderError.Issue>;

  success?: boolean;

  verified?: boolean;
}

export namespace VerifyOrderError {
  export interface Issue {
    message?: string;

    path?: string;
  }
}

export interface VerifyOrderRequest {
  /**
   * The customer’s email address (trimmed and lowercase).
   */
  email?: string;

  /**
   * The unique order identifier.
   */
  order_id?: string;

  /**
   * Optional product identifier for validation.
   */
  product_id?: string;

  /**
   * The store identifier.
   */
  store_id?: string;
}

export interface VerifyOrderResponse {
  /**
   * Unix timestamp when the order was created.
   */
  created_at?: number;

  order_id?: string;

  status?: 'completed' | 'pending' | 'failed' | 'refunded';

  success?: boolean;

  /**
   * Whether the order is verified as completed.
   */
  verified?: boolean;
}

export interface OrderVerifyParams {
  /**
   * The customer’s email address (trimmed and lowercase).
   */
  email?: string;

  /**
   * The unique order identifier.
   */
  order_id?: string;

  /**
   * Optional product identifier for validation.
   */
  product_id?: string;

  /**
   * The store identifier.
   */
  store_id?: string;
}

export declare namespace Orders {
  export {
    type VerifyOrderError as VerifyOrderError,
    type VerifyOrderRequest as VerifyOrderRequest,
    type VerifyOrderResponse as VerifyOrderResponse,
    type OrderVerifyParams as OrderVerifyParams,
  };
}
