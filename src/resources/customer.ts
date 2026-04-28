// File generated from our OpenAPI spec by Stainless. See CONTRIBUTING.md for details.

import { APIResource } from '../core/resource';
import { APIPromise } from '../core/api-promise';
import { RequestOptions } from '../internal/request-options';

export class Customer extends APIResource {
  /**
   * Initiates a passwordless customer login flow.
   *
   * Sends a one-time verification code to the customer's email address.
   */
  login(body: CustomerLoginParams, options?: RequestOptions): APIPromise<CustomerLoginResponse> {
    return this._client.post('/v1/customer/login', { body, ...options });
  }

  /**
   * Revokes the active customer session token.
   *
   * After logout, the token becomes invalid and cannot be used again.
   */
  logout(options?: RequestOptions): APIPromise<CustomerLogoutResponse> {
    return this._client.post('/v1/customer/logout', options);
  }

  /**
   * Returns basic customer information, aggregate purchase statistics, and a list of
   * successful purchase transactions.
   */
  me(options?: RequestOptions): APIPromise<CustomerMeResponse> {
    return this._client.get('/v1/customer/me', options);
  }

  /**
   * Verifies a one-time email code and creates a customer session.
   *
   * If successful, returns a customer session token.
   */
  verifyLogin(
    body: CustomerVerifyLoginParams,
    options?: RequestOptions,
  ): APIPromise<CustomerVerifyLoginResponse> {
    return this._client.post('/v1/customer/login/verify', { body, ...options });
  }
}

export interface CustomerLoginResponse {
  message: string;
}

export interface CustomerLogoutResponse {
  message: string;
}

export interface CustomerMeResponse {
  customer_id: string;

  email: string;

  successful_payments: number;

  total_spent: number;

  transactions: Array<CustomerMeResponse.Transaction>;
}

export namespace CustomerMeResponse {
  export interface Transaction {
    amount: number;

    /**
     * Unix timestamp.
     */
    created_at: number;

    currency: string;

    status: string;

    transaction_id: string;

    product_name?: string | null;
  }
}

export interface CustomerVerifyLoginResponse {
  token: string;

  customer_id: string;
}

export interface CustomerLoginParams {
  email: string;
}

export interface CustomerVerifyLoginParams {
  code: string;

  email: string;
}

export declare namespace Customer {
  export {
    type CustomerLoginResponse as CustomerLoginResponse,
    type CustomerLogoutResponse as CustomerLogoutResponse,
    type CustomerMeResponse as CustomerMeResponse,
    type CustomerVerifyLoginResponse as CustomerVerifyLoginResponse,
    type CustomerLoginParams as CustomerLoginParams,
    type CustomerVerifyLoginParams as CustomerVerifyLoginParams,
  };
}
