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
  CodesOfConductGetAllCodesOfConductData,
  CodesOfConductGetConductCodeData,
} from "./data-contracts";
import { HttpClient, RequestParams } from "./http-client";

export class CodesOfConduct<SecurityDataType = unknown> {
  http: HttpClient<SecurityDataType>;

  constructor(http: HttpClient<SecurityDataType>) {
    this.http = http;
  }

  /**
   * @description Returns array of all GitHub's codes of conduct.
   *
   * @tags codes-of-conduct
   * @name CodesOfConductGetAllCodesOfConduct
   * @summary Get all codes of conduct
   * @request GET:/codes_of_conduct
   */
  codesOfConductGetAllCodesOfConduct = (params: RequestParams = {}) =>
    this.http.request<CodesOfConductGetAllCodesOfConductData, any>({
      path: `/codes_of_conduct`,
      method: "GET",
      format: "json",
      ...params,
    });
  /**
   * @description Returns information about the specified GitHub code of conduct.
   *
   * @tags codes-of-conduct
   * @name CodesOfConductGetConductCode
   * @summary Get a code of conduct
   * @request GET:/codes_of_conduct/{key}
   */
  codesOfConductGetConductCode = (key: string, params: RequestParams = {}) =>
    this.http.request<CodesOfConductGetConductCodeData, BasicError>({
      path: `/codes_of_conduct/${key}`,
      method: "GET",
      format: "json",
      ...params,
    });
}
