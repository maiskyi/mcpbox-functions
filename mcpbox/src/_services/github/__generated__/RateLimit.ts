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

import { BasicError, RateLimitGetData } from "./data-contracts";
import { HttpClient, RequestParams } from "./http-client";

export class RateLimit<SecurityDataType = unknown> {
  http: HttpClient<SecurityDataType>;

  constructor(http: HttpClient<SecurityDataType>) {
    this.http = http;
  }

  /**
   * @description > [!NOTE] > Accessing this endpoint does not count against your REST API rate limit. Some categories of endpoints have custom rate limits that are separate from the rate limit governing the other REST API endpoints. For this reason, the API response categorizes your rate limit. Under `resources`, you'll see objects relating to different categories: * The `core` object provides your rate limit status for all non-search-related resources in the REST API. * The `search` object provides your rate limit status for the REST API for searching (excluding code searches). For more information, see "[Search](https://docs.github.com/enterprise-server@3.17/rest/search/search)." * The `code_search` object provides your rate limit status for the REST API for searching code. For more information, see "[Search code](https://docs.github.com/enterprise-server@3.17/rest/search/search#search-code)." * The `graphql` object provides your rate limit status for the GraphQL API. For more information, see "[Resource limitations](https://docs.github.com/enterprise-server@3.17/graphql/overview/resource-limitations#rate-limit)." * The `integration_manifest` object provides your rate limit status for the `POST /app-manifests/{code}/conversions` operation. For more information, see "[Creating a GitHub App from a manifest](https://docs.github.com/enterprise-server@3.17/apps/creating-github-apps/setting-up-a-github-app/creating-a-github-app-from-a-manifest#3-you-exchange-the-temporary-code-to-retrieve-the-app-configuration)." * The `dependency_snapshots` object provides your rate limit status for submitting snapshots to the dependency graph. For more information, see "[Dependency graph](https://docs.github.com/enterprise-server@3.17/rest/dependency-graph)." * The `dependency_sbom` object provides your rate limit status for requesting SBOMs from the dependency graph. For more information, see "[Dependency graph](https://docs.github.com/enterprise-server@3.17/rest/dependency-graph)." * The `code_scanning_upload` object provides your rate limit status for uploading SARIF results to code scanning. For more information, see "[Uploading a SARIF file to GitHub](https://docs.github.com/enterprise-server@3.17/code-security/code-scanning/integrating-with-code-scanning/uploading-a-sarif-file-to-github)." * The `actions_runner_registration` object provides your rate limit status for registering self-hosted runners in GitHub Actions. For more information, see "[Self-hosted runners](https://docs.github.com/enterprise-server@3.17/rest/actions/self-hosted-runners)." * The `source_import` object is no longer in use for any API endpoints, and it will be removed in the next API version. For more information about API versions, see "[API Versions](https://docs.github.com/enterprise-server@3.17/rest/about-the-rest-api/api-versions)." > [!NOTE] > The `rate` object is closing down. If you're writing new API client code or updating existing code, you should use the `core` object instead of the `rate` object. The `core` object contains the same information that is present in the `rate` object.
   *
   * @tags rate-limit
   * @name RateLimitGet
   * @summary Get rate limit status for the authenticated user
   * @request GET:/rate_limit
   */
  rateLimitGet = (params: RequestParams = {}) =>
    this.http.request<RateLimitGetData, BasicError>({
      path: `/rate_limit`,
      method: "GET",
      format: "json",
      ...params,
    });
}
