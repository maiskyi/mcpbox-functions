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
  ReactionsCreateForTeamDiscussionCommentLegacyData,
  ReactionsCreateForTeamDiscussionCommentLegacyPayload,
  ReactionsCreateForTeamDiscussionLegacyData,
  ReactionsCreateForTeamDiscussionLegacyPayload,
  ReactionsListForTeamDiscussionCommentLegacyData,
  ReactionsListForTeamDiscussionCommentLegacyParams,
  ReactionsListForTeamDiscussionLegacyData,
  ReactionsListForTeamDiscussionLegacyParams,
  TeamsAddMemberLegacyData,
  TeamsAddOrUpdateMembershipForUserLegacyData,
  TeamsAddOrUpdateMembershipForUserLegacyPayload,
  TeamsAddOrUpdateProjectPermissionsLegacyData,
  TeamsAddOrUpdateProjectPermissionsLegacyError,
  TeamsAddOrUpdateProjectPermissionsLegacyPayload,
  TeamsAddOrUpdateRepoPermissionsLegacyData,
  TeamsAddOrUpdateRepoPermissionsLegacyPayload,
  TeamsCheckPermissionsForProjectLegacyData,
  TeamsCheckPermissionsForRepoLegacyData,
  TeamsCreateDiscussionCommentLegacyData,
  TeamsCreateDiscussionCommentLegacyPayload,
  TeamsCreateDiscussionLegacyData,
  TeamsCreateDiscussionLegacyPayload,
  TeamsDeleteDiscussionCommentLegacyData,
  TeamsDeleteDiscussionLegacyData,
  TeamsDeleteLegacyData,
  TeamsGetDiscussionCommentLegacyData,
  TeamsGetDiscussionLegacyData,
  TeamsGetLegacyData,
  TeamsGetMemberLegacyData,
  TeamsGetMembershipForUserLegacyData,
  TeamsListChildLegacyData,
  TeamsListChildLegacyParams,
  TeamsListDiscussionCommentsLegacyData,
  TeamsListDiscussionCommentsLegacyParams,
  TeamsListDiscussionsLegacyData,
  TeamsListDiscussionsLegacyParams,
  TeamsListMembersLegacyData,
  TeamsListMembersLegacyParams,
  TeamsListProjectsLegacyData,
  TeamsListProjectsLegacyParams,
  TeamsListReposLegacyData,
  TeamsListReposLegacyParams,
  TeamsRemoveMemberLegacyData,
  TeamsRemoveMembershipForUserLegacyData,
  TeamsRemoveProjectLegacyData,
  TeamsRemoveRepoLegacyData,
  TeamsUpdateDiscussionCommentLegacyData,
  TeamsUpdateDiscussionCommentLegacyPayload,
  TeamsUpdateDiscussionLegacyData,
  TeamsUpdateDiscussionLegacyPayload,
  TeamsUpdateLegacyData,
  TeamsUpdateLegacyPayload,
  ValidationError,
} from "./data-contracts";
import { ContentType, HttpClient, RequestParams } from "./http-client";

export class Teams<SecurityDataType = unknown> {
  http: HttpClient<SecurityDataType>;

  constructor(http: HttpClient<SecurityDataType>) {
    this.http = http;
  }

