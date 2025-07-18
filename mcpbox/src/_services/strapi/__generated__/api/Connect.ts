/* eslint-disable */
/* tslint:disable */
// @ts-nocheck
/*
 * ---------------------------------------------------------------
 * ## THIS FILE WAS GENERATED VIA SWAGGER-TYPESCRIPT-API        ##
 * ##                                                           ##
 * ## AUTHOR: acacode                                           ##
 * ## SOURCE: https://github.com/acacode/swagger-typescript-api ##
 * ---------------------------------------------------------------
 */

import { ConnectDetailError } from "./data-contracts";
import { HttpClient, RequestParams } from "./http-client";

export class Connect<SecurityDataType = unknown> {
  http: HttpClient<SecurityDataType>;

  constructor(http: HttpClient<SecurityDataType>) {
    this.http = http;
  }

  /**
   * @description Redirects to provider login before being redirect to /auth/{provider}/callback
   *
   * @tags Users-Permissions - Auth
   * @name ConnectDetail
   * @summary Login with a provider
   * @request GET:/connect/{provider}
   * @secure
   */
  connectDetail = (provider: string, params: RequestParams = {}) =>
    this.http.request<any, ConnectDetailError>({
      path: `/connect/${provider}`,
      method: "GET",
      secure: true,
      ...params,
    });
}
