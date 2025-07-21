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
  CallbackListData,
  CallbackListError,
  ChangePasswordCreateData,
  ChangePasswordCreateError,
  ChangePasswordCreatePayload,
  EmailConfirmationListError,
  EmailConfirmationListParams,
  ForgotPasswordCreateData,
  ForgotPasswordCreateError,
  ForgotPasswordCreatePayload,
  LocalCreateData,
  LocalCreateError,
  LocalCreatePayload,
  LocalRegisterCreateData,
  LocalRegisterCreateError,
  LocalRegisterCreatePayload,
  ResetPasswordCreateData,
  ResetPasswordCreateError,
  ResetPasswordCreatePayload,
  SendEmailConfirmationCreateData,
  SendEmailConfirmationCreateError,
  SendEmailConfirmationCreatePayload,
} from "./data-contracts";
import { ContentType, HttpClient, RequestParams } from "./http-client";

export class Auth<SecurityDataType = unknown> {
  http: HttpClient<SecurityDataType>;

  constructor(http: HttpClient<SecurityDataType>) {
    this.http = http;
  }

  /**
   * @description Returns a jwt token and user info
   *
   * @tags Users-Permissions - Auth
   * @name LocalCreate
   * @summary Local login
   * @request POST:/auth/local
   * @secure
   */
  localCreate = (data: LocalCreatePayload, params: RequestParams = {}) =>
    this.http.request<LocalCreateData, LocalCreateError>({
      path: `/auth/local`,
      method: "POST",
      body: data,
      secure: true,
      type: ContentType.Json,
      format: "json",
      ...params,
    });
  /**
   * @description Returns a jwt token and user info
   *
   * @tags Users-Permissions - Auth
   * @name LocalRegisterCreate
   * @summary Register a user
   * @request POST:/auth/local/register
   * @secure
   */
  localRegisterCreate = (
    data: LocalRegisterCreatePayload,
    params: RequestParams = {},
  ) =>
    this.http.request<LocalRegisterCreateData, LocalRegisterCreateError>({
      path: `/auth/local/register`,
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
   * @tags Users-Permissions - Auth
   * @name CallbackList
   * @summary Default Callback from provider auth
   * @request GET:/auth/{provider}/callback
   * @secure
   */
  callbackList = (provider: string, params: RequestParams = {}) =>
    this.http.request<CallbackListData, CallbackListError>({
      path: `/auth/${provider}/callback`,
      method: "GET",
      secure: true,
      format: "json",
      ...params,
    });
  /**
   * No description
   *
   * @tags Users-Permissions - Auth
   * @name ForgotPasswordCreate
   * @summary Send rest password email
   * @request POST:/auth/forgot-password
   * @secure
   */
  forgotPasswordCreate = (
    data: ForgotPasswordCreatePayload,
    params: RequestParams = {},
  ) =>
    this.http.request<ForgotPasswordCreateData, ForgotPasswordCreateError>({
      path: `/auth/forgot-password`,
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
   * @tags Users-Permissions - Auth
   * @name ResetPasswordCreate
   * @summary Rest user password
   * @request POST:/auth/reset-password
   * @secure
   */
  resetPasswordCreate = (
    data: ResetPasswordCreatePayload,
    params: RequestParams = {},
  ) =>
    this.http.request<ResetPasswordCreateData, ResetPasswordCreateError>({
      path: `/auth/reset-password`,
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
   * @tags Users-Permissions - Auth
   * @name ChangePasswordCreate
   * @summary Update user's own password
   * @request POST:/auth/change-password
   * @secure
   */
  changePasswordCreate = (
    data: ChangePasswordCreatePayload,
    params: RequestParams = {},
  ) =>
    this.http.request<ChangePasswordCreateData, ChangePasswordCreateError>({
      path: `/auth/change-password`,
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
   * @tags Users-Permissions - Auth
   * @name EmailConfirmationList
   * @summary Confirm user email
   * @request GET:/auth/email-confirmation
   * @secure
   */
  emailConfirmationList = (
    query: EmailConfirmationListParams,
    params: RequestParams = {},
  ) =>
    this.http.request<any, EmailConfirmationListError>({
      path: `/auth/email-confirmation`,
      method: "GET",
      query: query,
      secure: true,
      ...params,
    });
  /**
   * No description
   *
   * @tags Users-Permissions - Auth
   * @name SendEmailConfirmationCreate
   * @summary Send confirmation email
   * @request POST:/auth/send-email-confirmation
   * @secure
   */
  sendEmailConfirmationCreate = (
    data: SendEmailConfirmationCreatePayload,
    params: RequestParams = {},
  ) =>
    this.http.request<
      SendEmailConfirmationCreateData,
      SendEmailConfirmationCreateError
    >({
      path: `/auth/send-email-confirmation`,
      method: "POST",
      body: data,
      secure: true,
      type: ContentType.Json,
      format: "json",
      ...params,
    });
}
