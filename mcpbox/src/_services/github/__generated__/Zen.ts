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

import { MetaGetZenData } from "./data-contracts";
import { HttpClient, RequestParams } from "./http-client";

export class Zen<SecurityDataType = unknown> {
  http: HttpClient<SecurityDataType>;

  constructor(http: HttpClient<SecurityDataType>) {
    this.http = http;
  }

  /**
   * @description Get a random sentence from the Zen of GitHub
   *
   * @tags meta
   * @name MetaGetZen
   * @summary Get the Zen of GitHub
   * @request GET:/zen
   */
  metaGetZen = (params: RequestParams = {}) =>
    this.http.request<MetaGetZenData, any>({
      path: `/zen`,
      method: "GET",
      ...params,
    });
}
