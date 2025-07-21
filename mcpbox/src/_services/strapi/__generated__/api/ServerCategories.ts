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
  DeleteServerCategoriesIdData,
  DeleteServerCategoriesIdError,
  GetServerCategoriesData,
  GetServerCategoriesError,
  GetServerCategoriesIdData,
  GetServerCategoriesIdError,
  GetServerCategoriesParams,
  PostServerCategoriesData,
  PostServerCategoriesError,
  PutServerCategoriesIdData,
  PutServerCategoriesIdError,
  ServerCategoryRequest,
} from "./data-contracts";
import { ContentType, HttpClient, RequestParams } from "./http-client";

export class ServerCategories<SecurityDataType = unknown> {
  http: HttpClient<SecurityDataType>;

  constructor(http: HttpClient<SecurityDataType>) {
    this.http = http;
  }

  /**
   * No description
   *
   * @tags Server-category
   * @name GetServerCategories
   * @request GET:/server-categories
   * @secure
   */
  getServerCategories = (
    query: GetServerCategoriesParams,
    params: RequestParams = {},
  ) =>
    this.http.request<GetServerCategoriesData, GetServerCategoriesError>({
      path: `/server-categories`,
      method: "GET",
      query: query,
      secure: true,
      format: "json",
      ...params,
    });
  /**
   * No description
   *
   * @tags Server-category
   * @name PostServerCategories
   * @request POST:/server-categories
   * @secure
   */
  postServerCategories = (
    data: ServerCategoryRequest,
    params: RequestParams = {},
  ) =>
    this.http.request<PostServerCategoriesData, PostServerCategoriesError>({
      path: `/server-categories`,
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
   * @tags Server-category
   * @name GetServerCategoriesId
   * @request GET:/server-categories/{id}
   * @secure
   */
  getServerCategoriesId = (id: number, params: RequestParams = {}) =>
    this.http.request<GetServerCategoriesIdData, GetServerCategoriesIdError>({
      path: `/server-categories/${id}`,
      method: "GET",
      secure: true,
      format: "json",
      ...params,
    });
  /**
   * No description
   *
   * @tags Server-category
   * @name PutServerCategoriesId
   * @request PUT:/server-categories/{id}
   * @secure
   */
  putServerCategoriesId = (
    id: number,
    data: ServerCategoryRequest,
    params: RequestParams = {},
  ) =>
    this.http.request<PutServerCategoriesIdData, PutServerCategoriesIdError>({
      path: `/server-categories/${id}`,
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
   * @tags Server-category
   * @name DeleteServerCategoriesId
   * @request DELETE:/server-categories/{id}
   * @secure
   */
  deleteServerCategoriesId = (id: number, params: RequestParams = {}) =>
    this.http.request<
      DeleteServerCategoriesIdData,
      DeleteServerCategoriesIdError
    >({
      path: `/server-categories/${id}`,
      method: "DELETE",
      secure: true,
      format: "json",
      ...params,
    });
}
