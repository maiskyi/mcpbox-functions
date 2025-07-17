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
  ActivityListEventsForAuthenticatedUserData,
  ActivityListEventsForAuthenticatedUserParams,
  ActivityListOrgEventsForAuthenticatedUserData,
  ActivityListOrgEventsForAuthenticatedUserParams,
  ActivityListPublicEventsForUserData,
  ActivityListPublicEventsForUserParams,
  ActivityListReceivedEventsForUserData,
  ActivityListReceivedEventsForUserParams,
  ActivityListReceivedPublicEventsForUserData,
  ActivityListReceivedPublicEventsForUserParams,
  ActivityListReposStarredByUserData,
  ActivityListReposStarredByUserParams,
  ActivityListReposWatchedByUserData,
  ActivityListReposWatchedByUserParams,
  AppsGetUserInstallationData,
  BasicError,
  EnterpriseAdminDemoteSiteAdministratorData,
  EnterpriseAdminPromoteUserToBeSiteAdministratorData,
  EnterpriseAdminSuspendUserData,
  EnterpriseAdminSuspendUserPayload,
  EnterpriseAdminUnsuspendUserData,
  EnterpriseAdminUnsuspendUserPayload,
  GistsListForUserData,
  GistsListForUserParams,
  OrgsListForUserData,
  OrgsListForUserParams,
  PackagesDeletePackageForUserData,
  PackagesDeletePackageVersionForUserData,
  PackagesGetAllPackageVersionsForPackageOwnedByUserData,
  PackagesGetPackageForUserData,
  PackagesGetPackageVersionForUserData,
  PackagesListDockerMigrationConflictingPackagesForUserData,
  PackagesListPackagesForUserData,
  PackagesListPackagesForUserParams,
  PackagesRestorePackageForUserData,
  PackagesRestorePackageForUserParams,
  PackagesRestorePackageVersionForUserData,
  ProjectsListForUserData,
  ProjectsListForUserParams,
  ReposListForUserData,
  ReposListForUserParams,
  UsersCheckFollowingForUserData,
  UsersGetByUsernameData,
  UsersGetContextForUserData,
  UsersGetContextForUserParams,
  UsersListData,
  UsersListFollowersForUserData,
  UsersListFollowersForUserParams,
  UsersListFollowingForUserData,
  UsersListFollowingForUserParams,
  UsersListGpgKeysForUserData,
  UsersListGpgKeysForUserParams,
  UsersListParams,
  UsersListPublicKeysForUserData,
  UsersListPublicKeysForUserParams,
  UsersListSocialAccountsForUserData,
  UsersListSocialAccountsForUserParams,
  UsersListSshSigningKeysForUserData,
  UsersListSshSigningKeysForUserParams,
  ValidationError,
} from "./data-contracts";
import { ContentType, HttpClient, RequestParams } from "./http-client";

export class Users<SecurityDataType = unknown> {
  http: HttpClient<SecurityDataType>;

  constructor(http: HttpClient<SecurityDataType>) {
    this.http = http;
  }

