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
  EnterpriseAdminCreateGlobalWebhookData,
  EnterpriseAdminCreateGlobalWebhookPayload,
  EnterpriseAdminCreateImpersonationOAuthTokenData,
  EnterpriseAdminCreateImpersonationOAuthTokenPayload,
  EnterpriseAdminCreateOrgData,
  EnterpriseAdminCreateOrgPayload,
  EnterpriseAdminCreatePreReceiveEnvironmentData,
  EnterpriseAdminCreatePreReceiveEnvironmentPayload,
  EnterpriseAdminCreatePreReceiveHookData,
  EnterpriseAdminCreatePreReceiveHookPayload,
  EnterpriseAdminCreateUserData,
  EnterpriseAdminCreateUserPayload,
  EnterpriseAdminDeleteGlobalWebhookData,
  EnterpriseAdminDeleteImpersonationOAuthTokenData,
  EnterpriseAdminDeletePersonalAccessTokenData,
  EnterpriseAdminDeletePreReceiveEnvironmentData,
  EnterpriseAdminDeletePreReceiveEnvironmentError,
  EnterpriseAdminDeletePreReceiveHookData,
  EnterpriseAdminDeletePublicKeyData,
  EnterpriseAdminDeleteUserData,
  EnterpriseAdminGetDownloadStatusForPreReceiveEnvironmentData,
  EnterpriseAdminGetGlobalWebhookData,
  EnterpriseAdminGetPreReceiveEnvironmentData,
  EnterpriseAdminGetPreReceiveHookData,
  EnterpriseAdminListGlobalWebhooksData,
  EnterpriseAdminListGlobalWebhooksParams,
  EnterpriseAdminListPersonalAccessTokensData,
  EnterpriseAdminListPersonalAccessTokensParams,
  EnterpriseAdminListPreReceiveEnvironmentsData,
  EnterpriseAdminListPreReceiveEnvironmentsParams,
  EnterpriseAdminListPreReceiveHooksData,
  EnterpriseAdminListPreReceiveHooksParams,
  EnterpriseAdminListPublicKeysData,
  EnterpriseAdminListPublicKeysParams,
  EnterpriseAdminPingGlobalWebhookData,
  EnterpriseAdminStartPreReceiveEnvironmentDownloadData,
  EnterpriseAdminStartPreReceiveEnvironmentDownloadError,
  EnterpriseAdminSyncLdapMappingForTeamData,
  EnterpriseAdminSyncLdapMappingForUserData,
  EnterpriseAdminUpdateGlobalWebhookData,
  EnterpriseAdminUpdateGlobalWebhookPayload,
  EnterpriseAdminUpdateLdapMappingForTeamData,
  EnterpriseAdminUpdateLdapMappingForTeamPayload,
  EnterpriseAdminUpdateLdapMappingForUserData,
  EnterpriseAdminUpdateLdapMappingForUserPayload,
  EnterpriseAdminUpdateOrgNameData,
  EnterpriseAdminUpdateOrgNamePayload,
  EnterpriseAdminUpdatePreReceiveEnvironmentData,
  EnterpriseAdminUpdatePreReceiveEnvironmentError,
  EnterpriseAdminUpdatePreReceiveEnvironmentPayload,
  EnterpriseAdminUpdatePreReceiveHookData,
  EnterpriseAdminUpdatePreReceiveHookPayload,
  EnterpriseAdminUpdateUsernameForUserData,
  EnterpriseAdminUpdateUsernameForUserPayload,
} from "./data-contracts";
import { ContentType, HttpClient, RequestParams } from "./http-client";

export class Admin<SecurityDataType = unknown> {
  http: HttpClient<SecurityDataType>;

  constructor(http: HttpClient<SecurityDataType>) {
    this.http = http;
  }

