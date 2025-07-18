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
  DeleteFaqsIdData,
  DeleteFaqsIdError,
  FaqRequest,
  GetFaqsData,
  GetFaqsError,
  GetFaqsIdData,
  GetFaqsIdError,
  GetFaqsParams,
  PostFaqsData,
  PostFaqsError,
  PutFaqsIdData,
  PutFaqsIdError,
} from "./data-contracts";
import { ContentType, HttpClient, RequestParams } from "./http-client";

export class Faqs<SecurityDataType = unknown> {
  http: HttpClient<SecurityDataType>;

  constructor(http: HttpClient<SecurityDataType>) {
    this.http = http;
  }

  /**
   * No description
   *
   * @tags Faq
   * @name GetFaqs
   * @request GET:/faqs
   * @secure
   */
  getFaqs = (query: GetFaqsParams, params: RequestParams = {}) =>
    this.http.request<GetFaqsData, GetFaqsError>({
      path: `/faqs`,
      method: "GET",
      query: query,
      secure: true,
      format: "json",
      ...params,
    });
  /**
   * No description
   *
   * @tags Faq
   * @name PostFaqs
   * @request POST:/faqs
   * @secure
   */
  postFaqs = (data: FaqRequest, params: RequestParams = {}) =>
    this.http.request<PostFaqsData, PostFaqsError>({
      path: `/faqs`,
      method: "POST",
      body: data,
      secure: true,
      type: ContentType.Json,
      format: "json",
      ...params,
    });
  /**
   * No description
   *
   * @tags Faq
   * @name GetFaqsId
   * @request GET:/faqs/{id}
   * @secure
   */
  getFaqsId = (id: number, params: RequestParams = {}) =>
    this.http.request<GetFaqsIdData, GetFaqsIdError>({
      path: `/faqs/${id}`,
      method: "GET",
      secure: true,
      format: "json",
      ...params,
    });
  /**
   * No description
   *
   * @tags Faq
   * @name PutFaqsId
   * @request PUT:/faqs/{id}
   * @secure
   */
  putFaqsId = (id: number, data: FaqRequest, params: RequestParams = {}) =>
    this.http.request<PutFaqsIdData, PutFaqsIdError>({
      path: `/faqs/${id}`,
      method: "PUT",
      body: data,
      secure: true,
      type: ContentType.Json,
      format: "json",
      ...params,
    });
  /**
   * No description
   *
   * @tags Faq
   * @name DeleteFaqsId
   * @request DELETE:/faqs/{id}
   * @secure
   */
  deleteFaqsId = (id: number, params: RequestParams = {}) =>
    this.http.request<DeleteFaqsIdData, DeleteFaqsIdError>({
      path: `/faqs/${id}`,
      method: "DELETE",
      secure: true,
      format: "json",
      ...params,
    });
}
