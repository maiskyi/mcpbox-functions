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
  OauthAuthorizationsCreateAuthorizationData,
  OauthAuthorizationsCreateAuthorizationPayload,
  OauthAuthorizationsDeleteAuthorizationData,
  OauthAuthorizationsGetAuthorizationData,
  OauthAuthorizationsGetOrCreateAuthorizationForAppAndFingerprintData,
  OauthAuthorizationsGetOrCreateAuthorizationForAppAndFingerprintPayload,
  OauthAuthorizationsGetOrCreateAuthorizationForAppData,
  OauthAuthorizationsGetOrCreateAuthorizationForAppPayload,
  OauthAuthorizationsListAuthorizationsData,
  OauthAuthorizationsListAuthorizationsParams,
  OauthAuthorizationsUpdateAuthorizationData,
  OauthAuthorizationsUpdateAuthorizationPayload,
  ValidationError,
} from "./data-contracts";
import { ContentType, HttpClient, RequestParams } from "./http-client";

export class Authorizations<SecurityDataType = unknown> {
  http: HttpClient<SecurityDataType>;

  constructor(http: HttpClient<SecurityDataType>) {
    this.http = http;
  }

  /**
   * @description > [!WARNING] > **Closing down notice:** GitHub Enterprise Server will discontinue the [OAuth Authorizations API](https://docs.github.com/enterprise-server@3.17/rest/oauth-authorizations/oauth-authorizations), which is used by integrations to create personal access tokens and OAuth tokens, and you must now create these tokens using our [web application flow](https://docs.github.com/enterprise-server@3.17/apps/building-oauth-apps/authorizing-oauth-apps/#web-application-flow). The [OAuth Authorizations API](https://docs.github.com/enterprise-server@3.17/rest/oauth-authorizations/oauth-authorizations) will be removed on November 13, 2020. For more information, including scheduled brownouts, see the [blog post](https://developer.github.com/changes/2020-02-14-deprecating-oauth-auth-endpoint/).
   *
   * @tags oauth-authorizations
   * @name OauthAuthorizationsListAuthorizations
   * @summary List your authorizations
   * @request GET:/authorizations
   * @deprecated
   */
  oauthAuthorizationsListAuthorizations = (
    query: OauthAuthorizationsListAuthorizationsParams,
    params: RequestParams = {},
  ) =>
    this.http.request<OauthAuthorizationsListAuthorizationsData, BasicError>({
      path: `/authorizations`,
      method: "GET",
      query: query,
      format: "json",
      ...params,
    });
  /**
   * @description > [!WARNING] > **Closing down notice:** GitHub Enterprise Server will discontinue the [OAuth Authorizations API](https://docs.github.com/enterprise-server@3.17/rest/oauth-authorizations/oauth-authorizations), which is used by integrations to create personal access tokens and OAuth tokens, and you must now create these tokens using our [web application flow](https://docs.github.com/enterprise-server@3.17/developers/apps/authorizing-oauth-apps#web-application-flow). The [OAuth Authorizations API](https://docs.github.com/enterprise-server@3.17/rest/oauth-authorizations/oauth-authorizations) will be removed on November 13 2020. For more information, including scheduled brownouts, see the [blog post](https://developer.github.com/changes/2020-02-14-deprecating-oauth-auth-endpoint/). > [!WARNING] > Apps must use the [web application flow](https://docs.github.com/enterprise-server@3.17/apps/building-oauth-apps/authorizing-oauth-apps/#web-application-flow) to obtain OAuth tokens that work with GitHub Enterprise Server SAML organizations. OAuth tokens created using the Authorizations API will be unable to access GitHub Enterprise Server SAML organizations. For more information, see the [blog post](https://developer.github.com/changes/2019-11-05-deprecated-passwords-and-authorizations-api). Creates OAuth tokens using [Basic Authentication](https://docs.github.com/enterprise-server@3.17/rest/authentication/authenticating-to-the-rest-api#using-basic-authentication). If you have two-factor authentication setup, Basic Authentication for this endpoint requires that you use a one-time password (OTP) and your username and password instead of tokens. For more information, see "[Working with two-factor authentication](https://docs.github.com/enterprise-server@3.17/rest/overview/other-authentication-methods#working-with-two-factor-authentication)." To create tokens for a particular OAuth application using this endpoint, you must authenticate as the user you want to create an authorization for and provide the app's client ID and secret, found on your OAuth application's settings page. If your OAuth application intends to create multiple tokens for one user, use `fingerprint` to differentiate between them. You can also create tokens on GitHub Enterprise Server from the [personal access tokens settings](https://github.com/settings/tokens) page. Read more about these tokens in [the GitHub Help documentation](https://docs.github.com/enterprise-server@3.17/articles/creating-an-access-token-for-command-line-use). Organizations that enforce SAML SSO require personal access tokens to be allowed. For more information, see "[About identity and access management with SAML single sign-on](https://docs.github.com/enterprise-server@3.17/enterprise-cloud@latest/organizations/managing-saml-single-sign-on-for-your-organization/about-identity-and-access-management-with-saml-single-sign-on)" in the GitHub Enterprise Cloud documentation.
   *
   * @tags oauth-authorizations
   * @name OauthAuthorizationsCreateAuthorization
   * @summary Create a new authorization
   * @request POST:/authorizations
   * @deprecated
   */
  oauthAuthorizationsCreateAuthorization = (
    data?: OauthAuthorizationsCreateAuthorizationPayload,
    params: RequestParams = {},
  ) =>
    this.http.request<
      OauthAuthorizationsCreateAuthorizationData,
      BasicError | ValidationError
    >({
      path: `/authorizations`,
      method: "POST",
      body: data,
      type: ContentType.Json,
      format: "json",
      ...params,
    });
  /**
   * @description > [!WARNING] > **Closing down notice:** GitHub Enterprise Server will discontinue the [OAuth Authorizations API](https://docs.github.com/enterprise-server@3.17/rest/oauth-authorizations/oauth-authorizations/), which is used by integrations to create personal access tokens and OAuth tokens, and you must now create these tokens using our [web application flow](https://docs.github.com/enterprise-server@3.17/developers/apps/authorizing-oauth-apps#web-application-flow). The [OAuth Authorizations API](https://docs.github.com/enterprise-server@3.17/rest/oauth-authorizations/oauth-authorizations) will be removed on November 13, 2020. For more information, including scheduled brownouts, see the [blog post](https://developer.github.com/changes/2020-02-14-deprecating-oauth-auth-endpoint/). > [!WARNING] > Apps must use the [web application flow](https://docs.github.com/enterprise-server@3.17/apps/building-oauth-apps/authorizing-oauth-apps/#web-application-flow) to obtain OAuth tokens that work with GitHub Enterprise Server SAML organizations. OAuth tokens created using the Authorizations API will be unable to access GitHub Enterprise Server SAML organizations. For more information, see the [blog post](https://developer.github.com/changes/2019-11-05-deprecated-passwords-and-authorizations-api). Creates a new authorization for the specified OAuth application, only if an authorization for that application doesn't already exist for the user. The URL includes the 20 character client ID for the OAuth app that is requesting the token. It returns the user's existing authorization for the application if one is present. Otherwise, it creates and returns a new one. If you have two-factor authentication setup, Basic Authentication for this endpoint requires that you use a one-time password (OTP) and your username and password instead of tokens. For more information, see "[Working with two-factor authentication](https://docs.github.com/enterprise-server@3.17/rest/overview/other-authentication-methods#working-with-two-factor-authentication)."
   *
   * @tags oauth-authorizations
   * @name OauthAuthorizationsGetOrCreateAuthorizationForApp
   * @summary Get-or-create an authorization for a specific app
   * @request PUT:/authorizations/clients/{client_id}
   * @deprecated
   */
  oauthAuthorizationsGetOrCreateAuthorizationForApp = (
    clientId: string,
    data: OauthAuthorizationsGetOrCreateAuthorizationForAppPayload,
    params: RequestParams = {},
  ) =>
    this.http.request<
      OauthAuthorizationsGetOrCreateAuthorizationForAppData,
      BasicError | ValidationError
    >({
      path: `/authorizations/clients/${clientId}`,
      method: "PUT",
      body: data,
      type: ContentType.Json,
      format: "json",
      ...params,
    });
  /**
   * @description > [!WARNING] > **Closing down notice:** GitHub Enterprise Server will discontinue the [OAuth Authorizations API](https://docs.github.com/enterprise-server@3.17/rest/oauth-authorizations/oauth-authorizations/), which is used by integrations to create personal access tokens and OAuth tokens, and you must now create these tokens using our [web application flow](https://docs.github.com/enterprise-server@3.17/developers/apps/authorizing-oauth-apps#web-application-flow). The [OAuth Authorizations API](https://docs.github.com/enterprise-server@3.17/rest/oauth-authorizations/oauth-authorizations) will be removed on November 13, 2020. For more information, including scheduled brownouts, see the [blog post](https://developer.github.com/changes/2020-02-14-deprecating-oauth-auth-endpoint/). > [!WARNING] > Apps must use the [web application flow](https://docs.github.com/enterprise-server@3.17/apps/building-oauth-apps/authorizing-oauth-apps/#web-application-flow) to obtain OAuth tokens that work with GitHub Enterprise Server SAML organizations. OAuth tokens created using the Authorizations API will be unable to access GitHub Enterprise Server SAML organizations. For more information, see the [blog post](https://developer.github.com/changes/2019-11-05-deprecated-passwords-and-authorizations-api). This method will create a new authorization for the specified OAuth application, only if an authorization for that application and fingerprint do not already exist for the user. The URL includes the 20 character client ID for the OAuth app that is requesting the token. `fingerprint` is a unique string to distinguish an authorization from others created for the same client ID and user. It returns the user's existing authorization for the application if one is present. Otherwise, it creates and returns a new one. If you have two-factor authentication setup, Basic Authentication for this endpoint requires that you use a one-time password (OTP) and your username and password instead of tokens. For more information, see "[Working with two-factor authentication](https://docs.github.com/enterprise-server@3.17/rest/overview/other-authentication-methods#working-with-two-factor-authentication)."
   *
   * @tags oauth-authorizations
   * @name OauthAuthorizationsGetOrCreateAuthorizationForAppAndFingerprint
   * @summary Get-or-create an authorization for a specific app and fingerprint
   * @request PUT:/authorizations/clients/{client_id}/{fingerprint}
   * @deprecated
   */
  oauthAuthorizationsGetOrCreateAuthorizationForAppAndFingerprint = (
    clientId: string,
    fingerprint: string,
    data: OauthAuthorizationsGetOrCreateAuthorizationForAppAndFingerprintPayload,
    params: RequestParams = {},
  ) =>
    this.http.request<
      OauthAuthorizationsGetOrCreateAuthorizationForAppAndFingerprintData,
      ValidationError
    >({
      path: `/authorizations/clients/${clientId}/${fingerprint}`,
      method: "PUT",
      body: data,
      type: ContentType.Json,
      format: "json",
      ...params,
    });
  /**
   * @description > [!WARNING] > **Closing down notice:** GitHub Enterprise Server will discontinue the [OAuth Authorizations API](https://docs.github.com/enterprise-server@3.17/rest/oauth-authorizations/oauth-authorizations), which is used by integrations to create personal access tokens and OAuth tokens, and you must now create these tokens using our [web application flow](https://docs.github.com/enterprise-server@3.17/apps/building-oauth-apps/authorizing-oauth-apps/#web-application-flow). The [OAuth Authorizations API](https://docs.github.com/enterprise-server@3.17/rest/oauth-authorizations/oauth-authorizations) will be removed on November 13, 2020. For more information, including scheduled brownouts, see the [blog post](https://developer.github.com/changes/2020-02-14-deprecating-oauth-auth-endpoint/).
   *
   * @tags oauth-authorizations
   * @name OauthAuthorizationsGetAuthorization
   * @summary Get a single authorization
   * @request GET:/authorizations/{authorization_id}
   * @deprecated
   */
  oauthAuthorizationsGetAuthorization = (
    authorizationId: number,
    params: RequestParams = {},
  ) =>
    this.http.request<OauthAuthorizationsGetAuthorizationData, BasicError>({
      path: `/authorizations/${authorizationId}`,
      method: "GET",
      format: "json",
      ...params,
    });
  /**
   * @description > [!WARNING] > **Closing down notice:** GitHub Enterprise Server will discontinue the [OAuth Authorizations API](https://docs.github.com/enterprise-server@3.17/rest/oauth-authorizations/oauth-authorizations/), which is used by integrations to create personal access tokens and OAuth tokens, and you must now create these tokens using our [web application flow](https://docs.github.com/enterprise-server@3.17/developers/apps/authorizing-oauth-apps#web-application-flow). The [OAuth Authorizations API](https://docs.github.com/enterprise-server@3.17/rest/oauth-authorizations/oauth-authorizations) will be removed on November 13, 2020. For more information, including scheduled brownouts, see the [blog post](https://developer.github.com/changes/2020-02-14-deprecating-oauth-auth-endpoint/). If you have two-factor authentication setup, Basic Authentication for this endpoint requires that you use a one-time password (OTP) and your username and password instead of tokens. For more information, see "[Working with two-factor authentication](https://docs.github.com/enterprise-server@3.17/rest/overview/other-authentication-methods#working-with-two-factor-authentication)." You can only send one of these scope keys at a time.
   *
   * @tags oauth-authorizations
   * @name OauthAuthorizationsUpdateAuthorization
   * @summary Update an existing authorization
   * @request PATCH:/authorizations/{authorization_id}
   * @deprecated
   */
  oauthAuthorizationsUpdateAuthorization = (
    authorizationId: number,
    data?: OauthAuthorizationsUpdateAuthorizationPayload,
    params: RequestParams = {},
  ) =>
    this.http.request<
      OauthAuthorizationsUpdateAuthorizationData,
      ValidationError
    >({
      path: `/authorizations/${authorizationId}`,
      method: "PATCH",
      body: data,
      type: ContentType.Json,
      format: "json",
      ...params,
    });
  /**
   * @description > [!WARNING] > **Closing down notice:** GitHub Enterprise Server will discontinue the [OAuth Authorizations API](https://docs.github.com/enterprise-server@3.17/rest/oauth-authorizations/oauth-authorizations), which is used by integrations to create personal access tokens and OAuth tokens, and you must now create these tokens using our [web application flow](https://docs.github.com/enterprise-server@3.17/apps/building-oauth-apps/authorizing-oauth-apps/#web-application-flow). The [OAuth Authorizations API](https://docs.github.com/enterprise-server@3.17/rest/oauth-authorizations/oauth-authorizations) will be removed on November 13, 2020. For more information, including scheduled brownouts, see the [blog post](https://developer.github.com/changes/2020-02-14-deprecating-oauth-auth-endpoint/).
   *
   * @tags oauth-authorizations
   * @name OauthAuthorizationsDeleteAuthorization
   * @summary Delete an authorization
   * @request DELETE:/authorizations/{authorization_id}
   * @deprecated
   */
  oauthAuthorizationsDeleteAuthorization = (
    authorizationId: number,
    params: RequestParams = {},
  ) =>
    this.http.request<OauthAuthorizationsDeleteAuthorizationData, BasicError>({
      path: `/authorizations/${authorizationId}`,
      method: "DELETE",
      ...params,
    });
}
