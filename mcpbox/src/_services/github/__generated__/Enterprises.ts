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
  ActionsCacheUsagePolicyEnterprise,
  ActionsGenerateRunnerJitconfigForEnterprisePayload,
  ActionsGetActionsCacheUsageForEnterpriseData,
  ActionsGetActionsCacheUsagePolicyForEnterpriseData,
  ActionsGetGithubActionsDefaultWorkflowPermissionsEnterpriseData,
  ActionsSetActionsCacheUsagePolicyForEnterpriseData,
  ActionsSetDefaultWorkflowPermissions,
  ActionsSetGithubActionsDefaultWorkflowPermissionsEnterpriseData,
  BasicError,
  BillingGetGithubAdvancedSecurityBillingGheData,
  BillingGetGithubAdvancedSecurityBillingGheParams,
  CodeScanningListAlertsForEnterpriseData,
  CodeScanningListAlertsForEnterpriseParams,
  CodeSecurityAttachEnterpriseConfigurationPayload,
  CodeSecurityCreateConfigurationForEnterpriseData,
  CodeSecurityCreateConfigurationForEnterprisePayload,
  CodeSecurityGetConfigurationsForEnterpriseData,
  CodeSecurityGetConfigurationsForEnterpriseParams,
  CodeSecurityGetDefaultConfigurationsForEnterpriseData,
  CodeSecurityGetRepositoriesForEnterpriseConfigurationData,
  CodeSecurityGetRepositoriesForEnterpriseConfigurationParams,
  CodeSecurityGetSingleConfigurationForEnterpriseData,
  CodeSecuritySetConfigurationAsDefaultForEnterpriseData,
  CodeSecuritySetConfigurationAsDefaultForEnterprisePayload,
  CodeSecurityUpdateEnterpriseConfigurationData,
  CodeSecurityUpdateEnterpriseConfigurationPayload,
  DependabotListAlertsForEnterpriseData,
  DependabotListAlertsForEnterpriseParams,
  EnterpriseAdminAddCustomLabelsToSelfHostedRunnerForEnterprisePayload,
  EnterpriseAdminAddOrgAccessToSelfHostedRunnerGroupInEnterpriseData,
  EnterpriseAdminAddSelfHostedRunnerToGroupForEnterpriseData,
  EnterpriseAdminCreateAuditLogStreamData,
  EnterpriseAdminCreateAuditLogStreamPayload,
  EnterpriseAdminCreateRegistrationTokenForEnterpriseData,
  EnterpriseAdminCreateRemoveTokenForEnterpriseData,
  EnterpriseAdminCreateSelfHostedRunnerGroupForEnterpriseData,
  EnterpriseAdminCreateSelfHostedRunnerGroupForEnterprisePayload,
  EnterpriseAdminDeleteAuditLogStreamData,
  EnterpriseAdminDeleteSelfHostedRunnerFromEnterpriseData,
  EnterpriseAdminDeleteSelfHostedRunnerGroupFromEnterpriseData,
  EnterpriseAdminDisableSelectedOrganizationGithubActionsEnterpriseData,
  EnterpriseAdminEnableSelectedOrganizationGithubActionsEnterpriseData,
  EnterpriseAdminGetAllowedActionsEnterpriseData,
  EnterpriseAdminGetAuditLogData,
  EnterpriseAdminGetAuditLogParams,
  EnterpriseAdminGetAuditLogStreamKeyData,
  EnterpriseAdminGetAuditLogStreamsData,
  EnterpriseAdminGetGithubActionsPermissionsEnterpriseData,
  EnterpriseAdminGetOneAuditLogStreamData,
  EnterpriseAdminGetSelfHostedRunnerForEnterpriseData,
  EnterpriseAdminGetSelfHostedRunnerGroupForEnterpriseData,
  EnterpriseAdminListOrgAccessToSelfHostedRunnerGroupInEnterpriseData,
  EnterpriseAdminListOrgAccessToSelfHostedRunnerGroupInEnterpriseParams,
  EnterpriseAdminListRunnerApplicationsForEnterpriseData,
  EnterpriseAdminListSelectedOrganizationsEnabledGithubActionsEnterpriseData,
  EnterpriseAdminListSelectedOrganizationsEnabledGithubActionsEnterpriseParams,
  EnterpriseAdminListSelfHostedRunnerGroupsForEnterpriseData,
  EnterpriseAdminListSelfHostedRunnerGroupsForEnterpriseParams,
  EnterpriseAdminListSelfHostedRunnersForEnterpriseData,
  EnterpriseAdminListSelfHostedRunnersForEnterpriseParams,
  EnterpriseAdminListSelfHostedRunnersInGroupForEnterpriseData,
  EnterpriseAdminListSelfHostedRunnersInGroupForEnterpriseParams,
  EnterpriseAdminRemoveOrgAccessToSelfHostedRunnerGroupInEnterpriseData,
  EnterpriseAdminRemoveSelfHostedRunnerFromGroupForEnterpriseData,
  EnterpriseAdminSetAllowedActionsEnterpriseData,
  EnterpriseAdminSetCustomLabelsForSelfHostedRunnerForEnterprisePayload,
  EnterpriseAdminSetGithubActionsPermissionsEnterpriseData,
  EnterpriseAdminSetGithubActionsPermissionsEnterprisePayload,
  EnterpriseAdminSetOrgAccessToSelfHostedRunnerGroupInEnterpriseData,
  EnterpriseAdminSetOrgAccessToSelfHostedRunnerGroupInEnterprisePayload,
  EnterpriseAdminSetSelectedOrganizationsEnabledGithubActionsEnterpriseData,
  EnterpriseAdminSetSelectedOrganizationsEnabledGithubActionsEnterprisePayload,
  EnterpriseAdminSetSelfHostedRunnersInGroupForEnterpriseData,
  EnterpriseAdminSetSelfHostedRunnersInGroupForEnterprisePayload,
  EnterpriseAdminUpdateAuditLogStreamData,
  EnterpriseAdminUpdateAuditLogStreamError,
  EnterpriseAdminUpdateAuditLogStreamPayload,
  EnterpriseAdminUpdateSelfHostedRunnerGroupForEnterpriseData,
  EnterpriseAdminUpdateSelfHostedRunnerGroupForEnterprisePayload,
  Runner,
  RunnerLabel,
  SecretScanningGetSecurityAnalysisSettingsForEnterpriseData,
  SecretScanningListAlertsForEnterpriseData,
  SecretScanningListAlertsForEnterpriseParams,
  SecretScanningPatchSecurityAnalysisSettingsForEnterpriseData,
  SecretScanningPatchSecurityAnalysisSettingsForEnterprisePayload,
  SecretScanningPostSecurityProductEnablementForEnterpriseData,
  SelectedActions,
  ValidationErrorSimple,
} from "./data-contracts";
import { ContentType, HttpClient, RequestParams } from "./http-client";

export class Enterprises<SecurityDataType = unknown> {
  http: HttpClient<SecurityDataType>;

  constructor(http: HttpClient<SecurityDataType>) {
    this.http = http;
  }

