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

import { EmojisGetData } from "./data-contracts";
import { HttpClient, RequestParams } from "./http-client";

export class Emojis<SecurityDataType = unknown> {
  http: HttpClient<SecurityDataType>;

  constructor(http: HttpClient<SecurityDataType>) {
    this.http = http;
  }

  /**
   * @description Lists all the emojis available to use on GitHub Enterprise Server.
   *
   * @tags emojis
   * @name EmojisGet
   * @summary Get emojis
   * @request GET:/emojis
   */
  emojisGet = (params: RequestParams = {}) =>
    this.http.request<EmojisGetData, any>({
      path: `/emojis`,
      method: "GET",
      format: "json",
      ...params,
    });
}
