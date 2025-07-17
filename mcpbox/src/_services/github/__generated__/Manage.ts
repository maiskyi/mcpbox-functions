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
  EnterpriseAdminDeleteManageSshData,
  EnterpriseAdminGetChecksSystemRequirementsData,
  EnterpriseAdminGetClusterStatusData,
  EnterpriseAdminGetConfigNodesData,
  EnterpriseAdminGetConfigNodesParams,
  EnterpriseAdminGetManageConfigApplyEventsData,
  EnterpriseAdminGetManageConfigApplyEventsParams,
  EnterpriseAdminGetManageConfigApplyStatusData,
  EnterpriseAdminGetManageConfigApplyStatusParams,
  EnterpriseAdminGetManageMaintenanceData,
  EnterpriseAdminGetManageMaintenanceParams,
  EnterpriseAdminGetManageSettingsData,
  EnterpriseAdminGetManageSshData,
  EnterpriseAdminGetReplicationStatusData,
  EnterpriseAdminGetReplicationStatusParams,
  EnterpriseAdminGetVersionData,
  EnterpriseAdminGetVersionParams,
  EnterpriseAdminInitializeInstanceConfigurationData,
  EnterpriseAdminLicenseCheckData,
  EnterpriseAdminLicenseInfoData,
  EnterpriseAdminLicenseUploadData,
  EnterpriseAdminLicenseUploadParams,
  EnterpriseAdminPostManageRunConfigApplyData,
  EnterpriseAdminPostManageRunConfigApplyPayload,
  EnterpriseAdminSetManageMaintenanceData,
  EnterpriseAdminSetManageSettingsData,
  EnterpriseAdminSetManageSettingsPayload,
  EnterpriseAdminSetManageSshData,
  GhesConfigInitRequest,
  GhesDeleteSshRequest,
  GhesSetMaintenanceRequest,
  GhesSetSshRequest,
  GhesUploadLicenseRequest,
} from "./data-contracts";
import { ContentType, HttpClient, RequestParams } from "./http-client";

export class Manage<SecurityDataType = unknown> {
  http: HttpClient<SecurityDataType>;

  constructor(http: HttpClient<SecurityDataType>) {
    this.http = http;
  }

