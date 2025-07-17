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
  OrgsListCustomRolesData,
  OrgsListData,
  OrgsListParams,
} from "./data-contracts";
import { HttpClient, RequestParams } from "./http-client";

export class Organizations<SecurityDataType = unknown> {
  http: HttpClient<SecurityDataType>;

  constructor(http: HttpClient<SecurityDataType>) {
    this.http = http;
  }

  /**
   * @description Lists all organizations, in the order that they were created. > [!NOTE] > Pagination is powered exclusively by the `since` parameter. Use the [Link header](https://docs.github.com/enterprise-server@3.17/rest/guides/using-pagination-in-the-rest-api#using-link-headers) to get the URL for the next page of organizations.
   *
   * @tags orgs
   * @name OrgsList
   * @summary List organizations
   * @request GET:/organizations
   */
  orgsList = (query: OrgsListParams, params: RequestParams = {}) =>
    this.http.request<OrgsListData, any>({
      path: `/organizations`,
      method: "GET",
      query: query,
      format: "json",
      ...params,
    });
  /**
   * @description > [!WARNING] > **Closing down notice:** This operation is closing down and will be removed in the future. Use the "[List custom repository roles](https://docs.github.com/enterprise-server@3.17/rest/orgs/custom-roles#list-custom-repository-roles-in-an-organization)" endpoint instead. List the custom repository roles available in this organization. For more information on custom repository roles, see "[About custom repository roles](https://docs.github.com/enterprise-server@3.17/organizations/managing-peoples-access-to-your-organization-with-roles/about-custom-repository-roles)." The authenticated user must be administrator of the organization or of a repository of the organization to use this endpoint. OAuth app tokens and personal access tokens (classic) need the `admin:org` or `repo` scope to use this endpoint.
   *
   * @tags orgs
   * @name OrgsListCustomRoles
   * @summary Closing down - List custom repository roles in an organization
   * @request GET:/organizations/{organization_id}/custom_roles
   * @deprecated
   */
  orgsListCustomRoles = (organizationId: string, params: RequestParams = {}) =>
    this.http.request<OrgsListCustomRolesData, any>({
      path: `/organizations/${organizationId}/custom_roles`,
      method: "GET",
      format: "json",
      ...params,
    });
}
