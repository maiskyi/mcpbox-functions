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
  AppsCreateInstallationAccessTokenData,
  AppsCreateInstallationAccessTokenPayload,
  AppsDeleteInstallationData,
  AppsGetAuthenticatedData,
  AppsGetInstallationData,
  AppsGetWebhookConfigForAppData,
  AppsGetWebhookDeliveryData,
  AppsListInstallationRequestsForAuthenticatedAppData,
  AppsListInstallationRequestsForAuthenticatedAppParams,
  AppsListInstallationsData,
  AppsListInstallationsParams,
  AppsListWebhookDeliveriesData,
  AppsListWebhookDeliveriesParams,
  AppsSuspendInstallationData,
  AppsUnsuspendInstallationData,
  AppsUpdateWebhookConfigForAppData,
  AppsUpdateWebhookConfigForAppPayload,
  BasicError,
  ValidationError,
} from "./data-contracts";
import { ContentType, HttpClient, RequestParams } from "./http-client";

export class App<SecurityDataType = unknown> {
  http: HttpClient<SecurityDataType>;

  constructor(http: HttpClient<SecurityDataType>) {
    this.http = http;
  }

  /**
   * @description Returns the GitHub App associated with the authentication credentials used. To see how many app installations are associated with this GitHub App, see the `installations_count` in the response. For more details about your app's installations, see the "[List installations for the authenticated app](https://docs.github.com/enterprise-server@3.17/rest/apps/apps#list-installations-for-the-authenticated-app)" endpoint. You must use a [JWT](https://docs.github.com/enterprise-server@3.17/apps/building-github-apps/authenticating-with-github-apps/#authenticating-as-a-github-app) to access this endpoint.
   *
   * @tags apps
   * @name AppsGetAuthenticated
   * @summary Get the authenticated app
   * @request GET:/app
   */
  appsGetAuthenticated = (params: RequestParams = {}) =>
    this.http.request<AppsGetAuthenticatedData, any>({
      path: `/app`,
      method: "GET",
      format: "json",
      ...params,
    });
  /**
   * @description Returns the webhook configuration for a GitHub App. For more information about configuring a webhook for your app, see "[Creating a GitHub App](/developers/apps/creating-a-github-app)." You must use a [JWT](https://docs.github.com/enterprise-server@3.17/apps/building-github-apps/authenticating-with-github-apps/#authenticating-as-a-github-app) to access this endpoint.
   *
   * @tags apps
   * @name AppsGetWebhookConfigForApp
   * @summary Get a webhook configuration for an app
   * @request GET:/app/hook/config
   */
  appsGetWebhookConfigForApp = (params: RequestParams = {}) =>
    this.http.request<AppsGetWebhookConfigForAppData, any>({
      path: `/app/hook/config`,
      method: "GET",
      format: "json",
      ...params,
    });
  /**
   * @description Updates the webhook configuration for a GitHub App. For more information about configuring a webhook for your app, see "[Creating a GitHub App](/developers/apps/creating-a-github-app)." You must use a [JWT](https://docs.github.com/enterprise-server@3.17/apps/building-github-apps/authenticating-with-github-apps/#authenticating-as-a-github-app) to access this endpoint.
   *
   * @tags apps
   * @name AppsUpdateWebhookConfigForApp
   * @summary Update a webhook configuration for an app
   * @request PATCH:/app/hook/config
   */
  appsUpdateWebhookConfigForApp = (
    data: AppsUpdateWebhookConfigForAppPayload,
    params: RequestParams = {},
  ) =>
    this.http.request<AppsUpdateWebhookConfigForAppData, any>({
      path: `/app/hook/config`,
      method: "PATCH",
      body: data,
      type: ContentType.Json,
      format: "json",
      ...params,
    });
  /**
   * @description Returns a list of webhook deliveries for the webhook configured for a GitHub App. You must use a [JWT](https://docs.github.com/enterprise-server@3.17/apps/building-github-apps/authenticating-with-github-apps/#authenticating-as-a-github-app) to access this endpoint.
   *
   * @tags apps
   * @name AppsListWebhookDeliveries
   * @summary List deliveries for an app webhook
   * @request GET:/app/hook/deliveries
   */
  appsListWebhookDeliveries = (
    query: AppsListWebhookDeliveriesParams,
    params: RequestParams = {},
  ) =>
    this.http.request<
      AppsListWebhookDeliveriesData,
      BasicError | ValidationError
    >({
      path: `/app/hook/deliveries`,
      method: "GET",
      query: query,
      format: "json",
      ...params,
    });
  /**
   * @description Returns a delivery for the webhook configured for a GitHub App. You must use a [JWT](https://docs.github.com/enterprise-server@3.17/apps/building-github-apps/authenticating-with-github-apps/#authenticating-as-a-github-app) to access this endpoint.
   *
   * @tags apps
   * @name AppsGetWebhookDelivery
   * @summary Get a delivery for an app webhook
   * @request GET:/app/hook/deliveries/{delivery_id}
   */
  appsGetWebhookDelivery = (deliveryId: number, params: RequestParams = {}) =>
    this.http.request<AppsGetWebhookDeliveryData, BasicError | ValidationError>(
      {
        path: `/app/hook/deliveries/${deliveryId}`,
        method: "GET",
        format: "json",
        ...params,
      },
    );
  /**
   * @description Redeliver a delivery for the webhook configured for a GitHub App. You must use a [JWT](https://docs.github.com/enterprise-server@3.17/apps/building-github-apps/authenticating-with-github-apps/#authenticating-as-a-github-app) to access this endpoint.
   *
   * @tags apps
   * @name AppsRedeliverWebhookDelivery
   * @summary Redeliver a delivery for an app webhook
   * @request POST:/app/hook/deliveries/{delivery_id}/attempts
   */
  appsRedeliverWebhookDelivery = (
    deliveryId: number,
    params: RequestParams = {},
  ) =>
    this.http.request<object, BasicError | ValidationError>({
      path: `/app/hook/deliveries/${deliveryId}/attempts`,
      method: "POST",
      ...params,
    });
  /**
   * @description Lists all the pending installation requests for the authenticated GitHub App.
   *
   * @tags apps
   * @name AppsListInstallationRequestsForAuthenticatedApp
   * @summary List installation requests for the authenticated app
   * @request GET:/app/installation-requests
   */
  appsListInstallationRequestsForAuthenticatedApp = (
    query: AppsListInstallationRequestsForAuthenticatedAppParams,
    params: RequestParams = {},
  ) =>
    this.http.request<
      AppsListInstallationRequestsForAuthenticatedAppData,
      BasicError
    >({
      path: `/app/installation-requests`,
      method: "GET",
      query: query,
      format: "json",
      ...params,
    });
  /**
   * @description The permissions the installation has are included under the `permissions` key. You must use a [JWT](https://docs.github.com/enterprise-server@3.17/apps/building-github-apps/authenticating-with-github-apps/#authenticating-as-a-github-app) to access this endpoint.
   *
   * @tags apps
   * @name AppsListInstallations
   * @summary List installations for the authenticated app
   * @request GET:/app/installations
   */
  appsListInstallations = (
    query: AppsListInstallationsParams,
    params: RequestParams = {},
  ) =>
    this.http.request<AppsListInstallationsData, any>({
      path: `/app/installations`,
      method: "GET",
      query: query,
      format: "json",
      ...params,
    });
  /**
   * @description Enables an authenticated GitHub App to find an installation's information using the installation id. You must use a [JWT](https://docs.github.com/enterprise-server@3.17/apps/building-github-apps/authenticating-with-github-apps/#authenticating-as-a-github-app) to access this endpoint.
   *
   * @tags apps
   * @name AppsGetInstallation
   * @summary Get an installation for the authenticated app
   * @request GET:/app/installations/{installation_id}
   */
  appsGetInstallation = (installationId: number, params: RequestParams = {}) =>
    this.http.request<AppsGetInstallationData, BasicError>({
      path: `/app/installations/${installationId}`,
      method: "GET",
      format: "json",
      ...params,
    });
  /**
   * @description Uninstalls a GitHub App on a user, organization, or enterprise account. If you prefer to temporarily suspend an app's access to your account's resources, then we recommend the "[Suspend an app installation](https://docs.github.com/enterprise-server@3.17/rest/apps/apps#suspend-an-app-installation)" endpoint. You must use a [JWT](https://docs.github.com/enterprise-server@3.17/apps/building-github-apps/authenticating-with-github-apps/#authenticating-as-a-github-app) to access this endpoint.
   *
   * @tags apps
   * @name AppsDeleteInstallation
   * @summary Delete an installation for the authenticated app
   * @request DELETE:/app/installations/{installation_id}
   */
  appsDeleteInstallation = (
    installationId: number,
    params: RequestParams = {},
  ) =>
    this.http.request<AppsDeleteInstallationData, BasicError>({
      path: `/app/installations/${installationId}`,
      method: "DELETE",
      ...params,
    });
  /**
   * @description Creates an installation access token that enables a GitHub App to make authenticated API requests for the app's installation on an organization or individual account. Installation tokens expire one hour from the time you create them. Using an expired token produces a status code of `401 - Unauthorized`, and requires creating a new installation token. By default the installation token has access to all repositories that the installation can access. Optionally, you can use the `repositories` or `repository_ids` body parameters to specify individual repositories that the installation access token can access. If you don't use `repositories` or `repository_ids` to grant access to specific repositories, the installation access token will have access to all repositories that the installation was granted access to. The installation access token cannot be granted access to repositories that the installation was not granted access to. Up to 500 repositories can be listed in this manner. Optionally, use the `permissions` body parameter to specify the permissions that the installation access token should have. If `permissions` is not specified, the installation access token will have all of the permissions that were granted to the app. The installation access token cannot be granted permissions that the app was not granted. You must use a [JWT](https://docs.github.com/enterprise-server@3.17/apps/building-github-apps/authenticating-with-github-apps/#authenticating-as-a-github-app) to access this endpoint.
   *
   * @tags apps
   * @name AppsCreateInstallationAccessToken
   * @summary Create an installation access token for an app
   * @request POST:/app/installations/{installation_id}/access_tokens
   */
  appsCreateInstallationAccessToken = (
    installationId: number,
    data?: AppsCreateInstallationAccessTokenPayload,
    params: RequestParams = {},
  ) =>
    this.http.request<
      AppsCreateInstallationAccessTokenData,
      BasicError | ValidationError
    >({
      path: `/app/installations/${installationId}/access_tokens`,
      method: "POST",
      body: data,
      type: ContentType.Json,
      format: "json",
      ...params,
    });
  /**
   * @description Suspends a GitHub App on a user, organization, or enterprise account, which blocks the app from accessing the account's resources. When a GitHub App is suspended, the app's access to the GitHub Enterprise Server API or webhook events is blocked for that account. You must use a [JWT](https://docs.github.com/enterprise-server@3.17/apps/building-github-apps/authenticating-with-github-apps/#authenticating-as-a-github-app) to access this endpoint.
   *
   * @tags apps
   * @name AppsSuspendInstallation
   * @summary Suspend an app installation
   * @request PUT:/app/installations/{installation_id}/suspended
   */
  appsSuspendInstallation = (
    installationId: number,
    params: RequestParams = {},
  ) =>
    this.http.request<AppsSuspendInstallationData, BasicError>({
      path: `/app/installations/${installationId}/suspended`,
      method: "PUT",
      ...params,
    });
  /**
   * @description Removes a GitHub App installation suspension. You must use a [JWT](https://docs.github.com/enterprise-server@3.17/apps/building-github-apps/authenticating-with-github-apps/#authenticating-as-a-github-app) to access this endpoint.
   *
   * @tags apps
   * @name AppsUnsuspendInstallation
   * @summary Unsuspend an app installation
   * @request DELETE:/app/installations/{installation_id}/suspended
   */
  appsUnsuspendInstallation = (
    installationId: number,
    params: RequestParams = {},
  ) =>
    this.http.request<AppsUnsuspendInstallationData, BasicError>({
      path: `/app/installations/${installationId}/suspended`,
      method: "DELETE",
      ...params,
    });
}
