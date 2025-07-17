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
  ProjectsAddCollaboratorData,
  ProjectsAddCollaboratorPayload,
  ProjectsCreateCardData,
  ProjectsCreateCardError,
  ProjectsCreateCardPayload,
  ProjectsCreateColumnData,
  ProjectsCreateColumnPayload,
  ProjectsDeleteCardData,
  ProjectsDeleteCardError,
  ProjectsDeleteColumnData,
  ProjectsDeleteData,
  ProjectsDeleteError,
  ProjectsGetCardData,
  ProjectsGetColumnData,
  ProjectsGetData,
  ProjectsGetPermissionForUserData,
  ProjectsListCardsData,
  ProjectsListCardsParams,
  ProjectsListCollaboratorsData,
  ProjectsListCollaboratorsParams,
  ProjectsListColumnsData,
  ProjectsListColumnsParams,
  ProjectsMoveCardData,
  ProjectsMoveCardError,
  ProjectsMoveCardPayload,
  ProjectsMoveColumnData,
  ProjectsMoveColumnPayload,
  ProjectsRemoveCollaboratorData,
  ProjectsUpdateCardData,
  ProjectsUpdateCardPayload,
  ProjectsUpdateColumnData,
  ProjectsUpdateColumnPayload,
  ProjectsUpdateData,
  ProjectsUpdateError,
  ProjectsUpdatePayload,
  ValidationError,
  ValidationErrorSimple,
} from "./data-contracts";
import { ContentType, HttpClient, RequestParams } from "./http-client";

export class Projects<SecurityDataType = unknown> {
  http: HttpClient<SecurityDataType>;

  constructor(http: HttpClient<SecurityDataType>) {
    this.http = http;
  }

