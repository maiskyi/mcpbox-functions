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
  ActionsAddCustomLabelsToSelfHostedRunnerForOrgPayload,
  ActionsAddRepoAccessToSelfHostedRunnerGroupInOrgData,
  ActionsAddSelectedRepoToOrgSecretData,
  ActionsAddSelectedRepoToOrgVariableData,
  ActionsAddSelfHostedRunnerToGroupForOrgData,
  ActionsCreateOrgVariableData,
  ActionsCreateOrgVariablePayload,
  ActionsCreateOrUpdateOrgSecretData,
  ActionsCreateOrUpdateOrgSecretPayload,
  ActionsCreateRegistrationTokenForOrgData,
  ActionsCreateRemoveTokenForOrgData,
  ActionsCreateSelfHostedRunnerGroupForOrgData,
  ActionsCreateSelfHostedRunnerGroupForOrgPayload,
  ActionsDeleteOrgSecretData,
  ActionsDeleteOrgVariableData,
  ActionsDeleteSelfHostedRunnerFromOrgData,
  ActionsDeleteSelfHostedRunnerGroupFromOrgData,
  ActionsDisableSelectedRepositoryGithubActionsOrganizationData,
  ActionsEnableSelectedRepositoryGithubActionsOrganizationData,
  ActionsGenerateRunnerJitconfigForOrgPayload,
  ActionsGetActionsCacheUsageByRepoForOrgData,
  ActionsGetActionsCacheUsageByRepoForOrgParams,
  ActionsGetActionsCacheUsageForOrgData,
  ActionsGetAllowedActionsOrganizationData,
  ActionsGetGithubActionsDefaultWorkflowPermissionsOrganizationData,
  ActionsGetGithubActionsPermissionsOrganizationData,
  ActionsGetOrgPublicKeyData,
  ActionsGetOrgSecretData,
  ActionsGetOrgVariableData,
  ActionsGetSelfHostedRunnerForOrgData,
  ActionsGetSelfHostedRunnerGroupForOrgData,
  ActionsListOrgSecretsData,
  ActionsListOrgSecretsParams,
  ActionsListOrgVariablesData,
  ActionsListOrgVariablesParams,
  ActionsListRepoAccessToSelfHostedRunnerGroupInOrgData,
  ActionsListRepoAccessToSelfHostedRunnerGroupInOrgParams,
  ActionsListRunnerApplicationsForOrgData,
  ActionsListSelectedReposForOrgSecretData,
  ActionsListSelectedReposForOrgSecretParams,
  ActionsListSelectedReposForOrgVariableData,
  ActionsListSelectedReposForOrgVariableParams,
  ActionsListSelectedRepositoriesEnabledGithubActionsOrganizationData,
  ActionsListSelectedRepositoriesEnabledGithubActionsOrganizationParams,
  ActionsListSelfHostedRunnerGroupsForOrgData,
  ActionsListSelfHostedRunnerGroupsForOrgParams,
  ActionsListSelfHostedRunnersForOrgData,
  ActionsListSelfHostedRunnersForOrgParams,
  ActionsListSelfHostedRunnersInGroupForOrgData,
  ActionsListSelfHostedRunnersInGroupForOrgParams,
  ActionsRemoveRepoAccessToSelfHostedRunnerGroupInOrgData,
  ActionsRemoveSelectedRepoFromOrgSecretData,
  ActionsRemoveSelectedRepoFromOrgVariableData,
  ActionsRemoveSelfHostedRunnerFromGroupForOrgData,
  ActionsSetAllowedActionsOrganizationData,
  ActionsSetCustomLabelsForSelfHostedRunnerForOrgPayload,
  ActionsSetDefaultWorkflowPermissions,
  ActionsSetGithubActionsDefaultWorkflowPermissionsOrganizationData,
  ActionsSetGithubActionsPermissionsOrganizationData,
  ActionsSetGithubActionsPermissionsOrganizationPayload,
  ActionsSetRepoAccessToSelfHostedRunnerGroupInOrgData,
  ActionsSetRepoAccessToSelfHostedRunnerGroupInOrgPayload,
  ActionsSetSelectedReposForOrgSecretData,
  ActionsSetSelectedReposForOrgSecretPayload,
  ActionsSetSelectedReposForOrgVariableData,
  ActionsSetSelectedReposForOrgVariablePayload,
  ActionsSetSelectedRepositoriesEnabledGithubActionsOrganizationData,
  ActionsSetSelectedRepositoriesEnabledGithubActionsOrganizationPayload,
  ActionsSetSelfHostedRunnersInGroupForOrgData,
  ActionsSetSelfHostedRunnersInGroupForOrgPayload,
  ActionsUpdateOrgVariableData,
  ActionsUpdateOrgVariablePayload,
  ActionsUpdateSelfHostedRunnerGroupForOrgData,
  ActionsUpdateSelfHostedRunnerGroupForOrgPayload,
  ActivityListPublicOrgEventsData,
  ActivityListPublicOrgEventsParams,
  Announcement,
  AnnouncementBannersGetAnnouncementBannerForOrgData,
  AnnouncementBannersRemoveAnnouncementBannerForOrgData,
  AnnouncementBannersSetAnnouncementBannerForOrgData,
  AppsGetOrgInstallationData,
  BasicError,
  BillingGetGithubAdvancedSecurityBillingOrgData,
  BillingGetGithubAdvancedSecurityBillingOrgParams,
  CodeScanningListAlertsForOrgData,
  CodeScanningListAlertsForOrgParams,
  CodeSecurityAttachConfigurationPayload,
  CodeSecurityCreateConfigurationData,
  CodeSecurityCreateConfigurationPayload,
  CodeSecurityDetachConfigurationPayload,
  CodeSecurityGetConfigurationData,
  CodeSecurityGetConfigurationsForOrgData,
  CodeSecurityGetConfigurationsForOrgParams,
  CodeSecurityGetDefaultConfigurationsData,
  CodeSecurityGetRepositoriesForConfigurationData,
  CodeSecurityGetRepositoriesForConfigurationParams,
  CodeSecuritySetConfigurationAsDefaultData,
  CodeSecuritySetConfigurationAsDefaultPayload,
  CodeSecurityUpdateConfigurationData,
  CodeSecurityUpdateConfigurationPayload,
  CustomPropertySetPayload,
  DependabotAddSelectedRepoToOrgSecretData,
  DependabotCreateOrUpdateOrgSecretData,
  DependabotCreateOrUpdateOrgSecretPayload,
  DependabotDeleteOrgSecretData,
  DependabotGetOrgPublicKeyData,
  DependabotGetOrgSecretData,
  DependabotListAlertsForOrgData,
  DependabotListAlertsForOrgParams,
  DependabotListOrgSecretsData,
  DependabotListOrgSecretsParams,
  DependabotListSelectedReposForOrgSecretData,
  DependabotListSelectedReposForOrgSecretParams,
  DependabotRemoveSelectedRepoFromOrgSecretData,
  DependabotSetSelectedReposForOrgSecretData,
  DependabotSetSelectedReposForOrgSecretPayload,
  EnterpriseAdminGetPreReceiveHookForOrgData,
  EnterpriseAdminListPreReceiveHooksForOrgData,
  EnterpriseAdminListPreReceiveHooksForOrgParams,
  EnterpriseAdminRemovePreReceiveHookEnforcementForOrgData,
  EnterpriseAdminUpdatePreReceiveHookEnforcementForOrgData,
  EnterpriseAdminUpdatePreReceiveHookEnforcementForOrgPayload,
  IssuesListForOrgData,
  IssuesListForOrgParams,
  MigrationsDeleteArchiveForOrgData,
  MigrationsGetStatusForOrgData,
  MigrationsGetStatusForOrgParams,
  MigrationsListForOrgData,
  MigrationsListForOrgParams,
  MigrationsListReposForOrgData,
  MigrationsListReposForOrgParams,
  MigrationsStartForOrgData,
  MigrationsStartForOrgPayload,
  MigrationsUnlockRepoForOrgData,
  OidcCustomSub,
  OidcGetOidcCustomSubTemplateForOrgData,
  OidcUpdateOidcCustomSubTemplateForOrgData,
  OrganizationCustomOrganizationRoleCreateSchema,
  OrganizationCustomOrganizationRoleUpdateSchema,
  OrganizationCustomRepositoryRoleCreateSchema,
  OrganizationCustomRepositoryRoleUpdateSchema,
  OrgsAddSecurityManagerTeamData,
  OrgsAssignTeamToOrgRoleData,
  OrgsAssignUserToOrgRoleData,
  OrgsCheckMembershipForUserData,
  OrgsCheckPublicMembershipForUserData,
  OrgsConvertMemberToOutsideCollaboratorData,
  OrgsConvertMemberToOutsideCollaboratorPayload,
  OrgsCreateCustomOrganizationRoleData,
  OrgsCreateCustomRepoRoleData,
  OrgsCreateOrUpdateCustomPropertiesData,
  OrgsCreateOrUpdateCustomPropertiesPayload,
  OrgsCreateOrUpdateCustomPropertiesValuesForReposData,
  OrgsCreateOrUpdateCustomPropertiesValuesForReposPayload,
  OrgsCreateOrUpdateCustomPropertyData,
  OrgsCreateWebhookData,
  OrgsCreateWebhookPayload,
  OrgsDeleteCustomOrganizationRoleData,
  OrgsDeleteCustomRepoRoleData,
  OrgsDeleteWebhookData,
  OrgsEnableOrDisableSecurityProductOnAllOrgReposData,
  OrgsEnableOrDisableSecurityProductOnAllOrgReposPayload,
  OrgsGetAllCustomPropertiesData,
  OrgsGetAuditLogData,
  OrgsGetAuditLogParams,
  OrgsGetCustomPropertyData,
  OrgsGetCustomRepoRoleData,
  OrgsGetData,
  OrgsGetMembershipForUserData,
  OrgsGetOrgRoleData,
  OrgsGetWebhookConfigForOrgData,
  OrgsGetWebhookData,
  OrgsGetWebhookDeliveryData,
  OrgsListAppInstallationsData,
  OrgsListAppInstallationsParams,
  OrgsListCustomPropertiesValuesForReposData,
  OrgsListCustomPropertiesValuesForReposParams,
  OrgsListCustomRepoRolesData,
  OrgsListMembersData,
  OrgsListMembersParams,
  OrgsListOrganizationFineGrainedPermissionsData,
  OrgsListOrgRolesData,
  OrgsListOrgRoleTeamsData,
  OrgsListOrgRoleTeamsParams,
  OrgsListOrgRoleUsersData,
  OrgsListOrgRoleUsersParams,
  OrgsListOutsideCollaboratorsData,
  OrgsListOutsideCollaboratorsParams,
  OrgsListPatGrantRepositoriesData,
  OrgsListPatGrantRepositoriesParams,
  OrgsListPatGrantRequestRepositoriesData,
  OrgsListPatGrantRequestRepositoriesParams,
  OrgsListPatGrantRequestsData,
  OrgsListPatGrantRequestsParams,
  OrgsListPatGrantsData,
  OrgsListPatGrantsParams,
  OrgsListPublicMembersData,
  OrgsListPublicMembersParams,
  OrgsListPushBypassRequestsData,
  OrgsListPushBypassRequestsParams,
  OrgsListRepoFineGrainedPermissionsData,
  OrgsListSecurityManagerTeamsData,
  OrgsListWebhookDeliveriesData,
  OrgsListWebhookDeliveriesParams,
  OrgsListWebhooksData,
  OrgsListWebhooksParams,
  OrgsPatchCustomOrganizationRoleData,
  OrgsPingWebhookData,
  OrgsRemoveMemberData,
  OrgsRemoveMembershipForUserData,
  OrgsRemoveOutsideCollaboratorData,
  OrgsRemoveOutsideCollaboratorError,
  OrgsRemovePublicMembershipForAuthenticatedUserData,
  OrgsRemoveSecurityManagerTeamData,
  OrgsReviewPatGrantRequestPayload,
  OrgsReviewPatGrantRequestsInBulkPayload,
  OrgsRevokeAllOrgRolesTeamData,
  OrgsRevokeAllOrgRolesUserData,
  OrgsRevokeOrgRoleTeamData,
  OrgsRevokeOrgRoleUserData,
  OrgsSetMembershipForUserData,
  OrgsSetMembershipForUserPayload,
  OrgsSetPublicMembershipForAuthenticatedUserData,
  OrgsUpdateCustomRepoRoleData,
  OrgsUpdateData,
  OrgsUpdateError,
  OrgsUpdatePatAccessesPayload,
  OrgsUpdatePatAccessPayload,
  OrgsUpdatePayload,
  OrgsUpdateWebhookConfigForOrgData,
  OrgsUpdateWebhookConfigForOrgPayload,
  OrgsUpdateWebhookData,
  OrgsUpdateWebhookPayload,
  PackagesDeletePackageForOrgData,
  PackagesDeletePackageVersionForOrgData,
  PackagesGetAllPackageVersionsForPackageOwnedByOrgData,
  PackagesGetAllPackageVersionsForPackageOwnedByOrgParams,
  PackagesGetPackageForOrganizationData,
  PackagesGetPackageVersionForOrganizationData,
  PackagesListDockerMigrationConflictingPackagesForOrganizationData,
  PackagesListPackagesForOrganizationData,
  PackagesListPackagesForOrganizationParams,
  PackagesRestorePackageForOrgData,
  PackagesRestorePackageForOrgParams,
  PackagesRestorePackageVersionForOrgData,
  PrivateRegistriesDeleteOrgPrivateRegistryData,
  PrivateRegistriesGetOrgPrivateRegistryData,
  PrivateRegistriesGetOrgPublicKeyData,
  PrivateRegistriesListOrgPrivateRegistriesData,
  PrivateRegistriesListOrgPrivateRegistriesParams,
  PrivateRegistriesUpdateOrgPrivateRegistryData,
  PrivateRegistriesUpdateOrgPrivateRegistryPayload,
  ProjectsCreateForOrgData,
  ProjectsCreateForOrgPayload,
  ProjectsListForOrgData,
  ProjectsListForOrgParams,
  ReactionsCreateForTeamDiscussionCommentInOrgData,
  ReactionsCreateForTeamDiscussionCommentInOrgPayload,
  ReactionsCreateForTeamDiscussionInOrgData,
  ReactionsCreateForTeamDiscussionInOrgPayload,
  ReactionsDeleteForTeamDiscussionCommentData,
  ReactionsDeleteForTeamDiscussionData,
  ReactionsListForTeamDiscussionCommentInOrgData,
  ReactionsListForTeamDiscussionCommentInOrgParams,
  ReactionsListForTeamDiscussionInOrgData,
  ReactionsListForTeamDiscussionInOrgParams,
  ReposCreateInOrgData,
  ReposCreateInOrgPayload,
  ReposCreateOrgRulesetData,
  ReposCreateOrgRulesetPayload,
  ReposDeleteOrgRulesetData,
  ReposGetOrgRulesetData,
  ReposGetOrgRulesetsData,
  ReposGetOrgRulesetsParams,
  ReposGetOrgRuleSuiteData,
  ReposGetOrgRuleSuitesData,
  ReposGetOrgRuleSuitesParams,
  ReposListForOrgData,
  ReposListForOrgParams,
  ReposUpdateOrgRulesetData,
  ReposUpdateOrgRulesetPayload,
  Runner,
  RunnerLabel,
  SecretScanningListAlertsForOrgData,
  SecretScanningListAlertsForOrgParams,
  SecretScanningListOrgBypassRequestsData,
  SecretScanningListOrgBypassRequestsParams,
  SelectedActions,
  TeamsAddOrUpdateMembershipForUserInOrgData,
  TeamsAddOrUpdateMembershipForUserInOrgPayload,
  TeamsAddOrUpdateProjectPermissionsInOrgData,
  TeamsAddOrUpdateProjectPermissionsInOrgError,
  TeamsAddOrUpdateProjectPermissionsInOrgPayload,
  TeamsAddOrUpdateRepoPermissionsInOrgData,
  TeamsAddOrUpdateRepoPermissionsInOrgPayload,
  TeamsCheckPermissionsForProjectInOrgData,
  TeamsCheckPermissionsForRepoInOrgData,
  TeamsCreateData,
  TeamsCreateDiscussionCommentInOrgData,
  TeamsCreateDiscussionCommentInOrgPayload,
  TeamsCreateDiscussionInOrgData,
  TeamsCreateDiscussionInOrgPayload,
  TeamsCreatePayload,
  TeamsDeleteDiscussionCommentInOrgData,
  TeamsDeleteDiscussionInOrgData,
  TeamsDeleteInOrgData,
  TeamsExternalIdpGroupInfoForOrgData,
  TeamsExternalIdpGroupInfoForOrgParams,
  TeamsGetByNameData,
  TeamsGetDiscussionCommentInOrgData,
  TeamsGetDiscussionInOrgData,
  TeamsGetMembershipForUserInOrgData,
  TeamsLinkExternalIdpGroupToTeamForOrgData,
  TeamsLinkExternalIdpGroupToTeamForOrgPayload,
  TeamsListChildInOrgData,
  TeamsListChildInOrgParams,
  TeamsListData,
  TeamsListDiscussionCommentsInOrgData,
  TeamsListDiscussionCommentsInOrgParams,
  TeamsListDiscussionsInOrgData,
  TeamsListDiscussionsInOrgParams,
  TeamsListExternalIdpGroupsForOrgData,
  TeamsListExternalIdpGroupsForOrgParams,
  TeamsListLinkedExternalIdpGroupsToTeamForOrgData,
  TeamsListMembersInOrgData,
  TeamsListMembersInOrgParams,
  TeamsListParams,
  TeamsListProjectsInOrgData,
  TeamsListProjectsInOrgParams,
  TeamsListReposInOrgData,
  TeamsListReposInOrgParams,
  TeamsRemoveMembershipForUserInOrgData,
  TeamsRemoveProjectInOrgData,
  TeamsRemoveRepoInOrgData,
  TeamsUnlinkExternalIdpGroupFromTeamForOrgData,
  TeamsUpdateDiscussionCommentInOrgData,
  TeamsUpdateDiscussionCommentInOrgPayload,
  TeamsUpdateDiscussionInOrgData,
  TeamsUpdateDiscussionInOrgPayload,
  TeamsUpdateInOrgData,
  TeamsUpdateInOrgPayload,
  ValidationError,
  ValidationErrorSimple,
} from "./data-contracts";
import { ContentType, HttpClient, RequestParams } from "./http-client";

export class Orgs<SecurityDataType = unknown> {
  http: HttpClient<SecurityDataType>;

  constructor(http: HttpClient<SecurityDataType>) {
    this.http = http;
  }

