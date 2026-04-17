// File generated from our OpenAPI spec by Stainless. See CONTRIBUTING.md for details.

import { APIResource } from '../core/resource';
import { APIPromise } from '../core/api-promise';
import { RequestOptions } from '../internal/request-options';

export class Auth extends APIResource {
  /**
   * Sends a password reset email if the email exists. Always returns success.
   *
   * @example
   * ```ts
   * const response = await client.auth.forgotPassword({
   *   email: 'test@storrik.com',
   * });
   * ```
   */
  forgotPassword(
    body: AuthForgotPasswordParams,
    options?: RequestOptions,
  ): APIPromise<AuthForgotPasswordResponse> {
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
   * const response = await client.auth.login({
   *   email: 'test@storrik.com',
   *   password: 'supersecurepassword',
   * });
   * ```
   */
  login(body: AuthLoginParams, options?: RequestOptions): APIPromise<AuthLoginResponse> {
    return this._client.post('/auth/login', { body, ...options });
  }

  /**
   * Revokes the active session and clears the refresh cookie.
   *
   * @example
   * ```ts
   * const response = await client.auth.logout();
   * ```
   */
  logout(options?: RequestOptions): APIPromise<AuthLogoutResponse> {
    return this._client.post('/auth/logout', options);
  }

  /**
   * Returns the currently authenticated user.
   *
   * @example
   * ```ts
   * const response = await client.auth.me();
   * ```
   */
  me(options?: RequestOptions): APIPromise<AuthMeResponse> {
    return this._client.get('/me', options);
  }

  /**
   * Rotates the refresh token and issues a new access token.
   *
   * @example
   * ```ts
   * const response = await client.auth.refresh();
   * ```
   */
  refresh(options?: RequestOptions): APIPromise<AuthRefreshResponse> {
    return this._client.post('/auth/refresh', options);
  }

  /**
   * Creates an account and sends a verification email.
   *
   * @example
   * ```ts
   * const response = await client.auth.register({
   *   email: 'test@storrik.com',
   *   password: 'supersecurepassword',
   * });
   * ```
   */
  register(body: AuthRegisterParams, options?: RequestOptions): APIPromise<AuthRegisterResponse> {
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
   * const response = await client.auth.resetPassword({
   *   token: 'reset_token_here',
   *   new_password: 'newpassword123',
   * });
   * ```
   */
  resetPassword(
    body: AuthResetPasswordParams,
    options?: RequestOptions,
  ): APIPromise<AuthResetPasswordResponse> {
    return this._client.post('/auth/reset-password', { body, ...options });
  }

  /**
   * Verifies a user's email using an email verification token.
   *
   * @example
   * ```ts
   * const response = await client.auth.verifyEmail({
   *   token: 'email_token_here',
   * });
   * ```
   */
  verifyEmail(body: AuthVerifyEmailParams, options?: RequestOptions): APIPromise<AuthVerifyEmailResponse> {
    return this._client.post('/auth/verify-email', { body, ...options });
  }
}

export interface AuthForgotPasswordResponse {
  message: string;
}

export interface AuthLoginResponse {
  access_token: string;

  email_verified: boolean;

  user_id: string;
}

export interface AuthLogoutResponse {
  message: string;
}

export interface AuthMeResponse {
  user_id: string;
}

export interface AuthRefreshResponse {
  access_token: string;

  user_id: string;
}

export interface AuthRegisterResponse {
  message: string;

  user_id: string;
}

export interface AuthResetPasswordResponse {
  message: string;
}

export interface AuthVerifyEmailResponse {
  message: string;
}

export interface AuthForgotPasswordParams {
  email: string;
}

export interface AuthLoginParams {
  email: string;

  password: string;
}

export interface AuthRegisterParams {
  email: string;

  password: string;
}

export interface AuthResetPasswordParams {
  token: string;

  new_password: string;
}

export interface AuthVerifyEmailParams {
  token: string;
}

export declare namespace Auth {
  export {
    type AuthForgotPasswordResponse as AuthForgotPasswordResponse,
    type AuthLoginResponse as AuthLoginResponse,
    type AuthLogoutResponse as AuthLogoutResponse,
    type AuthMeResponse as AuthMeResponse,
    type AuthRefreshResponse as AuthRefreshResponse,
    type AuthRegisterResponse as AuthRegisterResponse,
    type AuthResetPasswordResponse as AuthResetPasswordResponse,
    type AuthVerifyEmailResponse as AuthVerifyEmailResponse,
    type AuthForgotPasswordParams as AuthForgotPasswordParams,
    type AuthLoginParams as AuthLoginParams,
    type AuthRegisterParams as AuthRegisterParams,
    type AuthResetPasswordParams as AuthResetPasswordParams,
    type AuthVerifyEmailParams as AuthVerifyEmailParams,
  };
}
