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
  EnterpriseAdminDeleteScimGroupFromEnterpriseData,
  EnterpriseAdminDeleteUserFromEnterpriseData,
  EnterpriseAdminGetProvisioningInformationForEnterpriseGroupData,
  EnterpriseAdminGetProvisioningInformationForEnterpriseGroupParams,
  EnterpriseAdminGetProvisioningInformationForEnterpriseUserData,
  EnterpriseAdminListProvisionedGroupsEnterpriseData,
  EnterpriseAdminListProvisionedGroupsEnterpriseParams,
  EnterpriseAdminListProvisionedIdentitiesEnterpriseData,
  EnterpriseAdminListProvisionedIdentitiesEnterpriseParams,
  EnterpriseAdminProvisionEnterpriseGroupData,
  EnterpriseAdminProvisionEnterpriseUserData,
  EnterpriseAdminSetInformationForProvisionedEnterpriseGroupData,
  EnterpriseAdminSetInformationForProvisionedEnterpriseUserData,
  EnterpriseAdminUpdateAttributeForEnterpriseGroupData,
  EnterpriseAdminUpdateAttributeForEnterpriseUserData,
  Group,
  PatchSchema,
  ScimError,
  User,
} from "./data-contracts";
import { ContentType, HttpClient, RequestParams } from "./http-client";

export class Scim<SecurityDataType = unknown> {
  http: HttpClient<SecurityDataType>;

  constructor(http: HttpClient<SecurityDataType>) {
    this.http = http;
  }

