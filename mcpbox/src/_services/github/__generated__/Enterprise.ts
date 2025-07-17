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
  Announcement,
  EnterpriseAdminGetAllStatsData,
  EnterpriseAdminGetAnnouncementData,
  EnterpriseAdminGetCommentStatsData,
  EnterpriseAdminGetGistStatsData,
  EnterpriseAdminGetHooksStatsData,
  EnterpriseAdminGetIssueStatsData,
  EnterpriseAdminGetLicenseInformationData,
  EnterpriseAdminGetMilestoneStatsData,
  EnterpriseAdminGetOrgStatsData,
  EnterpriseAdminGetPagesStatsData,
  EnterpriseAdminGetPullRequestStatsData,
  EnterpriseAdminGetRepoStatsData,
  EnterpriseAdminGetSecurityProductsData,
  EnterpriseAdminGetUserStatsData,
  EnterpriseAdminRemoveAnnouncementData,
  EnterpriseAdminSetAnnouncementData,
} from "./data-contracts";
import { ContentType, HttpClient, RequestParams } from "./http-client";

export class Enterprise<SecurityDataType = unknown> {
  http: HttpClient<SecurityDataType>;

  constructor(http: HttpClient<SecurityDataType>) {
    this.http = http;
  }

  /**
   * @description Gets the current message and expiration date of the global announcement banner in your enterprise.
   *
   * @tags enterprise-admin
   * @name EnterpriseAdminGetAnnouncement
   * @summary Get the global announcement banner
   * @request GET:/enterprise/announcement
   */
  enterpriseAdminGetAnnouncement = (params: RequestParams = {}) =>
    this.http.request<EnterpriseAdminGetAnnouncementData, any>({
      path: `/enterprise/announcement`,
      method: "GET",
      format: "json",
      ...params,
    });
  /**
   * @description Sets the message and expiration time for the global announcement banner in your enterprise.
   *
   * @tags enterprise-admin
   * @name EnterpriseAdminSetAnnouncement
   * @summary Set the global announcement banner
   * @request PATCH:/enterprise/announcement
   */
  enterpriseAdminSetAnnouncement = (
    data: Announcement,
    params: RequestParams = {},
  ) =>
    this.http.request<EnterpriseAdminSetAnnouncementData, any>({
      path: `/enterprise/announcement`,
      method: "PATCH",
      body: data,
      type: ContentType.Json,
      format: "json",
      ...params,
    });
  /**
   * @description Removes the global announcement banner in your enterprise.
   *
   * @tags enterprise-admin
   * @name EnterpriseAdminRemoveAnnouncement
   * @summary Remove the global announcement banner
   * @request DELETE:/enterprise/announcement
   */
  enterpriseAdminRemoveAnnouncement = (params: RequestParams = {}) =>
    this.http.request<EnterpriseAdminRemoveAnnouncementData, any>({
      path: `/enterprise/announcement`,
      method: "DELETE",
      ...params,
    });
  /**
   * No description
   *
   * @tags enterprise-admin
   * @name EnterpriseAdminGetLicenseInformation
   * @summary Get license information
   * @request GET:/enterprise/settings/license
   */
  enterpriseAdminGetLicenseInformation = (params: RequestParams = {}) =>
    this.http.request<EnterpriseAdminGetLicenseInformationData, any>({
      path: `/enterprise/settings/license`,
      method: "GET",
      format: "json",
      ...params,
    });
  /**
   * No description
   *
   * @tags enterprise-admin
   * @name EnterpriseAdminGetAllStats
   * @summary Get all statistics
   * @request GET:/enterprise/stats/all
   */
  enterpriseAdminGetAllStats = (params: RequestParams = {}) =>
    this.http.request<EnterpriseAdminGetAllStatsData, any>({
      path: `/enterprise/stats/all`,
      method: "GET",
      format: "json",
      ...params,
    });
  /**
   * No description
   *
   * @tags enterprise-admin
   * @name EnterpriseAdminGetCommentStats
   * @summary Get comment statistics
   * @request GET:/enterprise/stats/comments
   */
  enterpriseAdminGetCommentStats = (params: RequestParams = {}) =>
    this.http.request<EnterpriseAdminGetCommentStatsData, any>({
      path: `/enterprise/stats/comments`,
      method: "GET",
      format: "json",
      ...params,
    });
  /**
   * No description
   *
   * @tags enterprise-admin
   * @name EnterpriseAdminGetGistStats
   * @summary Get gist statistics
   * @request GET:/enterprise/stats/gists
   */
  enterpriseAdminGetGistStats = (params: RequestParams = {}) =>
    this.http.request<EnterpriseAdminGetGistStatsData, any>({
      path: `/enterprise/stats/gists`,
      method: "GET",
      format: "json",
      ...params,
    });
  /**
   * No description
   *
   * @tags enterprise-admin
   * @name EnterpriseAdminGetHooksStats
   * @summary Get hooks statistics
   * @request GET:/enterprise/stats/hooks
   */
  enterpriseAdminGetHooksStats = (params: RequestParams = {}) =>
    this.http.request<EnterpriseAdminGetHooksStatsData, any>({
      path: `/enterprise/stats/hooks`,
      method: "GET",
      format: "json",
      ...params,
    });
  /**
   * No description
   *
   * @tags enterprise-admin
   * @name EnterpriseAdminGetIssueStats
   * @summary Get issue statistics
   * @request GET:/enterprise/stats/issues
   */
  enterpriseAdminGetIssueStats = (params: RequestParams = {}) =>
    this.http.request<EnterpriseAdminGetIssueStatsData, any>({
      path: `/enterprise/stats/issues`,
      method: "GET",
      format: "json",
      ...params,
    });
  /**
   * No description
   *
   * @tags enterprise-admin
   * @name EnterpriseAdminGetMilestoneStats
   * @summary Get milestone statistics
   * @request GET:/enterprise/stats/milestones
   */
  enterpriseAdminGetMilestoneStats = (params: RequestParams = {}) =>
    this.http.request<EnterpriseAdminGetMilestoneStatsData, any>({
      path: `/enterprise/stats/milestones`,
      method: "GET",
      format: "json",
      ...params,
    });
  /**
   * No description
   *
   * @tags enterprise-admin
   * @name EnterpriseAdminGetOrgStats
   * @summary Get organization statistics
   * @request GET:/enterprise/stats/orgs
   */
  enterpriseAdminGetOrgStats = (params: RequestParams = {}) =>
    this.http.request<EnterpriseAdminGetOrgStatsData, any>({
      path: `/enterprise/stats/orgs`,
      method: "GET",
      format: "json",
      ...params,
    });
  /**
   * No description
   *
   * @tags enterprise-admin
   * @name EnterpriseAdminGetPagesStats
   * @summary Get pages statistics
   * @request GET:/enterprise/stats/pages
   */
  enterpriseAdminGetPagesStats = (params: RequestParams = {}) =>
    this.http.request<EnterpriseAdminGetPagesStatsData, any>({
      path: `/enterprise/stats/pages`,
      method: "GET",
      format: "json",
      ...params,
    });
  /**
   * No description
   *
   * @tags enterprise-admin
   * @name EnterpriseAdminGetPullRequestStats
   * @summary Get pull request statistics
   * @request GET:/enterprise/stats/pulls
   */
  enterpriseAdminGetPullRequestStats = (params: RequestParams = {}) =>
    this.http.request<EnterpriseAdminGetPullRequestStatsData, any>({
      path: `/enterprise/stats/pulls`,
      method: "GET",
      format: "json",
      ...params,
    });
  /**
   * No description
   *
   * @tags enterprise-admin
   * @name EnterpriseAdminGetRepoStats
   * @summary Get repository statistics
   * @request GET:/enterprise/stats/repos
   */
  enterpriseAdminGetRepoStats = (params: RequestParams = {}) =>
    this.http.request<EnterpriseAdminGetRepoStatsData, any>({
      path: `/enterprise/stats/repos`,
      method: "GET",
      format: "json",
      ...params,
    });
  /**
   * @description Gets the statistics about security products for a GitHub Enterprise Server instance. To use this endpoint, you must be a site admin.
   *
   * @tags enterprise-admin
   * @name EnterpriseAdminGetSecurityProducts
   * @summary Get security products statistics
   * @request GET:/enterprise/stats/security-products
   */
  enterpriseAdminGetSecurityProducts = (params: RequestParams = {}) =>
    this.http.request<EnterpriseAdminGetSecurityProductsData, any>({
      path: `/enterprise/stats/security-products`,
      method: "GET",
      format: "json",
      ...params,
    });
  /**
   * No description
   *
   * @tags enterprise-admin
   * @name EnterpriseAdminGetUserStats
   * @summary Get users statistics
   * @request GET:/enterprise/stats/users
   */
  enterpriseAdminGetUserStats = (params: RequestParams = {}) =>
    this.http.request<EnterpriseAdminGetUserStatsData, any>({
      path: `/enterprise/stats/users`,
      method: "GET",
      format: "json",
      ...params,
    });
}
