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
  BasicError,
  LicensesGetAllCommonlyUsedData,
  LicensesGetAllCommonlyUsedParams,
  LicensesGetData,
} from "./data-contracts";
import { HttpClient, RequestParams } from "./http-client";

export class Licenses<SecurityDataType = unknown> {
  http: HttpClient<SecurityDataType>;

  constructor(http: HttpClient<SecurityDataType>) {
    this.http = http;
  }

  /**
   * @description Lists the most commonly used licenses on GitHub. For more information, see "[Licensing a repository ](https://docs.github.com/enterprise-server@3.17/repositories/managing-your-repositorys-settings-and-features/customizing-your-repository/licensing-a-repository)."
   *
   * @tags licenses
   * @name LicensesGetAllCommonlyUsed
   * @summary Get all commonly used licenses
   * @request GET:/licenses
   */
  licensesGetAllCommonlyUsed = (
    query: LicensesGetAllCommonlyUsedParams,
    params: RequestParams = {},
  ) =>
    this.http.request<LicensesGetAllCommonlyUsedData, any>({
      path: `/licenses`,
      method: "GET",
      query: query,
      format: "json",
      ...params,
    });
  /**
   * @description Gets information about a specific license. For more information, see "[Licensing a repository ](https://docs.github.com/enterprise-server@3.17/repositories/managing-your-repositorys-settings-and-features/customizing-your-repository/licensing-a-repository)."
   *
   * @tags licenses
   * @name LicensesGet
   * @summary Get a license
   * @request GET:/licenses/{license}
   */
  licensesGet = (license: string, params: RequestParams = {}) =>
    this.http.request<LicensesGetData, BasicError>({
      path: `/licenses/${license}`,
      method: "GET",
      format: "json",
      ...params,
    });
}
