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
  MarkdownRenderData,
  MarkdownRenderPayload,
  MarkdownRenderRawData,
  MarkdownRenderRawPayload,
} from "./data-contracts";
import { ContentType, HttpClient, RequestParams } from "./http-client";

export class Markdown<SecurityDataType = unknown> {
  http: HttpClient<SecurityDataType>;

  constructor(http: HttpClient<SecurityDataType>) {
    this.http = http;
  }

  /**
   * @description Depending on what is rendered in the Markdown, you may need to provide additional token scopes for labels, such as `issues:read` or `pull_requests:read`.
   *
   * @tags markdown
   * @name MarkdownRender
   * @summary Render a Markdown document
   * @request POST:/markdown
   */
  markdownRender = (data: MarkdownRenderPayload, params: RequestParams = {}) =>
    this.http.request<MarkdownRenderData, any>({
      path: `/markdown`,
      method: "POST",
      body: data,
      type: ContentType.Json,
      ...params,
    });
  /**
   * @description You must send Markdown as plain text (using a `Content-Type` header of `text/plain` or `text/x-markdown`) to this endpoint, rather than using JSON format. In raw mode, [GitHub Flavored Markdown](https://github.github.com/gfm/) is not supported and Markdown will be rendered in plain format like a README.md file. Markdown content must be 400 KB or less.
   *
   * @tags markdown
   * @name MarkdownRenderRaw
   * @summary Render a Markdown document in raw mode
   * @request POST:/markdown/raw
   */
  markdownRenderRaw = (
    data?: MarkdownRenderRawPayload,
    params: RequestParams = {},
  ) =>
    this.http.request<MarkdownRenderRawData, any>({
      path: `/markdown/raw`,
      method: "POST",
      body: data,
      type: ContentType.Text,
      ...params,
    });
}
