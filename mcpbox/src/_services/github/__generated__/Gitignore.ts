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
  GitignoreGetAllTemplatesData,
  GitignoreGetTemplateData,
} from "./data-contracts";
import { HttpClient, RequestParams } from "./http-client";

export class Gitignore<SecurityDataType = unknown> {
  http: HttpClient<SecurityDataType>;

  constructor(http: HttpClient<SecurityDataType>) {
    this.http = http;
  }

  /**
   * @description List all templates available to pass as an option when [creating a repository](https://docs.github.com/enterprise-server@3.17/rest/repos/repos#create-a-repository-for-the-authenticated-user).
   *
   * @tags gitignore
   * @name GitignoreGetAllTemplates
   * @summary Get all gitignore templates
   * @request GET:/gitignore/templates
   */
  gitignoreGetAllTemplates = (params: RequestParams = {}) =>
    this.http.request<GitignoreGetAllTemplatesData, any>({
      path: `/gitignore/templates`,
      method: "GET",
      format: "json",
      ...params,
    });
  /**
   * @description Get the content of a gitignore template. This endpoint supports the following custom media types. For more information, see "[Media types](https://docs.github.com/enterprise-server@3.17/rest/using-the-rest-api/getting-started-with-the-rest-api#media-types)." - **`application/vnd.github.raw+json`**: Returns the raw .gitignore contents.
   *
   * @tags gitignore
   * @name GitignoreGetTemplate
   * @summary Get a gitignore template
   * @request GET:/gitignore/templates/{name}
   */
  gitignoreGetTemplate = (name: string, params: RequestParams = {}) =>
    this.http.request<GitignoreGetTemplateData, any>({
      path: `/gitignore/templates/${name}`,
      method: "GET",
      format: "json",
      ...params,
    });
}
