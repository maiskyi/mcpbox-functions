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

import {
  ReposListPublicData,
  ReposListPublicParams,
  ValidationError,
} from "./data-contracts";
import { HttpClient, RequestParams } from "./http-client";

export class Repositories<SecurityDataType = unknown> {
  http: HttpClient<SecurityDataType>;

  constructor(http: HttpClient<SecurityDataType>) {
    this.http = http;
  }

  /**
   * @description Lists all public repositories in the order that they were created. Note: - For GitHub Enterprise Server, this endpoint will only list repositories available to all users on the enterprise. - Pagination is powered exclusively by the `since` parameter. Use the [Link header](https://docs.github.com/enterprise-server@3.17/rest/guides/using-pagination-in-the-rest-api#using-link-headers) to get the URL for the next page of repositories.
   *
   * @tags repos
   * @name ReposListPublic
   * @summary List public repositories
   * @request GET:/repositories
   */
  reposListPublic = (
    query: ReposListPublicParams,
    params: RequestParams = {},
  ) =>
    this.http.request<ReposListPublicData, ValidationError>({
      path: `/repositories`,
      method: "GET",
      query: query,
      format: "json",
      ...params,
    });
}
