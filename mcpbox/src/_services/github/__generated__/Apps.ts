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

import { AppsGetBySlugData, BasicError } from "./data-contracts";
import { HttpClient, RequestParams } from "./http-client";

export class Apps<SecurityDataType = unknown> {
  http: HttpClient<SecurityDataType>;

  constructor(http: HttpClient<SecurityDataType>) {
    this.http = http;
  }

  /**
   * @description > [!NOTE] > The `:app_slug` is just the URL-friendly name of your GitHub App. You can find this on the settings page for your GitHub App (e.g., `https://github.com/settings/apps/:app_slug`).
   *
   * @tags apps
   * @name AppsGetBySlug
   * @summary Get an app
   * @request GET:/apps/{app_slug}
   */
  appsGetBySlug = (appSlug: string, params: RequestParams = {}) =>
    this.http.request<AppsGetBySlugData, BasicError>({
      path: `/apps/${appSlug}`,
      method: "GET",
      format: "json",
      ...params,
    });
}
