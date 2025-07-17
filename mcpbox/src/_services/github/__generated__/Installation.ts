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
  AppsListReposAccessibleToInstallationData,
  AppsListReposAccessibleToInstallationParams,
  AppsRevokeInstallationAccessTokenData,
  BasicError,
} from "./data-contracts";
import { HttpClient, RequestParams } from "./http-client";

export class Installation<SecurityDataType = unknown> {
  http: HttpClient<SecurityDataType>;

  constructor(http: HttpClient<SecurityDataType>) {
    this.http = http;
  }

  /**
   * @description List repositories that an app installation can access.
   *
   * @tags apps
   * @name AppsListReposAccessibleToInstallation
   * @summary List repositories accessible to the app installation
   * @request GET:/installation/repositories
   */
  appsListReposAccessibleToInstallation = (
    query: AppsListReposAccessibleToInstallationParams,
    params: RequestParams = {},
  ) =>
    this.http.request<AppsListReposAccessibleToInstallationData, BasicError>({
      path: `/installation/repositories`,
      method: "GET",
      query: query,
      format: "json",
      ...params,
    });
  /**
   * @description Revokes the installation token you're using to authenticate as an installation and access this endpoint. Once an installation token is revoked, the token is invalidated and cannot be used. Other endpoints that require the revoked installation token must have a new installation token to work. You can create a new token using the "[Create an installation access token for an app](https://docs.github.com/enterprise-server@3.17/rest/apps/apps#create-an-installation-access-token-for-an-app)" endpoint.
   *
   * @tags apps
   * @name AppsRevokeInstallationAccessToken
   * @summary Revoke an installation access token
   * @request DELETE:/installation/token
   */
  appsRevokeInstallationAccessToken = (params: RequestParams = {}) =>
    this.http.request<AppsRevokeInstallationAccessTokenData, any>({
      path: `/installation/token`,
      method: "DELETE",
      ...params,
    });
}