  /**
   * @description > [!WARNING] > **Endpoint closing down notice:** This endpoint route is closing down and will be removed from the Teams API. We recommend migrating your existing code to use the [Get a team by name](https://docs.github.com/enterprise-server@3.17/rest/teams/teams#get-a-team-by-name) endpoint.
   *
   * @tags teams
   * @name TeamsGetLegacy
   * @summary Get a team (Legacy)
   * @request GET:/teams/{team_id}
   * @deprecated
   */
  teamsGetLegacy = (teamId: number, params: RequestParams = {}) =>
    this.http.request<TeamsGetLegacyData, BasicError>({
      path: `/teams/${teamId}`,
      method: "GET",
      format: "json",
      ...params,
    });
  /**
   * @description > [!WARNING] > **Endpoint closing down notice:** This endpoint route is closing down and will be removed from the Teams API. We recommend migrating your existing code to use the new [Update a team](https://docs.github.com/enterprise-server@3.17/rest/teams/teams#update-a-team) endpoint. To edit a team, the authenticated user must either be an organization owner or a team maintainer. > [!NOTE] > With nested teams, the `privacy` for parent teams cannot be `secret`.
   *
   * @tags teams
   * @name TeamsUpdateLegacy
   * @summary Update a team (Legacy)
   * @request PATCH:/teams/{team_id}
   * @deprecated
   */
  teamsUpdateLegacy = (
    teamId: number,
    data: TeamsUpdateLegacyPayload,
    params: RequestParams = {},
  ) =>
    this.http.request<TeamsUpdateLegacyData, BasicError | ValidationError>({
      path: `/teams/${teamId}`,
      method: "PATCH",
      body: data,
      type: ContentType.Json,
      format: "json",
      ...params,
    });
  /**
   * @description > [!WARNING] > **Endpoint closing down notice:** This endpoint route is closing down and will be removed from the Teams API. We recommend migrating your existing code to use the new [Delete a team](https://docs.github.com/enterprise-server@3.17/rest/teams/teams#delete-a-team) endpoint. To delete a team, the authenticated user must be an organization owner or team maintainer. If you are an organization owner, deleting a parent team will delete all of its child teams as well.
   *
   * @tags teams
   * @name TeamsDeleteLegacy
   * @summary Delete a team (Legacy)
   * @request DELETE:/teams/{team_id}
   * @deprecated
   */
  teamsDeleteLegacy = (teamId: number, params: RequestParams = {}) =>
    this.http.request<TeamsDeleteLegacyData, BasicError | ValidationError>({
      path: `/teams/${teamId}`,
      method: "DELETE",
      ...params,
    });
  /**
   * @description > [!WARNING] > **Endpoint closing down notice:** This endpoint route is closing down and will be removed from the Teams API. We recommend migrating your existing code to use the new [`List discussions`](https://docs.github.com/enterprise-server@3.17/rest/teams/discussions#list-discussions) endpoint. List all discussions on a team's page. OAuth app tokens and personal access tokens (classic) need the `read:discussion` scope to use this endpoint.
   *
   * @tags teams
   * @name TeamsListDiscussionsLegacy
   * @summary List discussions (Legacy)
   * @request GET:/teams/{team_id}/discussions
   * @deprecated
   */
  teamsListDiscussionsLegacy = (
    { teamId, ...query }: TeamsListDiscussionsLegacyParams,
    params: RequestParams = {},
  ) =>
    this.http.request<TeamsListDiscussionsLegacyData, any>({
      path: `/teams/${teamId}/discussions`,
      method: "GET",
      query: query,
      format: "json",
      ...params,
    });
  /**
   * @description > [!WARNING] > **Endpoint closing down notice:** This endpoint route is closing down and will be removed from the Teams API. We recommend migrating your existing code to use the new [`Create a discussion`](https://docs.github.com/enterprise-server@3.17/rest/teams/discussions#create-a-discussion) endpoint. Creates a new discussion post on a team's page. This endpoint triggers [notifications](https://docs.github.com/enterprise-server@3.17/github/managing-subscriptions-and-notifications-on-github/about-notifications). Creating content too quickly using this endpoint may result in secondary rate limiting. For more information, see "[Rate limits for the API](https://docs.github.com/enterprise-server@3.17/rest/using-the-rest-api/rate-limits-for-the-rest-api#about-secondary-rate-limits)" and "[Best practices for using the REST API](https://docs.github.com/enterprise-server@3.17/rest/guides/best-practices-for-using-the-rest-api)." OAuth app tokens and personal access tokens (classic) need the `write:discussion` scope to use this endpoint.
   *
   * @tags teams
   * @name TeamsCreateDiscussionLegacy
   * @summary Create a discussion (Legacy)
   * @request POST:/teams/{team_id}/discussions
   * @deprecated
   */
  teamsCreateDiscussionLegacy = (
    teamId: number,
    data: TeamsCreateDiscussionLegacyPayload,
    params: RequestParams = {},
  ) =>
    this.http.request<TeamsCreateDiscussionLegacyData, any>({
      path: `/teams/${teamId}/discussions`,
      method: "POST",
      body: data,
      type: ContentType.Json,
      format: "json",
      ...params,
    });
  /**
   * @description > [!WARNING] > **Endpoint closing down notice:** This endpoint route is closing down and will be removed from the Teams API. We recommend migrating your existing code to use the new [Get a discussion](https://docs.github.com/enterprise-server@3.17/rest/teams/discussions#get-a-discussion) endpoint. Get a specific discussion on a team's page. OAuth app tokens and personal access tokens (classic) need the `read:discussion` scope to use this endpoint.
   *
   * @tags teams
   * @name TeamsGetDiscussionLegacy
   * @summary Get a discussion (Legacy)
   * @request GET:/teams/{team_id}/discussions/{discussion_number}
   * @deprecated
   */
  teamsGetDiscussionLegacy = (
    teamId: number,
    discussionNumber: number,
    params: RequestParams = {},
  ) =>
    this.http.request<TeamsGetDiscussionLegacyData, any>({
      path: `/teams/${teamId}/discussions/${discussionNumber}`,
      method: "GET",
      format: "json",
      ...params,
    });
  /**
   * @description > [!WARNING] > **Endpoint closing down notice:** This endpoint route is closing down and will be removed from the Teams API. We recommend migrating your existing code to use the new [Update a discussion](https://docs.github.com/enterprise-server@3.17/rest/teams/discussions#update-a-discussion) endpoint. Edits the title and body text of a discussion post. Only the parameters you provide are updated. OAuth app tokens and personal access tokens (classic) need the `write:discussion` scope to use this endpoint.
   *
   * @tags teams
   * @name TeamsUpdateDiscussionLegacy
   * @summary Update a discussion (Legacy)
   * @request PATCH:/teams/{team_id}/discussions/{discussion_number}
   * @deprecated
   */
  teamsUpdateDiscussionLegacy = (
    teamId: number,
    discussionNumber: number,
    data?: TeamsUpdateDiscussionLegacyPayload,
    params: RequestParams = {},
  ) =>
    this.http.request<TeamsUpdateDiscussionLegacyData, any>({
      path: `/teams/${teamId}/discussions/${discussionNumber}`,
      method: "PATCH",
      body: data,
      type: ContentType.Json,
      format: "json",
      ...params,
    });
  /**
   * @description > [!WARNING] > **Endpoint closing down notice:** This endpoint route is closing down and will be removed from the Teams API. We recommend migrating your existing code to use the new [`Delete a discussion`](https://docs.github.com/enterprise-server@3.17/rest/teams/discussions#delete-a-discussion) endpoint. Delete a discussion from a team's page. OAuth app tokens and personal access tokens (classic) need the `write:discussion` scope to use this endpoint.
   *
   * @tags teams
   * @name TeamsDeleteDiscussionLegacy
   * @summary Delete a discussion (Legacy)
   * @request DELETE:/teams/{team_id}/discussions/{discussion_number}
   * @deprecated
   */
  teamsDeleteDiscussionLegacy = (
    teamId: number,
    discussionNumber: number,
    params: RequestParams = {},
  ) =>
    this.http.request<TeamsDeleteDiscussionLegacyData, any>({
      path: `/teams/${teamId}/discussions/${discussionNumber}`,
      method: "DELETE",
      ...params,
    });
  /**
   * @description > [!WARNING] > **Endpoint closing down notice:** This endpoint route is closing down and will be removed from the Teams API. We recommend migrating your existing code to use the new [List discussion comments](https://docs.github.com/enterprise-server@3.17/rest/teams/discussion-comments#list-discussion-comments) endpoint. List all comments on a team discussion. OAuth app tokens and personal access tokens (classic) need the `read:discussion` scope to use this endpoint.
   *
   * @tags teams
   * @name TeamsListDiscussionCommentsLegacy
   * @summary List discussion comments (Legacy)
   * @request GET:/teams/{team_id}/discussions/{discussion_number}/comments
   * @deprecated
   */
  teamsListDiscussionCommentsLegacy = (
    {
      teamId,
      discussionNumber,
      ...query
    }: TeamsListDiscussionCommentsLegacyParams,
    params: RequestParams = {},
  ) =>
    this.http.request<TeamsListDiscussionCommentsLegacyData, any>({
      path: `/teams/${teamId}/discussions/${discussionNumber}/comments`,
      method: "GET",
      query: query,
      format: "json",
      ...params,
    });
  /**
   * @description > [!WARNING] > **Endpoint closing down notice:** This endpoint route is closing down and will be removed from the Teams API. We recommend migrating your existing code to use the new [Create a discussion comment](https://docs.github.com/enterprise-server@3.17/rest/teams/discussion-comments#create-a-discussion-comment) endpoint. Creates a new comment on a team discussion. This endpoint triggers [notifications](https://docs.github.com/enterprise-server@3.17/github/managing-subscriptions-and-notifications-on-github/about-notifications). Creating content too quickly using this endpoint may result in secondary rate limiting. For more information, see "[Rate limits for the API](https://docs.github.com/enterprise-server@3.17/rest/using-the-rest-api/rate-limits-for-the-rest-api#about-secondary-rate-limits)" and "[Best practices for using the REST API](https://docs.github.com/enterprise-server@3.17/rest/guides/best-practices-for-using-the-rest-api)." OAuth app tokens and personal access tokens (classic) need the `write:discussion` scope to use this endpoint.
   *
   * @tags teams
   * @name TeamsCreateDiscussionCommentLegacy
   * @summary Create a discussion comment (Legacy)
   * @request POST:/teams/{team_id}/discussions/{discussion_number}/comments
   * @deprecated
   */
  teamsCreateDiscussionCommentLegacy = (
    teamId: number,
    discussionNumber: number,
    data: TeamsCreateDiscussionCommentLegacyPayload,
    params: RequestParams = {},
  ) =>
    this.http.request<TeamsCreateDiscussionCommentLegacyData, any>({
      path: `/teams/${teamId}/discussions/${discussionNumber}/comments`,
      method: "POST",
      body: data,
      type: ContentType.Json,
      format: "json",
      ...params,
    });
  /**
   * @description > [!WARNING] > **Endpoint closing down notice:** This endpoint route is closing down and will be removed from the Teams API. We recommend migrating your existing code to use the new [Get a discussion comment](https://docs.github.com/enterprise-server@3.17/rest/teams/discussion-comments#get-a-discussion-comment) endpoint. Get a specific comment on a team discussion. OAuth app tokens and personal access tokens (classic) need the `read:discussion` scope to use this endpoint.
   *
   * @tags teams
   * @name TeamsGetDiscussionCommentLegacy
   * @summary Get a discussion comment (Legacy)
   * @request GET:/teams/{team_id}/discussions/{discussion_number}/comments/{comment_number}
   * @deprecated
   */
  teamsGetDiscussionCommentLegacy = (
    teamId: number,
    discussionNumber: number,
    commentNumber: number,
    params: RequestParams = {},
  ) =>
    this.http.request<TeamsGetDiscussionCommentLegacyData, any>({
      path: `/teams/${teamId}/discussions/${discussionNumber}/comments/${commentNumber}`,
      method: "GET",
      format: "json",
      ...params,
    });
  /**
   * @description > [!WARNING] > **Endpoint closing down notice:** This endpoint route is closing down and will be removed from the Teams API. We recommend migrating your existing code to use the new [Update a discussion comment](https://docs.github.com/enterprise-server@3.17/rest/teams/discussion-comments#update-a-discussion-comment) endpoint. Edits the body text of a discussion comment. OAuth app tokens and personal access tokens (classic) need the `write:discussion` scope to use this endpoint.
   *
   * @tags teams
   * @name TeamsUpdateDiscussionCommentLegacy
   * @summary Update a discussion comment (Legacy)
   * @request PATCH:/teams/{team_id}/discussions/{discussion_number}/comments/{comment_number}
   * @deprecated
   */
  teamsUpdateDiscussionCommentLegacy = (
    teamId: number,
    discussionNumber: number,
    commentNumber: number,
    data: TeamsUpdateDiscussionCommentLegacyPayload,
    params: RequestParams = {},
  ) =>
    this.http.request<TeamsUpdateDiscussionCommentLegacyData, any>({
      path: `/teams/${teamId}/discussions/${discussionNumber}/comments/${commentNumber}`,
      method: "PATCH",
      body: data,
      type: ContentType.Json,
      format: "json",
      ...params,
    });
  /**
   * @description > [!WARNING] > **Endpoint closing down notice:** This endpoint route is closing down and will be removed from the Teams API. We recommend migrating your existing code to use the new [Delete a discussion comment](https://docs.github.com/enterprise-server@3.17/rest/teams/discussion-comments#delete-a-discussion-comment) endpoint. Deletes a comment on a team discussion. OAuth app tokens and personal access tokens (classic) need the `write:discussion` scope to use this endpoint.
   *
   * @tags teams
   * @name TeamsDeleteDiscussionCommentLegacy
   * @summary Delete a discussion comment (Legacy)
   * @request DELETE:/teams/{team_id}/discussions/{discussion_number}/comments/{comment_number}
   * @deprecated
   */
  teamsDeleteDiscussionCommentLegacy = (
    teamId: number,
    discussionNumber: number,
    commentNumber: number,
    params: RequestParams = {},
  ) =>
    this.http.request<TeamsDeleteDiscussionCommentLegacyData, any>({
      path: `/teams/${teamId}/discussions/${discussionNumber}/comments/${commentNumber}`,
      method: "DELETE",
      ...params,
    });
  /**
   * @description > [!WARNING] > **Endpoint closing down notice:** This endpoint route is closing down and will be removed from the Teams API. We recommend migrating your existing code to use the new [`List reactions for a team discussion comment`](https://docs.github.com/enterprise-server@3.17/rest/reactions/reactions#list-reactions-for-a-team-discussion-comment) endpoint. List the reactions to a [team discussion comment](https://docs.github.com/enterprise-server@3.17/rest/teams/discussion-comments#get-a-discussion-comment). OAuth app tokens and personal access tokens (classic) need the `read:discussion` scope to use this endpoint.
   *
   * @tags reactions
   * @name ReactionsListForTeamDiscussionCommentLegacy
   * @summary List reactions for a team discussion comment (Legacy)
   * @request GET:/teams/{team_id}/discussions/{discussion_number}/comments/{comment_number}/reactions
   * @deprecated
   */
  reactionsListForTeamDiscussionCommentLegacy = (
    {
      teamId,
      discussionNumber,
      commentNumber,
      ...query
    }: ReactionsListForTeamDiscussionCommentLegacyParams,
    params: RequestParams = {},
  ) =>
    this.http.request<ReactionsListForTeamDiscussionCommentLegacyData, any>({
      path: `/teams/${teamId}/discussions/${discussionNumber}/comments/${commentNumber}/reactions`,
      method: "GET",
      query: query,
      format: "json",
      ...params,
    });
  /**
   * @description > [!WARNING] > **Endpoint closing down notice:** This endpoint route is closing down and will be removed from the Teams API. We recommend migrating your existing code to use the new "[Create reaction for a team discussion comment](https://docs.github.com/enterprise-server@3.17/rest/reactions/reactions#create-reaction-for-a-team-discussion-comment)" endpoint. Create a reaction to a [team discussion comment](https://docs.github.com/enterprise-server@3.17/rest/teams/discussion-comments#get-a-discussion-comment). A response with an HTTP `200` status means that you already added the reaction type to this team discussion comment. OAuth app tokens and personal access tokens (classic) need the `write:discussion` scope to use this endpoint.
   *
   * @tags reactions
   * @name ReactionsCreateForTeamDiscussionCommentLegacy
   * @summary Create reaction for a team discussion comment (Legacy)
   * @request POST:/teams/{team_id}/discussions/{discussion_number}/comments/{comment_number}/reactions
   * @deprecated
   */
  reactionsCreateForTeamDiscussionCommentLegacy = (
    teamId: number,
    discussionNumber: number,
    commentNumber: number,
    data: ReactionsCreateForTeamDiscussionCommentLegacyPayload,
    params: RequestParams = {},
  ) =>
    this.http.request<ReactionsCreateForTeamDiscussionCommentLegacyData, any>({
      path: `/teams/${teamId}/discussions/${discussionNumber}/comments/${commentNumber}/reactions`,
      method: "POST",
      body: data,
      type: ContentType.Json,
      format: "json",
      ...params,
    });
  /**
   * @description > [!WARNING] > **Endpoint closing down notice:** This endpoint route is closing down and will be removed from the Teams API. We recommend migrating your existing code to use the new [`List reactions for a team discussion`](https://docs.github.com/enterprise-server@3.17/rest/reactions/reactions#list-reactions-for-a-team-discussion) endpoint. List the reactions to a [team discussion](https://docs.github.com/enterprise-server@3.17/rest/teams/discussions#get-a-discussion). OAuth app tokens and personal access tokens (classic) need the `read:discussion` scope to use this endpoint.
   *
   * @tags reactions
   * @name ReactionsListForTeamDiscussionLegacy
   * @summary List reactions for a team discussion (Legacy)
   * @request GET:/teams/{team_id}/discussions/{discussion_number}/reactions
   * @deprecated
   */
  reactionsListForTeamDiscussionLegacy = (
    {
      teamId,
      discussionNumber,
      ...query
    }: ReactionsListForTeamDiscussionLegacyParams,
    params: RequestParams = {},
  ) =>
    this.http.request<ReactionsListForTeamDiscussionLegacyData, any>({
      path: `/teams/${teamId}/discussions/${discussionNumber}/reactions`,
      method: "GET",
      query: query,
      format: "json",
      ...params,
    });
  /**
   * @description > [!WARNING] > **Endpoint closing down notice:** This endpoint route is closing down and will be removed from the Teams API. We recommend migrating your existing code to use the new [`Create reaction for a team discussion`](https://docs.github.com/enterprise-server@3.17/rest/reactions/reactions#create-reaction-for-a-team-discussion) endpoint. Create a reaction to a [team discussion](https://docs.github.com/enterprise-server@3.17/rest/teams/discussions#get-a-discussion). A response with an HTTP `200` status means that you already added the reaction type to this team discussion. OAuth app tokens and personal access tokens (classic) need the `write:discussion` scope to use this endpoint.
   *
   * @tags reactions
   * @name ReactionsCreateForTeamDiscussionLegacy
   * @summary Create reaction for a team discussion (Legacy)
   * @request POST:/teams/{team_id}/discussions/{discussion_number}/reactions
   * @deprecated
   */
  reactionsCreateForTeamDiscussionLegacy = (
    teamId: number,
    discussionNumber: number,
    data: ReactionsCreateForTeamDiscussionLegacyPayload,
    params: RequestParams = {},
  ) =>
    this.http.request<ReactionsCreateForTeamDiscussionLegacyData, any>({
      path: `/teams/${teamId}/discussions/${discussionNumber}/reactions`,
      method: "POST",
      body: data,
      type: ContentType.Json,
      format: "json",
      ...params,
    });
  /**
   * @description > [!WARNING] > **Endpoint closing down notice:** This endpoint route is closing down and will be removed from the Teams API. We recommend migrating your existing code to use the new [`List team members`](https://docs.github.com/enterprise-server@3.17/rest/teams/members#list-team-members) endpoint. Team members will include the members of child teams.
   *
   * @tags teams
   * @name TeamsListMembersLegacy
   * @summary List team members (Legacy)
   * @request GET:/teams/{team_id}/members
   * @deprecated
   */
  teamsListMembersLegacy = (
    { teamId, ...query }: TeamsListMembersLegacyParams,
    params: RequestParams = {},
  ) =>
    this.http.request<TeamsListMembersLegacyData, BasicError>({
      path: `/teams/${teamId}/members`,
      method: "GET",
      query: query,
      format: "json",
      ...params,
    });
  /**
   * @description The "Get team member" endpoint (described below) is closing down. We recommend using the [Get team membership for a user](https://docs.github.com/enterprise-server@3.17/rest/teams/members#get-team-membership-for-a-user) endpoint instead. It allows you to get both active and pending memberships. To list members in a team, the team must be visible to the authenticated user.
   *
   * @tags teams
   * @name TeamsGetMemberLegacy
   * @summary Get team member (Legacy)
   * @request GET:/teams/{team_id}/members/{username}
   * @deprecated
   */
  teamsGetMemberLegacy = (
    teamId: number,
    username: string,
    params: RequestParams = {},
  ) =>
    this.http.request<TeamsGetMemberLegacyData, void>({
      path: `/teams/${teamId}/members/${username}`,
      method: "GET",
      ...params,
    });
  /**
   * @description The "Add team member" endpoint (described below) is closing down. We recommend using the [Add or update team membership for a user](https://docs.github.com/enterprise-server@3.17/rest/teams/members#add-or-update-team-membership-for-a-user) endpoint instead. It allows you to invite new organization members to your teams. Team synchronization is available for organizations using GitHub Enterprise Cloud. For more information, see [GitHub's products](https://docs.github.com/enterprise-server@3.17/github/getting-started-with-github/githubs-products) in the GitHub Help documentation. To add someone to a team, the authenticated user must be an organization owner or a team maintainer in the team they're changing. The person being added to the team must be a member of the team's organization. > [!NOTE] > When you have team synchronization set up for a team with your organization's identity provider (IdP), you will see an error if you attempt to use the API for making changes to the team's membership. If you have access to manage group membership in your IdP, you can manage GitHub Enterprise Server team membership through your identity provider, which automatically adds and removes team members in an organization. For more information, see "[Synchronizing teams between your identity provider and GitHub Enterprise Server](https://docs.github.com/enterprise-server@3.17/articles/synchronizing-teams-between-your-identity-provider-and-github/)." Note that you'll need to set `Content-Length` to zero when calling out to this endpoint. For more information, see "[HTTP method](https://docs.github.com/enterprise-server@3.17/rest/guides/getting-started-with-the-rest-api#http-method)."
   *
   * @tags teams
   * @name TeamsAddMemberLegacy
   * @summary Add team member (Legacy)
   * @request PUT:/teams/{team_id}/members/{username}
   * @deprecated
   */
  teamsAddMemberLegacy = (
    teamId: number,
    username: string,
    params: RequestParams = {},
  ) =>
    this.http.request<TeamsAddMemberLegacyData, BasicError | void>({
      path: `/teams/${teamId}/members/${username}`,
      method: "PUT",
      ...params,
    });
  /**
   * @description The "Remove team member" endpoint (described below) is closing down. We recommend using the [Remove team membership for a user](https://docs.github.com/enterprise-server@3.17/rest/teams/members#remove-team-membership-for-a-user) endpoint instead. It allows you to remove both active and pending memberships. Team synchronization is available for organizations using GitHub Enterprise Cloud. For more information, see [GitHub's products](https://docs.github.com/enterprise-server@3.17/github/getting-started-with-github/githubs-products) in the GitHub Help documentation. To remove a team member, the authenticated user must have 'admin' permissions to the team or be an owner of the org that the team is associated with. Removing a team member does not delete the user, it just removes them from the team. > [!NOTE] > When you have team synchronization set up for a team with your organization's identity provider (IdP), you will see an error if you attempt to use the API for making changes to the team's membership. If you have access to manage group membership in your IdP, you can manage GitHub Enterprise Server team membership through your identity provider, which automatically adds and removes team members in an organization. For more information, see "[Synchronizing teams between your identity provider and GitHub Enterprise Server](https://docs.github.com/enterprise-server@3.17/articles/synchronizing-teams-between-your-identity-provider-and-github/)."
   *
   * @tags teams
   * @name TeamsRemoveMemberLegacy
   * @summary Remove team member (Legacy)
   * @request DELETE:/teams/{team_id}/members/{username}
   * @deprecated
   */
  teamsRemoveMemberLegacy = (
    teamId: number,
    username: string,
    params: RequestParams = {},
  ) =>
    this.http.request<TeamsRemoveMemberLegacyData, void>({
      path: `/teams/${teamId}/members/${username}`,
      method: "DELETE",
      ...params,
    });
  /**
   * @description > [!WARNING] > **Endpoint closing down notice:** This endpoint route is closing down and will be removed from the Teams API. We recommend migrating your existing code to use the new [Get team membership for a user](https://docs.github.com/enterprise-server@3.17/rest/teams/members#get-team-membership-for-a-user) endpoint. Team members will include the members of child teams. To get a user's membership with a team, the team must be visible to the authenticated user. **Note:** The response contains the `state` of the membership and the member's `role`. The `role` for organization owners is set to `maintainer`. For more information about `maintainer` roles, see [Create a team](https://docs.github.com/enterprise-server@3.17/rest/teams/teams#create-a-team).
   *
   * @tags teams
   * @name TeamsGetMembershipForUserLegacy
   * @summary Get team membership for a user (Legacy)
   * @request GET:/teams/{team_id}/memberships/{username}
   * @deprecated
   */
  teamsGetMembershipForUserLegacy = (
    teamId: number,
    username: string,
    params: RequestParams = {},
  ) =>
    this.http.request<TeamsGetMembershipForUserLegacyData, BasicError>({
      path: `/teams/${teamId}/memberships/${username}`,
      method: "GET",
      format: "json",
      ...params,
    });
  /**
   * @description > [!WARNING] > **Endpoint closing down notice:** This endpoint route is closing down and will be removed from the Teams API. We recommend migrating your existing code to use the new [Add or update team membership for a user](https://docs.github.com/enterprise-server@3.17/rest/teams/members#add-or-update-team-membership-for-a-user) endpoint. Team synchronization is available for organizations using GitHub Enterprise Cloud. For more information, see [GitHub's products](https://docs.github.com/enterprise-server@3.17/github/getting-started-with-github/githubs-products) in the GitHub Help documentation. If the user is already a member of the team's organization, this endpoint will add the user to the team. To add a membership between an organization member and a team, the authenticated user must be an organization owner or a team maintainer. > [!NOTE] > When you have team synchronization set up for a team with your organization's identity provider (IdP), you will see an error if you attempt to use the API for making changes to the team's membership. If you have access to manage group membership in your IdP, you can manage GitHub Enterprise Server team membership through your identity provider, which automatically adds and removes team members in an organization. For more information, see "[Synchronizing teams between your identity provider and GitHub Enterprise Server](https://docs.github.com/enterprise-server@3.17/articles/synchronizing-teams-between-your-identity-provider-and-github/)." If the user is unaffiliated with the team's organization, this endpoint will send an invitation to the user via email. This newly-created membership will be in the "pending" state until the user accepts the invitation, at which point the membership will transition to the "active" state and the user will be added as a member of the team. To add a membership between an unaffiliated user and a team, the authenticated user must be an organization owner. If the user is already a member of the team, this endpoint will update the role of the team member's role. To update the membership of a team member, the authenticated user must be an organization owner or a team maintainer.
   *
   * @tags teams
   * @name TeamsAddOrUpdateMembershipForUserLegacy
   * @summary Add or update team membership for a user (Legacy)
   * @request PUT:/teams/{team_id}/memberships/{username}
   * @deprecated
   */
  teamsAddOrUpdateMembershipForUserLegacy = (
    teamId: number,
    username: string,
    data?: TeamsAddOrUpdateMembershipForUserLegacyPayload,
    params: RequestParams = {},
  ) =>
    this.http.request<
      TeamsAddOrUpdateMembershipForUserLegacyData,
      void | BasicError
    >({
      path: `/teams/${teamId}/memberships/${username}`,
      method: "PUT",
      body: data,
      type: ContentType.Json,
      format: "json",
      ...params,
    });
  /**
   * @description > [!WARNING] > **Endpoint closing down notice:** This endpoint route is closing down and will be removed from the Teams API. We recommend migrating your existing code to use the new [Remove team membership for a user](https://docs.github.com/enterprise-server@3.17/rest/teams/members#remove-team-membership-for-a-user) endpoint. Team synchronization is available for organizations using GitHub Enterprise Cloud. For more information, see [GitHub's products](https://docs.github.com/enterprise-server@3.17/github/getting-started-with-github/githubs-products) in the GitHub Help documentation. To remove a membership between a user and a team, the authenticated user must have 'admin' permissions to the team or be an owner of the organization that the team is associated with. Removing team membership does not delete the user, it just removes their membership from the team. > [!NOTE] > When you have team synchronization set up for a team with your organization's identity provider (IdP), you will see an error if you attempt to use the API for making changes to the team's membership. If you have access to manage group membership in your IdP, you can manage GitHub Enterprise Server team membership through your identity provider, which automatically adds and removes team members in an organization. For more information, see "[Synchronizing teams between your identity provider and GitHub Enterprise Server](https://docs.github.com/enterprise-server@3.17/articles/synchronizing-teams-between-your-identity-provider-and-github/)."
   *
   * @tags teams
   * @name TeamsRemoveMembershipForUserLegacy
   * @summary Remove team membership for a user (Legacy)
   * @request DELETE:/teams/{team_id}/memberships/{username}
   * @deprecated
   */
  teamsRemoveMembershipForUserLegacy = (
    teamId: number,
    username: string,
    params: RequestParams = {},
  ) =>
    this.http.request<TeamsRemoveMembershipForUserLegacyData, void>({
      path: `/teams/${teamId}/memberships/${username}`,
      method: "DELETE",
      ...params,
    });
  /**
   * @description > [!WARNING] > **Closing down notice:** Projects (classic) is being deprecated in favor of the new Projects experience. > See the [changelog](https://github.blog/changelog/2024-05-23-sunset-notice-projects-classic/) for more information.
   *
   * @tags teams
   * @name TeamsListProjectsLegacy
   * @summary List team projects (Legacy)
   * @request GET:/teams/{team_id}/projects
   * @deprecated
   */
  teamsListProjectsLegacy = (
    { teamId, ...query }: TeamsListProjectsLegacyParams,
    params: RequestParams = {},
  ) =>
    this.http.request<TeamsListProjectsLegacyData, BasicError>({
      path: `/teams/${teamId}/projects`,
      method: "GET",
      query: query,
      format: "json",
      ...params,
    });
  /**
   * @description > [!WARNING] > **Closing down notice:** Projects (classic) is being deprecated in favor of the new Projects experience. > See the [changelog](https://github.blog/changelog/2024-05-23-sunset-notice-projects-classic/) for more information.
   *
   * @tags teams
   * @name TeamsCheckPermissionsForProjectLegacy
   * @summary Check team permissions for a project (Legacy)
   * @request GET:/teams/{team_id}/projects/{project_id}
   * @deprecated
   */
  teamsCheckPermissionsForProjectLegacy = (
    teamId: number,
    projectId: number,
    params: RequestParams = {},
  ) =>
    this.http.request<TeamsCheckPermissionsForProjectLegacyData, void>({
      path: `/teams/${teamId}/projects/${projectId}`,
      method: "GET",
      format: "json",
      ...params,
    });
  /**
   * @description > [!WARNING] > **Closing down notice:** Projects (classic) is being deprecated in favor of the new Projects experience. > See the [changelog](https://github.blog/changelog/2024-05-23-sunset-notice-projects-classic/) for more information.
   *
   * @tags teams
   * @name TeamsAddOrUpdateProjectPermissionsLegacy
   * @summary Add or update team project permissions (Legacy)
   * @request PUT:/teams/{team_id}/projects/{project_id}
   * @deprecated
   */
  teamsAddOrUpdateProjectPermissionsLegacy = (
    teamId: number,
    projectId: number,
    data?: TeamsAddOrUpdateProjectPermissionsLegacyPayload,
    params: RequestParams = {},
  ) =>
    this.http.request<
      TeamsAddOrUpdateProjectPermissionsLegacyData,
      TeamsAddOrUpdateProjectPermissionsLegacyError
    >({
      path: `/teams/${teamId}/projects/${projectId}`,
      method: "PUT",
      body: data,
      type: ContentType.Json,
      ...params,
    });
  /**
   * @description > [!WARNING] > **Closing down notice:** Projects (classic) is being deprecated in favor of the new Projects experience. > See the [changelog](https://github.blog/changelog/2024-05-23-sunset-notice-projects-classic/) for more information.
   *
   * @tags teams
   * @name TeamsRemoveProjectLegacy
   * @summary Remove a project from a team (Legacy)
   * @request DELETE:/teams/{team_id}/projects/{project_id}
   * @deprecated
   */
  teamsRemoveProjectLegacy = (
    teamId: number,
    projectId: number,
    params: RequestParams = {},
  ) =>
    this.http.request<
      TeamsRemoveProjectLegacyData,
      BasicError | ValidationError
    >({
      path: `/teams/${teamId}/projects/${projectId}`,
      method: "DELETE",
      ...params,
    });
  /**
   * @description > [!WARNING] > **Endpoint closing down notice:** This endpoint route is closing down and will be removed from the Teams API. We recommend migrating your existing code to use the new [List team repositories](https://docs.github.com/enterprise-server@3.17/rest/teams/teams#list-team-repositories) endpoint.
   *
   * @tags teams
   * @name TeamsListReposLegacy
   * @summary List team repositories (Legacy)
   * @request GET:/teams/{team_id}/repos
   * @deprecated
   */
  teamsListReposLegacy = (
    { teamId, ...query }: TeamsListReposLegacyParams,
    params: RequestParams = {},
  ) =>
    this.http.request<TeamsListReposLegacyData, BasicError>({
      path: `/teams/${teamId}/repos`,
      method: "GET",
      query: query,
      format: "json",
      ...params,
    });
  /**
   * @description > [!WARNING] > **Endpoint closing down notice:** This endpoint route is closing down and will be removed from the Teams API. We recommend migrating your existing code to use the new [Check team permissions for a repository](https://docs.github.com/enterprise-server@3.17/rest/teams/teams#check-team-permissions-for-a-repository) endpoint. > [!NOTE] > Repositories inherited through a parent team will also be checked. You can also get information about the specified repository, including what permissions the team grants on it, by passing the following custom [media type](https://docs.github.com/enterprise-server@3.17/rest/using-the-rest-api/getting-started-with-the-rest-api#media-types/) via the `Accept` header:
   *
   * @tags teams
   * @name TeamsCheckPermissionsForRepoLegacy
   * @summary Check team permissions for a repository (Legacy)
   * @request GET:/teams/{team_id}/repos/{owner}/{repo}
   * @deprecated
   */
  teamsCheckPermissionsForRepoLegacy = (
    teamId: number,
    owner: string,
    repo: string,
    params: RequestParams = {},
  ) =>
    this.http.request<TeamsCheckPermissionsForRepoLegacyData, void>({
      path: `/teams/${teamId}/repos/${owner}/${repo}`,
      method: "GET",
      format: "json",
      ...params,
    });
  /**
   * @description > [!WARNING] > **Endpoint closing down notice:** This endpoint route is closing down and will be removed from the Teams API. We recommend migrating your existing code to use the new "[Add or update team repository permissions](https://docs.github.com/enterprise-server@3.17/rest/teams/teams#add-or-update-team-repository-permissions)" endpoint. To add a repository to a team or update the team's permission on a repository, the authenticated user must have admin access to the repository, and must be able to see the team. The repository must be owned by the organization, or a direct fork of a repository owned by the organization. You will get a `422 Unprocessable Entity` status if you attempt to add a repository to a team that is not owned by the organization. Note that, if you choose not to pass any parameters, you'll need to set `Content-Length` to zero when calling out to this endpoint. For more information, see "[HTTP method](https://docs.github.com/enterprise-server@3.17/rest/guides/getting-started-with-the-rest-api#http-method)."
   *
   * @tags teams
   * @name TeamsAddOrUpdateRepoPermissionsLegacy
   * @summary Add or update team repository permissions (Legacy)
   * @request PUT:/teams/{team_id}/repos/{owner}/{repo}
   * @deprecated
   */
  teamsAddOrUpdateRepoPermissionsLegacy = (
    teamId: number,
    owner: string,
    repo: string,
    data?: TeamsAddOrUpdateRepoPermissionsLegacyPayload,
    params: RequestParams = {},
  ) =>
    this.http.request<
      TeamsAddOrUpdateRepoPermissionsLegacyData,
      BasicError | ValidationError
    >({
      path: `/teams/${teamId}/repos/${owner}/${repo}`,
      method: "PUT",
      body: data,
      type: ContentType.Json,
      ...params,
    });
  /**
   * @description > [!WARNING] > **Endpoint closing down notice:** This endpoint route is closing down and will be removed from the Teams API. We recommend migrating your existing code to use the new [Remove a repository from a team](https://docs.github.com/enterprise-server@3.17/rest/teams/teams#remove-a-repository-from-a-team) endpoint. If the authenticated user is an organization owner or a team maintainer, they can remove any repositories from the team. To remove a repository from a team as an organization member, the authenticated user must have admin access to the repository and must be able to see the team. NOTE: This does not delete the repository, it just removes it from the team.
   *
   * @tags teams
   * @name TeamsRemoveRepoLegacy
   * @summary Remove a repository from a team (Legacy)
   * @request DELETE:/teams/{team_id}/repos/{owner}/{repo}
   * @deprecated
   */
  teamsRemoveRepoLegacy = (
    teamId: number,
    owner: string,
    repo: string,
    params: RequestParams = {},
  ) =>
    this.http.request<TeamsRemoveRepoLegacyData, any>({
      path: `/teams/${teamId}/repos/${owner}/${repo}`,
      method: "DELETE",
      ...params,
    });
  /**
   * @description > [!WARNING] > **Endpoint closing down notice:** This endpoint route is closing down and will be removed from the Teams API. We recommend migrating your existing code to use the new [`List child teams`](https://docs.github.com/enterprise-server@3.17/rest/teams/teams#list-child-teams) endpoint.
   *
   * @tags teams
   * @name TeamsListChildLegacy
   * @summary List child teams (Legacy)
   * @request GET:/teams/{team_id}/teams
   * @deprecated
   */
  teamsListChildLegacy = (
    { teamId, ...query }: TeamsListChildLegacyParams,
    params: RequestParams = {},
  ) =>
    this.http.request<TeamsListChildLegacyData, BasicError | ValidationError>({
      path: `/teams/${teamId}/teams`,
      method: "GET",
      query: query,
      format: "json",
      ...params,
    });
}
