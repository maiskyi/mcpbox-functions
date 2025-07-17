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
  AppsCheckTokenData,
  AppsCheckTokenPayload,
  AppsDeleteAuthorizationData,
  AppsDeleteAuthorizationPayload,
  AppsDeleteTokenData,
  AppsDeleteTokenPayload,
  AppsResetTokenData,
  AppsResetTokenPayload,
  AppsScopeTokenData,
  AppsScopeTokenPayload,
  BasicError,
  OauthAuthorizationsDeleteGrantData,
  OauthAuthorizationsGetGrantData,
  OauthAuthorizationsListGrantsData,
  OauthAuthorizationsListGrantsParams,
  ValidationError,
} from "./data-contracts";
import { ContentType, HttpClient, RequestParams } from "./http-client";

export class Applications<SecurityDataType = unknown> {
  http: HttpClient<SecurityDataType>;

  constructor(http: HttpClient<SecurityDataType>) {
    this.http = http;
  }

  /**
   * @description > [!WARNING] > **Closing down notice:** GitHub Enterprise Server will discontinue the [OAuth Authorizations API](https://docs.github.com/enterprise-server@3.17/rest/oauth-authorizations/oauth-authorizations/), which is used by integrations to create personal access tokens and OAuth tokens, and you must now create these tokens using our [web application flow](https://docs.github.com/enterprise-server@3.17/developers/apps/authorizing-oauth-apps#web-application-flow). The [OAuth Authorizations API](https://docs.github.com/enterprise-server@3.17/rest/oauth-authorizations/oauth-authorizations) will be removed on November 13, 2020. For more information, including scheduled brownouts, see the [blog post](https://developer.github.com/changes/2020-02-14-deprecating-oauth-auth-endpoint/). You can use this API to list the set of OAuth applications that have been granted access to your account. Unlike the [list your authorizations](https://docs.github.com/enterprise-server@3.17/rest/oauth-authorizations/oauth-authorizations#list-your-authorizations) API, this API does not manage individual tokens. This API will return one entry for each OAuth application that has been granted access to your account, regardless of the number of tokens an application has generated for your user. The list of OAuth applications returned matches what is shown on [the application authorizations settings screen within GitHub](https://github.com/settings/applications#authorized). The `scopes` returned are the union of scopes authorized for the application. For example, if an application has one token with `repo` scope and another token with `user` scope, the grant will return `["repo", "user"]`.
   *
   * @tags oauth-authorizations
   * @name OauthAuthorizationsListGrants
   * @summary List your grants
   * @request GET:/applications/grants
   * @deprecated
   */
  oauthAuthorizationsListGrants = (
    query: OauthAuthorizationsListGrantsParams,
    params: RequestParams = {},
  ) =>
    this.http.request<OauthAuthorizationsListGrantsData, BasicError>({
      path: `/applications/grants`,
      method: "GET",
      query: query,
      format: "json",
      ...params,
    });
  /**
   * @description > [!WARNING] > **Closing down notice:** GitHub Enterprise Server will discontinue the [OAuth Authorizations API](https://docs.github.com/enterprise-server@3.17/rest/oauth-authorizations/oauth-authorizations), which is used by integrations to create personal access tokens and OAuth tokens, and you must now create these tokens using our [web application flow](https://docs.github.com/enterprise-server@3.17/apps/building-oauth-apps/authorizing-oauth-apps/#web-application-flow). The [OAuth Authorizations API](https://docs.github.com/enterprise-server@3.17/rest/oauth-authorizations/oauth-authorizations) will be removed on November 13, 2020. For more information, including scheduled brownouts, see the [blog post](https://developer.github.com/changes/2020-02-14-deprecating-oauth-auth-endpoint/).
   *
   * @tags oauth-authorizations
   * @name OauthAuthorizationsGetGrant
   * @summary Get a single grant
   * @request GET:/applications/grants/{grant_id}
   * @deprecated
   */
  oauthAuthorizationsGetGrant = (grantId: number, params: RequestParams = {}) =>
    this.http.request<OauthAuthorizationsGetGrantData, BasicError>({
      path: `/applications/grants/${grantId}`,
      method: "GET",
      format: "json",
      ...params,
    });
  /**
   * @description > [!WARNING] > **Closing down notice:** GitHub Enterprise Server will discontinue the [OAuth Authorizations API](https://docs.github.com/enterprise-server@3.17/rest/oauth-authorizations/oauth-authorizations/), which is used by integrations to create personal access tokens and OAuth tokens, and you must now create these tokens using our [web application flow](https://docs.github.com/enterprise-server@3.17/developers/apps/authorizing-oauth-apps#web-application-flow). The [OAuth Authorizations API](https://docs.github.com/enterprise-server@3.17/rest/oauth-authorizations/oauth-authorizations/) will be removed on November 13, 2020. For more information, including scheduled brownouts, see the [blog post](https://developer.github.com/changes/2020-02-14-deprecating-oauth-auth-endpoint/). Deleting an OAuth application's grant will also delete all OAuth tokens associated with the application for your user. Once deleted, the application has no access to your account and is no longer listed on [the application authorizations settings screen within GitHub](https://github.com/settings/applications#authorized).
   *
   * @tags oauth-authorizations
   * @name OauthAuthorizationsDeleteGrant
   * @summary Delete a grant
   * @request DELETE:/applications/grants/{grant_id}
   * @deprecated
   */
  oauthAuthorizationsDeleteGrant = (
    grantId: number,
    params: RequestParams = {},
  ) =>
    this.http.request<OauthAuthorizationsDeleteGrantData, BasicError>({
      path: `/applications/grants/${grantId}`,
      method: "DELETE",
      ...params,
    });
  /**
   * @description OAuth and GitHub application owners can revoke a grant for their application and a specific user. You must provide a valid OAuth `access_token` as an input parameter and the grant for the token's owner will be deleted. Deleting an application's grant will also delete all OAuth tokens associated with the application for the user. Once deleted, the application will have no access to the user's account and will no longer be listed on [the application authorizations settings screen within GitHub](https://github.com/settings/applications#authorized).
   *
   * @tags apps
   * @name AppsDeleteAuthorization
   * @summary Delete an app authorization
   * @request DELETE:/applications/{client_id}/grant
   */
  appsDeleteAuthorization = (
    clientId: string,
    data: AppsDeleteAuthorizationPayload,
    params: RequestParams = {},
  ) =>
    this.http.request<AppsDeleteAuthorizationData, ValidationError>({
      path: `/applications/${clientId}/grant`,
      method: "DELETE",
      body: data,
      type: ContentType.Json,
      ...params,
    });
  /**
   * @description OAuth applications and GitHub applications with OAuth authorizations can use this API method for checking OAuth token validity without exceeding the normal rate limits for failed login attempts. Authentication works differently with this particular endpoint. Invalid tokens will return `404 NOT FOUND`.
   *
   * @tags apps
   * @name AppsCheckToken
   * @summary Check a token
   * @request POST:/applications/{client_id}/token
   */
  appsCheckToken = (
    clientId: string,
    data: AppsCheckTokenPayload,
    params: RequestParams = {},
  ) =>
    this.http.request<AppsCheckTokenData, BasicError | ValidationError>({
      path: `/applications/${clientId}/token`,
      method: "POST",
      body: data,
      type: ContentType.Json,
      format: "json",
      ...params,
    });
  /**
   * @description OAuth applications and GitHub applications with OAuth authorizations can use this API method to reset a valid OAuth token without end-user involvement. Applications must save the "token" property in the response because changes take effect immediately. Invalid tokens will return `404 NOT FOUND`.
   *
   * @tags apps
   * @name AppsResetToken
   * @summary Reset a token
   * @request PATCH:/applications/{client_id}/token
   */
  appsResetToken = (
    clientId: string,
    data: AppsResetTokenPayload,
    params: RequestParams = {},
  ) =>
    this.http.request<AppsResetTokenData, ValidationError>({
      path: `/applications/${clientId}/token`,
      method: "PATCH",
      body: data,
      type: ContentType.Json,
      format: "json",
      ...params,
    });
  /**
   * @description OAuth  or GitHub application owners can revoke a single token for an OAuth application or a GitHub application with an OAuth authorization.
   *
   * @tags apps
   * @name AppsDeleteToken
   * @summary Delete an app token
   * @request DELETE:/applications/{client_id}/token
   */
  appsDeleteToken = (
    clientId: string,
    data: AppsDeleteTokenPayload,
    params: RequestParams = {},
  ) =>
    this.http.request<AppsDeleteTokenData, ValidationError>({
      path: `/applications/${clientId}/token`,
      method: "DELETE",
      body: data,
      type: ContentType.Json,
      ...params,
    });
  /**
   * @description Use a non-scoped user access token to create a repository-scoped and/or permission-scoped user access token. You can specify which repositories the token can access and which permissions are granted to the token. Invalid tokens will return `404 NOT FOUND`.
   *
   * @tags apps
   * @name AppsScopeToken
   * @summary Create a scoped access token
   * @request POST:/applications/{client_id}/token/scoped
   */
  appsScopeToken = (
    clientId: string,
    data: AppsScopeTokenPayload,
    params: RequestParams = {},
  ) =>
    this.http.request<AppsScopeTokenData, BasicError | ValidationError>({
      path: `/applications/${clientId}/token/scoped`,
      method: "POST",
      body: data,
      type: ContentType.Json,
      format: "json",
      ...params,
    });
}