  /**
   * @description Gets the total GitHub Actions cache usage for an enterprise. The data fetched using this API is refreshed approximately every 5 minutes, so values returned from this endpoint may take at least 5 minutes to get updated. OAuth tokens and personal access tokens (classic) need the `admin:enterprise` scope to use this endpoint.
   *
   * @tags actions
   * @name ActionsGetActionsCacheUsageForEnterprise
   * @summary Get GitHub Actions cache usage for an enterprise
   * @request GET:/enterprises/{enterprise}/actions/cache/usage
   */
  actionsGetActionsCacheUsageForEnterprise = (
    enterprise: string,
    params: RequestParams = {},
  ) =>
    this.http.request<ActionsGetActionsCacheUsageForEnterpriseData, any>({
      path: `/enterprises/${enterprise}/actions/cache/usage`,
      method: "GET",
      format: "json",
      ...params,
    });
  /**
   * @description Gets the GitHub Actions cache usage policy for an enterprise. OAuth tokens and personal access tokens (classic) need the `admin:enterprise` scope to use this endpoint.
   *
   * @tags actions
   * @name ActionsGetActionsCacheUsagePolicyForEnterprise
   * @summary Get GitHub Actions cache usage policy for an enterprise
   * @request GET:/enterprises/{enterprise}/actions/cache/usage-policy
   */
  actionsGetActionsCacheUsagePolicyForEnterprise = (
    enterprise: string,
    params: RequestParams = {},
  ) =>
    this.http.request<ActionsGetActionsCacheUsagePolicyForEnterpriseData, any>({
      path: `/enterprises/${enterprise}/actions/cache/usage-policy`,
      method: "GET",
      format: "json",
      ...params,
    });
  /**
   * @description Sets the GitHub Actions cache usage policy for an enterprise. OAuth app tokens and personal access tokens (classic) need the `admin:enterprise` scope to use this endpoint.
   *
   * @tags actions
   * @name ActionsSetActionsCacheUsagePolicyForEnterprise
   * @summary Set GitHub Actions cache usage policy for an enterprise
   * @request PATCH:/enterprises/{enterprise}/actions/cache/usage-policy
   */
  actionsSetActionsCacheUsagePolicyForEnterprise = (
    enterprise: string,
    data: ActionsCacheUsagePolicyEnterprise,
    params: RequestParams = {},
  ) =>
    this.http.request<ActionsSetActionsCacheUsagePolicyForEnterpriseData, any>({
      path: `/enterprises/${enterprise}/actions/cache/usage-policy`,
      method: "PATCH",
      body: data,
      type: ContentType.Json,
      ...params,
    });
  /**
   * @description Gets the GitHub Actions permissions policy for organizations and allowed actions in an enterprise. OAuth app tokens and personal access tokens (classic) need the `admin:enterprise` scope to use this endpoint.
   *
   * @tags enterprise-admin
   * @name EnterpriseAdminGetGithubActionsPermissionsEnterprise
   * @summary Get GitHub Actions permissions for an enterprise
   * @request GET:/enterprises/{enterprise}/actions/permissions
   */
  enterpriseAdminGetGithubActionsPermissionsEnterprise = (
    enterprise: string,
    params: RequestParams = {},
  ) =>
    this.http.request<
      EnterpriseAdminGetGithubActionsPermissionsEnterpriseData,
      any
    >({
      path: `/enterprises/${enterprise}/actions/permissions`,
      method: "GET",
      format: "json",
      ...params,
    });
  /**
   * @description Sets the GitHub Actions permissions policy for organizations and allowed actions in an enterprise. OAuth app tokens and personal access tokens (classic) need the `admin:enterprise` scope to use this endpoint.
   *
   * @tags enterprise-admin
   * @name EnterpriseAdminSetGithubActionsPermissionsEnterprise
   * @summary Set GitHub Actions permissions for an enterprise
   * @request PUT:/enterprises/{enterprise}/actions/permissions
   */
  enterpriseAdminSetGithubActionsPermissionsEnterprise = (
    enterprise: string,
    data: EnterpriseAdminSetGithubActionsPermissionsEnterprisePayload,
    params: RequestParams = {},
  ) =>
    this.http.request<
      EnterpriseAdminSetGithubActionsPermissionsEnterpriseData,
      any
    >({
      path: `/enterprises/${enterprise}/actions/permissions`,
      method: "PUT",
      body: data,
      type: ContentType.Json,
      ...params,
    });
  /**
   * @description Lists the organizations that are selected to have GitHub Actions enabled in an enterprise. To use this endpoint, the enterprise permission policy for `enabled_organizations` must be configured to `selected`. For more information, see "[Set GitHub Actions permissions for an enterprise](#set-github-actions-permissions-for-an-enterprise)." OAuth app tokens and personal access tokens (classic) need the `admin:enterprise` scope to use this endpoint.
   *
   * @tags enterprise-admin
   * @name EnterpriseAdminListSelectedOrganizationsEnabledGithubActionsEnterprise
   * @summary List selected organizations enabled for GitHub Actions in an enterprise
   * @request GET:/enterprises/{enterprise}/actions/permissions/organizations
   */
  enterpriseAdminListSelectedOrganizationsEnabledGithubActionsEnterprise = (
    {
      enterprise,
      ...query
    }: EnterpriseAdminListSelectedOrganizationsEnabledGithubActionsEnterpriseParams,
    params: RequestParams = {},
  ) =>
    this.http.request<
      EnterpriseAdminListSelectedOrganizationsEnabledGithubActionsEnterpriseData,
      any
    >({
      path: `/enterprises/${enterprise}/actions/permissions/organizations`,
      method: "GET",
      query: query,
      format: "json",
      ...params,
    });
  /**
   * @description Replaces the list of selected organizations that are enabled for GitHub Actions in an enterprise. To use this endpoint, the enterprise permission policy for `enabled_organizations` must be configured to `selected`. For more information, see "[Set GitHub Actions permissions for an enterprise](#set-github-actions-permissions-for-an-enterprise)." OAuth app tokens and personal access tokens (classic) need the `admin:enterprise` scope to use this endpoint.
   *
   * @tags enterprise-admin
   * @name EnterpriseAdminSetSelectedOrganizationsEnabledGithubActionsEnterprise
   * @summary Set selected organizations enabled for GitHub Actions in an enterprise
   * @request PUT:/enterprises/{enterprise}/actions/permissions/organizations
   */
  enterpriseAdminSetSelectedOrganizationsEnabledGithubActionsEnterprise = (
    enterprise: string,
    data: EnterpriseAdminSetSelectedOrganizationsEnabledGithubActionsEnterprisePayload,
    params: RequestParams = {},
  ) =>
    this.http.request<
      EnterpriseAdminSetSelectedOrganizationsEnabledGithubActionsEnterpriseData,
      any
    >({
      path: `/enterprises/${enterprise}/actions/permissions/organizations`,
      method: "PUT",
      body: data,
      type: ContentType.Json,
      ...params,
    });
  /**
   * @description Adds an organization to the list of selected organizations that are enabled for GitHub Actions in an enterprise. To use this endpoint, the enterprise permission policy for `enabled_organizations` must be configured to `selected`. For more information, see "[Set GitHub Actions permissions for an enterprise](#set-github-actions-permissions-for-an-enterprise)." OAuth app tokens and personal access tokens (classic) need the `admin:enterprise` scope to use this endpoint.
   *
   * @tags enterprise-admin
   * @name EnterpriseAdminEnableSelectedOrganizationGithubActionsEnterprise
   * @summary Enable a selected organization for GitHub Actions in an enterprise
   * @request PUT:/enterprises/{enterprise}/actions/permissions/organizations/{org_id}
   */
  enterpriseAdminEnableSelectedOrganizationGithubActionsEnterprise = (
    enterprise: string,
    orgId: number,
    params: RequestParams = {},
  ) =>
    this.http.request<
      EnterpriseAdminEnableSelectedOrganizationGithubActionsEnterpriseData,
      any
    >({
      path: `/enterprises/${enterprise}/actions/permissions/organizations/${orgId}`,
      method: "PUT",
      ...params,
    });
  /**
   * @description Removes an organization from the list of selected organizations that are enabled for GitHub Actions in an enterprise. To use this endpoint, the enterprise permission policy for `enabled_organizations` must be configured to `selected`. For more information, see "[Set GitHub Actions permissions for an enterprise](#set-github-actions-permissions-for-an-enterprise)." OAuth app tokens and personal access tokens (classic) need the `admin:enterprise` scope to use this endpoint.
   *
   * @tags enterprise-admin
   * @name EnterpriseAdminDisableSelectedOrganizationGithubActionsEnterprise
   * @summary Disable a selected organization for GitHub Actions in an enterprise
   * @request DELETE:/enterprises/{enterprise}/actions/permissions/organizations/{org_id}
   */
  enterpriseAdminDisableSelectedOrganizationGithubActionsEnterprise = (
    enterprise: string,
    orgId: number,
    params: RequestParams = {},
  ) =>
    this.http.request<
      EnterpriseAdminDisableSelectedOrganizationGithubActionsEnterpriseData,
      any
    >({
      path: `/enterprises/${enterprise}/actions/permissions/organizations/${orgId}`,
      method: "DELETE",
      ...params,
    });
  /**
   * @description Gets the selected actions that are allowed in an enterprise. To use this endpoint, the enterprise permission policy for `allowed_actions` must be configured to `selected`. For more information, see "[Set GitHub Actions permissions for an enterprise](#set-github-actions-permissions-for-an-enterprise)." OAuth app tokens and personal access tokens (classic) need the `admin:enterprise` scope to use this endpoint.
   *
   * @tags enterprise-admin
   * @name EnterpriseAdminGetAllowedActionsEnterprise
   * @summary Get allowed actions for an enterprise
   * @request GET:/enterprises/{enterprise}/actions/permissions/selected-actions
   */
  enterpriseAdminGetAllowedActionsEnterprise = (
    enterprise: string,
    params: RequestParams = {},
  ) =>
    this.http.request<EnterpriseAdminGetAllowedActionsEnterpriseData, any>({
      path: `/enterprises/${enterprise}/actions/permissions/selected-actions`,
      method: "GET",
      format: "json",
      ...params,
    });
  /**
   * @description Sets the actions that are allowed in an enterprise. To use this endpoint, the enterprise permission policy for `allowed_actions` must be configured to `selected`. For more information, see "[Set GitHub Actions permissions for an enterprise](#set-github-actions-permissions-for-an-enterprise)." OAuth app tokens and personal access tokens (classic) need the `admin:enterprise` scope to use this endpoint.
   *
   * @tags enterprise-admin
   * @name EnterpriseAdminSetAllowedActionsEnterprise
   * @summary Set allowed actions for an enterprise
   * @request PUT:/enterprises/{enterprise}/actions/permissions/selected-actions
   */
  enterpriseAdminSetAllowedActionsEnterprise = (
    enterprise: string,
    data: SelectedActions,
    params: RequestParams = {},
  ) =>
    this.http.request<EnterpriseAdminSetAllowedActionsEnterpriseData, any>({
      path: `/enterprises/${enterprise}/actions/permissions/selected-actions`,
      method: "PUT",
      body: data,
      type: ContentType.Json,
      ...params,
    });
  /**
   * @description Gets the default workflow permissions granted to the `GITHUB_TOKEN` when running workflows in an enterprise, as well as whether GitHub Actions can submit approving pull request reviews. For more information, see "[Enforcing a policy for workflow permissions in your enterprise](https://docs.github.com/enterprise-server@3.17/admin/policies/enforcing-policies-for-your-enterprise/enforcing-policies-for-github-actions-in-your-enterprise#enforcing-a-policy-for-workflow-permissions-in-your-enterprise)." OAuth tokens and personal access tokens (classic) need the `admin:enterprise` scope to use this endpoint.
   *
   * @tags actions
   * @name ActionsGetGithubActionsDefaultWorkflowPermissionsEnterprise
   * @summary Get default workflow permissions for an enterprise
   * @request GET:/enterprises/{enterprise}/actions/permissions/workflow
   */
  actionsGetGithubActionsDefaultWorkflowPermissionsEnterprise = (
    enterprise: string,
    params: RequestParams = {},
  ) =>
    this.http.request<
      ActionsGetGithubActionsDefaultWorkflowPermissionsEnterpriseData,
      any
    >({
      path: `/enterprises/${enterprise}/actions/permissions/workflow`,
      method: "GET",
      format: "json",
      ...params,
    });
  /**
   * @description Sets the default workflow permissions granted to the `GITHUB_TOKEN` when running workflows in an enterprise, and sets whether GitHub Actions can submit approving pull request reviews. For more information, see "[Enforcing a policy for workflow permissions in your enterprise](https://docs.github.com/enterprise-server@3.17/admin/policies/enforcing-policies-for-your-enterprise/enforcing-policies-for-github-actions-in-your-enterprise#enforcing-a-policy-for-workflow-permissions-in-your-enterprise)." OAuth app tokens and personal access tokens (classic) need the `admin:enterprise` scope to use this endpoint.
   *
   * @tags actions
   * @name ActionsSetGithubActionsDefaultWorkflowPermissionsEnterprise
   * @summary Set default workflow permissions for an enterprise
   * @request PUT:/enterprises/{enterprise}/actions/permissions/workflow
   */
  actionsSetGithubActionsDefaultWorkflowPermissionsEnterprise = (
    enterprise: string,
    data: ActionsSetDefaultWorkflowPermissions,
    params: RequestParams = {},
  ) =>
    this.http.request<
      ActionsSetGithubActionsDefaultWorkflowPermissionsEnterpriseData,
      any
    >({
      path: `/enterprises/${enterprise}/actions/permissions/workflow`,
      method: "PUT",
      body: data,
      type: ContentType.Json,
      ...params,
    });
  /**
   * @description Lists all self-hosted runner groups for an enterprise. OAuth app tokens and personal access tokens (classic) need the `manage_runners:enterprise` scope to use this endpoint.
   *
   * @tags enterprise-admin
   * @name EnterpriseAdminListSelfHostedRunnerGroupsForEnterprise
   * @summary List self-hosted runner groups for an enterprise
   * @request GET:/enterprises/{enterprise}/actions/runner-groups
   */
  enterpriseAdminListSelfHostedRunnerGroupsForEnterprise = (
    {
      enterprise,
      ...query
    }: EnterpriseAdminListSelfHostedRunnerGroupsForEnterpriseParams,
    params: RequestParams = {},
  ) =>
    this.http.request<
      EnterpriseAdminListSelfHostedRunnerGroupsForEnterpriseData,
      any
    >({
      path: `/enterprises/${enterprise}/actions/runner-groups`,
      method: "GET",
      query: query,
      format: "json",
      ...params,
    });
  /**
   * @description Creates a new self-hosted runner group for an enterprise. OAuth app tokens and personal access tokens (classic) need the `manage_runners:enterprise` scope to use this endpoint.
   *
   * @tags enterprise-admin
   * @name EnterpriseAdminCreateSelfHostedRunnerGroupForEnterprise
   * @summary Create a self-hosted runner group for an enterprise
   * @request POST:/enterprises/{enterprise}/actions/runner-groups
   */
  enterpriseAdminCreateSelfHostedRunnerGroupForEnterprise = (
    enterprise: string,
    data: EnterpriseAdminCreateSelfHostedRunnerGroupForEnterprisePayload,
    params: RequestParams = {},
  ) =>
    this.http.request<
      EnterpriseAdminCreateSelfHostedRunnerGroupForEnterpriseData,
      any
    >({
      path: `/enterprises/${enterprise}/actions/runner-groups`,
      method: "POST",
      body: data,
      type: ContentType.Json,
      format: "json",
      ...params,
    });
  /**
   * @description Gets a specific self-hosted runner group for an enterprise. OAuth app tokens and personal access tokens (classic) need the `manage_runners:enterprise` scope to use this endpoint.
   *
   * @tags enterprise-admin
   * @name EnterpriseAdminGetSelfHostedRunnerGroupForEnterprise
   * @summary Get a self-hosted runner group for an enterprise
   * @request GET:/enterprises/{enterprise}/actions/runner-groups/{runner_group_id}
   */
  enterpriseAdminGetSelfHostedRunnerGroupForEnterprise = (
    enterprise: string,
    runnerGroupId: number,
    params: RequestParams = {},
  ) =>
    this.http.request<
      EnterpriseAdminGetSelfHostedRunnerGroupForEnterpriseData,
      any
    >({
      path: `/enterprises/${enterprise}/actions/runner-groups/${runnerGroupId}`,
      method: "GET",
      format: "json",
      ...params,
    });
  /**
   * @description Updates the `name` and `visibility` of a self-hosted runner group in an enterprise. OAuth app tokens and personal access tokens (classic) need the `manage_runners:enterprise` scope to use this endpoint.
   *
   * @tags enterprise-admin
   * @name EnterpriseAdminUpdateSelfHostedRunnerGroupForEnterprise
   * @summary Update a self-hosted runner group for an enterprise
   * @request PATCH:/enterprises/{enterprise}/actions/runner-groups/{runner_group_id}
   */
  enterpriseAdminUpdateSelfHostedRunnerGroupForEnterprise = (
    enterprise: string,
    runnerGroupId: number,
    data?: EnterpriseAdminUpdateSelfHostedRunnerGroupForEnterprisePayload,
    params: RequestParams = {},
  ) =>
    this.http.request<
      EnterpriseAdminUpdateSelfHostedRunnerGroupForEnterpriseData,
      any
    >({
      path: `/enterprises/${enterprise}/actions/runner-groups/${runnerGroupId}`,
      method: "PATCH",
      body: data,
      type: ContentType.Json,
      format: "json",
      ...params,
    });
  /**
   * @description Deletes a self-hosted runner group for an enterprise. OAuth app tokens and personal access tokens (classic) need the `manage_runners:enterprise` scope to use this endpoint.
   *
   * @tags enterprise-admin
   * @name EnterpriseAdminDeleteSelfHostedRunnerGroupFromEnterprise
   * @summary Delete a self-hosted runner group from an enterprise
   * @request DELETE:/enterprises/{enterprise}/actions/runner-groups/{runner_group_id}
   */
  enterpriseAdminDeleteSelfHostedRunnerGroupFromEnterprise = (
    enterprise: string,
    runnerGroupId: number,
    params: RequestParams = {},
  ) =>
    this.http.request<
      EnterpriseAdminDeleteSelfHostedRunnerGroupFromEnterpriseData,
      any
    >({
      path: `/enterprises/${enterprise}/actions/runner-groups/${runnerGroupId}`,
      method: "DELETE",
      ...params,
    });
  /**
   * @description Lists the organizations with access to a self-hosted runner group. OAuth app tokens and personal access tokens (classic) need the `manage_runners:enterprise` scope to use this endpoint.
   *
   * @tags enterprise-admin
   * @name EnterpriseAdminListOrgAccessToSelfHostedRunnerGroupInEnterprise
   * @summary List organization access to a self-hosted runner group in an enterprise
   * @request GET:/enterprises/{enterprise}/actions/runner-groups/{runner_group_id}/organizations
   */
  enterpriseAdminListOrgAccessToSelfHostedRunnerGroupInEnterprise = (
    {
      enterprise,
      runnerGroupId,
      ...query
    }: EnterpriseAdminListOrgAccessToSelfHostedRunnerGroupInEnterpriseParams,
    params: RequestParams = {},
  ) =>
    this.http.request<
      EnterpriseAdminListOrgAccessToSelfHostedRunnerGroupInEnterpriseData,
      any
    >({
      path: `/enterprises/${enterprise}/actions/runner-groups/${runnerGroupId}/organizations`,
      method: "GET",
      query: query,
      format: "json",
      ...params,
    });
  /**
   * @description Replaces the list of organizations that have access to a self-hosted runner configured in an enterprise. OAuth app tokens and personal access tokens (classic) need the `manage_runners:enterprise` scope to use this endpoint.
   *
   * @tags enterprise-admin
   * @name EnterpriseAdminSetOrgAccessToSelfHostedRunnerGroupInEnterprise
   * @summary Set organization access for a self-hosted runner group in an enterprise
   * @request PUT:/enterprises/{enterprise}/actions/runner-groups/{runner_group_id}/organizations
   */
  enterpriseAdminSetOrgAccessToSelfHostedRunnerGroupInEnterprise = (
    enterprise: string,
    runnerGroupId: number,
    data: EnterpriseAdminSetOrgAccessToSelfHostedRunnerGroupInEnterprisePayload,
    params: RequestParams = {},
  ) =>
    this.http.request<
      EnterpriseAdminSetOrgAccessToSelfHostedRunnerGroupInEnterpriseData,
      any
    >({
      path: `/enterprises/${enterprise}/actions/runner-groups/${runnerGroupId}/organizations`,
      method: "PUT",
      body: data,
      type: ContentType.Json,
      ...params,
    });
  /**
   * @description Adds an organization to the list of selected organizations that can access a self-hosted runner group. The runner group must have `visibility` set to `selected`. For more information, see "[Create a self-hosted runner group for an enterprise](#create-a-self-hosted-runner-group-for-an-enterprise)." OAuth app tokens and personal access tokens (classic) need the `manage_runners:enterprise` scope to use this endpoint.
   *
   * @tags enterprise-admin
   * @name EnterpriseAdminAddOrgAccessToSelfHostedRunnerGroupInEnterprise
   * @summary Add organization access to a self-hosted runner group in an enterprise
   * @request PUT:/enterprises/{enterprise}/actions/runner-groups/{runner_group_id}/organizations/{org_id}
   */
  enterpriseAdminAddOrgAccessToSelfHostedRunnerGroupInEnterprise = (
    enterprise: string,
    runnerGroupId: number,
    orgId: number,
    params: RequestParams = {},
  ) =>
    this.http.request<
      EnterpriseAdminAddOrgAccessToSelfHostedRunnerGroupInEnterpriseData,
      any
    >({
      path: `/enterprises/${enterprise}/actions/runner-groups/${runnerGroupId}/organizations/${orgId}`,
      method: "PUT",
      ...params,
    });
  /**
   * @description Removes an organization from the list of selected organizations that can access a self-hosted runner group. The runner group must have `visibility` set to `selected`. For more information, see "[Create a self-hosted runner group for an enterprise](#create-a-self-hosted-runner-group-for-an-enterprise)." OAuth app tokens and personal access tokens (classic) need the `manage_runners:enterprise` scope to use this endpoint.
   *
   * @tags enterprise-admin
   * @name EnterpriseAdminRemoveOrgAccessToSelfHostedRunnerGroupInEnterprise
   * @summary Remove organization access to a self-hosted runner group in an enterprise
   * @request DELETE:/enterprises/{enterprise}/actions/runner-groups/{runner_group_id}/organizations/{org_id}
   */
  enterpriseAdminRemoveOrgAccessToSelfHostedRunnerGroupInEnterprise = (
    enterprise: string,
    runnerGroupId: number,
    orgId: number,
    params: RequestParams = {},
  ) =>
    this.http.request<
      EnterpriseAdminRemoveOrgAccessToSelfHostedRunnerGroupInEnterpriseData,
      any
    >({
      path: `/enterprises/${enterprise}/actions/runner-groups/${runnerGroupId}/organizations/${orgId}`,
      method: "DELETE",
      ...params,
    });
  /**
   * @description Lists the self-hosted runners that are in a specific enterprise group. OAuth app tokens and personal access tokens (classic) need the `manage_runners:enterprise` scope to use this endpoint.
   *
   * @tags enterprise-admin
   * @name EnterpriseAdminListSelfHostedRunnersInGroupForEnterprise
   * @summary List self-hosted runners in a group for an enterprise
   * @request GET:/enterprises/{enterprise}/actions/runner-groups/{runner_group_id}/runners
   */
  enterpriseAdminListSelfHostedRunnersInGroupForEnterprise = (
    {
      enterprise,
      runnerGroupId,
      ...query
    }: EnterpriseAdminListSelfHostedRunnersInGroupForEnterpriseParams,
    params: RequestParams = {},
  ) =>
    this.http.request<
      EnterpriseAdminListSelfHostedRunnersInGroupForEnterpriseData,
      any
    >({
      path: `/enterprises/${enterprise}/actions/runner-groups/${runnerGroupId}/runners`,
      method: "GET",
      query: query,
      format: "json",
      ...params,
    });
  /**
   * @description Replaces the list of self-hosted runners that are part of an enterprise runner group. OAuth app tokens and personal access tokens (classic) need the `manage_runners:enterprise` scope to use this endpoint.
   *
   * @tags enterprise-admin
   * @name EnterpriseAdminSetSelfHostedRunnersInGroupForEnterprise
   * @summary Set self-hosted runners in a group for an enterprise
   * @request PUT:/enterprises/{enterprise}/actions/runner-groups/{runner_group_id}/runners
   */
  enterpriseAdminSetSelfHostedRunnersInGroupForEnterprise = (
    enterprise: string,
    runnerGroupId: number,
    data: EnterpriseAdminSetSelfHostedRunnersInGroupForEnterprisePayload,
    params: RequestParams = {},
  ) =>
    this.http.request<
      EnterpriseAdminSetSelfHostedRunnersInGroupForEnterpriseData,
      any
    >({
      path: `/enterprises/${enterprise}/actions/runner-groups/${runnerGroupId}/runners`,
      method: "PUT",
      body: data,
      type: ContentType.Json,
      ...params,
    });
  /**
   * @description Adds a self-hosted runner to a runner group configured in an enterprise. OAuth app tokens and personal access tokens (classic) need the `manage_runners:enterprise` scope to use this endpoint.
   *
   * @tags enterprise-admin
   * @name EnterpriseAdminAddSelfHostedRunnerToGroupForEnterprise
   * @summary Add a self-hosted runner to a group for an enterprise
   * @request PUT:/enterprises/{enterprise}/actions/runner-groups/{runner_group_id}/runners/{runner_id}
   */
  enterpriseAdminAddSelfHostedRunnerToGroupForEnterprise = (
    enterprise: string,
    runnerGroupId: number,
    runnerId: number,
    params: RequestParams = {},
  ) =>
    this.http.request<
      EnterpriseAdminAddSelfHostedRunnerToGroupForEnterpriseData,
      any
    >({
      path: `/enterprises/${enterprise}/actions/runner-groups/${runnerGroupId}/runners/${runnerId}`,
      method: "PUT",
      ...params,
    });
  /**
   * @description Removes a self-hosted runner from a group configured in an enterprise. The runner is then returned to the default group. OAuth app tokens and personal access tokens (classic) need the `manage_runners:enterprise` scope to use this endpoint.
   *
   * @tags enterprise-admin
   * @name EnterpriseAdminRemoveSelfHostedRunnerFromGroupForEnterprise
   * @summary Remove a self-hosted runner from a group for an enterprise
   * @request DELETE:/enterprises/{enterprise}/actions/runner-groups/{runner_group_id}/runners/{runner_id}
   */
  enterpriseAdminRemoveSelfHostedRunnerFromGroupForEnterprise = (
    enterprise: string,
    runnerGroupId: number,
    runnerId: number,
    params: RequestParams = {},
  ) =>
    this.http.request<
      EnterpriseAdminRemoveSelfHostedRunnerFromGroupForEnterpriseData,
      any
    >({
      path: `/enterprises/${enterprise}/actions/runner-groups/${runnerGroupId}/runners/${runnerId}`,
      method: "DELETE",
      ...params,
    });
  /**
   * @description Lists all self-hosted runners configured for an enterprise. OAuth app tokens and personal access tokens (classic) need the `manage_runners:enterprise` scope to use this endpoint.
   *
   * @tags enterprise-admin
   * @name EnterpriseAdminListSelfHostedRunnersForEnterprise
   * @summary List self-hosted runners for an enterprise
   * @request GET:/enterprises/{enterprise}/actions/runners
   */
  enterpriseAdminListSelfHostedRunnersForEnterprise = (
    {
      enterprise,
      ...query
    }: EnterpriseAdminListSelfHostedRunnersForEnterpriseParams,
    params: RequestParams = {},
  ) =>
    this.http.request<
      EnterpriseAdminListSelfHostedRunnersForEnterpriseData,
      any
    >({
      path: `/enterprises/${enterprise}/actions/runners`,
      method: "GET",
      query: query,
      format: "json",
      ...params,
    });
  /**
   * @description Lists binaries for the runner application that you can download and run. OAuth app tokens and personal access tokens (classic) need the `manage_runners:enterprise` scope to use this endpoint.
   *
   * @tags enterprise-admin
   * @name EnterpriseAdminListRunnerApplicationsForEnterprise
   * @summary List runner applications for an enterprise
   * @request GET:/enterprises/{enterprise}/actions/runners/downloads
   */
  enterpriseAdminListRunnerApplicationsForEnterprise = (
    enterprise: string,
    params: RequestParams = {},
  ) =>
    this.http.request<
      EnterpriseAdminListRunnerApplicationsForEnterpriseData,
      any
    >({
      path: `/enterprises/${enterprise}/actions/runners/downloads`,
      method: "GET",
      format: "json",
      ...params,
    });
  /**
   * @description Generates a configuration that can be passed to the runner application at startup. OAuth tokens and personal access tokens (classic) need the `manage_runners:enterprise` scope to use this endpoint.
   *
   * @tags actions
   * @name ActionsGenerateRunnerJitconfigForEnterprise
   * @summary Create configuration for a just-in-time runner for an Enterprise
   * @request POST:/enterprises/{enterprise}/actions/runners/generate-jitconfig
   */
  actionsGenerateRunnerJitconfigForEnterprise = (
    enterprise: string,
    data: ActionsGenerateRunnerJitconfigForEnterprisePayload,
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
      path: `/enterprises/${enterprise}/actions/runners/generate-jitconfig`,
      method: "POST",
      body: data,
      type: ContentType.Json,
      ...params,
    });
  /**
   * @description Returns a token that you can pass to the `config` script. The token expires after one hour. Example using registration token: Configure your self-hosted runner, replacing `TOKEN` with the registration token provided by this endpoint. ``` ./config.sh --url https://github.com/enterprises/octo-enterprise --token TOKEN ``` OAuth app tokens and personal access tokens (classic) need the `manage_runners:enterprise` scope to use this endpoint.
   *
   * @tags enterprise-admin
   * @name EnterpriseAdminCreateRegistrationTokenForEnterprise
   * @summary Create a registration token for an enterprise
   * @request POST:/enterprises/{enterprise}/actions/runners/registration-token
   */
  enterpriseAdminCreateRegistrationTokenForEnterprise = (
    enterprise: string,
    params: RequestParams = {},
  ) =>
    this.http.request<
      EnterpriseAdminCreateRegistrationTokenForEnterpriseData,
      any
    >({
      path: `/enterprises/${enterprise}/actions/runners/registration-token`,
      method: "POST",
      format: "json",
      ...params,
    });
  /**
   * @description Returns a token that you can pass to the `config` script to remove a self-hosted runner from an enterprise. The token expires after one hour. Example using remove token: To remove your self-hosted runner from an enterprise, replace `TOKEN` with the remove token provided by this endpoint. ``` ./config.sh remove --token TOKEN ``` OAuth app tokens and personal access tokens (classic) need the `manage_runners:enterprise` scope to use this endpoint.
   *
   * @tags enterprise-admin
   * @name EnterpriseAdminCreateRemoveTokenForEnterprise
   * @summary Create a remove token for an enterprise
   * @request POST:/enterprises/{enterprise}/actions/runners/remove-token
   */
  enterpriseAdminCreateRemoveTokenForEnterprise = (
    enterprise: string,
    params: RequestParams = {},
  ) =>
    this.http.request<EnterpriseAdminCreateRemoveTokenForEnterpriseData, any>({
      path: `/enterprises/${enterprise}/actions/runners/remove-token`,
      method: "POST",
      format: "json",
      ...params,
    });
  /**
   * @description Gets a specific self-hosted runner configured in an enterprise. OAuth app tokens and personal access tokens (classic) need the `manage_runners:enterprise` scope to use this endpoint.
   *
   * @tags enterprise-admin
   * @name EnterpriseAdminGetSelfHostedRunnerForEnterprise
   * @summary Get a self-hosted runner for an enterprise
   * @request GET:/enterprises/{enterprise}/actions/runners/{runner_id}
   */
  enterpriseAdminGetSelfHostedRunnerForEnterprise = (
    enterprise: string,
    runnerId: number,
    params: RequestParams = {},
  ) =>
    this.http.request<EnterpriseAdminGetSelfHostedRunnerForEnterpriseData, any>(
      {
        path: `/enterprises/${enterprise}/actions/runners/${runnerId}`,
        method: "GET",
        format: "json",
        ...params,
      },
    );
  /**
   * @description Forces the removal of a self-hosted runner from an enterprise. You can use this endpoint to completely remove the runner when the machine you were using no longer exists. OAuth app tokens and personal access tokens (classic) need the `manage_runners:enterprise` scope to use this endpoint.
   *
   * @tags enterprise-admin
   * @name EnterpriseAdminDeleteSelfHostedRunnerFromEnterprise
   * @summary Delete a self-hosted runner from an enterprise
   * @request DELETE:/enterprises/{enterprise}/actions/runners/{runner_id}
   */
  enterpriseAdminDeleteSelfHostedRunnerFromEnterprise = (
    enterprise: string,
    runnerId: number,
    params: RequestParams = {},
  ) =>
    this.http.request<
      EnterpriseAdminDeleteSelfHostedRunnerFromEnterpriseData,
      ValidationErrorSimple
    >({
      path: `/enterprises/${enterprise}/actions/runners/${runnerId}`,
      method: "DELETE",
      ...params,
    });
  /**
   * @description Lists all labels for a self-hosted runner configured in an enterprise. OAuth app tokens and personal access tokens (classic) need the `manage_runners:enterprise` scope to use this endpoint.
   *
   * @tags enterprise-admin
   * @name EnterpriseAdminListLabelsForSelfHostedRunnerForEnterprise
   * @summary List labels for a self-hosted runner for an enterprise
   * @request GET:/enterprises/{enterprise}/actions/runners/{runner_id}/labels
   */
  enterpriseAdminListLabelsForSelfHostedRunnerForEnterprise = (
    enterprise: string,
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
      path: `/enterprises/${enterprise}/actions/runners/${runnerId}/labels`,
      method: "GET",
      ...params,
    });
  /**
   * @description Add custom labels to a self-hosted runner configured in an enterprise. OAuth app tokens and personal access tokens (classic) need the `manage_runners:enterprise` scope to use this endpoint.
   *
   * @tags enterprise-admin
   * @name EnterpriseAdminAddCustomLabelsToSelfHostedRunnerForEnterprise
   * @summary Add custom labels to a self-hosted runner for an enterprise
   * @request POST:/enterprises/{enterprise}/actions/runners/{runner_id}/labels
   */
  enterpriseAdminAddCustomLabelsToSelfHostedRunnerForEnterprise = (
    enterprise: string,
    runnerId: number,
    data: EnterpriseAdminAddCustomLabelsToSelfHostedRunnerForEnterprisePayload,
    params: RequestParams = {},
  ) =>
    this.http.request<
      {
        total_count: number;
        labels: RunnerLabel[];
      },
      BasicError | ValidationErrorSimple
    >({
      path: `/enterprises/${enterprise}/actions/runners/${runnerId}/labels`,
      method: "POST",
      body: data,
      type: ContentType.Json,
      ...params,
    });
  /**
   * @description Remove all previous custom labels and set the new custom labels for a specific self-hosted runner configured in an enterprise. OAuth app tokens and personal access tokens (classic) need the `manage_runners:enterprise` scope to use this endpoint.
   *
   * @tags enterprise-admin
   * @name EnterpriseAdminSetCustomLabelsForSelfHostedRunnerForEnterprise
   * @summary Set custom labels for a self-hosted runner for an enterprise
   * @request PUT:/enterprises/{enterprise}/actions/runners/{runner_id}/labels
   */
  enterpriseAdminSetCustomLabelsForSelfHostedRunnerForEnterprise = (
    enterprise: string,
    runnerId: number,
    data: EnterpriseAdminSetCustomLabelsForSelfHostedRunnerForEnterprisePayload,
    params: RequestParams = {},
  ) =>
    this.http.request<
      {
        total_count: number;
        labels: RunnerLabel[];
      },
      BasicError | ValidationErrorSimple
    >({
      path: `/enterprises/${enterprise}/actions/runners/${runnerId}/labels`,
      method: "PUT",
      body: data,
      type: ContentType.Json,
      ...params,
    });
  /**
   * @description Remove all custom labels from a self-hosted runner configured in an enterprise. Returns the remaining read-only labels from the runner. OAuth app tokens and personal access tokens (classic) need the `manage_runners:enterprise` scope to use this endpoint.
   *
   * @tags enterprise-admin
   * @name EnterpriseAdminRemoveAllCustomLabelsFromSelfHostedRunnerForEnterprise
   * @summary Remove all custom labels from a self-hosted runner for an enterprise
   * @request DELETE:/enterprises/{enterprise}/actions/runners/{runner_id}/labels
   */
  enterpriseAdminRemoveAllCustomLabelsFromSelfHostedRunnerForEnterprise = (
    enterprise: string,
    runnerId: number,
    params: RequestParams = {},
  ) =>
    this.http.request<
      {
        total_count: number;
        labels: RunnerLabel[];
      },
      BasicError | ValidationErrorSimple
    >({
      path: `/enterprises/${enterprise}/actions/runners/${runnerId}/labels`,
      method: "DELETE",
      ...params,
    });
  /**
   * @description Remove a custom label from a self-hosted runner configured in an enterprise. Returns the remaining labels from the runner. This endpoint returns a `404 Not Found` status if the custom label is not present on the runner. OAuth app tokens and personal access tokens (classic) need the `manage_runners:enterprise` scope to use this endpoint.
   *
   * @tags enterprise-admin
   * @name EnterpriseAdminRemoveCustomLabelFromSelfHostedRunnerForEnterprise
   * @summary Remove a custom label from a self-hosted runner for an enterprise
   * @request DELETE:/enterprises/{enterprise}/actions/runners/{runner_id}/labels/{name}
   */
  enterpriseAdminRemoveCustomLabelFromSelfHostedRunnerForEnterprise = (
    enterprise: string,
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
      path: `/enterprises/${enterprise}/actions/runners/${runnerId}/labels/${name}`,
      method: "DELETE",
      ...params,
    });
  /**
   * @description Gets the audit log for an enterprise. The authenticated user must be an enterprise admin to use this endpoint. OAuth app tokens and personal access tokens (classic) need the `admin:enterprise` scope to use this endpoint.
   *
   * @tags enterprise-admin
   * @name EnterpriseAdminGetAuditLog
   * @summary Get the audit log for an enterprise
   * @request GET:/enterprises/{enterprise}/audit-log
   */
  enterpriseAdminGetAuditLog = (
    { enterprise, ...query }: EnterpriseAdminGetAuditLogParams,
    params: RequestParams = {},
  ) =>
    this.http.request<EnterpriseAdminGetAuditLogData, any>({
      path: `/enterprises/${enterprise}/audit-log`,
      method: "GET",
      query: query,
      format: "json",
      ...params,
    });
  /**
   * @description Retrieves the audit log streaming public key for encrypting secrets. When using this endpoint, you must encrypt the credentials following the same encryption steps as outlined in the guide on encrypting secrets. See "[Encrypting secrets for the REST API](/rest/guides/encrypting-secrets-for-the-rest-api)."
   *
   * @tags enterprise-admin
   * @name EnterpriseAdminGetAuditLogStreamKey
   * @summary Get the audit log stream key for encrypting secrets
   * @request GET:/enterprises/{enterprise}/audit-log/stream-key
   */
  enterpriseAdminGetAuditLogStreamKey = (
    enterprise: string,
    params: RequestParams = {},
  ) =>
    this.http.request<EnterpriseAdminGetAuditLogStreamKeyData, any>({
      path: `/enterprises/${enterprise}/audit-log/stream-key`,
      method: "GET",
      format: "json",
      ...params,
    });
  /**
   * @description Lists the configured audit log streaming configurations for an enterprise. This only lists configured streams for supported providers. When using this endpoint, you must encrypt the credentials following the same encryption steps as outlined in the guide on encrypting secrets. See "[Encrypting secrets for the REST API](/rest/guides/encrypting-secrets-for-the-rest-api)."
   *
   * @tags enterprise-admin
   * @name EnterpriseAdminGetAuditLogStreams
   * @summary List audit log stream configurations for an enterprise
   * @request GET:/enterprises/{enterprise}/audit-log/streams
   */
  enterpriseAdminGetAuditLogStreams = (
    enterprise: string,
    params: RequestParams = {},
  ) =>
    this.http.request<EnterpriseAdminGetAuditLogStreamsData, any>({
      path: `/enterprises/${enterprise}/audit-log/streams`,
      method: "GET",
      format: "json",
      ...params,
    });
  /**
   * @description Creates an audit log streaming configuration for any of the supported streaming endpoints: Azure Blob Storage, Azure Event Hubs, Amazon S3, Splunk, Google Cloud Storage, Datadog. When using this endpoint, you must encrypt the credentials following the same encryption steps as outlined in the guide on encrypting secrets. See "[Encrypting secrets for the REST API](/rest/guides/encrypting-secrets-for-the-rest-api)."
   *
   * @tags enterprise-admin
   * @name EnterpriseAdminCreateAuditLogStream
   * @summary Create an audit log streaming configuration for an enterprise
   * @request POST:/enterprises/{enterprise}/audit-log/streams
   */
  enterpriseAdminCreateAuditLogStream = (
    enterprise: string,
    data: EnterpriseAdminCreateAuditLogStreamPayload,
    params: RequestParams = {},
  ) =>
    this.http.request<EnterpriseAdminCreateAuditLogStreamData, any>({
      path: `/enterprises/${enterprise}/audit-log/streams`,
      method: "POST",
      body: data,
      type: ContentType.Json,
      format: "json",
      ...params,
    });
  /**
   * @description Lists one audit log stream configuration via a stream ID. When using this endpoint, you must encrypt the credentials following the same encryption steps as outlined in the guide on encrypting secrets. See "[Encrypting secrets for the REST API](/rest/guides/encrypting-secrets-for-the-rest-api)."
   *
   * @tags enterprise-admin
   * @name EnterpriseAdminGetOneAuditLogStream
   * @summary List one audit log streaming configuration via a stream ID
   * @request GET:/enterprises/{enterprise}/audit-log/streams/{stream_id}
   */
  enterpriseAdminGetOneAuditLogStream = (
    enterprise: string,
    streamId: number,
    params: RequestParams = {},
  ) =>
    this.http.request<EnterpriseAdminGetOneAuditLogStreamData, any>({
      path: `/enterprises/${enterprise}/audit-log/streams/${streamId}`,
      method: "GET",
      format: "json",
      ...params,
    });
  /**
   * @description Updates an existing audit log stream configuration for an enterprise. When using this endpoint, you must encrypt the credentials following the same encryption steps as outlined in the guide on encrypting secrets. See "[Encrypting secrets for the REST API](/rest/guides/encrypting-secrets-for-the-rest-api)."
   *
   * @tags enterprise-admin
   * @name EnterpriseAdminUpdateAuditLogStream
   * @summary Update an existing audit log stream configuration
   * @request PUT:/enterprises/{enterprise}/audit-log/streams/{stream_id}
   */
  enterpriseAdminUpdateAuditLogStream = (
    enterprise: string,
    streamId: number,
    data: EnterpriseAdminUpdateAuditLogStreamPayload,
    params: RequestParams = {},
  ) =>
    this.http.request<
      EnterpriseAdminUpdateAuditLogStreamData,
      EnterpriseAdminUpdateAuditLogStreamError
    >({
      path: `/enterprises/${enterprise}/audit-log/streams/${streamId}`,
      method: "PUT",
      body: data,
      type: ContentType.Json,
      format: "json",
      ...params,
    });
  /**
   * @description Deletes an existing audit log stream configuration for an enterprise. When using this endpoint, you must encrypt the credentials following the same encryption steps as outlined in the guide on encrypting secrets. See "[Encrypting secrets for the REST API](/rest/guides/encrypting-secrets-for-the-rest-api)."
   *
   * @tags enterprise-admin
   * @name EnterpriseAdminDeleteAuditLogStream
   * @summary Delete an audit log streaming configuration for an enterprise
   * @request DELETE:/enterprises/{enterprise}/audit-log/streams/{stream_id}
   */
  enterpriseAdminDeleteAuditLogStream = (
    enterprise: string,
    streamId: number,
    params: RequestParams = {},
  ) =>
    this.http.request<EnterpriseAdminDeleteAuditLogStreamData, any>({
      path: `/enterprises/${enterprise}/audit-log/streams/${streamId}`,
      method: "DELETE",
      ...params,
    });
  /**
   * @description Lists code scanning alerts for the default branch for all eligible repositories in an enterprise. Eligible repositories are repositories that are owned by organizations that you own or for which you are a security manager. For more information, see "[Managing security managers in your organization](https://docs.github.com/enterprise-server@3.17/organizations/managing-peoples-access-to-your-organization-with-roles/managing-security-managers-in-your-organization)." The authenticated user must be a member of the enterprise to use this endpoint. OAuth app tokens and personal access tokens (classic) need the `security_events` or `repo` scope to use this endpoint.
   *
   * @tags code-scanning
   * @name CodeScanningListAlertsForEnterprise
   * @summary List code scanning alerts for an enterprise
   * @request GET:/enterprises/{enterprise}/code-scanning/alerts
   */
  codeScanningListAlertsForEnterprise = (
    { enterprise, ...query }: CodeScanningListAlertsForEnterpriseParams,
    params: RequestParams = {},
  ) =>
    this.http.request<
      CodeScanningListAlertsForEnterpriseData,
      | BasicError
      | {
          code?: string;
          message?: string;
          documentation_url?: string;
        }
    >({
      path: `/enterprises/${enterprise}/code-scanning/alerts`,
      method: "GET",
      query: query,
      format: "json",
      ...params,
    });
  /**
   * @description Lists all code security configurations available in an enterprise. The authenticated user must be an administrator of the enterprise in order to use this endpoint. OAuth app tokens and personal access tokens (classic) need the `read:enterprise` scope to use this endpoint. > [!NOTE] > The enablement status will only be returned for installed security products.
   *
   * @tags code-security
   * @name CodeSecurityGetConfigurationsForEnterprise
   * @summary Get code security configurations for an enterprise
   * @request GET:/enterprises/{enterprise}/code-security/configurations
   */
  codeSecurityGetConfigurationsForEnterprise = (
    { enterprise, ...query }: CodeSecurityGetConfigurationsForEnterpriseParams,
    params: RequestParams = {},
  ) =>
    this.http.request<
      CodeSecurityGetConfigurationsForEnterpriseData,
      BasicError
    >({
      path: `/enterprises/${enterprise}/code-security/configurations`,
      method: "GET",
      query: query,
      format: "json",
      ...params,
    });
  /**
   * @description Creates a code security configuration in an enterprise. The authenticated user must be an administrator of the enterprise in order to use this endpoint. OAuth app tokens and personal access tokens (classic) need the `admin:enterprise` scope to use this endpoint. > [!NOTE] > Only installed security products may be specified in the request body. Specifying an uninstalled security product will result in a validation error.
   *
   * @tags code-security
   * @name CodeSecurityCreateConfigurationForEnterprise
   * @summary Create a code security configuration for an enterprise
   * @request POST:/enterprises/{enterprise}/code-security/configurations
   */
  codeSecurityCreateConfigurationForEnterprise = (
    enterprise: string,
    data: CodeSecurityCreateConfigurationForEnterprisePayload,
    params: RequestParams = {},
  ) =>
    this.http.request<
      CodeSecurityCreateConfigurationForEnterpriseData,
      BasicError
    >({
      path: `/enterprises/${enterprise}/code-security/configurations`,
      method: "POST",
      body: data,
      type: ContentType.Json,
      format: "json",
      ...params,
    });
  /**
   * @description Lists the default code security configurations for an enterprise. The authenticated user must be an administrator of the enterprise in order to use this endpoint. OAuth app tokens and personal access tokens (classic) need the `read:enterprise` scope to use this endpoint.
   *
   * @tags code-security
   * @name CodeSecurityGetDefaultConfigurationsForEnterprise
   * @summary Get default code security configurations for an enterprise
   * @request GET:/enterprises/{enterprise}/code-security/configurations/defaults
   */
  codeSecurityGetDefaultConfigurationsForEnterprise = (
    enterprise: string,
    params: RequestParams = {},
  ) =>
    this.http.request<
      CodeSecurityGetDefaultConfigurationsForEnterpriseData,
      any
    >({
      path: `/enterprises/${enterprise}/code-security/configurations/defaults`,
      method: "GET",
      format: "json",
      ...params,
    });
  /**
   * @description Gets a code security configuration available in an enterprise. The authenticated user must be an administrator of the enterprise in order to use this endpoint. OAuth app tokens and personal access tokens (classic) need the `read:enterprise` scope to use this endpoint. > [!NOTE] > Any security products that are not installed will report an `unset` status.
   *
   * @tags code-security
   * @name CodeSecurityGetSingleConfigurationForEnterprise
   * @summary Retrieve a code security configuration of an enterprise
   * @request GET:/enterprises/{enterprise}/code-security/configurations/{configuration_id}
   */
  codeSecurityGetSingleConfigurationForEnterprise = (
    enterprise: string,
    configurationId: number,
    params: RequestParams = {},
  ) =>
    this.http.request<
      CodeSecurityGetSingleConfigurationForEnterpriseData,
      BasicError
    >({
      path: `/enterprises/${enterprise}/code-security/configurations/${configurationId}`,
      method: "GET",
      format: "json",
      ...params,
    });
  /**
   * @description Updates a code security configuration in an enterprise. The authenticated user must be an administrator of the enterprise in order to use this endpoint. OAuth app tokens and personal access tokens (classic) need the `admin:enterprise` scope to use this endpoint. > [!NOTE] > The enablement status will only be returned for installed security products.
   *
   * @tags code-security
   * @name CodeSecurityUpdateEnterpriseConfiguration
   * @summary Update a custom code security configuration for an enterprise
   * @request PATCH:/enterprises/{enterprise}/code-security/configurations/{configuration_id}
   */
  codeSecurityUpdateEnterpriseConfiguration = (
    enterprise: string,
    configurationId: number,
    data: CodeSecurityUpdateEnterpriseConfigurationPayload,
    params: RequestParams = {},
  ) =>
    this.http.request<
      CodeSecurityUpdateEnterpriseConfigurationData,
      BasicError
    >({
      path: `/enterprises/${enterprise}/code-security/configurations/${configurationId}`,
      method: "PATCH",
      body: data,
      type: ContentType.Json,
      format: "json",
      ...params,
    });
  /**
   * @description Deletes a code security configuration from an enterprise. Repositories attached to the configuration will retain their settings but will no longer be associated with the configuration. The authenticated user must be an administrator for the enterprise to use this endpoint. OAuth app tokens and personal access tokens (classic) need the `admin:enterprise` scope to use this endpoint.
   *
   * @tags code-security
   * @name CodeSecurityDeleteConfigurationForEnterprise
   * @summary Delete a code security configuration for an enterprise
   * @request DELETE:/enterprises/{enterprise}/code-security/configurations/{configuration_id}
   */
  codeSecurityDeleteConfigurationForEnterprise = (
    enterprise: string,
    configurationId: number,
    params: RequestParams = {},
  ) =>
    this.http.request<any, BasicError>({
      path: `/enterprises/${enterprise}/code-security/configurations/${configurationId}`,
      method: "DELETE",
      ...params,
    });
  /**
   * @description Attaches an enterprise code security configuration to repositories. If the repositories specified are already attached to a configuration, they will be re-attached to the provided configuration. If insufficient GHAS licenses are available to attach the configuration to a repository, only free features will be enabled. The authenticated user must be an administrator for the enterprise to use this endpoint. OAuth app tokens and personal access tokens (classic) need the `admin:enterprise` scope to use this endpoint.
   *
   * @tags code-security
   * @name CodeSecurityAttachEnterpriseConfiguration
   * @summary Attach an enterprise configuration to repositories
   * @request POST:/enterprises/{enterprise}/code-security/configurations/{configuration_id}/attach
   */
  codeSecurityAttachEnterpriseConfiguration = (
    enterprise: string,
    configurationId: number,
    data: CodeSecurityAttachEnterpriseConfigurationPayload,
    params: RequestParams = {},
  ) =>
    this.http.request<object, BasicError>({
      path: `/enterprises/${enterprise}/code-security/configurations/${configurationId}/attach`,
      method: "POST",
      body: data,
      type: ContentType.Json,
      ...params,
    });
  /**
   * @description Sets a code security configuration as a default to be applied to new repositories in your enterprise. This configuration will be applied by default to the matching repository type when created, but only for organizations within the enterprise that do not already have a default code security configuration set. The authenticated user must be an administrator for the enterprise to use this endpoint. OAuth app tokens and personal access tokens (classic) need the `admin:enterprise` scope to use this endpoint.
   *
   * @tags code-security
   * @name CodeSecuritySetConfigurationAsDefaultForEnterprise
   * @summary Set a code security configuration as a default for an enterprise
   * @request PUT:/enterprises/{enterprise}/code-security/configurations/{configuration_id}/defaults
   */
  codeSecuritySetConfigurationAsDefaultForEnterprise = (
    enterprise: string,
    configurationId: number,
    data: CodeSecuritySetConfigurationAsDefaultForEnterprisePayload,
    params: RequestParams = {},
  ) =>
    this.http.request<
      CodeSecuritySetConfigurationAsDefaultForEnterpriseData,
      BasicError
    >({
      path: `/enterprises/${enterprise}/code-security/configurations/${configurationId}/defaults`,
      method: "PUT",
      body: data,
      type: ContentType.Json,
      format: "json",
      ...params,
    });
  /**
   * @description Lists the repositories associated with an enterprise code security configuration in an organization. The authenticated user must be an administrator of the enterprise in order to use this endpoint. OAuth app tokens and personal access tokens (classic) need the `read:enterprise` scope to use this endpoint.
   *
   * @tags code-security
   * @name CodeSecurityGetRepositoriesForEnterpriseConfiguration
   * @summary Get repositories associated with an enterprise code security configuration
   * @request GET:/enterprises/{enterprise}/code-security/configurations/{configuration_id}/repositories
   */
  codeSecurityGetRepositoriesForEnterpriseConfiguration = (
    {
      enterprise,
      configurationId,
      ...query
    }: CodeSecurityGetRepositoriesForEnterpriseConfigurationParams,
    params: RequestParams = {},
  ) =>
    this.http.request<
      CodeSecurityGetRepositoriesForEnterpriseConfigurationData,
      BasicError
    >({
      path: `/enterprises/${enterprise}/code-security/configurations/${configurationId}/repositories`,
      method: "GET",
      query: query,
      format: "json",
      ...params,
    });
  /**
   * @description > [!WARNING] > **Closing down notice:** The ability to fetch code security and analysis settings for an enterprise is closing down. Please use [code security configurations](https://docs.github.com/enterprise-server@3.17/rest/code-security/configurations) instead. For more information, see the [changelog](https://github.blog/changelog/2024-09-27-upcoming-replacement-of-enterprise-code-security-enablement-ui-and-apis). Gets code security and analysis settings for the specified enterprise. The authenticated user must be an administrator of the enterprise in order to use this endpoint. OAuth app tokens and personal access tokens (classic) need the `read:enterprise` scope to use this endpoint.
   *
   * @tags enterprise-admin
   * @name SecretScanningGetSecurityAnalysisSettingsForEnterprise
   * @summary Get code security and analysis features for an enterprise
   * @request GET:/enterprises/{enterprise}/code_security_and_analysis
   * @deprecated
   */
  secretScanningGetSecurityAnalysisSettingsForEnterprise = (
    enterprise: string,
    params: RequestParams = {},
  ) =>
    this.http.request<
      SecretScanningGetSecurityAnalysisSettingsForEnterpriseData,
      BasicError
    >({
      path: `/enterprises/${enterprise}/code_security_and_analysis`,
      method: "GET",
      format: "json",
      ...params,
    });
  /**
   * @description > [!WARNING] > **Closing down notice:** The ability to update code security and analysis settings for an enterprise is closing down. Please use [code security configurations](https://docs.github.com/enterprise-server@3.17/rest/code-security/configurations) instead. For more information, see the [changelog](https://github.blog/changelog/2024-09-27-upcoming-replacement-of-enterprise-code-security-enablement-ui-and-apis). Updates the settings for advanced security, Dependabot alerts, secret scanning, and push protection for new repositories in an enterprise. The authenticated user must be an administrator of the enterprise to use this endpoint. OAuth app tokens and personal access tokens (classic) need the `admin:enterprise` scope to use this endpoint.
   *
   * @tags enterprise-admin
   * @name SecretScanningPatchSecurityAnalysisSettingsForEnterprise
   * @summary Update code security and analysis features for an enterprise
   * @request PATCH:/enterprises/{enterprise}/code_security_and_analysis
   * @deprecated
   */
  secretScanningPatchSecurityAnalysisSettingsForEnterprise = (
    enterprise: string,
    data?: SecretScanningPatchSecurityAnalysisSettingsForEnterprisePayload,
    params: RequestParams = {},
  ) =>
    this.http.request<
      SecretScanningPatchSecurityAnalysisSettingsForEnterpriseData,
      BasicError | void
    >({
      path: `/enterprises/${enterprise}/code_security_and_analysis`,
      method: "PATCH",
      body: data,
      type: ContentType.Json,
      ...params,
    });
  /**
   * @description Lists Dependabot alerts for repositories that are owned by the specified enterprise. The authenticated user must be a member of the enterprise to use this endpoint. Alerts are only returned for organizations in the enterprise for which you are an organization owner or a security manager. For more information about security managers, see "[Managing security managers in your organization](https://docs.github.com/enterprise-server@3.17/organizations/managing-peoples-access-to-your-organization-with-roles/managing-security-managers-in-your-organization)." OAuth app tokens and personal access tokens (classic) need the `repo` or `security_events` scope to use this endpoint.
   *
   * @tags dependabot
   * @name DependabotListAlertsForEnterprise
   * @summary List Dependabot alerts for an enterprise
   * @request GET:/enterprises/{enterprise}/dependabot/alerts
   */
  dependabotListAlertsForEnterprise = (
    { enterprise, ...query }: DependabotListAlertsForEnterpriseParams,
    params: RequestParams = {},
  ) =>
    this.http.request<
      DependabotListAlertsForEnterpriseData,
      BasicError | ValidationErrorSimple
    >({
      path: `/enterprises/${enterprise}/dependabot/alerts`,
      method: "GET",
      query: query,
      format: "json",
      ...params,
    });
  /**
   * @description Lists secret scanning alerts for eligible repositories in an enterprise, from newest to oldest. To use this endpoint, you must be a member of the enterprise, and you must use an access token with the `repo` scope or `security_events` scope. Alerts are only returned for organizations in the enterprise for which you are an organization owner or a [security manager](https://docs.github.com/enterprise-server@3.17/organizations/managing-peoples-access-to-your-organization-with-roles/managing-security-managers-in-your-organization), or for personal account repositories.
   *
   * @tags secret-scanning
   * @name SecretScanningListAlertsForEnterprise
   * @summary List secret scanning alerts for an enterprise
   * @request GET:/enterprises/{enterprise}/secret-scanning/alerts
   */
  secretScanningListAlertsForEnterprise = (
    { enterprise, ...query }: SecretScanningListAlertsForEnterpriseParams,
    params: RequestParams = {},
  ) =>
    this.http.request<
      SecretScanningListAlertsForEnterpriseData,
      | BasicError
      | {
          code?: string;
          message?: string;
          documentation_url?: string;
        }
    >({
      path: `/enterprises/${enterprise}/secret-scanning/alerts`,
      method: "GET",
      query: query,
      format: "json",
      ...params,
    });
  /**
   * @description Gets the GitHub Advanced Security active committers for an enterprise per repository. Each distinct user login across all repositories is counted as a single Advanced Security seat, so the `total_advanced_security_committers` is not the sum of active_users for each repository. The total number of repositories with committer information is tracked by the `total_count` field.
   *
   * @tags billing
   * @name BillingGetGithubAdvancedSecurityBillingGhe
   * @summary Get GitHub Advanced Security active committers for an enterprise
   * @request GET:/enterprises/{enterprise}/settings/billing/advanced-security
   */
  billingGetGithubAdvancedSecurityBillingGhe = (
    { enterprise, ...query }: BillingGetGithubAdvancedSecurityBillingGheParams,
    params: RequestParams = {},
  ) =>
    this.http.request<BillingGetGithubAdvancedSecurityBillingGheData, any>({
      path: `/enterprises/${enterprise}/settings/billing/advanced-security`,
      method: "GET",
      query: query,
      format: "json",
      ...params,
    });
  /**
   * @description > [!WARNING] > **Closing down notice:** The ability to enable or disable a security feature for an enterprise is closing down. Please use [code security configurations](https://docs.github.com/enterprise-server@3.17/rest/code-security/configurations) instead. For more information, see the [changelog](https://github.blog/changelog/2024-09-27-upcoming-replacement-of-enterprise-code-security-enablement-ui-and-apis). Enables or disables the specified security feature for all repositories in an enterprise. The authenticated user must be an administrator of the enterprise to use this endpoint. OAuth app tokens and personal access tokens (classic) need the `admin:enterprise` scope to use this endpoint.
   *
   * @tags enterprise-admin
   * @name SecretScanningPostSecurityProductEnablementForEnterprise
   * @summary Enable or disable a security feature
   * @request POST:/enterprises/{enterprise}/{security_product}/{enablement}
   * @deprecated
   */
  secretScanningPostSecurityProductEnablementForEnterprise = (
    enterprise: string,
    securityProduct:
      | "advanced_security"
      | "advanced_security_user_namespace"
      | "dependabot_alerts"
      | "secret_scanning"
      | "secret_scanning_push_protection"
      | "secret_scanning_non_provider_patterns",
    enablement: "enable_all" | "disable_all",
    params: RequestParams = {},
  ) =>
    this.http.request<
      SecretScanningPostSecurityProductEnablementForEnterpriseData,
      BasicError | void
    >({
      path: `/enterprises/${enterprise}/${securityProduct}/${enablement}`,
      method: "POST",
      ...params,
    });
}