  /**
   * @description Lists all users, in the order that they signed up on GitHub Enterprise Server. This list includes personal user accounts and organization accounts. Note: Pagination is powered exclusively by the `since` parameter. Use the [Link header](https://docs.github.com/enterprise-server@3.17/rest/guides/using-pagination-in-the-rest-api#using-link-headers) to get the URL for the next page of users.
   *
   * @tags users
   * @name UsersList
   * @summary List users
   * @request GET:/users
   */
  usersList = (query: UsersListParams, params: RequestParams = {}) =>
    this.http.request<UsersListData, any>({
      path: `/users`,
      method: "GET",
      query: query,
      format: "json",
      ...params,
    });
  /**
   * @description Provides publicly available information about someone with a GitHub account. The `email` key in the following response is the publicly visible email address from your GitHub Enterprise Server [profile page](https://github.com/settings/profile). When setting up your profile, you can select a primary email address to be public which provides an email entry for this endpoint. If you do not set a public email address for `email`, then it will have a value of `null`. You only see publicly visible email addresses when authenticated with GitHub Enterprise Server. For more information, see [Authentication](https://docs.github.com/enterprise-server@3.17/rest/guides/getting-started-with-the-rest-api#authentication). The Emails API enables you to list all of your email addresses, and toggle a primary email to be visible publicly. For more information, see [Emails API](https://docs.github.com/enterprise-server@3.17/rest/users/emails).
   *
   * @tags users
   * @name UsersGetByUsername
   * @summary Get a user
   * @request GET:/users/{username}
   */
  usersGetByUsername = (username: string, params: RequestParams = {}) =>
    this.http.request<UsersGetByUsernameData, BasicError>({
      path: `/users/${username}`,
      method: "GET",
      format: "json",
      ...params,
    });
  /**
   * @description Lists all packages that are in a specific user's namespace, that the requesting user has access to, and that encountered a conflict during Docker migration. OAuth app tokens and personal access tokens (classic) need the `read:packages` scope to use this endpoint.
   *
   * @tags packages
   * @name PackagesListDockerMigrationConflictingPackagesForUser
   * @summary Get list of conflicting packages during Docker migration for user
   * @request GET:/users/{username}/docker/conflicts
   */
  packagesListDockerMigrationConflictingPackagesForUser = (
    username: string,
    params: RequestParams = {},
  ) =>
    this.http.request<
      PackagesListDockerMigrationConflictingPackagesForUserData,
      BasicError
    >({
      path: `/users/${username}/docker/conflicts`,
      method: "GET",
      format: "json",
      ...params,
    });
  /**
   * @description If you are authenticated as the given user, you will see your private events. Otherwise, you'll only see public events. _Optional_: use the fine-grained token with following permission set to view private events: "Events" user permissions (read). > [!NOTE] > This API is not built to serve real-time use cases. Depending on the time of day, event latency can be anywhere from 30s to 6h.
   *
   * @tags activity
   * @name ActivityListEventsForAuthenticatedUser
   * @summary List events for the authenticated user
   * @request GET:/users/{username}/events
   */
  activityListEventsForAuthenticatedUser = (
    { username, ...query }: ActivityListEventsForAuthenticatedUserParams,
    params: RequestParams = {},
  ) =>
    this.http.request<ActivityListEventsForAuthenticatedUserData, any>({
      path: `/users/${username}/events`,
      method: "GET",
      query: query,
      format: "json",
      ...params,
    });
  /**
   * @description This is the user's organization dashboard. You must be authenticated as the user to view this. > [!NOTE] > This API is not built to serve real-time use cases. Depending on the time of day, event latency can be anywhere from 30s to 6h.
   *
   * @tags activity
   * @name ActivityListOrgEventsForAuthenticatedUser
   * @summary List organization events for the authenticated user
   * @request GET:/users/{username}/events/orgs/{org}
   */
  activityListOrgEventsForAuthenticatedUser = (
    {
      username,
      org,
      ...query
    }: ActivityListOrgEventsForAuthenticatedUserParams,
    params: RequestParams = {},
  ) =>
    this.http.request<ActivityListOrgEventsForAuthenticatedUserData, any>({
      path: `/users/${username}/events/orgs/${org}`,
      method: "GET",
      query: query,
      format: "json",
      ...params,
    });
  /**
   * @description > [!NOTE] > This API is not built to serve real-time use cases. Depending on the time of day, event latency can be anywhere from 30s to 6h.
   *
   * @tags activity
   * @name ActivityListPublicEventsForUser
   * @summary List public events for a user
   * @request GET:/users/{username}/events/public
   */
  activityListPublicEventsForUser = (
    { username, ...query }: ActivityListPublicEventsForUserParams,
    params: RequestParams = {},
  ) =>
    this.http.request<ActivityListPublicEventsForUserData, any>({
      path: `/users/${username}/events/public`,
      method: "GET",
      query: query,
      format: "json",
      ...params,
    });
  /**
   * @description Lists the people following the specified user.
   *
   * @tags users
   * @name UsersListFollowersForUser
   * @summary List followers of a user
   * @request GET:/users/{username}/followers
   */
  usersListFollowersForUser = (
    { username, ...query }: UsersListFollowersForUserParams,
    params: RequestParams = {},
  ) =>
    this.http.request<UsersListFollowersForUserData, any>({
      path: `/users/${username}/followers`,
      method: "GET",
      query: query,
      format: "json",
      ...params,
    });
  /**
   * @description Lists the people who the specified user follows.
   *
   * @tags users
   * @name UsersListFollowingForUser
   * @summary List the people a user follows
   * @request GET:/users/{username}/following
   */
  usersListFollowingForUser = (
    { username, ...query }: UsersListFollowingForUserParams,
    params: RequestParams = {},
  ) =>
    this.http.request<UsersListFollowingForUserData, any>({
      path: `/users/${username}/following`,
      method: "GET",
      query: query,
      format: "json",
      ...params,
    });
  /**
   * No description
   *
   * @tags users
   * @name UsersCheckFollowingForUser
   * @summary Check if a user follows another user
   * @request GET:/users/{username}/following/{target_user}
   */
  usersCheckFollowingForUser = (
    username: string,
    targetUser: string,
    params: RequestParams = {},
  ) =>
    this.http.request<UsersCheckFollowingForUserData, void>({
      path: `/users/${username}/following/${targetUser}`,
      method: "GET",
      ...params,
    });
  /**
   * @description Lists public gists for the specified user:
   *
   * @tags gists
   * @name GistsListForUser
   * @summary List gists for a user
   * @request GET:/users/{username}/gists
   */
  gistsListForUser = (
    { username, ...query }: GistsListForUserParams,
    params: RequestParams = {},
  ) =>
    this.http.request<GistsListForUserData, ValidationError>({
      path: `/users/${username}/gists`,
      method: "GET",
      query: query,
      format: "json",
      ...params,
    });
  /**
   * @description Lists the GPG keys for a user. This information is accessible by anyone.
   *
   * @tags users
   * @name UsersListGpgKeysForUser
   * @summary List GPG keys for a user
   * @request GET:/users/{username}/gpg_keys
   */
  usersListGpgKeysForUser = (
    { username, ...query }: UsersListGpgKeysForUserParams,
    params: RequestParams = {},
  ) =>
    this.http.request<UsersListGpgKeysForUserData, any>({
      path: `/users/${username}/gpg_keys`,
      method: "GET",
      query: query,
      format: "json",
      ...params,
    });
  /**
   * @description Provides hovercard information. You can find out more about someone in relation to their pull requests, issues, repositories, and organizations. The `subject_type` and `subject_id` parameters provide context for the person's hovercard, which returns more information than without the parameters. For example, if you wanted to find out more about `octocat` who owns the `Spoon-Knife` repository, you would use a `subject_type` value of `repository` and a `subject_id` value of `1300192` (the ID of the `Spoon-Knife` repository). OAuth app tokens and personal access tokens (classic) need the `repo` scope to use this endpoint.
   *
   * @tags users
   * @name UsersGetContextForUser
   * @summary Get contextual information for a user
   * @request GET:/users/{username}/hovercard
   */
  usersGetContextForUser = (
    { username, ...query }: UsersGetContextForUserParams,
    params: RequestParams = {},
  ) =>
    this.http.request<UsersGetContextForUserData, BasicError | ValidationError>(
      {
        path: `/users/${username}/hovercard`,
        method: "GET",
        query: query,
        format: "json",
        ...params,
      },
    );
  /**
   * @description Enables an authenticated GitHub App to find the user’s installation information. You must use a [JWT](https://docs.github.com/enterprise-server@3.17/apps/building-github-apps/authenticating-with-github-apps/#authenticating-as-a-github-app) to access this endpoint.
   *
   * @tags apps
   * @name AppsGetUserInstallation
   * @summary Get a user installation for the authenticated app
   * @request GET:/users/{username}/installation
   */
  appsGetUserInstallation = (username: string, params: RequestParams = {}) =>
    this.http.request<AppsGetUserInstallationData, any>({
      path: `/users/${username}/installation`,
      method: "GET",
      format: "json",
      ...params,
    });
  /**
   * @description Lists the _verified_ public SSH keys for a user. This is accessible by anyone.
   *
   * @tags users
   * @name UsersListPublicKeysForUser
   * @summary List public keys for a user
   * @request GET:/users/{username}/keys
   */
  usersListPublicKeysForUser = (
    { username, ...query }: UsersListPublicKeysForUserParams,
    params: RequestParams = {},
  ) =>
    this.http.request<UsersListPublicKeysForUserData, any>({
      path: `/users/${username}/keys`,
      method: "GET",
      query: query,
      format: "json",
      ...params,
    });
  /**
   * @description List [public organization memberships](https://docs.github.com/enterprise-server@3.17/articles/publicizing-or-concealing-organization-membership) for the specified user. This method only lists _public_ memberships, regardless of authentication. If you need to fetch all of the organization memberships (public and private) for the authenticated user, use the [List organizations for the authenticated user](https://docs.github.com/enterprise-server@3.17/rest/orgs/orgs#list-organizations-for-the-authenticated-user) API instead.
   *
   * @tags orgs
   * @name OrgsListForUser
   * @summary List organizations for a user
   * @request GET:/users/{username}/orgs
   */
  orgsListForUser = (
    { username, ...query }: OrgsListForUserParams,
    params: RequestParams = {},
  ) =>
    this.http.request<OrgsListForUserData, any>({
      path: `/users/${username}/orgs`,
      method: "GET",
      query: query,
      format: "json",
      ...params,
    });
  /**
   * @description Lists all packages in a user's namespace for which the requesting user has access. OAuth app tokens and personal access tokens (classic) need the `read:packages` scope to use this endpoint. For more information, see "[About permissions for GitHub Packages](https://docs.github.com/enterprise-server@3.17/packages/learn-github-packages/about-permissions-for-github-packages#permissions-for-repository-scoped-packages)."
   *
   * @tags packages
   * @name PackagesListPackagesForUser
   * @summary List packages for a user
   * @request GET:/users/{username}/packages
   */
  packagesListPackagesForUser = (
    { username, ...query }: PackagesListPackagesForUserParams,
    params: RequestParams = {},
  ) =>
    this.http.request<PackagesListPackagesForUserData, BasicError>({
      path: `/users/${username}/packages`,
      method: "GET",
      query: query,
      format: "json",
      ...params,
    });
  /**
   * @description Gets a specific package metadata for a public package owned by a user. OAuth app tokens and personal access tokens (classic) need the `read:packages` scope to use this endpoint. For more information, see "[About permissions for GitHub Packages](https://docs.github.com/enterprise-server@3.17/packages/learn-github-packages/about-permissions-for-github-packages#permissions-for-repository-scoped-packages)."
   *
   * @tags packages
   * @name PackagesGetPackageForUser
   * @summary Get a package for a user
   * @request GET:/users/{username}/packages/{package_type}/{package_name}
   */
  packagesGetPackageForUser = (
    packageType:
      | "npm"
      | "maven"
      | "rubygems"
      | "docker"
      | "nuget"
      | "container",
    packageName: string,
    username: string,
    params: RequestParams = {},
  ) =>
    this.http.request<PackagesGetPackageForUserData, any>({
      path: `/users/${username}/packages/${packageType}/${packageName}`,
      method: "GET",
      format: "json",
      ...params,
    });
  /**
   * @description Deletes an entire package for a user. You cannot delete a public package if any version of the package has more than 5,000 downloads. In this scenario, contact GitHub support for further assistance. If the `package_type` belongs to a GitHub Packages registry that supports granular permissions, the authenticated user must have admin permissions to the package. For the list of these registries, see "[About permissions for GitHub Packages](https://docs.github.com/enterprise-server@3.17/packages/learn-github-packages/about-permissions-for-github-packages#granular-permissions-for-userorganization-scoped-packages)." OAuth app tokens and personal access tokens (classic) need the `read:packages` and `delete:packages` scopes to use this endpoint. For more information, see "[About permissions for GitHub Packages](https://docs.github.com/enterprise-server@3.17/packages/learn-github-packages/about-permissions-for-github-packages#permissions-for-repository-scoped-packages)."
   *
   * @tags packages
   * @name PackagesDeletePackageForUser
   * @summary Delete a package for a user
   * @request DELETE:/users/{username}/packages/{package_type}/{package_name}
   */
  packagesDeletePackageForUser = (
    packageType:
      | "npm"
      | "maven"
      | "rubygems"
      | "docker"
      | "nuget"
      | "container",
    packageName: string,
    username: string,
    params: RequestParams = {},
  ) =>
    this.http.request<PackagesDeletePackageForUserData, BasicError>({
      path: `/users/${username}/packages/${packageType}/${packageName}`,
      method: "DELETE",
      ...params,
    });
  /**
   * @description Restores an entire package for a user. You can restore a deleted package under the following conditions: - The package was deleted within the last 30 days. - The same package namespace and version is still available and not reused for a new package. If the same package namespace is not available, you will not be able to restore your package. In this scenario, to restore the deleted package, you must delete the new package that uses the deleted package's namespace first. If the `package_type` belongs to a GitHub Packages registry that supports granular permissions, the authenticated user must have admin permissions to the package. For the list of these registries, see "[About permissions for GitHub Packages](https://docs.github.com/enterprise-server@3.17/packages/learn-github-packages/about-permissions-for-github-packages#granular-permissions-for-userorganization-scoped-packages)." OAuth app tokens and personal access tokens (classic) need the `read:packages` and `write:packages` scopes to use this endpoint. For more information, see "[About permissions for GitHub Packages](https://docs.github.com/enterprise-server@3.17/packages/learn-github-packages/about-permissions-for-github-packages#permissions-for-repository-scoped-packages)."
   *
   * @tags packages
   * @name PackagesRestorePackageForUser
   * @summary Restore a package for a user
   * @request POST:/users/{username}/packages/{package_type}/{package_name}/restore
   */
  packagesRestorePackageForUser = (
    {
      packageType,
      packageName,
      username,
      ...query
    }: PackagesRestorePackageForUserParams,
    params: RequestParams = {},
  ) =>
    this.http.request<PackagesRestorePackageForUserData, BasicError>({
      path: `/users/${username}/packages/${packageType}/${packageName}/restore`,
      method: "POST",
      query: query,
      ...params,
    });
  /**
   * @description Lists package versions for a public package owned by a specified user. OAuth app tokens and personal access tokens (classic) need the `read:packages` scope to use this endpoint. For more information, see "[About permissions for GitHub Packages](https://docs.github.com/enterprise-server@3.17/packages/learn-github-packages/about-permissions-for-github-packages#permissions-for-repository-scoped-packages)."
   *
   * @tags packages
   * @name PackagesGetAllPackageVersionsForPackageOwnedByUser
   * @summary List package versions for a package owned by a user
   * @request GET:/users/{username}/packages/{package_type}/{package_name}/versions
   */
  packagesGetAllPackageVersionsForPackageOwnedByUser = (
    packageType:
      | "npm"
      | "maven"
      | "rubygems"
      | "docker"
      | "nuget"
      | "container",
    packageName: string,
    username: string,
    params: RequestParams = {},
  ) =>
    this.http.request<
      PackagesGetAllPackageVersionsForPackageOwnedByUserData,
      BasicError
    >({
      path: `/users/${username}/packages/${packageType}/${packageName}/versions`,
      method: "GET",
      format: "json",
      ...params,
    });
  /**
   * @description Gets a specific package version for a public package owned by a specified user. OAuth app tokens and personal access tokens (classic) need the `read:packages` scope to use this endpoint. For more information, see "[About permissions for GitHub Packages](https://docs.github.com/enterprise-server@3.17/packages/learn-github-packages/about-permissions-for-github-packages#permissions-for-repository-scoped-packages)."
   *
   * @tags packages
   * @name PackagesGetPackageVersionForUser
   * @summary Get a package version for a user
   * @request GET:/users/{username}/packages/{package_type}/{package_name}/versions/{package_version_id}
   */
  packagesGetPackageVersionForUser = (
    packageType:
      | "npm"
      | "maven"
      | "rubygems"
      | "docker"
      | "nuget"
      | "container",
    packageName: string,
    packageVersionId: number,
    username: string,
    params: RequestParams = {},
  ) =>
    this.http.request<PackagesGetPackageVersionForUserData, any>({
      path: `/users/${username}/packages/${packageType}/${packageName}/versions/${packageVersionId}`,
      method: "GET",
      format: "json",
      ...params,
    });
  /**
   * @description Deletes a specific package version for a user. If the package is public and the package version has more than 5,000 downloads, you cannot delete the package version. In this scenario, contact GitHub support for further assistance. If the `package_type` belongs to a GitHub Packages registry that supports granular permissions, the authenticated user must have admin permissions to the package. For the list of these registries, see "[About permissions for GitHub Packages](https://docs.github.com/enterprise-server@3.17/packages/learn-github-packages/about-permissions-for-github-packages#granular-permissions-for-userorganization-scoped-packages)." OAuth app tokens and personal access tokens (classic) need the `read:packages` and `delete:packages` scopes to use this endpoint. For more information, see "[About permissions for GitHub Packages](https://docs.github.com/enterprise-server@3.17/packages/learn-github-packages/about-permissions-for-github-packages#permissions-for-repository-scoped-packages)."
   *
   * @tags packages
   * @name PackagesDeletePackageVersionForUser
   * @summary Delete package version for a user
   * @request DELETE:/users/{username}/packages/{package_type}/{package_name}/versions/{package_version_id}
   */
  packagesDeletePackageVersionForUser = (
    packageType:
      | "npm"
      | "maven"
      | "rubygems"
      | "docker"
      | "nuget"
      | "container",
    packageName: string,
    username: string,
    packageVersionId: number,
    params: RequestParams = {},
  ) =>
    this.http.request<PackagesDeletePackageVersionForUserData, BasicError>({
      path: `/users/${username}/packages/${packageType}/${packageName}/versions/${packageVersionId}`,
      method: "DELETE",
      ...params,
    });
  /**
   * @description Restores a specific package version for a user. You can restore a deleted package under the following conditions: - The package was deleted within the last 30 days. - The same package namespace and version is still available and not reused for a new package. If the same package namespace is not available, you will not be able to restore your package. In this scenario, to restore the deleted package, you must delete the new package that uses the deleted package's namespace first. If the `package_type` belongs to a GitHub Packages registry that supports granular permissions, the authenticated user must have admin permissions to the package. For the list of these registries, see "[About permissions for GitHub Packages](https://docs.github.com/enterprise-server@3.17/packages/learn-github-packages/about-permissions-for-github-packages#granular-permissions-for-userorganization-scoped-packages)." OAuth app tokens and personal access tokens (classic) need the `read:packages` and `write:packages` scopes to use this endpoint. For more information, see "[About permissions for GitHub Packages](https://docs.github.com/enterprise-server@3.17/packages/learn-github-packages/about-permissions-for-github-packages#permissions-for-repository-scoped-packages)."
   *
   * @tags packages
   * @name PackagesRestorePackageVersionForUser
   * @summary Restore package version for a user
   * @request POST:/users/{username}/packages/{package_type}/{package_name}/versions/{package_version_id}/restore
   */
  packagesRestorePackageVersionForUser = (
    packageType:
      | "npm"
      | "maven"
      | "rubygems"
      | "docker"
      | "nuget"
      | "container",
    packageName: string,
    username: string,
    packageVersionId: number,
    params: RequestParams = {},
  ) =>
    this.http.request<PackagesRestorePackageVersionForUserData, BasicError>({
      path: `/users/${username}/packages/${packageType}/${packageName}/versions/${packageVersionId}/restore`,
      method: "POST",
      ...params,
    });
  /**
   * @description > [!WARNING] > **Closing down notice:** Projects (classic) is being deprecated in favor of the new Projects experience. > See the [changelog](https://github.blog/changelog/2024-05-23-sunset-notice-projects-classic/) for more information.
   *
   * @tags projects
   * @name ProjectsListForUser
   * @summary List user projects
   * @request GET:/users/{username}/projects
   * @deprecated
   */
  projectsListForUser = (
    { username, ...query }: ProjectsListForUserParams,
    params: RequestParams = {},
  ) =>
    this.http.request<ProjectsListForUserData, ValidationError>({
      path: `/users/${username}/projects`,
      method: "GET",
      query: query,
      format: "json",
      ...params,
    });
  /**
   * @description These are events that you've received by watching repositories and following users. If you are authenticated as the given user, you will see private events. Otherwise, you'll only see public events. > [!NOTE] > This API is not built to serve real-time use cases. Depending on the time of day, event latency can be anywhere from 30s to 6h.
   *
   * @tags activity
   * @name ActivityListReceivedEventsForUser
   * @summary List events received by the authenticated user
   * @request GET:/users/{username}/received_events
   */
  activityListReceivedEventsForUser = (
    { username, ...query }: ActivityListReceivedEventsForUserParams,
    params: RequestParams = {},
  ) =>
    this.http.request<ActivityListReceivedEventsForUserData, any>({
      path: `/users/${username}/received_events`,
      method: "GET",
      query: query,
      format: "json",
      ...params,
    });
  /**
   * @description > [!NOTE] > This API is not built to serve real-time use cases. Depending on the time of day, event latency can be anywhere from 30s to 6h.
   *
   * @tags activity
   * @name ActivityListReceivedPublicEventsForUser
   * @summary List public events received by a user
   * @request GET:/users/{username}/received_events/public
   */
  activityListReceivedPublicEventsForUser = (
    { username, ...query }: ActivityListReceivedPublicEventsForUserParams,
    params: RequestParams = {},
  ) =>
    this.http.request<ActivityListReceivedPublicEventsForUserData, any>({
      path: `/users/${username}/received_events/public`,
      method: "GET",
      query: query,
      format: "json",
      ...params,
    });
  /**
   * @description Lists public repositories for the specified user.
   *
   * @tags repos
   * @name ReposListForUser
   * @summary List repositories for a user
   * @request GET:/users/{username}/repos
   */
  reposListForUser = (
    { username, ...query }: ReposListForUserParams,
    params: RequestParams = {},
  ) =>
    this.http.request<ReposListForUserData, any>({
      path: `/users/${username}/repos`,
      method: "GET",
      query: query,
      format: "json",
      ...params,
    });
  /**
   * @description Note that you'll need to set `Content-Length` to zero when calling out to this endpoint. For more information, see "[HTTP method](https://docs.github.com/enterprise-server@3.17/rest/guides/getting-started-with-the-rest-api#http-method)."
   *
   * @tags enterprise-admin
   * @name EnterpriseAdminPromoteUserToBeSiteAdministrator
   * @summary Promote a user to be a site administrator
   * @request PUT:/users/{username}/site_admin
   */
  enterpriseAdminPromoteUserToBeSiteAdministrator = (
    username: string,
    params: RequestParams = {},
  ) =>
    this.http.request<EnterpriseAdminPromoteUserToBeSiteAdministratorData, any>(
      {
        path: `/users/${username}/site_admin`,
        method: "PUT",
        ...params,
      },
    );
  /**
   * @description You can demote any user account except your own.
   *
   * @tags enterprise-admin
   * @name EnterpriseAdminDemoteSiteAdministrator
   * @summary Demote a site administrator
   * @request DELETE:/users/{username}/site_admin
   */
  enterpriseAdminDemoteSiteAdministrator = (
    username: string,
    params: RequestParams = {},
  ) =>
    this.http.request<EnterpriseAdminDemoteSiteAdministratorData, any>({
      path: `/users/${username}/site_admin`,
      method: "DELETE",
      ...params,
    });
  /**
   * @description Lists social media accounts for a user. This endpoint is accessible by anyone.
   *
   * @tags users
   * @name UsersListSocialAccountsForUser
   * @summary List social accounts for a user
   * @request GET:/users/{username}/social_accounts
   */
  usersListSocialAccountsForUser = (
    { username, ...query }: UsersListSocialAccountsForUserParams,
    params: RequestParams = {},
  ) =>
    this.http.request<UsersListSocialAccountsForUserData, any>({
      path: `/users/${username}/social_accounts`,
      method: "GET",
      query: query,
      format: "json",
      ...params,
    });
  /**
   * @description Lists the SSH signing keys for a user. This operation is accessible by anyone.
   *
   * @tags users
   * @name UsersListSshSigningKeysForUser
   * @summary List SSH signing keys for a user
   * @request GET:/users/{username}/ssh_signing_keys
   */
  usersListSshSigningKeysForUser = (
    { username, ...query }: UsersListSshSigningKeysForUserParams,
    params: RequestParams = {},
  ) =>
    this.http.request<UsersListSshSigningKeysForUserData, any>({
      path: `/users/${username}/ssh_signing_keys`,
      method: "GET",
      query: query,
      format: "json",
      ...params,
    });
  /**
   * @description Lists repositories a user has starred. This endpoint supports the following custom media types. For more information, see "[Media types](https://docs.github.com/enterprise-server@3.17/rest/using-the-rest-api/getting-started-with-the-rest-api#media-types)." - **`application/vnd.github.star+json`**: Includes a timestamp of when the star was created.
   *
   * @tags activity
   * @name ActivityListReposStarredByUser
   * @summary List repositories starred by a user
   * @request GET:/users/{username}/starred
   */
  activityListReposStarredByUser = (
    { username, ...query }: ActivityListReposStarredByUserParams,
    params: RequestParams = {},
  ) =>
    this.http.request<ActivityListReposStarredByUserData, any>({
      path: `/users/${username}/starred`,
      method: "GET",
      query: query,
      format: "json",
      ...params,
    });
  /**
   * @description Lists repositories a user is watching.
   *
   * @tags activity
   * @name ActivityListReposWatchedByUser
   * @summary List repositories watched by a user
   * @request GET:/users/{username}/subscriptions
   */
  activityListReposWatchedByUser = (
    { username, ...query }: ActivityListReposWatchedByUserParams,
    params: RequestParams = {},
  ) =>
    this.http.request<ActivityListReposWatchedByUserData, any>({
      path: `/users/${username}/subscriptions`,
      method: "GET",
      query: query,
      format: "json",
      ...params,
    });
  /**
   * @description If your GitHub instance uses [LDAP Sync with Active Directory LDAP servers](https://docs.github.com/enterprise-server@3.17/admin/identity-and-access-management/using-ldap-for-enterprise-iam/using-ldap), Active Directory LDAP-authenticated users cannot be suspended through this API. If you attempt to suspend an Active Directory LDAP-authenticated user through this API, it will return a `403` response. You can suspend any user account except your own. Note that, if you choose not to pass any parameters, you'll need to set `Content-Length` to zero when calling out to this endpoint. For more information, see "[HTTP method](https://docs.github.com/enterprise-server@3.17/rest/guides/getting-started-with-the-rest-api#http-method)."
   *
   * @tags enterprise-admin
   * @name EnterpriseAdminSuspendUser
   * @summary Suspend a user
   * @request PUT:/users/{username}/suspended
   */
  enterpriseAdminSuspendUser = (
    username: string,
    data?: EnterpriseAdminSuspendUserPayload,
    params: RequestParams = {},
  ) =>
    this.http.request<EnterpriseAdminSuspendUserData, any>({
      path: `/users/${username}/suspended`,
      method: "PUT",
      body: data,
      type: ContentType.Json,
      ...params,
    });
  /**
   * @description If your GitHub instance uses [LDAP Sync with Active Directory LDAP servers](https://docs.github.com/enterprise-server@3.17/admin/identity-and-access-management/using-ldap-for-enterprise-iam/using-ldap), this API is disabled and will return a `403` response. Active Directory LDAP-authenticated users cannot be unsuspended using the API.
   *
   * @tags enterprise-admin
   * @name EnterpriseAdminUnsuspendUser
   * @summary Unsuspend a user
   * @request DELETE:/users/{username}/suspended
   */
  enterpriseAdminUnsuspendUser = (
    username: string,
    data: EnterpriseAdminUnsuspendUserPayload,
    params: RequestParams = {},
  ) =>
    this.http.request<EnterpriseAdminUnsuspendUserData, any>({
      path: `/users/${username}/suspended`,
      method: "DELETE",
      body: data,
      type: ContentType.Json,
      ...params,
    });
}
