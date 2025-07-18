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
  DeletePagesIdData,
  DeletePagesIdError,
  GetPagesData,
  GetPagesError,
  GetPagesIdData,
  GetPagesIdError,
  GetPagesParams,
  PageRequest,
  PostPagesData,
  PostPagesError,
  PutPagesIdData,
  PutPagesIdError,
} from "./data-contracts";
import { ContentType, HttpClient, RequestParams } from "./http-client";

export class Pages<SecurityDataType = unknown> {
  http: HttpClient<SecurityDataType>;

  constructor(http: HttpClient<SecurityDataType>) {
    this.http = http;
  }

  /**
   * No description
   *
   * @tags Page
   * @name GetPages
   * @request GET:/pages
   * @secure
   */
  getPages = (query: GetPagesParams, params: RequestParams = {}) =>
    this.http.request<GetPagesData, GetPagesError>({
      path: `/pages`,
      method: "GET",
      query: query,
      secure: true,
      format: "json",
      ...params,
    });
  /**
   * No description
   *
   * @tags Page
   * @name PostPages
   * @request POST:/pages
   * @secure
   */
  postPages = (data: PageRequest, params: RequestParams = {}) =>
    this.http.request<PostPagesData, PostPagesError>({
      path: `/pages`,
      method: "POST",
      body: data,
      secure: true,
      type: ContentType.Json,
      format: "json",
      ...params,
    });
  /**
   * No description
   *
   * @tags Page
   * @name GetPagesId
   * @request GET:/pages/{id}
   * @secure
   */
  getPagesId = (id: number, params: RequestParams = {}) =>
    this.http.request<GetPagesIdData, GetPagesIdError>({
      path: `/pages/${id}`,
      method: "GET",
      secure: true,
      format: "json",
      ...params,
    });
  /**
   * No description
   *
   * @tags Page
   * @name PutPagesId
   * @request PUT:/pages/{id}
   * @secure
   */
  putPagesId = (id: number, data: PageRequest, params: RequestParams = {}) =>
    this.http.request<PutPagesIdData, PutPagesIdError>({
      path: `/pages/${id}`,
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
   * @tags Page
   * @name DeletePagesId
   * @request DELETE:/pages/{id}
   * @secure
   */
  deletePagesId = (id: number, params: RequestParams = {}) =>
    this.http.request<DeletePagesIdData, DeletePagesIdError>({
      path: `/pages/${id}`,
      method: "DELETE",
      secure: true,
      format: "json",
      ...params,
    });
}
