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
  DeleteServersIdData,
  DeleteServersIdError,
  GetServersData,
  GetServersError,
  GetServersIdData,
  GetServersIdError,
  GetServersParams,
  PostServersData,
  PostServersError,
  PutServersIdData,
  PutServersIdError,
  ServerRequest,
} from "./data-contracts";
import { ContentType, HttpClient, RequestParams } from "./http-client";

export class Servers<SecurityDataType = unknown> {
  http: HttpClient<SecurityDataType>;

  constructor(http: HttpClient<SecurityDataType>) {
    this.http = http;
  }

  /**
   * No description
   *
   * @tags Server
   * @name GetServers
   * @request GET:/servers
   * @secure
   */
  getServers = (query: GetServersParams, params: RequestParams = {}) =>
    this.http.request<GetServersData, GetServersError>({
      path: `/servers`,
      method: "GET",
      query: query,
      secure: true,
      format: "json",
      ...params,
    });
  /**
   * No description
   *
   * @tags Server
   * @name PostServers
   * @request POST:/servers
   * @secure
   */
  postServers = (data: ServerRequest, params: RequestParams = {}) =>
    this.http.request<PostServersData, PostServersError>({
      path: `/servers`,
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
   * @tags Server
   * @name GetServersId
   * @request GET:/servers/{id}
   * @secure
   */
  getServersId = (id: number, params: RequestParams = {}) =>
    this.http.request<GetServersIdData, GetServersIdError>({
      path: `/servers/${id}`,
      method: "GET",
      secure: true,
      format: "json",
      ...params,
    });
  /**
   * No description
   *
   * @tags Server
   * @name PutServersId
   * @request PUT:/servers/{id}
   * @secure
   */
  putServersId = (
    id: number,
    data: ServerRequest,
    params: RequestParams = {},
  ) =>
    this.http.request<PutServersIdData, PutServersIdError>({
      path: `/servers/${id}`,
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
   * @tags Server
   * @name DeleteServersId
   * @request DELETE:/servers/{id}
   * @secure
   */
  deleteServersId = (id: number, params: RequestParams = {}) =>
    this.http.request<DeleteServersIdData, DeleteServersIdError>({
      path: `/servers/${id}`,
      method: "DELETE",
      secure: true,
      format: "json",
      ...params,
    });
}