  /**
   * @description > [!WARNING] > **Closing down notice:** Projects (classic) is being deprecated in favor of the new Projects experience. > See the [changelog](https://github.blog/changelog/2024-05-23-sunset-notice-projects-classic/) for more information.
   *
   * @tags projects
   * @name ProjectsGetCard
   * @summary Get a project card
   * @request GET:/projects/columns/cards/{card_id}
   * @deprecated
   */
  projectsGetCard = (cardId: number, params: RequestParams = {}) =>
    this.http.request<ProjectsGetCardData, BasicError>({
      path: `/projects/columns/cards/${cardId}`,
      method: "GET",
      format: "json",
      ...params,
    });
  /**
   * @description > [!WARNING] > **Closing down notice:** Projects (classic) is being deprecated in favor of the new Projects experience. > See the [changelog](https://github.blog/changelog/2024-05-23-sunset-notice-projects-classic/) for more information.
   *
   * @tags projects
   * @name ProjectsUpdateCard
   * @summary Update an existing project card
   * @request PATCH:/projects/columns/cards/{card_id}
   * @deprecated
   */
  projectsUpdateCard = (
    cardId: number,
    data?: ProjectsUpdateCardPayload,
    params: RequestParams = {},
  ) =>
    this.http.request<
      ProjectsUpdateCardData,
      BasicError | ValidationErrorSimple
    >({
      path: `/projects/columns/cards/${cardId}`,
      method: "PATCH",
      body: data,
      type: ContentType.Json,
      format: "json",
      ...params,
    });
  /**
   * @description > [!WARNING] > **Closing down notice:** Projects (classic) is being deprecated in favor of the new Projects experience. > See the [changelog](https://github.blog/changelog/2024-05-23-sunset-notice-projects-classic/) for more information.
   *
   * @tags projects
   * @name ProjectsDeleteCard
   * @summary Delete a project card
   * @request DELETE:/projects/columns/cards/{card_id}
   * @deprecated
   */
  projectsDeleteCard = (cardId: number, params: RequestParams = {}) =>
    this.http.request<ProjectsDeleteCardData, ProjectsDeleteCardError>({
      path: `/projects/columns/cards/${cardId}`,
      method: "DELETE",
      ...params,
    });
  /**
   * @description > [!WARNING] > **Closing down notice:** Projects (classic) is being deprecated in favor of the new Projects experience. > See the [changelog](https://github.blog/changelog/2024-05-23-sunset-notice-projects-classic/) for more information.
   *
   * @tags projects
   * @name ProjectsMoveCard
   * @summary Move a project card
   * @request POST:/projects/columns/cards/{card_id}/moves
   * @deprecated
   */
  projectsMoveCard = (
    cardId: number,
    data: ProjectsMoveCardPayload,
    params: RequestParams = {},
  ) =>
    this.http.request<ProjectsMoveCardData, ProjectsMoveCardError>({
      path: `/projects/columns/cards/${cardId}/moves`,
      method: "POST",
      body: data,
      type: ContentType.Json,
      format: "json",
      ...params,
    });
  /**
   * @description > [!WARNING] > **Closing down notice:** Projects (classic) is being deprecated in favor of the new Projects experience. > See the [changelog](https://github.blog/changelog/2024-05-23-sunset-notice-projects-classic/) for more information.
   *
   * @tags projects
   * @name ProjectsGetColumn
   * @summary Get a project column
   * @request GET:/projects/columns/{column_id}
   * @deprecated
   */
  projectsGetColumn = (columnId: number, params: RequestParams = {}) =>
    this.http.request<ProjectsGetColumnData, BasicError>({
      path: `/projects/columns/${columnId}`,
      method: "GET",
      format: "json",
      ...params,
    });
  /**
   * @description > [!WARNING] > **Closing down notice:** Projects (classic) is being deprecated in favor of the new Projects experience. > See the [changelog](https://github.blog/changelog/2024-05-23-sunset-notice-projects-classic/) for more information.
   *
   * @tags projects
   * @name ProjectsUpdateColumn
   * @summary Update an existing project column
   * @request PATCH:/projects/columns/{column_id}
   * @deprecated
   */
  projectsUpdateColumn = (
    columnId: number,
    data: ProjectsUpdateColumnPayload,
    params: RequestParams = {},
  ) =>
    this.http.request<ProjectsUpdateColumnData, BasicError>({
      path: `/projects/columns/${columnId}`,
      method: "PATCH",
      body: data,
      type: ContentType.Json,
      format: "json",
      ...params,
    });
  /**
   * @description > [!WARNING] > **Closing down notice:** Projects (classic) is being deprecated in favor of the new Projects experience. > See the [changelog](https://github.blog/changelog/2024-05-23-sunset-notice-projects-classic/) for more information.
   *
   * @tags projects
   * @name ProjectsDeleteColumn
   * @summary Delete a project column
   * @request DELETE:/projects/columns/{column_id}
   * @deprecated
   */
  projectsDeleteColumn = (columnId: number, params: RequestParams = {}) =>
    this.http.request<ProjectsDeleteColumnData, BasicError>({
      path: `/projects/columns/${columnId}`,
      method: "DELETE",
      ...params,
    });
  /**
   * @description > [!WARNING] > **Closing down notice:** Projects (classic) is being deprecated in favor of the new Projects experience. > See the [changelog](https://github.blog/changelog/2024-05-23-sunset-notice-projects-classic/) for more information.
   *
   * @tags projects
   * @name ProjectsListCards
   * @summary List project cards
   * @request GET:/projects/columns/{column_id}/cards
   * @deprecated
   */
  projectsListCards = (
    { columnId, ...query }: ProjectsListCardsParams,
    params: RequestParams = {},
  ) =>
    this.http.request<ProjectsListCardsData, BasicError>({
      path: `/projects/columns/${columnId}/cards`,
      method: "GET",
      query: query,
      format: "json",
      ...params,
    });
  /**
   * @description > [!WARNING] > **Closing down notice:** Projects (classic) is being deprecated in favor of the new Projects experience. > See the [changelog](https://github.blog/changelog/2024-05-23-sunset-notice-projects-classic/) for more information.
   *
   * @tags projects
   * @name ProjectsCreateCard
   * @summary Create a project card
   * @request POST:/projects/columns/{column_id}/cards
   * @deprecated
   */
  projectsCreateCard = (
    columnId: number,
    data: ProjectsCreateCardPayload,
    params: RequestParams = {},
  ) =>
    this.http.request<ProjectsCreateCardData, ProjectsCreateCardError>({
      path: `/projects/columns/${columnId}/cards`,
      method: "POST",
      body: data,
      type: ContentType.Json,
      format: "json",
      ...params,
    });
  /**
   * @description > [!WARNING] > **Closing down notice:** Projects (classic) is being deprecated in favor of the new Projects experience. > See the [changelog](https://github.blog/changelog/2024-05-23-sunset-notice-projects-classic/) for more information.
   *
   * @tags projects
   * @name ProjectsMoveColumn
   * @summary Move a project column
   * @request POST:/projects/columns/{column_id}/moves
   * @deprecated
   */
  projectsMoveColumn = (
    columnId: number,
    data: ProjectsMoveColumnPayload,
    params: RequestParams = {},
  ) =>
    this.http.request<
      ProjectsMoveColumnData,
      BasicError | ValidationErrorSimple
    >({
      path: `/projects/columns/${columnId}/moves`,
      method: "POST",
      body: data,
      type: ContentType.Json,
      format: "json",
      ...params,
    });
  /**
   * @description > [!WARNING] > **Closing down notice:** Projects (classic) is being deprecated in favor of the new Projects experience. > See the [changelog](https://github.blog/changelog/2024-05-23-sunset-notice-projects-classic/) for more information.
   *
   * @tags projects
   * @name ProjectsGet
   * @summary Get a project
   * @request GET:/projects/{project_id}
   * @deprecated
   */
  projectsGet = (projectId: number, params: RequestParams = {}) =>
    this.http.request<ProjectsGetData, BasicError>({
      path: `/projects/${projectId}`,
      method: "GET",
      format: "json",
      ...params,
    });
  /**
   * @description > [!WARNING] > **Closing down notice:** Projects (classic) is being deprecated in favor of the new Projects experience. > See the [changelog](https://github.blog/changelog/2024-05-23-sunset-notice-projects-classic/) for more information.
   *
   * @tags projects
   * @name ProjectsUpdate
   * @summary Update a project
   * @request PATCH:/projects/{project_id}
   * @deprecated
   */
  projectsUpdate = (
    projectId: number,
    data?: ProjectsUpdatePayload,
    params: RequestParams = {},
  ) =>
    this.http.request<ProjectsUpdateData, ProjectsUpdateError>({
      path: `/projects/${projectId}`,
      method: "PATCH",
      body: data,
      type: ContentType.Json,
      format: "json",
      ...params,
    });
  /**
   * @description > [!WARNING] > **Closing down notice:** Projects (classic) is being deprecated in favor of the new Projects experience. > See the [changelog](https://github.blog/changelog/2024-05-23-sunset-notice-projects-classic/) for more information.
   *
   * @tags projects
   * @name ProjectsDelete
   * @summary Delete a project
   * @request DELETE:/projects/{project_id}
   * @deprecated
   */
  projectsDelete = (projectId: number, params: RequestParams = {}) =>
    this.http.request<ProjectsDeleteData, ProjectsDeleteError>({
      path: `/projects/${projectId}`,
      method: "DELETE",
      ...params,
    });
  /**
   * @description > [!WARNING] > **Closing down notice:** Projects (classic) is being deprecated in favor of the new Projects experience. > See the [changelog](https://github.blog/changelog/2024-05-23-sunset-notice-projects-classic/) for more information.
   *
   * @tags projects
   * @name ProjectsListCollaborators
   * @summary List project collaborators
   * @request GET:/projects/{project_id}/collaborators
   * @deprecated
   */
  projectsListCollaborators = (
    { projectId, ...query }: ProjectsListCollaboratorsParams,
    params: RequestParams = {},
  ) =>
    this.http.request<
      ProjectsListCollaboratorsData,
      BasicError | ValidationError
    >({
      path: `/projects/${projectId}/collaborators`,
      method: "GET",
      query: query,
      format: "json",
      ...params,
    });
  /**
   * @description > [!WARNING] > **Closing down notice:** Projects (classic) is being deprecated in favor of the new Projects experience. > See the [changelog](https://github.blog/changelog/2024-05-23-sunset-notice-projects-classic/) for more information.
   *
   * @tags projects
   * @name ProjectsAddCollaborator
   * @summary Add project collaborator
   * @request PUT:/projects/{project_id}/collaborators/{username}
   * @deprecated
   */
  projectsAddCollaborator = (
    projectId: number,
    username: string,
    data?: ProjectsAddCollaboratorPayload,
    params: RequestParams = {},
  ) =>
    this.http.request<
      ProjectsAddCollaboratorData,
      BasicError | ValidationError
    >({
      path: `/projects/${projectId}/collaborators/${username}`,
      method: "PUT",
      body: data,
      type: ContentType.Json,
      ...params,
    });
  /**
   * @description > [!WARNING] > **Closing down notice:** Projects (classic) is being deprecated in favor of the new Projects experience. > See the [changelog](https://github.blog/changelog/2024-05-23-sunset-notice-projects-classic/) for more information.
   *
   * @tags projects
   * @name ProjectsRemoveCollaborator
   * @summary Remove user as a collaborator
   * @request DELETE:/projects/{project_id}/collaborators/{username}
   * @deprecated
   */
  projectsRemoveCollaborator = (
    projectId: number,
    username: string,
    params: RequestParams = {},
  ) =>
    this.http.request<
      ProjectsRemoveCollaboratorData,
      BasicError | ValidationError
    >({
      path: `/projects/${projectId}/collaborators/${username}`,
      method: "DELETE",
      ...params,
    });
  /**
   * @description > [!WARNING] > **Closing down notice:** Projects (classic) is being deprecated in favor of the new Projects experience. > See the [changelog](https://github.blog/changelog/2024-05-23-sunset-notice-projects-classic/) for more information.
   *
   * @tags projects
   * @name ProjectsGetPermissionForUser
   * @summary Get project permission for a user
   * @request GET:/projects/{project_id}/collaborators/{username}/permission
   * @deprecated
   */
  projectsGetPermissionForUser = (
    projectId: number,
    username: string,
    params: RequestParams = {},
  ) =>
    this.http.request<
      ProjectsGetPermissionForUserData,
      BasicError | ValidationError
    >({
      path: `/projects/${projectId}/collaborators/${username}/permission`,
      method: "GET",
      format: "json",
      ...params,
    });
  /**
   * @description > [!WARNING] > **Closing down notice:** Projects (classic) is being deprecated in favor of the new Projects experience. > See the [changelog](https://github.blog/changelog/2024-05-23-sunset-notice-projects-classic/) for more information.
   *
   * @tags projects
   * @name ProjectsListColumns
   * @summary List project columns
   * @request GET:/projects/{project_id}/columns
   * @deprecated
   */
  projectsListColumns = (
    { projectId, ...query }: ProjectsListColumnsParams,
    params: RequestParams = {},
  ) =>
    this.http.request<ProjectsListColumnsData, BasicError>({
      path: `/projects/${projectId}/columns`,
      method: "GET",
      query: query,
      format: "json",
      ...params,
    });
  /**
   * @description > [!WARNING] > **Closing down notice:** Projects (classic) is being deprecated in favor of the new Projects experience. > See the [changelog](https://github.blog/changelog/2024-05-23-sunset-notice-projects-classic/) for more information.
   *
   * @tags projects
   * @name ProjectsCreateColumn
   * @summary Create a project column
   * @request POST:/projects/{project_id}/columns
   * @deprecated
   */
  projectsCreateColumn = (
    projectId: number,
    data: ProjectsCreateColumnPayload,
    params: RequestParams = {},
  ) =>
    this.http.request<
      ProjectsCreateColumnData,
      BasicError | ValidationErrorSimple
    >({
      path: `/projects/${projectId}/columns`,
      method: "POST",
      body: data,
      type: ContentType.Json,
      format: "json",
      ...params,
    });
}
