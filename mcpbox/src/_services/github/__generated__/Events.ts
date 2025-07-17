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
  ActivityListPublicEventsData,
  ActivityListPublicEventsParams,
  BasicError,
} from "./data-contracts";
import { HttpClient, RequestParams } from "./http-client";

export class Events<SecurityDataType = unknown> {
  http: HttpClient<SecurityDataType>;

  constructor(http: HttpClient<SecurityDataType>) {
    this.http = http;
  }

  /**
   * @description > [!NOTE] > This API is not built to serve real-time use cases. Depending on the time of day, event latency can be anywhere from 30s to 6h.
   *
   * @tags activity
   * @name ActivityListPublicEvents
   * @summary List public events
   * @request GET:/events
   */
  activityListPublicEvents = (
    query: ActivityListPublicEventsParams,
    params: RequestParams = {},
  ) =>
    this.http.request<
      ActivityListPublicEventsData,
      | BasicError
      | {
          code?: string;
          message?: string;
          documentation_url?: string;
        }
    >({
      path: `/events`,
      method: "GET",
      query: query,
      format: "json",
      ...params,
    });
}
