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

import { MetaGetData } from "./data-contracts";
import { HttpClient, RequestParams } from "./http-client";

export class Meta<SecurityDataType = unknown> {
  http: HttpClient<SecurityDataType>;

  constructor(http: HttpClient<SecurityDataType>) {
    this.http = http;
  }

  /**
   * No description
   *
   * @tags meta
   * @name MetaGet
   * @summary Get GitHub Enterprise Server meta information
   * @request GET:/meta
   */
  metaGet = (params: RequestParams = {}) =>
    this.http.request<MetaGetData, any>({
      path: `/meta`,
      method: "GET",
      format: "json",
      ...params,
    });
}
