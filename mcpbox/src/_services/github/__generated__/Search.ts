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
  SearchCodeData,
  SearchCodeParams,
  SearchCommitsData,
  SearchCommitsParams,
  SearchIssuesAndPullRequestsData,
  SearchIssuesAndPullRequestsParams,
  SearchLabelsData,
  SearchLabelsParams,
  SearchReposData,
  SearchReposParams,
  SearchTopicsData,
  SearchTopicsParams,
  SearchUsersData,
  SearchUsersParams,
  ValidationError,
} from "./data-contracts";
import { HttpClient, RequestParams } from "./http-client";

export class Search<SecurityDataType = unknown> {
  http: HttpClient<SecurityDataType>;

  constructor(http: HttpClient<SecurityDataType>) {
    this.http = http;
  }

  /**
   * @description Searches for query terms inside of a file. This method returns up to 100 results [per page](https://docs.github.com/enterprise-server@3.17/rest/guides/using-pagination-in-the-rest-api). When searching for code, you can get text match metadata for the file **content** and file **path** fields when you pass the `text-match` media type. For more details about how to receive highlighted search results, see [Text match metadata](https://docs.github.com/enterprise-server@3.17/rest/search/search#text-match-metadata). For example, if you want to find the definition of the `addClass` function inside [jQuery](https://github.com/jquery/jquery) repository, your query would look something like this: `q=addClass+in:file+language:js+repo:jquery/jquery` This query searches for the keyword `addClass` within a file's contents. The query limits the search to files where the language is JavaScript in the `jquery/jquery` repository. Considerations for code search: Due to the complexity of searching code, there are a few restrictions on how searches are performed: *   Only the _default branch_ is considered. In most cases, this will be the `master` branch. *   Only files smaller than 384 KB are searchable. *   You must always include at least one search term when searching source code. For example, searching for [`language:go`](https://github.com/search?utf8=%E2%9C%93&q=language%3Ago&type=Code) is not valid, while [`amazing language:go`](https://github.com/search?utf8=%E2%9C%93&q=amazing+language%3Ago&type=Code) is.
   *
   * @tags search
   * @name SearchCode
   * @summary Search code
   * @request GET:/search/code
   */
  searchCode = (query: SearchCodeParams, params: RequestParams = {}) =>
    this.http.request<
      SearchCodeData,
      | BasicError
      | ValidationError
      | {
          code?: string;
          message?: string;
          documentation_url?: string;
        }
    >({
      path: `/search/code`,
      method: "GET",
      query: query,
      format: "json",
      ...params,
    });
  /**
   * @description Find commits via various criteria on the default branch (usually `main`). This method returns up to 100 results [per page](https://docs.github.com/enterprise-server@3.17/rest/guides/using-pagination-in-the-rest-api). When searching for commits, you can get text match metadata for the **message** field when you provide the `text-match` media type. For more details about how to receive highlighted search results, see [Text match metadata](https://docs.github.com/enterprise-server@3.17/rest/search/search#text-match-metadata). For example, if you want to find commits related to CSS in the [octocat/Spoon-Knife](https://github.com/octocat/Spoon-Knife) repository. Your query would look something like this: `q=repo:octocat/Spoon-Knife+css`
   *
   * @tags search
   * @name SearchCommits
   * @summary Search commits
   * @request GET:/search/commits
   */
  searchCommits = (query: SearchCommitsParams, params: RequestParams = {}) =>
    this.http.request<SearchCommitsData, any>({
      path: `/search/commits`,
      method: "GET",
      query: query,
      format: "json",
      ...params,
    });
  /**
   * @description > [!WARNING] > **Notice:** Search for issues and pull requests will be overridden by advanced search on September 4, 2025. > You can read more about this change on [the GitHub blog](https://github.blog/changelog/2025-03-06-github-issues-projects-api-support-for-issues-advanced-search-and-more/).
   *
   * @tags search
   * @name SearchIssuesAndPullRequests
   * @summary Search issues and pull requests
   * @request GET:/search/issues
   * @deprecated
   */
  searchIssuesAndPullRequests = (
    query: SearchIssuesAndPullRequestsParams,
    params: RequestParams = {},
  ) =>
    this.http.request<
      SearchIssuesAndPullRequestsData,
      | BasicError
      | ValidationError
      | {
          code?: string;
          message?: string;
          documentation_url?: string;
        }
    >({
      path: `/search/issues`,
      method: "GET",
      query: query,
      format: "json",
      ...params,
    });
  /**
   * @description Find labels in a repository with names or descriptions that match search keywords. Returns up to 100 results [per page](https://docs.github.com/enterprise-server@3.17/rest/guides/using-pagination-in-the-rest-api). When searching for labels, you can get text match metadata for the label **name** and **description** fields when you pass the `text-match` media type. For more details about how to receive highlighted search results, see [Text match metadata](https://docs.github.com/enterprise-server@3.17/rest/search/search#text-match-metadata). For example, if you want to find labels in the `linguist` repository that match `bug`, `defect`, or `enhancement`. Your query might look like this: `q=bug+defect+enhancement&repository_id=64778136` The labels that best match the query appear first in the search results.
   *
   * @tags search
   * @name SearchLabels
   * @summary Search labels
   * @request GET:/search/labels
   */
  searchLabels = (query: SearchLabelsParams, params: RequestParams = {}) =>
    this.http.request<SearchLabelsData, BasicError | ValidationError>({
      path: `/search/labels`,
      method: "GET",
      query: query,
      format: "json",
      ...params,
    });
  /**
   * @description Find repositories via various criteria. This method returns up to 100 results [per page](https://docs.github.com/enterprise-server@3.17/rest/guides/using-pagination-in-the-rest-api). When searching for repositories, you can get text match metadata for the **name** and **description** fields when you pass the `text-match` media type. For more details about how to receive highlighted search results, see [Text match metadata](https://docs.github.com/enterprise-server@3.17/rest/search/search#text-match-metadata). For example, if you want to search for popular Tetris repositories written in assembly code, your query might look like this: `q=tetris+language:assembly&sort=stars&order=desc` This query searches for repositories with the word `tetris` in the name, the description, or the README. The results are limited to repositories where the primary language is assembly. The results are sorted by stars in descending order, so that the most popular repositories appear first in the search results.
   *
   * @tags search
   * @name SearchRepos
   * @summary Search repositories
   * @request GET:/search/repositories
   */
  searchRepos = (query: SearchReposParams, params: RequestParams = {}) =>
    this.http.request<
      SearchReposData,
      | ValidationError
      | {
          code?: string;
          message?: string;
          documentation_url?: string;
        }
    >({
      path: `/search/repositories`,
      method: "GET",
      query: query,
      format: "json",
      ...params,
    });
  /**
   * @description Find topics via various criteria. Results are sorted by best match. This method returns up to 100 results [per page](https://docs.github.com/enterprise-server@3.17/rest/guides/using-pagination-in-the-rest-api). See "[Searching topics](https://docs.github.com/enterprise-server@3.17/articles/searching-topics/)" for a detailed list of qualifiers. When searching for topics, you can get text match metadata for the topic's **short\_description**, **description**, **name**, or **display\_name** field when you pass the `text-match` media type. For more details about how to receive highlighted search results, see [Text match metadata](https://docs.github.com/enterprise-server@3.17/rest/search/search#text-match-metadata). For example, if you want to search for topics related to Ruby that are featured on https://github.com/topics. Your query might look like this: `q=ruby+is:featured` This query searches for topics with the keyword `ruby` and limits the results to find only topics that are featured. The topics that are the best match for the query appear first in the search results.
   *
   * @tags search
   * @name SearchTopics
   * @summary Search topics
   * @request GET:/search/topics
   */
  searchTopics = (query: SearchTopicsParams, params: RequestParams = {}) =>
    this.http.request<SearchTopicsData, any>({
      path: `/search/topics`,
      method: "GET",
      query: query,
      format: "json",
      ...params,
    });
  /**
   * @description Find users via various criteria. This method returns up to 100 results [per page](https://docs.github.com/enterprise-server@3.17/rest/guides/using-pagination-in-the-rest-api). When searching for users, you can get text match metadata for the issue **login**, public **email**, and **name** fields when you pass the `text-match` media type. For more details about highlighting search results, see [Text match metadata](https://docs.github.com/enterprise-server@3.17/rest/search/search#text-match-metadata). For more details about how to receive highlighted search results, see [Text match metadata](https://docs.github.com/enterprise-server@3.17/rest/search/search#text-match-metadata). For example, if you're looking for a list of popular users, you might try this query: `q=tom+repos:%3E42+followers:%3E1000` This query searches for users with the name `tom`. The results are restricted to users with more than 42 repositories and over 1,000 followers. This endpoint does not accept authentication and will only include publicly visible users. As an alternative, you can use the GraphQL API. The GraphQL API requires authentication and will return private users, including Enterprise Managed Users (EMUs), that you are authorized to view. For more information, see "[GraphQL Queries](https://docs.github.com/enterprise-server@3.17/graphql/reference/queries#search)."
   *
   * @tags search
   * @name SearchUsers
   * @summary Search users
   * @request GET:/search/users
   */
  searchUsers = (query: SearchUsersParams, params: RequestParams = {}) =>
    this.http.request<
      SearchUsersData,
      | ValidationError
      | {
          code?: string;
          message?: string;
          documentation_url?: string;
        }
    >({
      path: `/search/users`,
      method: "GET",
      query: query,
      format: "json",
      ...params,
    });
}
