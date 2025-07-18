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
  DeleteFeatureData,
  DeleteFeatureError,
  FeatureRequest,
  GetFeatureData,
  GetFeatureError,
  GetFeatureParams,
  PutFeatureData,
  PutFeatureError,
} from "./data-contracts";
import { ContentType, HttpClient, RequestParams } from "./http-client";

export class Feature<SecurityDataType = unknown> {
  http: HttpClient<SecurityDataType>;

  constructor(http: HttpClient<SecurityDataType>) {
    this.http = http;
  }

  /**
   * No description
   *
   * @tags Feature
   * @name GetFeature
   * @request GET:/feature
   * @secure
   */
  getFeature = (query: GetFeatureParams, params: RequestParams = {}) =>
    this.http.request<GetFeatureData, GetFeatureError>({
      path: `/feature`,
      method: "GET",
      query: query,
      secure: true,
      format: "json",
      ...params,
    });
  /**
   * No description
   *
   * @tags Feature
   * @name PutFeature
   * @request PUT:/feature
   * @secure
   */
  putFeature = (data: FeatureRequest, params: RequestParams = {}) =>
    this.http.request<PutFeatureData, PutFeatureError>({
      path: `/feature`,
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
   * @tags Feature
   * @name DeleteFeature
   * @request DELETE:/feature
   * @secure
   */
  deleteFeature = (params: RequestParams = {}) =>
    this.http.request<DeleteFeatureData, DeleteFeatureError>({
      path: `/feature`,
      method: "DELETE",
      secure: true,
      format: "json",
      ...params,
    });
}
