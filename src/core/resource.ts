// File generated from our OpenAPI spec by Stainless. See CONTRIBUTING.md for details.

import type { Storrik } from '../client';

export abstract class APIResource {
  protected _client: Storrik;

  constructor(client: Storrik) {
    this._client = client;
  }
}
