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
  AppsCreateFromManifestData,
  BasicError,
  ValidationErrorSimple,
} from "./data-contracts";
import { HttpClient, RequestParams } from "./http-client";

export class AppManifests<SecurityDataType = unknown> {
  http: HttpClient<SecurityDataType>;

  constructor(http: HttpClient<SecurityDataType>) {
    this.http = http;
  }

  /**
   * @description Use this endpoint to complete the handshake necessary when implementing the [GitHub App Manifest flow](https://docs.github.com/enterprise-server@3.17/apps/building-github-apps/creating-github-apps-from-a-manifest/). When you create a GitHub App with the manifest flow, you receive a temporary `code` used to retrieve the GitHub App's `id`, `pem` (private key), and `webhook_secret`.
   *
   * @tags apps
   * @name AppsCreateFromManifest
   * @summary Create a GitHub App from a manifest
   * @request POST:/app-manifests/{code}/conversions
   */
  appsCreateFromManifest = (code: string, params: RequestParams = {}) =>
    this.http.request<
      AppsCreateFromManifestData,
      BasicError | ValidationErrorSimple
    >({
      path: `/app-manifests/${code}/conversions`,
      method: "POST",
      format: "json",
      ...params,
    });
}
