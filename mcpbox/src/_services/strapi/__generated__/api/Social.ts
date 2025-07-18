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
  DeleteSocialData,
  DeleteSocialError,
  GetSocialData,
  GetSocialError,
  GetSocialParams,
  PutSocialData,
  PutSocialError,
  SocialRequest,
} from "./data-contracts";
import { ContentType, HttpClient, RequestParams } from "./http-client";

export class Social<SecurityDataType = unknown> {
  http: HttpClient<SecurityDataType>;

  constructor(http: HttpClient<SecurityDataType>) {
    this.http = http;
  }

  /**
   * No description
   *
   * @tags Social
   * @name GetSocial
   * @request GET:/social
   * @secure
   */
  getSocial = (query: GetSocialParams, params: RequestParams = {}) =>
    this.http.request<GetSocialData, GetSocialError>({
      path: `/social`,
      method: "GET",
      query: query,
      secure: true,
      format: "json",
      ...params,
    });
  /**
   * No description
   *
   * @tags Social
   * @name PutSocial
   * @request PUT:/social
   * @secure
   */
  putSocial = (data: SocialRequest, params: RequestParams = {}) =>
    this.http.request<PutSocialData, PutSocialError>({
      path: `/social`,
      method: "PUT",
      body: data,
      secure: true,
      type: ContentType.Json,
      format: "json",
      ...params,
    });
  /**
   * No description
   *
   * @tags Social
   * @name DeleteSocial
   * @request DELETE:/social
   * @secure
   */
  deleteSocial = (params: RequestParams = {}) =>
    this.http.request<DeleteSocialData, DeleteSocialError>({
      path: `/social`,
      method: "DELETE",
      secure: true,
      format: "json",
      ...params,
    });
}
