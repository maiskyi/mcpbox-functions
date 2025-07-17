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
  ActivityCheckRepoIsStarredByAuthenticatedUserData,
  ActivityCheckRepoIsStarredByAuthenticatedUserError,
  ActivityListReposStarredByAuthenticatedUserData,
  ActivityListReposStarredByAuthenticatedUserParams,
  ActivityListWatchedReposForAuthenticatedUserData,
  ActivityListWatchedReposForAuthenticatedUserParams,
  ActivityStarRepoForAuthenticatedUserData,
  ActivityUnstarRepoForAuthenticatedUserData,
  AppsAddRepoToInstallationForAuthenticatedUserData,
  AppsListInstallationReposForAuthenticatedUserData,
  AppsListInstallationReposForAuthenticatedUserParams,
  AppsListInstallationsForAuthenticatedUserData,
  AppsListInstallationsForAuthenticatedUserParams,
  AppsRemoveRepoFromInstallationForAuthenticatedUserData,
  BasicError,
  IssuesListForAuthenticatedUserData,
  IssuesListForAuthenticatedUserParams,
  MigrationsListForAuthenticatedUserData,
  MigrationsListForAuthenticatedUserParams,
  MigrationsListReposForAuthenticatedUserData,
  MigrationsListReposForAuthenticatedUserParams,
  MigrationsStartForAuthenticatedUserData,
  MigrationsStartForAuthenticatedUserPayload,
  OrgsGetMembershipForAuthenticatedUserData,
  OrgsListForAuthenticatedUserData,
  OrgsListForAuthenticatedUserParams,
  OrgsListMembershipsForAuthenticatedUserData,
  OrgsListMembershipsForAuthenticatedUserParams,
  OrgsUpdateMembershipForAuthenticatedUserData,
  OrgsUpdateMembershipForAuthenticatedUserPayload,
  PackagesDeletePackageForAuthenticatedUserData,
  PackagesDeletePackageVersionForAuthenticatedUserData,
  PackagesGetAllPackageVersionsForPackageOwnedByAuthenticatedUserData,
  PackagesGetAllPackageVersionsForPackageOwnedByAuthenticatedUserParams,
  PackagesGetPackageForAuthenticatedUserData,
  PackagesGetPackageVersionForAuthenticatedUserData,
  PackagesListDockerMigrationConflictingPackagesForAuthenticatedUserData,
  PackagesListPackagesForAuthenticatedUserData,
  PackagesListPackagesForAuthenticatedUserParams,
  PackagesRestorePackageForAuthenticatedUserData,
  PackagesRestorePackageForAuthenticatedUserParams,
  PackagesRestorePackageVersionForAuthenticatedUserData,
  ProjectsCreateForAuthenticatedUserData,
  ProjectsCreateForAuthenticatedUserPayload,
  ReposAcceptInvitationForAuthenticatedUserData,
  ReposCreateForAuthenticatedUserData,
  ReposCreateForAuthenticatedUserPayload,
  ReposDeclineInvitationForAuthenticatedUserData,
  ReposListForAuthenticatedUserData,
  ReposListForAuthenticatedUserParams,
  ReposListInvitationsForAuthenticatedUserData,
  ReposListInvitationsForAuthenticatedUserParams,
  TeamsListForAuthenticatedUserData,
  TeamsListForAuthenticatedUserParams,
  UsersAddEmailForAuthenticatedUserData,
  UsersAddEmailForAuthenticatedUserPayload,
  UsersAddSocialAccountForAuthenticatedUserData,
  UsersAddSocialAccountForAuthenticatedUserPayload,
  UsersCheckPersonIsFollowedByAuthenticatedData,
  UsersCheckPersonIsFollowedByAuthenticatedError,
  UsersCreateGpgKeyForAuthenticatedUserData,
  UsersCreateGpgKeyForAuthenticatedUserPayload,
  UsersCreatePublicSshKeyForAuthenticatedUserData,
  UsersCreatePublicSshKeyForAuthenticatedUserPayload,
  UsersCreateSshSigningKeyForAuthenticatedUserData,
  UsersCreateSshSigningKeyForAuthenticatedUserPayload,
  UsersDeleteEmailForAuthenticatedUserData,
  UsersDeleteEmailForAuthenticatedUserPayload,
  UsersDeleteGpgKeyForAuthenticatedUserData,
  UsersDeletePublicSshKeyForAuthenticatedUserData,
  UsersDeleteSocialAccountForAuthenticatedUserData,
  UsersDeleteSocialAccountForAuthenticatedUserPayload,
  UsersDeleteSshSigningKeyForAuthenticatedUserData,
  UsersFollowData,
  UsersGetAuthenticatedData,
  UsersGetByIdData,
  UsersGetGpgKeyForAuthenticatedUserData,
  UsersGetPublicSshKeyForAuthenticatedUserData,
  UsersGetSshSigningKeyForAuthenticatedUserData,
  UsersListEmailsForAuthenticatedUserData,
  UsersListEmailsForAuthenticatedUserParams,
  UsersListFollowedByAuthenticatedUserData,
  UsersListFollowedByAuthenticatedUserParams,
  UsersListFollowersForAuthenticatedUserData,
  UsersListFollowersForAuthenticatedUserParams,
  UsersListGpgKeysForAuthenticatedUserData,
  UsersListGpgKeysForAuthenticatedUserParams,
  UsersListPublicEmailsForAuthenticatedUserData,
  UsersListPublicEmailsForAuthenticatedUserParams,
  UsersListPublicSshKeysForAuthenticatedUserData,
  UsersListPublicSshKeysForAuthenticatedUserParams,
  UsersListSocialAccountsForAuthenticatedUserData,
  UsersListSocialAccountsForAuthenticatedUserParams,
  UsersListSshSigningKeysForAuthenticatedUserData,
  UsersListSshSigningKeysForAuthenticatedUserParams,
  UsersUnfollowData,
  UsersUpdateAuthenticatedData,
  UsersUpdateAuthenticatedPayload,
  ValidationError,
  ValidationErrorSimple,
} from "./data-contracts";
import { ContentType, HttpClient, RequestParams } from "./http-client";

export class User<SecurityDataType = unknown> {
  http: HttpClient<SecurityDataType>;

  constructor(http: HttpClient<SecurityDataType>) {
    this.http = http;
  }

