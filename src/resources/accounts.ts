// File generated from our OpenAPI spec by Stainless. See CONTRIBUTING.md for details.

import { APIResource } from '../core/resource';
import { APIPromise } from '../core/api-promise';
import { RequestOptions } from '../internal/request-options';

export class Accounts extends APIResource {
  /**
   * Create an account to operate a business, including payments, payouts, products,
   * and configuration.
   *
   * @example
   * ```ts
   * const account = await client.accounts.create({
   *   country: 'US',
   *   name: 'Example Corp',
   *   website: 'https://example.com',
   * });
   * ```
   */
  create(body: AccountCreateParams, options?: RequestOptions): APIPromise<AccountCreateResponse> {
    return this._client.post('/accounts/create', { body, ...options });
  }
}

export interface AccountCreateResponse {
  account?: AccountCreateResponse.Account;

  ok?: boolean;
}

export namespace AccountCreateResponse {
  export interface Account {
    id?: string;

    name?: string;

    organization_id?: string | null;
  }
}

export interface AccountCreateParams {
  /**
   * ISO Alpha-2 country code
   */
  country: string;

  name: string;

  /**
   * Business website URL
   */
  website: string;

  /**
   * Optional organization identifier to associate the account with
   */
  organization_id?: string;
}

export declare namespace Accounts {
  export {
    type AccountCreateResponse as AccountCreateResponse,
    type AccountCreateParams as AccountCreateParams
  };
}
