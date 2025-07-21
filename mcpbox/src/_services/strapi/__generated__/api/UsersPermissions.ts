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
  PermissionsListData,
  PermissionsListError,
  RolesCreateData,
  RolesCreateError,
  RolesDeleteData,
  RolesDeleteError,
  RolesDetailData,
  RolesDetailError,
  RolesListData,
  RolesListError,
  RolesUpdateData,
  RolesUpdateError,
  UsersPermissionsPermissionsTree,
} from "./data-contracts";
import { HttpClient, RequestParams } from "./http-client";

export class UsersPermissions<SecurityDataType = unknown> {
  http: HttpClient<SecurityDataType>;

  constructor(http: HttpClient<SecurityDataType>) {
    this.http = http;
  }

  /**
   * No description
   *
   * @tags Users-Permissions - Users & Roles
   * @name PermissionsList
   * @summary Get default generated permissions
   * @request GET:/users-permissions/permissions
   * @secure
   */
  permissionsList = (params: RequestParams = {}) =>
    this.http.request<PermissionsListData, PermissionsListError>({
      path: `/users-permissions/permissions`,
      method: "GET",
      secure: true,
      format: "json",
      ...params,
    });
  /**
   * No description
   *
   * @tags Users-Permissions - Users & Roles
   * @name RolesList
   * @summary List roles
   * @request GET:/users-permissions/roles
   * @secure
   */
  rolesList = (params: RequestParams = {}) =>
    this.http.request<RolesListData, RolesListError>({
      path: `/users-permissions/roles`,
      method: "GET",
      secure: true,
      format: "json",
      ...params,
    });
  /**
   * No description
   *
   * @tags Users-Permissions - Users & Roles
   * @name RolesCreate
   * @summary Create a role
   * @request POST:/users-permissions/roles
   * @secure
   */
  rolesCreate = (
    data: {
      name?: string;
      description?: string;
      type?: string;
      permissions?: UsersPermissionsPermissionsTree;
    },
    params: RequestParams = {},
  ) =>
    this.http.request<RolesCreateData, RolesCreateError>({
      path: `/users-permissions/roles`,
      method: "POST",
      body: data,
      secure: true,
      format: "json",
      ...params,
    });
  /**
   * No description
   *
   * @tags Users-Permissions - Users & Roles
   * @name RolesDetail
   * @summary Get a role
   * @request GET:/users-permissions/roles/{id}
   * @secure
   */
  rolesDetail = (id: string, params: RequestParams = {}) =>
    this.http.request<RolesDetailData, RolesDetailError>({
      path: `/users-permissions/roles/${id}`,
      method: "GET",
      secure: true,
      format: "json",
      ...params,
    });
  /**
   * No description
   *
   * @tags Users-Permissions - Users & Roles
   * @name RolesUpdate
   * @summary Update a role
   * @request PUT:/users-permissions/roles/{role}
   * @secure
   */
  rolesUpdate = (
    role: string,
    data: {
      name?: string;
      description?: string;
      type?: string;
      permissions?: UsersPermissionsPermissionsTree;
    },
    params: RequestParams = {},
  ) =>
    this.http.request<RolesUpdateData, RolesUpdateError>({
      path: `/users-permissions/roles/${role}`,
      method: "PUT",
      body: data,
      secure: true,
      format: "json",
      ...params,
    });
  /**
   * No description
   *
   * @tags Users-Permissions - Users & Roles
   * @name RolesDelete
   * @summary Delete a role
   * @request DELETE:/users-permissions/roles/{role}
   * @secure
   */
  rolesDelete = (role: string, params: RequestParams = {}) =>
    this.http.request<RolesDeleteData, RolesDeleteError>({
      path: `/users-permissions/roles/${role}`,
      method: "DELETE",
      secure: true,
      format: "json",
      ...params,
    });
}