  /**
   * @description > [!NOTE] > The SCIM API endpoints for enterprise accounts are currently in private preview and are subject to change. Lists provisioned SCIM groups in an enterprise. You can improve query search time by using the `excludedAttributes` query parameter with a value of `members` to exclude members from the response.
   *
   * @tags enterprise-admin, scim
   * @name EnterpriseAdminListProvisionedGroupsEnterprise
   * @summary List provisioned SCIM groups for an enterprise
   * @request GET:/scim/v2/enterprises/{enterprise}/Groups
   */
  enterpriseAdminListProvisionedGroupsEnterprise = (
    {
      enterprise,
      ...query
    }: EnterpriseAdminListProvisionedGroupsEnterpriseParams,
    params: RequestParams = {},
  ) =>
    this.http.request<
      EnterpriseAdminListProvisionedGroupsEnterpriseData,
      ScimError
    >({
      path: `/scim/v2/enterprises/${enterprise}/Groups`,
      method: "GET",
      query: query,
      format: "json",
      ...params,
    });
  /**
   * @description > [!NOTE] > The SCIM API endpoints for enterprise accounts are currently in private preview and are subject to change. Creates a SCIM group for an enterprise. If members are included as part of the group provisioning payload, they will be created as external group members. It is up to a provider to store a mapping between the `externalId` and `id` of each user.
   *
   * @tags enterprise-admin
   * @name EnterpriseAdminProvisionEnterpriseGroup
   * @summary Provision a SCIM enterprise group
   * @request POST:/scim/v2/enterprises/{enterprise}/Groups
   */
  enterpriseAdminProvisionEnterpriseGroup = (
    enterprise: string,
    data: Group,
    params: RequestParams = {},
  ) =>
    this.http.request<EnterpriseAdminProvisionEnterpriseGroupData, ScimError>({
      path: `/scim/v2/enterprises/${enterprise}/Groups`,
      method: "POST",
      body: data,
      type: ContentType.Json,
      format: "json",
      ...params,
    });
  /**
   * @description > [!NOTE] > The SCIM API endpoints for enterprise accounts are currently in private preview and are subject to change. Gets information about a SCIM group.
   *
   * @tags enterprise-admin
   * @name EnterpriseAdminGetProvisioningInformationForEnterpriseGroup
   * @summary Get SCIM provisioning information for an enterprise group
   * @request GET:/scim/v2/enterprises/{enterprise}/Groups/{scim_group_id}
   */
  enterpriseAdminGetProvisioningInformationForEnterpriseGroup = (
    {
      scimGroupId,
      enterprise,
      ...query
    }: EnterpriseAdminGetProvisioningInformationForEnterpriseGroupParams,
    params: RequestParams = {},
  ) =>
    this.http.request<
      EnterpriseAdminGetProvisioningInformationForEnterpriseGroupData,
      ScimError | BasicError
    >({
      path: `/scim/v2/enterprises/${enterprise}/Groups/${scimGroupId}`,
      method: "GET",
      query: query,
      format: "json",
      ...params,
    });
  /**
   * @description > [!NOTE] > The SCIM API endpoints for enterprise accounts are currently in private preview and are subject to change. Replaces an existing provisioned group’s information. You must provide all the information required for the group as if you were provisioning it for the first time. Any existing group information that you don't provide will be removed, including group membership. If you want to only update a specific attribute, use the [Update an attribute for a SCIM enterprise group](#update-an-attribute-for-a-scim-enterprise-group) endpoint instead.
   *
   * @tags enterprise-admin
   * @name EnterpriseAdminSetInformationForProvisionedEnterpriseGroup
   * @summary Set SCIM information for a provisioned enterprise group
   * @request PUT:/scim/v2/enterprises/{enterprise}/Groups/{scim_group_id}
   */
  enterpriseAdminSetInformationForProvisionedEnterpriseGroup = (
    scimGroupId: string,
    enterprise: string,
    data: Group,
    params: RequestParams = {},
  ) =>
    this.http.request<
      EnterpriseAdminSetInformationForProvisionedEnterpriseGroupData,
      ScimError | BasicError
    >({
      path: `/scim/v2/enterprises/${enterprise}/Groups/${scimGroupId}`,
      method: "PUT",
      body: data,
      type: ContentType.Json,
      format: "json",
      ...params,
    });
  /**
   * @description > [!NOTE] > The SCIM API endpoints for enterprise accounts are currently in private preview and are subject to change. Update a provisioned group’s individual attributes. To change a group’s values, you must provide a specific Operations JSON format that contains at least one of the add, remove, or replace operations. For examples and more information on the SCIM operations format, see the [SCIM specification](https://tools.ietf.org/html/rfc7644#section-3.5.2).  Update can also be used to add group memberships. Group memberships can be sent one at a time or in batches for faster performance. **Note**: The memberships are referenced through a local user `id`, and the user will need to be created before they are referenced here.
   *
   * @tags enterprise-admin
   * @name EnterpriseAdminUpdateAttributeForEnterpriseGroup
   * @summary Update an attribute for a SCIM enterprise group
   * @request PATCH:/scim/v2/enterprises/{enterprise}/Groups/{scim_group_id}
   */
  enterpriseAdminUpdateAttributeForEnterpriseGroup = (
    scimGroupId: string,
    enterprise: string,
    data: PatchSchema,
    params: RequestParams = {},
  ) =>
    this.http.request<
      EnterpriseAdminUpdateAttributeForEnterpriseGroupData,
      ScimError | BasicError
    >({
      path: `/scim/v2/enterprises/${enterprise}/Groups/${scimGroupId}`,
      method: "PATCH",
      body: data,
      type: ContentType.Json,
      format: "json",
      ...params,
    });
  /**
   * @description > [!NOTE] > The SCIM API endpoints for enterprise accounts are currently in private preview and are subject to change. Deletes a SCIM group from an enterprise.
   *
   * @tags enterprise-admin
   * @name EnterpriseAdminDeleteScimGroupFromEnterprise
   * @summary Delete a SCIM group from an enterprise
   * @request DELETE:/scim/v2/enterprises/{enterprise}/Groups/{scim_group_id}
   */
  enterpriseAdminDeleteScimGroupFromEnterprise = (
    scimGroupId: string,
    enterprise: string,
    params: RequestParams = {},
  ) =>
    this.http.request<
      EnterpriseAdminDeleteScimGroupFromEnterpriseData,
      ScimError | BasicError
    >({
      path: `/scim/v2/enterprises/${enterprise}/Groups/${scimGroupId}`,
      method: "DELETE",
      ...params,
    });
  /**
   * @description > [!NOTE] > The SCIM API endpoints for enterprise accounts are currently in private preview and are subject to change. Lists provisioned SCIM enterprise members. When a user with a SCIM-provisioned external identity is removed from an enterprise through a `patch` with `active` flag set to `false`, the account's metadata is preserved to allow the user to re-join the enterprise in the future. However, the user's account will be suspended and the user will not be able to sign-in. In order to permanently suspend the users account with no ability to re-join the enterprise in the future, use the `delete` request. Users that were not permanently deleted will be visible in the returned results.
   *
   * @tags enterprise-admin
   * @name EnterpriseAdminListProvisionedIdentitiesEnterprise
   * @summary List SCIM provisioned identities for an enterprise
   * @request GET:/scim/v2/enterprises/{enterprise}/Users
   */
  enterpriseAdminListProvisionedIdentitiesEnterprise = (
    {
      enterprise,
      ...query
    }: EnterpriseAdminListProvisionedIdentitiesEnterpriseParams,
    params: RequestParams = {},
  ) =>
    this.http.request<
      EnterpriseAdminListProvisionedIdentitiesEnterpriseData,
      ScimError
    >({
      path: `/scim/v2/enterprises/${enterprise}/Users`,
      method: "GET",
      query: query,
      format: "json",
      ...params,
    });
  /**
   * @description > [!NOTE] > The SCIM API endpoints for enterprise accounts are currently in private preview and are subject to change. Creates an external identity for a new SCIM enterprise user. SCIM does not authenticate users, it only provisions them. The authentication of users is done by SAML. However, when SCIM is enabled, all users need to be provisioned through SCIM before a user can sign in through SAML. The matching of a user to a SCIM provisioned user is done when the SAML assertion is consumed. The user will be matched on SAML response `NameID` to SCIM `userName`. When converting existing enterprise to use SCIM, the user handle (`userName`) from the SCIM payload will be used to match the provisioned user to an already existing user in the enterprise. Since the new identity record is created for newly provisioned users the matching for those records is done using a user's handle. Currently the matching will be performed to all of the users no matter if they were SAML JIT provisioned or created as local users.
   *
   * @tags enterprise-admin
   * @name EnterpriseAdminProvisionEnterpriseUser
   * @summary Provision a SCIM enterprise user
   * @request POST:/scim/v2/enterprises/{enterprise}/Users
   */
  enterpriseAdminProvisionEnterpriseUser = (
    enterprise: string,
    data: User,
    params: RequestParams = {},
  ) =>
    this.http.request<EnterpriseAdminProvisionEnterpriseUserData, ScimError>({
      path: `/scim/v2/enterprises/${enterprise}/Users`,
      method: "POST",
      body: data,
      type: ContentType.Json,
      format: "json",
      ...params,
    });
  /**
   * @description > [!NOTE] > The SCIM API endpoints for enterprise accounts are currently in private preview and are subject to change. Gets information about a SCIM user.
   *
   * @tags enterprise-admin
   * @name EnterpriseAdminGetProvisioningInformationForEnterpriseUser
   * @summary Get SCIM provisioning information for an enterprise user
   * @request GET:/scim/v2/enterprises/{enterprise}/Users/{scim_user_id}
   */
  enterpriseAdminGetProvisioningInformationForEnterpriseUser = (
    scimUserId: string,
    enterprise: string,
    params: RequestParams = {},
  ) =>
    this.http.request<
      EnterpriseAdminGetProvisioningInformationForEnterpriseUserData,
      ScimError | BasicError
    >({
      path: `/scim/v2/enterprises/${enterprise}/Users/${scimUserId}`,
      method: "GET",
      format: "json",
      ...params,
    });
  /**
   * @description > [!NOTE] > The SCIM API endpoints for enterprise accounts are currently in private preview and are subject to change. Replaces an existing provisioned user's information. You must provide all the information required for the user as if you were provisioning them for the first time. Any existing user information that you don't provide will be removed. If you want to only update a specific attribute, use the [Update an attribute for a SCIM user](#update-an-attribute-for-a-scim-enterprise-user) endpoint instead. > [!WARNING] > Setting `active: false` will suspend a user and obfuscate the user handle and user email. Since the implementation is a generic SCIM implementation and does not differentiate yet between different IdP providers, for Okta, the user GDPR data will not be purged and the credentials will not be removed.
   *
   * @tags enterprise-admin
   * @name EnterpriseAdminSetInformationForProvisionedEnterpriseUser
   * @summary Set SCIM information for a provisioned enterprise user
   * @request PUT:/scim/v2/enterprises/{enterprise}/Users/{scim_user_id}
   */
  enterpriseAdminSetInformationForProvisionedEnterpriseUser = (
    scimUserId: string,
    enterprise: string,
    data: User,
    params: RequestParams = {},
  ) =>
    this.http.request<
      EnterpriseAdminSetInformationForProvisionedEnterpriseUserData,
      ScimError | BasicError
    >({
      path: `/scim/v2/enterprises/${enterprise}/Users/${scimUserId}`,
      method: "PUT",
      body: data,
      type: ContentType.Json,
      format: "json",
      ...params,
    });
  /**
   * @description > [!NOTE] > The SCIM API endpoints for enterprise accounts are currently in private preview and are subject to change. Update a provisioned user's individual attributes. To change a user's values, you must provide a specific `Operations` JSON format that contains at least one of the `add`, `remove`, or `replace` operations. For examples and more information on the SCIM operations format, see the [SCIM specification](https://tools.ietf.org/html/rfc7644#section-3.5.2). > [!NOTE] > Complicated SCIM `path` selectors that include filters are not supported. For example, a `path` selector defined as `"path": "emails[type eq \"work\"]"` will not work. > [!WARNING] > Setting `active: false` will suspend a user and obfuscate the user handle and user email. Since the implementation is a generic SCIM implementation and does not differentiate yet between different IdP providers (Okta, for example), the user GDPR data in the SCIM metadata will not be purged and the credentials will not be removed. > ``` > { >   "Operations":[{ >     "op":"replace", >     "value":{ >       "active":false >     } >   }] > } > ```
   *
   * @tags enterprise-admin
   * @name EnterpriseAdminUpdateAttributeForEnterpriseUser
   * @summary Update an attribute for a SCIM enterprise user
   * @request PATCH:/scim/v2/enterprises/{enterprise}/Users/{scim_user_id}
   */
  enterpriseAdminUpdateAttributeForEnterpriseUser = (
    scimUserId: string,
    enterprise: string,
    data: PatchSchema,
    params: RequestParams = {},
  ) =>
    this.http.request<
      EnterpriseAdminUpdateAttributeForEnterpriseUserData,
      ScimError | BasicError
    >({
      path: `/scim/v2/enterprises/${enterprise}/Users/${scimUserId}`,
      method: "PATCH",
      body: data,
      type: ContentType.Json,
      format: "json",
      ...params,
    });
  /**
   * @description > [!NOTE] > The SCIM API endpoints for enterprise accounts are currently in private preview and are subject to change. Permanently suspends a SCIM user from an enterprise, removes all data for the user, obfuscates the login, email, and display name of the user, removes all external-identity SCIM attributes, and deletes the emails, avatar, PATs, SSH keys, OAuth authorizations credentials, GPG keys, and SAML mappings for the user. You will not be able to undo this action.
   *
   * @tags enterprise-admin
   * @name EnterpriseAdminDeleteUserFromEnterprise
   * @summary Delete a SCIM user from an enterprise
   * @request DELETE:/scim/v2/enterprises/{enterprise}/Users/{scim_user_id}
   */
  enterpriseAdminDeleteUserFromEnterprise = (
    scimUserId: string,
    enterprise: string,
    params: RequestParams = {},
  ) =>
    this.http.request<
      EnterpriseAdminDeleteUserFromEnterpriseData,
      ScimError | BasicError
    >({
      path: `/scim/v2/enterprises/${enterprise}/Users/${scimUserId}`,
      method: "DELETE",
      ...params,
    });
}
