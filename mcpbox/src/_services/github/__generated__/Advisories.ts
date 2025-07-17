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
  SecurityAdvisoriesGetGlobalAdvisoryData,
  SecurityAdvisoriesListGlobalAdvisoriesData,
  SecurityAdvisoriesListGlobalAdvisoriesError,
  SecurityAdvisoriesListGlobalAdvisoriesParams,
} from "./data-contracts";
import { HttpClient, RequestParams } from "./http-client";

export class Advisories<SecurityDataType = unknown> {
  http: HttpClient<SecurityDataType>;

  constructor(http: HttpClient<SecurityDataType>) {
    this.http = http;
  }

  /**
   * @description Lists all global security advisories that match the specified parameters. If no other parameters are defined, the request will return only GitHub-reviewed advisories that are not malware. By default, all responses will exclude advisories for malware, because malware are not standard vulnerabilities. To list advisories for malware, you must include the `type` parameter in your request, with the value `malware`. For more information about the different types of security advisories, see "[About the GitHub Advisory database](https://docs.github.com/enterprise-server@3.17/code-security/security-advisories/global-security-advisories/about-the-github-advisory-database#about-types-of-security-advisories)."
   *
   * @tags security-advisories
   * @name SecurityAdvisoriesListGlobalAdvisories
   * @summary List global security advisories
   * @request GET:/advisories
   */
  securityAdvisoriesListGlobalAdvisories = (
    query: SecurityAdvisoriesListGlobalAdvisoriesParams,
    params: RequestParams = {},
  ) =>
    this.http.request<
      SecurityAdvisoriesListGlobalAdvisoriesData,
      SecurityAdvisoriesListGlobalAdvisoriesError
    >({
      path: `/advisories`,
      method: "GET",
      query: query,
      format: "json",
      ...params,
    });
  /**
   * @description Gets a global security advisory using its GitHub Security Advisory (GHSA) identifier.
   *
   * @tags security-advisories
   * @name SecurityAdvisoriesGetGlobalAdvisory
   * @summary Get a global security advisory
   * @request GET:/advisories/{ghsa_id}
   */
  securityAdvisoriesGetGlobalAdvisory = (
    ghsaId: string,
    params: RequestParams = {},
  ) =>
    this.http.request<SecurityAdvisoriesGetGlobalAdvisoryData, BasicError>({
      path: `/advisories/${ghsaId}`,
      method: "GET",
      format: "json",
      ...params,
    });
}
