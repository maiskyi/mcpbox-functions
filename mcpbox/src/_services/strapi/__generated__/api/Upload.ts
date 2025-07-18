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
  FilesDeleteData,
  FilesDetailData,
  FilesListData,
  UploadCreateData,
  UploadCreatePayload,
} from "./data-contracts";
import { ContentType, HttpClient, RequestParams } from "./http-client";

export class Upload<SecurityDataType = unknown> {
  http: HttpClient<SecurityDataType>;

  constructor(http: HttpClient<SecurityDataType>) {
    this.http = http;
  }

  /**
   * @description Upload files
   *
   * @tags Upload - File
   * @name UploadCreate
   * @request POST:/upload
   * @secure
   */
  uploadCreate = (data: UploadCreatePayload, params: RequestParams = {}) =>
    this.http.request<UploadCreateData, any>({
      path: `/upload`,
      method: "POST",
      body: data,
      secure: true,
      type: ContentType.FormData,
      format: "json",
      ...params,
    });
  /**
   * No description
   *
   * @tags Upload - File
   * @name FilesList
   * @request GET:/upload/files
   * @secure
   */
  filesList = (params: RequestParams = {}) =>
    this.http.request<FilesListData, any>({
      path: `/upload/files`,
      method: "GET",
      secure: true,
      format: "json",
      ...params,
    });
  /**
   * No description
   *
   * @tags Upload - File
   * @name FilesDetail
   * @request GET:/upload/files/{id}
   * @secure
   */
  filesDetail = (id: string, params: RequestParams = {}) =>
    this.http.request<FilesDetailData, any>({
      path: `/upload/files/${id}`,
      method: "GET",
      secure: true,
      format: "json",
      ...params,
    });
  /**
   * No description
   *
   * @tags Upload - File
   * @name FilesDelete
   * @request DELETE:/upload/files/{id}
   * @secure
   */
  filesDelete = (id: string, params: RequestParams = {}) =>
    this.http.request<FilesDeleteData, any>({
      path: `/upload/files/${id}`,
      method: "DELETE",
      secure: true,
      format: "json",
      ...params,
    });
}
