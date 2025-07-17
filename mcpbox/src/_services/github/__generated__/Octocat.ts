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

import { MetaGetOctocatData, MetaGetOctocatParams } from "./data-contracts";
import { HttpClient, RequestParams } from "./http-client";

export class Octocat<SecurityDataType = unknown> {
  http: HttpClient<SecurityDataType>;

  constructor(http: HttpClient<SecurityDataType>) {
    this.http = http;
  }

  /**
   * @description Get the octocat as ASCII art
   *
   * @tags meta
   * @name MetaGetOctocat
   * @summary Get Octocat
   * @request GET:/octocat
   */
  metaGetOctocat = (query: MetaGetOctocatParams, params: RequestParams = {}) =>
    this.http.request<MetaGetOctocatData, any>({
      path: `/octocat`,
      method: "GET",
      query: query,
      ...params,
    });
}