  /**
   * @description Gets the configured SSH keys on all available nodes. For more information, see "[Accessing the administrative shell (SSH)](https://docs.github.com/enterprise-server@3.17/admin/administering-your-instance/administering-your-instance-from-the-command-line/accessing-the-administrative-shell-ssh)."
   *
   * @tags enterprise-admin
   * @name EnterpriseAdminGetManageSsh
   * @summary Get the configured SSH keys
   * @request GET:/manage/v1/access/ssh
   */
  enterpriseAdminGetManageSsh = (params: RequestParams = {}) =>
    this.http.request<EnterpriseAdminGetManageSshData, void>({
      path: `/manage/v1/access/ssh`,
      method: "GET",
      format: "json",
      ...params,
    });
  /**
   * @description Adds a SSH key to the `authorized_keys` file for your GitHub Enterprise Server instance. This will grant access via SSH to your instance. For more information, see "[Accessing the administrative shell (SSH)](https://docs.github.com/enterprise-server@3.17/admin/administering-your-instance/administering-your-instance-from-the-command-line/accessing-the-administrative-shell-ssh)."
   *
   * @tags enterprise-admin
   * @name EnterpriseAdminSetManageSsh
   * @summary Set a new SSH key
   * @request POST:/manage/v1/access/ssh
   */
  enterpriseAdminSetManageSsh = (
    data: GhesSetSshRequest,
    params: RequestParams = {},
  ) =>
    this.http.request<EnterpriseAdminSetManageSshData, void>({
      path: `/manage/v1/access/ssh`,
      method: "POST",
      body: data,
      type: ContentType.Json,
      format: "json",
      ...params,
    });
  /**
   * @description Deletes a SSH key from the `authorized_keys` file for your GitHub Enterprise Server instance. This will remove access via SSH to your instance. For more information, see "[Accessing the administrative shell (SSH)](https://docs.github.com/enterprise-server@3.17/admin/administering-your-instance/administering-your-instance-from-the-command-line/accessing-the-administrative-shell-ssh)."
   *
   * @tags enterprise-admin
   * @name EnterpriseAdminDeleteManageSsh
   * @summary Delete a SSH key
   * @request DELETE:/manage/v1/access/ssh
   */
  enterpriseAdminDeleteManageSsh = (
    data: GhesDeleteSshRequest,
    params: RequestParams = {},
  ) =>
    this.http.request<EnterpriseAdminDeleteManageSshData, void>({
      path: `/manage/v1/access/ssh`,
      method: "DELETE",
      body: data,
      type: ContentType.Json,
      format: "json",
      ...params,
    });
  /**
   * @description Checks if the minimum requirements for system hardware resources are met on each configured cluster node. This endpoint may take several seconds to reply.
   *
   * @tags enterprise-admin
   * @name EnterpriseAdminGetChecksSystemRequirements
   * @summary Get the system requirement check results for configured cluster nodes
   * @request GET:/manage/v1/checks/system-requirements
   */
  enterpriseAdminGetChecksSystemRequirements = (params: RequestParams = {}) =>
    this.http.request<EnterpriseAdminGetChecksSystemRequirementsData, void>({
      path: `/manage/v1/checks/system-requirements`,
      method: "GET",
      format: "json",
      ...params,
    });
  /**
   * @description Gets the status of all services running on each cluster node. This endpoint may take several seconds to reply.
   *
   * @tags enterprise-admin
   * @name EnterpriseAdminGetClusterStatus
   * @summary Get the status of services running on all cluster nodes
   * @request GET:/manage/v1/cluster/status
   */
  enterpriseAdminGetClusterStatus = (params: RequestParams = {}) =>
    this.http.request<EnterpriseAdminGetClusterStatusData, void>({
      path: `/manage/v1/cluster/status`,
      method: "GET",
      format: "json",
      ...params,
    });
  /**
   * @description Displays the current status of `ghe-config-apply` in the environment or the status of a historical run by ID.
   *
   * @tags enterprise-admin
   * @name EnterpriseAdminGetManageConfigApplyStatus
   * @summary Get the status of a ghe-config-apply run
   * @request GET:/manage/v1/config/apply
   */
  enterpriseAdminGetManageConfigApplyStatus = (
    query: EnterpriseAdminGetManageConfigApplyStatusParams,
    params: RequestParams = {},
  ) =>
    this.http.request<EnterpriseAdminGetManageConfigApplyStatusData, void>({
      path: `/manage/v1/config/apply`,
      method: "GET",
      query: query,
      format: "json",
      ...params,
    });
  /**
   * @description Triggers a run of `ghe-config-apply` from the `ghes-manage` agent on your Nomad Delegate instance. You can provide a run ID or allow one to be generated randomly.
   *
   * @tags enterprise-admin
   * @name EnterpriseAdminPostManageRunConfigApply
   * @summary Trigger a ghe-config-apply run
   * @request POST:/manage/v1/config/apply
   */
  enterpriseAdminPostManageRunConfigApply = (
    data?: EnterpriseAdminPostManageRunConfigApplyPayload,
    params: RequestParams = {},
  ) =>
    this.http.request<EnterpriseAdminPostManageRunConfigApplyData, void>({
      path: `/manage/v1/config/apply`,
      method: "POST",
      body: data,
      type: ContentType.Json,
      format: "json",
      ...params,
    });
  /**
   * @description Lists events from an in-process `ghe-config-apply` run on your Github Enterprise Server instance.
   *
   * @tags enterprise-admin
   * @name EnterpriseAdminGetManageConfigApplyEvents
   * @summary List events from ghe-config-apply
   * @request GET:/manage/v1/config/apply/events
   */
  enterpriseAdminGetManageConfigApplyEvents = (
    query: EnterpriseAdminGetManageConfigApplyEventsParams,
    params: RequestParams = {},
  ) =>
    this.http.request<EnterpriseAdminGetManageConfigApplyEventsData, void>({
      path: `/manage/v1/config/apply/events`,
      method: "GET",
      query: query,
      format: "json",
      ...params,
    });
  /**
   * @description When you boot and set up a GitHub instance for the first time, you can use this endpoint to upload a license and set the initial root site administrator password. > [!IMPORTANT] > To start the configuration process and apply the license, you need to `POST` to [`/manage/v1/config/apply`](https://docs.github.com/enterprise-server@3.17/rest/enterprise-admin/manage-ghes#start-configuration-apply-process) The root site administrator password provided when calling this endpoint is used to authenticate for all other endpoints in the GHES Manage API and the Management Console UI. > [!NOTE] > The request body for this operation must be submitted as `multipart/form-data` data. You can can reference the license file by prefixing the filename with the `@` symbol using `curl`. For more information, see the [`curl` documentation](https://curl.se/docs/manpage.html#-F).
   *
   * @tags enterprise-admin
   * @name EnterpriseAdminInitializeInstanceConfiguration
   * @summary Initialize instance configuration with license and password
   * @request POST:/manage/v1/config/init
   */
  enterpriseAdminInitializeInstanceConfiguration = (
    data: GhesConfigInitRequest,
    params: RequestParams = {},
  ) =>
    this.http.request<EnterpriseAdminInitializeInstanceConfigurationData, void>(
      {
        path: `/manage/v1/config/init`,
        method: "POST",
        body: data,
        type: ContentType.FormData,
        ...params,
      },
    );
  /**
   * @description Gets information about the license that is currently set for the enterprise.
   *
   * @tags enterprise-admin
   * @name EnterpriseAdminLicenseInfo
   * @summary Get the enterprise license information
   * @request GET:/manage/v1/config/license
   */
  enterpriseAdminLicenseInfo = (params: RequestParams = {}) =>
    this.http.request<EnterpriseAdminLicenseInfoData, void>({
      path: `/manage/v1/config/license`,
      method: "GET",
      format: "json",
      ...params,
    });
  /**
   * @description Uploads a new enterprise license. In order to apply it right away, use the `apply` query parameter. > [!NOTE] > The request body for this operation must be submitted as `multipart/form-data` data. You can can reference the license file by prefixing the filename with the `@` symbol using `curl`. For more information, see the [`curl` documentation](https://curl.se/docs/manpage.html#-F).
   *
   * @tags enterprise-admin
   * @name EnterpriseAdminLicenseUpload
   * @summary Upload an enterprise license
   * @request PUT:/manage/v1/config/license
   */
  enterpriseAdminLicenseUpload = (
    query: EnterpriseAdminLicenseUploadParams,
    data: GhesUploadLicenseRequest,
    params: RequestParams = {},
  ) =>
    this.http.request<EnterpriseAdminLicenseUploadData, void>({
      path: `/manage/v1/config/license`,
      method: "PUT",
      query: query,
      body: data,
      type: ContentType.FormData,
      ...params,
    });
  /**
   * @description Check the status of the license that is currently set for the enterprise.
   *
   * @tags enterprise-admin
   * @name EnterpriseAdminLicenseCheck
   * @summary Check a license
   * @request GET:/manage/v1/config/license/check
   */
  enterpriseAdminLicenseCheck = (params: RequestParams = {}) =>
    this.http.request<EnterpriseAdminLicenseCheckData, void>({
      path: `/manage/v1/config/license/check`,
      method: "GET",
      format: "json",
      ...params,
    });
  /**
   * @description Get node metadata for all configured nodes in the current cluster. For more information, see "[About clustering](https://docs.github.com/enterprise-server@3.17/admin/enterprise-management/configuring-clustering/about-clustering)."
   *
   * @tags enterprise-admin
   * @name EnterpriseAdminGetConfigNodes
   * @summary Get GHES node metadata for all nodes
   * @request GET:/manage/v1/config/nodes
   */
  enterpriseAdminGetConfigNodes = (
    query: EnterpriseAdminGetConfigNodesParams,
    params: RequestParams = {},
  ) =>
    this.http.request<EnterpriseAdminGetConfigNodesData, void>({
      path: `/manage/v1/config/nodes`,
      method: "GET",
      query: query,
      format: "json",
      ...params,
    });
  /**
   * @description Gets a list of settings for a GitHub Enterprise Server instance.
   *
   * @tags enterprise-admin
   * @name EnterpriseAdminGetManageSettings
   * @summary Get the GHES settings
   * @request GET:/manage/v1/config/settings
   */
  enterpriseAdminGetManageSettings = (params: RequestParams = {}) =>
    this.http.request<EnterpriseAdminGetManageSettingsData, void>({
      path: `/manage/v1/config/settings`,
      method: "GET",
      format: "json",
      ...params,
    });
  /**
   * @description Updates the settings on your instance. For a list of the available settings, see the [Get settings endpoint](https://docs.github.com/enterprise-server@3.17/rest/enterprise-admin/manage-ghes#get-settings). **Notes:** - The request body only requires the settings parameters that should be updated to be specified, all other parameters will be unmodified or populated from the default values. - You cannot set the Management Console root site administrator password with this API endpoint. Use the `ghe-set-password` utility to change the management console password. For more information, see "[Command-line utilities](https://docs.github.com/enterprise-server@3.17/admin/configuration/configuring-your-enterprise/command-line-utilities#ghe-set-password)."
   *
   * @tags enterprise-admin
   * @name EnterpriseAdminSetManageSettings
   * @summary Set settings
   * @request PUT:/manage/v1/config/settings
   */
  enterpriseAdminSetManageSettings = (
    data: EnterpriseAdminSetManageSettingsPayload,
    params: RequestParams = {},
  ) =>
    this.http.request<EnterpriseAdminSetManageSettingsData, void>({
      path: `/manage/v1/config/settings`,
      method: "PUT",
      body: data,
      type: ContentType.Json,
      ...params,
    });
  /**
   * @description Gets the status and details of maintenance mode on all available nodes. For more information, see "[Enabling and scheduling maintenance mode](https://docs.github.com/enterprise-server@3.17/admin/configuration/configuring-your-enterprise/enabling-and-scheduling-maintenance-mode)."
   *
   * @tags enterprise-admin
   * @name EnterpriseAdminGetManageMaintenance
   * @summary Get the status of maintenance mode
   * @request GET:/manage/v1/maintenance
   */
  enterpriseAdminGetManageMaintenance = (
    query: EnterpriseAdminGetManageMaintenanceParams,
    params: RequestParams = {},
  ) =>
    this.http.request<EnterpriseAdminGetManageMaintenanceData, void>({
      path: `/manage/v1/maintenance`,
      method: "GET",
      query: query,
      format: "json",
      ...params,
    });
  /**
   * @description Sets or schedules the maintenance mode. For more information, see "[Enabling and scheduling maintenance mode](https://docs.github.com/enterprise-server@3.17/admin/configuration/configuring-your-enterprise/enabling-and-scheduling-maintenance-mode)."
   *
   * @tags enterprise-admin
   * @name EnterpriseAdminSetManageMaintenance
   * @summary Set the status of maintenance mode
   * @request POST:/manage/v1/maintenance
   */
  enterpriseAdminSetManageMaintenance = (
    data: GhesSetMaintenanceRequest,
    params: RequestParams = {},
  ) =>
    this.http.request<EnterpriseAdminSetManageMaintenanceData, void>({
      path: `/manage/v1/maintenance`,
      method: "POST",
      body: data,
      type: ContentType.Json,
      format: "json",
      ...params,
    });
  /**
   * @description Gets the status of all services running on each replica node. This endpoint may take several seconds to reply.
   *
   * @tags enterprise-admin
   * @name EnterpriseAdminGetReplicationStatus
   * @summary Get the status of services running on all replica nodes
   * @request GET:/manage/v1/replication/status
   */
  enterpriseAdminGetReplicationStatus = (
    query: EnterpriseAdminGetReplicationStatusParams,
    params: RequestParams = {},
  ) =>
    this.http.request<EnterpriseAdminGetReplicationStatusData, void>({
      path: `/manage/v1/replication/status`,
      method: "GET",
      query: query,
      format: "json",
      ...params,
    });
  /**
   * @description Gets the GitHub Enterprise Server release versions that are currently installed on all available nodes. For more information, see "[GitHub Enterprise Server releases](https://docs.github.com/enterprise-server@3.17/admin/all-releases)."
   *
   * @tags enterprise-admin
   * @name EnterpriseAdminGetVersion
   * @summary Get all GHES release versions for all nodes
   * @request GET:/manage/v1/version
   */
  enterpriseAdminGetVersion = (
    query: EnterpriseAdminGetVersionParams,
    params: RequestParams = {},
  ) =>
    this.http.request<EnterpriseAdminGetVersionData, void>({
      path: `/manage/v1/version`,
      method: "GET",
      query: query,
      format: "json",
      ...params,
    });
}
