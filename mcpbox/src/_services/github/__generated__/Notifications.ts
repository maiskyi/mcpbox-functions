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
  ActivityDeleteThreadSubscriptionData,
  ActivityGetThreadData,
  ActivityGetThreadSubscriptionForAuthenticatedUserData,
  ActivityListNotificationsForAuthenticatedUserData,
  ActivityListNotificationsForAuthenticatedUserParams,
  ActivityMarkNotificationsAsReadData,
  ActivityMarkNotificationsAsReadPayload,
  ActivityMarkThreadAsDoneData,
  ActivityMarkThreadAsReadData,
  ActivitySetThreadSubscriptionData,
  ActivitySetThreadSubscriptionPayload,
  BasicError,
  ValidationError,
} from "./data-contracts";
import { ContentType, HttpClient, RequestParams } from "./http-client";

export class Notifications<SecurityDataType = unknown> {
  http: HttpClient<SecurityDataType>;

  constructor(http: HttpClient<SecurityDataType>) {
    this.http = http;
  }

  /**
   * @description List all notifications for the current user, sorted by most recently updated.
   *
   * @tags activity
   * @name ActivityListNotificationsForAuthenticatedUser
   * @summary List notifications for the authenticated user
   * @request GET:/notifications
   */
  activityListNotificationsForAuthenticatedUser = (
    query: ActivityListNotificationsForAuthenticatedUserParams,
    params: RequestParams = {},
  ) =>
    this.http.request<
      ActivityListNotificationsForAuthenticatedUserData,
      BasicError | ValidationError
    >({
      path: `/notifications`,
      method: "GET",
      query: query,
      format: "json",
      ...params,
    });
  /**
   * @description Marks all notifications as "read" for the current user. If the number of notifications is too large to complete in one request, you will receive a `202 Accepted` status and GitHub Enterprise Server will run an asynchronous process to mark notifications as "read." To check whether any "unread" notifications remain, you can use the [List notifications for the authenticated user](https://docs.github.com/enterprise-server@3.17/rest/activity/notifications#list-notifications-for-the-authenticated-user) endpoint and pass the query parameter `all=false`.
   *
   * @tags activity
   * @name ActivityMarkNotificationsAsRead
   * @summary Mark notifications as read
   * @request PUT:/notifications
   */
  activityMarkNotificationsAsRead = (
    data?: ActivityMarkNotificationsAsReadPayload,
    params: RequestParams = {},
  ) =>
    this.http.request<ActivityMarkNotificationsAsReadData, BasicError>({
      path: `/notifications`,
      method: "PUT",
      body: data,
      type: ContentType.Json,
      format: "json",
      ...params,
    });
  /**
   * @description Gets information about a notification thread.
   *
   * @tags activity
   * @name ActivityGetThread
   * @summary Get a thread
   * @request GET:/notifications/threads/{thread_id}
   */
  activityGetThread = (threadId: number, params: RequestParams = {}) =>
    this.http.request<ActivityGetThreadData, BasicError>({
      path: `/notifications/threads/${threadId}`,
      method: "GET",
      format: "json",
      ...params,
    });
  /**
   * @description Marks a thread as "read." Marking a thread as "read" is equivalent to clicking a notification in your notification inbox on GitHub Enterprise Server: https://github.com/notifications.
   *
   * @tags activity
   * @name ActivityMarkThreadAsRead
   * @summary Mark a thread as read
   * @request PATCH:/notifications/threads/{thread_id}
   */
  activityMarkThreadAsRead = (threadId: number, params: RequestParams = {}) =>
    this.http.request<ActivityMarkThreadAsReadData, BasicError>({
      path: `/notifications/threads/${threadId}`,
      method: "PATCH",
      ...params,
    });
  /**
   * @description Marks a thread as "done." Marking a thread as "done" is equivalent to marking a notification in your notification inbox on GitHub Enterprise Server as done: https://github.com/notifications.
   *
   * @tags activity
   * @name ActivityMarkThreadAsDone
   * @summary Mark a thread as done
   * @request DELETE:/notifications/threads/{thread_id}
   */
  activityMarkThreadAsDone = (threadId: number, params: RequestParams = {}) =>
    this.http.request<ActivityMarkThreadAsDoneData, any>({
      path: `/notifications/threads/${threadId}`,
      method: "DELETE",
      ...params,
    });
  /**
   * @description This checks to see if the current user is subscribed to a thread. You can also [get a repository subscription](https://docs.github.com/enterprise-server@3.17/rest/activity/watching#get-a-repository-subscription). Note that subscriptions are only generated if a user is participating in a conversation--for example, they've replied to the thread, were **@mentioned**, or manually subscribe to a thread.
   *
   * @tags activity
   * @name ActivityGetThreadSubscriptionForAuthenticatedUser
   * @summary Get a thread subscription for the authenticated user
   * @request GET:/notifications/threads/{thread_id}/subscription
   */
  activityGetThreadSubscriptionForAuthenticatedUser = (
    threadId: number,
    params: RequestParams = {},
  ) =>
    this.http.request<
      ActivityGetThreadSubscriptionForAuthenticatedUserData,
      BasicError
    >({
      path: `/notifications/threads/${threadId}/subscription`,
      method: "GET",
      format: "json",
      ...params,
    });
  /**
   * @description If you are watching a repository, you receive notifications for all threads by default. Use this endpoint to ignore future notifications for threads until you comment on the thread or get an **@mention**. You can also use this endpoint to subscribe to threads that you are currently not receiving notifications for or to subscribed to threads that you have previously ignored. Unsubscribing from a conversation in a repository that you are not watching is functionally equivalent to the [Delete a thread subscription](https://docs.github.com/enterprise-server@3.17/rest/activity/notifications#delete-a-thread-subscription) endpoint.
   *
   * @tags activity
   * @name ActivitySetThreadSubscription
   * @summary Set a thread subscription
   * @request PUT:/notifications/threads/{thread_id}/subscription
   */
  activitySetThreadSubscription = (
    threadId: number,
    data?: ActivitySetThreadSubscriptionPayload,
    params: RequestParams = {},
  ) =>
    this.http.request<ActivitySetThreadSubscriptionData, BasicError>({
      path: `/notifications/threads/${threadId}/subscription`,
      method: "PUT",
      body: data,
      type: ContentType.Json,
      format: "json",
      ...params,
    });
  /**
   * @description Mutes all future notifications for a conversation until you comment on the thread or get an **@mention**. If you are watching the repository of the thread, you will still receive notifications. To ignore future notifications for a repository you are watching, use the [Set a thread subscription](https://docs.github.com/enterprise-server@3.17/rest/activity/notifications#set-a-thread-subscription) endpoint and set `ignore` to `true`.
   *
   * @tags activity
   * @name ActivityDeleteThreadSubscription
   * @summary Delete a thread subscription
   * @request DELETE:/notifications/threads/{thread_id}/subscription
   */
  activityDeleteThreadSubscription = (
    threadId: number,
    params: RequestParams = {},
  ) =>
    this.http.request<ActivityDeleteThreadSubscriptionData, BasicError>({
      path: `/notifications/threads/${threadId}/subscription`,
      method: "DELETE",
      ...params,
    });
}
