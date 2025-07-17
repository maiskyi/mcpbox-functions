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
  ActivityListPublicEventsForRepoNetworkData,
  ActivityListPublicEventsForRepoNetworkParams,
  BasicError,
} from "./data-contracts";
import { HttpClient, RequestParams } from "./http-client";

export class Networks<SecurityDataType = unknown> {
  http: HttpClient<SecurityDataType>;

  constructor(http: HttpClient<SecurityDataType>) {
    this.http = http;
  }

  /**
   * @description > [!NOTE] > This API is not built to serve real-time use cases. Depending on the time of day, event latency can be anywhere from 30s to 6h.
   *
   * @tags activity
   * @name ActivityListPublicEventsForRepoNetwork
   * @summary List public events for a network of repositories
   * @request GET:/networks/{owner}/{repo}/events
   */
  activityListPublicEventsForRepoNetwork = (
    { owner, repo, ...query }: ActivityListPublicEventsForRepoNetworkParams,
    params: RequestParams = {},
  ) =>
    this.http.request<ActivityListPublicEventsForRepoNetworkData, BasicError>({
      path: `/networks/${owner}/${repo}/events`,
      method: "GET",
      query: query,
      format: "json",
      ...params,
    });
}