  /**
   * @description OAuth app tokens and personal access tokens (classic) need the `user` scope in order for the response to include private profile information.
   *
   * @tags users
   * @name UsersGetAuthenticated
   * @summary Get the authenticated user
   * @request GET:/user
   */
  usersGetAuthenticated = (params: RequestParams = {}) =>
    this.http.request<UsersGetAuthenticatedData, BasicError>({
      path: `/user`,
      method: "GET",
      format: "json",
      ...params,
    });
  /**
   * @description **Note:** If your email is set to private and you send an `email` parameter as part of this request to update your profile, your privacy settings are still enforced: the email address will not be displayed on your public profile or via the API.
   *
   * @tags users
   * @name UsersUpdateAuthenticated
   * @summary Update the authenticated user
   * @request PATCH:/user
   */
  usersUpdateAuthenticated = (
    data?: UsersUpdateAuthenticatedPayload,
    params: RequestParams = {},
  ) =>
    this.http.request<
      UsersUpdateAuthenticatedData,
      BasicError | ValidationError
    >({
      path: `/user`,
      method: "PATCH",
      body: data,
      type: ContentType.Json,
      format: "json",
      ...params,
    });
  /**
   * @description Lists all packages that are owned by the authenticated user within the user's namespace, and that encountered a conflict during a Docker migration. OAuth app tokens and personal access tokens (classic) need the `read:packages` scope to use this endpoint.
   *
   * @tags packages
   * @name PackagesListDockerMigrationConflictingPackagesForAuthenticatedUser
   * @summary Get list of conflicting packages during Docker migration for authenticated-user
   * @request GET:/user/docker/conflicts
   */
  packagesListDockerMigrationConflictingPackagesForAuthenticatedUser = (
    params: RequestParams = {},
  ) =>
    this.http.request<
      PackagesListDockerMigrationConflictingPackagesForAuthenticatedUserData,
      any
    >({
      path: `/user/docker/conflicts`,
      method: "GET",
      format: "json",
      ...params,
    });
  /**
   * @description Lists all of your email addresses, and specifies which one is visible to the public. OAuth app tokens and personal access tokens (classic) need the `user:email` scope to use this endpoint.
   *
   * @tags users
   * @name UsersListEmailsForAuthenticatedUser
   * @summary List email addresses for the authenticated user
   * @request GET:/user/emails
   */
  usersListEmailsForAuthenticatedUser = (
    query: UsersListEmailsForAuthenticatedUserParams,
    params: RequestParams = {},
  ) =>
    this.http.request<UsersListEmailsForAuthenticatedUserData, BasicError>({
      path: `/user/emails`,
      method: "GET",
      query: query,
      format: "json",
      ...params,
    });
  /**
   * @description OAuth app tokens and personal access tokens (classic) need the `user` scope to use this endpoint.
   *
   * @tags users
   * @name UsersAddEmailForAuthenticatedUser
   * @summary Add an email address for the authenticated user
   * @request POST:/user/emails
   */
  usersAddEmailForAuthenticatedUser = (
    data?: UsersAddEmailForAuthenticatedUserPayload,
    params: RequestParams = {},
  ) =>
    this.http.request<
      UsersAddEmailForAuthenticatedUserData,
      BasicError | ValidationError
    >({
      path: `/user/emails`,
      method: "POST",
      body: data,
      type: ContentType.Json,
      format: "json",
      ...params,
    });
  /**
   * @description OAuth app tokens and personal access tokens (classic) need the `user` scope to use this endpoint.
   *
   * @tags users
   * @name UsersDeleteEmailForAuthenticatedUser
   * @summary Delete an email address for the authenticated user
   * @request DELETE:/user/emails
   */
  usersDeleteEmailForAuthenticatedUser = (
    data: UsersDeleteEmailForAuthenticatedUserPayload,
    params: RequestParams = {},
  ) =>
    this.http.request<
      UsersDeleteEmailForAuthenticatedUserData,
      BasicError | ValidationError
    >({
      path: `/user/emails`,
      method: "DELETE",
      body: data,
      type: ContentType.Json,
      ...params,
    });
  /**
   * @description Lists the people following the authenticated user.
   *
   * @tags users
   * @name UsersListFollowersForAuthenticatedUser
   * @summary List followers of the authenticated user
   * @request GET:/user/followers
   */
  usersListFollowersForAuthenticatedUser = (
    query: UsersListFollowersForAuthenticatedUserParams,
    params: RequestParams = {},
  ) =>
    this.http.request<UsersListFollowersForAuthenticatedUserData, BasicError>({
      path: `/user/followers`,
      method: "GET",
      query: query,
      format: "json",
      ...params,
    });
  /**
   * @description Lists the people who the authenticated user follows.
   *
   * @tags users
   * @name UsersListFollowedByAuthenticatedUser
   * @summary List the people the authenticated user follows
   * @request GET:/user/following
   */
  usersListFollowedByAuthenticatedUser = (
    query: UsersListFollowedByAuthenticatedUserParams,
    params: RequestParams = {},
  ) =>
    this.http.request<UsersListFollowedByAuthenticatedUserData, BasicError>({
      path: `/user/following`,
      method: "GET",
      query: query,
      format: "json",
      ...params,
    });
  /**
   * No description
   *
   * @tags users
   * @name UsersCheckPersonIsFollowedByAuthenticated
   * @summary Check if a person is followed by the authenticated user
   * @request GET:/user/following/{username}
   */
  usersCheckPersonIsFollowedByAuthenticated = (
    username: string,
    params: RequestParams = {},
  ) =>
    this.http.request<
      UsersCheckPersonIsFollowedByAuthenticatedData,
      UsersCheckPersonIsFollowedByAuthenticatedError
    >({
      path: `/user/following/${username}`,
      method: "GET",
      ...params,
    });
  /**
   * @description Note that you'll need to set `Content-Length` to zero when calling out to this endpoint. For more information, see "[HTTP verbs](https://docs.github.com/enterprise-server@3.17/rest/guides/getting-started-with-the-rest-api#http-method)." OAuth app tokens and personal access tokens (classic) need the `user:follow` scope to use this endpoint.
   *
   * @tags users
   * @name UsersFollow
   * @summary Follow a user
   * @request PUT:/user/following/{username}
   */
  usersFollow = (username: string, params: RequestParams = {}) =>
    this.http.request<UsersFollowData, BasicError | ValidationError>({
      path: `/user/following/${username}`,
      method: "PUT",
      ...params,
    });
  /**
   * @description OAuth app tokens and personal access tokens (classic) need the `user:follow` scope to use this endpoint.
   *
   * @tags users
   * @name UsersUnfollow
   * @summary Unfollow a user
   * @request DELETE:/user/following/{username}
   */
  usersUnfollow = (username: string, params: RequestParams = {}) =>
    this.http.request<UsersUnfollowData, BasicError>({
      path: `/user/following/${username}`,
      method: "DELETE",
      ...params,
    });
  /**
   * @description Lists the current user's GPG keys. OAuth app tokens and personal access tokens (classic) need the `read:gpg_key` scope to use this endpoint.
   *
   * @tags users
   * @name UsersListGpgKeysForAuthenticatedUser
   * @summary List GPG keys for the authenticated user
   * @request GET:/user/gpg_keys
   */
  usersListGpgKeysForAuthenticatedUser = (
    query: UsersListGpgKeysForAuthenticatedUserParams,
    params: RequestParams = {},
  ) =>
    this.http.request<UsersListGpgKeysForAuthenticatedUserData, BasicError>({
      path: `/user/gpg_keys`,
      method: "GET",
      query: query,
      format: "json",
      ...params,
    });
  /**
   * @description Adds a GPG key to the authenticated user's GitHub account. OAuth app tokens and personal access tokens (classic) need the `write:gpg_key` scope to use this endpoint.
   *
   * @tags users
   * @name UsersCreateGpgKeyForAuthenticatedUser
   * @summary Create a GPG key for the authenticated user
   * @request POST:/user/gpg_keys
   */
  usersCreateGpgKeyForAuthenticatedUser = (
    data: UsersCreateGpgKeyForAuthenticatedUserPayload,
    params: RequestParams = {},
  ) =>
    this.http.request<
      UsersCreateGpgKeyForAuthenticatedUserData,
      BasicError | ValidationError
    >({
      path: `/user/gpg_keys`,
      method: "POST",
      body: data,
      type: ContentType.Json,
      format: "json",
      ...params,
    });
  /**
   * @description View extended details for a single GPG key. OAuth app tokens and personal access tokens (classic) need the `read:gpg_key` scope to use this endpoint.
   *
   * @tags users
   * @name UsersGetGpgKeyForAuthenticatedUser
   * @summary Get a GPG key for the authenticated user
   * @request GET:/user/gpg_keys/{gpg_key_id}
   */
  usersGetGpgKeyForAuthenticatedUser = (
    gpgKeyId: number,
    params: RequestParams = {},
  ) =>
    this.http.request<UsersGetGpgKeyForAuthenticatedUserData, BasicError>({
      path: `/user/gpg_keys/${gpgKeyId}`,
      method: "GET",
      format: "json",
      ...params,
    });
  /**
   * @description Removes a GPG key from the authenticated user's GitHub account. OAuth app tokens and personal access tokens (classic) need the `admin:gpg_key` scope to use this endpoint.
   *
   * @tags users
   * @name UsersDeleteGpgKeyForAuthenticatedUser
   * @summary Delete a GPG key for the authenticated user
   * @request DELETE:/user/gpg_keys/{gpg_key_id}
   */
  usersDeleteGpgKeyForAuthenticatedUser = (
    gpgKeyId: number,
    params: RequestParams = {},
  ) =>
    this.http.request<
      UsersDeleteGpgKeyForAuthenticatedUserData,
      BasicError | ValidationError
    >({
      path: `/user/gpg_keys/${gpgKeyId}`,
      method: "DELETE",
      ...params,
    });
  /**
   * @description Lists installations of your GitHub App that the authenticated user has explicit permission (`:read`, `:write`, or `:admin`) to access. The authenticated user has explicit permission to access repositories they own, repositories where they are a collaborator, and repositories that they can access through an organization membership. You can find the permissions for the installation under the `permissions` key.
   *
   * @tags apps
   * @name AppsListInstallationsForAuthenticatedUser
   * @summary List app installations accessible to the user access token
   * @request GET:/user/installations
   */
  appsListInstallationsForAuthenticatedUser = (
    query: AppsListInstallationsForAuthenticatedUserParams,
    params: RequestParams = {},
  ) =>
    this.http.request<
      AppsListInstallationsForAuthenticatedUserData,
      BasicError
    >({
      path: `/user/installations`,
      method: "GET",
      query: query,
      format: "json",
      ...params,
    });
  /**
   * @description List repositories that the authenticated user has explicit permission (`:read`, `:write`, or `:admin`) to access for an installation. The authenticated user has explicit permission to access repositories they own, repositories where they are a collaborator, and repositories that they can access through an organization membership. The access the user has to each repository is included in the hash under the `permissions` key.
   *
   * @tags apps
   * @name AppsListInstallationReposForAuthenticatedUser
   * @summary List repositories accessible to the user access token
   * @request GET:/user/installations/{installation_id}/repositories
   */
  appsListInstallationReposForAuthenticatedUser = (
    {
      installationId,
      ...query
    }: AppsListInstallationReposForAuthenticatedUserParams,
    params: RequestParams = {},
  ) =>
    this.http.request<
      AppsListInstallationReposForAuthenticatedUserData,
      BasicError
    >({
      path: `/user/installations/${installationId}/repositories`,
      method: "GET",
      query: query,
      format: "json",
      ...params,
    });
  /**
   * @description Add a single repository to an installation. The authenticated user must have admin access to the repository. This endpoint only works for PATs (classic) with the `repo` scope.
   *
   * @tags apps
   * @name AppsAddRepoToInstallationForAuthenticatedUser
   * @summary Add a repository to an app installation
   * @request PUT:/user/installations/{installation_id}/repositories/{repository_id}
   */
  appsAddRepoToInstallationForAuthenticatedUser = (
    installationId: number,
    repositoryId: number,
    params: RequestParams = {},
  ) =>
    this.http.request<
      AppsAddRepoToInstallationForAuthenticatedUserData,
      BasicError
    >({
      path: `/user/installations/${installationId}/repositories/${repositoryId}`,
      method: "PUT",
      ...params,
    });
  /**
   * @description Remove a single repository from an installation. The authenticated user must have admin access to the repository. The installation must have the `repository_selection` of `selected`. This endpoint only works for PATs (classic) with the `repo` scope.
   *
   * @tags apps
   * @name AppsRemoveRepoFromInstallationForAuthenticatedUser
   * @summary Remove a repository from an app installation
   * @request DELETE:/user/installations/{installation_id}/repositories/{repository_id}
   */
  appsRemoveRepoFromInstallationForAuthenticatedUser = (
    installationId: number,
    repositoryId: number,
    params: RequestParams = {},
  ) =>
    this.http.request<
      AppsRemoveRepoFromInstallationForAuthenticatedUserData,
      BasicError | void
    >({
      path: `/user/installations/${installationId}/repositories/${repositoryId}`,
      method: "DELETE",
      ...params,
    });
  /**
   * @description List issues across owned and member repositories assigned to the authenticated user. > [!NOTE] > GitHub's REST API considers every pull request an issue, but not every issue is a pull request. For this reason, "Issues" endpoints may return both issues and pull requests in the response. You can identify pull requests by the `pull_request` key. Be aware that the `id` of a pull request returned from "Issues" endpoints will be an _issue id_. To find out the pull request id, use the "[List pull requests](https://docs.github.com/enterprise-server@3.17/rest/pulls/pulls#list-pull-requests)" endpoint. This endpoint supports the following custom media types. For more information, see "[Media types](https://docs.github.com/enterprise-server@3.17/rest/using-the-rest-api/getting-started-with-the-rest-api#media-types)." - **`application/vnd.github.raw+json`**: Returns the raw markdown body. Response will include `body`. This is the default if you do not pass any specific media type. - **`application/vnd.github.text+json`**: Returns a text only representation of the markdown body. Response will include `body_text`. - **`application/vnd.github.html+json`**: Returns HTML rendered from the body's markdown. Response will include `body_html`. - **`application/vnd.github.full+json`**: Returns raw, text, and HTML representations. Response will include `body`, `body_text`, and `body_html`.
   *
   * @tags issues
   * @name IssuesListForAuthenticatedUser
   * @summary List user account issues assigned to the authenticated user
   * @request GET:/user/issues
   */
  issuesListForAuthenticatedUser = (
    query: IssuesListForAuthenticatedUserParams,
    params: RequestParams = {},
  ) =>
    this.http.request<IssuesListForAuthenticatedUserData, BasicError>({
      path: `/user/issues`,
      method: "GET",
      query: query,
      format: "json",
      ...params,
    });
  /**
   * @description Lists the public SSH keys for the authenticated user's GitHub account. OAuth app tokens and personal access tokens (classic) need the `read:public_key` scope to use this endpoint.
   *
   * @tags users
   * @name UsersListPublicSshKeysForAuthenticatedUser
   * @summary List public SSH keys for the authenticated user
   * @request GET:/user/keys
   */
  usersListPublicSshKeysForAuthenticatedUser = (
    query: UsersListPublicSshKeysForAuthenticatedUserParams,
    params: RequestParams = {},
  ) =>
    this.http.request<
      UsersListPublicSshKeysForAuthenticatedUserData,
      BasicError
    >({
      path: `/user/keys`,
      method: "GET",
      query: query,
      format: "json",
      ...params,
    });
  /**
   * @description Adds a public SSH key to the authenticated user's GitHub account. OAuth app tokens and personal access tokens (classic) need the `write:gpg_key` scope to use this endpoint.
   *
   * @tags users
   * @name UsersCreatePublicSshKeyForAuthenticatedUser
   * @summary Create a public SSH key for the authenticated user
   * @request POST:/user/keys
   */
  usersCreatePublicSshKeyForAuthenticatedUser = (
    data: UsersCreatePublicSshKeyForAuthenticatedUserPayload,
    params: RequestParams = {},
  ) =>
    this.http.request<
      UsersCreatePublicSshKeyForAuthenticatedUserData,
      BasicError | ValidationError
    >({
      path: `/user/keys`,
      method: "POST",
      body: data,
      type: ContentType.Json,
      format: "json",
      ...params,
    });
  /**
   * @description View extended details for a single public SSH key. OAuth app tokens and personal access tokens (classic) need the `read:public_key` scope to use this endpoint.
   *
   * @tags users
   * @name UsersGetPublicSshKeyForAuthenticatedUser
   * @summary Get a public SSH key for the authenticated user
   * @request GET:/user/keys/{key_id}
   */
  usersGetPublicSshKeyForAuthenticatedUser = (
    keyId: number,
    params: RequestParams = {},
  ) =>
    this.http.request<UsersGetPublicSshKeyForAuthenticatedUserData, BasicError>(
      {
        path: `/user/keys/${keyId}`,
        method: "GET",
        format: "json",
        ...params,
      },
    );
  /**
   * @description Removes a public SSH key from the authenticated user's GitHub account. OAuth app tokens and personal access tokens (classic) need the `admin:public_key` scope to use this endpoint.
   *
   * @tags users
   * @name UsersDeletePublicSshKeyForAuthenticatedUser
   * @summary Delete a public SSH key for the authenticated user
   * @request DELETE:/user/keys/{key_id}
   */
  usersDeletePublicSshKeyForAuthenticatedUser = (
    keyId: number,
    params: RequestParams = {},
  ) =>
    this.http.request<
      UsersDeletePublicSshKeyForAuthenticatedUserData,
      BasicError
    >({
      path: `/user/keys/${keyId}`,
      method: "DELETE",
      ...params,
    });
  /**
   * @description Lists all of the authenticated user's organization memberships.
   *
   * @tags orgs
   * @name OrgsListMembershipsForAuthenticatedUser
   * @summary List organization memberships for the authenticated user
   * @request GET:/user/memberships/orgs
   */
  orgsListMembershipsForAuthenticatedUser = (
    query: OrgsListMembershipsForAuthenticatedUserParams,
    params: RequestParams = {},
  ) =>
    this.http.request<
      OrgsListMembershipsForAuthenticatedUserData,
      BasicError | ValidationError
    >({
      path: `/user/memberships/orgs`,
      method: "GET",
      query: query,
      format: "json",
      ...params,
    });
  /**
   * @description If the authenticated user is an active or pending member of the organization, this endpoint will return the user's membership. If the authenticated user is not affiliated with the organization, a `404` is returned. This endpoint will return a `403` if the request is made by a GitHub App that is blocked by the organization.
   *
   * @tags orgs
   * @name OrgsGetMembershipForAuthenticatedUser
   * @summary Get an organization membership for the authenticated user
   * @request GET:/user/memberships/orgs/{org}
   */
  orgsGetMembershipForAuthenticatedUser = (
    org: string,
    params: RequestParams = {},
  ) =>
    this.http.request<OrgsGetMembershipForAuthenticatedUserData, BasicError>({
      path: `/user/memberships/orgs/${org}`,
      method: "GET",
      format: "json",
      ...params,
    });
  /**
   * @description Converts the authenticated user to an active member of the organization, if that user has a pending invitation from the organization.
   *
   * @tags orgs
   * @name OrgsUpdateMembershipForAuthenticatedUser
   * @summary Update an organization membership for the authenticated user
   * @request PATCH:/user/memberships/orgs/{org}
   */
  orgsUpdateMembershipForAuthenticatedUser = (
    org: string,
    data: OrgsUpdateMembershipForAuthenticatedUserPayload,
    params: RequestParams = {},
  ) =>
    this.http.request<
      OrgsUpdateMembershipForAuthenticatedUserData,
      BasicError | ValidationError
    >({
      path: `/user/memberships/orgs/${org}`,
      method: "PATCH",
      body: data,
      type: ContentType.Json,
      format: "json",
      ...params,
    });
  /**
   * @description Lists all migrations a user has started.
   *
   * @tags migrations
   * @name MigrationsListForAuthenticatedUser
   * @summary List user migrations
   * @request GET:/user/migrations
   */
  migrationsListForAuthenticatedUser = (
    query: MigrationsListForAuthenticatedUserParams,
    params: RequestParams = {},
  ) =>
    this.http.request<MigrationsListForAuthenticatedUserData, BasicError>({
      path: `/user/migrations`,
      method: "GET",
      query: query,
      format: "json",
      ...params,
    });
  /**
   * @description Initiates the generation of a user migration archive.
   *
   * @tags migrations
   * @name MigrationsStartForAuthenticatedUser
   * @summary Start a user migration
   * @request POST:/user/migrations
   */
  migrationsStartForAuthenticatedUser = (
    data: MigrationsStartForAuthenticatedUserPayload,
    params: RequestParams = {},
  ) =>
    this.http.request<
      MigrationsStartForAuthenticatedUserData,
      BasicError | ValidationError
    >({
      path: `/user/migrations`,
      method: "POST",
      body: data,
      type: ContentType.Json,
      format: "json",
      ...params,
    });
  /**
   * @description Fetches the URL to download the migration archive as a `tar.gz` file. Depending on the resources your repository uses, the migration archive can contain JSON files with data for these objects: *   attachments *   bases *   commit\_comments *   issue\_comments *   issue\_events *   issues *   milestones *   organizations *   projects *   protected\_branches *   pull\_request\_reviews *   pull\_requests *   releases *   repositories *   review\_comments *   schema *   users The archive will also contain an `attachments` directory that includes all attachment files uploaded to GitHub.com and a `repositories` directory that contains the repository's Git data.
   *
   * @tags migrations
   * @name MigrationsGetArchiveForAuthenticatedUser
   * @summary Download a user migration archive
   * @request GET:/user/migrations/{migration_id}/archive
   */
  migrationsGetArchiveForAuthenticatedUser = (
    migrationId: number,
    params: RequestParams = {},
  ) =>
    this.http.request<any, void | BasicError>({
      path: `/user/migrations/${migrationId}/archive`,
      method: "GET",
      ...params,
    });
  /**
   * @description Lists all the repositories for this user migration.
   *
   * @tags migrations
   * @name MigrationsListReposForAuthenticatedUser
   * @summary List repositories for a user migration
   * @request GET:/user/migrations/{migration_id}/repositories
   */
  migrationsListReposForAuthenticatedUser = (
    { migrationId, ...query }: MigrationsListReposForAuthenticatedUserParams,
    params: RequestParams = {},
  ) =>
    this.http.request<MigrationsListReposForAuthenticatedUserData, BasicError>({
      path: `/user/migrations/${migrationId}/repositories`,
      method: "GET",
      query: query,
      format: "json",
      ...params,
    });
  /**
   * @description List organizations for the authenticated user. For OAuth app tokens and personal access tokens (classic), this endpoint only lists organizations that your authorization allows you to operate on in some way (e.g., you can list teams with `read:org` scope, you can publicize your organization membership with `user` scope, etc.). Therefore, this API requires at least `user` or `read:org` scope for OAuth app tokens and personal access tokens (classic). Requests with insufficient scope will receive a `403 Forbidden` response. > [!NOTE] > Requests using a fine-grained access token will receive a `200 Success` response with an empty list.
   *
   * @tags orgs
   * @name OrgsListForAuthenticatedUser
   * @summary List organizations for the authenticated user
   * @request GET:/user/orgs
   */
  orgsListForAuthenticatedUser = (
    query: OrgsListForAuthenticatedUserParams,
    params: RequestParams = {},
  ) =>
    this.http.request<OrgsListForAuthenticatedUserData, BasicError>({
      path: `/user/orgs`,
      method: "GET",
      query: query,
      format: "json",
      ...params,
    });
  /**
   * @description Lists packages owned by the authenticated user within the user's namespace. OAuth app tokens and personal access tokens (classic) need the `read:packages` scope to use this endpoint. For more information, see "[About permissions for GitHub Packages](https://docs.github.com/enterprise-server@3.17/packages/learn-github-packages/about-permissions-for-github-packages#permissions-for-repository-scoped-packages)."
   *
   * @tags packages
   * @name PackagesListPackagesForAuthenticatedUser
   * @summary List packages for the authenticated user's namespace
   * @request GET:/user/packages
   */
  packagesListPackagesForAuthenticatedUser = (
    query: PackagesListPackagesForAuthenticatedUserParams,
    params: RequestParams = {},
  ) =>
    this.http.request<PackagesListPackagesForAuthenticatedUserData, any>({
      path: `/user/packages`,
      method: "GET",
      query: query,
      format: "json",
      ...params,
    });
  /**
   * @description Gets a specific package for a package owned by the authenticated user. OAuth app tokens and personal access tokens (classic) need the `read:packages` scope to use this endpoint. For more information, see "[About permissions for GitHub Packages](https://docs.github.com/enterprise-server@3.17/packages/learn-github-packages/about-permissions-for-github-packages#permissions-for-repository-scoped-packages)."
   *
   * @tags packages
   * @name PackagesGetPackageForAuthenticatedUser
   * @summary Get a package for the authenticated user
   * @request GET:/user/packages/{package_type}/{package_name}
   */
  packagesGetPackageForAuthenticatedUser = (
    packageType:
      | "npm"
      | "maven"
      | "rubygems"
      | "docker"
      | "nuget"
      | "container",
    packageName: string,
    params: RequestParams = {},
  ) =>
    this.http.request<PackagesGetPackageForAuthenticatedUserData, any>({
      path: `/user/packages/${packageType}/${packageName}`,
      method: "GET",
      format: "json",
      ...params,
    });
  /**
   * @description Deletes a package owned by the authenticated user. You cannot delete a public package if any version of the package has more than 5,000 downloads. In this scenario, contact GitHub support for further assistance. OAuth app tokens and personal access tokens (classic) need the `read:packages` and `delete:packages` scopes to use this endpoint. For more information, see "[About permissions for GitHub Packages](https://docs.github.com/enterprise-server@3.17/packages/learn-github-packages/about-permissions-for-github-packages#permissions-for-repository-scoped-packages)."
   *
   * @tags packages
   * @name PackagesDeletePackageForAuthenticatedUser
   * @summary Delete a package for the authenticated user
   * @request DELETE:/user/packages/{package_type}/{package_name}
   */
  packagesDeletePackageForAuthenticatedUser = (
    packageType:
      | "npm"
      | "maven"
      | "rubygems"
      | "docker"
      | "nuget"
      | "container",
    packageName: string,
    params: RequestParams = {},
  ) =>
    this.http.request<
      PackagesDeletePackageForAuthenticatedUserData,
      BasicError
    >({
      path: `/user/packages/${packageType}/${packageName}`,
      method: "DELETE",
      ...params,
    });
  /**
   * @description Restores a package owned by the authenticated user. You can restore a deleted package under the following conditions: - The package was deleted within the last 30 days. - The same package namespace and version is still available and not reused for a new package. If the same package namespace is not available, you will not be able to restore your package. In this scenario, to restore the deleted package, you must delete the new package that uses the deleted package's namespace first. OAuth app tokens and personal access tokens (classic) need the `read:packages` and `write:packages` scopes to use this endpoint. For more information, see "[About permissions for GitHub Packages](https://docs.github.com/enterprise-server@3.17/packages/learn-github-packages/about-permissions-for-github-packages#permissions-for-repository-scoped-packages)."
   *
   * @tags packages
   * @name PackagesRestorePackageForAuthenticatedUser
   * @summary Restore a package for the authenticated user
   * @request POST:/user/packages/{package_type}/{package_name}/restore
   */
  packagesRestorePackageForAuthenticatedUser = (
    {
      packageType,
      packageName,
      ...query
    }: PackagesRestorePackageForAuthenticatedUserParams,
    params: RequestParams = {},
  ) =>
    this.http.request<
      PackagesRestorePackageForAuthenticatedUserData,
      BasicError
    >({
      path: `/user/packages/${packageType}/${packageName}/restore`,
      method: "POST",
      query: query,
      ...params,
    });
  /**
   * @description Lists package versions for a package owned by the authenticated user. OAuth app tokens and personal access tokens (classic) need the `read:packages` scope to use this endpoint. For more information, see "[About permissions for GitHub Packages](https://docs.github.com/enterprise-server@3.17/packages/learn-github-packages/about-permissions-for-github-packages#permissions-for-repository-scoped-packages)."
   *
   * @tags packages
   * @name PackagesGetAllPackageVersionsForPackageOwnedByAuthenticatedUser
   * @summary List package versions for a package owned by the authenticated user
   * @request GET:/user/packages/{package_type}/{package_name}/versions
   */
  packagesGetAllPackageVersionsForPackageOwnedByAuthenticatedUser = (
    {
      packageType,
      packageName,
      ...query
    }: PackagesGetAllPackageVersionsForPackageOwnedByAuthenticatedUserParams,
    params: RequestParams = {},
  ) =>
    this.http.request<
      PackagesGetAllPackageVersionsForPackageOwnedByAuthenticatedUserData,
      BasicError
    >({
      path: `/user/packages/${packageType}/${packageName}/versions`,
      method: "GET",
      query: query,
      format: "json",
      ...params,
    });
  /**
   * @description Gets a specific package version for a package owned by the authenticated user. OAuth app tokens and personal access tokens (classic) need the `read:packages` scope to use this endpoint. For more information, see "[About permissions for GitHub Packages](https://docs.github.com/enterprise-server@3.17/packages/learn-github-packages/about-permissions-for-github-packages#permissions-for-repository-scoped-packages)."
   *
   * @tags packages
   * @name PackagesGetPackageVersionForAuthenticatedUser
   * @summary Get a package version for the authenticated user
   * @request GET:/user/packages/{package_type}/{package_name}/versions/{package_version_id}
   */
  packagesGetPackageVersionForAuthenticatedUser = (
    packageType:
      | "npm"
      | "maven"
      | "rubygems"
      | "docker"
      | "nuget"
      | "container",
    packageName: string,
    packageVersionId: number,
    params: RequestParams = {},
  ) =>
    this.http.request<PackagesGetPackageVersionForAuthenticatedUserData, any>({
      path: `/user/packages/${packageType}/${packageName}/versions/${packageVersionId}`,
      method: "GET",
      format: "json",
      ...params,
    });
  /**
   * @description Deletes a specific package version for a package owned by the authenticated user.  If the package is public and the package version has more than 5,000 downloads, you cannot delete the package version. In this scenario, contact GitHub support for further assistance. The authenticated user must have admin permissions in the organization to use this endpoint. OAuth app tokens and personal access tokens (classic) need the `read:packages` and `delete:packages` scopes to use this endpoint. For more information, see "[About permissions for GitHub Packages](https://docs.github.com/enterprise-server@3.17/packages/learn-github-packages/about-permissions-for-github-packages#permissions-for-repository-scoped-packages)."
   *
   * @tags packages
   * @name PackagesDeletePackageVersionForAuthenticatedUser
   * @summary Delete a package version for the authenticated user
   * @request DELETE:/user/packages/{package_type}/{package_name}/versions/{package_version_id}
   */
  packagesDeletePackageVersionForAuthenticatedUser = (
    packageType:
      | "npm"
      | "maven"
      | "rubygems"
      | "docker"
      | "nuget"
      | "container",
    packageName: string,
    packageVersionId: number,
    params: RequestParams = {},
  ) =>
    this.http.request<
      PackagesDeletePackageVersionForAuthenticatedUserData,
      BasicError
    >({
      path: `/user/packages/${packageType}/${packageName}/versions/${packageVersionId}`,
      method: "DELETE",
      ...params,
    });
  /**
   * @description Restores a package version owned by the authenticated user. You can restore a deleted package version under the following conditions: - The package was deleted within the last 30 days. - The same package namespace and version is still available and not reused for a new package. If the same package namespace is not available, you will not be able to restore your package. In this scenario, to restore the deleted package, you must delete the new package that uses the deleted package's namespace first. OAuth app tokens and personal access tokens (classic) need the `read:packages` and `write:packages` scopes to use this endpoint. For more information, see "[About permissions for GitHub Packages](https://docs.github.com/enterprise-server@3.17/packages/learn-github-packages/about-permissions-for-github-packages#permissions-for-repository-scoped-packages)."
   *
   * @tags packages
   * @name PackagesRestorePackageVersionForAuthenticatedUser
   * @summary Restore a package version for the authenticated user
   * @request POST:/user/packages/{package_type}/{package_name}/versions/{package_version_id}/restore
   */
  packagesRestorePackageVersionForAuthenticatedUser = (
    packageType:
      | "npm"
      | "maven"
      | "rubygems"
      | "docker"
      | "nuget"
      | "container",
    packageName: string,
    packageVersionId: number,
    params: RequestParams = {},
  ) =>
    this.http.request<
      PackagesRestorePackageVersionForAuthenticatedUserData,
      BasicError
    >({
      path: `/user/packages/${packageType}/${packageName}/versions/${packageVersionId}/restore`,
      method: "POST",
      ...params,
    });
  /**
   * @description > [!WARNING] > **Closing down notice:** Projects (classic) is being deprecated in favor of the new Projects experience. > See the [changelog](https://github.blog/changelog/2024-05-23-sunset-notice-projects-classic/) for more information.
   *
   * @tags projects
   * @name ProjectsCreateForAuthenticatedUser
   * @summary Create a user project
   * @request POST:/user/projects
   * @deprecated
   */
  projectsCreateForAuthenticatedUser = (
    data: ProjectsCreateForAuthenticatedUserPayload,
    params: RequestParams = {},
  ) =>
    this.http.request<
      ProjectsCreateForAuthenticatedUserData,
      BasicError | ValidationErrorSimple
    >({
      path: `/user/projects`,
      method: "POST",
      body: data,
      type: ContentType.Json,
      format: "json",
      ...params,
    });
  /**
   * @description Lists your publicly visible email address, which you can set with the [Set primary email visibility for the authenticated user](https://docs.github.com/enterprise-server@3.17/rest/users/emails#set-primary-email-visibility-for-the-authenticated-user) endpoint. OAuth app tokens and personal access tokens (classic) need the `user:email` scope to use this endpoint.
   *
   * @tags users
   * @name UsersListPublicEmailsForAuthenticatedUser
   * @summary List public email addresses for the authenticated user
   * @request GET:/user/public_emails
   */
  usersListPublicEmailsForAuthenticatedUser = (
    query: UsersListPublicEmailsForAuthenticatedUserParams,
    params: RequestParams = {},
  ) =>
    this.http.request<
      UsersListPublicEmailsForAuthenticatedUserData,
      BasicError
    >({
      path: `/user/public_emails`,
      method: "GET",
      query: query,
      format: "json",
      ...params,
    });
  /**
   * @description Lists repositories that the authenticated user has explicit permission (`:read`, `:write`, or `:admin`) to access. The authenticated user has explicit permission to access repositories they own, repositories where they are a collaborator, and repositories that they can access through an organization membership.
   *
   * @tags repos
   * @name ReposListForAuthenticatedUser
   * @summary List repositories for the authenticated user
   * @request GET:/user/repos
   */
  reposListForAuthenticatedUser = (
    query: ReposListForAuthenticatedUserParams,
    params: RequestParams = {},
  ) =>
    this.http.request<
      ReposListForAuthenticatedUserData,
      BasicError | ValidationError
    >({
      path: `/user/repos`,
      method: "GET",
      query: query,
      format: "json",
      ...params,
    });
  /**
   * @description Creates a new repository for the authenticated user. OAuth app tokens and personal access tokens (classic) need the `public_repo` or `repo` scope to create a public repository, and `repo` scope to create a private repository.
   *
   * @tags repos
   * @name ReposCreateForAuthenticatedUser
   * @summary Create a repository for the authenticated user
   * @request POST:/user/repos
   */
  reposCreateForAuthenticatedUser = (
    data: ReposCreateForAuthenticatedUserPayload,
    params: RequestParams = {},
  ) =>
    this.http.request<
      ReposCreateForAuthenticatedUserData,
      BasicError | ValidationError
    >({
      path: `/user/repos`,
      method: "POST",
      body: data,
      type: ContentType.Json,
      format: "json",
      ...params,
    });
  /**
   * @description When authenticating as a user, this endpoint will list all currently open repository invitations for that user.
   *
   * @tags repos
   * @name ReposListInvitationsForAuthenticatedUser
   * @summary List repository invitations for the authenticated user
   * @request GET:/user/repository_invitations
   */
  reposListInvitationsForAuthenticatedUser = (
    query: ReposListInvitationsForAuthenticatedUserParams,
    params: RequestParams = {},
  ) =>
    this.http.request<ReposListInvitationsForAuthenticatedUserData, BasicError>(
      {
        path: `/user/repository_invitations`,
        method: "GET",
        query: query,
        format: "json",
        ...params,
      },
    );
  /**
   * No description
   *
   * @tags repos
   * @name ReposAcceptInvitationForAuthenticatedUser
   * @summary Accept a repository invitation
   * @request PATCH:/user/repository_invitations/{invitation_id}
   */
  reposAcceptInvitationForAuthenticatedUser = (
    invitationId: number,
    params: RequestParams = {},
  ) =>
    this.http.request<
      ReposAcceptInvitationForAuthenticatedUserData,
      BasicError
    >({
      path: `/user/repository_invitations/${invitationId}`,
      method: "PATCH",
      ...params,
    });
  /**
   * No description
   *
   * @tags repos
   * @name ReposDeclineInvitationForAuthenticatedUser
   * @summary Decline a repository invitation
   * @request DELETE:/user/repository_invitations/{invitation_id}
   */
  reposDeclineInvitationForAuthenticatedUser = (
    invitationId: number,
    params: RequestParams = {},
  ) =>
    this.http.request<
      ReposDeclineInvitationForAuthenticatedUserData,
      BasicError
    >({
      path: `/user/repository_invitations/${invitationId}`,
      method: "DELETE",
      ...params,
    });
  /**
   * @description Lists all of your social accounts.
   *
   * @tags users
   * @name UsersListSocialAccountsForAuthenticatedUser
   * @summary List social accounts for the authenticated user
   * @request GET:/user/social_accounts
   */
  usersListSocialAccountsForAuthenticatedUser = (
    query: UsersListSocialAccountsForAuthenticatedUserParams,
    params: RequestParams = {},
  ) =>
    this.http.request<
      UsersListSocialAccountsForAuthenticatedUserData,
      BasicError
    >({
      path: `/user/social_accounts`,
      method: "GET",
      query: query,
      format: "json",
      ...params,
    });
  /**
   * @description Add one or more social accounts to the authenticated user's profile. OAuth app tokens and personal access tokens (classic) need the `user` scope to use this endpoint.
   *
   * @tags users
   * @name UsersAddSocialAccountForAuthenticatedUser
   * @summary Add social accounts for the authenticated user
   * @request POST:/user/social_accounts
   */
  usersAddSocialAccountForAuthenticatedUser = (
    data: UsersAddSocialAccountForAuthenticatedUserPayload,
    params: RequestParams = {},
  ) =>
    this.http.request<
      UsersAddSocialAccountForAuthenticatedUserData,
      BasicError | ValidationError
    >({
      path: `/user/social_accounts`,
      method: "POST",
      body: data,
      type: ContentType.Json,
      format: "json",
      ...params,
    });
  /**
   * @description Deletes one or more social accounts from the authenticated user's profile. OAuth app tokens and personal access tokens (classic) need the `user` scope to use this endpoint.
   *
   * @tags users
   * @name UsersDeleteSocialAccountForAuthenticatedUser
   * @summary Delete social accounts for the authenticated user
   * @request DELETE:/user/social_accounts
   */
  usersDeleteSocialAccountForAuthenticatedUser = (
    data: UsersDeleteSocialAccountForAuthenticatedUserPayload,
    params: RequestParams = {},
  ) =>
    this.http.request<
      UsersDeleteSocialAccountForAuthenticatedUserData,
      BasicError | ValidationError
    >({
      path: `/user/social_accounts`,
      method: "DELETE",
      body: data,
      type: ContentType.Json,
      ...params,
    });
  /**
   * @description Lists the SSH signing keys for the authenticated user's GitHub account. OAuth app tokens and personal access tokens (classic) need the `read:ssh_signing_key` scope to use this endpoint.
   *
   * @tags users
   * @name UsersListSshSigningKeysForAuthenticatedUser
   * @summary List SSH signing keys for the authenticated user
   * @request GET:/user/ssh_signing_keys
   */
  usersListSshSigningKeysForAuthenticatedUser = (
    query: UsersListSshSigningKeysForAuthenticatedUserParams,
    params: RequestParams = {},
  ) =>
    this.http.request<
      UsersListSshSigningKeysForAuthenticatedUserData,
      BasicError
    >({
      path: `/user/ssh_signing_keys`,
      method: "GET",
      query: query,
      format: "json",
      ...params,
    });
  /**
   * @description Creates an SSH signing key for the authenticated user's GitHub account. OAuth app tokens and personal access tokens (classic) need the `write:ssh_signing_key` scope to use this endpoint.
   *
   * @tags users
   * @name UsersCreateSshSigningKeyForAuthenticatedUser
   * @summary Create a SSH signing key for the authenticated user
   * @request POST:/user/ssh_signing_keys
   */
  usersCreateSshSigningKeyForAuthenticatedUser = (
    data: UsersCreateSshSigningKeyForAuthenticatedUserPayload,
    params: RequestParams = {},
  ) =>
    this.http.request<
      UsersCreateSshSigningKeyForAuthenticatedUserData,
      BasicError | ValidationError
    >({
      path: `/user/ssh_signing_keys`,
      method: "POST",
      body: data,
      type: ContentType.Json,
      format: "json",
      ...params,
    });
  /**
   * @description Gets extended details for an SSH signing key. OAuth app tokens and personal access tokens (classic) need the `read:ssh_signing_key` scope to use this endpoint.
   *
   * @tags users
   * @name UsersGetSshSigningKeyForAuthenticatedUser
   * @summary Get an SSH signing key for the authenticated user
   * @request GET:/user/ssh_signing_keys/{ssh_signing_key_id}
   */
  usersGetSshSigningKeyForAuthenticatedUser = (
    sshSigningKeyId: number,
    params: RequestParams = {},
  ) =>
    this.http.request<
      UsersGetSshSigningKeyForAuthenticatedUserData,
      BasicError
    >({
      path: `/user/ssh_signing_keys/${sshSigningKeyId}`,
      method: "GET",
      format: "json",
      ...params,
    });
  /**
   * @description Deletes an SSH signing key from the authenticated user's GitHub account. OAuth app tokens and personal access tokens (classic) need the `admin:ssh_signing_key` scope to use this endpoint.
   *
   * @tags users
   * @name UsersDeleteSshSigningKeyForAuthenticatedUser
   * @summary Delete an SSH signing key for the authenticated user
   * @request DELETE:/user/ssh_signing_keys/{ssh_signing_key_id}
   */
  usersDeleteSshSigningKeyForAuthenticatedUser = (
    sshSigningKeyId: number,
    params: RequestParams = {},
  ) =>
    this.http.request<
      UsersDeleteSshSigningKeyForAuthenticatedUserData,
      BasicError
    >({
      path: `/user/ssh_signing_keys/${sshSigningKeyId}`,
      method: "DELETE",
      ...params,
    });
  /**
   * @description Lists repositories the authenticated user has starred. This endpoint supports the following custom media types. For more information, see "[Media types](https://docs.github.com/enterprise-server@3.17/rest/using-the-rest-api/getting-started-with-the-rest-api#media-types)." - **`application/vnd.github.star+json`**: Includes a timestamp of when the star was created.
   *
   * @tags activity
   * @name ActivityListReposStarredByAuthenticatedUser
   * @summary List repositories starred by the authenticated user
   * @request GET:/user/starred
   */
  activityListReposStarredByAuthenticatedUser = (
    query: ActivityListReposStarredByAuthenticatedUserParams,
    params: RequestParams = {},
  ) =>
    this.http.request<
      ActivityListReposStarredByAuthenticatedUserData,
      BasicError
    >({
      path: `/user/starred`,
      method: "GET",
      query: query,
      format: "json",
      ...params,
    });
  /**
   * @description Whether the authenticated user has starred the repository.
   *
   * @tags activity
   * @name ActivityCheckRepoIsStarredByAuthenticatedUser
   * @summary Check if a repository is starred by the authenticated user
   * @request GET:/user/starred/{owner}/{repo}
   */
  activityCheckRepoIsStarredByAuthenticatedUser = (
    owner: string,
    repo: string,
    params: RequestParams = {},
  ) =>
    this.http.request<
      ActivityCheckRepoIsStarredByAuthenticatedUserData,
      ActivityCheckRepoIsStarredByAuthenticatedUserError
    >({
      path: `/user/starred/${owner}/${repo}`,
      method: "GET",
      ...params,
    });
  /**
   * @description Note that you'll need to set `Content-Length` to zero when calling out to this endpoint. For more information, see "[HTTP method](https://docs.github.com/enterprise-server@3.17/rest/guides/getting-started-with-the-rest-api#http-method)."
   *
   * @tags activity
   * @name ActivityStarRepoForAuthenticatedUser
   * @summary Star a repository for the authenticated user
   * @request PUT:/user/starred/{owner}/{repo}
   */
  activityStarRepoForAuthenticatedUser = (
    owner: string,
    repo: string,
    params: RequestParams = {},
  ) =>
    this.http.request<ActivityStarRepoForAuthenticatedUserData, BasicError>({
      path: `/user/starred/${owner}/${repo}`,
      method: "PUT",
      ...params,
    });
  /**
   * @description Unstar a repository that the authenticated user has previously starred.
   *
   * @tags activity
   * @name ActivityUnstarRepoForAuthenticatedUser
   * @summary Unstar a repository for the authenticated user
   * @request DELETE:/user/starred/{owner}/{repo}
   */
  activityUnstarRepoForAuthenticatedUser = (
    owner: string,
    repo: string,
    params: RequestParams = {},
  ) =>
    this.http.request<ActivityUnstarRepoForAuthenticatedUserData, BasicError>({
      path: `/user/starred/${owner}/${repo}`,
      method: "DELETE",
      ...params,
    });
  /**
   * @description Lists repositories the authenticated user is watching.
   *
   * @tags activity
   * @name ActivityListWatchedReposForAuthenticatedUser
   * @summary List repositories watched by the authenticated user
   * @request GET:/user/subscriptions
   */
  activityListWatchedReposForAuthenticatedUser = (
    query: ActivityListWatchedReposForAuthenticatedUserParams,
    params: RequestParams = {},
  ) =>
    this.http.request<
      ActivityListWatchedReposForAuthenticatedUserData,
      BasicError
    >({
      path: `/user/subscriptions`,
      method: "GET",
      query: query,
      format: "json",
      ...params,
    });
  /**
   * @description List all of the teams across all of the organizations to which the authenticated user belongs. OAuth app tokens and personal access tokens (classic) need the `user`, `repo`, or `read:org` scope to use this endpoint. When using a fine-grained personal access token, the resource owner of the token must be a single organization, and the response will only include the teams from that organization.
   *
   * @tags teams
   * @name TeamsListForAuthenticatedUser
   * @summary List teams for the authenticated user
   * @request GET:/user/teams
   */
  teamsListForAuthenticatedUser = (
    query: TeamsListForAuthenticatedUserParams,
    params: RequestParams = {},
  ) =>
    this.http.request<TeamsListForAuthenticatedUserData, BasicError>({
      path: `/user/teams`,
      method: "GET",
      query: query,
      format: "json",
      ...params,
    });
  /**
   * @description Provides publicly available information about someone with a GitHub account. This method takes their durable user `ID` instead of their `login`, which can change over time. The `email` key in the following response is the publicly visible email address from your GitHub Enterprise Server [profile page](https://github.com/settings/profile). When setting up your profile, you can select a primary email address to be public which provides an email entry for this endpoint. If you do not set a public email address for `email`, then it will have a value of `null`. You only see publicly visible email addresses when authenticated with GitHub Enterprise Server. For more information, see [Authentication](https://docs.github.com/enterprise-server@3.17/rest/guides/getting-started-with-the-rest-api#authentication). The Emails API enables you to list all of your email addresses, and toggle a primary email to be visible publicly. For more information, see [Emails API](https://docs.github.com/enterprise-server@3.17/rest/users/emails).
   *
   * @tags users
   * @name UsersGetById
   * @summary Get a user using their ID
   * @request GET:/user/{account_id}
   */
  usersGetById = (accountId: number, params: RequestParams = {}) =>
    this.http.request<UsersGetByIdData, BasicError>({
      path: `/user/${accountId}`,
      method: "GET",
      format: "json",
      ...params,
    });
}
