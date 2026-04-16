// File generated from our OpenAPI spec by Stainless. See CONTRIBUTING.md for details.

import { APIResource } from '../core/resource';
import { APIPromise } from '../core/api-promise';
import { RequestOptions } from '../internal/request-options';

export class Frontend extends APIResource {
  /**
   * Sends a password reset email if the email exists. Always returns success.
   *
   * @example
   * ```ts
   * const response = await client.frontend.forgotPassword({
   *   email: 'test@storrik.com',
   * });
   * ```
   */
  forgotPassword(
    body: FrontendForgotPasswordParams,
    options?: RequestOptions,
  ): APIPromise<FrontendForgotPasswordResponse> {
    return this._client.post('/auth/forgot-password', { body, ...options });
  }

  /**
   * Logs a user in and creates a session.
   *
   * Returns an access token in the response body and sets an HttpOnly refresh
   * cookie.
   *
   * @example
   * ```ts
   * const response = await client.frontend.login({
   *   email: 'test@storrik.com',
   *   password: 'supersecurepassword',
   * });
   * ```
   */
  login(body: FrontendLoginParams, options?: RequestOptions): APIPromise<FrontendLoginResponse> {
    return this._client.post('/auth/login', { body, ...options });
  }

  /**
   * Revokes the active session and clears the refresh cookie.
   *
   * @example
   * ```ts
   * const response = await client.frontend.logout();
   * ```
   */
  logout(options?: RequestOptions): APIPromise<FrontendLogoutResponse> {
    return this._client.post('/auth/logout', options);
  }

  /**
   * Returns the currently authenticated user.
   *
   * @example
   * ```ts
   * const response = await client.frontend.me();
   * ```
   */
  me(options?: RequestOptions): APIPromise<FrontendMeResponse> {
    return this._client.get('/me', options);
  }

  /**
   * Rotates the refresh token and issues a new access token.
   *
   * @example
   * ```ts
   * const response = await client.frontend.refresh();
   * ```
   */
  refresh(options?: RequestOptions): APIPromise<FrontendRefreshResponse> {
    return this._client.post('/auth/refresh', options);
  }

  /**
   * Creates an account and sends a verification email.
   *
   * @example
   * ```ts
   * const response = await client.frontend.register({
   *   email: 'test@storrik.com',
   *   password: 'supersecurepassword',
   * });
   * ```
   */
  register(body: FrontendRegisterParams, options?: RequestOptions): APIPromise<FrontendRegisterResponse> {
    return this._client.post('/auth/register', { body, ...options });
  }

  /**
   * Resets a user's password using a reset token.
   *
   * Side effects:
   *
   * - updates password
   * - revokes all sessions
   * - clears refresh cookie
   *
   * @example
   * ```ts
   * const response = await client.frontend.resetPassword({
   *   token: 'reset_token_here',
   *   new_password: 'newpassword123',
   * });
   * ```
   */
  resetPassword(
    body: FrontendResetPasswordParams,
    options?: RequestOptions,
  ): APIPromise<FrontendResetPasswordResponse> {
    return this._client.post('/auth/reset-password', { body, ...options });
  }

  /**
   * Verifies a user's email using an email verification token.
   *
   * @example
   * ```ts
   * const response = await client.frontend.verifyEmail({
   *   token: 'email_token_here',
   * });
   * ```
   */
  verifyEmail(
    body: FrontendVerifyEmailParams,
    options?: RequestOptions,
  ): APIPromise<FrontendVerifyEmailResponse> {
    return this._client.post('/auth/verify-email', { body, ...options });
  }
}

export interface FrontendForgotPasswordResponse {
  message: string;
}

export interface FrontendLoginResponse {
  access_token: string;

  email_verified: boolean;

  user_id: string;
}

export interface FrontendLogoutResponse {
  message: string;
}

export interface FrontendMeResponse {
  user_id: string;
}

export interface FrontendRefreshResponse {
  access_token: string;

  user_id: string;
}

export interface FrontendRegisterResponse {
  message: string;

  user_id: string;
}

export interface FrontendResetPasswordResponse {
  message: string;
}

export interface FrontendVerifyEmailResponse {
  message: string;
}

export interface FrontendForgotPasswordParams {
  email: string;
}

export interface FrontendLoginParams {
  email: string;

  password: string;
}

export interface FrontendRegisterParams {
  email: string;

  password: string;
}

export interface FrontendResetPasswordParams {
  token: string;

  new_password: string;
}

export interface FrontendVerifyEmailParams {
  token: string;
}

export declare namespace Frontend {
  export {
    type FrontendForgotPasswordResponse as FrontendForgotPasswordResponse,
    type FrontendLoginResponse as FrontendLoginResponse,
    type FrontendLogoutResponse as FrontendLogoutResponse,
    type FrontendMeResponse as FrontendMeResponse,
    type FrontendRefreshResponse as FrontendRefreshResponse,
    type FrontendRegisterResponse as FrontendRegisterResponse,
    type FrontendResetPasswordResponse as FrontendResetPasswordResponse,
    type FrontendVerifyEmailResponse as FrontendVerifyEmailResponse,
    type FrontendForgotPasswordParams as FrontendForgotPasswordParams,
    type FrontendLoginParams as FrontendLoginParams,
    type FrontendRegisterParams as FrontendRegisterParams,
    type FrontendResetPasswordParams as FrontendResetPasswordParams,
    type FrontendVerifyEmailParams as FrontendVerifyEmailParams,
  };
}