  /**
   * @description Gets information about an organization. When the value of `two_factor_requirement_enabled` is `true`, the organization requires all members, billing managers, outside collaborators, guest collaborators, repository collaborators, or everyone with access to any repository within the organization to enable [two-factor authentication](https://docs.github.com/enterprise-server@3.17/articles/securing-your-account-with-two-factor-authentication-2fa/). To see the full details about an organization, the authenticated user must be an organization owner. OAuth app tokens and personal access tokens (classic) need the `admin:org` scope to see the full details about an organization. To see information about an organization's GitHub Enterprise Server plan, GitHub Apps need the `Organization plan` permission.
   *
   * @tags orgs
   * @name OrgsGet
   * @summary Get an organization
   * @request GET:/orgs/{org}
   */
  orgsGet = (org: string, params: RequestParams = {}) =>
    this.http.request<OrgsGetData, BasicError>({
      path: `/orgs/${org}`,
      method: "GET",
      format: "json",
      ...params,
    });
  /**
   * @description > [!WARNING] > **Closing down notice:** GitHub Enterprise Server will replace and discontinue `members_allowed_repository_creation_type` in favor of more granular permissions. The new input parameters are `members_can_create_public_repositories`, `members_can_create_private_repositories` for all organizations and `members_can_create_internal_repositories` for organizations associated with an enterprise account using GitHub Enterprise Cloud or GitHub Enterprise Server 2.20+. For more information, see the [blog post](https://developer.github.com/changes/2019-12-03-internal-visibility-changes). > [!WARNING] > **Closing down notice:** Code security product enablement for new repositories through the organization API is closing down and will be replaced with code security configurations in a future GitHub Enterprise Server version. Updates the organization's profile and member privileges. The authenticated user must be an organization owner to use this endpoint. OAuth app tokens and personal access tokens (classic) need the `admin:org` or `repo` scope to use this endpoint.
   *
   * @tags orgs
   * @name OrgsUpdate
   * @summary Update an organization
   * @request PATCH:/orgs/{org}
   */
  orgsUpdate = (
    org: string,
    data?: OrgsUpdatePayload,
    params: RequestParams = {},
  ) =>
    this.http.request<OrgsUpdateData, OrgsUpdateError>({
      path: `/orgs/${org}`,
      method: "PATCH",
      body: data,
      type: ContentType.Json,
      format: "json",
      ...params,
    });
  /**
   * @description Deletes an organization and all its repositories. The organization login will be unavailable for 90 days after deletion. Please review the Terms of Service regarding account deletion before using this endpoint: https://docs.github.com/enterprise-server@3.17/site-policy/github-terms/github-terms-of-service
   *
   * @tags orgs
   * @name OrgsDelete
   * @summary Delete an organization
   * @request DELETE:/orgs/{org}
   */
  orgsDelete = (org: string, params: RequestParams = {}) =>
    this.http.request<object, BasicError>({
      path: `/orgs/${org}`,
      method: "DELETE",
      ...params,
    });
  /**
   * @description Gets the total GitHub Actions cache usage for an organization. The data fetched using this API is refreshed approximately every 5 minutes, so values returned from this endpoint may take at least 5 minutes to get updated. OAuth tokens and personal access tokens (classic) need the `read:org` scope to use this endpoint.
   *
   * @tags actions
   * @name ActionsGetActionsCacheUsageForOrg
   * @summary Get GitHub Actions cache usage for an organization
   * @request GET:/orgs/{org}/actions/cache/usage
   */
  actionsGetActionsCacheUsageForOrg = (
    org: string,
    params: RequestParams = {},
  ) =>
    this.http.request<ActionsGetActionsCacheUsageForOrgData, any>({
      path: `/orgs/${org}/actions/cache/usage`,
      method: "GET",
      format: "json",
      ...params,
    });
  /**
   * @description Lists repositories and their GitHub Actions cache usage for an organization. The data fetched using this API is refreshed approximately every 5 minutes, so values returned from this endpoint may take at least 5 minutes to get updated. OAuth tokens and personal access tokens (classic) need the `read:org` scope to use this endpoint.
   *
   * @tags actions
   * @name ActionsGetActionsCacheUsageByRepoForOrg
   * @summary List repositories with GitHub Actions cache usage for an organization
   * @request GET:/orgs/{org}/actions/cache/usage-by-repository
   */
  actionsGetActionsCacheUsageByRepoForOrg = (
    { org, ...query }: ActionsGetActionsCacheUsageByRepoForOrgParams,
    params: RequestParams = {},
  ) =>
    this.http.request<ActionsGetActionsCacheUsageByRepoForOrgData, any>({
      path: `/orgs/${org}/actions/cache/usage-by-repository`,
      method: "GET",
      query: query,
      format: "json",
      ...params,
    });
  /**
   * @description Gets the customization template for an OpenID Connect (OIDC) subject claim. OAuth app tokens and personal access tokens (classic) need the `read:org` scope to use this endpoint.
   *
   * @tags oidc
   * @name OidcGetOidcCustomSubTemplateForOrg
   * @summary Get the customization template for an OIDC subject claim for an organization
   * @request GET:/orgs/{org}/actions/oidc/customization/sub
   */
  oidcGetOidcCustomSubTemplateForOrg = (
    org: string,
    params: RequestParams = {},
  ) =>
    this.http.request<OidcGetOidcCustomSubTemplateForOrgData, any>({
      path: `/orgs/${org}/actions/oidc/customization/sub`,
      method: "GET",
      format: "json",
      ...params,
    });
  /**
   * @description Creates or updates the customization template for an OpenID Connect (OIDC) subject claim. OAuth app tokens and personal access tokens (classic) need the `write:org` scope to use this endpoint.
   *
   * @tags oidc
   * @name OidcUpdateOidcCustomSubTemplateForOrg
   * @summary Set the customization template for an OIDC subject claim for an organization
   * @request PUT:/orgs/{org}/actions/oidc/customization/sub
   */
  oidcUpdateOidcCustomSubTemplateForOrg = (
    org: string,
    data: OidcCustomSub,
    params: RequestParams = {},
  ) =>
    this.http.request<OidcUpdateOidcCustomSubTemplateForOrgData, BasicError>({
      path: `/orgs/${org}/actions/oidc/customization/sub`,
      method: "PUT",
      body: data,
      type: ContentType.Json,
      format: "json",
      ...params,
    });
  /**
   * @description Gets the GitHub Actions permissions policy for repositories and allowed actions in an organization. You must authenticate using an access token with the `admin:org` scope to use this endpoint. GitHub Apps must have the `administration` organization permission to use this API.
   *
   * @tags actions
   * @name ActionsGetGithubActionsPermissionsOrganization
   * @summary Get GitHub Actions permissions for an organization
   * @request GET:/orgs/{org}/actions/permissions
   */
  actionsGetGithubActionsPermissionsOrganization = (
    org: string,
    params: RequestParams = {},
  ) =>
    this.http.request<ActionsGetGithubActionsPermissionsOrganizationData, any>({
      path: `/orgs/${org}/actions/permissions`,
      method: "GET",
      format: "json",
      ...params,
    });
  /**
   * @description Sets the GitHub Actions permissions policy for repositories and allowed actions in an organization. If the organization belongs to an enterprise that has set restrictive permissions at the enterprise level, such as `allowed_actions` to `selected` actions, then you cannot override them for the organization. OAuth app tokens and personal access tokens (classic) need the `admin:org` scope to use this endpoint.
   *
   * @tags actions
   * @name ActionsSetGithubActionsPermissionsOrganization
   * @summary Set GitHub Actions permissions for an organization
   * @request PUT:/orgs/{org}/actions/permissions
   */
  actionsSetGithubActionsPermissionsOrganization = (
    org: string,
    data: ActionsSetGithubActionsPermissionsOrganizationPayload,
    params: RequestParams = {},
  ) =>
    this.http.request<ActionsSetGithubActionsPermissionsOrganizationData, any>({
      path: `/orgs/${org}/actions/permissions`,
      method: "PUT",
      body: data,
      type: ContentType.Json,
      ...params,
    });
  /**
   * @description Lists the selected repositories that are enabled for GitHub Actions in an organization. To use this endpoint, the organization permission policy for `enabled_repositories` must be configured to `selected`. For more information, see "[Set GitHub Actions permissions for an organization](#set-github-actions-permissions-for-an-organization)." OAuth app tokens and personal access tokens (classic) need the `admin:org` scope to use this endpoint.
   *
   * @tags actions
   * @name ActionsListSelectedRepositoriesEnabledGithubActionsOrganization
   * @summary List selected repositories enabled for GitHub Actions in an organization
   * @request GET:/orgs/{org}/actions/permissions/repositories
   */
  actionsListSelectedRepositoriesEnabledGithubActionsOrganization = (
    {
      org,
      ...query
    }: ActionsListSelectedRepositoriesEnabledGithubActionsOrganizationParams,
    params: RequestParams = {},
  ) =>
    this.http.request<
      ActionsListSelectedRepositoriesEnabledGithubActionsOrganizationData,
      any
    >({
      path: `/orgs/${org}/actions/permissions/repositories`,
      method: "GET",
      query: query,
      format: "json",
      ...params,
    });
  /**
   * @description Replaces the list of selected repositories that are enabled for GitHub Actions in an organization. To use this endpoint, the organization permission policy for `enabled_repositories` must be configured to `selected`. For more information, see "[Set GitHub Actions permissions for an organization](#set-github-actions-permissions-for-an-organization)." OAuth app tokens and personal access tokens (classic) need the `admin:org` scope to use this endpoint.
   *
   * @tags actions
   * @name ActionsSetSelectedRepositoriesEnabledGithubActionsOrganization
   * @summary Set selected repositories enabled for GitHub Actions in an organization
   * @request PUT:/orgs/{org}/actions/permissions/repositories
   */
  actionsSetSelectedRepositoriesEnabledGithubActionsOrganization = (
    org: string,
    data: ActionsSetSelectedRepositoriesEnabledGithubActionsOrganizationPayload,
    params: RequestParams = {},
  ) =>
    this.http.request<
      ActionsSetSelectedRepositoriesEnabledGithubActionsOrganizationData,
      any
    >({
      path: `/orgs/${org}/actions/permissions/repositories`,
      method: "PUT",
      body: data,
      type: ContentType.Json,
      ...params,
    });
  /**
   * @description Adds a repository to the list of selected repositories that are enabled for GitHub Actions in an organization. To use this endpoint, the organization permission policy for `enabled_repositories` must be must be configured to `selected`. For more information, see "[Set GitHub Actions permissions for an organization](#set-github-actions-permissions-for-an-organization)." OAuth tokens and personal access tokens (classic) need the `admin:org` scope to use this endpoint.
   *
   * @tags actions
   * @name ActionsEnableSelectedRepositoryGithubActionsOrganization
   * @summary Enable a selected repository for GitHub Actions in an organization
   * @request PUT:/orgs/{org}/actions/permissions/repositories/{repository_id}
   */
  actionsEnableSelectedRepositoryGithubActionsOrganization = (
    org: string,
    repositoryId: number,
    params: RequestParams = {},
  ) =>
    this.http.request<
      ActionsEnableSelectedRepositoryGithubActionsOrganizationData,
      any
    >({
      path: `/orgs/${org}/actions/permissions/repositories/${repositoryId}`,
      method: "PUT",
      ...params,
    });
  /**
   * @description Removes a repository from the list of selected repositories that are enabled for GitHub Actions in an organization. To use this endpoint, the organization permission policy for `enabled_repositories` must be configured to `selected`. For more information, see "[Set GitHub Actions permissions for an organization](#set-github-actions-permissions-for-an-organization)." OAuth tokens and personal access tokens (classic) need the `admin:org` scope to use this endpoint.
   *
   * @tags actions
   * @name ActionsDisableSelectedRepositoryGithubActionsOrganization
   * @summary Disable a selected repository for GitHub Actions in an organization
   * @request DELETE:/orgs/{org}/actions/permissions/repositories/{repository_id}
   */
  actionsDisableSelectedRepositoryGithubActionsOrganization = (
    org: string,
    repositoryId: number,
    params: RequestParams = {},
  ) =>
    this.http.request<
      ActionsDisableSelectedRepositoryGithubActionsOrganizationData,
      any
    >({
      path: `/orgs/${org}/actions/permissions/repositories/${repositoryId}`,
      method: "DELETE",
      ...params,
    });
  /**
   * @description Gets the selected actions that are allowed in an organization. To use this endpoint, the organization permission policy for `allowed_actions` must be configured to `selected`. For more information, see "[Set GitHub Actions permissions for an organization](#set-github-actions-permissions-for-an-organization)."" You must authenticate using an access token with the `admin:org` scope to use this endpoint. GitHub Apps must have the `administration` organization permission to use this API.
   *
   * @tags actions
   * @name ActionsGetAllowedActionsOrganization
   * @summary Get allowed actions for an organization
   * @request GET:/orgs/{org}/actions/permissions/selected-actions
   */
  actionsGetAllowedActionsOrganization = (
    org: string,
    params: RequestParams = {},
  ) =>
    this.http.request<ActionsGetAllowedActionsOrganizationData, any>({
      path: `/orgs/${org}/actions/permissions/selected-actions`,
      method: "GET",
      format: "json",
      ...params,
    });
  /**
   * @description Sets the actions that are allowed in an organization. To use this endpoint, the organization permission policy for `allowed_actions` must be configured to `selected`. For more information, see "[Set GitHub Actions permissions for an organization](#set-github-actions-permissions-for-an-organization)." If the organization belongs to an enterprise that has `selected` actions set at the enterprise level, then you cannot override any of the enterprise's allowed actions settings. To use the `patterns_allowed` setting for private repositories, the organization must belong to an enterprise. If the organization does not belong to an enterprise, then the `patterns_allowed` setting only applies to public repositories in the organization. OAuth app tokens and personal access tokens (classic) need the `admin:org` scope to use this endpoint.
   *
   * @tags actions
   * @name ActionsSetAllowedActionsOrganization
   * @summary Set allowed actions for an organization
   * @request PUT:/orgs/{org}/actions/permissions/selected-actions
   */
  actionsSetAllowedActionsOrganization = (
    org: string,
    data?: SelectedActions,
    params: RequestParams = {},
  ) =>
    this.http.request<ActionsSetAllowedActionsOrganizationData, any>({
      path: `/orgs/${org}/actions/permissions/selected-actions`,
      method: "PUT",
      body: data,
      type: ContentType.Json,
      ...params,
    });
  /**
   * @description Gets the default workflow permissions granted to the `GITHUB_TOKEN` when running workflows in an organization, as well as whether GitHub Actions can submit approving pull request reviews. For more information, see "[Setting the permissions of the GITHUB_TOKEN for your organization](https://docs.github.com/enterprise-server@3.17/organizations/managing-organization-settings/disabling-or-limiting-github-actions-for-your-organization#setting-the-permissions-of-the-github_token-for-your-organization)." OAuth tokens and personal access tokens (classic) need the `admin:org` scope to use this endpoint.
   *
   * @tags actions
   * @name ActionsGetGithubActionsDefaultWorkflowPermissionsOrganization
   * @summary Get default workflow permissions for an organization
   * @request GET:/orgs/{org}/actions/permissions/workflow
   */
  actionsGetGithubActionsDefaultWorkflowPermissionsOrganization = (
    org: string,
    params: RequestParams = {},
  ) =>
    this.http.request<
      ActionsGetGithubActionsDefaultWorkflowPermissionsOrganizationData,
      any
    >({
      path: `/orgs/${org}/actions/permissions/workflow`,
      method: "GET",
      format: "json",
      ...params,
    });
  /**
   * @description Sets the default workflow permissions granted to the `GITHUB_TOKEN` when running workflows in an organization, and sets if GitHub Actions can submit approving pull request reviews. For more information, see "[Setting the permissions of the GITHUB_TOKEN for your organization](https://docs.github.com/enterprise-server@3.17/organizations/managing-organization-settings/disabling-or-limiting-github-actions-for-your-organization#setting-the-permissions-of-the-github_token-for-your-organization)." OAuth app tokens and personal access tokens (classic) need the `admin:org` scope to use this endpoint.
   *
   * @tags actions
   * @name ActionsSetGithubActionsDefaultWorkflowPermissionsOrganization
   * @summary Set default workflow permissions for an organization
   * @request PUT:/orgs/{org}/actions/permissions/workflow
   */
  actionsSetGithubActionsDefaultWorkflowPermissionsOrganization = (
    org: string,
    data?: ActionsSetDefaultWorkflowPermissions,
    params: RequestParams = {},
  ) =>
    this.http.request<
      ActionsSetGithubActionsDefaultWorkflowPermissionsOrganizationData,
      void
    >({
      path: `/orgs/${org}/actions/permissions/workflow`,
      method: "PUT",
      body: data,
      type: ContentType.Json,
      ...params,
    });
  /**
   * @description Lists all self-hosted runner groups configured in an organization and inherited from an enterprise. OAuth app tokens and personal access tokens (classic) need the `admin:org` scope to use this endpoint.
   *
   * @tags actions
   * @name ActionsListSelfHostedRunnerGroupsForOrg
   * @summary List self-hosted runner groups for an organization
   * @request GET:/orgs/{org}/actions/runner-groups
   */
  actionsListSelfHostedRunnerGroupsForOrg = (
    { org, ...query }: ActionsListSelfHostedRunnerGroupsForOrgParams,
    params: RequestParams = {},
  ) =>
    this.http.request<ActionsListSelfHostedRunnerGroupsForOrgData, any>({
      path: `/orgs/${org}/actions/runner-groups`,
      method: "GET",
      query: query,
      format: "json",
      ...params,
    });
  /**
   * @description Creates a new self-hosted runner group for an organization. OAuth tokens and personal access tokens (classic) need the `admin:org` scope to use this endpoint.
   *
   * @tags actions
   * @name ActionsCreateSelfHostedRunnerGroupForOrg
   * @summary Create a self-hosted runner group for an organization
   * @request POST:/orgs/{org}/actions/runner-groups
   */
  actionsCreateSelfHostedRunnerGroupForOrg = (
    org: string,
    data: ActionsCreateSelfHostedRunnerGroupForOrgPayload,
    params: RequestParams = {},
  ) =>
    this.http.request<ActionsCreateSelfHostedRunnerGroupForOrgData, any>({
      path: `/orgs/${org}/actions/runner-groups`,
      method: "POST",
      body: data,
      type: ContentType.Json,
      format: "json",
      ...params,
    });
  /**
   * @description Gets a specific self-hosted runner group for an organization. OAuth app tokens and personal access tokens (classic) need the `admin:org` scope to use this endpoint.
   *
   * @tags actions
   * @name ActionsGetSelfHostedRunnerGroupForOrg
   * @summary Get a self-hosted runner group for an organization
   * @request GET:/orgs/{org}/actions/runner-groups/{runner_group_id}
   */
  actionsGetSelfHostedRunnerGroupForOrg = (
    org: string,
    runnerGroupId: number,
    params: RequestParams = {},
  ) =>
    this.http.request<ActionsGetSelfHostedRunnerGroupForOrgData, any>({
      path: `/orgs/${org}/actions/runner-groups/${runnerGroupId}`,
      method: "GET",
      format: "json",
      ...params,
    });
  /**
   * @description Updates the `name` and `visibility` of a self-hosted runner group in an organization. OAuth app tokens and personal access tokens (classic) need the `admin:org` scope to use this endpoint.
   *
   * @tags actions
   * @name ActionsUpdateSelfHostedRunnerGroupForOrg
   * @summary Update a self-hosted runner group for an organization
   * @request PATCH:/orgs/{org}/actions/runner-groups/{runner_group_id}
   */
  actionsUpdateSelfHostedRunnerGroupForOrg = (
    org: string,
    runnerGroupId: number,
    data: ActionsUpdateSelfHostedRunnerGroupForOrgPayload,
    params: RequestParams = {},
  ) =>
    this.http.request<ActionsUpdateSelfHostedRunnerGroupForOrgData, any>({
      path: `/orgs/${org}/actions/runner-groups/${runnerGroupId}`,
      method: "PATCH",
      body: data,
      type: ContentType.Json,
      format: "json",
      ...params,
    });
  /**
   * @description Deletes a self-hosted runner group for an organization. OAuth tokens and personal access tokens (classic) need the `admin:org` scope to use this endpoint.
   *
   * @tags actions
   * @name ActionsDeleteSelfHostedRunnerGroupFromOrg
   * @summary Delete a self-hosted runner group from an organization
   * @request DELETE:/orgs/{org}/actions/runner-groups/{runner_group_id}
   */
  actionsDeleteSelfHostedRunnerGroupFromOrg = (
    org: string,
    runnerGroupId: number,
    params: RequestParams = {},
  ) =>
    this.http.request<ActionsDeleteSelfHostedRunnerGroupFromOrgData, any>({
      path: `/orgs/${org}/actions/runner-groups/${runnerGroupId}`,
      method: "DELETE",
      ...params,
    });
  /**
   * @description Lists the repositories with access to a self-hosted runner group configured in an organization. OAuth app tokens and personal access tokens (classic) need the `admin:org` scope to use this endpoint.
   *
   * @tags actions
   * @name ActionsListRepoAccessToSelfHostedRunnerGroupInOrg
   * @summary List repository access to a self-hosted runner group in an organization
   * @request GET:/orgs/{org}/actions/runner-groups/{runner_group_id}/repositories
   */
  actionsListRepoAccessToSelfHostedRunnerGroupInOrg = (
    {
      org,
      runnerGroupId,
      ...query
    }: ActionsListRepoAccessToSelfHostedRunnerGroupInOrgParams,
    params: RequestParams = {},
  ) =>
    this.http.request<
      ActionsListRepoAccessToSelfHostedRunnerGroupInOrgData,
      any
    >({
      path: `/orgs/${org}/actions/runner-groups/${runnerGroupId}/repositories`,
      method: "GET",
      query: query,
      format: "json",
      ...params,
    });
  /**
   * @description Replaces the list of repositories that have access to a self-hosted runner group configured in an organization. OAuth app tokens and personal access tokens (classic) need the `admin:org` scope to use this endpoint.
   *
   * @tags actions
   * @name ActionsSetRepoAccessToSelfHostedRunnerGroupInOrg
   * @summary Set repository access for a self-hosted runner group in an organization
   * @request PUT:/orgs/{org}/actions/runner-groups/{runner_group_id}/repositories
   */
  actionsSetRepoAccessToSelfHostedRunnerGroupInOrg = (
    org: string,
    runnerGroupId: number,
    data: ActionsSetRepoAccessToSelfHostedRunnerGroupInOrgPayload,
    params: RequestParams = {},
  ) =>
    this.http.request<
      ActionsSetRepoAccessToSelfHostedRunnerGroupInOrgData,
      any
    >({
      path: `/orgs/${org}/actions/runner-groups/${runnerGroupId}/repositories`,
      method: "PUT",
      body: data,
      type: ContentType.Json,
      ...params,
    });
  /**
   * @description Adds a repository to the list of repositories that can access a self-hosted runner group. The runner group must have `visibility` set to `selected`. For more information, see "[Create a self-hosted runner group for an organization](#create-a-self-hosted-runner-group-for-an-organization)." OAuth tokens and personal access tokens (classic) need the `admin:org` scope to use this endpoint.
   *
   * @tags actions
   * @name ActionsAddRepoAccessToSelfHostedRunnerGroupInOrg
   * @summary Add repository access to a self-hosted runner group in an organization
   * @request PUT:/orgs/{org}/actions/runner-groups/{runner_group_id}/repositories/{repository_id}
   */
  actionsAddRepoAccessToSelfHostedRunnerGroupInOrg = (
    org: string,
    runnerGroupId: number,
    repositoryId: number,
    params: RequestParams = {},
  ) =>
    this.http.request<
      ActionsAddRepoAccessToSelfHostedRunnerGroupInOrgData,
      any
    >({
      path: `/orgs/${org}/actions/runner-groups/${runnerGroupId}/repositories/${repositoryId}`,
      method: "PUT",
      ...params,
    });
  /**
   * @description Removes a repository from the list of selected repositories that can access a self-hosted runner group. The runner group must have `visibility` set to `selected`. For more information, see "[Create a self-hosted runner group for an organization](#create-a-self-hosted-runner-group-for-an-organization)." OAuth app tokens and personal access tokens (classic) need the `admin:org` scope to use this endpoint.
   *
   * @tags actions
   * @name ActionsRemoveRepoAccessToSelfHostedRunnerGroupInOrg
   * @summary Remove repository access to a self-hosted runner group in an organization
   * @request DELETE:/orgs/{org}/actions/runner-groups/{runner_group_id}/repositories/{repository_id}
   */
  actionsRemoveRepoAccessToSelfHostedRunnerGroupInOrg = (
    org: string,
    runnerGroupId: number,
    repositoryId: number,
    params: RequestParams = {},
  ) =>
    this.http.request<
      ActionsRemoveRepoAccessToSelfHostedRunnerGroupInOrgData,
      any
    >({
      path: `/orgs/${org}/actions/runner-groups/${runnerGroupId}/repositories/${repositoryId}`,
      method: "DELETE",
      ...params,
    });
  /**
   * @description Lists self-hosted runners that are in a specific organization group. OAuth app tokens and personal access tokens (classic) need the `admin:org` scope to use this endpoint.
   *
   * @tags actions
   * @name ActionsListSelfHostedRunnersInGroupForOrg
   * @summary List self-hosted runners in a group for an organization
   * @request GET:/orgs/{org}/actions/runner-groups/{runner_group_id}/runners
   */
  actionsListSelfHostedRunnersInGroupForOrg = (
    {
      org,
      runnerGroupId,
      ...query
    }: ActionsListSelfHostedRunnersInGroupForOrgParams,
    params: RequestParams = {},
  ) =>
    this.http.request<ActionsListSelfHostedRunnersInGroupForOrgData, any>({
      path: `/orgs/${org}/actions/runner-groups/${runnerGroupId}/runners`,
      method: "GET",
      query: query,
      format: "json",
      ...params,
    });
  /**
   * @description Replaces the list of self-hosted runners that are part of an organization runner group. OAuth app tokens and personal access tokens (classic) need the `admin:org` scope to use this endpoint.
   *
   * @tags actions
   * @name ActionsSetSelfHostedRunnersInGroupForOrg
   * @summary Set self-hosted runners in a group for an organization
   * @request PUT:/orgs/{org}/actions/runner-groups/{runner_group_id}/runners
   */
  actionsSetSelfHostedRunnersInGroupForOrg = (
    org: string,
    runnerGroupId: number,
    data: ActionsSetSelfHostedRunnersInGroupForOrgPayload,
    params: RequestParams = {},
  ) =>
    this.http.request<ActionsSetSelfHostedRunnersInGroupForOrgData, any>({
      path: `/orgs/${org}/actions/runner-groups/${runnerGroupId}/runners`,
      method: "PUT",
      body: data,
      type: ContentType.Json,
      ...params,
    });
  /**
   * @description Adds a self-hosted runner to a runner group configured in an organization. OAuth tokens and personal access tokens (classic) need the `admin:org` scope to use this endpoint.
   *
   * @tags actions
   * @name ActionsAddSelfHostedRunnerToGroupForOrg
   * @summary Add a self-hosted runner to a group for an organization
   * @request PUT:/orgs/{org}/actions/runner-groups/{runner_group_id}/runners/{runner_id}
   */
  actionsAddSelfHostedRunnerToGroupForOrg = (
    org: string,
    runnerGroupId: number,
    runnerId: number,
    params: RequestParams = {},
  ) =>
    this.http.request<ActionsAddSelfHostedRunnerToGroupForOrgData, any>({
      path: `/orgs/${org}/actions/runner-groups/${runnerGroupId}/runners/${runnerId}`,
      method: "PUT",
      ...params,
    });
  /**
   * @description Removes a self-hosted runner from a group configured in an organization. The runner is then returned to the default group. OAuth app tokens and personal access tokens (classic) need the `admin:org` scope to use this endpoint.
   *
   * @tags actions
   * @name ActionsRemoveSelfHostedRunnerFromGroupForOrg
   * @summary Remove a self-hosted runner from a group for an organization
   * @request DELETE:/orgs/{org}/actions/runner-groups/{runner_group_id}/runners/{runner_id}
   */
  actionsRemoveSelfHostedRunnerFromGroupForOrg = (
    org: string,
    runnerGroupId: number,
    runnerId: number,
    params: RequestParams = {},
  ) =>
    this.http.request<ActionsRemoveSelfHostedRunnerFromGroupForOrgData, any>({
      path: `/orgs/${org}/actions/runner-groups/${runnerGroupId}/runners/${runnerId}`,
      method: "DELETE",
      ...params,
    });
  /**
   * @description Lists all self-hosted runners configured in an organization. Authenticated users must have admin access to the organization to use this endpoint. OAuth app tokens and personal access tokens (classic) need the `admin:org` scope to use this endpoint. If the repository is private, the `repo` scope is also required.
   *
   * @tags actions
   * @name ActionsListSelfHostedRunnersForOrg
   * @summary List self-hosted runners for an organization
   * @request GET:/orgs/{org}/actions/runners
   */
  actionsListSelfHostedRunnersForOrg = (
    { org, ...query }: ActionsListSelfHostedRunnersForOrgParams,
    params: RequestParams = {},
  ) =>
    this.http.request<ActionsListSelfHostedRunnersForOrgData, any>({
      path: `/orgs/${org}/actions/runners`,
      method: "GET",
      query: query,
      format: "json",
      ...params,
    });
  /**
   * @description Lists binaries for the runner application that you can download and run. Authenticated users must have admin access to the organization to use this endpoint. OAuth app tokens and personal access tokens (classic) need the `admin:org` scope to use this endpoint.  If the repository is private, the `repo` scope is also required.
   *
   * @tags actions
   * @name ActionsListRunnerApplicationsForOrg
   * @summary List runner applications for an organization
   * @request GET:/orgs/{org}/actions/runners/downloads
   */
  actionsListRunnerApplicationsForOrg = (
    org: string,
    params: RequestParams = {},
  ) =>
    this.http.request<ActionsListRunnerApplicationsForOrgData, any>({
      path: `/orgs/${org}/actions/runners/downloads`,
      method: "GET",
      format: "json",
      ...params,
    });
  /**
   * @description Generates a configuration that can be passed to the runner application at startup. The authenticated user must have admin access to the organization. OAuth tokens and personal access tokens (classic) need the`admin:org` scope to use this endpoint. If the repository is private, OAuth tokens and personal access tokens (classic) need the `repo` scope to use this endpoint.
   *
   * @tags actions
   * @name ActionsGenerateRunnerJitconfigForOrg
   * @summary Create configuration for a just-in-time runner for an organization
   * @request POST:/orgs/{org}/actions/runners/generate-jitconfig
   */
  actionsGenerateRunnerJitconfigForOrg = (
    org: string,
    data: ActionsGenerateRunnerJitconfigForOrgPayload,
    params: RequestParams = {},
  ) =>
    this.http.request<
      {
        /** A self hosted runner */
        runner: Runner;
        /** The base64 encoded runner configuration. */
        encoded_jit_config: string;
      },
      BasicError | ValidationErrorSimple
    >({
      path: `/orgs/${org}/actions/runners/generate-jitconfig`,
      method: "POST",
      body: data,
      type: ContentType.Json,
      ...params,
    });
  /**
   * @description Returns a token that you can pass to the `config` script. The token expires after one hour. For example, you can replace `TOKEN` in the following example with the registration token provided by this endpoint to configure your self-hosted runner: ``` ./config.sh --url https://github.com/octo-org --token TOKEN ``` Authenticated users must have admin access to the organization to use this endpoint. OAuth tokens and personal access tokens (classic) need the`admin:org` scope to use this endpoint. If the repository is private, OAuth tokens and personal access tokens (classic) need the `repo` scope to use this endpoint.
   *
   * @tags actions
   * @name ActionsCreateRegistrationTokenForOrg
   * @summary Create a registration token for an organization
   * @request POST:/orgs/{org}/actions/runners/registration-token
   */
  actionsCreateRegistrationTokenForOrg = (
    org: string,
    params: RequestParams = {},
  ) =>
    this.http.request<ActionsCreateRegistrationTokenForOrgData, any>({
      path: `/orgs/${org}/actions/runners/registration-token`,
      method: "POST",
      format: "json",
      ...params,
    });
  /**
   * @description Returns a token that you can pass to the `config` script to remove a self-hosted runner from an organization. The token expires after one hour. For example, you can replace `TOKEN` in the following example with the registration token provided by this endpoint to remove your self-hosted runner from an organization: ``` ./config.sh remove --token TOKEN ``` Authenticated users must have admin access to the organization to use this endpoint. OAuth tokens and personal access tokens (classic) need the`admin:org` scope to use this endpoint. If the repository is private, OAuth tokens and personal access tokens (classic) need the `repo` scope to use this endpoint.
   *
   * @tags actions
   * @name ActionsCreateRemoveTokenForOrg
   * @summary Create a remove token for an organization
   * @request POST:/orgs/{org}/actions/runners/remove-token
   */
  actionsCreateRemoveTokenForOrg = (org: string, params: RequestParams = {}) =>
    this.http.request<ActionsCreateRemoveTokenForOrgData, any>({
      path: `/orgs/${org}/actions/runners/remove-token`,
      method: "POST",
      format: "json",
      ...params,
    });
  /**
   * @description Gets a specific self-hosted runner configured in an organization. Authenticated users must have admin access to the organization to use this endpoint. OAuth app tokens and personal access tokens (classic) need the `admin:org` scope to use this endpoint. If the repository is private, the `repo` scope is also required.
   *
   * @tags actions
   * @name ActionsGetSelfHostedRunnerForOrg
   * @summary Get a self-hosted runner for an organization
   * @request GET:/orgs/{org}/actions/runners/{runner_id}
   */
  actionsGetSelfHostedRunnerForOrg = (
    org: string,
    runnerId: number,
    params: RequestParams = {},
  ) =>
    this.http.request<ActionsGetSelfHostedRunnerForOrgData, any>({
      path: `/orgs/${org}/actions/runners/${runnerId}`,
      method: "GET",
      format: "json",
      ...params,
    });
  /**
   * @description Forces the removal of a self-hosted runner from an organization. You can use this endpoint to completely remove the runner when the machine you were using no longer exists. Authenticated users must have admin access to the organization to use this endpoint. OAuth tokens and personal access tokens (classic) need the`admin:org` scope to use this endpoint. If the repository is private, OAuth tokens and personal access tokens (classic) need the `repo` scope to use this endpoint.
   *
   * @tags actions
   * @name ActionsDeleteSelfHostedRunnerFromOrg
   * @summary Delete a self-hosted runner from an organization
   * @request DELETE:/orgs/{org}/actions/runners/{runner_id}
   */
  actionsDeleteSelfHostedRunnerFromOrg = (
    org: string,
    runnerId: number,
    params: RequestParams = {},
  ) =>
    this.http.request<
      ActionsDeleteSelfHostedRunnerFromOrgData,
      ValidationErrorSimple
    >({
      path: `/orgs/${org}/actions/runners/${runnerId}`,
      method: "DELETE",
      ...params,
    });
  /**
   * @description Lists all labels for a self-hosted runner configured in an organization. Authenticated users must have admin access to the organization to use this endpoint. OAuth app tokens and personal access tokens (classic) need the `admin:org` scope to use this endpoint. If the repository is private, the `repo` scope is also required.
   *
   * @tags actions
   * @name ActionsListLabelsForSelfHostedRunnerForOrg
   * @summary List labels for a self-hosted runner for an organization
   * @request GET:/orgs/{org}/actions/runners/{runner_id}/labels
   */
  actionsListLabelsForSelfHostedRunnerForOrg = (
    org: string,
    runnerId: number,
    params: RequestParams = {},
  ) =>
    this.http.request<
      {
        total_count: number;
        labels: RunnerLabel[];
      },
      BasicError
    >({
      path: `/orgs/${org}/actions/runners/${runnerId}/labels`,
      method: "GET",
      ...params,
    });
  /**
   * @description Adds custom labels to a self-hosted runner configured in an organization. Authenticated users must have admin access to the organization to use this endpoint. OAuth tokens and personal access tokens (classic) need the `admin:org` scope to use this endpoint.
   *
   * @tags actions
   * @name ActionsAddCustomLabelsToSelfHostedRunnerForOrg
   * @summary Add custom labels to a self-hosted runner for an organization
   * @request POST:/orgs/{org}/actions/runners/{runner_id}/labels
   */
  actionsAddCustomLabelsToSelfHostedRunnerForOrg = (
    org: string,
    runnerId: number,
    data: ActionsAddCustomLabelsToSelfHostedRunnerForOrgPayload,
    params: RequestParams = {},
  ) =>
    this.http.request<
      {
        total_count: number;
        labels: RunnerLabel[];
      },
      BasicError | ValidationErrorSimple
    >({
      path: `/orgs/${org}/actions/runners/${runnerId}/labels`,
      method: "POST",
      body: data,
      type: ContentType.Json,
      ...params,
    });
  /**
   * @description Remove all previous custom labels and set the new custom labels for a specific self-hosted runner configured in an organization. Authenticated users must have admin access to the organization to use this endpoint. OAuth app tokens and personal access tokens (classic) need the `admin:org` scope to use this endpoint. If the repository is private, the `repo` scope is also required.
   *
   * @tags actions
   * @name ActionsSetCustomLabelsForSelfHostedRunnerForOrg
   * @summary Set custom labels for a self-hosted runner for an organization
   * @request PUT:/orgs/{org}/actions/runners/{runner_id}/labels
   */
  actionsSetCustomLabelsForSelfHostedRunnerForOrg = (
    org: string,
    runnerId: number,
    data: ActionsSetCustomLabelsForSelfHostedRunnerForOrgPayload,
    params: RequestParams = {},
  ) =>
    this.http.request<
      {
        total_count: number;
        labels: RunnerLabel[];
      },
      BasicError | ValidationErrorSimple
    >({
      path: `/orgs/${org}/actions/runners/${runnerId}/labels`,
      method: "PUT",
      body: data,
      type: ContentType.Json,
      ...params,
    });
  /**
   * @description Remove all custom labels from a self-hosted runner configured in an organization. Returns the remaining read-only labels from the runner. Authenticated users must have admin access to the organization to use this endpoint. OAuth app tokens and personal access tokens (classic) need the `admin:org` scope to use this endpoint. If the repository is private, the `repo` scope is also required.
   *
   * @tags actions
   * @name ActionsRemoveAllCustomLabelsFromSelfHostedRunnerForOrg
   * @summary Remove all custom labels from a self-hosted runner for an organization
   * @request DELETE:/orgs/{org}/actions/runners/{runner_id}/labels
   */
  actionsRemoveAllCustomLabelsFromSelfHostedRunnerForOrg = (
    org: string,
    runnerId: number,
    params: RequestParams = {},
  ) =>
    this.http.request<
      {
        total_count: number;
        labels: RunnerLabel[];
      },
      BasicError
    >({
      path: `/orgs/${org}/actions/runners/${runnerId}/labels`,
      method: "DELETE",
      ...params,
    });
  /**
   * @description Remove a custom label from a self-hosted runner configured in an organization. Returns the remaining labels from the runner. This endpoint returns a `404 Not Found` status if the custom label is not present on the runner. Authenticated users must have admin access to the organization to use this endpoint. OAuth app tokens and personal access tokens (classic) need the `admin:org` scope to use this endpoint. If the repository is private, the `repo` scope is also required.
   *
   * @tags actions
   * @name ActionsRemoveCustomLabelFromSelfHostedRunnerForOrg
   * @summary Remove a custom label from a self-hosted runner for an organization
   * @request DELETE:/orgs/{org}/actions/runners/{runner_id}/labels/{name}
   */
  actionsRemoveCustomLabelFromSelfHostedRunnerForOrg = (
    org: string,
    runnerId: number,
    name: string,
    params: RequestParams = {},
  ) =>
    this.http.request<
      {
        total_count: number;
        labels: RunnerLabel[];
      },
      BasicError | ValidationErrorSimple
    >({
      path: `/orgs/${org}/actions/runners/${runnerId}/labels/${name}`,
      method: "DELETE",
      ...params,
    });
  /**
   * @description Lists all secrets available in an organization without revealing their encrypted values. Authenticated users must have collaborator access to a repository to create, update, or read secrets. OAuth app tokens and personal access tokens (classic) need the `admin:org` scope to use this endpoint. If the repository is private, the `repo` scope is also required.
   *
   * @tags actions
   * @name ActionsListOrgSecrets
   * @summary List organization secrets
   * @request GET:/orgs/{org}/actions/secrets
   */
  actionsListOrgSecrets = (
    { org, ...query }: ActionsListOrgSecretsParams,
    params: RequestParams = {},
  ) =>
    this.http.request<ActionsListOrgSecretsData, any>({
      path: `/orgs/${org}/actions/secrets`,
      method: "GET",
      query: query,
      format: "json",
      ...params,
    });
  /**
   * @description Gets your public key, which you need to encrypt secrets. You need to encrypt a secret before you can create or update secrets. The authenticated user must have collaborator access to a repository to create, update, or read secrets. OAuth tokens and personal access tokens (classic) need the`admin:org` scope to use this endpoint. If the repository is private, OAuth tokens and personal access tokens (classic) need the `repo` scope to use this endpoint.
   *
   * @tags actions
   * @name ActionsGetOrgPublicKey
   * @summary Get an organization public key
   * @request GET:/orgs/{org}/actions/secrets/public-key
   */
  actionsGetOrgPublicKey = (org: string, params: RequestParams = {}) =>
    this.http.request<ActionsGetOrgPublicKeyData, any>({
      path: `/orgs/${org}/actions/secrets/public-key`,
      method: "GET",
      format: "json",
      ...params,
    });
  /**
   * @description Gets a single organization secret without revealing its encrypted value. The authenticated user must have collaborator access to a repository to create, update, or read secrets OAuth tokens and personal access tokens (classic) need the`admin:org` scope to use this endpoint. If the repository is private, OAuth tokens and personal access tokens (classic) need the `repo` scope to use this endpoint.
   *
   * @tags actions
   * @name ActionsGetOrgSecret
   * @summary Get an organization secret
   * @request GET:/orgs/{org}/actions/secrets/{secret_name}
   */
  actionsGetOrgSecret = (
    org: string,
    secretName: string,
    params: RequestParams = {},
  ) =>
    this.http.request<ActionsGetOrgSecretData, any>({
      path: `/orgs/${org}/actions/secrets/${secretName}`,
      method: "GET",
      format: "json",
      ...params,
    });
  /**
   * @description Creates or updates an organization secret with an encrypted value. Encrypt your secret using [LibSodium](https://libsodium.gitbook.io/doc/bindings_for_other_languages). For more information, see "[Encrypting secrets for the REST API](https://docs.github.com/enterprise-server@3.17/rest/guides/encrypting-secrets-for-the-rest-api)." Authenticated users must have collaborator access to a repository to create, update, or read secrets. OAuth tokens and personal access tokens (classic) need the`admin:org` scope to use this endpoint. If the repository is private, OAuth tokens and personal access tokens (classic) need the `repo` scope to use this endpoint.
   *
   * @tags actions
   * @name ActionsCreateOrUpdateOrgSecret
   * @summary Create or update an organization secret
   * @request PUT:/orgs/{org}/actions/secrets/{secret_name}
   */
  actionsCreateOrUpdateOrgSecret = (
    org: string,
    secretName: string,
    data: ActionsCreateOrUpdateOrgSecretPayload,
    params: RequestParams = {},
  ) =>
    this.http.request<ActionsCreateOrUpdateOrgSecretData, any>({
      path: `/orgs/${org}/actions/secrets/${secretName}`,
      method: "PUT",
      body: data,
      type: ContentType.Json,
      format: "json",
      ...params,
    });
  /**
   * @description Deletes a secret in an organization using the secret name. Authenticated users must have collaborator access to a repository to create, update, or read secrets. OAuth tokens and personal access tokens (classic) need the`admin:org` scope to use this endpoint. If the repository is private, OAuth tokens and personal access tokens (classic) need the `repo` scope to use this endpoint.
   *
   * @tags actions
   * @name ActionsDeleteOrgSecret
   * @summary Delete an organization secret
   * @request DELETE:/orgs/{org}/actions/secrets/{secret_name}
   */
  actionsDeleteOrgSecret = (
    org: string,
    secretName: string,
    params: RequestParams = {},
  ) =>
    this.http.request<ActionsDeleteOrgSecretData, any>({
      path: `/orgs/${org}/actions/secrets/${secretName}`,
      method: "DELETE",
      ...params,
    });
  /**
   * @description Lists all repositories that have been selected when the `visibility` for repository access to a secret is set to `selected`. Authenticated users must have collaborator access to a repository to create, update, or read secrets. OAuth app tokens and personal access tokens (classic) need the `admin:org` scope to use this endpoint. If the repository is private, the `repo` scope is also required.
   *
   * @tags actions
   * @name ActionsListSelectedReposForOrgSecret
   * @summary List selected repositories for an organization secret
   * @request GET:/orgs/{org}/actions/secrets/{secret_name}/repositories
   */
  actionsListSelectedReposForOrgSecret = (
    { org, secretName, ...query }: ActionsListSelectedReposForOrgSecretParams,
    params: RequestParams = {},
  ) =>
    this.http.request<ActionsListSelectedReposForOrgSecretData, any>({
      path: `/orgs/${org}/actions/secrets/${secretName}/repositories`,
      method: "GET",
      query: query,
      format: "json",
      ...params,
    });
  /**
   * @description Replaces all repositories for an organization secret when the `visibility` for repository access is set to `selected`. The visibility is set when you [Create or update an organization secret](https://docs.github.com/enterprise-server@3.17/rest/actions/secrets#create-or-update-an-organization-secret). Authenticated users must have collaborator access to a repository to create, update, or read secrets. OAuth app tokens and personal access tokens (classic) need the `admin:org` scope to use this endpoint. If the repository is private, the `repo` scope is also required.
   *
   * @tags actions
   * @name ActionsSetSelectedReposForOrgSecret
   * @summary Set selected repositories for an organization secret
   * @request PUT:/orgs/{org}/actions/secrets/{secret_name}/repositories
   */
  actionsSetSelectedReposForOrgSecret = (
    org: string,
    secretName: string,
    data: ActionsSetSelectedReposForOrgSecretPayload,
    params: RequestParams = {},
  ) =>
    this.http.request<ActionsSetSelectedReposForOrgSecretData, any>({
      path: `/orgs/${org}/actions/secrets/${secretName}/repositories`,
      method: "PUT",
      body: data,
      type: ContentType.Json,
      ...params,
    });
  /**
   * @description Adds a repository to an organization secret when the `visibility` for repository access is set to `selected`. For more information about setting the visibility, see [Create or update an organization secret](https://docs.github.com/enterprise-server@3.17/rest/actions/secrets#create-or-update-an-organization-secret). Authenticated users must have collaborator access to a repository to create, update, or read secrets. OAuth tokens and personal access tokens (classic) need the `admin:org` scope to use this endpoint. If the repository is private, OAuth tokens and personal access tokens (classic) need the `repo` scope to use this endpoint.
   *
   * @tags actions
   * @name ActionsAddSelectedRepoToOrgSecret
   * @summary Add selected repository to an organization secret
   * @request PUT:/orgs/{org}/actions/secrets/{secret_name}/repositories/{repository_id}
   */
  actionsAddSelectedRepoToOrgSecret = (
    org: string,
    secretName: string,
    repositoryId: number,
    params: RequestParams = {},
  ) =>
    this.http.request<ActionsAddSelectedRepoToOrgSecretData, void>({
      path: `/orgs/${org}/actions/secrets/${secretName}/repositories/${repositoryId}`,
      method: "PUT",
      ...params,
    });
  /**
   * @description Removes a repository from an organization secret when the `visibility` for repository access is set to `selected`. The visibility is set when you [Create or update an organization secret](https://docs.github.com/enterprise-server@3.17/rest/actions/secrets#create-or-update-an-organization-secret). Authenticated users must have collaborator access to a repository to create, update, or read secrets. OAuth app tokens and personal access tokens (classic) need the `admin:org` scope to use this endpoint. If the repository is private, the `repo` scope is also required.
   *
   * @tags actions
   * @name ActionsRemoveSelectedRepoFromOrgSecret
   * @summary Remove selected repository from an organization secret
   * @request DELETE:/orgs/{org}/actions/secrets/{secret_name}/repositories/{repository_id}
   */
  actionsRemoveSelectedRepoFromOrgSecret = (
    org: string,
    secretName: string,
    repositoryId: number,
    params: RequestParams = {},
  ) =>
    this.http.request<ActionsRemoveSelectedRepoFromOrgSecretData, void>({
      path: `/orgs/${org}/actions/secrets/${secretName}/repositories/${repositoryId}`,
      method: "DELETE",
      ...params,
    });
  /**
   * @description Lists all organization variables. Authenticated users must have collaborator access to a repository to create, update, or read variables. OAuth app tokens and personal access tokens (classic) need the `admin:org` scope to use this endpoint. If the repository is private, the `repo` scope is also required.
   *
   * @tags actions
   * @name ActionsListOrgVariables
   * @summary List organization variables
   * @request GET:/orgs/{org}/actions/variables
   */
  actionsListOrgVariables = (
    { org, ...query }: ActionsListOrgVariablesParams,
    params: RequestParams = {},
  ) =>
    this.http.request<ActionsListOrgVariablesData, any>({
      path: `/orgs/${org}/actions/variables`,
      method: "GET",
      query: query,
      format: "json",
      ...params,
    });
  /**
   * @description Creates an organization variable that you can reference in a GitHub Actions workflow. Authenticated users must have collaborator access to a repository to create, update, or read variables. OAuth tokens and personal access tokens (classic) need the`admin:org` scope to use this endpoint. If the repository is private, OAuth tokens and personal access tokens (classic) need the `repo` scope to use this endpoint.
   *
   * @tags actions
   * @name ActionsCreateOrgVariable
   * @summary Create an organization variable
   * @request POST:/orgs/{org}/actions/variables
   */
  actionsCreateOrgVariable = (
    org: string,
    data: ActionsCreateOrgVariablePayload,
    params: RequestParams = {},
  ) =>
    this.http.request<ActionsCreateOrgVariableData, any>({
      path: `/orgs/${org}/actions/variables`,
      method: "POST",
      body: data,
      type: ContentType.Json,
      format: "json",
      ...params,
    });
  /**
   * @description Gets a specific variable in an organization. The authenticated user must have collaborator access to a repository to create, update, or read variables. OAuth tokens and personal access tokens (classic) need the`admin:org` scope to use this endpoint. If the repository is private, OAuth tokens and personal access tokens (classic) need the `repo` scope to use this endpoint.
   *
   * @tags actions
   * @name ActionsGetOrgVariable
   * @summary Get an organization variable
   * @request GET:/orgs/{org}/actions/variables/{name}
   */
  actionsGetOrgVariable = (
    org: string,
    name: string,
    params: RequestParams = {},
  ) =>
    this.http.request<ActionsGetOrgVariableData, any>({
      path: `/orgs/${org}/actions/variables/${name}`,
      method: "GET",
      format: "json",
      ...params,
    });
  /**
   * @description Updates an organization variable that you can reference in a GitHub Actions workflow. Authenticated users must have collaborator access to a repository to create, update, or read variables. OAuth app tokens and personal access tokens (classic) need the `admin:org` scope to use this endpoint. If the repository is private, the `repo` scope is also required.
   *
   * @tags actions
   * @name ActionsUpdateOrgVariable
   * @summary Update an organization variable
   * @request PATCH:/orgs/{org}/actions/variables/{name}
   */
  actionsUpdateOrgVariable = (
    org: string,
    name: string,
    data: ActionsUpdateOrgVariablePayload,
    params: RequestParams = {},
  ) =>
    this.http.request<ActionsUpdateOrgVariableData, any>({
      path: `/orgs/${org}/actions/variables/${name}`,
      method: "PATCH",
      body: data,
      type: ContentType.Json,
      ...params,
    });
  /**
   * @description Deletes an organization variable using the variable name. Authenticated users must have collaborator access to a repository to create, update, or read variables. OAuth tokens and personal access tokens (classic) need the`admin:org` scope to use this endpoint. If the repository is private, OAuth tokens and personal access tokens (classic) need the `repo` scope to use this endpoint.
   *
   * @tags actions
   * @name ActionsDeleteOrgVariable
   * @summary Delete an organization variable
   * @request DELETE:/orgs/{org}/actions/variables/{name}
   */
  actionsDeleteOrgVariable = (
    org: string,
    name: string,
    params: RequestParams = {},
  ) =>
    this.http.request<ActionsDeleteOrgVariableData, any>({
      path: `/orgs/${org}/actions/variables/${name}`,
      method: "DELETE",
      ...params,
    });
  /**
   * @description Lists all repositories that can access an organization variable that is available to selected repositories. Authenticated users must have collaborator access to a repository to create, update, or read variables. OAuth app tokens and personal access tokens (classic) need the `admin:org` scope to use this endpoint. If the repository is private, the `repo` scope is also required.
   *
   * @tags actions
   * @name ActionsListSelectedReposForOrgVariable
   * @summary List selected repositories for an organization variable
   * @request GET:/orgs/{org}/actions/variables/{name}/repositories
   */
  actionsListSelectedReposForOrgVariable = (
    { org, name, ...query }: ActionsListSelectedReposForOrgVariableParams,
    params: RequestParams = {},
  ) =>
    this.http.request<ActionsListSelectedReposForOrgVariableData, void>({
      path: `/orgs/${org}/actions/variables/${name}/repositories`,
      method: "GET",
      query: query,
      format: "json",
      ...params,
    });
  /**
   * @description Replaces all repositories for an organization variable that is available to selected repositories. Organization variables that are available to selected repositories have their `visibility` field set to `selected`. Authenticated users must have collaborator access to a repository to create, update, or read variables. OAuth app tokens and personal access tokens (classic) need the `admin:org` scope to use this endpoint. If the repository is private, the `repo` scope is also required.
   *
   * @tags actions
   * @name ActionsSetSelectedReposForOrgVariable
   * @summary Set selected repositories for an organization variable
   * @request PUT:/orgs/{org}/actions/variables/{name}/repositories
   */
  actionsSetSelectedReposForOrgVariable = (
    org: string,
    name: string,
    data: ActionsSetSelectedReposForOrgVariablePayload,
    params: RequestParams = {},
  ) =>
    this.http.request<ActionsSetSelectedReposForOrgVariableData, void>({
      path: `/orgs/${org}/actions/variables/${name}/repositories`,
      method: "PUT",
      body: data,
      type: ContentType.Json,
      ...params,
    });
  /**
   * @description Adds a repository to an organization variable that is available to selected repositories. Organization variables that are available to selected repositories have their `visibility` field set to `selected`. Authenticated users must have collaborator access to a repository to create, update, or read secrets. OAuth tokens and personal access tokens (classic) need the `admin:org` scope to use this endpoint. If the repository is private, OAuth tokens and personal access tokens (classic) need the `repo` scope to use this endpoint.
   *
   * @tags actions
   * @name ActionsAddSelectedRepoToOrgVariable
   * @summary Add selected repository to an organization variable
   * @request PUT:/orgs/{org}/actions/variables/{name}/repositories/{repository_id}
   */
  actionsAddSelectedRepoToOrgVariable = (
    org: string,
    name: string,
    repositoryId: number,
    params: RequestParams = {},
  ) =>
    this.http.request<ActionsAddSelectedRepoToOrgVariableData, void>({
      path: `/orgs/${org}/actions/variables/${name}/repositories/${repositoryId}`,
      method: "PUT",
      ...params,
    });
  /**
   * @description Removes a repository from an organization variable that is available to selected repositories. Organization variables that are available to selected repositories have their `visibility` field set to `selected`. Authenticated users must have collaborator access to a repository to create, update, or read variables. OAuth app tokens and personal access tokens (classic) need the `admin:org` scope to use this endpoint. If the repository is private, the `repo` scope is also required.
   *
   * @tags actions
   * @name ActionsRemoveSelectedRepoFromOrgVariable
   * @summary Remove selected repository from an organization variable
   * @request DELETE:/orgs/{org}/actions/variables/{name}/repositories/{repository_id}
   */
  actionsRemoveSelectedRepoFromOrgVariable = (
    org: string,
    name: string,
    repositoryId: number,
    params: RequestParams = {},
  ) =>
    this.http.request<ActionsRemoveSelectedRepoFromOrgVariableData, void>({
      path: `/orgs/${org}/actions/variables/${name}/repositories/${repositoryId}`,
      method: "DELETE",
      ...params,
    });
  /**
   * @description Gets the announcement banner currently set for the organization. Only returns the announcement banner set at the organization level. Organization members may also see an enterprise-level announcement banner. To get an announcement banner displayed at the enterprise level, use the enterprise-level endpoint.
   *
   * @tags orgs
   * @name AnnouncementBannersGetAnnouncementBannerForOrg
   * @summary Get announcement banner for organization
   * @request GET:/orgs/{org}/announcement
   */
  announcementBannersGetAnnouncementBannerForOrg = (
    org: string,
    params: RequestParams = {},
  ) =>
    this.http.request<AnnouncementBannersGetAnnouncementBannerForOrgData, any>({
      path: `/orgs/${org}/announcement`,
      method: "GET",
      format: "json",
      ...params,
    });
  /**
   * @description Sets the announcement banner to display for the organization.
   *
   * @tags orgs
   * @name AnnouncementBannersSetAnnouncementBannerForOrg
   * @summary Set announcement banner for organization
   * @request PATCH:/orgs/{org}/announcement
   */
  announcementBannersSetAnnouncementBannerForOrg = (
    org: string,
    data: Announcement,
    params: RequestParams = {},
  ) =>
    this.http.request<AnnouncementBannersSetAnnouncementBannerForOrgData, any>({
      path: `/orgs/${org}/announcement`,
      method: "PATCH",
      body: data,
      type: ContentType.Json,
      format: "json",
      ...params,
    });
  /**
   * @description Removes the announcement banner currently set for the organization.
   *
   * @tags orgs
   * @name AnnouncementBannersRemoveAnnouncementBannerForOrg
   * @summary Remove announcement banner from organization
   * @request DELETE:/orgs/{org}/announcement
   */
  announcementBannersRemoveAnnouncementBannerForOrg = (
    org: string,
    params: RequestParams = {},
  ) =>
    this.http.request<
      AnnouncementBannersRemoveAnnouncementBannerForOrgData,
      any
    >({
      path: `/orgs/${org}/announcement`,
      method: "DELETE",
      ...params,
    });
  /**
   * @description Gets the audit log for an organization. For more information, see "[Reviewing the audit log for your organization](https://docs.github.com/enterprise-server@3.17/github/setting-up-and-managing-organizations-and-teams/reviewing-the-audit-log-for-your-organization)." By default, the response includes up to 30 events from the past three months. Use the `phrase` parameter to filter results and retrieve older events. For example, use the `phrase` parameter with the `created` qualifier to filter events based on when the events occurred. For more information, see "[Reviewing the audit log for your organization](https://docs.github.com/enterprise-server@3.17/organizations/keeping-your-organization-secure/managing-security-settings-for-your-organization/reviewing-the-audit-log-for-your-organization#searching-the-audit-log)." Use pagination to retrieve fewer or more than 30 events. For more information, see "[Using pagination in the REST API](https://docs.github.com/enterprise-server@3.17/rest/guides/using-pagination-in-the-rest-api)." The authenticated user must be an organization owner to use this endpoint. OAuth app tokens and personal access tokens (classic) need the `read:audit_log` scope to use this endpoint.
   *
   * @tags orgs
   * @name OrgsGetAuditLog
   * @summary Get the audit log for an organization
   * @request GET:/orgs/{org}/audit-log
   */
  orgsGetAuditLog = (
    { org, ...query }: OrgsGetAuditLogParams,
    params: RequestParams = {},
  ) =>
    this.http.request<OrgsGetAuditLogData, any>({
      path: `/orgs/${org}/audit-log`,
      method: "GET",
      query: query,
      format: "json",
      ...params,
    });
  /**
   * @description Lists the requests made by users of a repository to bypass push protection rules within an organization.
   *
   * @tags orgs
   * @name OrgsListPushBypassRequests
   * @summary List push rule bypass requests within an organization
   * @request GET:/orgs/{org}/bypass-requests/push-rules
   */
  orgsListPushBypassRequests = (
    { org, ...query }: OrgsListPushBypassRequestsParams,
    params: RequestParams = {},
  ) =>
    this.http.request<OrgsListPushBypassRequestsData, BasicError>({
      path: `/orgs/${org}/bypass-requests/push-rules`,
      method: "GET",
      query: query,
      format: "json",
      ...params,
    });
  /**
   * @description List requests to bypass secret scanning push protection in an org. Delegated bypass must be enabled on repositories in the org and the user must be a bypass reviewer to access this endpoint. Personal access tokens (classic) need the `security_events` scope to use this endpoint.
   *
   * @tags secret-scanning
   * @name SecretScanningListOrgBypassRequests
   * @summary List bypass requests for secret scanning for an org
   * @request GET:/orgs/{org}/bypass-requests/secret-scanning
   */
  secretScanningListOrgBypassRequests = (
    { org, ...query }: SecretScanningListOrgBypassRequestsParams,
    params: RequestParams = {},
  ) =>
    this.http.request<SecretScanningListOrgBypassRequestsData, BasicError>({
      path: `/orgs/${org}/bypass-requests/secret-scanning`,
      method: "GET",
      query: query,
      format: "json",
      ...params,
    });
  /**
   * @description Lists code scanning alerts for the default branch for all eligible repositories in an organization. Eligible repositories are repositories that are owned by organizations that you own or for which you are a security manager. For more information, see "[Managing security managers in your organization](https://docs.github.com/enterprise-server@3.17/organizations/managing-peoples-access-to-your-organization-with-roles/managing-security-managers-in-your-organization)." The authenticated user must be an owner or security manager for the organization to use this endpoint. OAuth app tokens and personal access tokens (classic) need the `security_events` or `repo`s cope to use this endpoint with private or public repositories, or the `public_repo` scope to use this endpoint with only public repositories.
   *
   * @tags code-scanning
   * @name CodeScanningListAlertsForOrg
   * @summary List code scanning alerts for an organization
   * @request GET:/orgs/{org}/code-scanning/alerts
   */
  codeScanningListAlertsForOrg = (
    { org, ...query }: CodeScanningListAlertsForOrgParams,
    params: RequestParams = {},
  ) =>
    this.http.request<
      CodeScanningListAlertsForOrgData,
      | BasicError
      | {
          code?: string;
          message?: string;
          documentation_url?: string;
        }
    >({
      path: `/orgs/${org}/code-scanning/alerts`,
      method: "GET",
      query: query,
      format: "json",
      ...params,
    });
  /**
   * @description Lists all code security configurations available in an organization. The authenticated user must be an administrator or security manager for the organization to use this endpoint. OAuth app tokens and personal access tokens (classic) need the `write:org` scope to use this endpoint. > [!NOTE] > The enablement status will only be returned for installed security products.
   *
   * @tags code-security
   * @name CodeSecurityGetConfigurationsForOrg
   * @summary Get code security configurations for an organization
   * @request GET:/orgs/{org}/code-security/configurations
   */
  codeSecurityGetConfigurationsForOrg = (
    { org, ...query }: CodeSecurityGetConfigurationsForOrgParams,
    params: RequestParams = {},
  ) =>
    this.http.request<CodeSecurityGetConfigurationsForOrgData, BasicError>({
      path: `/orgs/${org}/code-security/configurations`,
      method: "GET",
      query: query,
      format: "json",
      ...params,
    });
  /**
   * @description Creates a code security configuration in an organization. The authenticated user must be an administrator or security manager for the organization to use this endpoint. OAuth app tokens and personal access tokens (classic) need the `write:org` scope to use this endpoint. > [!NOTE] > Only installed security products may be specified in the request body. Specifying an uninstalled security product will result in a validation error.
   *
   * @tags code-security
   * @name CodeSecurityCreateConfiguration
   * @summary Create a code security configuration
   * @request POST:/orgs/{org}/code-security/configurations
   */
  codeSecurityCreateConfiguration = (
    org: string,
    data: CodeSecurityCreateConfigurationPayload,
    params: RequestParams = {},
  ) =>
    this.http.request<CodeSecurityCreateConfigurationData, any>({
      path: `/orgs/${org}/code-security/configurations`,
      method: "POST",
      body: data,
      type: ContentType.Json,
      format: "json",
      ...params,
    });
  /**
   * @description Lists the default code security configurations for an organization. The authenticated user must be an administrator or security manager for the organization to use this endpoint. > [!NOTE] > The enablement status will only be returned for installed security products.
   *
   * @tags code-security
   * @name CodeSecurityGetDefaultConfigurations
   * @summary Get default code security configurations
   * @request GET:/orgs/{org}/code-security/configurations/defaults
   */
  codeSecurityGetDefaultConfigurations = (
    org: string,
    params: RequestParams = {},
  ) =>
    this.http.request<CodeSecurityGetDefaultConfigurationsData, BasicError>({
      path: `/orgs/${org}/code-security/configurations/defaults`,
      method: "GET",
      format: "json",
      ...params,
    });
  /**
   * @description Detach code security configuration(s) from a set of repositories. Repositories will retain their settings but will no longer be associated with the configuration. The authenticated user must be an administrator or security manager for the organization to use this endpoint. OAuth app tokens and personal access tokens (classic) need the `write:org` scope to use this endpoint.
   *
   * @tags code-security
   * @name CodeSecurityDetachConfiguration
   * @summary Detach configurations from repositories
   * @request DELETE:/orgs/{org}/code-security/configurations/detach
   */
  codeSecurityDetachConfiguration = (
    org: string,
    data: CodeSecurityDetachConfigurationPayload,
    params: RequestParams = {},
  ) =>
    this.http.request<any, BasicError>({
      path: `/orgs/${org}/code-security/configurations/detach`,
      method: "DELETE",
      body: data,
      type: ContentType.Json,
      ...params,
    });
  /**
   * @description Gets a code security configuration available in an organization. The authenticated user must be an administrator or security manager for the organization to use this endpoint. OAuth app tokens and personal access tokens (classic) need the `write:org` scope to use this endpoint. > [!NOTE] > The enablement status will only be returned for installed security products.
   *
   * @tags code-security
   * @name CodeSecurityGetConfiguration
   * @summary Get a code security configuration
   * @request GET:/orgs/{org}/code-security/configurations/{configuration_id}
   */
  codeSecurityGetConfiguration = (
    org: string,
    configurationId: number,
    params: RequestParams = {},
  ) =>
    this.http.request<CodeSecurityGetConfigurationData, BasicError>({
      path: `/orgs/${org}/code-security/configurations/${configurationId}`,
      method: "GET",
      format: "json",
      ...params,
    });
  /**
   * @description Updates a code security configuration in an organization. The authenticated user must be an administrator or security manager for the organization to use this endpoint. OAuth app tokens and personal access tokens (classic) need the `write:org` scope to use this endpoint. > [!NOTE] > Only installed security products may be specified in the request body. Specifying an uninstalled security product will result in a validation error.
   *
   * @tags code-security
   * @name CodeSecurityUpdateConfiguration
   * @summary Update a code security configuration
   * @request PATCH:/orgs/{org}/code-security/configurations/{configuration_id}
   */
  codeSecurityUpdateConfiguration = (
    org: string,
    configurationId: number,
    data: CodeSecurityUpdateConfigurationPayload,
    params: RequestParams = {},
  ) =>
    this.http.request<CodeSecurityUpdateConfigurationData, any>({
      path: `/orgs/${org}/code-security/configurations/${configurationId}`,
      method: "PATCH",
      body: data,
      type: ContentType.Json,
      format: "json",
      ...params,
    });
  /**
   * @description Deletes the desired code security configuration from an organization. Repositories attached to the configuration will retain their settings but will no longer be associated with the configuration. The authenticated user must be an administrator or security manager for the organization to use this endpoint. OAuth app tokens and personal access tokens (classic) need the `write:org` scope to use this endpoint.
   *
   * @tags code-security
   * @name CodeSecurityDeleteConfiguration
   * @summary Delete a code security configuration
   * @request DELETE:/orgs/{org}/code-security/configurations/{configuration_id}
   */
  codeSecurityDeleteConfiguration = (
    org: string,
    configurationId: number,
    params: RequestParams = {},
  ) =>
    this.http.request<any, BasicError>({
      path: `/orgs/${org}/code-security/configurations/${configurationId}`,
      method: "DELETE",
      ...params,
    });
  /**
   * @description Attach a code security configuration to a set of repositories. If the repositories specified are already attached to a configuration, they will be re-attached to the provided configuration. If insufficient GHAS licenses are available to attach the configuration to a repository, only free features will be enabled. The authenticated user must be an administrator or security manager for the organization to use this endpoint. OAuth app tokens and personal access tokens (classic) need the `write:org` scope to use this endpoint.
   *
   * @tags code-security
   * @name CodeSecurityAttachConfiguration
   * @summary Attach a configuration to repositories
   * @request POST:/orgs/{org}/code-security/configurations/{configuration_id}/attach
   */
  codeSecurityAttachConfiguration = (
    org: string,
    configurationId: number,
    data: CodeSecurityAttachConfigurationPayload,
    params: RequestParams = {},
  ) =>
    this.http.request<object, any>({
      path: `/orgs/${org}/code-security/configurations/${configurationId}/attach`,
      method: "POST",
      body: data,
      type: ContentType.Json,
      ...params,
    });
  /**
   * @description Sets a code security configuration as a default to be applied to new repositories in your organization. This configuration will be applied to the matching repository type (all, none, public, private and internal) by default when they are created. The authenticated user must be an administrator or security manager for the organization to use this endpoint. OAuth app tokens and personal access tokens (classic) need the `write:org` scope to use this endpoint. > [!NOTE] > The enablement status will only be returned for installed security products.
   *
   * @tags code-security
   * @name CodeSecuritySetConfigurationAsDefault
   * @summary Set a code security configuration as a default for an organization
   * @request PUT:/orgs/{org}/code-security/configurations/{configuration_id}/defaults
   */
  codeSecuritySetConfigurationAsDefault = (
    org: string,
    configurationId: number,
    data: CodeSecuritySetConfigurationAsDefaultPayload,
    params: RequestParams = {},
  ) =>
    this.http.request<CodeSecuritySetConfigurationAsDefaultData, BasicError>({
      path: `/orgs/${org}/code-security/configurations/${configurationId}/defaults`,
      method: "PUT",
      body: data,
      type: ContentType.Json,
      format: "json",
      ...params,
    });
  /**
   * @description Lists the repositories associated with a code security configuration in an organization. The authenticated user must be an administrator or security manager for the organization to use this endpoint. OAuth app tokens and personal access tokens (classic) need the `write:org` scope to use this endpoint.
   *
   * @tags code-security
   * @name CodeSecurityGetRepositoriesForConfiguration
   * @summary Get repositories associated with a code security configuration
   * @request GET:/orgs/{org}/code-security/configurations/{configuration_id}/repositories
   */
  codeSecurityGetRepositoriesForConfiguration = (
    {
      org,
      configurationId,
      ...query
    }: CodeSecurityGetRepositoriesForConfigurationParams,
    params: RequestParams = {},
  ) =>
    this.http.request<
      CodeSecurityGetRepositoriesForConfigurationData,
      BasicError
    >({
      path: `/orgs/${org}/code-security/configurations/${configurationId}/repositories`,
      method: "GET",
      query: query,
      format: "json",
      ...params,
    });
  /**
   * @description List the custom repository roles available in this organization. For more information on custom repository roles, see "[About custom repository roles](https://docs.github.com/enterprise-server@3.17/organizations/managing-peoples-access-to-your-organization-with-roles/about-custom-repository-roles)." The authenticated user must be an administrator of the organization or of a repository of the organization to use this endpoint. OAuth app tokens and personal access tokens (classic) need the `admin:org` or `repo` scope to use this endpoint.
   *
   * @tags orgs
   * @name OrgsListCustomRepoRoles
   * @summary List custom repository roles in an organization
   * @request GET:/orgs/{org}/custom-repository-roles
   */
  orgsListCustomRepoRoles = (org: string, params: RequestParams = {}) =>
    this.http.request<OrgsListCustomRepoRolesData, any>({
      path: `/orgs/${org}/custom-repository-roles`,
      method: "GET",
      format: "json",
      ...params,
    });
  /**
   * @description Creates a custom repository role that can be used by all repositories owned by the organization. For more information on custom repository roles, see "[About custom repository roles](https://docs.github.com/enterprise-server@3.17/organizations/managing-peoples-access-to-your-organization-with-roles/about-custom-repository-roles)." The authenticated user must be an administrator for the organization to use this endpoint. OAuth app tokens and personal access tokens (classic) need the `admin:org` scope to use this endpoint.
   *
   * @tags orgs
   * @name OrgsCreateCustomRepoRole
   * @summary Create a custom repository role
   * @request POST:/orgs/{org}/custom-repository-roles
   */
  orgsCreateCustomRepoRole = (
    org: string,
    data: OrganizationCustomRepositoryRoleCreateSchema,
    params: RequestParams = {},
  ) =>
    this.http.request<
      OrgsCreateCustomRepoRoleData,
      BasicError | ValidationError
    >({
      path: `/orgs/${org}/custom-repository-roles`,
      method: "POST",
      body: data,
      type: ContentType.Json,
      format: "json",
      ...params,
    });
  /**
   * @description Gets a custom repository role that is available to all repositories owned by the organization. For more information on custom repository roles, see "[About custom repository roles](https://docs.github.com/enterprise-server@3.17/organizations/managing-peoples-access-to-your-organization-with-roles/about-custom-repository-roles)." The authenticated user must be an administrator of the organization or of a repository of the organization to use this endpoint. OAuth app tokens and personal access tokens (classic) need the `admin:org` or `repo` scope to use this endpoint.
   *
   * @tags orgs
   * @name OrgsGetCustomRepoRole
   * @summary Get a custom repository role
   * @request GET:/orgs/{org}/custom-repository-roles/{role_id}
   */
  orgsGetCustomRepoRole = (
    org: string,
    roleId: number,
    params: RequestParams = {},
  ) =>
    this.http.request<OrgsGetCustomRepoRoleData, BasicError>({
      path: `/orgs/${org}/custom-repository-roles/${roleId}`,
      method: "GET",
      format: "json",
      ...params,
    });
  /**
   * @description Updates a custom repository role that can be used by all repositories owned by the organization. For more information about custom repository roles, see "[About custom repository roles](https://docs.github.com/enterprise-server@3.17/organizations/managing-peoples-access-to-your-organization-with-roles/about-custom-repository-roles)." The authenticated user must be an administrator for the organization to use this endpoint. OAuth app tokens and personal access tokens (classic) need the `admin:org` scope to use this endpoint.
   *
   * @tags orgs
   * @name OrgsUpdateCustomRepoRole
   * @summary Update a custom repository role
   * @request PATCH:/orgs/{org}/custom-repository-roles/{role_id}
   */
  orgsUpdateCustomRepoRole = (
    org: string,
    roleId: number,
    data: OrganizationCustomRepositoryRoleUpdateSchema,
    params: RequestParams = {},
  ) =>
    this.http.request<
      OrgsUpdateCustomRepoRoleData,
      BasicError | ValidationError
    >({
      path: `/orgs/${org}/custom-repository-roles/${roleId}`,
      method: "PATCH",
      body: data,
      type: ContentType.Json,
      format: "json",
      ...params,
    });
  /**
   * @description Deletes a custom role from an organization. Once the custom role has been deleted, any user, team, or invitation with the deleted custom role will be reassigned the inherited role. For more information about custom repository roles, see "[About custom repository roles](https://docs.github.com/enterprise-server@3.17/organizations/managing-peoples-access-to-your-organization-with-roles/about-custom-repository-roles)." The authenticated user must be an administrator for the organization to use this endpoint. OAuth app tokens and personal access tokens (classic) need the `admin:org` scope to use this endpoint.
   *
   * @tags orgs
   * @name OrgsDeleteCustomRepoRole
   * @summary Delete a custom repository role
   * @request DELETE:/orgs/{org}/custom-repository-roles/{role_id}
   */
  orgsDeleteCustomRepoRole = (
    org: string,
    roleId: number,
    params: RequestParams = {},
  ) =>
    this.http.request<OrgsDeleteCustomRepoRoleData, any>({
      path: `/orgs/${org}/custom-repository-roles/${roleId}`,
      method: "DELETE",
      ...params,
    });
  /**
   * @description Lists Dependabot alerts for an organization. The authenticated user must be an owner or security manager for the organization to use this endpoint. OAuth app tokens and personal access tokens (classic) need the `security_events` scope to use this endpoint. If this endpoint is only used with public repositories, the token can use the `public_repo` scope instead.
   *
   * @tags dependabot
   * @name DependabotListAlertsForOrg
   * @summary List Dependabot alerts for an organization
   * @request GET:/orgs/{org}/dependabot/alerts
   */
  dependabotListAlertsForOrg = (
    { org, ...query }: DependabotListAlertsForOrgParams,
    params: RequestParams = {},
  ) =>
    this.http.request<
      DependabotListAlertsForOrgData,
      BasicError | ValidationErrorSimple
    >({
      path: `/orgs/${org}/dependabot/alerts`,
      method: "GET",
      query: query,
      format: "json",
      ...params,
    });
  /**
   * @description Lists all secrets available in an organization without revealing their encrypted values. OAuth app tokens and personal access tokens (classic) need the `admin:org` scope to use this endpoint.
   *
   * @tags dependabot
   * @name DependabotListOrgSecrets
   * @summary List organization secrets
   * @request GET:/orgs/{org}/dependabot/secrets
   */
  dependabotListOrgSecrets = (
    { org, ...query }: DependabotListOrgSecretsParams,
    params: RequestParams = {},
  ) =>
    this.http.request<DependabotListOrgSecretsData, any>({
      path: `/orgs/${org}/dependabot/secrets`,
      method: "GET",
      query: query,
      format: "json",
      ...params,
    });
  /**
   * @description Gets your public key, which you need to encrypt secrets. You need to encrypt a secret before you can create or update secrets. OAuth app tokens and personal access tokens (classic) need the `admin:org` scope to use this endpoint.
   *
   * @tags dependabot
   * @name DependabotGetOrgPublicKey
   * @summary Get an organization public key
   * @request GET:/orgs/{org}/dependabot/secrets/public-key
   */
  dependabotGetOrgPublicKey = (org: string, params: RequestParams = {}) =>
    this.http.request<DependabotGetOrgPublicKeyData, any>({
      path: `/orgs/${org}/dependabot/secrets/public-key`,
      method: "GET",
      format: "json",
      ...params,
    });
  /**
   * @description Gets a single organization secret without revealing its encrypted value. OAuth app tokens and personal access tokens (classic) need the `admin:org` scope to use this endpoint.
   *
   * @tags dependabot
   * @name DependabotGetOrgSecret
   * @summary Get an organization secret
   * @request GET:/orgs/{org}/dependabot/secrets/{secret_name}
   */
  dependabotGetOrgSecret = (
    org: string,
    secretName: string,
    params: RequestParams = {},
  ) =>
    this.http.request<DependabotGetOrgSecretData, any>({
      path: `/orgs/${org}/dependabot/secrets/${secretName}`,
      method: "GET",
      format: "json",
      ...params,
    });
  /**
   * @description Creates or updates an organization secret with an encrypted value. Encrypt your secret using [LibSodium](https://libsodium.gitbook.io/doc/bindings_for_other_languages). For more information, see "[Encrypting secrets for the REST API](https://docs.github.com/enterprise-server@3.17/rest/guides/encrypting-secrets-for-the-rest-api)." OAuth app tokens and personal access tokens (classic) need the `admin:org` scope to use this endpoint.
   *
   * @tags dependabot
   * @name DependabotCreateOrUpdateOrgSecret
   * @summary Create or update an organization secret
   * @request PUT:/orgs/{org}/dependabot/secrets/{secret_name}
   */
  dependabotCreateOrUpdateOrgSecret = (
    org: string,
    secretName: string,
    data: DependabotCreateOrUpdateOrgSecretPayload,
    params: RequestParams = {},
  ) =>
    this.http.request<DependabotCreateOrUpdateOrgSecretData, any>({
      path: `/orgs/${org}/dependabot/secrets/${secretName}`,
      method: "PUT",
      body: data,
      type: ContentType.Json,
      format: "json",
      ...params,
    });
  /**
   * @description Deletes a secret in an organization using the secret name. OAuth app tokens and personal access tokens (classic) need the `admin:org` scope to use this endpoint.
   *
   * @tags dependabot
   * @name DependabotDeleteOrgSecret
   * @summary Delete an organization secret
   * @request DELETE:/orgs/{org}/dependabot/secrets/{secret_name}
   */
  dependabotDeleteOrgSecret = (
    org: string,
    secretName: string,
    params: RequestParams = {},
  ) =>
    this.http.request<DependabotDeleteOrgSecretData, any>({
      path: `/orgs/${org}/dependabot/secrets/${secretName}`,
      method: "DELETE",
      ...params,
    });
  /**
   * @description Lists all repositories that have been selected when the `visibility` for repository access to a secret is set to `selected`. OAuth app tokens and personal access tokens (classic) need the `admin:org` scope to use this endpoint.
   *
   * @tags dependabot
   * @name DependabotListSelectedReposForOrgSecret
   * @summary List selected repositories for an organization secret
   * @request GET:/orgs/{org}/dependabot/secrets/{secret_name}/repositories
   */
  dependabotListSelectedReposForOrgSecret = (
    {
      org,
      secretName,
      ...query
    }: DependabotListSelectedReposForOrgSecretParams,
    params: RequestParams = {},
  ) =>
    this.http.request<DependabotListSelectedReposForOrgSecretData, any>({
      path: `/orgs/${org}/dependabot/secrets/${secretName}/repositories`,
      method: "GET",
      query: query,
      format: "json",
      ...params,
    });
  /**
   * @description Replaces all repositories for an organization secret when the `visibility` for repository access is set to `selected`. The visibility is set when you [Create or update an organization secret](https://docs.github.com/enterprise-server@3.17/rest/dependabot/secrets#create-or-update-an-organization-secret). OAuth app tokens and personal access tokens (classic) need the `admin:org` scope to use this endpoint.
   *
   * @tags dependabot
   * @name DependabotSetSelectedReposForOrgSecret
   * @summary Set selected repositories for an organization secret
   * @request PUT:/orgs/{org}/dependabot/secrets/{secret_name}/repositories
   */
  dependabotSetSelectedReposForOrgSecret = (
    org: string,
    secretName: string,
    data: DependabotSetSelectedReposForOrgSecretPayload,
    params: RequestParams = {},
  ) =>
    this.http.request<DependabotSetSelectedReposForOrgSecretData, any>({
      path: `/orgs/${org}/dependabot/secrets/${secretName}/repositories`,
      method: "PUT",
      body: data,
      type: ContentType.Json,
      ...params,
    });
  /**
   * @description Adds a repository to an organization secret when the `visibility` for repository access is set to `selected`. The visibility is set when you [Create or update an organization secret](https://docs.github.com/enterprise-server@3.17/rest/dependabot/secrets#create-or-update-an-organization-secret). OAuth app tokens and personal access tokens (classic) need the `admin:org` scope to use this endpoint.
   *
   * @tags dependabot
   * @name DependabotAddSelectedRepoToOrgSecret
   * @summary Add selected repository to an organization secret
   * @request PUT:/orgs/{org}/dependabot/secrets/{secret_name}/repositories/{repository_id}
   */
  dependabotAddSelectedRepoToOrgSecret = (
    org: string,
    secretName: string,
    repositoryId: number,
    params: RequestParams = {},
  ) =>
    this.http.request<DependabotAddSelectedRepoToOrgSecretData, void>({
      path: `/orgs/${org}/dependabot/secrets/${secretName}/repositories/${repositoryId}`,
      method: "PUT",
      ...params,
    });
  /**
   * @description Removes a repository from an organization secret when the `visibility` for repository access is set to `selected`. The visibility is set when you [Create or update an organization secret](https://docs.github.com/enterprise-server@3.17/rest/dependabot/secrets#create-or-update-an-organization-secret). OAuth app tokens and personal access tokens (classic) need the `admin:org` scope to use this endpoint.
   *
   * @tags dependabot
   * @name DependabotRemoveSelectedRepoFromOrgSecret
   * @summary Remove selected repository from an organization secret
   * @request DELETE:/orgs/{org}/dependabot/secrets/{secret_name}/repositories/{repository_id}
   */
  dependabotRemoveSelectedRepoFromOrgSecret = (
    org: string,
    secretName: string,
    repositoryId: number,
    params: RequestParams = {},
  ) =>
    this.http.request<DependabotRemoveSelectedRepoFromOrgSecretData, void>({
      path: `/orgs/${org}/dependabot/secrets/${secretName}/repositories/${repositoryId}`,
      method: "DELETE",
      ...params,
    });
  /**
   * @description Lists all packages that are in a specific organization, are readable by the requesting user, and that encountered a conflict during a Docker migration. OAuth app tokens and personal access tokens (classic) need the `read:packages` scope to use this endpoint.
   *
   * @tags packages
   * @name PackagesListDockerMigrationConflictingPackagesForOrganization
   * @summary Get list of conflicting packages during Docker migration for organization
   * @request GET:/orgs/{org}/docker/conflicts
   */
  packagesListDockerMigrationConflictingPackagesForOrganization = (
    org: string,
    params: RequestParams = {},
  ) =>
    this.http.request<
      PackagesListDockerMigrationConflictingPackagesForOrganizationData,
      BasicError
    >({
      path: `/orgs/${org}/docker/conflicts`,
      method: "GET",
      format: "json",
      ...params,
    });
  /**
   * @description > [!NOTE] > This API is not built to serve real-time use cases. Depending on the time of day, event latency can be anywhere from 30s to 6h.
   *
   * @tags activity
   * @name ActivityListPublicOrgEvents
   * @summary List public organization events
   * @request GET:/orgs/{org}/events
   */
  activityListPublicOrgEvents = (
    { org, ...query }: ActivityListPublicOrgEventsParams,
    params: RequestParams = {},
  ) =>
    this.http.request<ActivityListPublicOrgEventsData, any>({
      path: `/orgs/${org}/events`,
      method: "GET",
      query: query,
      format: "json",
      ...params,
    });
  /**
   * @description Displays information about the specific group's usage.  Provides a list of the group's external members as well as a list of teams that this group is connected to. You can manage team membership with your identity provider using Enterprise Managed Users for GitHub Enterprise Cloud. For more information, see "[GitHub's products](https://docs.github.com/enterprise-server@3.17/github/getting-started-with-github/githubs-products)" in the GitHub Help documentation.
   *
   * @tags teams
   * @name TeamsExternalIdpGroupInfoForOrg
   * @summary Get an external group
   * @request GET:/orgs/{org}/external-group/{group_id}
   */
  teamsExternalIdpGroupInfoForOrg = (
    { org, groupId, ...query }: TeamsExternalIdpGroupInfoForOrgParams,
    params: RequestParams = {},
  ) =>
    this.http.request<TeamsExternalIdpGroupInfoForOrgData, any>({
      path: `/orgs/${org}/external-group/${groupId}`,
      method: "GET",
      query: query,
      format: "json",
      ...params,
    });
  /**
   * @description Lists external groups available in an organization. You can query the groups using the `display_name` parameter, only groups with a `group_name` containing the text provided in the `display_name` parameter will be returned.  You can also limit your page results using the `per_page` parameter. GitHub Enterprise Server generates a url-encoded `page` token using a cursor value for where the next page begins. For more information on cursor pagination, see "[Offset and Cursor Pagination explained](https://dev.to/jackmarchant/offset-and-cursor-pagination-explained-b89)." You can manage team membership with your identity provider using Enterprise Managed Users for GitHub Enterprise Cloud. For more information, see "[GitHub's products](https://docs.github.com/enterprise-server@3.17/github/getting-started-with-github/githubs-products)" in the GitHub Help documentation.
   *
   * @tags teams
   * @name TeamsListExternalIdpGroupsForOrg
   * @summary List external groups in an organization
   * @request GET:/orgs/{org}/external-groups
   */
  teamsListExternalIdpGroupsForOrg = (
    { org, ...query }: TeamsListExternalIdpGroupsForOrgParams,
    params: RequestParams = {},
  ) =>
    this.http.request<TeamsListExternalIdpGroupsForOrgData, any>({
      path: `/orgs/${org}/external-groups`,
      method: "GET",
      query: query,
      format: "json",
      ...params,
    });
  /**
   * @description List webhooks for an organization. The authenticated user must be an organization owner to use this endpoint. OAuth app tokens and personal access tokens (classic) need `admin:org_hook` scope. OAuth apps cannot list, view, or edit webhooks that they did not create and users cannot list, view, or edit webhooks that were created by OAuth apps.
   *
   * @tags orgs
   * @name OrgsListWebhooks
   * @summary List organization webhooks
   * @request GET:/orgs/{org}/hooks
   */
  orgsListWebhooks = (
    { org, ...query }: OrgsListWebhooksParams,
    params: RequestParams = {},
  ) =>
    this.http.request<OrgsListWebhooksData, BasicError>({
      path: `/orgs/${org}/hooks`,
      method: "GET",
      query: query,
      format: "json",
      ...params,
    });
  /**
   * @description Create a hook that posts payloads in JSON format. You must be an organization owner to use this endpoint. OAuth app tokens and personal access tokens (classic) need `admin:org_hook` scope. OAuth apps cannot list, view, or edit webhooks that they did not create and users cannot list, view, or edit webhooks that were created by OAuth apps.
   *
   * @tags orgs
   * @name OrgsCreateWebhook
   * @summary Create an organization webhook
   * @request POST:/orgs/{org}/hooks
   */
  orgsCreateWebhook = (
    org: string,
    data: OrgsCreateWebhookPayload,
    params: RequestParams = {},
  ) =>
    this.http.request<OrgsCreateWebhookData, BasicError | ValidationError>({
      path: `/orgs/${org}/hooks`,
      method: "POST",
      body: data,
      type: ContentType.Json,
      format: "json",
      ...params,
    });
  /**
   * @description Returns a webhook configured in an organization. To get only the webhook `config` properties, see "[Get a webhook configuration for an organization](/rest/orgs/webhooks#get-a-webhook-configuration-for-an-organization). You must be an organization owner to use this endpoint. OAuth app tokens and personal access tokens (classic) need `admin:org_hook` scope. OAuth apps cannot list, view, or edit webhooks that they did not create and users cannot list, view, or edit webhooks that were created by OAuth apps.
   *
   * @tags orgs
   * @name OrgsGetWebhook
   * @summary Get an organization webhook
   * @request GET:/orgs/{org}/hooks/{hook_id}
   */
  orgsGetWebhook = (org: string, hookId: number, params: RequestParams = {}) =>
    this.http.request<OrgsGetWebhookData, BasicError>({
      path: `/orgs/${org}/hooks/${hookId}`,
      method: "GET",
      format: "json",
      ...params,
    });
  /**
   * @description Updates a webhook configured in an organization. When you update a webhook, the `secret` will be overwritten. If you previously had a `secret` set, you must provide the same `secret` or set a new `secret` or the secret will be removed. If you are only updating individual webhook `config` properties, use "[Update a webhook configuration for an organization](/rest/orgs/webhooks#update-a-webhook-configuration-for-an-organization)". You must be an organization owner to use this endpoint. OAuth app tokens and personal access tokens (classic) need `admin:org_hook` scope. OAuth apps cannot list, view, or edit webhooks that they did not create and users cannot list, view, or edit webhooks that were created by OAuth apps.
   *
   * @tags orgs
   * @name OrgsUpdateWebhook
   * @summary Update an organization webhook
   * @request PATCH:/orgs/{org}/hooks/{hook_id}
   */
  orgsUpdateWebhook = (
    org: string,
    hookId: number,
    data?: OrgsUpdateWebhookPayload,
    params: RequestParams = {},
  ) =>
    this.http.request<OrgsUpdateWebhookData, BasicError | ValidationError>({
      path: `/orgs/${org}/hooks/${hookId}`,
      method: "PATCH",
      body: data,
      type: ContentType.Json,
      format: "json",
      ...params,
    });
  /**
   * @description Delete a webhook for an organization. The authenticated user must be an organization owner to use this endpoint. OAuth app tokens and personal access tokens (classic) need `admin:org_hook` scope. OAuth apps cannot list, view, or edit webhooks that they did not create and users cannot list, view, or edit webhooks that were created by OAuth apps.
   *
   * @tags orgs
   * @name OrgsDeleteWebhook
   * @summary Delete an organization webhook
   * @request DELETE:/orgs/{org}/hooks/{hook_id}
   */
  orgsDeleteWebhook = (
    org: string,
    hookId: number,
    params: RequestParams = {},
  ) =>
    this.http.request<OrgsDeleteWebhookData, BasicError>({
      path: `/orgs/${org}/hooks/${hookId}`,
      method: "DELETE",
      ...params,
    });
  /**
   * @description Returns the webhook configuration for an organization. To get more information about the webhook, including the `active` state and `events`, use "[Get an organization webhook ](/rest/orgs/webhooks#get-an-organization-webhook)." You must be an organization owner to use this endpoint. OAuth app tokens and personal access tokens (classic) need `admin:org_hook` scope. OAuth apps cannot list, view, or edit webhooks that they did not create and users cannot list, view, or edit webhooks that were created by OAuth apps.
   *
   * @tags orgs
   * @name OrgsGetWebhookConfigForOrg
   * @summary Get a webhook configuration for an organization
   * @request GET:/orgs/{org}/hooks/{hook_id}/config
   */
  orgsGetWebhookConfigForOrg = (
    org: string,
    hookId: number,
    params: RequestParams = {},
  ) =>
    this.http.request<OrgsGetWebhookConfigForOrgData, any>({
      path: `/orgs/${org}/hooks/${hookId}/config`,
      method: "GET",
      format: "json",
      ...params,
    });
  /**
   * @description Updates the webhook configuration for an organization. To update more information about the webhook, including the `active` state and `events`, use "[Update an organization webhook ](/rest/orgs/webhooks#update-an-organization-webhook)." You must be an organization owner to use this endpoint. OAuth app tokens and personal access tokens (classic) need `admin:org_hook` scope. OAuth apps cannot list, view, or edit webhooks that they did not create and users cannot list, view, or edit webhooks that were created by OAuth apps.
   *
   * @tags orgs
   * @name OrgsUpdateWebhookConfigForOrg
   * @summary Update a webhook configuration for an organization
   * @request PATCH:/orgs/{org}/hooks/{hook_id}/config
   */
  orgsUpdateWebhookConfigForOrg = (
    org: string,
    hookId: number,
    data?: OrgsUpdateWebhookConfigForOrgPayload,
    params: RequestParams = {},
  ) =>
    this.http.request<OrgsUpdateWebhookConfigForOrgData, any>({
      path: `/orgs/${org}/hooks/${hookId}/config`,
      method: "PATCH",
      body: data,
      type: ContentType.Json,
      format: "json",
      ...params,
    });
  /**
   * @description Returns a list of webhook deliveries for a webhook configured in an organization. You must be an organization owner to use this endpoint. OAuth app tokens and personal access tokens (classic) need `admin:org_hook` scope. OAuth apps cannot list, view, or edit webhooks that they did not create and users cannot list, view, or edit webhooks that were created by OAuth apps.
   *
   * @tags orgs
   * @name OrgsListWebhookDeliveries
   * @summary List deliveries for an organization webhook
   * @request GET:/orgs/{org}/hooks/{hook_id}/deliveries
   */
  orgsListWebhookDeliveries = (
    { org, hookId, ...query }: OrgsListWebhookDeliveriesParams,
    params: RequestParams = {},
  ) =>
    this.http.request<
      OrgsListWebhookDeliveriesData,
      BasicError | ValidationError
    >({
      path: `/orgs/${org}/hooks/${hookId}/deliveries`,
      method: "GET",
      query: query,
      format: "json",
      ...params,
    });
  /**
   * @description Returns a delivery for a webhook configured in an organization. You must be an organization owner to use this endpoint. OAuth app tokens and personal access tokens (classic) need `admin:org_hook` scope. OAuth apps cannot list, view, or edit webhooks that they did not create and users cannot list, view, or edit webhooks that were created by OAuth apps.
   *
   * @tags orgs
   * @name OrgsGetWebhookDelivery
   * @summary Get a webhook delivery for an organization webhook
   * @request GET:/orgs/{org}/hooks/{hook_id}/deliveries/{delivery_id}
   */
  orgsGetWebhookDelivery = (
    org: string,
    hookId: number,
    deliveryId: number,
    params: RequestParams = {},
  ) =>
    this.http.request<OrgsGetWebhookDeliveryData, BasicError | ValidationError>(
      {
        path: `/orgs/${org}/hooks/${hookId}/deliveries/${deliveryId}`,
        method: "GET",
        format: "json",
        ...params,
      },
    );
  /**
   * @description Redeliver a delivery for a webhook configured in an organization. You must be an organization owner to use this endpoint. OAuth app tokens and personal access tokens (classic) need `admin:org_hook` scope. OAuth apps cannot list, view, or edit webhooks that they did not create and users cannot list, view, or edit webhooks that were created by OAuth apps.
   *
   * @tags orgs
   * @name OrgsRedeliverWebhookDelivery
   * @summary Redeliver a delivery for an organization webhook
   * @request POST:/orgs/{org}/hooks/{hook_id}/deliveries/{delivery_id}/attempts
   */
  orgsRedeliverWebhookDelivery = (
    org: string,
    hookId: number,
    deliveryId: number,
    params: RequestParams = {},
  ) =>
    this.http.request<object, BasicError | ValidationError>({
      path: `/orgs/${org}/hooks/${hookId}/deliveries/${deliveryId}/attempts`,
      method: "POST",
      ...params,
    });
  /**
   * @description This will trigger a [ping event](https://docs.github.com/enterprise-server@3.17/webhooks/#ping-event) to be sent to the hook. You must be an organization owner to use this endpoint. OAuth app tokens and personal access tokens (classic) need `admin:org_hook` scope. OAuth apps cannot list, view, or edit webhooks that they did not create and users cannot list, view, or edit webhooks that were created by OAuth apps.
   *
   * @tags orgs
   * @name OrgsPingWebhook
   * @summary Ping an organization webhook
   * @request POST:/orgs/{org}/hooks/{hook_id}/pings
   */
  orgsPingWebhook = (org: string, hookId: number, params: RequestParams = {}) =>
    this.http.request<OrgsPingWebhookData, BasicError>({
      path: `/orgs/${org}/hooks/${hookId}/pings`,
      method: "POST",
      ...params,
    });
  /**
   * @description Enables an authenticated GitHub App to find the organization's installation information. You must use a [JWT](https://docs.github.com/enterprise-server@3.17/apps/building-github-apps/authenticating-with-github-apps/#authenticating-as-a-github-app) to access this endpoint.
   *
   * @tags apps
   * @name AppsGetOrgInstallation
   * @summary Get an organization installation for the authenticated app
   * @request GET:/orgs/{org}/installation
   */
  appsGetOrgInstallation = (org: string, params: RequestParams = {}) =>
    this.http.request<AppsGetOrgInstallationData, any>({
      path: `/orgs/${org}/installation`,
      method: "GET",
      format: "json",
      ...params,
    });
  /**
   * @description Lists all GitHub Apps in an organization. The installation count includes all GitHub Apps installed on repositories in the organization. The authenticated user must be an organization owner to use this endpoint. OAuth app tokens and personal access tokens (classic) need the `admin:read` scope to use this endpoint.
   *
   * @tags orgs
   * @name OrgsListAppInstallations
   * @summary List app installations for an organization
   * @request GET:/orgs/{org}/installations
   */
  orgsListAppInstallations = (
    { org, ...query }: OrgsListAppInstallationsParams,
    params: RequestParams = {},
  ) =>
    this.http.request<OrgsListAppInstallationsData, any>({
      path: `/orgs/${org}/installations`,
      method: "GET",
      query: query,
      format: "json",
      ...params,
    });
  /**
   * @description List issues in an organization assigned to the authenticated user. > [!NOTE] > GitHub's REST API considers every pull request an issue, but not every issue is a pull request. For this reason, "Issues" endpoints may return both issues and pull requests in the response. You can identify pull requests by the `pull_request` key. Be aware that the `id` of a pull request returned from "Issues" endpoints will be an _issue id_. To find out the pull request id, use the "[List pull requests](https://docs.github.com/enterprise-server@3.17/rest/pulls/pulls#list-pull-requests)" endpoint. This endpoint supports the following custom media types. For more information, see "[Media types](https://docs.github.com/enterprise-server@3.17/rest/using-the-rest-api/getting-started-with-the-rest-api#media-types)." - **`application/vnd.github.raw+json`**: Returns the raw markdown body. Response will include `body`. This is the default if you do not pass any specific media type. - **`application/vnd.github.text+json`**: Returns a text only representation of the markdown body. Response will include `body_text`. - **`application/vnd.github.html+json`**: Returns HTML rendered from the body's markdown. Response will include `body_html`. - **`application/vnd.github.full+json`**: Returns raw, text, and HTML representations. Response will include `body`, `body_text`, and `body_html`.
   *
   * @tags issues
   * @name IssuesListForOrg
   * @summary List organization issues assigned to the authenticated user
   * @request GET:/orgs/{org}/issues
   */
  issuesListForOrg = (
    { org, ...query }: IssuesListForOrgParams,
    params: RequestParams = {},
  ) =>
    this.http.request<IssuesListForOrgData, BasicError>({
      path: `/orgs/${org}/issues`,
      method: "GET",
      query: query,
      format: "json",
      ...params,
    });
  /**
   * @description List all users who are members of an organization. If the authenticated user is also a member of this organization then both concealed and public members will be returned.
   *
   * @tags orgs
   * @name OrgsListMembers
   * @summary List organization members
   * @request GET:/orgs/{org}/members
   */
  orgsListMembers = (
    { org, ...query }: OrgsListMembersParams,
    params: RequestParams = {},
  ) =>
    this.http.request<OrgsListMembersData, ValidationError>({
      path: `/orgs/${org}/members`,
      method: "GET",
      query: query,
      format: "json",
      ...params,
    });
  /**
   * @description Check if a user is, publicly or privately, a member of the organization.
   *
   * @tags orgs
   * @name OrgsCheckMembershipForUser
   * @summary Check organization membership for a user
   * @request GET:/orgs/{org}/members/{username}
   */
  orgsCheckMembershipForUser = (
    org: string,
    username: string,
    params: RequestParams = {},
  ) =>
    this.http.request<OrgsCheckMembershipForUserData, void>({
      path: `/orgs/${org}/members/${username}`,
      method: "GET",
      ...params,
    });
  /**
   * @description Removing a user from this list will remove them from all teams and they will no longer have any access to the organization's repositories. > [!NOTE] > If a user has both direct membership in the organization as well as indirect membership via an enterprise team, only their direct membership will be removed. Their indirect membership via an enterprise team remains until the user is removed from the enterprise team.
   *
   * @tags orgs
   * @name OrgsRemoveMember
   * @summary Remove an organization member
   * @request DELETE:/orgs/{org}/members/{username}
   */
  orgsRemoveMember = (
    org: string,
    username: string,
    params: RequestParams = {},
  ) =>
    this.http.request<OrgsRemoveMemberData, BasicError>({
      path: `/orgs/${org}/members/${username}`,
      method: "DELETE",
      ...params,
    });
  /**
   * @description In order to get a user's membership with an organization, the authenticated user must be an organization member. The `state` parameter in the response can be used to identify the user's membership status.
   *
   * @tags orgs
   * @name OrgsGetMembershipForUser
   * @summary Get organization membership for a user
   * @request GET:/orgs/{org}/memberships/{username}
   */
  orgsGetMembershipForUser = (
    org: string,
    username: string,
    params: RequestParams = {},
  ) =>
    this.http.request<OrgsGetMembershipForUserData, BasicError>({
      path: `/orgs/${org}/memberships/${username}`,
      method: "GET",
      format: "json",
      ...params,
    });
  /**
   * @description Only authenticated organization owners can add a member to the organization or update the member's role. If the authenticated user is _adding_ a member to the organization, the invited user will receive an email inviting them to the organization. The user's [membership status](https://docs.github.com/enterprise-server@3.17/rest/orgs/members#get-organization-membership-for-a-user) will be `pending` until they accept the invitation. Authenticated users can _update_ a user's membership by passing the `role` parameter. If the authenticated user changes a member's role to `admin`, the affected user will receive an email notifying them that they've been made an organization owner. If the authenticated user changes an owner's role to `member`, no email will be sent. The same rate limits as set on the appliance are applied to this endpoint. Most commonly, you will hit the secondary rate limit (if configured) due to CPU usage.
   *
   * @tags orgs
   * @name OrgsSetMembershipForUser
   * @summary Set organization membership for a user
   * @request PUT:/orgs/{org}/memberships/{username}
   */
  orgsSetMembershipForUser = (
    org: string,
    username: string,
    data?: OrgsSetMembershipForUserPayload,
    params: RequestParams = {},
  ) =>
    this.http.request<
      OrgsSetMembershipForUserData,
      BasicError | ValidationError
    >({
      path: `/orgs/${org}/memberships/${username}`,
      method: "PUT",
      body: data,
      type: ContentType.Json,
      format: "json",
      ...params,
    });
  /**
   * @description In order to remove a user's membership with an organization, the authenticated user must be an organization owner. If the specified user is an active member of the organization, this will remove them from the organization. If the specified user has been invited to the organization, this will cancel their invitation. The specified user will receive an email notification in both cases. > [!NOTE] > If a user has both direct membership in the organization as well as indirect membership via an enterprise team, only their direct membership will be removed. Their indirect membership via an enterprise team remains until the user is removed from the enterprise team.
   *
   * @tags orgs
   * @name OrgsRemoveMembershipForUser
   * @summary Remove organization membership for a user
   * @request DELETE:/orgs/{org}/memberships/{username}
   */
  orgsRemoveMembershipForUser = (
    org: string,
    username: string,
    params: RequestParams = {},
  ) =>
    this.http.request<OrgsRemoveMembershipForUserData, BasicError>({
      path: `/orgs/${org}/memberships/${username}`,
      method: "DELETE",
      ...params,
    });
  /**
   * @description Lists the most recent migrations, including both exports (which can be started through the REST API) and imports (which cannot be started using the REST API). A list of `repositories` is only returned for export migrations.
   *
   * @tags migrations
   * @name MigrationsListForOrg
   * @summary List organization migrations
   * @request GET:/orgs/{org}/migrations
   */
  migrationsListForOrg = (
    { org, ...query }: MigrationsListForOrgParams,
    params: RequestParams = {},
  ) =>
    this.http.request<MigrationsListForOrgData, any>({
      path: `/orgs/${org}/migrations`,
      method: "GET",
      query: query,
      format: "json",
      ...params,
    });
  /**
   * @description Initiates the generation of a migration archive. Before you can use this endpoint, you must configure a blob storage provider in the "Migrations" section in the Management Console. For more details, see "[Migrating repositories from GitHub Enterprise Server to GitHub Enterprise Cloud](https://docs.github.com/enterprise-server@3.17/migrations/using-github-enterprise-importer/migrating-repositories-with-github-enterprise-importer/migrating-repositories-from-github-enterprise-server-to-github-enterprise-cloud#step-4-set-up-blob-storage)."
   *
   * @tags migrations
   * @name MigrationsStartForOrg
   * @summary Start an organization migration
   * @request POST:/orgs/{org}/migrations
   */
  migrationsStartForOrg = (
    org: string,
    data: MigrationsStartForOrgPayload,
    params: RequestParams = {},
  ) =>
    this.http.request<MigrationsStartForOrgData, BasicError | ValidationError>({
      path: `/orgs/${org}/migrations`,
      method: "POST",
      body: data,
      type: ContentType.Json,
      format: "json",
      ...params,
    });
  /**
   * @description Fetches the status of a migration. The `state` of a migration can be one of the following values: *   `pending`, which means the migration hasn't started yet. *   `exporting`, which means the migration is in progress. *   `exported`, which means the migration finished successfully. *   `failed`, which means the migration failed.
   *
   * @tags migrations
   * @name MigrationsGetStatusForOrg
   * @summary Get an organization migration status
   * @request GET:/orgs/{org}/migrations/{migration_id}
   */
  migrationsGetStatusForOrg = (
    { org, migrationId, ...query }: MigrationsGetStatusForOrgParams,
    params: RequestParams = {},
  ) =>
    this.http.request<MigrationsGetStatusForOrgData, BasicError>({
      path: `/orgs/${org}/migrations/${migrationId}`,
      method: "GET",
      query: query,
      format: "json",
      ...params,
    });
  /**
   * @description Fetches the URL to a migration archive.
   *
   * @tags migrations
   * @name MigrationsDownloadArchiveForOrg
   * @summary Download an organization migration archive
   * @request GET:/orgs/{org}/migrations/{migration_id}/archive
   */
  migrationsDownloadArchiveForOrg = (
    org: string,
    migrationId: number,
    params: RequestParams = {},
  ) =>
    this.http.request<any, void | BasicError>({
      path: `/orgs/${org}/migrations/${migrationId}/archive`,
      method: "GET",
      ...params,
    });
  /**
   * @description Deletes a previous migration archive. Migration archives are automatically deleted after seven days.
   *
   * @tags migrations
   * @name MigrationsDeleteArchiveForOrg
   * @summary Delete an organization migration archive
   * @request DELETE:/orgs/{org}/migrations/{migration_id}/archive
   */
  migrationsDeleteArchiveForOrg = (
    org: string,
    migrationId: number,
    params: RequestParams = {},
  ) =>
    this.http.request<MigrationsDeleteArchiveForOrgData, BasicError>({
      path: `/orgs/${org}/migrations/${migrationId}/archive`,
      method: "DELETE",
      ...params,
    });
  /**
   * @description Unlocks a repository that was locked for migration. You should unlock each migrated repository and [delete them](https://docs.github.com/enterprise-server@3.17/rest/repos/repos#delete-a-repository) when the migration is complete and you no longer need the source data.
   *
   * @tags migrations
   * @name MigrationsUnlockRepoForOrg
   * @summary Unlock an organization repository
   * @request DELETE:/orgs/{org}/migrations/{migration_id}/repos/{repo_name}/lock
   */
  migrationsUnlockRepoForOrg = (
    org: string,
    migrationId: number,
    repoName: string,
    params: RequestParams = {},
  ) =>
    this.http.request<MigrationsUnlockRepoForOrgData, BasicError>({
      path: `/orgs/${org}/migrations/${migrationId}/repos/${repoName}/lock`,
      method: "DELETE",
      ...params,
    });
  /**
   * @description List all the repositories for this organization migration.
   *
   * @tags migrations
   * @name MigrationsListReposForOrg
   * @summary List repositories in an organization migration
   * @request GET:/orgs/{org}/migrations/{migration_id}/repositories
   */
  migrationsListReposForOrg = (
    { org, migrationId, ...query }: MigrationsListReposForOrgParams,
    params: RequestParams = {},
  ) =>
    this.http.request<MigrationsListReposForOrgData, BasicError>({
      path: `/orgs/${org}/migrations/${migrationId}/repositories`,
      method: "GET",
      query: query,
      format: "json",
      ...params,
    });
  /**
   * @description Lists the fine-grained permissions that can be used in custom organization roles for an organization. For more information, see "[Managing people's access to your organization with roles](https://docs.github.com/enterprise-server@3.17/organizations/managing-peoples-access-to-your-organization-with-roles/about-custom-organization-roles)." To list the fine-grained permissions that can be used in custom repository roles for an organization, see "[List repository fine-grained permissions for an organization](https://docs.github.com/enterprise-server@3.17/rest/orgs/organization-roles#list-repository-fine-grained-permissions-for-an-organization)." To use this endpoint, the authenticated user must be one of: - An administrator for the organization. - A user, or a user on a team, with the fine-grained permissions of `read_organization_custom_org_role` in the organization. OAuth app tokens and personal access tokens (classic) need the `admin:org` scope to use this endpoint.
   *
   * @tags orgs
   * @name OrgsListOrganizationFineGrainedPermissions
   * @summary List organization fine-grained permissions for an organization
   * @request GET:/orgs/{org}/organization-fine-grained-permissions
   */
  orgsListOrganizationFineGrainedPermissions = (
    org: string,
    params: RequestParams = {},
  ) =>
    this.http.request<
      OrgsListOrganizationFineGrainedPermissionsData,
      BasicError | ValidationError
    >({
      path: `/orgs/${org}/organization-fine-grained-permissions`,
      method: "GET",
      format: "json",
      ...params,
    });
  /**
   * @description Lists the organization roles available in this organization. For more information on organization roles, see "[Using organization roles](https://docs.github.com/enterprise-server@3.17/organizations/managing-peoples-access-to-your-organization-with-roles/using-organization-roles)." To use this endpoint, the authenticated user must be one of: - An administrator for the organization. - A user, or a user on a team, with the fine-grained permissions of `read_organization_custom_org_role` in the organization. OAuth app tokens and personal access tokens (classic) need the `admin:org` scope to use this endpoint.
   *
   * @tags orgs
   * @name OrgsListOrgRoles
   * @summary Get all organization roles for an organization
   * @request GET:/orgs/{org}/organization-roles
   */
  orgsListOrgRoles = (org: string, params: RequestParams = {}) =>
    this.http.request<OrgsListOrgRolesData, BasicError | ValidationError>({
      path: `/orgs/${org}/organization-roles`,
      method: "GET",
      format: "json",
      ...params,
    });
  /**
   * @description Creates a custom organization role that can be assigned to users and teams, granting them specific permissions over the organization and optionally across all repositories in the organization. For more information on custom organization roles, see "[Managing people's access to your organization with roles](https://docs.github.com/enterprise-server@3.17/organizations/managing-peoples-access-to-your-organization-with-roles/about-custom-organization-roles)." To include repository permissions in an organization role, you must also include the `base_role` field, which is one of `read`, `write`, `triage`, `maintain`, or `admin` (or `none` if no base role is set). This base role provides a set of fine-grained permissions as well as implicit permissions - those that aren't exposed as fine-grained permissions and can only be granted through the base role (like "reading a repo").  If you include repository permissions, those permissions apply across all of the repositories in the organization. You do not have to include organization permissions in order to add repository permissions. See "[List repository permissions](https://docs.github.com/enterprise-server@3.17/rest/orgs/custom-roles#list-repository-fine-grained-permissions-for-an-organization)" for valid repository permissions. To use this endpoint, the authenticated user must be one of: - An administrator for the organization. - A user, or a user on a team, with the fine-grained permissions of `write_organization_custom_org_role` in the organization. OAuth app tokens and personal access tokens (classic) need the `admin:org` scope to use this endpoint.
   *
   * @tags orgs
   * @name OrgsCreateCustomOrganizationRole
   * @summary Create a custom organization role
   * @request POST:/orgs/{org}/organization-roles
   */
  orgsCreateCustomOrganizationRole = (
    org: string,
    data: OrganizationCustomOrganizationRoleCreateSchema,
    params: RequestParams = {},
  ) =>
    this.http.request<
      OrgsCreateCustomOrganizationRoleData,
      BasicError | ValidationError
    >({
      path: `/orgs/${org}/organization-roles`,
      method: "POST",
      body: data,
      type: ContentType.Json,
      format: "json",
      ...params,
    });
  /**
   * @description Removes all assigned organization roles from a team. For more information on organization roles, see "[Using organization roles](https://docs.github.com/enterprise-server@3.17/organizations/managing-peoples-access-to-your-organization-with-roles/using-organization-roles)." The authenticated user must be an administrator for the organization to use this endpoint. OAuth app tokens and personal access tokens (classic) need the `admin:org` scope to use this endpoint.
   *
   * @tags orgs
   * @name OrgsRevokeAllOrgRolesTeam
   * @summary Remove all organization roles for a team
   * @request DELETE:/orgs/{org}/organization-roles/teams/{team_slug}
   */
  orgsRevokeAllOrgRolesTeam = (
    org: string,
    teamSlug: string,
    params: RequestParams = {},
  ) =>
    this.http.request<OrgsRevokeAllOrgRolesTeamData, any>({
      path: `/orgs/${org}/organization-roles/teams/${teamSlug}`,
      method: "DELETE",
      ...params,
    });
  /**
   * @description Assigns an organization role to a team in an organization. For more information on organization roles, see "[Using organization roles](https://docs.github.com/enterprise-server@3.17/organizations/managing-peoples-access-to-your-organization-with-roles/using-organization-roles)." The authenticated user must be an administrator for the organization to use this endpoint. OAuth app tokens and personal access tokens (classic) need the `admin:org` scope to use this endpoint.
   *
   * @tags orgs
   * @name OrgsAssignTeamToOrgRole
   * @summary Assign an organization role to a team
   * @request PUT:/orgs/{org}/organization-roles/teams/{team_slug}/{role_id}
   */
  orgsAssignTeamToOrgRole = (
    org: string,
    teamSlug: string,
    roleId: number,
    params: RequestParams = {},
  ) =>
    this.http.request<OrgsAssignTeamToOrgRoleData, void>({
      path: `/orgs/${org}/organization-roles/teams/${teamSlug}/${roleId}`,
      method: "PUT",
      ...params,
    });
  /**
   * @description Removes an organization role from a team. For more information on organization roles, see "[Using organization roles](https://docs.github.com/enterprise-server@3.17/organizations/managing-peoples-access-to-your-organization-with-roles/using-organization-roles)." The authenticated user must be an administrator for the organization to use this endpoint. OAuth app tokens and personal access tokens (classic) need the `admin:org` scope to use this endpoint.
   *
   * @tags orgs
   * @name OrgsRevokeOrgRoleTeam
   * @summary Remove an organization role from a team
   * @request DELETE:/orgs/{org}/organization-roles/teams/{team_slug}/{role_id}
   */
  orgsRevokeOrgRoleTeam = (
    org: string,
    teamSlug: string,
    roleId: number,
    params: RequestParams = {},
  ) =>
    this.http.request<OrgsRevokeOrgRoleTeamData, any>({
      path: `/orgs/${org}/organization-roles/teams/${teamSlug}/${roleId}`,
      method: "DELETE",
      ...params,
    });
  /**
   * @description Revokes all assigned organization roles from a user. For more information on organization roles, see "[Using organization roles](https://docs.github.com/enterprise-server@3.17/organizations/managing-peoples-access-to-your-organization-with-roles/using-organization-roles)." The authenticated user must be an administrator for the organization to use this endpoint. OAuth app tokens and personal access tokens (classic) need the `admin:org` scope to use this endpoint.
   *
   * @tags orgs
   * @name OrgsRevokeAllOrgRolesUser
   * @summary Remove all organization roles for a user
   * @request DELETE:/orgs/{org}/organization-roles/users/{username}
   */
  orgsRevokeAllOrgRolesUser = (
    org: string,
    username: string,
    params: RequestParams = {},
  ) =>
    this.http.request<OrgsRevokeAllOrgRolesUserData, any>({
      path: `/orgs/${org}/organization-roles/users/${username}`,
      method: "DELETE",
      ...params,
    });
  /**
   * @description Assigns an organization role to a member of an organization. For more information on organization roles, see "[Using organization roles](https://docs.github.com/enterprise-server@3.17/organizations/managing-peoples-access-to-your-organization-with-roles/using-organization-roles)." The authenticated user must be an administrator for the organization to use this endpoint. OAuth app tokens and personal access tokens (classic) need the `admin:org` scope to use this endpoint.
   *
   * @tags orgs
   * @name OrgsAssignUserToOrgRole
   * @summary Assign an organization role to a user
   * @request PUT:/orgs/{org}/organization-roles/users/{username}/{role_id}
   */
  orgsAssignUserToOrgRole = (
    org: string,
    username: string,
    roleId: number,
    params: RequestParams = {},
  ) =>
    this.http.request<OrgsAssignUserToOrgRoleData, void>({
      path: `/orgs/${org}/organization-roles/users/${username}/${roleId}`,
      method: "PUT",
      ...params,
    });
  /**
   * @description Remove an organization role from a user. For more information on organization roles, see "[Using organization roles](https://docs.github.com/enterprise-server@3.17/organizations/managing-peoples-access-to-your-organization-with-roles/using-organization-roles)." The authenticated user must be an administrator for the organization to use this endpoint. OAuth app tokens and personal access tokens (classic) need the `admin:org` scope to use this endpoint.
   *
   * @tags orgs
   * @name OrgsRevokeOrgRoleUser
   * @summary Remove an organization role from a user
   * @request DELETE:/orgs/{org}/organization-roles/users/{username}/{role_id}
   */
  orgsRevokeOrgRoleUser = (
    org: string,
    username: string,
    roleId: number,
    params: RequestParams = {},
  ) =>
    this.http.request<OrgsRevokeOrgRoleUserData, any>({
      path: `/orgs/${org}/organization-roles/users/${username}/${roleId}`,
      method: "DELETE",
      ...params,
    });
  /**
   * @description Gets an organization role that is available to this organization. For more information on organization roles, see "[Using organization roles](https://docs.github.com/enterprise-server@3.17/organizations/managing-peoples-access-to-your-organization-with-roles/using-organization-roles)." To use this endpoint, the authenticated user must be one of: - An administrator for the organization. - A user, or a user on a team, with the fine-grained permissions of `read_organization_custom_org_role` in the organization. OAuth app tokens and personal access tokens (classic) need the `admin:org` scope to use this endpoint.
   *
   * @tags orgs
   * @name OrgsGetOrgRole
   * @summary Get an organization role
   * @request GET:/orgs/{org}/organization-roles/{role_id}
   */
  orgsGetOrgRole = (org: string, roleId: number, params: RequestParams = {}) =>
    this.http.request<OrgsGetOrgRoleData, BasicError | ValidationError>({
      path: `/orgs/${org}/organization-roles/${roleId}`,
      method: "GET",
      format: "json",
      ...params,
    });
  /**
   * @description Updates an existing custom organization role. Permission changes will apply to all assignees. For more information on custom organization roles, see "[Managing people's access to your organization with roles](https://docs.github.com/enterprise-server@3.17/organizations/managing-peoples-access-to-your-organization-with-roles/about-custom-organization-roles)." If the update would add repository permissions, the `base_role` must also be set to a value besides `none`, either previously or as part of the update. If the update sets the `base_role` field to `none`, you must also remove all of the repository permissions as well, otherwise the update will fail. To use this endpoint, the authenticated user must be one of: - An administrator for the organization. - A user, or a user on a team, with the fine-grained permissions of `write_organization_custom_org_role` in the organization. OAuth app tokens and personal access tokens (classic) need the `admin:org` scope to use this endpoint.
   *
   * @tags orgs
   * @name OrgsPatchCustomOrganizationRole
   * @summary Update a custom organization role
   * @request PATCH:/orgs/{org}/organization-roles/{role_id}
   */
  orgsPatchCustomOrganizationRole = (
    org: string,
    roleId: number,
    data: OrganizationCustomOrganizationRoleUpdateSchema,
    params: RequestParams = {},
  ) =>
    this.http.request<
      OrgsPatchCustomOrganizationRoleData,
      BasicError | ValidationError
    >({
      path: `/orgs/${org}/organization-roles/${roleId}`,
      method: "PATCH",
      body: data,
      type: ContentType.Json,
      format: "json",
      ...params,
    });
  /**
   * @description Deletes a custom organization role. For more information on custom organization roles, see "[Managing people's access to your organization with roles](https://docs.github.com/enterprise-server@3.17/organizations/managing-peoples-access-to-your-organization-with-roles/about-custom-organization-roles)." To use this endpoint, the authenticated user must be one of: - An administrator for the organization. - A user, or a user on a team, with the fine-grained permissions of `write_organization_custom_org_role` in the organization. OAuth app tokens and personal access tokens (classic) need the `admin:org` scope to use this endpoint.
   *
   * @tags orgs
   * @name OrgsDeleteCustomOrganizationRole
   * @summary Delete a custom organization role.
   * @request DELETE:/orgs/{org}/organization-roles/{role_id}
   */
  orgsDeleteCustomOrganizationRole = (
    org: string,
    roleId: number,
    params: RequestParams = {},
  ) =>
    this.http.request<OrgsDeleteCustomOrganizationRoleData, any>({
      path: `/orgs/${org}/organization-roles/${roleId}`,
      method: "DELETE",
      ...params,
    });
  /**
   * @description Lists the teams that are assigned to an organization role. For more information on organization roles, see "[Using organization roles](https://docs.github.com/enterprise-server@3.17/organizations/managing-peoples-access-to-your-organization-with-roles/using-organization-roles)." To use this endpoint, you must be an administrator for the organization. OAuth app tokens and personal access tokens (classic) need the `admin:org` scope to use this endpoint.
   *
   * @tags orgs
   * @name OrgsListOrgRoleTeams
   * @summary List teams that are assigned to an organization role
   * @request GET:/orgs/{org}/organization-roles/{role_id}/teams
   */
  orgsListOrgRoleTeams = (
    { org, roleId, ...query }: OrgsListOrgRoleTeamsParams,
    params: RequestParams = {},
  ) =>
    this.http.request<OrgsListOrgRoleTeamsData, void>({
      path: `/orgs/${org}/organization-roles/${roleId}/teams`,
      method: "GET",
      query: query,
      format: "json",
      ...params,
    });
  /**
   * @description Lists organization members that are assigned to an organization role. For more information on organization roles, see "[Using organization roles](https://docs.github.com/enterprise-server@3.17/organizations/managing-peoples-access-to-your-organization-with-roles/using-organization-roles)." To use this endpoint, you must be an administrator for the organization. OAuth app tokens and personal access tokens (classic) need the `admin:org` scope to use this endpoint.
   *
   * @tags orgs
   * @name OrgsListOrgRoleUsers
   * @summary List users that are assigned to an organization role
   * @request GET:/orgs/{org}/organization-roles/{role_id}/users
   */
  orgsListOrgRoleUsers = (
    { org, roleId, ...query }: OrgsListOrgRoleUsersParams,
    params: RequestParams = {},
  ) =>
    this.http.request<OrgsListOrgRoleUsersData, void>({
      path: `/orgs/${org}/organization-roles/${roleId}/users`,
      method: "GET",
      query: query,
      format: "json",
      ...params,
    });
  /**
   * @description List all users who are outside collaborators of an organization.
   *
   * @tags orgs
   * @name OrgsListOutsideCollaborators
   * @summary List outside collaborators for an organization
   * @request GET:/orgs/{org}/outside_collaborators
   */
  orgsListOutsideCollaborators = (
    { org, ...query }: OrgsListOutsideCollaboratorsParams,
    params: RequestParams = {},
  ) =>
    this.http.request<OrgsListOutsideCollaboratorsData, any>({
      path: `/orgs/${org}/outside_collaborators`,
      method: "GET",
      query: query,
      format: "json",
      ...params,
    });
  /**
   * @description When an organization member is converted to an outside collaborator, they'll only have access to the repositories that their current team membership allows. The user will no longer be a member of the organization. For more information, see "[Converting an organization member to an outside collaborator](https://docs.github.com/enterprise-server@3.17/articles/converting-an-organization-member-to-an-outside-collaborator/)". Converting an organization member to an outside collaborator may be restricted by enterprise administrators. For more information, see "[Enforcing repository management policies in your enterprise](https://docs.github.com/enterprise-server@3.17/admin/policies/enforcing-policies-for-your-enterprise/enforcing-repository-management-policies-in-your-enterprise#enforcing-a-policy-for-inviting-outside-collaborators-to-repositories)."
   *
   * @tags orgs
   * @name OrgsConvertMemberToOutsideCollaborator
   * @summary Convert an organization member to outside collaborator
   * @request PUT:/orgs/{org}/outside_collaborators/{username}
   */
  orgsConvertMemberToOutsideCollaborator = (
    org: string,
    username: string,
    data?: OrgsConvertMemberToOutsideCollaboratorPayload,
    params: RequestParams = {},
  ) =>
    this.http.request<
      OrgsConvertMemberToOutsideCollaboratorData,
      void | BasicError
    >({
      path: `/orgs/${org}/outside_collaborators/${username}`,
      method: "PUT",
      body: data,
      type: ContentType.Json,
      format: "json",
      ...params,
    });
  /**
   * @description Removing a user from this list will remove them from all the organization's repositories.
   *
   * @tags orgs
   * @name OrgsRemoveOutsideCollaborator
   * @summary Remove outside collaborator from an organization
   * @request DELETE:/orgs/{org}/outside_collaborators/{username}
   */
  orgsRemoveOutsideCollaborator = (
    org: string,
    username: string,
    params: RequestParams = {},
  ) =>
    this.http.request<
      OrgsRemoveOutsideCollaboratorData,
      OrgsRemoveOutsideCollaboratorError
    >({
      path: `/orgs/${org}/outside_collaborators/${username}`,
      method: "DELETE",
      ...params,
    });
  /**
   * @description Lists packages in an organization readable by the user. OAuth app tokens and personal access tokens (classic) need the `read:packages` scope to use this endpoint. For more information, see "[About permissions for GitHub Packages](https://docs.github.com/enterprise-server@3.17/packages/learn-github-packages/about-permissions-for-github-packages#permissions-for-repository-scoped-packages)."
   *
   * @tags packages
   * @name PackagesListPackagesForOrganization
   * @summary List packages for an organization
   * @request GET:/orgs/{org}/packages
   */
  packagesListPackagesForOrganization = (
    { org, ...query }: PackagesListPackagesForOrganizationParams,
    params: RequestParams = {},
  ) =>
    this.http.request<PackagesListPackagesForOrganizationData, BasicError>({
      path: `/orgs/${org}/packages`,
      method: "GET",
      query: query,
      format: "json",
      ...params,
    });
  /**
   * @description Gets a specific package in an organization. OAuth app tokens and personal access tokens (classic) need the `read:packages` scope to use this endpoint. For more information, see "[About permissions for GitHub Packages](https://docs.github.com/enterprise-server@3.17/packages/learn-github-packages/about-permissions-for-github-packages#permissions-for-repository-scoped-packages)."
   *
   * @tags packages
   * @name PackagesGetPackageForOrganization
   * @summary Get a package for an organization
   * @request GET:/orgs/{org}/packages/{package_type}/{package_name}
   */
  packagesGetPackageForOrganization = (
    packageType:
      | "npm"
      | "maven"
      | "rubygems"
      | "docker"
      | "nuget"
      | "container",
    packageName: string,
    org: string,
    params: RequestParams = {},
  ) =>
    this.http.request<PackagesGetPackageForOrganizationData, any>({
      path: `/orgs/${org}/packages/${packageType}/${packageName}`,
      method: "GET",
      format: "json",
      ...params,
    });
  /**
   * @description Deletes an entire package in an organization. You cannot delete a public package if any version of the package has more than 5,000 downloads. In this scenario, contact GitHub support for further assistance. The authenticated user must have admin permissions in the organization to use this endpoint. If the `package_type` belongs to a GitHub Packages registry that supports granular permissions, the authenticated user must also have admin permissions to the package. For the list of these registries, see "[About permissions for GitHub Packages](https://docs.github.com/enterprise-server@3.17/packages/learn-github-packages/about-permissions-for-github-packages#granular-permissions-for-userorganization-scoped-packages)." OAuth app tokens and personal access tokens (classic) need the `read:packages` and `delete:packages` scopes to use this endpoint. For more information, see "[About permissions for GitHub Packages](https://docs.github.com/enterprise-server@3.17/packages/learn-github-packages/about-permissions-for-github-packages#permissions-for-repository-scoped-packages)."
   *
   * @tags packages
   * @name PackagesDeletePackageForOrg
   * @summary Delete a package for an organization
   * @request DELETE:/orgs/{org}/packages/{package_type}/{package_name}
   */
  packagesDeletePackageForOrg = (
    packageType:
      | "npm"
      | "maven"
      | "rubygems"
      | "docker"
      | "nuget"
      | "container",
    packageName: string,
    org: string,
    params: RequestParams = {},
  ) =>
    this.http.request<PackagesDeletePackageForOrgData, BasicError>({
      path: `/orgs/${org}/packages/${packageType}/${packageName}`,
      method: "DELETE",
      ...params,
    });
  /**
   * @description Restores an entire package in an organization. You can restore a deleted package under the following conditions: - The package was deleted within the last 30 days. - The same package namespace and version is still available and not reused for a new package. If the same package namespace is not available, you will not be able to restore your package. In this scenario, to restore the deleted package, you must delete the new package that uses the deleted package's namespace first. The authenticated user must have admin permissions in the organization to use this endpoint. If the `package_type` belongs to a GitHub Packages registry that supports granular permissions, the authenticated user must also have admin permissions to the package. For the list of these registries, see "[About permissions for GitHub Packages](https://docs.github.com/enterprise-server@3.17/packages/learn-github-packages/about-permissions-for-github-packages#granular-permissions-for-userorganization-scoped-packages)." OAuth app tokens and personal access tokens (classic) need the `read:packages` and `write:packages` scopes to use this endpoint. For more information, see "[About permissions for GitHub Packages](https://docs.github.com/enterprise-server@3.17/packages/learn-github-packages/about-permissions-for-github-packages#permissions-for-repository-scoped-packages)."
   *
   * @tags packages
   * @name PackagesRestorePackageForOrg
   * @summary Restore a package for an organization
   * @request POST:/orgs/{org}/packages/{package_type}/{package_name}/restore
   */
  packagesRestorePackageForOrg = (
    {
      packageType,
      packageName,
      org,
      ...query
    }: PackagesRestorePackageForOrgParams,
    params: RequestParams = {},
  ) =>
    this.http.request<PackagesRestorePackageForOrgData, BasicError>({
      path: `/orgs/${org}/packages/${packageType}/${packageName}/restore`,
      method: "POST",
      query: query,
      ...params,
    });
  /**
   * @description Lists package versions for a package owned by an organization. OAuth app tokens and personal access tokens (classic) need the `read:packages` scope to use this endpoint. For more information, see "[About permissions for GitHub Packages](https://docs.github.com/enterprise-server@3.17/packages/learn-github-packages/about-permissions-for-github-packages#permissions-for-repository-scoped-packages)."
   *
   * @tags packages
   * @name PackagesGetAllPackageVersionsForPackageOwnedByOrg
   * @summary List package versions for a package owned by an organization
   * @request GET:/orgs/{org}/packages/{package_type}/{package_name}/versions
   */
  packagesGetAllPackageVersionsForPackageOwnedByOrg = (
    {
      packageType,
      packageName,
      org,
      ...query
    }: PackagesGetAllPackageVersionsForPackageOwnedByOrgParams,
    params: RequestParams = {},
  ) =>
    this.http.request<
      PackagesGetAllPackageVersionsForPackageOwnedByOrgData,
      BasicError
    >({
      path: `/orgs/${org}/packages/${packageType}/${packageName}/versions`,
      method: "GET",
      query: query,
      format: "json",
      ...params,
    });
  /**
   * @description Gets a specific package version in an organization. OAuth app tokens and personal access tokens (classic) need the `read:packages` scope to use this endpoint. For more information, see "[About permissions for GitHub Packages](https://docs.github.com/enterprise-server@3.17/packages/learn-github-packages/about-permissions-for-github-packages#permissions-for-repository-scoped-packages)."
   *
   * @tags packages
   * @name PackagesGetPackageVersionForOrganization
   * @summary Get a package version for an organization
   * @request GET:/orgs/{org}/packages/{package_type}/{package_name}/versions/{package_version_id}
   */
  packagesGetPackageVersionForOrganization = (
    packageType:
      | "npm"
      | "maven"
      | "rubygems"
      | "docker"
      | "nuget"
      | "container",
    packageName: string,
    org: string,
    packageVersionId: number,
    params: RequestParams = {},
  ) =>
    this.http.request<PackagesGetPackageVersionForOrganizationData, any>({
      path: `/orgs/${org}/packages/${packageType}/${packageName}/versions/${packageVersionId}`,
      method: "GET",
      format: "json",
      ...params,
    });
  /**
   * @description Deletes a specific package version in an organization. If the package is public and the package version has more than 5,000 downloads, you cannot delete the package version. In this scenario, contact GitHub support for further assistance. The authenticated user must have admin permissions in the organization to use this endpoint. If the `package_type` belongs to a GitHub Packages registry that supports granular permissions, the authenticated user must also have admin permissions to the package. For the list of these registries, see "[About permissions for GitHub Packages](https://docs.github.com/enterprise-server@3.17/packages/learn-github-packages/about-permissions-for-github-packages#granular-permissions-for-userorganization-scoped-packages)." OAuth app tokens and personal access tokens (classic) need the `read:packages` and `delete:packages` scopes to use this endpoint. For more information, see "[About permissions for GitHub Packages](https://docs.github.com/enterprise-server@3.17/packages/learn-github-packages/about-permissions-for-github-packages#permissions-for-repository-scoped-packages)."
   *
   * @tags packages
   * @name PackagesDeletePackageVersionForOrg
   * @summary Delete package version for an organization
   * @request DELETE:/orgs/{org}/packages/{package_type}/{package_name}/versions/{package_version_id}
   */
  packagesDeletePackageVersionForOrg = (
    packageType:
      | "npm"
      | "maven"
      | "rubygems"
      | "docker"
      | "nuget"
      | "container",
    packageName: string,
    org: string,
    packageVersionId: number,
    params: RequestParams = {},
  ) =>
    this.http.request<PackagesDeletePackageVersionForOrgData, BasicError>({
      path: `/orgs/${org}/packages/${packageType}/${packageName}/versions/${packageVersionId}`,
      method: "DELETE",
      ...params,
    });
  /**
   * @description Restores a specific package version in an organization. You can restore a deleted package under the following conditions: - The package was deleted within the last 30 days. - The same package namespace and version is still available and not reused for a new package. If the same package namespace is not available, you will not be able to restore your package. In this scenario, to restore the deleted package, you must delete the new package that uses the deleted package's namespace first. The authenticated user must have admin permissions in the organization to use this endpoint. If the `package_type` belongs to a GitHub Packages registry that supports granular permissions, the authenticated user must also have admin permissions to the package. For the list of these registries, see "[About permissions for GitHub Packages](https://docs.github.com/enterprise-server@3.17/packages/learn-github-packages/about-permissions-for-github-packages#granular-permissions-for-userorganization-scoped-packages)." OAuth app tokens and personal access tokens (classic) need the `read:packages` and `write:packages` scopes to use this endpoint. For more information, see "[About permissions for GitHub Packages](https://docs.github.com/enterprise-server@3.17/packages/learn-github-packages/about-permissions-for-github-packages#permissions-for-repository-scoped-packages)."
   *
   * @tags packages
   * @name PackagesRestorePackageVersionForOrg
   * @summary Restore package version for an organization
   * @request POST:/orgs/{org}/packages/{package_type}/{package_name}/versions/{package_version_id}/restore
   */
  packagesRestorePackageVersionForOrg = (
    packageType:
      | "npm"
      | "maven"
      | "rubygems"
      | "docker"
      | "nuget"
      | "container",
    packageName: string,
    org: string,
    packageVersionId: number,
    params: RequestParams = {},
  ) =>
    this.http.request<PackagesRestorePackageVersionForOrgData, BasicError>({
      path: `/orgs/${org}/packages/${packageType}/${packageName}/versions/${packageVersionId}/restore`,
      method: "POST",
      ...params,
    });
  /**
   * @description Lists requests from organization members to access organization resources with a fine-grained personal access token. Only GitHub Apps can use this endpoint.
   *
   * @tags orgs
   * @name OrgsListPatGrantRequests
   * @summary List requests to access organization resources with fine-grained personal access tokens
   * @request GET:/orgs/{org}/personal-access-token-requests
   */
  orgsListPatGrantRequests = (
    { org, ...query }: OrgsListPatGrantRequestsParams,
    params: RequestParams = {},
  ) =>
    this.http.request<
      OrgsListPatGrantRequestsData,
      BasicError | ValidationError
    >({
      path: `/orgs/${org}/personal-access-token-requests`,
      method: "GET",
      query: query,
      format: "json",
      ...params,
    });
  /**
   * @description Approves or denies multiple pending requests to access organization resources via a fine-grained personal access token. Only GitHub Apps can use this endpoint.
   *
   * @tags orgs
   * @name OrgsReviewPatGrantRequestsInBulk
   * @summary Review requests to access organization resources with fine-grained personal access tokens
   * @request POST:/orgs/{org}/personal-access-token-requests
   */
  orgsReviewPatGrantRequestsInBulk = (
    org: string,
    data: OrgsReviewPatGrantRequestsInBulkPayload,
    params: RequestParams = {},
  ) =>
    this.http.request<object, BasicError | ValidationError>({
      path: `/orgs/${org}/personal-access-token-requests`,
      method: "POST",
      body: data,
      type: ContentType.Json,
      ...params,
    });
  /**
   * @description Approves or denies a pending request to access organization resources via a fine-grained personal access token. Only GitHub Apps can use this endpoint.
   *
   * @tags orgs
   * @name OrgsReviewPatGrantRequest
   * @summary Review a request to access organization resources with a fine-grained personal access token
   * @request POST:/orgs/{org}/personal-access-token-requests/{pat_request_id}
   */
  orgsReviewPatGrantRequest = (
    org: string,
    patRequestId: number,
    data: OrgsReviewPatGrantRequestPayload,
    params: RequestParams = {},
  ) =>
    this.http.request<any, BasicError | ValidationError>({
      path: `/orgs/${org}/personal-access-token-requests/${patRequestId}`,
      method: "POST",
      body: data,
      type: ContentType.Json,
      ...params,
    });
  /**
   * @description Lists the repositories a fine-grained personal access token request is requesting access to. Only GitHub Apps can use this endpoint.
   *
   * @tags orgs
   * @name OrgsListPatGrantRequestRepositories
   * @summary List repositories requested to be accessed by a fine-grained personal access token
   * @request GET:/orgs/{org}/personal-access-token-requests/{pat_request_id}/repositories
   */
  orgsListPatGrantRequestRepositories = (
    { org, patRequestId, ...query }: OrgsListPatGrantRequestRepositoriesParams,
    params: RequestParams = {},
  ) =>
    this.http.request<OrgsListPatGrantRequestRepositoriesData, BasicError>({
      path: `/orgs/${org}/personal-access-token-requests/${patRequestId}/repositories`,
      method: "GET",
      query: query,
      format: "json",
      ...params,
    });
  /**
   * @description Lists approved fine-grained personal access tokens owned by organization members that can access organization resources. Only GitHub Apps can use this endpoint.
   *
   * @tags orgs
   * @name OrgsListPatGrants
   * @summary List fine-grained personal access tokens with access to organization resources
   * @request GET:/orgs/{org}/personal-access-tokens
   */
  orgsListPatGrants = (
    { org, ...query }: OrgsListPatGrantsParams,
    params: RequestParams = {},
  ) =>
    this.http.request<OrgsListPatGrantsData, BasicError | ValidationError>({
      path: `/orgs/${org}/personal-access-tokens`,
      method: "GET",
      query: query,
      format: "json",
      ...params,
    });
  /**
   * @description Updates the access organization members have to organization resources via fine-grained personal access tokens. Limited to revoking a token's existing access. Only GitHub Apps can use this endpoint.
   *
   * @tags orgs
   * @name OrgsUpdatePatAccesses
   * @summary Update the access to organization resources via fine-grained personal access tokens
   * @request POST:/orgs/{org}/personal-access-tokens
   */
  orgsUpdatePatAccesses = (
    org: string,
    data: OrgsUpdatePatAccessesPayload,
    params: RequestParams = {},
  ) =>
    this.http.request<object, BasicError | ValidationError>({
      path: `/orgs/${org}/personal-access-tokens`,
      method: "POST",
      body: data,
      type: ContentType.Json,
      ...params,
    });
  /**
   * @description Updates the access an organization member has to organization resources via a fine-grained personal access token. Limited to revoking the token's existing access. Limited to revoking a token's existing access. Only GitHub Apps can use this endpoint.
   *
   * @tags orgs
   * @name OrgsUpdatePatAccess
   * @summary Update the access a fine-grained personal access token has to organization resources
   * @request POST:/orgs/{org}/personal-access-tokens/{pat_id}
   */
  orgsUpdatePatAccess = (
    org: string,
    patId: number,
    data: OrgsUpdatePatAccessPayload,
    params: RequestParams = {},
  ) =>
    this.http.request<any, BasicError | ValidationError>({
      path: `/orgs/${org}/personal-access-tokens/${patId}`,
      method: "POST",
      body: data,
      type: ContentType.Json,
      ...params,
    });
  /**
   * @description Lists the repositories a fine-grained personal access token has access to. Only GitHub Apps can use this endpoint.
   *
   * @tags orgs
   * @name OrgsListPatGrantRepositories
   * @summary List repositories a fine-grained personal access token has access to
   * @request GET:/orgs/{org}/personal-access-tokens/{pat_id}/repositories
   */
  orgsListPatGrantRepositories = (
    { org, patId, ...query }: OrgsListPatGrantRepositoriesParams,
    params: RequestParams = {},
  ) =>
    this.http.request<OrgsListPatGrantRepositoriesData, BasicError>({
      path: `/orgs/${org}/personal-access-tokens/${patId}/repositories`,
      method: "GET",
      query: query,
      format: "json",
      ...params,
    });
  /**
   * @description List all pre-receive hooks that are enabled or testing for this organization as well as any disabled hooks that can be configured at the organization level. Globally disabled pre-receive hooks that do not allow downstream configuration are not listed.
   *
   * @tags enterprise-admin
   * @name EnterpriseAdminListPreReceiveHooksForOrg
   * @summary List pre-receive hooks for an organization
   * @request GET:/orgs/{org}/pre-receive-hooks
   */
  enterpriseAdminListPreReceiveHooksForOrg = (
    { org, ...query }: EnterpriseAdminListPreReceiveHooksForOrgParams,
    params: RequestParams = {},
  ) =>
    this.http.request<EnterpriseAdminListPreReceiveHooksForOrgData, any>({
      path: `/orgs/${org}/pre-receive-hooks`,
      method: "GET",
      query: query,
      format: "json",
      ...params,
    });
  /**
   * No description
   *
   * @tags enterprise-admin
   * @name EnterpriseAdminGetPreReceiveHookForOrg
   * @summary Get a pre-receive hook for an organization
   * @request GET:/orgs/{org}/pre-receive-hooks/{pre_receive_hook_id}
   */
  enterpriseAdminGetPreReceiveHookForOrg = (
    org: string,
    preReceiveHookId: number,
    params: RequestParams = {},
  ) =>
    this.http.request<EnterpriseAdminGetPreReceiveHookForOrgData, any>({
      path: `/orgs/${org}/pre-receive-hooks/${preReceiveHookId}`,
      method: "GET",
      format: "json",
      ...params,
    });
  /**
   * @description For pre-receive hooks which are allowed to be configured at the org level, you can set `enforcement` and `allow_downstream_configuration`
   *
   * @tags enterprise-admin
   * @name EnterpriseAdminUpdatePreReceiveHookEnforcementForOrg
   * @summary Update pre-receive hook enforcement for an organization
   * @request PATCH:/orgs/{org}/pre-receive-hooks/{pre_receive_hook_id}
   */
  enterpriseAdminUpdatePreReceiveHookEnforcementForOrg = (
    org: string,
    preReceiveHookId: number,
    data?: EnterpriseAdminUpdatePreReceiveHookEnforcementForOrgPayload,
    params: RequestParams = {},
  ) =>
    this.http.request<
      EnterpriseAdminUpdatePreReceiveHookEnforcementForOrgData,
      any
    >({
      path: `/orgs/${org}/pre-receive-hooks/${preReceiveHookId}`,
      method: "PATCH",
      body: data,
      type: ContentType.Json,
      format: "json",
      ...params,
    });
  /**
   * @description Removes any overrides for this hook at the org level for this org.
   *
   * @tags enterprise-admin
   * @name EnterpriseAdminRemovePreReceiveHookEnforcementForOrg
   * @summary Remove pre-receive hook enforcement for an organization
   * @request DELETE:/orgs/{org}/pre-receive-hooks/{pre_receive_hook_id}
   */
  enterpriseAdminRemovePreReceiveHookEnforcementForOrg = (
    org: string,
    preReceiveHookId: number,
    params: RequestParams = {},
  ) =>
    this.http.request<
      EnterpriseAdminRemovePreReceiveHookEnforcementForOrgData,
      any
    >({
      path: `/orgs/${org}/pre-receive-hooks/${preReceiveHookId}`,
      method: "DELETE",
      format: "json",
      ...params,
    });
  /**
   * @description Lists all private registry configurations available at the organization-level without revealing their encrypted values. OAuth app tokens and personal access tokens (classic) need the `admin:org` scope to use this endpoint.
   *
   * @tags private-registries
   * @name PrivateRegistriesListOrgPrivateRegistries
   * @summary List private registries for an organization
   * @request GET:/orgs/{org}/private-registries
   */
  privateRegistriesListOrgPrivateRegistries = (
    { org, ...query }: PrivateRegistriesListOrgPrivateRegistriesParams,
    params: RequestParams = {},
  ) =>
    this.http.request<
      PrivateRegistriesListOrgPrivateRegistriesData,
      BasicError
    >({
      path: `/orgs/${org}/private-registries`,
      method: "GET",
      query: query,
      format: "json",
      ...params,
    });
  /**
   * @description Gets the org public key, which is needed to encrypt private registry secrets. You need to encrypt a secret before you can create or update secrets. OAuth tokens and personal access tokens (classic) need the `admin:org` scope to use this endpoint.
   *
   * @tags private-registries
   * @name PrivateRegistriesGetOrgPublicKey
   * @summary Get private registries public key for an organization
   * @request GET:/orgs/{org}/private-registries/public-key
   */
  privateRegistriesGetOrgPublicKey = (
    org: string,
    params: RequestParams = {},
  ) =>
    this.http.request<PrivateRegistriesGetOrgPublicKeyData, BasicError>({
      path: `/orgs/${org}/private-registries/public-key`,
      method: "GET",
      format: "json",
      ...params,
    });
  /**
   * @description Get the configuration of a single private registry defined for an organization, omitting its encrypted value. OAuth app tokens and personal access tokens (classic) need the `admin:org` scope to use this endpoint.
   *
   * @tags private-registries
   * @name PrivateRegistriesGetOrgPrivateRegistry
   * @summary Get a private registry for an organization
   * @request GET:/orgs/{org}/private-registries/{secret_name}
   */
  privateRegistriesGetOrgPrivateRegistry = (
    org: string,
    secretName: string,
    params: RequestParams = {},
  ) =>
    this.http.request<PrivateRegistriesGetOrgPrivateRegistryData, BasicError>({
      path: `/orgs/${org}/private-registries/${secretName}`,
      method: "GET",
      format: "json",
      ...params,
    });
  /**
   * @description Updates a private registry configuration with an encrypted value for an organization. Encrypt your secret using [LibSodium](https://libsodium.gitbook.io/doc/bindings_for_other_languages). For more information, see "[Encrypting secrets for the REST API](https://docs.github.com/enterprise-server@3.17/rest/guides/encrypting-secrets-for-the-rest-api)." OAuth app tokens and personal access tokens (classic) need the `admin:org` scope to use this endpoint.
   *
   * @tags private-registries
   * @name PrivateRegistriesUpdateOrgPrivateRegistry
   * @summary Update a private registry for an organization
   * @request PATCH:/orgs/{org}/private-registries/{secret_name}
   */
  privateRegistriesUpdateOrgPrivateRegistry = (
    org: string,
    secretName: string,
    data: PrivateRegistriesUpdateOrgPrivateRegistryPayload,
    params: RequestParams = {},
  ) =>
    this.http.request<
      PrivateRegistriesUpdateOrgPrivateRegistryData,
      BasicError | ValidationError
    >({
      path: `/orgs/${org}/private-registries/${secretName}`,
      method: "PATCH",
      body: data,
      type: ContentType.Json,
      ...params,
    });
  /**
   * @description Delete a private registry configuration at the organization-level. OAuth app tokens and personal access tokens (classic) need the `admin:org` scope to use this endpoint.
   *
   * @tags private-registries
   * @name PrivateRegistriesDeleteOrgPrivateRegistry
   * @summary Delete a private registry for an organization
   * @request DELETE:/orgs/{org}/private-registries/{secret_name}
   */
  privateRegistriesDeleteOrgPrivateRegistry = (
    org: string,
    secretName: string,
    params: RequestParams = {},
  ) =>
    this.http.request<
      PrivateRegistriesDeleteOrgPrivateRegistryData,
      BasicError
    >({
      path: `/orgs/${org}/private-registries/${secretName}`,
      method: "DELETE",
      ...params,
    });
  /**
   * @description > [!WARNING] > **Closing down notice:** Projects (classic) is being deprecated in favor of the new Projects experience. > See the [changelog](https://github.blog/changelog/2024-05-23-sunset-notice-projects-classic/) for more information.
   *
   * @tags projects
   * @name ProjectsListForOrg
   * @summary List organization projects
   * @request GET:/orgs/{org}/projects
   * @deprecated
   */
  projectsListForOrg = (
    { org, ...query }: ProjectsListForOrgParams,
    params: RequestParams = {},
  ) =>
    this.http.request<ProjectsListForOrgData, ValidationErrorSimple>({
      path: `/orgs/${org}/projects`,
      method: "GET",
      query: query,
      format: "json",
      ...params,
    });
  /**
   * @description > [!WARNING] > **Closing down notice:** Projects (classic) is being deprecated in favor of the new Projects experience. > See the [changelog](https://github.blog/changelog/2024-05-23-sunset-notice-projects-classic/) for more information.
   *
   * @tags projects
   * @name ProjectsCreateForOrg
   * @summary Create an organization project
   * @request POST:/orgs/{org}/projects
   * @deprecated
   */
  projectsCreateForOrg = (
    org: string,
    data: ProjectsCreateForOrgPayload,
    params: RequestParams = {},
  ) =>
    this.http.request<
      ProjectsCreateForOrgData,
      BasicError | ValidationErrorSimple
    >({
      path: `/orgs/${org}/projects`,
      method: "POST",
      body: data,
      type: ContentType.Json,
      format: "json",
      ...params,
    });
  /**
   * @description Gets all custom properties defined for an organization. Organization members can read these properties.
   *
   * @tags orgs
   * @name OrgsGetAllCustomProperties
   * @summary Get all custom properties for an organization
   * @request GET:/orgs/{org}/properties/schema
   */
  orgsGetAllCustomProperties = (org: string, params: RequestParams = {}) =>
    this.http.request<OrgsGetAllCustomPropertiesData, BasicError>({
      path: `/orgs/${org}/properties/schema`,
      method: "GET",
      format: "json",
      ...params,
    });
  /**
   * @description Creates new or updates existing custom properties defined for an organization in a batch. If the property already exists, the existing property will be replaced with the new values. Missing optional values will fall back to default values, previous values will be overwritten. E.g. if a property exists with `values_editable_by: org_and_repo_actors` and it's updated without specifying `values_editable_by`, it will be updated to default value `org_actors`. To use this endpoint, the authenticated user must be one of: - An administrator for the organization. - A user, or a user on a team, with the fine-grained permission of `custom_properties_org_definitions_manager` in the organization.
   *
   * @tags orgs
   * @name OrgsCreateOrUpdateCustomProperties
   * @summary Create or update custom properties for an organization
   * @request PATCH:/orgs/{org}/properties/schema
   */
  orgsCreateOrUpdateCustomProperties = (
    org: string,
    data: OrgsCreateOrUpdateCustomPropertiesPayload,
    params: RequestParams = {},
  ) =>
    this.http.request<OrgsCreateOrUpdateCustomPropertiesData, BasicError>({
      path: `/orgs/${org}/properties/schema`,
      method: "PATCH",
      body: data,
      type: ContentType.Json,
      format: "json",
      ...params,
    });
  /**
   * @description Gets a custom property that is defined for an organization. Organization members can read these properties.
   *
   * @tags orgs
   * @name OrgsGetCustomProperty
   * @summary Get a custom property for an organization
   * @request GET:/orgs/{org}/properties/schema/{custom_property_name}
   */
  orgsGetCustomProperty = (
    org: string,
    customPropertyName: string,
    params: RequestParams = {},
  ) =>
    this.http.request<OrgsGetCustomPropertyData, BasicError>({
      path: `/orgs/${org}/properties/schema/${customPropertyName}`,
      method: "GET",
      format: "json",
      ...params,
    });
  /**
   * @description Creates a new or updates an existing custom property that is defined for an organization. To use this endpoint, the authenticated user must be one of: - An administrator for the organization. - A user, or a user on a team, with the fine-grained permission of `custom_properties_org_definitions_manager` in the organization.
   *
   * @tags orgs
   * @name OrgsCreateOrUpdateCustomProperty
   * @summary Create or update a custom property for an organization
   * @request PUT:/orgs/{org}/properties/schema/{custom_property_name}
   */
  orgsCreateOrUpdateCustomProperty = (
    org: string,
    customPropertyName: string,
    data: CustomPropertySetPayload,
    params: RequestParams = {},
  ) =>
    this.http.request<OrgsCreateOrUpdateCustomPropertyData, BasicError>({
      path: `/orgs/${org}/properties/schema/${customPropertyName}`,
      method: "PUT",
      body: data,
      type: ContentType.Json,
      format: "json",
      ...params,
    });
  /**
   * @description Removes a custom property that is defined for an organization. To use this endpoint, the authenticated user must be one of: - An administrator for the organization. - A user, or a user on a team, with the fine-grained permission of `custom_properties_org_definitions_manager` in the organization.
   *
   * @tags orgs
   * @name OrgsRemoveCustomProperty
   * @summary Remove a custom property for an organization
   * @request DELETE:/orgs/{org}/properties/schema/{custom_property_name}
   */
  orgsRemoveCustomProperty = (
    org: string,
    customPropertyName: string,
    params: RequestParams = {},
  ) =>
    this.http.request<any, BasicError>({
      path: `/orgs/${org}/properties/schema/${customPropertyName}`,
      method: "DELETE",
      ...params,
    });
  /**
   * @description Lists organization repositories with all of their custom property values. Organization members can read these properties.
   *
   * @tags orgs
   * @name OrgsListCustomPropertiesValuesForRepos
   * @summary List custom property values for organization repositories
   * @request GET:/orgs/{org}/properties/values
   */
  orgsListCustomPropertiesValuesForRepos = (
    { org, ...query }: OrgsListCustomPropertiesValuesForReposParams,
    params: RequestParams = {},
  ) =>
    this.http.request<OrgsListCustomPropertiesValuesForReposData, BasicError>({
      path: `/orgs/${org}/properties/values`,
      method: "GET",
      query: query,
      format: "json",
      ...params,
    });
  /**
   * @description Create new or update existing custom property values for repositories in a batch that belong to an organization. Each target repository will have its custom property values updated to match the values provided in the request. A maximum of 30 repositories can be updated in a single request. Using a value of `null` for a custom property will remove or 'unset' the property value from the repository. To use this endpoint, the authenticated user must be one of: - An administrator for the organization. - A user, or a user on a team, with the fine-grained permission of `custom_properties_org_values_editor` in the organization.
   *
   * @tags orgs
   * @name OrgsCreateOrUpdateCustomPropertiesValuesForRepos
   * @summary Create or update custom property values for organization repositories
   * @request PATCH:/orgs/{org}/properties/values
   */
  orgsCreateOrUpdateCustomPropertiesValuesForRepos = (
    org: string,
    data: OrgsCreateOrUpdateCustomPropertiesValuesForReposPayload,
    params: RequestParams = {},
  ) =>
    this.http.request<
      OrgsCreateOrUpdateCustomPropertiesValuesForReposData,
      BasicError | ValidationError
    >({
      path: `/orgs/${org}/properties/values`,
      method: "PATCH",
      body: data,
      type: ContentType.Json,
      ...params,
    });
  /**
   * @description Members of an organization can choose to have their membership publicized or not.
   *
   * @tags orgs
   * @name OrgsListPublicMembers
   * @summary List public organization members
   * @request GET:/orgs/{org}/public_members
   */
  orgsListPublicMembers = (
    { org, ...query }: OrgsListPublicMembersParams,
    params: RequestParams = {},
  ) =>
    this.http.request<OrgsListPublicMembersData, any>({
      path: `/orgs/${org}/public_members`,
      method: "GET",
      query: query,
      format: "json",
      ...params,
    });
  /**
   * @description Check if the provided user is a public member of the organization.
   *
   * @tags orgs
   * @name OrgsCheckPublicMembershipForUser
   * @summary Check public organization membership for a user
   * @request GET:/orgs/{org}/public_members/{username}
   */
  orgsCheckPublicMembershipForUser = (
    org: string,
    username: string,
    params: RequestParams = {},
  ) =>
    this.http.request<OrgsCheckPublicMembershipForUserData, void>({
      path: `/orgs/${org}/public_members/${username}`,
      method: "GET",
      ...params,
    });
  /**
   * @description The user can publicize their own membership. (A user cannot publicize the membership for another user.) Note that you'll need to set `Content-Length` to zero when calling out to this endpoint. For more information, see "[HTTP method](https://docs.github.com/enterprise-server@3.17/rest/guides/getting-started-with-the-rest-api#http-method)."
   *
   * @tags orgs
   * @name OrgsSetPublicMembershipForAuthenticatedUser
   * @summary Set public organization membership for the authenticated user
   * @request PUT:/orgs/{org}/public_members/{username}
   */
  orgsSetPublicMembershipForAuthenticatedUser = (
    org: string,
    username: string,
    params: RequestParams = {},
  ) =>
    this.http.request<
      OrgsSetPublicMembershipForAuthenticatedUserData,
      BasicError
    >({
      path: `/orgs/${org}/public_members/${username}`,
      method: "PUT",
      ...params,
    });
  /**
   * @description Removes the public membership for the authenticated user from the specified organization, unless public visibility is enforced by default.
   *
   * @tags orgs
   * @name OrgsRemovePublicMembershipForAuthenticatedUser
   * @summary Remove public organization membership for the authenticated user
   * @request DELETE:/orgs/{org}/public_members/{username}
   */
  orgsRemovePublicMembershipForAuthenticatedUser = (
    org: string,
    username: string,
    params: RequestParams = {},
  ) =>
    this.http.request<OrgsRemovePublicMembershipForAuthenticatedUserData, any>({
      path: `/orgs/${org}/public_members/${username}`,
      method: "DELETE",
      ...params,
    });
  /**
   * @description Lists repositories for the specified organization. > [!NOTE] > In order to see the `security_and_analysis` block for a repository you must have admin permissions for the repository or be an owner or security manager for the organization that owns the repository. For more information, see "[Managing security managers in your organization](https://docs.github.com/enterprise-server@3.17/organizations/managing-peoples-access-to-your-organization-with-roles/managing-security-managers-in-your-organization)."
   *
   * @tags repos
   * @name ReposListForOrg
   * @summary List organization repositories
   * @request GET:/orgs/{org}/repos
   */
  reposListForOrg = (
    { org, ...query }: ReposListForOrgParams,
    params: RequestParams = {},
  ) =>
    this.http.request<ReposListForOrgData, any>({
      path: `/orgs/${org}/repos`,
      method: "GET",
      query: query,
      format: "json",
      ...params,
    });
  /**
   * @description Creates a new repository in the specified organization. The authenticated user must be a member of the organization. OAuth app tokens and personal access tokens (classic) need the `public_repo` or `repo` scope to create a public repository, and `repo` scope to create a private repository.
   *
   * @tags repos
   * @name ReposCreateInOrg
   * @summary Create an organization repository
   * @request POST:/orgs/{org}/repos
   */
  reposCreateInOrg = (
    org: string,
    data: ReposCreateInOrgPayload,
    params: RequestParams = {},
  ) =>
    this.http.request<ReposCreateInOrgData, BasicError | ValidationError>({
      path: `/orgs/${org}/repos`,
      method: "POST",
      body: data,
      type: ContentType.Json,
      format: "json",
      ...params,
    });
  /**
   * @description Lists the fine-grained permissions that can be used in custom repository roles for an organization. For more information, see "[About custom repository roles](https://docs.github.com/enterprise-server@3.17/organizations/managing-peoples-access-to-your-organization-with-roles/about-custom-repository-roles)." The authenticated user must be an administrator of the organization or of a repository of the organization to use this endpoint. OAuth app tokens and personal access tokens (classic) need the `admin:org` or `repo` scope to use this endpoint.
   *
   * @tags orgs
   * @name OrgsListRepoFineGrainedPermissions
   * @summary List repository fine-grained permissions for an organization
   * @request GET:/orgs/{org}/repository-fine-grained-permissions
   */
  orgsListRepoFineGrainedPermissions = (
    org: string,
    params: RequestParams = {},
  ) =>
    this.http.request<OrgsListRepoFineGrainedPermissionsData, any>({
      path: `/orgs/${org}/repository-fine-grained-permissions`,
      method: "GET",
      format: "json",
      ...params,
    });
  /**
   * @description Get all the repository rulesets for an organization.
   *
   * @tags repos
   * @name ReposGetOrgRulesets
   * @summary Get all organization repository rulesets
   * @request GET:/orgs/{org}/rulesets
   */
  reposGetOrgRulesets = (
    { org, ...query }: ReposGetOrgRulesetsParams,
    params: RequestParams = {},
  ) =>
    this.http.request<ReposGetOrgRulesetsData, BasicError>({
      path: `/orgs/${org}/rulesets`,
      method: "GET",
      query: query,
      format: "json",
      ...params,
    });
  /**
   * @description Create a repository ruleset for an organization.
   *
   * @tags repos
   * @name ReposCreateOrgRuleset
   * @summary Create an organization repository ruleset
   * @request POST:/orgs/{org}/rulesets
   */
  reposCreateOrgRuleset = (
    org: string,
    data: ReposCreateOrgRulesetPayload,
    params: RequestParams = {},
  ) =>
    this.http.request<ReposCreateOrgRulesetData, BasicError>({
      path: `/orgs/${org}/rulesets`,
      method: "POST",
      body: data,
      type: ContentType.Json,
      format: "json",
      ...params,
    });
  /**
   * @description Lists suites of rule evaluations at the organization level. For more information, see "[Managing rulesets for repositories in your organization](https://docs.github.com/enterprise-server@3.17/organizations/managing-organization-settings/managing-rulesets-for-repositories-in-your-organization#viewing-insights-for-rulesets)."
   *
   * @tags repos
   * @name ReposGetOrgRuleSuites
   * @summary List organization rule suites
   * @request GET:/orgs/{org}/rulesets/rule-suites
   */
  reposGetOrgRuleSuites = (
    { org, ...query }: ReposGetOrgRuleSuitesParams,
    params: RequestParams = {},
  ) =>
    this.http.request<ReposGetOrgRuleSuitesData, BasicError>({
      path: `/orgs/${org}/rulesets/rule-suites`,
      method: "GET",
      query: query,
      format: "json",
      ...params,
    });
  /**
   * @description Gets information about a suite of rule evaluations from within an organization. For more information, see "[Managing rulesets for repositories in your organization](https://docs.github.com/enterprise-server@3.17/organizations/managing-organization-settings/managing-rulesets-for-repositories-in-your-organization#viewing-insights-for-rulesets)."
   *
   * @tags repos
   * @name ReposGetOrgRuleSuite
   * @summary Get an organization rule suite
   * @request GET:/orgs/{org}/rulesets/rule-suites/{rule_suite_id}
   */
  reposGetOrgRuleSuite = (
    org: string,
    ruleSuiteId: number,
    params: RequestParams = {},
  ) =>
    this.http.request<ReposGetOrgRuleSuiteData, BasicError>({
      path: `/orgs/${org}/rulesets/rule-suites/${ruleSuiteId}`,
      method: "GET",
      format: "json",
      ...params,
    });
  /**
   * @description Get a repository ruleset for an organization. **Note:** To prevent leaking sensitive information, the `bypass_actors` property is only returned if the user making the API request has write access to the ruleset.
   *
   * @tags repos
   * @name ReposGetOrgRuleset
   * @summary Get an organization repository ruleset
   * @request GET:/orgs/{org}/rulesets/{ruleset_id}
   */
  reposGetOrgRuleset = (
    org: string,
    rulesetId: number,
    params: RequestParams = {},
  ) =>
    this.http.request<ReposGetOrgRulesetData, BasicError>({
      path: `/orgs/${org}/rulesets/${rulesetId}`,
      method: "GET",
      format: "json",
      ...params,
    });
  /**
   * @description Update a ruleset for an organization.
   *
   * @tags repos
   * @name ReposUpdateOrgRuleset
   * @summary Update an organization repository ruleset
   * @request PUT:/orgs/{org}/rulesets/{ruleset_id}
   */
  reposUpdateOrgRuleset = (
    org: string,
    rulesetId: number,
    data?: ReposUpdateOrgRulesetPayload,
    params: RequestParams = {},
  ) =>
    this.http.request<ReposUpdateOrgRulesetData, BasicError>({
      path: `/orgs/${org}/rulesets/${rulesetId}`,
      method: "PUT",
      body: data,
      type: ContentType.Json,
      format: "json",
      ...params,
    });
  /**
   * @description Delete a ruleset for an organization.
   *
   * @tags repos
   * @name ReposDeleteOrgRuleset
   * @summary Delete an organization repository ruleset
   * @request DELETE:/orgs/{org}/rulesets/{ruleset_id}
   */
  reposDeleteOrgRuleset = (
    org: string,
    rulesetId: number,
    params: RequestParams = {},
  ) =>
    this.http.request<ReposDeleteOrgRulesetData, BasicError>({
      path: `/orgs/${org}/rulesets/${rulesetId}`,
      method: "DELETE",
      ...params,
    });
  /**
   * @description Lists secret scanning alerts for eligible repositories in an organization, from newest to oldest. The authenticated user must be an administrator or security manager for the organization to use this endpoint. OAuth app tokens and personal access tokens (classic) need the `repo` or `security_events` scope to use this endpoint. If this endpoint is only used with public repositories, the token can use the `public_repo` scope instead.
   *
   * @tags secret-scanning
   * @name SecretScanningListAlertsForOrg
   * @summary List secret scanning alerts for an organization
   * @request GET:/orgs/{org}/secret-scanning/alerts
   */
  secretScanningListAlertsForOrg = (
    { org, ...query }: SecretScanningListAlertsForOrgParams,
    params: RequestParams = {},
  ) =>
    this.http.request<
      SecretScanningListAlertsForOrgData,
      | BasicError
      | {
          code?: string;
          message?: string;
          documentation_url?: string;
        }
    >({
      path: `/orgs/${org}/secret-scanning/alerts`,
      method: "GET",
      query: query,
      format: "json",
      ...params,
    });
  /**
   * @description > [!WARNING] > **Closing down notice:** This operation is closing down and will be removed in Enterprise Server 3.20. Please use the "[Organization Roles](https://docs.github.com/enterprise-server@3.17/rest/orgs/organization-roles)" endpoints instead.
   *
   * @tags orgs
   * @name OrgsListSecurityManagerTeams
   * @summary List security manager teams
   * @request GET:/orgs/{org}/security-managers
   * @deprecated
   */
  orgsListSecurityManagerTeams = (org: string, params: RequestParams = {}) =>
    this.http.request<OrgsListSecurityManagerTeamsData, any>({
      path: `/orgs/${org}/security-managers`,
      method: "GET",
      format: "json",
      ...params,
    });
  /**
   * @description > [!WARNING] > **Closing down notice:** This operation is closing down and will be removed in Enterprise Server 3.20. Please use the "[Organization Roles](https://docs.github.com/enterprise-server@3.17/rest/orgs/organization-roles)" endpoints instead.
   *
   * @tags orgs
   * @name OrgsAddSecurityManagerTeam
   * @summary Add a security manager team
   * @request PUT:/orgs/{org}/security-managers/teams/{team_slug}
   * @deprecated
   */
  orgsAddSecurityManagerTeam = (
    org: string,
    teamSlug: string,
    params: RequestParams = {},
  ) =>
    this.http.request<OrgsAddSecurityManagerTeamData, any>({
      path: `/orgs/${org}/security-managers/teams/${teamSlug}`,
      method: "PUT",
      ...params,
    });
  /**
   * @description > [!WARNING] > **Closing down notice:** This operation is closing down and will be removed in Enterprise Server 3.20. Please use the "[Organization Roles](https://docs.github.com/enterprise-server@3.17/rest/orgs/organization-roles)" endpoints instead.
   *
   * @tags orgs
   * @name OrgsRemoveSecurityManagerTeam
   * @summary Remove a security manager team
   * @request DELETE:/orgs/{org}/security-managers/teams/{team_slug}
   * @deprecated
   */
  orgsRemoveSecurityManagerTeam = (
    org: string,
    teamSlug: string,
    params: RequestParams = {},
  ) =>
    this.http.request<OrgsRemoveSecurityManagerTeamData, any>({
      path: `/orgs/${org}/security-managers/teams/${teamSlug}`,
      method: "DELETE",
      ...params,
    });
  /**
   * @description Gets the GitHub Advanced Security active committers for an organization per repository. Each distinct user login across all repositories is counted as a single Advanced Security seat, so the `total_advanced_security_committers` is not the sum of advanced_security_committers for each repository. If this organization defers to an enterprise for billing, the `total_advanced_security_committers` returned from the organization API may include some users that are in more than one organization, so they will only consume a single Advanced Security seat at the enterprise level. The total number of repositories with committer information is tracked by the `total_count` field.
   *
   * @tags billing
   * @name BillingGetGithubAdvancedSecurityBillingOrg
   * @summary Get GitHub Advanced Security active committers for an organization
   * @request GET:/orgs/{org}/settings/billing/advanced-security
   */
  billingGetGithubAdvancedSecurityBillingOrg = (
    { org, ...query }: BillingGetGithubAdvancedSecurityBillingOrgParams,
    params: RequestParams = {},
  ) =>
    this.http.request<BillingGetGithubAdvancedSecurityBillingOrgData, any>({
      path: `/orgs/${org}/settings/billing/advanced-security`,
      method: "GET",
      query: query,
      format: "json",
      ...params,
    });
  /**
   * @description Lists all teams in an organization that are visible to the authenticated user.
   *
   * @tags teams
   * @name TeamsList
   * @summary List teams
   * @request GET:/orgs/{org}/teams
   */
  teamsList = (
    { org, ...query }: TeamsListParams,
    params: RequestParams = {},
  ) =>
    this.http.request<TeamsListData, BasicError>({
      path: `/orgs/${org}/teams`,
      method: "GET",
      query: query,
      format: "json",
      ...params,
    });
  /**
   * @description To create a team, the authenticated user must be a member or owner of `{org}`. By default, organization members can create teams. Organization owners can limit team creation to organization owners. For more information, see "[Setting team creation permissions](https://docs.github.com/enterprise-server@3.17/articles/setting-team-creation-permissions-in-your-organization)." When you create a new team, you automatically become a team maintainer without explicitly adding yourself to the optional array of `maintainers`. For more information, see "[About teams](https://docs.github.com/enterprise-server@3.17/github/setting-up-and-managing-organizations-and-teams/about-teams)".
   *
   * @tags teams
   * @name TeamsCreate
   * @summary Create a team
   * @request POST:/orgs/{org}/teams
   */
  teamsCreate = (
    org: string,
    data: TeamsCreatePayload,
    params: RequestParams = {},
  ) =>
    this.http.request<TeamsCreateData, BasicError | ValidationError>({
      path: `/orgs/${org}/teams`,
      method: "POST",
      body: data,
      type: ContentType.Json,
      format: "json",
      ...params,
    });
  /**
   * @description Gets a team using the team's `slug`. To create the `slug`, GitHub Enterprise Server replaces special characters in the `name` string, changes all words to lowercase, and replaces spaces with a `-` separator. For example, `"My TEam Näme"` would become `my-team-name`. > [!NOTE] > You can also specify a team by `org_id` and `team_id` using the route `GET /organizations/{org_id}/team/{team_id}`.
   *
   * @tags teams
   * @name TeamsGetByName
   * @summary Get a team by name
   * @request GET:/orgs/{org}/teams/{team_slug}
   */
  teamsGetByName = (
    org: string,
    teamSlug: string,
    params: RequestParams = {},
  ) =>
    this.http.request<TeamsGetByNameData, BasicError>({
      path: `/orgs/${org}/teams/${teamSlug}`,
      method: "GET",
      format: "json",
      ...params,
    });
  /**
   * @description To edit a team, the authenticated user must either be an organization owner or a team maintainer. > [!NOTE] > You can also specify a team by `org_id` and `team_id` using the route `PATCH /organizations/{org_id}/team/{team_id}`.
   *
   * @tags teams
   * @name TeamsUpdateInOrg
   * @summary Update a team
   * @request PATCH:/orgs/{org}/teams/{team_slug}
   */
  teamsUpdateInOrg = (
    org: string,
    teamSlug: string,
    data?: TeamsUpdateInOrgPayload,
    params: RequestParams = {},
  ) =>
    this.http.request<TeamsUpdateInOrgData, BasicError | ValidationError>({
      path: `/orgs/${org}/teams/${teamSlug}`,
      method: "PATCH",
      body: data,
      type: ContentType.Json,
      format: "json",
      ...params,
    });
  /**
   * @description To delete a team, the authenticated user must be an organization owner or team maintainer. If you are an organization owner, deleting a parent team will delete all of its child teams as well. > [!NOTE] > You can also specify a team by `org_id` and `team_id` using the route `DELETE /organizations/{org_id}/team/{team_id}`.
   *
   * @tags teams
   * @name TeamsDeleteInOrg
   * @summary Delete a team
   * @request DELETE:/orgs/{org}/teams/{team_slug}
   */
  teamsDeleteInOrg = (
    org: string,
    teamSlug: string,
    params: RequestParams = {},
  ) =>
    this.http.request<TeamsDeleteInOrgData, any>({
      path: `/orgs/${org}/teams/${teamSlug}`,
      method: "DELETE",
      ...params,
    });
  /**
   * @description List all discussions on a team's page. > [!NOTE] > You can also specify a team by `org_id` and `team_id` using the route `GET /organizations/{org_id}/team/{team_id}/discussions`. OAuth app tokens and personal access tokens (classic) need the `read:discussion` scope to use this endpoint.
   *
   * @tags teams
   * @name TeamsListDiscussionsInOrg
   * @summary List discussions
   * @request GET:/orgs/{org}/teams/{team_slug}/discussions
   */
  teamsListDiscussionsInOrg = (
    { org, teamSlug, ...query }: TeamsListDiscussionsInOrgParams,
    params: RequestParams = {},
  ) =>
    this.http.request<TeamsListDiscussionsInOrgData, any>({
      path: `/orgs/${org}/teams/${teamSlug}/discussions`,
      method: "GET",
      query: query,
      format: "json",
      ...params,
    });
  /**
   * @description Creates a new discussion post on a team's page. This endpoint triggers [notifications](https://docs.github.com/enterprise-server@3.17/github/managing-subscriptions-and-notifications-on-github/about-notifications). Creating content too quickly using this endpoint may result in secondary rate limiting. For more information, see "[Rate limits for the API](https://docs.github.com/enterprise-server@3.17/rest/using-the-rest-api/rate-limits-for-the-rest-api#about-secondary-rate-limits)" and "[Best practices for using the REST API](https://docs.github.com/enterprise-server@3.17/rest/guides/best-practices-for-using-the-rest-api)." > [!NOTE] > You can also specify a team by `org_id` and `team_id` using the route `POST /organizations/{org_id}/team/{team_id}/discussions`. OAuth app tokens and personal access tokens (classic) need the `write:discussion` scope to use this endpoint.
   *
   * @tags teams
   * @name TeamsCreateDiscussionInOrg
   * @summary Create a discussion
   * @request POST:/orgs/{org}/teams/{team_slug}/discussions
   */
  teamsCreateDiscussionInOrg = (
    org: string,
    teamSlug: string,
    data: TeamsCreateDiscussionInOrgPayload,
    params: RequestParams = {},
  ) =>
    this.http.request<TeamsCreateDiscussionInOrgData, any>({
      path: `/orgs/${org}/teams/${teamSlug}/discussions`,
      method: "POST",
      body: data,
      type: ContentType.Json,
      format: "json",
      ...params,
    });
  /**
   * @description Get a specific discussion on a team's page. > [!NOTE] > You can also specify a team by `org_id` and `team_id` using the route `GET /organizations/{org_id}/team/{team_id}/discussions/{discussion_number}`. OAuth app tokens and personal access tokens (classic) need the `read:discussion` scope to use this endpoint.
   *
   * @tags teams
   * @name TeamsGetDiscussionInOrg
   * @summary Get a discussion
   * @request GET:/orgs/{org}/teams/{team_slug}/discussions/{discussion_number}
   */
  teamsGetDiscussionInOrg = (
    org: string,
    teamSlug: string,
    discussionNumber: number,
    params: RequestParams = {},
  ) =>
    this.http.request<TeamsGetDiscussionInOrgData, any>({
      path: `/orgs/${org}/teams/${teamSlug}/discussions/${discussionNumber}`,
      method: "GET",
      format: "json",
      ...params,
    });
  /**
   * @description Edits the title and body text of a discussion post. Only the parameters you provide are updated. > [!NOTE] > You can also specify a team by `org_id` and `team_id` using the route `PATCH /organizations/{org_id}/team/{team_id}/discussions/{discussion_number}`. OAuth app tokens and personal access tokens (classic) need the `write:discussion` scope to use this endpoint.
   *
   * @tags teams
   * @name TeamsUpdateDiscussionInOrg
   * @summary Update a discussion
   * @request PATCH:/orgs/{org}/teams/{team_slug}/discussions/{discussion_number}
   */
  teamsUpdateDiscussionInOrg = (
    org: string,
    teamSlug: string,
    discussionNumber: number,
    data?: TeamsUpdateDiscussionInOrgPayload,
    params: RequestParams = {},
  ) =>
    this.http.request<TeamsUpdateDiscussionInOrgData, any>({
      path: `/orgs/${org}/teams/${teamSlug}/discussions/${discussionNumber}`,
      method: "PATCH",
      body: data,
      type: ContentType.Json,
      format: "json",
      ...params,
    });
  /**
   * @description Delete a discussion from a team's page. > [!NOTE] > You can also specify a team by `org_id` and `team_id` using the route `DELETE /organizations/{org_id}/team/{team_id}/discussions/{discussion_number}`. OAuth app tokens and personal access tokens (classic) need the `write:discussion` scope to use this endpoint.
   *
   * @tags teams
   * @name TeamsDeleteDiscussionInOrg
   * @summary Delete a discussion
   * @request DELETE:/orgs/{org}/teams/{team_slug}/discussions/{discussion_number}
   */
  teamsDeleteDiscussionInOrg = (
    org: string,
    teamSlug: string,
    discussionNumber: number,
    params: RequestParams = {},
  ) =>
    this.http.request<TeamsDeleteDiscussionInOrgData, any>({
      path: `/orgs/${org}/teams/${teamSlug}/discussions/${discussionNumber}`,
      method: "DELETE",
      ...params,
    });
  /**
   * @description List all comments on a team discussion. > [!NOTE] > You can also specify a team by `org_id` and `team_id` using the route `GET /organizations/{org_id}/team/{team_id}/discussions/{discussion_number}/comments`. OAuth app tokens and personal access tokens (classic) need the `read:discussion` scope to use this endpoint.
   *
   * @tags teams
   * @name TeamsListDiscussionCommentsInOrg
   * @summary List discussion comments
   * @request GET:/orgs/{org}/teams/{team_slug}/discussions/{discussion_number}/comments
   */
  teamsListDiscussionCommentsInOrg = (
    {
      org,
      teamSlug,
      discussionNumber,
      ...query
    }: TeamsListDiscussionCommentsInOrgParams,
    params: RequestParams = {},
  ) =>
    this.http.request<TeamsListDiscussionCommentsInOrgData, any>({
      path: `/orgs/${org}/teams/${teamSlug}/discussions/${discussionNumber}/comments`,
      method: "GET",
      query: query,
      format: "json",
      ...params,
    });
  /**
   * @description Creates a new comment on a team discussion. This endpoint triggers [notifications](https://docs.github.com/enterprise-server@3.17/github/managing-subscriptions-and-notifications-on-github/about-notifications). Creating content too quickly using this endpoint may result in secondary rate limiting. For more information, see "[Rate limits for the API](https://docs.github.com/enterprise-server@3.17/rest/using-the-rest-api/rate-limits-for-the-rest-api#about-secondary-rate-limits)" and "[Best practices for using the REST API](https://docs.github.com/enterprise-server@3.17/rest/guides/best-practices-for-using-the-rest-api)." > [!NOTE] > You can also specify a team by `org_id` and `team_id` using the route `POST /organizations/{org_id}/team/{team_id}/discussions/{discussion_number}/comments`. OAuth app tokens and personal access tokens (classic) need the `write:discussion` scope to use this endpoint.
   *
   * @tags teams
   * @name TeamsCreateDiscussionCommentInOrg
   * @summary Create a discussion comment
   * @request POST:/orgs/{org}/teams/{team_slug}/discussions/{discussion_number}/comments
   */
  teamsCreateDiscussionCommentInOrg = (
    org: string,
    teamSlug: string,
    discussionNumber: number,
    data: TeamsCreateDiscussionCommentInOrgPayload,
    params: RequestParams = {},
  ) =>
    this.http.request<TeamsCreateDiscussionCommentInOrgData, any>({
      path: `/orgs/${org}/teams/${teamSlug}/discussions/${discussionNumber}/comments`,
      method: "POST",
      body: data,
      type: ContentType.Json,
      format: "json",
      ...params,
    });
  /**
   * @description Get a specific comment on a team discussion. > [!NOTE] > You can also specify a team by `org_id` and `team_id` using the route `GET /organizations/{org_id}/team/{team_id}/discussions/{discussion_number}/comments/{comment_number}`. OAuth app tokens and personal access tokens (classic) need the `read:discussion` scope to use this endpoint.
   *
   * @tags teams
   * @name TeamsGetDiscussionCommentInOrg
   * @summary Get a discussion comment
   * @request GET:/orgs/{org}/teams/{team_slug}/discussions/{discussion_number}/comments/{comment_number}
   */
  teamsGetDiscussionCommentInOrg = (
    org: string,
    teamSlug: string,
    discussionNumber: number,
    commentNumber: number,
    params: RequestParams = {},
  ) =>
    this.http.request<TeamsGetDiscussionCommentInOrgData, any>({
      path: `/orgs/${org}/teams/${teamSlug}/discussions/${discussionNumber}/comments/${commentNumber}`,
      method: "GET",
      format: "json",
      ...params,
    });
  /**
   * @description Edits the body text of a discussion comment. > [!NOTE] > You can also specify a team by `org_id` and `team_id` using the route `PATCH /organizations/{org_id}/team/{team_id}/discussions/{discussion_number}/comments/{comment_number}`. OAuth app tokens and personal access tokens (classic) need the `write:discussion` scope to use this endpoint.
   *
   * @tags teams
   * @name TeamsUpdateDiscussionCommentInOrg
   * @summary Update a discussion comment
   * @request PATCH:/orgs/{org}/teams/{team_slug}/discussions/{discussion_number}/comments/{comment_number}
   */
  teamsUpdateDiscussionCommentInOrg = (
    org: string,
    teamSlug: string,
    discussionNumber: number,
    commentNumber: number,
    data: TeamsUpdateDiscussionCommentInOrgPayload,
    params: RequestParams = {},
  ) =>
    this.http.request<TeamsUpdateDiscussionCommentInOrgData, any>({
      path: `/orgs/${org}/teams/${teamSlug}/discussions/${discussionNumber}/comments/${commentNumber}`,
      method: "PATCH",
      body: data,
      type: ContentType.Json,
      format: "json",
      ...params,
    });
  /**
   * @description Deletes a comment on a team discussion. > [!NOTE] > You can also specify a team by `org_id` and `team_id` using the route `DELETE /organizations/{org_id}/team/{team_id}/discussions/{discussion_number}/comments/{comment_number}`. OAuth app tokens and personal access tokens (classic) need the `write:discussion` scope to use this endpoint.
   *
   * @tags teams
   * @name TeamsDeleteDiscussionCommentInOrg
   * @summary Delete a discussion comment
   * @request DELETE:/orgs/{org}/teams/{team_slug}/discussions/{discussion_number}/comments/{comment_number}
   */
  teamsDeleteDiscussionCommentInOrg = (
    org: string,
    teamSlug: string,
    discussionNumber: number,
    commentNumber: number,
    params: RequestParams = {},
  ) =>
    this.http.request<TeamsDeleteDiscussionCommentInOrgData, any>({
      path: `/orgs/${org}/teams/${teamSlug}/discussions/${discussionNumber}/comments/${commentNumber}`,
      method: "DELETE",
      ...params,
    });
  /**
   * @description List the reactions to a [team discussion comment](https://docs.github.com/enterprise-server@3.17/rest/teams/discussion-comments#get-a-discussion-comment). > [!NOTE] > You can also specify a team by `org_id` and `team_id` using the route `GET /organizations/:org_id/team/:team_id/discussions/:discussion_number/comments/:comment_number/reactions`. OAuth app tokens and personal access tokens (classic) need the `read:discussion` scope to use this endpoint.
   *
   * @tags reactions
   * @name ReactionsListForTeamDiscussionCommentInOrg
   * @summary List reactions for a team discussion comment
   * @request GET:/orgs/{org}/teams/{team_slug}/discussions/{discussion_number}/comments/{comment_number}/reactions
   */
  reactionsListForTeamDiscussionCommentInOrg = (
    {
      org,
      teamSlug,
      discussionNumber,
      commentNumber,
      ...query
    }: ReactionsListForTeamDiscussionCommentInOrgParams,
    params: RequestParams = {},
  ) =>
    this.http.request<ReactionsListForTeamDiscussionCommentInOrgData, any>({
      path: `/orgs/${org}/teams/${teamSlug}/discussions/${discussionNumber}/comments/${commentNumber}/reactions`,
      method: "GET",
      query: query,
      format: "json",
      ...params,
    });
  /**
   * @description Create a reaction to a [team discussion comment](https://docs.github.com/enterprise-server@3.17/rest/teams/discussion-comments#get-a-discussion-comment). A response with an HTTP `200` status means that you already added the reaction type to this team discussion comment. > [!NOTE] > You can also specify a team by `org_id` and `team_id` using the route `POST /organizations/:org_id/team/:team_id/discussions/:discussion_number/comments/:comment_number/reactions`. OAuth app tokens and personal access tokens (classic) need the `write:discussion` scope to use this endpoint.
   *
   * @tags reactions
   * @name ReactionsCreateForTeamDiscussionCommentInOrg
   * @summary Create reaction for a team discussion comment
   * @request POST:/orgs/{org}/teams/{team_slug}/discussions/{discussion_number}/comments/{comment_number}/reactions
   */
  reactionsCreateForTeamDiscussionCommentInOrg = (
    org: string,
    teamSlug: string,
    discussionNumber: number,
    commentNumber: number,
    data: ReactionsCreateForTeamDiscussionCommentInOrgPayload,
    params: RequestParams = {},
  ) =>
    this.http.request<ReactionsCreateForTeamDiscussionCommentInOrgData, any>({
      path: `/orgs/${org}/teams/${teamSlug}/discussions/${discussionNumber}/comments/${commentNumber}/reactions`,
      method: "POST",
      body: data,
      type: ContentType.Json,
      format: "json",
      ...params,
    });
  /**
   * @description > [!NOTE] > You can also specify a team or organization with `team_id` and `org_id` using the route `DELETE /organizations/:org_id/team/:team_id/discussions/:discussion_number/comments/:comment_number/reactions/:reaction_id`. Delete a reaction to a [team discussion comment](https://docs.github.com/enterprise-server@3.17/rest/teams/discussion-comments#get-a-discussion-comment). OAuth app tokens and personal access tokens (classic) need the `write:discussion` scope to use this endpoint.
   *
   * @tags reactions
   * @name ReactionsDeleteForTeamDiscussionComment
   * @summary Delete team discussion comment reaction
   * @request DELETE:/orgs/{org}/teams/{team_slug}/discussions/{discussion_number}/comments/{comment_number}/reactions/{reaction_id}
   */
  reactionsDeleteForTeamDiscussionComment = (
    org: string,
    teamSlug: string,
    discussionNumber: number,
    commentNumber: number,
    reactionId: number,
    params: RequestParams = {},
  ) =>
    this.http.request<ReactionsDeleteForTeamDiscussionCommentData, any>({
      path: `/orgs/${org}/teams/${teamSlug}/discussions/${discussionNumber}/comments/${commentNumber}/reactions/${reactionId}`,
      method: "DELETE",
      ...params,
    });
  /**
   * @description List the reactions to a [team discussion](https://docs.github.com/enterprise-server@3.17/rest/teams/discussions#get-a-discussion). > [!NOTE] > You can also specify a team by `org_id` and `team_id` using the route `GET /organizations/:org_id/team/:team_id/discussions/:discussion_number/reactions`. OAuth app tokens and personal access tokens (classic) need the `read:discussion` scope to use this endpoint.
   *
   * @tags reactions
   * @name ReactionsListForTeamDiscussionInOrg
   * @summary List reactions for a team discussion
   * @request GET:/orgs/{org}/teams/{team_slug}/discussions/{discussion_number}/reactions
   */
  reactionsListForTeamDiscussionInOrg = (
    {
      org,
      teamSlug,
      discussionNumber,
      ...query
    }: ReactionsListForTeamDiscussionInOrgParams,
    params: RequestParams = {},
  ) =>
    this.http.request<ReactionsListForTeamDiscussionInOrgData, any>({
      path: `/orgs/${org}/teams/${teamSlug}/discussions/${discussionNumber}/reactions`,
      method: "GET",
      query: query,
      format: "json",
      ...params,
    });
  /**
   * @description Create a reaction to a [team discussion](https://docs.github.com/enterprise-server@3.17/rest/teams/discussions#get-a-discussion). A response with an HTTP `200` status means that you already added the reaction type to this team discussion. > [!NOTE] > You can also specify a team by `org_id` and `team_id` using the route `POST /organizations/:org_id/team/:team_id/discussions/:discussion_number/reactions`. OAuth app tokens and personal access tokens (classic) need the `write:discussion` scope to use this endpoint.
   *
   * @tags reactions
   * @name ReactionsCreateForTeamDiscussionInOrg
   * @summary Create reaction for a team discussion
   * @request POST:/orgs/{org}/teams/{team_slug}/discussions/{discussion_number}/reactions
   */
  reactionsCreateForTeamDiscussionInOrg = (
    org: string,
    teamSlug: string,
    discussionNumber: number,
    data: ReactionsCreateForTeamDiscussionInOrgPayload,
    params: RequestParams = {},
  ) =>
    this.http.request<ReactionsCreateForTeamDiscussionInOrgData, any>({
      path: `/orgs/${org}/teams/${teamSlug}/discussions/${discussionNumber}/reactions`,
      method: "POST",
      body: data,
      type: ContentType.Json,
      format: "json",
      ...params,
    });
  /**
   * @description > [!NOTE] > You can also specify a team or organization with `team_id` and `org_id` using the route `DELETE /organizations/:org_id/team/:team_id/discussions/:discussion_number/reactions/:reaction_id`. Delete a reaction to a [team discussion](https://docs.github.com/enterprise-server@3.17/rest/teams/discussions#get-a-discussion). OAuth app tokens and personal access tokens (classic) need the `write:discussion` scope to use this endpoint.
   *
   * @tags reactions
   * @name ReactionsDeleteForTeamDiscussion
   * @summary Delete team discussion reaction
   * @request DELETE:/orgs/{org}/teams/{team_slug}/discussions/{discussion_number}/reactions/{reaction_id}
   */
  reactionsDeleteForTeamDiscussion = (
    org: string,
    teamSlug: string,
    discussionNumber: number,
    reactionId: number,
    params: RequestParams = {},
  ) =>
    this.http.request<ReactionsDeleteForTeamDiscussionData, any>({
      path: `/orgs/${org}/teams/${teamSlug}/discussions/${discussionNumber}/reactions/${reactionId}`,
      method: "DELETE",
      ...params,
    });
  /**
   * @description Lists a connection between a team and an external group. You can manage team membership with your identity provider using Enterprise Managed Users for GitHub Enterprise Cloud. For more information, see "[GitHub's products](https://docs.github.com/enterprise-server@3.17/github/getting-started-with-github/githubs-products)" in the GitHub Help documentation.
   *
   * @tags teams
   * @name TeamsListLinkedExternalIdpGroupsToTeamForOrg
   * @summary List a connection between an external group and a team
   * @request GET:/orgs/{org}/teams/{team_slug}/external-groups
   */
  teamsListLinkedExternalIdpGroupsToTeamForOrg = (
    org: string,
    teamSlug: string,
    params: RequestParams = {},
  ) =>
    this.http.request<TeamsListLinkedExternalIdpGroupsToTeamForOrgData, any>({
      path: `/orgs/${org}/teams/${teamSlug}/external-groups`,
      method: "GET",
      format: "json",
      ...params,
    });
  /**
   * @description Creates a connection between a team and an external group.  Only one external group can be linked to a team. You can manage team membership with your identity provider using Enterprise Managed Users for GitHub Enterprise Cloud. For more information, see "[GitHub's products](https://docs.github.com/enterprise-server@3.17/github/getting-started-with-github/githubs-products)" in the GitHub Help documentation.
   *
   * @tags teams
   * @name TeamsLinkExternalIdpGroupToTeamForOrg
   * @summary Update the connection between an external group and a team
   * @request PATCH:/orgs/{org}/teams/{team_slug}/external-groups
   */
  teamsLinkExternalIdpGroupToTeamForOrg = (
    org: string,
    teamSlug: string,
    data: TeamsLinkExternalIdpGroupToTeamForOrgPayload,
    params: RequestParams = {},
  ) =>
    this.http.request<TeamsLinkExternalIdpGroupToTeamForOrgData, any>({
      path: `/orgs/${org}/teams/${teamSlug}/external-groups`,
      method: "PATCH",
      body: data,
      type: ContentType.Json,
      format: "json",
      ...params,
    });
  /**
   * @description Deletes a connection between a team and an external group. You can manage team membership with your IdP using Enterprise Managed Users for GitHub Enterprise Cloud. For more information, see [GitHub's products](https://docs.github.com/enterprise-server@3.17/github/getting-started-with-github/githubs-products) in the GitHub Help documentation.
   *
   * @tags teams
   * @name TeamsUnlinkExternalIdpGroupFromTeamForOrg
   * @summary Remove the connection between an external group and a team
   * @request DELETE:/orgs/{org}/teams/{team_slug}/external-groups
   */
  teamsUnlinkExternalIdpGroupFromTeamForOrg = (
    org: string,
    teamSlug: string,
    params: RequestParams = {},
  ) =>
    this.http.request<TeamsUnlinkExternalIdpGroupFromTeamForOrgData, any>({
      path: `/orgs/${org}/teams/${teamSlug}/external-groups`,
      method: "DELETE",
      ...params,
    });
  /**
   * @description Team members will include the members of child teams. To list members in a team, the team must be visible to the authenticated user.
   *
   * @tags teams
   * @name TeamsListMembersInOrg
   * @summary List team members
   * @request GET:/orgs/{org}/teams/{team_slug}/members
   */
  teamsListMembersInOrg = (
    { org, teamSlug, ...query }: TeamsListMembersInOrgParams,
    params: RequestParams = {},
  ) =>
    this.http.request<TeamsListMembersInOrgData, any>({
      path: `/orgs/${org}/teams/${teamSlug}/members`,
      method: "GET",
      query: query,
      format: "json",
      ...params,
    });
  /**
   * @description Team members will include the members of child teams. To get a user's membership with a team, the team must be visible to the authenticated user. > [!NOTE] > You can also specify a team by `org_id` and `team_id` using the route `GET /organizations/{org_id}/team/{team_id}/memberships/{username}`. > [!NOTE] > The response contains the `state` of the membership and the member's `role`. The `role` for organization owners is set to `maintainer`. For more information about `maintainer` roles, see [Create a team](https://docs.github.com/enterprise-server@3.17/rest/teams/teams#create-a-team).
   *
   * @tags teams
   * @name TeamsGetMembershipForUserInOrg
   * @summary Get team membership for a user
   * @request GET:/orgs/{org}/teams/{team_slug}/memberships/{username}
   */
  teamsGetMembershipForUserInOrg = (
    org: string,
    teamSlug: string,
    username: string,
    params: RequestParams = {},
  ) =>
    this.http.request<TeamsGetMembershipForUserInOrgData, void>({
      path: `/orgs/${org}/teams/${teamSlug}/memberships/${username}`,
      method: "GET",
      format: "json",
      ...params,
    });
  /**
   * @description Adds an organization member to a team. An authenticated organization owner or team maintainer can add organization members to a team. Team synchronization is available for organizations using GitHub Enterprise Cloud. For more information, see [GitHub's products](https://docs.github.com/enterprise-server@3.17/github/getting-started-with-github/githubs-products) in the GitHub Help documentation. > [!NOTE] > When you have team synchronization set up for a team with your organization's identity provider (IdP), you will see an error if you attempt to use the API for making changes to the team's membership. If you have access to manage group membership in your IdP, you can manage GitHub Enterprise Server team membership through your identity provider, which automatically adds and removes team members in an organization. For more information, see "[Synchronizing teams between your identity provider and GitHub Enterprise Server](https://docs.github.com/enterprise-server@3.17/articles/synchronizing-teams-between-your-identity-provider-and-github/)." An organization owner can add someone who is not part of the team's organization to a team. When an organization owner adds someone to a team who is not an organization member, this endpoint will send an invitation to the person via email. This newly-created membership will be in the "pending" state until the person accepts the invitation, at which point the membership will transition to the "active" state and the user will be added as a member of the team. If the user is already a member of the team, this endpoint will update the role of the team member's role. To update the membership of a team member, the authenticated user must be an organization owner or a team maintainer. > [!NOTE] > You can also specify a team by `org_id` and `team_id` using the route `PUT /organizations/{org_id}/team/{team_id}/memberships/{username}`.
   *
   * @tags teams
   * @name TeamsAddOrUpdateMembershipForUserInOrg
   * @summary Add or update team membership for a user
   * @request PUT:/orgs/{org}/teams/{team_slug}/memberships/{username}
   */
  teamsAddOrUpdateMembershipForUserInOrg = (
    org: string,
    teamSlug: string,
    username: string,
    data?: TeamsAddOrUpdateMembershipForUserInOrgPayload,
    params: RequestParams = {},
  ) =>
    this.http.request<TeamsAddOrUpdateMembershipForUserInOrgData, void>({
      path: `/orgs/${org}/teams/${teamSlug}/memberships/${username}`,
      method: "PUT",
      body: data,
      type: ContentType.Json,
      format: "json",
      ...params,
    });
  /**
   * @description To remove a membership between a user and a team, the authenticated user must have 'admin' permissions to the team or be an owner of the organization that the team is associated with. Removing team membership does not delete the user, it just removes their membership from the team. Team synchronization is available for organizations using GitHub Enterprise Cloud. For more information, see [GitHub's products](https://docs.github.com/enterprise-server@3.17/github/getting-started-with-github/githubs-products) in the GitHub Help documentation. > [!NOTE] > When you have team synchronization set up for a team with your organization's identity provider (IdP), you will see an error if you attempt to use the API for making changes to the team's membership. If you have access to manage group membership in your IdP, you can manage GitHub Enterprise Server team membership through your identity provider, which automatically adds and removes team members in an organization. For more information, see "[Synchronizing teams between your identity provider and GitHub Enterprise Server](https://docs.github.com/enterprise-server@3.17/articles/synchronizing-teams-between-your-identity-provider-and-github/)." > [!NOTE] > You can also specify a team by `org_id` and `team_id` using the route `DELETE /organizations/{org_id}/team/{team_id}/memberships/{username}`.
   *
   * @tags teams
   * @name TeamsRemoveMembershipForUserInOrg
   * @summary Remove team membership for a user
   * @request DELETE:/orgs/{org}/teams/{team_slug}/memberships/{username}
   */
  teamsRemoveMembershipForUserInOrg = (
    org: string,
    teamSlug: string,
    username: string,
    params: RequestParams = {},
  ) =>
    this.http.request<TeamsRemoveMembershipForUserInOrgData, void>({
      path: `/orgs/${org}/teams/${teamSlug}/memberships/${username}`,
      method: "DELETE",
      ...params,
    });
  /**
   * @description > [!WARNING] > **Closing down notice:** Projects (classic) is being deprecated in favor of the new Projects experience. > See the [changelog](https://github.blog/changelog/2024-05-23-sunset-notice-projects-classic/) for more information.
   *
   * @tags teams
   * @name TeamsListProjectsInOrg
   * @summary List team projects
   * @request GET:/orgs/{org}/teams/{team_slug}/projects
   * @deprecated
   */
  teamsListProjectsInOrg = (
    { org, teamSlug, ...query }: TeamsListProjectsInOrgParams,
    params: RequestParams = {},
  ) =>
    this.http.request<TeamsListProjectsInOrgData, any>({
      path: `/orgs/${org}/teams/${teamSlug}/projects`,
      method: "GET",
      query: query,
      format: "json",
      ...params,
    });
  /**
   * @description > [!WARNING] > **Closing down notice:** Projects (classic) is being deprecated in favor of the new Projects experience. > See the [changelog](https://github.blog/changelog/2024-05-23-sunset-notice-projects-classic/) for more information.
   *
   * @tags teams
   * @name TeamsCheckPermissionsForProjectInOrg
   * @summary Check team permissions for a project
   * @request GET:/orgs/{org}/teams/{team_slug}/projects/{project_id}
   * @deprecated
   */
  teamsCheckPermissionsForProjectInOrg = (
    org: string,
    teamSlug: string,
    projectId: number,
    params: RequestParams = {},
  ) =>
    this.http.request<TeamsCheckPermissionsForProjectInOrgData, void>({
      path: `/orgs/${org}/teams/${teamSlug}/projects/${projectId}`,
      method: "GET",
      format: "json",
      ...params,
    });
  /**
   * @description > [!WARNING] > **Closing down notice:** Projects (classic) is being deprecated in favor of the new Projects experience. > See the [changelog](https://github.blog/changelog/2024-05-23-sunset-notice-projects-classic/) for more information.
   *
   * @tags teams
   * @name TeamsAddOrUpdateProjectPermissionsInOrg
   * @summary Add or update team project permissions
   * @request PUT:/orgs/{org}/teams/{team_slug}/projects/{project_id}
   * @deprecated
   */
  teamsAddOrUpdateProjectPermissionsInOrg = (
    org: string,
    teamSlug: string,
    projectId: number,
    data?: TeamsAddOrUpdateProjectPermissionsInOrgPayload,
    params: RequestParams = {},
  ) =>
    this.http.request<
      TeamsAddOrUpdateProjectPermissionsInOrgData,
      TeamsAddOrUpdateProjectPermissionsInOrgError
    >({
      path: `/orgs/${org}/teams/${teamSlug}/projects/${projectId}`,
      method: "PUT",
      body: data,
      type: ContentType.Json,
      ...params,
    });
  /**
   * @description > [!WARNING] > **Closing down notice:** Projects (classic) is being deprecated in favor of the new Projects experience. > See the [changelog](https://github.blog/changelog/2024-05-23-sunset-notice-projects-classic/) for more information.
   *
   * @tags teams
   * @name TeamsRemoveProjectInOrg
   * @summary Remove a project from a team
   * @request DELETE:/orgs/{org}/teams/{team_slug}/projects/{project_id}
   * @deprecated
   */
  teamsRemoveProjectInOrg = (
    org: string,
    teamSlug: string,
    projectId: number,
    params: RequestParams = {},
  ) =>
    this.http.request<TeamsRemoveProjectInOrgData, any>({
      path: `/orgs/${org}/teams/${teamSlug}/projects/${projectId}`,
      method: "DELETE",
      ...params,
    });
  /**
   * @description Lists a team's repositories visible to the authenticated user. > [!NOTE] > You can also specify a team by `org_id` and `team_id` using the route `GET /organizations/{org_id}/team/{team_id}/repos`.
   *
   * @tags teams
   * @name TeamsListReposInOrg
   * @summary List team repositories
   * @request GET:/orgs/{org}/teams/{team_slug}/repos
   */
  teamsListReposInOrg = (
    { org, teamSlug, ...query }: TeamsListReposInOrgParams,
    params: RequestParams = {},
  ) =>
    this.http.request<TeamsListReposInOrgData, any>({
      path: `/orgs/${org}/teams/${teamSlug}/repos`,
      method: "GET",
      query: query,
      format: "json",
      ...params,
    });
  /**
   * @description Checks whether a team has `admin`, `push`, `maintain`, `triage`, or `pull` permission for a repository. Repositories inherited through a parent team will also be checked. You can also get information about the specified repository, including what permissions the team grants on it, by passing the following custom [media type](https://docs.github.com/enterprise-server@3.17/rest/using-the-rest-api/getting-started-with-the-rest-api#media-types/) via the `application/vnd.github.v3.repository+json` accept header. If a team doesn't have permission for the repository, you will receive a `404 Not Found` response status. If the repository is private, you must have at least `read` permission for that repository, and your token must have the `repo` or `admin:org` scope. Otherwise, you will receive a `404 Not Found` response status. > [!NOTE] > You can also specify a team by `org_id` and `team_id` using the route `GET /organizations/{org_id}/team/{team_id}/repos/{owner}/{repo}`.
   *
   * @tags teams
   * @name TeamsCheckPermissionsForRepoInOrg
   * @summary Check team permissions for a repository
   * @request GET:/orgs/{org}/teams/{team_slug}/repos/{owner}/{repo}
   */
  teamsCheckPermissionsForRepoInOrg = (
    org: string,
    teamSlug: string,
    owner: string,
    repo: string,
    params: RequestParams = {},
  ) =>
    this.http.request<TeamsCheckPermissionsForRepoInOrgData, void>({
      path: `/orgs/${org}/teams/${teamSlug}/repos/${owner}/${repo}`,
      method: "GET",
      format: "json",
      ...params,
    });
  /**
   * @description To add a repository to a team or update the team's permission on a repository, the authenticated user must have admin access to the repository, and must be able to see the team. The repository must be owned by the organization, or a direct fork of a repository owned by the organization. You will get a `422 Unprocessable Entity` status if you attempt to add a repository to a team that is not owned by the organization. Note that, if you choose not to pass any parameters, you'll need to set `Content-Length` to zero when calling out to this endpoint. For more information, see "[HTTP method](https://docs.github.com/enterprise-server@3.17/rest/guides/getting-started-with-the-rest-api#http-method)." > [!NOTE] > You can also specify a team by `org_id` and `team_id` using the route `PUT /organizations/{org_id}/team/{team_id}/repos/{owner}/{repo}`. For more information about the permission levels, see "[Repository permission levels for an organization](https://docs.github.com/enterprise-server@3.17/github/setting-up-and-managing-organizations-and-teams/repository-permission-levels-for-an-organization#permission-levels-for-repositories-owned-by-an-organization)".
   *
   * @tags teams
   * @name TeamsAddOrUpdateRepoPermissionsInOrg
   * @summary Add or update team repository permissions
   * @request PUT:/orgs/{org}/teams/{team_slug}/repos/{owner}/{repo}
   */
  teamsAddOrUpdateRepoPermissionsInOrg = (
    org: string,
    teamSlug: string,
    owner: string,
    repo: string,
    data?: TeamsAddOrUpdateRepoPermissionsInOrgPayload,
    params: RequestParams = {},
  ) =>
    this.http.request<TeamsAddOrUpdateRepoPermissionsInOrgData, any>({
      path: `/orgs/${org}/teams/${teamSlug}/repos/${owner}/${repo}`,
      method: "PUT",
      body: data,
      type: ContentType.Json,
      ...params,
    });
  /**
   * @description If the authenticated user is an organization owner or a team maintainer, they can remove any repositories from the team. To remove a repository from a team as an organization member, the authenticated user must have admin access to the repository and must be able to see the team. This does not delete the repository, it just removes it from the team. > [!NOTE] > You can also specify a team by `org_id` and `team_id` using the route `DELETE /organizations/{org_id}/team/{team_id}/repos/{owner}/{repo}`.
   *
   * @tags teams
   * @name TeamsRemoveRepoInOrg
   * @summary Remove a repository from a team
   * @request DELETE:/orgs/{org}/teams/{team_slug}/repos/{owner}/{repo}
   */
  teamsRemoveRepoInOrg = (
    org: string,
    teamSlug: string,
    owner: string,
    repo: string,
    params: RequestParams = {},
  ) =>
    this.http.request<TeamsRemoveRepoInOrgData, any>({
      path: `/orgs/${org}/teams/${teamSlug}/repos/${owner}/${repo}`,
      method: "DELETE",
      ...params,
    });
  /**
   * @description Lists the child teams of the team specified by `{team_slug}`. > [!NOTE] > You can also specify a team by `org_id` and `team_id` using the route `GET /organizations/{org_id}/team/{team_id}/teams`.
   *
   * @tags teams
   * @name TeamsListChildInOrg
   * @summary List child teams
   * @request GET:/orgs/{org}/teams/{team_slug}/teams
   */
  teamsListChildInOrg = (
    { org, teamSlug, ...query }: TeamsListChildInOrgParams,
    params: RequestParams = {},
  ) =>
    this.http.request<TeamsListChildInOrgData, any>({
      path: `/orgs/${org}/teams/${teamSlug}/teams`,
      method: "GET",
      query: query,
      format: "json",
      ...params,
    });
  /**
   * @description > [!WARNING] > **Closing down notice:** The ability to enable or disable a security feature for all eligible repositories in an organization is closing down. Please use [code security configurations](https://docs.github.com/enterprise-server@3.17/rest/code-security/configurations) instead. For more information, see the [changelog](https://github.blog/changelog/2024-07-22-deprecation-of-api-endpoint-to-enable-or-disable-a-security-feature-for-an-organization/). Enables or disables the specified security feature for all eligible repositories in an organization. For more information, see "[Managing security managers in your organization](https://docs.github.com/enterprise-server@3.17/organizations/managing-peoples-access-to-your-organization-with-roles/managing-security-managers-in-your-organization)." The authenticated user must be an organization owner or be member of a team with the security manager role to use this endpoint. OAuth app tokens and personal access tokens (classic) need the `admin:org`, `write:org`, or `repo` scopes to use this endpoint.
   *
   * @tags orgs
   * @name OrgsEnableOrDisableSecurityProductOnAllOrgRepos
   * @summary Enable or disable a security feature for an organization
   * @request POST:/orgs/{org}/{security_product}/{enablement}
   * @deprecated
   */
  orgsEnableOrDisableSecurityProductOnAllOrgRepos = (
    org: string,
    securityProduct:
      | "dependency_graph"
      | "dependabot_alerts"
      | "dependabot_security_updates"
      | "advanced_security"
      | "code_scanning_default_setup"
      | "secret_scanning"
      | "secret_scanning_push_protection",
    enablement: "enable_all" | "disable_all",
    data?: OrgsEnableOrDisableSecurityProductOnAllOrgReposPayload,
    params: RequestParams = {},
  ) =>
    this.http.request<
      OrgsEnableOrDisableSecurityProductOnAllOrgReposData,
      void
    >({
      path: `/orgs/${org}/${securityProduct}/${enablement}`,
      method: "POST",
      body: data,
      type: ContentType.Json,
      ...params,
    });
}
