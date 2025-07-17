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
  GistsCheckIsStarredData,
  GistsCheckIsStarredError,
  GistsCreateCommentData,
  GistsCreateCommentPayload,
  GistsCreateData,
  GistsCreatePayload,
  GistsDeleteCommentData,
  GistsDeleteData,
  GistsForkData,
  GistsGetCommentData,
  GistsGetData,
  GistsGetRevisionData,
  GistsListCommentsData,
  GistsListCommentsParams,
  GistsListCommitsData,
  GistsListCommitsParams,
  GistsListData,
  GistsListForksData,
  GistsListForksParams,
  GistsListParams,
  GistsListPublicData,
  GistsListPublicParams,
  GistsListStarredData,
  GistsListStarredParams,
  GistsStarData,
  GistsUnstarData,
  GistsUpdateCommentData,
  GistsUpdateCommentPayload,
  GistsUpdateData,
  GistsUpdatePayload,
  ValidationError,
} from "./data-contracts";
import { ContentType, HttpClient, RequestParams } from "./http-client";

export class Gists<SecurityDataType = unknown> {
  http: HttpClient<SecurityDataType>;

  constructor(http: HttpClient<SecurityDataType>) {
    this.http = http;
  }

  /**
   * @description Lists the authenticated user's gists or if called anonymously, this endpoint returns all public gists:
   *
   * @tags gists
   * @name GistsList
   * @summary List gists for the authenticated user
   * @request GET:/gists
   */
  gistsList = (query: GistsListParams, params: RequestParams = {}) =>
    this.http.request<GistsListData, BasicError>({
      path: `/gists`,
      method: "GET",
      query: query,
      format: "json",
      ...params,
    });
  /**
   * @description Allows you to add a new gist with one or more files. > [!NOTE] > Don't name your files "gistfile" with a numerical suffix. This is the format of the automatic naming scheme that Gist uses internally.
   *
   * @tags gists
   * @name GistsCreate
   * @summary Create a gist
   * @request POST:/gists
   */
  gistsCreate = (data: GistsCreatePayload, params: RequestParams = {}) =>
    this.http.request<GistsCreateData, BasicError | ValidationError>({
      path: `/gists`,
      method: "POST",
      body: data,
      type: ContentType.Json,
      format: "json",
      ...params,
    });
  /**
   * @description List public gists sorted by most recently updated to least recently updated. Note: With [pagination](https://docs.github.com/enterprise-server@3.17/rest/guides/using-pagination-in-the-rest-api), you can fetch up to 3000 gists. For example, you can fetch 100 pages with 30 gists per page or 30 pages with 100 gists per page.
   *
   * @tags gists
   * @name GistsListPublic
   * @summary List public gists
   * @request GET:/gists/public
   */
  gistsListPublic = (
    query: GistsListPublicParams,
    params: RequestParams = {},
  ) =>
    this.http.request<GistsListPublicData, BasicError | ValidationError>({
      path: `/gists/public`,
      method: "GET",
      query: query,
      format: "json",
      ...params,
    });
  /**
   * @description List the authenticated user's starred gists:
   *
   * @tags gists
   * @name GistsListStarred
   * @summary List starred gists
   * @request GET:/gists/starred
   */
  gistsListStarred = (
    query: GistsListStarredParams,
    params: RequestParams = {},
  ) =>
    this.http.request<GistsListStarredData, BasicError>({
      path: `/gists/starred`,
      method: "GET",
      query: query,
      format: "json",
      ...params,
    });
  /**
   * @description Gets a specified gist. This endpoint supports the following custom media types. For more information, see "[Media types](https://docs.github.com/enterprise-server@3.17/rest/using-the-rest-api/getting-started-with-the-rest-api#media-types)." - **`application/vnd.github.raw+json`**: Returns the raw markdown. This is the default if you do not pass any specific media type. - **`application/vnd.github.base64+json`**: Returns the base64-encoded contents. This can be useful if your gist contains any invalid UTF-8 sequences.
   *
   * @tags gists
   * @name GistsGet
   * @summary Get a gist
   * @request GET:/gists/{gist_id}
   */
  gistsGet = (gistId: string, params: RequestParams = {}) =>
    this.http.request<
      GistsGetData,
      | {
          block?: {
            reason?: string;
            created_at?: string;
            html_url?: string | null;
          };
          message?: string;
          documentation_url?: string;
        }
      | BasicError
    >({
      path: `/gists/${gistId}`,
      method: "GET",
      format: "json",
      ...params,
    });
  /**
   * @description Allows you to update a gist's description and to update, delete, or rename gist files. Files from the previous version of the gist that aren't explicitly changed during an edit are unchanged. At least one of `description` or `files` is required. This endpoint supports the following custom media types. For more information, see "[Media types](https://docs.github.com/enterprise-server@3.17/rest/using-the-rest-api/getting-started-with-the-rest-api#media-types)." - **`application/vnd.github.raw+json`**: Returns the raw markdown. This is the default if you do not pass any specific media type. - **`application/vnd.github.base64+json`**: Returns the base64-encoded contents. This can be useful if your gist contains any invalid UTF-8 sequences.
   *
   * @tags gists
   * @name GistsUpdate
   * @summary Update a gist
   * @request PATCH:/gists/{gist_id}
   */
  gistsUpdate = (
    gistId: string,
    data: GistsUpdatePayload,
    params: RequestParams = {},
  ) =>
    this.http.request<GistsUpdateData, BasicError | ValidationError>({
      path: `/gists/${gistId}`,
      method: "PATCH",
      body: data,
      type: ContentType.Json,
      format: "json",
      ...params,
    });
  /**
   * No description
   *
   * @tags gists
   * @name GistsDelete
   * @summary Delete a gist
   * @request DELETE:/gists/{gist_id}
   */
  gistsDelete = (gistId: string, params: RequestParams = {}) =>
    this.http.request<GistsDeleteData, BasicError>({
      path: `/gists/${gistId}`,
      method: "DELETE",
      ...params,
    });
  /**
   * @description Lists the comments on a gist. This endpoint supports the following custom media types. For more information, see "[Media types](https://docs.github.com/enterprise-server@3.17/rest/using-the-rest-api/getting-started-with-the-rest-api#media-types)." - **`application/vnd.github.raw+json`**: Returns the raw markdown. This is the default if you do not pass any specific media type. - **`application/vnd.github.base64+json`**: Returns the base64-encoded contents. This can be useful if your gist contains any invalid UTF-8 sequences.
   *
   * @tags gists
   * @name GistsListComments
   * @summary List gist comments
   * @request GET:/gists/{gist_id}/comments
   */
  gistsListComments = (
    { gistId, ...query }: GistsListCommentsParams,
    params: RequestParams = {},
  ) =>
    this.http.request<GistsListCommentsData, BasicError>({
      path: `/gists/${gistId}/comments`,
      method: "GET",
      query: query,
      format: "json",
      ...params,
    });
  /**
   * @description Creates a comment on a gist. This endpoint supports the following custom media types. For more information, see "[Media types](https://docs.github.com/enterprise-server@3.17/rest/using-the-rest-api/getting-started-with-the-rest-api#media-types)." - **`application/vnd.github.raw+json`**: Returns the raw markdown. This is the default if you do not pass any specific media type. - **`application/vnd.github.base64+json`**: Returns the base64-encoded contents. This can be useful if your gist contains any invalid UTF-8 sequences.
   *
   * @tags gists
   * @name GistsCreateComment
   * @summary Create a gist comment
   * @request POST:/gists/{gist_id}/comments
   */
  gistsCreateComment = (
    gistId: string,
    data: GistsCreateCommentPayload,
    params: RequestParams = {},
  ) =>
    this.http.request<GistsCreateCommentData, BasicError>({
      path: `/gists/${gistId}/comments`,
      method: "POST",
      body: data,
      type: ContentType.Json,
      format: "json",
      ...params,
    });
  /**
   * @description Gets a comment on a gist. This endpoint supports the following custom media types. For more information, see "[Media types](https://docs.github.com/enterprise-server@3.17/rest/using-the-rest-api/getting-started-with-the-rest-api#media-types)." - **`application/vnd.github.raw+json`**: Returns the raw markdown. This is the default if you do not pass any specific media type. - **`application/vnd.github.base64+json`**: Returns the base64-encoded contents. This can be useful if your gist contains any invalid UTF-8 sequences.
   *
   * @tags gists
   * @name GistsGetComment
   * @summary Get a gist comment
   * @request GET:/gists/{gist_id}/comments/{comment_id}
   */
  gistsGetComment = (
    gistId: string,
    commentId: number,
    params: RequestParams = {},
  ) =>
    this.http.request<
      GistsGetCommentData,
      | {
          block?: {
            reason?: string;
            created_at?: string;
            html_url?: string | null;
          };
          message?: string;
          documentation_url?: string;
        }
      | BasicError
    >({
      path: `/gists/${gistId}/comments/${commentId}`,
      method: "GET",
      format: "json",
      ...params,
    });
  /**
   * @description Updates a comment on a gist. This endpoint supports the following custom media types. For more information, see "[Media types](https://docs.github.com/enterprise-server@3.17/rest/using-the-rest-api/getting-started-with-the-rest-api#media-types)." - **`application/vnd.github.raw+json`**: Returns the raw markdown. This is the default if you do not pass any specific media type. - **`application/vnd.github.base64+json`**: Returns the base64-encoded contents. This can be useful if your gist contains any invalid UTF-8 sequences.
   *
   * @tags gists
   * @name GistsUpdateComment
   * @summary Update a gist comment
   * @request PATCH:/gists/{gist_id}/comments/{comment_id}
   */
  gistsUpdateComment = (
    gistId: string,
    commentId: number,
    data: GistsUpdateCommentPayload,
    params: RequestParams = {},
  ) =>
    this.http.request<GistsUpdateCommentData, BasicError>({
      path: `/gists/${gistId}/comments/${commentId}`,
      method: "PATCH",
      body: data,
      type: ContentType.Json,
      format: "json",
      ...params,
    });
  /**
   * No description
   *
   * @tags gists
   * @name GistsDeleteComment
   * @summary Delete a gist comment
   * @request DELETE:/gists/{gist_id}/comments/{comment_id}
   */
  gistsDeleteComment = (
    gistId: string,
    commentId: number,
    params: RequestParams = {},
  ) =>
    this.http.request<GistsDeleteCommentData, BasicError>({
      path: `/gists/${gistId}/comments/${commentId}`,
      method: "DELETE",
      ...params,
    });
  /**
   * No description
   *
   * @tags gists
   * @name GistsListCommits
   * @summary List gist commits
   * @request GET:/gists/{gist_id}/commits
   */
  gistsListCommits = (
    { gistId, ...query }: GistsListCommitsParams,
    params: RequestParams = {},
  ) =>
    this.http.request<GistsListCommitsData, BasicError>({
      path: `/gists/${gistId}/commits`,
      method: "GET",
      query: query,
      format: "json",
      ...params,
    });
  /**
   * No description
   *
   * @tags gists
   * @name GistsListForks
   * @summary List gist forks
   * @request GET:/gists/{gist_id}/forks
   */
  gistsListForks = (
    { gistId, ...query }: GistsListForksParams,
    params: RequestParams = {},
  ) =>
    this.http.request<GistsListForksData, BasicError>({
      path: `/gists/${gistId}/forks`,
      method: "GET",
      query: query,
      format: "json",
      ...params,
    });
  /**
   * No description
   *
   * @tags gists
   * @name GistsFork
   * @summary Fork a gist
   * @request POST:/gists/{gist_id}/forks
   */
  gistsFork = (gistId: string, params: RequestParams = {}) =>
    this.http.request<GistsForkData, BasicError | ValidationError>({
      path: `/gists/${gistId}/forks`,
      method: "POST",
      format: "json",
      ...params,
    });
  /**
   * No description
   *
   * @tags gists
   * @name GistsCheckIsStarred
   * @summary Check if a gist is starred
   * @request GET:/gists/{gist_id}/star
   */
  gistsCheckIsStarred = (gistId: string, params: RequestParams = {}) =>
    this.http.request<GistsCheckIsStarredData, GistsCheckIsStarredError>({
      path: `/gists/${gistId}/star`,
      method: "GET",
      ...params,
    });
  /**
   * @description Note that you'll need to set `Content-Length` to zero when calling out to this endpoint. For more information, see "[HTTP method](https://docs.github.com/enterprise-server@3.17/rest/guides/getting-started-with-the-rest-api#http-method)."
   *
   * @tags gists
   * @name GistsStar
   * @summary Star a gist
   * @request PUT:/gists/{gist_id}/star
   */
  gistsStar = (gistId: string, params: RequestParams = {}) =>
    this.http.request<GistsStarData, BasicError>({
      path: `/gists/${gistId}/star`,
      method: "PUT",
      ...params,
    });
  /**
   * No description
   *
   * @tags gists
   * @name GistsUnstar
   * @summary Unstar a gist
   * @request DELETE:/gists/{gist_id}/star
   */
  gistsUnstar = (gistId: string, params: RequestParams = {}) =>
    this.http.request<GistsUnstarData, BasicError>({
      path: `/gists/${gistId}/star`,
      method: "DELETE",
      ...params,
    });
  /**
   * @description Gets a specified gist revision. This endpoint supports the following custom media types. For more information, see "[Media types](https://docs.github.com/enterprise-server@3.17/rest/using-the-rest-api/getting-started-with-the-rest-api#media-types)." - **`application/vnd.github.raw+json`**: Returns the raw markdown. This is the default if you do not pass any specific media type. - **`application/vnd.github.base64+json`**: Returns the base64-encoded contents. This can be useful if your gist contains any invalid UTF-8 sequences.
   *
   * @tags gists
   * @name GistsGetRevision
   * @summary Get a gist revision
   * @request GET:/gists/{gist_id}/{sha}
   */
  gistsGetRevision = (
    gistId: string,
    sha: string,
    params: RequestParams = {},
  ) =>
    this.http.request<GistsGetRevisionData, BasicError | ValidationError>({
      path: `/gists/${gistId}/${sha}`,
      method: "GET",
      format: "json",
      ...params,
    });
}
