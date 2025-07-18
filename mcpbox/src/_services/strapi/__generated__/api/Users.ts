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
  CountListData,
  CountListError,
  GetUsersData,
  GetUsersError,
  UsersCreateData,
  UsersCreateError,
  UsersCreatePayload,
  UsersDeleteData,
  UsersDeleteError,
  UsersDetailData,
  UsersDetailError,
  UsersListData,
  UsersListError,
  UsersUpdateData,
  UsersUpdateError,
  UsersUpdatePayload,
} from "./data-contracts";
import { ContentType, HttpClient, RequestParams } from "./http-client";

export class Users<SecurityDataType = unknown> {
  http: HttpClient<SecurityDataType>;

  constructor(http: HttpClient<SecurityDataType>) {
    this.http = http;
  }

  /**
   * No description
   *
   * @tags Users-Permissions - Users & Roles
   * @name UsersList
   * @summary Get list of users
   * @request GET:/users
   * @secure
   */
  usersList = (params: RequestParams = {}) =>
    this.http.request<UsersListData, UsersListError>({
      path: `/users`,
      method: "GET",
      secure: true,
      format: "json",
      ...params,
    });
  /**
   * No description
   *
   * @tags Users-Permissions - Users & Roles
   * @name UsersCreate
   * @summary Create a user
   * @request POST:/users
   * @secure
   */
  usersCreate = (data: UsersCreatePayload, params: RequestParams = {}) =>
    this.http.request<UsersCreateData, UsersCreateError>({
      path: `/users`,
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
   * @tags Users-Permissions - Users & Roles
   * @name UsersDetail
   * @summary Get a user
   * @request GET:/users/{id}
   * @secure
   */
  usersDetail = (id: string, params: RequestParams = {}) =>
    this.http.request<UsersDetailData, UsersDetailError>({
      path: `/users/${id}`,
      method: "GET",
      secure: true,
      format: "json",
      ...params,
    });
  /**
   * No description
   *
   * @tags Users-Permissions - Users & Roles
   * @name UsersUpdate
   * @summary Update a user
   * @request PUT:/users/{id}
   * @secure
   */
  usersUpdate = (
    id: string,
    data: UsersUpdatePayload,
    params: RequestParams = {},
  ) =>
    this.http.request<UsersUpdateData, UsersUpdateError>({
      path: `/users/${id}`,
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
   * @tags Users-Permissions - Users & Roles
   * @name UsersDelete
   * @summary Delete a user
   * @request DELETE:/users/{id}
   * @secure
   */
  usersDelete = (id: string, params: RequestParams = {}) =>
    this.http.request<UsersDeleteData, UsersDeleteError>({
      path: `/users/${id}`,
      method: "DELETE",
      secure: true,
      format: "json",
      ...params,
    });
  /**
   * No description
   *
   * @tags Users-Permissions - Users & Roles
   * @name GetUsers
   * @summary Get authenticated user info
   * @request GET:/users/me
   * @secure
   */
  getUsers = (params: RequestParams = {}) =>
    this.http.request<GetUsersData, GetUsersError>({
      path: `/users/me`,
      method: "GET",
      secure: true,
      format: "json",
      ...params,
    });
  /**
   * No description
   *
   * @tags Users-Permissions - Users & Roles
   * @name CountList
   * @summary Get user count
   * @request GET:/users/count
   * @secure
   */
  countList = (params: RequestParams = {}) =>
    this.http.request<CountListData, CountListError>({
      path: `/users/count`,
      method: "GET",
      secure: true,
      format: "json",
      ...params,
    });
}