  /**
   * No description
   *
   * @tags enterprise-admin
   * @name EnterpriseAdminListGlobalWebhooks
   * @summary List global webhooks
   * @request GET:/admin/hooks
   */
  enterpriseAdminListGlobalWebhooks = (
    query: EnterpriseAdminListGlobalWebhooksParams,
    params: RequestParams = {},
  ) =>
    this.http.request<EnterpriseAdminListGlobalWebhooksData, any>({
      path: `/admin/hooks`,
      method: "GET",
      query: query,
      format: "json",
      ...params,
    });
  /**
   * No description
   *
   * @tags enterprise-admin
   * @name EnterpriseAdminCreateGlobalWebhook
   * @summary Create a global webhook
   * @request POST:/admin/hooks
   */
  enterpriseAdminCreateGlobalWebhook = (
    data: EnterpriseAdminCreateGlobalWebhookPayload,
    params: RequestParams = {},
  ) =>
    this.http.request<EnterpriseAdminCreateGlobalWebhookData, any>({
      path: `/admin/hooks`,
      method: "POST",
      body: data,
      type: ContentType.Json,
      format: "json",
      ...params,
    });
  /**
   * No description
   *
   * @tags enterprise-admin
   * @name EnterpriseAdminGetGlobalWebhook
   * @summary Get a global webhook
   * @request GET:/admin/hooks/{hook_id}
   */
  enterpriseAdminGetGlobalWebhook = (
    hookId: number,
    params: RequestParams = {},
  ) =>
    this.http.request<EnterpriseAdminGetGlobalWebhookData, any>({
      path: `/admin/hooks/${hookId}`,
      method: "GET",
      format: "json",
      ...params,
    });
  /**
   * @description Parameters that are not provided will be overwritten with the default value or removed if no default exists.
   *
   * @tags enterprise-admin
   * @name EnterpriseAdminUpdateGlobalWebhook
   * @summary Update a global webhook
   * @request PATCH:/admin/hooks/{hook_id}
   */
  enterpriseAdminUpdateGlobalWebhook = (
    hookId: number,
    data: EnterpriseAdminUpdateGlobalWebhookPayload,
    params: RequestParams = {},
  ) =>
    this.http.request<EnterpriseAdminUpdateGlobalWebhookData, any>({
      path: `/admin/hooks/${hookId}`,
      method: "PATCH",
      body: data,
      type: ContentType.Json,
      format: "json",
      ...params,
    });
  /**
   * No description
   *
   * @tags enterprise-admin
   * @name EnterpriseAdminDeleteGlobalWebhook
   * @summary Delete a global webhook
   * @request DELETE:/admin/hooks/{hook_id}
   */
  enterpriseAdminDeleteGlobalWebhook = (
    hookId: number,
    params: RequestParams = {},
  ) =>
    this.http.request<EnterpriseAdminDeleteGlobalWebhookData, any>({
      path: `/admin/hooks/${hookId}`,
      method: "DELETE",
      ...params,
    });
  /**
   * @description This will trigger a [ping event](https://docs.github.com/enterprise-server@3.17/webhooks/#ping-event) to be sent to the webhook.
   *
   * @tags enterprise-admin
   * @name EnterpriseAdminPingGlobalWebhook
   * @summary Ping a global webhook
   * @request POST:/admin/hooks/{hook_id}/pings
   */
  enterpriseAdminPingGlobalWebhook = (
    hookId: number,
    params: RequestParams = {},
  ) =>
    this.http.request<EnterpriseAdminPingGlobalWebhookData, any>({
      path: `/admin/hooks/${hookId}/pings`,
      method: "POST",
      ...params,
    });
  /**
   * No description
   *
   * @tags enterprise-admin
   * @name EnterpriseAdminListPublicKeys
   * @summary List public keys
   * @request GET:/admin/keys
   */
  enterpriseAdminListPublicKeys = (
    query: EnterpriseAdminListPublicKeysParams,
    params: RequestParams = {},
  ) =>
    this.http.request<EnterpriseAdminListPublicKeysData, any>({
      path: `/admin/keys`,
      method: "GET",
      query: query,
      format: "json",
      ...params,
    });
  /**
   * No description
   *
   * @tags enterprise-admin
   * @name EnterpriseAdminDeletePublicKey
   * @summary Delete a public key
   * @request DELETE:/admin/keys/{key_ids}
   */
  enterpriseAdminDeletePublicKey = (
    keyIds: string,
    params: RequestParams = {},
  ) =>
    this.http.request<EnterpriseAdminDeletePublicKeyData, any>({
      path: `/admin/keys/${keyIds}`,
      method: "DELETE",
      ...params,
    });
  /**
   * @description Updates the [distinguished name](https://www.ldap.com/ldap-dns-and-rdns) (DN) of the LDAP entry to map to a team. [LDAP synchronization](https://docs.github.com/enterprise-server@3.17/admin/identity-and-access-management/using-ldap-for-enterprise-iam/using-ldap#enabling-ldap-sync) must be enabled to map LDAP entries to a team. Use the [Create a team](https://docs.github.com/enterprise-server@3.17/rest/teams/teams/#create-a-team) endpoint to create a team with LDAP mapping.
   *
   * @tags enterprise-admin
   * @name EnterpriseAdminUpdateLdapMappingForTeam
   * @summary Update LDAP mapping for a team
   * @request PATCH:/admin/ldap/teams/{team_id}/mapping
   */
  enterpriseAdminUpdateLdapMappingForTeam = (
    teamId: number,
    data: EnterpriseAdminUpdateLdapMappingForTeamPayload,
    params: RequestParams = {},
  ) =>
    this.http.request<EnterpriseAdminUpdateLdapMappingForTeamData, any>({
      path: `/admin/ldap/teams/${teamId}/mapping`,
      method: "PATCH",
      body: data,
      type: ContentType.Json,
      format: "json",
      ...params,
    });
  /**
   * @description Note that this API call does not automatically initiate an LDAP sync. Rather, if a `201` is returned, the sync job is queued successfully, and is performed when the instance is ready.
   *
   * @tags enterprise-admin
   * @name EnterpriseAdminSyncLdapMappingForTeam
   * @summary Sync LDAP mapping for a team
   * @request POST:/admin/ldap/teams/{team_id}/sync
   */
  enterpriseAdminSyncLdapMappingForTeam = (
    teamId: number,
    params: RequestParams = {},
  ) =>
    this.http.request<EnterpriseAdminSyncLdapMappingForTeamData, any>({
      path: `/admin/ldap/teams/${teamId}/sync`,
      method: "POST",
      format: "json",
      ...params,
    });
  /**
   * No description
   *
   * @tags enterprise-admin
   * @name EnterpriseAdminUpdateLdapMappingForUser
   * @summary Update LDAP mapping for a user
   * @request PATCH:/admin/ldap/users/{username}/mapping
   */
  enterpriseAdminUpdateLdapMappingForUser = (
    username: string,
    data: EnterpriseAdminUpdateLdapMappingForUserPayload,
    params: RequestParams = {},
  ) =>
    this.http.request<EnterpriseAdminUpdateLdapMappingForUserData, any>({
      path: `/admin/ldap/users/${username}/mapping`,
      method: "PATCH",
      body: data,
      type: ContentType.Json,
      format: "json",
      ...params,
    });
  /**
   * @description Note that this API call does not automatically initiate an LDAP sync. Rather, if a `201` is returned, the sync job is queued successfully, and is performed when the instance is ready.
   *
   * @tags enterprise-admin
   * @name EnterpriseAdminSyncLdapMappingForUser
   * @summary Sync LDAP mapping for a user
   * @request POST:/admin/ldap/users/{username}/sync
   */
  enterpriseAdminSyncLdapMappingForUser = (
    username: string,
    params: RequestParams = {},
  ) =>
    this.http.request<EnterpriseAdminSyncLdapMappingForUserData, any>({
      path: `/admin/ldap/users/${username}/sync`,
      method: "POST",
      format: "json",
      ...params,
    });
  /**
   * No description
   *
   * @tags enterprise-admin
   * @name EnterpriseAdminCreateOrg
   * @summary Create an organization
   * @request POST:/admin/organizations
   */
  enterpriseAdminCreateOrg = (
    data: EnterpriseAdminCreateOrgPayload,
    params: RequestParams = {},
  ) =>
    this.http.request<EnterpriseAdminCreateOrgData, any>({
      path: `/admin/organizations`,
      method: "POST",
      body: data,
      type: ContentType.Json,
      format: "json",
      ...params,
    });
  /**
   * No description
   *
   * @tags enterprise-admin
   * @name EnterpriseAdminUpdateOrgName
   * @summary Update an organization name
   * @request PATCH:/admin/organizations/{org}
   */
  enterpriseAdminUpdateOrgName = (
    org: string,
    data: EnterpriseAdminUpdateOrgNamePayload,
    params: RequestParams = {},
  ) =>
    this.http.request<EnterpriseAdminUpdateOrgNameData, any>({
      path: `/admin/organizations/${org}`,
      method: "PATCH",
      body: data,
      type: ContentType.Json,
      format: "json",
      ...params,
    });
  /**
   * No description
   *
   * @tags enterprise-admin
   * @name EnterpriseAdminListPreReceiveEnvironments
   * @summary List pre-receive environments
   * @request GET:/admin/pre-receive-environments
   */
  enterpriseAdminListPreReceiveEnvironments = (
    query: EnterpriseAdminListPreReceiveEnvironmentsParams,
    params: RequestParams = {},
  ) =>
    this.http.request<EnterpriseAdminListPreReceiveEnvironmentsData, any>({
      path: `/admin/pre-receive-environments`,
      method: "GET",
      query: query,
      format: "json",
      ...params,
    });
  /**
   * No description
   *
   * @tags enterprise-admin
   * @name EnterpriseAdminCreatePreReceiveEnvironment
   * @summary Create a pre-receive environment
   * @request POST:/admin/pre-receive-environments
   */
  enterpriseAdminCreatePreReceiveEnvironment = (
    data: EnterpriseAdminCreatePreReceiveEnvironmentPayload,
    params: RequestParams = {},
  ) =>
    this.http.request<EnterpriseAdminCreatePreReceiveEnvironmentData, any>({
      path: `/admin/pre-receive-environments`,
      method: "POST",
      body: data,
      type: ContentType.Json,
      format: "json",
      ...params,
    });
  /**
   * No description
   *
   * @tags enterprise-admin
   * @name EnterpriseAdminGetPreReceiveEnvironment
   * @summary Get a pre-receive environment
   * @request GET:/admin/pre-receive-environments/{pre_receive_environment_id}
   */
  enterpriseAdminGetPreReceiveEnvironment = (
    preReceiveEnvironmentId: number,
    params: RequestParams = {},
  ) =>
    this.http.request<EnterpriseAdminGetPreReceiveEnvironmentData, any>({
      path: `/admin/pre-receive-environments/${preReceiveEnvironmentId}`,
      method: "GET",
      format: "json",
      ...params,
    });
  /**
   * @description You cannot modify the default environment. If you attempt to modify the default environment, you will receive a `422 Unprocessable Entity` response.
   *
   * @tags enterprise-admin
   * @name EnterpriseAdminUpdatePreReceiveEnvironment
   * @summary Update a pre-receive environment
   * @request PATCH:/admin/pre-receive-environments/{pre_receive_environment_id}
   */
  enterpriseAdminUpdatePreReceiveEnvironment = (
    preReceiveEnvironmentId: number,
    data?: EnterpriseAdminUpdatePreReceiveEnvironmentPayload,
    params: RequestParams = {},
  ) =>
    this.http.request<
      EnterpriseAdminUpdatePreReceiveEnvironmentData,
      EnterpriseAdminUpdatePreReceiveEnvironmentError
    >({
      path: `/admin/pre-receive-environments/${preReceiveEnvironmentId}`,
      method: "PATCH",
      body: data,
      type: ContentType.Json,
      format: "json",
      ...params,
    });
  /**
   * @description If you attempt to delete an environment that cannot be deleted, you will receive a `422 Unprocessable Entity` response. The possible error messages are: *   _Cannot modify or delete the default environment_ *   _Cannot delete environment that has hooks_ *   _Cannot delete environment when download is in progress_
   *
   * @tags enterprise-admin
   * @name EnterpriseAdminDeletePreReceiveEnvironment
   * @summary Delete a pre-receive environment
   * @request DELETE:/admin/pre-receive-environments/{pre_receive_environment_id}
   */
  enterpriseAdminDeletePreReceiveEnvironment = (
    preReceiveEnvironmentId: number,
    params: RequestParams = {},
  ) =>
    this.http.request<
      EnterpriseAdminDeletePreReceiveEnvironmentData,
      EnterpriseAdminDeletePreReceiveEnvironmentError
    >({
      path: `/admin/pre-receive-environments/${preReceiveEnvironmentId}`,
      method: "DELETE",
      ...params,
    });
  /**
   * @description Triggers a new download of the environment tarball from the environment's `image_url`. When the download is finished, the newly downloaded tarball will overwrite the existing environment. If a download cannot be triggered, you will receive a `422 Unprocessable Entity` response. The possible error messages are: * _Cannot modify or delete the default environment_ * _Can not start a new download when a download is in progress_
   *
   * @tags enterprise-admin
   * @name EnterpriseAdminStartPreReceiveEnvironmentDownload
   * @summary Start a pre-receive environment download
   * @request POST:/admin/pre-receive-environments/{pre_receive_environment_id}/downloads
   */
  enterpriseAdminStartPreReceiveEnvironmentDownload = (
    preReceiveEnvironmentId: number,
    params: RequestParams = {},
  ) =>
    this.http.request<
      EnterpriseAdminStartPreReceiveEnvironmentDownloadData,
      EnterpriseAdminStartPreReceiveEnvironmentDownloadError
    >({
      path: `/admin/pre-receive-environments/${preReceiveEnvironmentId}/downloads`,
      method: "POST",
      format: "json",
      ...params,
    });
  /**
   * @description In addition to seeing the download status at the "[Get a pre-receive environment](#get-a-pre-receive-environment)" endpoint, there is also this separate endpoint for just the download status.
   *
   * @tags enterprise-admin
   * @name EnterpriseAdminGetDownloadStatusForPreReceiveEnvironment
   * @summary Get the download status for a pre-receive environment
   * @request GET:/admin/pre-receive-environments/{pre_receive_environment_id}/downloads/latest
   */
  enterpriseAdminGetDownloadStatusForPreReceiveEnvironment = (
    preReceiveEnvironmentId: number,
    params: RequestParams = {},
  ) =>
    this.http.request<
      EnterpriseAdminGetDownloadStatusForPreReceiveEnvironmentData,
      any
    >({
      path: `/admin/pre-receive-environments/${preReceiveEnvironmentId}/downloads/latest`,
      method: "GET",
      format: "json",
      ...params,
    });
  /**
   * No description
   *
   * @tags enterprise-admin
   * @name EnterpriseAdminListPreReceiveHooks
   * @summary List pre-receive hooks
   * @request GET:/admin/pre-receive-hooks
   */
  enterpriseAdminListPreReceiveHooks = (
    query: EnterpriseAdminListPreReceiveHooksParams,
    params: RequestParams = {},
  ) =>
    this.http.request<EnterpriseAdminListPreReceiveHooksData, any>({
      path: `/admin/pre-receive-hooks`,
      method: "GET",
      query: query,
      format: "json",
      ...params,
    });
  /**
   * No description
   *
   * @tags enterprise-admin
   * @name EnterpriseAdminCreatePreReceiveHook
   * @summary Create a pre-receive hook
   * @request POST:/admin/pre-receive-hooks
   */
  enterpriseAdminCreatePreReceiveHook = (
    data: EnterpriseAdminCreatePreReceiveHookPayload,
    params: RequestParams = {},
  ) =>
    this.http.request<EnterpriseAdminCreatePreReceiveHookData, any>({
      path: `/admin/pre-receive-hooks`,
      method: "POST",
      body: data,
      type: ContentType.Json,
      format: "json",
      ...params,
    });
  /**
   * No description
   *
   * @tags enterprise-admin
   * @name EnterpriseAdminGetPreReceiveHook
   * @summary Get a pre-receive hook
   * @request GET:/admin/pre-receive-hooks/{pre_receive_hook_id}
   */
  enterpriseAdminGetPreReceiveHook = (
    preReceiveHookId: number,
    params: RequestParams = {},
  ) =>
    this.http.request<EnterpriseAdminGetPreReceiveHookData, any>({
      path: `/admin/pre-receive-hooks/${preReceiveHookId}`,
      method: "GET",
      format: "json",
      ...params,
    });
  /**
   * No description
   *
   * @tags enterprise-admin
   * @name EnterpriseAdminUpdatePreReceiveHook
   * @summary Update a pre-receive hook
   * @request PATCH:/admin/pre-receive-hooks/{pre_receive_hook_id}
   */
  enterpriseAdminUpdatePreReceiveHook = (
    preReceiveHookId: number,
    data?: EnterpriseAdminUpdatePreReceiveHookPayload,
    params: RequestParams = {},
  ) =>
    this.http.request<EnterpriseAdminUpdatePreReceiveHookData, any>({
      path: `/admin/pre-receive-hooks/${preReceiveHookId}`,
      method: "PATCH",
      body: data,
      type: ContentType.Json,
      format: "json",
      ...params,
    });
  /**
   * No description
   *
   * @tags enterprise-admin
   * @name EnterpriseAdminDeletePreReceiveHook
   * @summary Delete a pre-receive hook
   * @request DELETE:/admin/pre-receive-hooks/{pre_receive_hook_id}
   */
  enterpriseAdminDeletePreReceiveHook = (
    preReceiveHookId: number,
    params: RequestParams = {},
  ) =>
    this.http.request<EnterpriseAdminDeletePreReceiveHookData, any>({
      path: `/admin/pre-receive-hooks/${preReceiveHookId}`,
      method: "DELETE",
      ...params,
    });
  /**
   * @description Lists personal access tokens for all users, including admin users.
   *
   * @tags enterprise-admin
   * @name EnterpriseAdminListPersonalAccessTokens
   * @summary List personal access tokens
   * @request GET:/admin/tokens
   */
  enterpriseAdminListPersonalAccessTokens = (
    query: EnterpriseAdminListPersonalAccessTokensParams,
    params: RequestParams = {},
  ) =>
    this.http.request<EnterpriseAdminListPersonalAccessTokensData, any>({
      path: `/admin/tokens`,
      method: "GET",
      query: query,
      format: "json",
      ...params,
    });
  /**
   * @description Deletes a personal access token. Returns a `403 - Forbidden` status when a personal access token is in use. For example, if you access this endpoint with the same personal access token that you are trying to delete, you will receive this error.
   *
   * @tags enterprise-admin
   * @name EnterpriseAdminDeletePersonalAccessToken
   * @summary Delete a personal access token
   * @request DELETE:/admin/tokens/{token_id}
   */
  enterpriseAdminDeletePersonalAccessToken = (
    tokenId: number,
    params: RequestParams = {},
  ) =>
    this.http.request<EnterpriseAdminDeletePersonalAccessTokenData, any>({
      path: `/admin/tokens/${tokenId}`,
      method: "DELETE",
      ...params,
    });
  /**
   * @description If an external authentication mechanism is used, the login name should match the login name in the external system. If you are using LDAP authentication, you should also [update the LDAP mapping](https://docs.github.com/enterprise-server@3.17/rest/enterprise-admin/ldap#update-ldap-mapping-for-a-user) for the user. The login name will be normalized to only contain alphanumeric characters or single hyphens. For example, if you send `"octo_cat"` as the login, a user named `"octo-cat"` will be created. If the login name or email address is already associated with an account, the server will return a `422` response.
   *
   * @tags enterprise-admin
   * @name EnterpriseAdminCreateUser
   * @summary Create a user
   * @request POST:/admin/users
   */
  enterpriseAdminCreateUser = (
    data: EnterpriseAdminCreateUserPayload,
    params: RequestParams = {},
  ) =>
    this.http.request<EnterpriseAdminCreateUserData, any>({
      path: `/admin/users`,
      method: "POST",
      body: data,
      type: ContentType.Json,
      format: "json",
      ...params,
    });
  /**
   * No description
   *
   * @tags enterprise-admin
   * @name EnterpriseAdminUpdateUsernameForUser
   * @summary Update the username for a user
   * @request PATCH:/admin/users/{username}
   */
  enterpriseAdminUpdateUsernameForUser = (
    username: string,
    data: EnterpriseAdminUpdateUsernameForUserPayload,
    params: RequestParams = {},
  ) =>
    this.http.request<EnterpriseAdminUpdateUsernameForUserData, any>({
      path: `/admin/users/${username}`,
      method: "PATCH",
      body: data,
      type: ContentType.Json,
      format: "json",
      ...params,
    });
  /**
   * @description Deleting a user will delete all their repositories, gists, applications, and personal settings. [Suspending a user](https://docs.github.com/enterprise-server@3.17/rest/enterprise-admin/users#suspend-a-user) is often a better option. You can delete any user account except your own.
   *
   * @tags enterprise-admin
   * @name EnterpriseAdminDeleteUser
   * @summary Delete a user
   * @request DELETE:/admin/users/{username}
   */
  enterpriseAdminDeleteUser = (username: string, params: RequestParams = {}) =>
    this.http.request<EnterpriseAdminDeleteUserData, any>({
      path: `/admin/users/${username}`,
      method: "DELETE",
      ...params,
    });
  /**
   * No description
   *
   * @tags enterprise-admin
   * @name EnterpriseAdminCreateImpersonationOAuthToken
   * @summary Create an impersonation OAuth token
   * @request POST:/admin/users/{username}/authorizations
   */
  enterpriseAdminCreateImpersonationOAuthToken = (
    username: string,
    data: EnterpriseAdminCreateImpersonationOAuthTokenPayload,
    params: RequestParams = {},
  ) =>
    this.http.request<EnterpriseAdminCreateImpersonationOAuthTokenData, any>({
      path: `/admin/users/${username}/authorizations`,
      method: "POST",
      body: data,
      type: ContentType.Json,
      format: "json",
      ...params,
    });
  /**
   * No description
   *
   * @tags enterprise-admin
   * @name EnterpriseAdminDeleteImpersonationOAuthToken
   * @summary Delete an impersonation OAuth token
   * @request DELETE:/admin/users/{username}/authorizations
   */
  enterpriseAdminDeleteImpersonationOAuthToken = (
    username: string,
    params: RequestParams = {},
  ) =>
    this.http.request<EnterpriseAdminDeleteImpersonationOAuthTokenData, any>({
      path: `/admin/users/${username}/authorizations`,
      method: "DELETE",
      ...params,
    });
}
