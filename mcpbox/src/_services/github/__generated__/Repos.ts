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
  ActionsAddCustomLabelsToSelfHostedRunnerForRepoPayload,
  ActionsCacheUsagePolicyForRepository,
  ActionsCancelWorkflowRunData,
  ActionsCreateEnvironmentVariableData,
  ActionsCreateEnvironmentVariablePayload,
  ActionsCreateOrUpdateEnvironmentSecretData,
  ActionsCreateOrUpdateEnvironmentSecretPayload,
  ActionsCreateOrUpdateRepoSecretData,
  ActionsCreateOrUpdateRepoSecretPayload,
  ActionsCreateRegistrationTokenForRepoData,
  ActionsCreateRemoveTokenForRepoData,
  ActionsCreateRepoVariableData,
  ActionsCreateRepoVariablePayload,
  ActionsCreateWorkflowDispatchData,
  ActionsCreateWorkflowDispatchPayload,
  ActionsDeleteActionsCacheByIdData,
  ActionsDeleteActionsCacheByKeyData,
  ActionsDeleteActionsCacheByKeyParams,
  ActionsDeleteArtifactData,
  ActionsDeleteEnvironmentSecretData,
  ActionsDeleteEnvironmentVariableData,
  ActionsDeleteRepoSecretData,
  ActionsDeleteRepoVariableData,
  ActionsDeleteSelfHostedRunnerFromRepoData,
  ActionsDeleteWorkflowRunData,
  ActionsDeleteWorkflowRunLogsData,
  ActionsDisableWorkflowData,
  ActionsEnableWorkflowData,
  ActionsForceCancelWorkflowRunData,
  ActionsGenerateRunnerJitconfigForRepoPayload,
  ActionsGetActionsCacheListData,
  ActionsGetActionsCacheListParams,
  ActionsGetActionsCacheUsageData,
  ActionsGetActionsCacheUsagePolicyData,
  ActionsGetAllowedActionsRepositoryData,
  ActionsGetArtifactData,
  ActionsGetCustomOidcSubClaimForRepoData,
  ActionsGetEnvironmentPublicKeyData,
  ActionsGetEnvironmentSecretData,
  ActionsGetEnvironmentVariableData,
  ActionsGetGithubActionsDefaultWorkflowPermissionsRepositoryData,
  ActionsGetGithubActionsPermissionsRepositoryData,
  ActionsGetJobForWorkflowRunData,
  ActionsGetPendingDeploymentsForRunData,
  ActionsGetRepoPublicKeyData,
  ActionsGetRepoSecretData,
  ActionsGetRepoVariableData,
  ActionsGetReviewsForRunData,
  ActionsGetSelfHostedRunnerForRepoData,
  ActionsGetWorkflowAccessToRepositoryData,
  ActionsGetWorkflowData,
  ActionsGetWorkflowRunAttemptData,
  ActionsGetWorkflowRunAttemptParams,
  ActionsGetWorkflowRunData,
  ActionsGetWorkflowRunParams,
  ActionsListArtifactsForRepoData,
  ActionsListArtifactsForRepoParams,
  ActionsListEnvironmentSecretsData,
  ActionsListEnvironmentSecretsParams,
  ActionsListEnvironmentVariablesData,
  ActionsListEnvironmentVariablesParams,
  ActionsListJobsForWorkflowRunAttemptData,
  ActionsListJobsForWorkflowRunAttemptParams,
  ActionsListJobsForWorkflowRunData,
  ActionsListJobsForWorkflowRunParams,
  ActionsListRepoOrganizationSecretsData,
  ActionsListRepoOrganizationSecretsParams,
  ActionsListRepoOrganizationVariablesData,
  ActionsListRepoOrganizationVariablesParams,
  ActionsListRepoSecretsData,
  ActionsListRepoSecretsParams,
  ActionsListRepoVariablesData,
  ActionsListRepoVariablesParams,
  ActionsListRepoWorkflowsData,
  ActionsListRepoWorkflowsParams,
  ActionsListRunnerApplicationsForRepoData,
  ActionsListSelfHostedRunnersForRepoData,
  ActionsListSelfHostedRunnersForRepoParams,
  ActionsListWorkflowRunArtifactsData,
  ActionsListWorkflowRunArtifactsParams,
  ActionsListWorkflowRunsData,
  ActionsListWorkflowRunsForRepoData,
  ActionsListWorkflowRunsForRepoParams,
  ActionsListWorkflowRunsParams,
  ActionsReRunJobForWorkflowRunData,
  ActionsReRunJobForWorkflowRunPayload,
  ActionsReRunWorkflowData,
  ActionsReRunWorkflowFailedJobsData,
  ActionsReRunWorkflowFailedJobsPayload,
  ActionsReRunWorkflowPayload,
  ActionsReviewCustomGatesForRunData,
  ActionsReviewCustomGatesForRunPayload,
  ActionsReviewPendingDeploymentsForRunData,
  ActionsReviewPendingDeploymentsForRunPayload,
  ActionsSetActionsCacheUsagePolicyData,
  ActionsSetAllowedActionsRepositoryData,
  ActionsSetCustomLabelsForSelfHostedRunnerForRepoPayload,
  ActionsSetCustomOidcSubClaimForRepoData,
  ActionsSetCustomOidcSubClaimForRepoPayload,
  ActionsSetDefaultWorkflowPermissions,
  ActionsSetGithubActionsDefaultWorkflowPermissionsRepositoryData,
  ActionsSetGithubActionsPermissionsRepositoryData,
  ActionsSetGithubActionsPermissionsRepositoryPayload,
  ActionsSetWorkflowAccessToRepositoryData,
  ActionsUpdateEnvironmentVariableData,
  ActionsUpdateEnvironmentVariablePayload,
  ActionsUpdateRepoVariableData,
  ActionsUpdateRepoVariablePayload,
  ActionsWorkflowAccessToRepository,
  ActivityDeleteRepoSubscriptionData,
  ActivityGetRepoSubscriptionData,
  ActivityListRepoEventsData,
  ActivityListRepoEventsParams,
  ActivityListRepoNotificationsForAuthenticatedUserData,
  ActivityListRepoNotificationsForAuthenticatedUserParams,
  ActivityListStargazersForRepoData,
  ActivityListStargazersForRepoParams,
  ActivityListWatchersForRepoData,
  ActivityListWatchersForRepoParams,
  ActivityMarkRepoNotificationsAsReadData,
  ActivityMarkRepoNotificationsAsReadPayload,
  ActivitySetRepoSubscriptionData,
  ActivitySetRepoSubscriptionPayload,
  AlertNumber,
  AppsGetRepoInstallationData,
  BasicError,
  ChecksCreateData,
  ChecksCreatePayload,
  ChecksCreateSuiteData,
  ChecksCreateSuitePayload,
  ChecksGetData,
  ChecksGetSuiteData,
  ChecksListAnnotationsData,
  ChecksListAnnotationsParams,
  ChecksListForRefData,
  ChecksListForRefParams,
  ChecksListForSuiteData,
  ChecksListForSuiteParams,
  ChecksListSuitesForRefData,
  ChecksListSuitesForRefParams,
  ChecksRerequestRunData,
  ChecksRerequestRunError,
  ChecksRerequestSuiteData,
  ChecksSetSuitesPreferencesData,
  ChecksSetSuitesPreferencesPayload,
  ChecksUpdateData,
  ChecksUpdatePayload,
  CodeScanningDefaultSetupUpdate,
  CodeScanningDeleteAnalysisData,
  CodeScanningDeleteAnalysisParams,
  CodeScanningGetAlertData,
  CodeScanningGetAnalysisData,
  CodeScanningGetDefaultSetupData,
  CodeScanningGetSarifData,
  CodeScanningListAlertInstancesData,
  CodeScanningListAlertInstancesParams,
  CodeScanningListAlertsForRepoData,
  CodeScanningListAlertsForRepoParams,
  CodeScanningListRecentAnalysesData,
  CodeScanningListRecentAnalysesParams,
  CodeScanningUpdateAlertData,
  CodeScanningUpdateAlertPayload,
  CodeScanningUpdateDefaultSetupData,
  CodeScanningUploadSarifData,
  CodeScanningUploadSarifPayload,
  CodeSecurityGetConfigurationForRepositoryData,
  DependabotCreateOrUpdateRepoSecretData,
  DependabotCreateOrUpdateRepoSecretPayload,
  DependabotDeleteRepoSecretData,
  DependabotGetAlertData,
  DependabotGetRepoPublicKeyData,
  DependabotGetRepoSecretData,
  DependabotListAlertsForRepoData,
  DependabotListAlertsForRepoParams,
  DependabotListRepoSecretsData,
  DependabotListRepoSecretsParams,
  DependabotUpdateAlertData,
  DependabotUpdateAlertPayload,
  DependencyGraphCreateRepositorySnapshotData,
  DependencyGraphDiffRangeData,
  DependencyGraphDiffRangeParams,
  DependencyGraphExportSbomData,
  DeploymentBranchPolicyNamePattern,
  DeploymentBranchPolicyNamePatternWithType,
  EnterpriseAdminGetPreReceiveHookForRepoData,
  EnterpriseAdminListPreReceiveHooksForRepoData,
  EnterpriseAdminListPreReceiveHooksForRepoParams,
  EnterpriseAdminRemovePreReceiveHookEnforcementForRepoData,
  EnterpriseAdminUpdatePreReceiveHookEnforcementForRepoData,
  EnterpriseAdminUpdatePreReceiveHookEnforcementForRepoPayload,
  GitCreateBlobData,
  GitCreateBlobError,
  GitCreateBlobPayload,
  GitCreateCommitData,
  GitCreateCommitPayload,
  GitCreateRefData,
  GitCreateRefPayload,
  GitCreateTagData,
  GitCreateTagPayload,
  GitCreateTreeData,
  GitCreateTreePayload,
  GitDeleteRefData,
  GitGetBlobData,
  GitGetCommitData,
  GitGetRefData,
  GitGetTagData,
  GitGetTreeData,
  GitGetTreeParams,
  GitListMatchingRefsData,
  GitUpdateRefData,
  GitUpdateRefPayload,
  IssuesAddAssigneesData,
  IssuesAddAssigneesPayload,
  IssuesAddLabelsData,
  IssuesAddLabelsPayload,
  IssuesCheckUserCanBeAssignedData,
  IssuesCheckUserCanBeAssignedError,
  IssuesCheckUserCanBeAssignedToIssueData,
  IssuesCheckUserCanBeAssignedToIssueError,
  IssuesCreateCommentData,
  IssuesCreateCommentPayload,
  IssuesCreateData,
  IssuesCreateLabelData,
  IssuesCreateLabelPayload,
  IssuesCreateMilestoneData,
  IssuesCreateMilestonePayload,
  IssuesCreatePayload,
  IssuesDeleteCommentData,
  IssuesDeleteLabelData,
  IssuesDeleteMilestoneData,
  IssuesGetCommentData,
  IssuesGetData,
  IssuesGetEventData,
  IssuesGetLabelData,
  IssuesGetMilestoneData,
  IssuesListAssigneesData,
  IssuesListAssigneesParams,
  IssuesListCommentsData,
  IssuesListCommentsForRepoData,
  IssuesListCommentsForRepoParams,
  IssuesListCommentsParams,
  IssuesListEventsData,
  IssuesListEventsForRepoData,
  IssuesListEventsForRepoParams,
  IssuesListEventsForTimelineData,
  IssuesListEventsForTimelineParams,
  IssuesListEventsParams,
  IssuesListForRepoData,
  IssuesListForRepoParams,
  IssuesListLabelsForMilestoneData,
  IssuesListLabelsForMilestoneParams,
  IssuesListLabelsForRepoData,
  IssuesListLabelsForRepoParams,
  IssuesListLabelsOnIssueData,
  IssuesListLabelsOnIssueParams,
  IssuesListMilestonesData,
  IssuesListMilestonesParams,
  IssuesLockData,
  IssuesLockPayload,
  IssuesRemoveAllLabelsData,
  IssuesRemoveAssigneesData,
  IssuesRemoveAssigneesPayload,
  IssuesRemoveLabelData,
  IssuesSetLabelsData,
  IssuesSetLabelsPayload,
  IssuesUnlockData,
  IssuesUpdateCommentData,
  IssuesUpdateCommentPayload,
  IssuesUpdateData,
  IssuesUpdateLabelData,
  IssuesUpdateLabelPayload,
  IssuesUpdateMilestoneData,
  IssuesUpdateMilestonePayload,
  IssuesUpdatePayload,
  LicensesGetForRepoData,
  LicensesGetForRepoParams,
  ProjectsCreateForRepoData,
  ProjectsCreateForRepoPayload,
  ProjectsListForRepoData,
  ProjectsListForRepoParams,
  PullsCheckIfMergedData,
  PullsCreateData,
  PullsCreatePayload,
  PullsCreateReplyForReviewCommentData,
  PullsCreateReplyForReviewCommentPayload,
  PullsCreateReviewCommentData,
  PullsCreateReviewCommentPayload,
  PullsCreateReviewData,
  PullsCreateReviewPayload,
  PullsDeletePendingReviewData,
  PullsDeleteReviewCommentData,
  PullsDismissReviewData,
  PullsDismissReviewPayload,
  PullsGetData,
  PullsGetReviewCommentData,
  PullsGetReviewData,
  PullsListCommentsForReviewData,
  PullsListCommentsForReviewParams,
  PullsListCommitsData,
  PullsListCommitsParams,
  PullsListData,
  PullsListFilesData,
  PullsListFilesParams,
  PullsListParams,
  PullsListRequestedReviewersData,
  PullsListReviewCommentsData,
  PullsListReviewCommentsForRepoData,
  PullsListReviewCommentsForRepoParams,
  PullsListReviewCommentsParams,
  PullsListReviewsData,
  PullsListReviewsParams,
  PullsMergeData,
  PullsMergeError,
  PullsMergePayload,
  PullsRemoveRequestedReviewersData,
  PullsRemoveRequestedReviewersPayload,
  PullsRequestReviewersData,
  PullsRequestReviewersPayload,
  PullsSubmitReviewData,
  PullsSubmitReviewPayload,
  PullsUpdateBranchData,
  PullsUpdateBranchPayload,
  PullsUpdateData,
  PullsUpdatePayload,
  PullsUpdateReviewCommentData,
  PullsUpdateReviewCommentPayload,
  PullsUpdateReviewData,
  PullsUpdateReviewPayload,
  ReactionsCreateForCommitCommentData,
  ReactionsCreateForCommitCommentPayload,
  ReactionsCreateForIssueCommentData,
  ReactionsCreateForIssueCommentPayload,
  ReactionsCreateForIssueData,
  ReactionsCreateForIssuePayload,
  ReactionsCreateForPullRequestReviewCommentData,
  ReactionsCreateForPullRequestReviewCommentPayload,
  ReactionsCreateForReleaseData,
  ReactionsCreateForReleasePayload,
  ReactionsDeleteForCommitCommentData,
  ReactionsDeleteForIssueCommentData,
  ReactionsDeleteForIssueData,
  ReactionsDeleteForPullRequestCommentData,
  ReactionsDeleteForReleaseData,
  ReactionsListForCommitCommentData,
  ReactionsListForCommitCommentParams,
  ReactionsListForIssueCommentData,
  ReactionsListForIssueCommentParams,
  ReactionsListForIssueData,
  ReactionsListForIssueParams,
  ReactionsListForPullRequestReviewCommentData,
  ReactionsListForPullRequestReviewCommentParams,
  ReactionsListForReleaseData,
  ReactionsListForReleaseParams,
  ReposAddAppAccessRestrictionsData,
  ReposAddAppAccessRestrictionsPayload,
  ReposAddCollaboratorData,
  ReposAddCollaboratorError,
  ReposAddCollaboratorPayload,
  ReposAddStatusCheckContextsData,
  ReposAddStatusCheckContextsPayload,
  ReposAddTeamAccessRestrictionsData,
  ReposAddTeamAccessRestrictionsPayload,
  ReposAddUserAccessRestrictionsData,
  ReposAddUserAccessRestrictionsPayload,
  ReposCheckAutomatedSecurityFixesData,
  ReposCheckCollaboratorData,
  ReposCheckVulnerabilityAlertsData,
  ReposCodeownersErrorsData,
  ReposCodeownersErrorsParams,
  ReposCompareCommitsData,
  ReposCompareCommitsParams,
  ReposCreateAutolinkData,
  ReposCreateAutolinkPayload,
  ReposCreateCommitCommentData,
  ReposCreateCommitCommentPayload,
  ReposCreateCommitSignatureProtectionData,
  ReposCreateCommitStatusData,
  ReposCreateCommitStatusPayload,
  ReposCreateDeployKeyData,
  ReposCreateDeployKeyPayload,
  ReposCreateDeploymentBranchPolicyData,
  ReposCreateDeploymentData,
  ReposCreateDeploymentPayload,
  ReposCreateDeploymentProtectionRuleData,
  ReposCreateDeploymentProtectionRulePayload,
  ReposCreateDeploymentStatusData,
  ReposCreateDeploymentStatusPayload,
  ReposCreateDispatchEventData,
  ReposCreateDispatchEventPayload,
  ReposCreateForkData,
  ReposCreateForkPayload,
  ReposCreateOrUpdateCustomPropertiesValuesData,
  ReposCreateOrUpdateCustomPropertiesValuesPayload,
  ReposCreateOrUpdateEnvironmentData,
  ReposCreateOrUpdateEnvironmentError,
  ReposCreateOrUpdateEnvironmentPayload,
  ReposCreateOrUpdateFileContentsData,
  ReposCreateOrUpdateFileContentsError,
  ReposCreateOrUpdateFileContentsPayload,
  ReposCreatePagesDeploymentData,
  ReposCreatePagesDeploymentPayload,
  ReposCreatePagesSiteData,
  ReposCreatePagesSitePayload,
  ReposCreateReleaseData,
  ReposCreateReleasePayload,
  ReposCreateRepoRulesetData,
  ReposCreateRepoRulesetPayload,
  ReposCreateTagProtectionData,
  ReposCreateTagProtectionPayload,
  ReposCreateUsingTemplateData,
  ReposCreateUsingTemplatePayload,
  ReposCreateWebhookData,
  ReposCreateWebhookPayload,
  ReposDeleteAccessRestrictionsData,
  ReposDeleteAdminBranchProtectionData,
  ReposDeleteAnEnvironmentData,
  ReposDeleteAutolinkData,
  ReposDeleteBranchProtectionData,
  ReposDeleteCommitCommentData,
  ReposDeleteCommitSignatureProtectionData,
  ReposDeleteData,
  ReposDeleteDeployKeyData,
  ReposDeleteDeploymentBranchPolicyData,
  ReposDeleteDeploymentData,
  ReposDeleteError,
  ReposDeleteFileData,
  ReposDeleteFilePayload,
  ReposDeleteInvitationData,
  ReposDeletePagesSiteData,
  ReposDeletePullRequestReviewProtectionData,
  ReposDeleteReleaseAssetData,
  ReposDeleteReleaseData,
  ReposDeleteRepoRulesetData,
  ReposDeleteTagProtectionData,
  ReposDeleteWebhookData,
  ReposDisableDeploymentProtectionRuleData,
  ReposDisableLfsForRepoData,
  ReposDisableVulnerabilityAlertsData,
  ReposEnableVulnerabilityAlertsData,
  ReposGenerateReleaseNotesData,
  ReposGenerateReleaseNotesPayload,
  ReposGetAccessRestrictionsData,
  ReposGetAdminBranchProtectionData,
  ReposGetAllDeploymentProtectionRulesData,
  ReposGetAllEnvironmentsData,
  ReposGetAllEnvironmentsParams,
  ReposGetAllStatusCheckContextsData,
  ReposGetAllTopicsData,
  ReposGetAllTopicsParams,
  ReposGetAppsWithAccessToProtectedBranchData,
  ReposGetAutolinkData,
  ReposGetBranchData,
  ReposGetBranchProtectionData,
  ReposGetBranchRulesData,
  ReposGetBranchRulesParams,
  ReposGetCodeFrequencyStatsData,
  ReposGetCollaboratorPermissionLevelData,
  ReposGetCombinedStatusForRefData,
  ReposGetCombinedStatusForRefParams,
  ReposGetCommitActivityStatsData,
  ReposGetCommitCommentData,
  ReposGetCommitData,
  ReposGetCommitParams,
  ReposGetCommitSignatureProtectionData,
  ReposGetContentData,
  ReposGetContentParams,
  ReposGetContributorsStatsData,
  ReposGetCustomDeploymentProtectionRuleData,
  ReposGetCustomPropertiesValuesData,
  ReposGetData,
  ReposGetDeployKeyData,
  ReposGetDeploymentBranchPolicyData,
  ReposGetDeploymentData,
  ReposGetDeploymentStatusData,
  ReposGetEnvironmentData,
  ReposGetLatestPagesBuildData,
  ReposGetLatestReleaseData,
  ReposGetPagesBuildData,
  ReposGetPagesData,
  ReposGetPagesDeploymentData,
  ReposGetParticipationStatsData,
  ReposGetPullRequestReviewProtectionData,
  ReposGetPunchCardStatsData,
  ReposGetReadmeData,
  ReposGetReadmeInDirectoryData,
  ReposGetReadmeInDirectoryParams,
  ReposGetReadmeParams,
  ReposGetReleaseAssetData,
  ReposGetReleaseByTagData,
  ReposGetReleaseData,
  ReposGetRepoPushBypassRequestData,
  ReposGetRepoRulesetData,
  ReposGetRepoRulesetParams,
  ReposGetRepoRulesetsData,
  ReposGetRepoRulesetsParams,
  ReposGetRepoRuleSuiteData,
  ReposGetRepoRuleSuitesData,
  ReposGetRepoRuleSuitesParams,
  ReposGetStatusChecksProtectionData,
  ReposGetTeamsWithAccessToProtectedBranchData,
  ReposGetUsersWithAccessToProtectedBranchData,
  ReposGetWebhookConfigForRepoData,
  ReposGetWebhookData,
  ReposGetWebhookDeliveryData,
  ReposListActivitiesData,
  ReposListActivitiesParams,
  ReposListAutolinksData,
  ReposListBranchesData,
  ReposListBranchesForHeadCommitData,
  ReposListBranchesParams,
  ReposListCacheInfoData,
  ReposListCacheInfoParams,
  ReposListCollaboratorsData,
  ReposListCollaboratorsParams,
  ReposListCommentsForCommitData,
  ReposListCommentsForCommitParams,
  ReposListCommitCommentsForRepoData,
  ReposListCommitCommentsForRepoParams,
  ReposListCommitsData,
  ReposListCommitsParams,
  ReposListCommitStatusesForRefData,
  ReposListCommitStatusesForRefParams,
  ReposListContributorsData,
  ReposListContributorsParams,
  ReposListCustomDeploymentRuleIntegrationsData,
  ReposListCustomDeploymentRuleIntegrationsParams,
  ReposListDeployKeysData,
  ReposListDeployKeysParams,
  ReposListDeploymentBranchPoliciesData,
  ReposListDeploymentBranchPoliciesParams,
  ReposListDeploymentsData,
  ReposListDeploymentsParams,
  ReposListDeploymentStatusesData,
  ReposListDeploymentStatusesParams,
  ReposListForksData,
  ReposListForksParams,
  ReposListInvitationsData,
  ReposListInvitationsParams,
  ReposListLanguagesData,
  ReposListPagesBuildsData,
  ReposListPagesBuildsParams,
  ReposListPullRequestsAssociatedWithCommitData,
  ReposListPullRequestsAssociatedWithCommitParams,
  ReposListReleaseAssetsData,
  ReposListReleaseAssetsParams,
  ReposListReleasesData,
  ReposListReleasesParams,
  ReposListRepoPushBypassRequestsData,
  ReposListRepoPushBypassRequestsParams,
  ReposListTagProtectionData,
  ReposListTagsData,
  ReposListTagsParams,
  ReposListTeamsData,
  ReposListTeamsParams,
  ReposListWebhookDeliveriesData,
  ReposListWebhookDeliveriesParams,
  ReposListWebhooksData,
  ReposListWebhooksParams,
  ReposMergeData,
  ReposMergePayload,
  ReposMergeUpstreamData,
  ReposMergeUpstreamPayload,
  ReposPingWebhookData,
  ReposRemoveAppAccessRestrictionsData,
  ReposRemoveAppAccessRestrictionsPayload,
  ReposRemoveCollaboratorData,
  ReposRemoveStatusCheckContextsData,
  ReposRemoveStatusCheckContextsPayload,
  ReposRemoveStatusCheckProtectionData,
  ReposRemoveTeamAccessRestrictionsData,
  ReposRemoveTeamAccessRestrictionsPayload,
  ReposRemoveUserAccessRestrictionsData,
  ReposRemoveUserAccessRestrictionsPayload,
  ReposRenameBranchData,
  ReposRenameBranchPayload,
  ReposReplaceAllTopicsData,
  ReposReplaceAllTopicsPayload,
  ReposRequestPagesBuildData,
  ReposSetAdminBranchProtectionData,
  ReposSetAppAccessRestrictionsData,
  ReposSetAppAccessRestrictionsPayload,
  ReposSetStatusCheckContextsData,
  ReposSetStatusCheckContextsPayload,
  ReposSetTeamAccessRestrictionsData,
  ReposSetTeamAccessRestrictionsPayload,
  ReposSetUserAccessRestrictionsData,
  ReposSetUserAccessRestrictionsPayload,
  ReposTestPushWebhookData,
  ReposTransferData,
  ReposTransferPayload,
  ReposUpdateBranchProtectionData,
  ReposUpdateBranchProtectionPayload,
  ReposUpdateCommitCommentData,
  ReposUpdateCommitCommentPayload,
  ReposUpdateData,
  ReposUpdateDeploymentBranchPolicyData,
  ReposUpdateInformationAboutPagesSiteData,
  ReposUpdateInformationAboutPagesSitePayload,
  ReposUpdateInvitationData,
  ReposUpdateInvitationPayload,
  ReposUpdatePayload,
  ReposUpdatePullRequestReviewProtectionData,
  ReposUpdatePullRequestReviewProtectionPayload,
  ReposUpdateReleaseAssetData,
  ReposUpdateReleaseAssetPayload,
  ReposUpdateReleaseData,
  ReposUpdateReleasePayload,
  ReposUpdateRepoRulesetData,
  ReposUpdateRepoRulesetPayload,
  ReposUpdateStatusCheckProtectionData,
  ReposUpdateStatusCheckProtectionPayload,
  ReposUpdateWebhookConfigForRepoData,
  ReposUpdateWebhookConfigForRepoPayload,
  ReposUpdateWebhookData,
  ReposUpdateWebhookPayload,
  ReposUploadReleaseAssetData,
  ReposUploadReleaseAssetParams,
  ReposUploadReleaseAssetPayload,
  Runner,
  RunnerLabel,
  SecretScanningCreatePushProtectionBypassData,
  SecretScanningCreatePushProtectionBypassPayload,
  SecretScanningDismissBypassResponseData,
  SecretScanningGetAlertData,
  SecretScanningGetBypassRequestData,
  SecretScanningGetScanHistoryData,
  SecretScanningListAlertsForRepoData,
  SecretScanningListAlertsForRepoParams,
  SecretScanningListLocationsForAlertData,
  SecretScanningListLocationsForAlertParams,
  SecretScanningListRepoBypassRequestsData,
  SecretScanningListRepoBypassRequestsParams,
  SecretScanningReviewBypassRequestData,
  SecretScanningReviewBypassRequestPayload,
  SecretScanningUpdateAlertData,
  SecretScanningUpdateAlertPayload,
  SelectedActions,
  Snapshot,
  ValidationError,
  ValidationErrorSimple,
} from "./data-contracts";
import { ContentType, HttpClient, RequestParams } from "./http-client";

export class Repos<SecurityDataType = unknown> {
  http: HttpClient<SecurityDataType>;

  constructor(http: HttpClient<SecurityDataType>) {
    this.http = http;
  }

  /**
   * @description The `parent` and `source` objects are present when the repository is a fork. `parent` is the repository this repository was forked from, `source` is the ultimate source for the network. > [!NOTE] > In order to see the `security_and_analysis` block for a repository you must have admin permissions for the repository or be an owner or security manager for the organization that owns the repository. For more information, see "[Managing security managers in your organization](https://docs.github.com/enterprise-server@3.17/organizations/managing-peoples-access-to-your-organization-with-roles/managing-security-managers-in-your-organization)."
   *
   * @tags repos
   * @name ReposGet
   * @summary Get a repository
   * @request GET:/repos/{owner}/{repo}
   */
  reposGet = (owner: string, repo: string, params: RequestParams = {}) =>
    this.http.request<ReposGetData, BasicError>({
      path: `/repos/${owner}/${repo}`,
      method: "GET",
      format: "json",
      ...params,
    });
  /**
   * @description **Note**: To edit a repository's topics, use the [Replace all repository topics](https://docs.github.com/enterprise-server@3.17/rest/repos/repos#replace-all-repository-topics) endpoint.
   *
   * @tags repos
   * @name ReposUpdate
   * @summary Update a repository
   * @request PATCH:/repos/{owner}/{repo}
   */
  reposUpdate = (
    owner: string,
    repo: string,
    data?: ReposUpdatePayload,
    params: RequestParams = {},
  ) =>
    this.http.request<ReposUpdateData, BasicError | ValidationError>({
      path: `/repos/${owner}/${repo}`,
      method: "PATCH",
      body: data,
      type: ContentType.Json,
      format: "json",
      ...params,
    });
  /**
   * @description Deleting a repository requires admin access. If an organization owner has configured the organization to prevent members from deleting organization-owned repositories, you will get a `403 Forbidden` response. OAuth app tokens and personal access tokens (classic) need the `delete_repo` scope to use this endpoint.
   *
   * @tags repos
   * @name ReposDelete
   * @summary Delete a repository
   * @request DELETE:/repos/{owner}/{repo}
   */
  reposDelete = (owner: string, repo: string, params: RequestParams = {}) =>
    this.http.request<ReposDeleteData, ReposDeleteError>({
      path: `/repos/${owner}/${repo}`,
      method: "DELETE",
      ...params,
    });
  /**
   * @description Lists all artifacts for a repository. Anyone with read access to the repository can use this endpoint. OAuth app tokens and personal access tokens (classic) need the `repo` scope to use this endpoint with a private repository.
   *
   * @tags actions
   * @name ActionsListArtifactsForRepo
   * @summary List artifacts for a repository
   * @request GET:/repos/{owner}/{repo}/actions/artifacts
   */
  actionsListArtifactsForRepo = (
    { owner, repo, ...query }: ActionsListArtifactsForRepoParams,
    params: RequestParams = {},
  ) =>
    this.http.request<ActionsListArtifactsForRepoData, any>({
      path: `/repos/${owner}/${repo}/actions/artifacts`,
      method: "GET",
      query: query,
      format: "json",
      ...params,
    });
  /**
   * @description Gets a specific artifact for a workflow run. Anyone with read access to the repository can use this endpoint. If the repository is private, OAuth tokens and personal access tokens (classic) need the `repo` scope to use this endpoint.
   *
   * @tags actions
   * @name ActionsGetArtifact
   * @summary Get an artifact
   * @request GET:/repos/{owner}/{repo}/actions/artifacts/{artifact_id}
   */
  actionsGetArtifact = (
    owner: string,
    repo: string,
    artifactId: number,
    params: RequestParams = {},
  ) =>
    this.http.request<ActionsGetArtifactData, any>({
      path: `/repos/${owner}/${repo}/actions/artifacts/${artifactId}`,
      method: "GET",
      format: "json",
      ...params,
    });
  /**
   * @description Deletes an artifact for a workflow run. OAuth tokens and personal access tokens (classic) need the `repo` scope to use this endpoint.
   *
   * @tags actions
   * @name ActionsDeleteArtifact
   * @summary Delete an artifact
   * @request DELETE:/repos/{owner}/{repo}/actions/artifacts/{artifact_id}
   */
  actionsDeleteArtifact = (
    owner: string,
    repo: string,
    artifactId: number,
    params: RequestParams = {},
  ) =>
    this.http.request<ActionsDeleteArtifactData, any>({
      path: `/repos/${owner}/${repo}/actions/artifacts/${artifactId}`,
      method: "DELETE",
      ...params,
    });
  /**
   * @description Gets a redirect URL to download an archive for a repository. This URL expires after 1 minute. Look for `Location:` in the response header to find the URL for the download. The `:archive_format` must be `zip`. OAuth tokens and personal access tokens (classic) need the `repo` scope to use this endpoint.
   *
   * @tags actions
   * @name ActionsDownloadArtifact
   * @summary Download an artifact
   * @request GET:/repos/{owner}/{repo}/actions/artifacts/{artifact_id}/{archive_format}
   */
  actionsDownloadArtifact = (
    owner: string,
    repo: string,
    artifactId: number,
    archiveFormat: string,
    params: RequestParams = {},
  ) =>
    this.http.request<any, void | BasicError>({
      path: `/repos/${owner}/${repo}/actions/artifacts/${artifactId}/${archiveFormat}`,
      method: "GET",
      ...params,
    });
  /**
   * @description Gets GitHub Actions cache usage for a repository. The data fetched using this API is refreshed approximately every 5 minutes, so values returned from this endpoint may take at least 5 minutes to get updated. Anyone with read access to the repository can use this endpoint. If the repository is private, OAuth tokens and personal access tokens (classic) need the `repo` scope to use this endpoint.
   *
   * @tags actions
   * @name ActionsGetActionsCacheUsage
   * @summary Get GitHub Actions cache usage for a repository
   * @request GET:/repos/{owner}/{repo}/actions/cache/usage
   */
  actionsGetActionsCacheUsage = (
    owner: string,
    repo: string,
    params: RequestParams = {},
  ) =>
    this.http.request<ActionsGetActionsCacheUsageData, any>({
      path: `/repos/${owner}/${repo}/actions/cache/usage`,
      method: "GET",
      format: "json",
      ...params,
    });
  /**
   * @description Gets GitHub Actions cache usage policy for a repository. OAuth tokens and personal access tokens (classic) need the `repo` scope to use this endpoint.
   *
   * @tags actions
   * @name ActionsGetActionsCacheUsagePolicy
   * @summary Get GitHub Actions cache usage policy for a repository
   * @request GET:/repos/{owner}/{repo}/actions/cache/usage-policy
   */
  actionsGetActionsCacheUsagePolicy = (
    owner: string,
    repo: string,
    params: RequestParams = {},
  ) =>
    this.http.request<ActionsGetActionsCacheUsagePolicyData, any>({
      path: `/repos/${owner}/${repo}/actions/cache/usage-policy`,
      method: "GET",
      format: "json",
      ...params,
    });
  /**
   * @description Sets GitHub Actions cache usage policy for a repository. OAuth app tokens and personal access tokens (classic) need the `repo` scope to use this endpoint.
   *
   * @tags actions
   * @name ActionsSetActionsCacheUsagePolicy
   * @summary Set GitHub Actions cache usage policy for a repository
   * @request PATCH:/repos/{owner}/{repo}/actions/cache/usage-policy
   */
  actionsSetActionsCacheUsagePolicy = (
    owner: string,
    repo: string,
    data: ActionsCacheUsagePolicyForRepository,
    params: RequestParams = {},
  ) =>
    this.http.request<ActionsSetActionsCacheUsagePolicyData, any>({
      path: `/repos/${owner}/${repo}/actions/cache/usage-policy`,
      method: "PATCH",
      body: data,
      type: ContentType.Json,
      ...params,
    });
  /**
   * @description Lists the GitHub Actions caches for a repository. OAuth tokens and personal access tokens (classic) need the `repo` scope to use this endpoint.
   *
   * @tags actions
   * @name ActionsGetActionsCacheList
   * @summary List GitHub Actions caches for a repository
   * @request GET:/repos/{owner}/{repo}/actions/caches
   */
  actionsGetActionsCacheList = (
    { owner, repo, ...query }: ActionsGetActionsCacheListParams,
    params: RequestParams = {},
  ) =>
    this.http.request<ActionsGetActionsCacheListData, any>({
      path: `/repos/${owner}/${repo}/actions/caches`,
      method: "GET",
      query: query,
      format: "json",
      ...params,
    });
  /**
   * @description Deletes one or more GitHub Actions caches for a repository, using a complete cache key. By default, all caches that match the provided key are deleted, but you can optionally provide a Git ref to restrict deletions to caches that match both the provided key and the Git ref. OAuth tokens and personal access tokens (classic) need the `repo` scope to use this endpoint.
   *
   * @tags actions
   * @name ActionsDeleteActionsCacheByKey
   * @summary Delete GitHub Actions caches for a repository (using a cache key)
   * @request DELETE:/repos/{owner}/{repo}/actions/caches
   */
  actionsDeleteActionsCacheByKey = (
    { owner, repo, ...query }: ActionsDeleteActionsCacheByKeyParams,
    params: RequestParams = {},
  ) =>
    this.http.request<ActionsDeleteActionsCacheByKeyData, any>({
      path: `/repos/${owner}/${repo}/actions/caches`,
      method: "DELETE",
      query: query,
      format: "json",
      ...params,
    });
  /**
   * @description Deletes a GitHub Actions cache for a repository, using a cache ID. OAuth tokens and personal access tokens (classic) need the `repo` scope to use this endpoint.
   *
   * @tags actions
   * @name ActionsDeleteActionsCacheById
   * @summary Delete a GitHub Actions cache for a repository (using a cache ID)
   * @request DELETE:/repos/{owner}/{repo}/actions/caches/{cache_id}
   */
  actionsDeleteActionsCacheById = (
    owner: string,
    repo: string,
    cacheId: number,
    params: RequestParams = {},
  ) =>
    this.http.request<ActionsDeleteActionsCacheByIdData, any>({
      path: `/repos/${owner}/${repo}/actions/caches/${cacheId}`,
      method: "DELETE",
      ...params,
    });
  /**
   * @description Gets a specific job in a workflow run. Anyone with read access to the repository can use this endpoint. If the repository is private, OAuth tokens and personal access tokens (classic) need the `repo` scope to use this endpoint.
   *
   * @tags actions
   * @name ActionsGetJobForWorkflowRun
   * @summary Get a job for a workflow run
   * @request GET:/repos/{owner}/{repo}/actions/jobs/{job_id}
   */
  actionsGetJobForWorkflowRun = (
    owner: string,
    repo: string,
    jobId: number,
    params: RequestParams = {},
  ) =>
    this.http.request<ActionsGetJobForWorkflowRunData, any>({
      path: `/repos/${owner}/${repo}/actions/jobs/${jobId}`,
      method: "GET",
      format: "json",
      ...params,
    });
  /**
   * @description Gets a redirect URL to download a plain text file of logs for a workflow job. This link expires after 1 minute. Look for `Location:` in the response header to find the URL for the download. Anyone with read access to the repository can use this endpoint. If the repository is private, OAuth tokens and personal access tokens (classic) need the `repo` scope to use this endpoint.
   *
   * @tags actions
   * @name ActionsDownloadJobLogsForWorkflowRun
   * @summary Download job logs for a workflow run
   * @request GET:/repos/{owner}/{repo}/actions/jobs/{job_id}/logs
   */
  actionsDownloadJobLogsForWorkflowRun = (
    owner: string,
    repo: string,
    jobId: number,
    params: RequestParams = {},
  ) =>
    this.http.request<any, void>({
      path: `/repos/${owner}/${repo}/actions/jobs/${jobId}/logs`,
      method: "GET",
      ...params,
    });
  /**
   * @description Re-run a job and its dependent jobs in a workflow run. OAuth app tokens and personal access tokens (classic) need the `repo` scope to use this endpoint.
   *
   * @tags actions
   * @name ActionsReRunJobForWorkflowRun
   * @summary Re-run a job from a workflow run
   * @request POST:/repos/{owner}/{repo}/actions/jobs/{job_id}/rerun
   */
  actionsReRunJobForWorkflowRun = (
    owner: string,
    repo: string,
    jobId: number,
    data?: ActionsReRunJobForWorkflowRunPayload,
    params: RequestParams = {},
  ) =>
    this.http.request<ActionsReRunJobForWorkflowRunData, BasicError>({
      path: `/repos/${owner}/${repo}/actions/jobs/${jobId}/rerun`,
      method: "POST",
      body: data,
      type: ContentType.Json,
      format: "json",
      ...params,
    });
  /**
   * @description Gets the customization template for an OpenID Connect (OIDC) subject claim. OAuth tokens and personal access tokens (classic) need the `repo` scope to use this endpoint.
   *
   * @tags actions
   * @name ActionsGetCustomOidcSubClaimForRepo
   * @summary Get the customization template for an OIDC subject claim for a repository
   * @request GET:/repos/{owner}/{repo}/actions/oidc/customization/sub
   */
  actionsGetCustomOidcSubClaimForRepo = (
    owner: string,
    repo: string,
    params: RequestParams = {},
  ) =>
    this.http.request<ActionsGetCustomOidcSubClaimForRepoData, BasicError>({
      path: `/repos/${owner}/${repo}/actions/oidc/customization/sub`,
      method: "GET",
      format: "json",
      ...params,
    });
  /**
   * @description Sets the customization template and `opt-in` or `opt-out` flag for an OpenID Connect (OIDC) subject claim for a repository. OAuth app tokens and personal access tokens (classic) need the `repo` scope to use this endpoint.
   *
   * @tags actions
   * @name ActionsSetCustomOidcSubClaimForRepo
   * @summary Set the customization template for an OIDC subject claim for a repository
   * @request PUT:/repos/{owner}/{repo}/actions/oidc/customization/sub
   */
  actionsSetCustomOidcSubClaimForRepo = (
    owner: string,
    repo: string,
    data: ActionsSetCustomOidcSubClaimForRepoPayload,
    params: RequestParams = {},
  ) =>
    this.http.request<
      ActionsSetCustomOidcSubClaimForRepoData,
      BasicError | ValidationErrorSimple
    >({
      path: `/repos/${owner}/${repo}/actions/oidc/customization/sub`,
      method: "PUT",
      body: data,
      type: ContentType.Json,
      format: "json",
      ...params,
    });
  /**
   * @description Lists all organization secrets shared with a repository without revealing their encrypted values. Authenticated users must have collaborator access to a repository to create, update, or read secrets. OAuth app tokens and personal access tokens (classic) need the `repo` scope to use this endpoint.
   *
   * @tags actions
   * @name ActionsListRepoOrganizationSecrets
   * @summary List repository organization secrets
   * @request GET:/repos/{owner}/{repo}/actions/organization-secrets
   */
  actionsListRepoOrganizationSecrets = (
    { owner, repo, ...query }: ActionsListRepoOrganizationSecretsParams,
    params: RequestParams = {},
  ) =>
    this.http.request<ActionsListRepoOrganizationSecretsData, any>({
      path: `/repos/${owner}/${repo}/actions/organization-secrets`,
      method: "GET",
      query: query,
      format: "json",
      ...params,
    });
  /**
   * @description Lists all organization variables shared with a repository. Authenticated users must have collaborator access to a repository to create, update, or read variables. OAuth app tokens and personal access tokens (classic) need the `repo` scope to use this endpoint.
   *
   * @tags actions
   * @name ActionsListRepoOrganizationVariables
   * @summary List repository organization variables
   * @request GET:/repos/{owner}/{repo}/actions/organization-variables
   */
  actionsListRepoOrganizationVariables = (
    { owner, repo, ...query }: ActionsListRepoOrganizationVariablesParams,
    params: RequestParams = {},
  ) =>
    this.http.request<ActionsListRepoOrganizationVariablesData, any>({
      path: `/repos/${owner}/${repo}/actions/organization-variables`,
      method: "GET",
      query: query,
      format: "json",
      ...params,
    });
  /**
   * @description Gets the GitHub Actions permissions policy for a repository, including whether GitHub Actions is enabled and the actions allowed to run in the repository. You must authenticate using an access token with the `repo` scope to use this endpoint. GitHub Apps must have the `administration` repository permission to use this API.
   *
   * @tags actions
   * @name ActionsGetGithubActionsPermissionsRepository
   * @summary Get GitHub Actions permissions for a repository
   * @request GET:/repos/{owner}/{repo}/actions/permissions
   */
  actionsGetGithubActionsPermissionsRepository = (
    owner: string,
    repo: string,
    params: RequestParams = {},
  ) =>
    this.http.request<ActionsGetGithubActionsPermissionsRepositoryData, any>({
      path: `/repos/${owner}/${repo}/actions/permissions`,
      method: "GET",
      format: "json",
      ...params,
    });
  /**
   * @description Sets the GitHub Actions permissions policy for enabling GitHub Actions and allowed actions in the repository. If the repository belongs to an organization or enterprise that has set restrictive permissions at the organization or enterprise levels, such as `allowed_actions` to `selected` actions, then you cannot override them for the repository. OAuth app tokens and personal access tokens (classic) need the `repo` scope to use this endpoint.
   *
   * @tags actions
   * @name ActionsSetGithubActionsPermissionsRepository
   * @summary Set GitHub Actions permissions for a repository
   * @request PUT:/repos/{owner}/{repo}/actions/permissions
   */
  actionsSetGithubActionsPermissionsRepository = (
    owner: string,
    repo: string,
    data: ActionsSetGithubActionsPermissionsRepositoryPayload,
    params: RequestParams = {},
  ) =>
    this.http.request<ActionsSetGithubActionsPermissionsRepositoryData, any>({
      path: `/repos/${owner}/${repo}/actions/permissions`,
      method: "PUT",
      body: data,
      type: ContentType.Json,
      ...params,
    });
  /**
   * @description Gets the level of access that workflows outside of the repository have to actions and reusable workflows in the repository. This endpoint only applies to internal and private repositories. For more information, see "[Allowing access to components in a private repository](https://docs.github.com/enterprise-server@3.17/repositories/managing-your-repositorys-settings-and-features/enabling-features-for-your-repository/managing-github-actions-settings-for-a-repository#allowing-access-to-components-in-a-private-repository)" and "[Allowing access to components in an internal repository](https://docs.github.com/enterprise-server@3.17/repositories/managing-your-repositorys-settings-and-features/enabling-features-for-your-repository/managing-github-actions-settings-for-a-repository#allowing-access-to-components-in-an-internal-repository)." OAuth app tokens and personal access tokens (classic) need the `repo` scope to use this endpoint.
   *
   * @tags actions
   * @name ActionsGetWorkflowAccessToRepository
   * @summary Get the level of access for workflows outside of the repository
   * @request GET:/repos/{owner}/{repo}/actions/permissions/access
   */
  actionsGetWorkflowAccessToRepository = (
    owner: string,
    repo: string,
    params: RequestParams = {},
  ) =>
    this.http.request<ActionsGetWorkflowAccessToRepositoryData, any>({
      path: `/repos/${owner}/${repo}/actions/permissions/access`,
      method: "GET",
      format: "json",
      ...params,
    });
  /**
   * @description Sets the level of access that workflows outside of the repository have to actions and reusable workflows in the repository. This endpoint only applies to internal and private repositories. For more information, see "[Allowing access to components in a private repository](https://docs.github.com/enterprise-server@3.17/repositories/managing-your-repositorys-settings-and-features/enabling-features-for-your-repository/managing-github-actions-settings-for-a-repository#allowing-access-to-components-in-a-private-repository)" and "[Allowing access to components in an internal repository](https://docs.github.com/enterprise-server@3.17/repositories/managing-your-repositorys-settings-and-features/enabling-features-for-your-repository/managing-github-actions-settings-for-a-repository#allowing-access-to-components-in-an-internal-repository)." OAuth app tokens and personal access tokens (classic) need the `repo` scope to use this endpoint.
   *
   * @tags actions
   * @name ActionsSetWorkflowAccessToRepository
   * @summary Set the level of access for workflows outside of the repository
   * @request PUT:/repos/{owner}/{repo}/actions/permissions/access
   */
  actionsSetWorkflowAccessToRepository = (
    owner: string,
    repo: string,
    data: ActionsWorkflowAccessToRepository,
    params: RequestParams = {},
  ) =>
    this.http.request<ActionsSetWorkflowAccessToRepositoryData, any>({
      path: `/repos/${owner}/${repo}/actions/permissions/access`,
      method: "PUT",
      body: data,
      type: ContentType.Json,
      ...params,
    });
  /**
   * @description Gets the settings for selected actions that are allowed in a repository. To use this endpoint, the repository policy for `allowed_actions` must be configured to `selected`. For more information, see "[Set GitHub Actions permissions for a repository](#set-github-actions-permissions-for-a-repository)." You must authenticate using an access token with the `repo` scope to use this endpoint. GitHub Apps must have the `administration` repository permission to use this API.
   *
   * @tags actions
   * @name ActionsGetAllowedActionsRepository
   * @summary Get allowed actions for a repository
   * @request GET:/repos/{owner}/{repo}/actions/permissions/selected-actions
   */
  actionsGetAllowedActionsRepository = (
    owner: string,
    repo: string,
    params: RequestParams = {},
  ) =>
    this.http.request<ActionsGetAllowedActionsRepositoryData, any>({
      path: `/repos/${owner}/${repo}/actions/permissions/selected-actions`,
      method: "GET",
      format: "json",
      ...params,
    });
  /**
   * @description Sets the actions that are allowed in a repository. To use this endpoint, the repository permission policy for `allowed_actions` must be configured to `selected`. For more information, see "[Set GitHub Actions permissions for a repository](#set-github-actions-permissions-for-a-repository)." If the repository belongs to an organization or enterprise that has `selected` actions set at the organization or enterprise levels, then you cannot override any of the allowed actions settings. To use the `patterns_allowed` setting for private repositories, the repository must belong to an enterprise. If the repository does not belong to an enterprise, then the `patterns_allowed` setting only applies to public repositories. OAuth app tokens and personal access tokens (classic) need the `repo` scope to use this endpoint.
   *
   * @tags actions
   * @name ActionsSetAllowedActionsRepository
   * @summary Set allowed actions for a repository
   * @request PUT:/repos/{owner}/{repo}/actions/permissions/selected-actions
   */
  actionsSetAllowedActionsRepository = (
    owner: string,
    repo: string,
    data?: SelectedActions,
    params: RequestParams = {},
  ) =>
    this.http.request<ActionsSetAllowedActionsRepositoryData, any>({
      path: `/repos/${owner}/${repo}/actions/permissions/selected-actions`,
      method: "PUT",
      body: data,
      type: ContentType.Json,
      ...params,
    });
  /**
   * @description Gets the default workflow permissions granted to the `GITHUB_TOKEN` when running workflows in a repository, as well as if GitHub Actions can submit approving pull request reviews. For more information, see "[Setting the permissions of the GITHUB_TOKEN for your repository](https://docs.github.com/enterprise-server@3.17/repositories/managing-your-repositorys-settings-and-features/enabling-features-for-your-repository/managing-github-actions-settings-for-a-repository#setting-the-permissions-of-the-github_token-for-your-repository)." OAuth tokens and personal access tokens (classic) need the `repo` scope to use this endpoint.
   *
   * @tags actions
   * @name ActionsGetGithubActionsDefaultWorkflowPermissionsRepository
   * @summary Get default workflow permissions for a repository
   * @request GET:/repos/{owner}/{repo}/actions/permissions/workflow
   */
  actionsGetGithubActionsDefaultWorkflowPermissionsRepository = (
    owner: string,
    repo: string,
    params: RequestParams = {},
  ) =>
    this.http.request<
      ActionsGetGithubActionsDefaultWorkflowPermissionsRepositoryData,
      any
    >({
      path: `/repos/${owner}/${repo}/actions/permissions/workflow`,
      method: "GET",
      format: "json",
      ...params,
    });
  /**
   * @description Sets the default workflow permissions granted to the `GITHUB_TOKEN` when running workflows in a repository, and sets if GitHub Actions can submit approving pull request reviews. For more information, see "[Setting the permissions of the GITHUB_TOKEN for your repository](https://docs.github.com/enterprise-server@3.17/repositories/managing-your-repositorys-settings-and-features/enabling-features-for-your-repository/managing-github-actions-settings-for-a-repository#setting-the-permissions-of-the-github_token-for-your-repository)." OAuth app tokens and personal access tokens (classic) need the `repo` scope to use this endpoint.
   *
   * @tags actions
   * @name ActionsSetGithubActionsDefaultWorkflowPermissionsRepository
   * @summary Set default workflow permissions for a repository
   * @request PUT:/repos/{owner}/{repo}/actions/permissions/workflow
   */
  actionsSetGithubActionsDefaultWorkflowPermissionsRepository = (
    owner: string,
    repo: string,
    data: ActionsSetDefaultWorkflowPermissions,
    params: RequestParams = {},
  ) =>
    this.http.request<
      ActionsSetGithubActionsDefaultWorkflowPermissionsRepositoryData,
      void
    >({
      path: `/repos/${owner}/${repo}/actions/permissions/workflow`,
      method: "PUT",
      body: data,
      type: ContentType.Json,
      ...params,
    });
  /**
   * @description Lists all self-hosted runners configured in a repository. Authenticated users must have admin access to the repository to use this endpoint. OAuth app tokens and personal access tokens (classic) need the `repo` scope to use this endpoint.
   *
   * @tags actions
   * @name ActionsListSelfHostedRunnersForRepo
   * @summary List self-hosted runners for a repository
   * @request GET:/repos/{owner}/{repo}/actions/runners
   */
  actionsListSelfHostedRunnersForRepo = (
    { owner, repo, ...query }: ActionsListSelfHostedRunnersForRepoParams,
    params: RequestParams = {},
  ) =>
    this.http.request<ActionsListSelfHostedRunnersForRepoData, any>({
      path: `/repos/${owner}/${repo}/actions/runners`,
      method: "GET",
      query: query,
      format: "json",
      ...params,
    });
  /**
   * @description Lists binaries for the runner application that you can download and run. Authenticated users must have admin access to the repository to use this endpoint. OAuth app tokens and personal access tokens (classic) need the `repo` scope to use this endpoint.
   *
   * @tags actions
   * @name ActionsListRunnerApplicationsForRepo
   * @summary List runner applications for a repository
   * @request GET:/repos/{owner}/{repo}/actions/runners/downloads
   */
  actionsListRunnerApplicationsForRepo = (
    owner: string,
    repo: string,
    params: RequestParams = {},
  ) =>
    this.http.request<ActionsListRunnerApplicationsForRepoData, any>({
      path: `/repos/${owner}/${repo}/actions/runners/downloads`,
      method: "GET",
      format: "json",
      ...params,
    });
  /**
   * @description Generates a configuration that can be passed to the runner application at startup. The authenticated user must have admin access to the repository. OAuth tokens and personal access tokens (classic) need the`repo` scope to use this endpoint.
   *
   * @tags actions
   * @name ActionsGenerateRunnerJitconfigForRepo
   * @summary Create configuration for a just-in-time runner for a repository
   * @request POST:/repos/{owner}/{repo}/actions/runners/generate-jitconfig
   */
  actionsGenerateRunnerJitconfigForRepo = (
    owner: string,
    repo: string,
    data: ActionsGenerateRunnerJitconfigForRepoPayload,
    params: RequestParams = {},
  ) =>
    this.http.request<
      {
        /** A self hosted runner */
        runner: Runner;
        /** The base64 encoded runner configuration. */
        encoded_jit_config: string;
      },
      BasicError | ValidationErrorSimple
    >({
      path: `/repos/${owner}/${repo}/actions/runners/generate-jitconfig`,
      method: "POST",
      body: data,
      type: ContentType.Json,
      ...params,
    });
  /**
   * @description Returns a token that you can pass to the `config` script. The token expires after one hour. For example, you can replace `TOKEN` in the following example with the registration token provided by this endpoint to configure your self-hosted runner: ``` ./config.sh --url https://github.com/octo-org --token TOKEN ``` Authenticated users must have admin access to the repository to use this endpoint. OAuth tokens and personal access tokens (classic) need the `repo` scope to use this endpoint.
   *
   * @tags actions
   * @name ActionsCreateRegistrationTokenForRepo
   * @summary Create a registration token for a repository
   * @request POST:/repos/{owner}/{repo}/actions/runners/registration-token
   */
  actionsCreateRegistrationTokenForRepo = (
    owner: string,
    repo: string,
    params: RequestParams = {},
  ) =>
    this.http.request<ActionsCreateRegistrationTokenForRepoData, any>({
      path: `/repos/${owner}/${repo}/actions/runners/registration-token`,
      method: "POST",
      format: "json",
      ...params,
    });
  /**
   * @description Returns a token that you can pass to the `config` script to remove a self-hosted runner from an repository. The token expires after one hour. For example, you can replace `TOKEN` in the following example with the registration token provided by this endpoint to remove your self-hosted runner from an organization: ``` ./config.sh remove --token TOKEN ``` Authenticated users must have admin access to the repository to use this endpoint. OAuth tokens and personal access tokens (classic) need the `repo` scope to use this endpoint.
   *
   * @tags actions
   * @name ActionsCreateRemoveTokenForRepo
   * @summary Create a remove token for a repository
   * @request POST:/repos/{owner}/{repo}/actions/runners/remove-token
   */
  actionsCreateRemoveTokenForRepo = (
    owner: string,
    repo: string,
    params: RequestParams = {},
  ) =>
    this.http.request<ActionsCreateRemoveTokenForRepoData, any>({
      path: `/repos/${owner}/${repo}/actions/runners/remove-token`,
      method: "POST",
      format: "json",
      ...params,
    });
  /**
   * @description Gets a specific self-hosted runner configured in a repository. Authenticated users must have admin access to the repository to use this endpoint. OAuth app tokens and personal access tokens (classic) need the `repo` scope to use this endpoint.
   *
   * @tags actions
   * @name ActionsGetSelfHostedRunnerForRepo
   * @summary Get a self-hosted runner for a repository
   * @request GET:/repos/{owner}/{repo}/actions/runners/{runner_id}
   */
  actionsGetSelfHostedRunnerForRepo = (
    owner: string,
    repo: string,
    runnerId: number,
    params: RequestParams = {},
  ) =>
    this.http.request<ActionsGetSelfHostedRunnerForRepoData, any>({
      path: `/repos/${owner}/${repo}/actions/runners/${runnerId}`,
      method: "GET",
      format: "json",
      ...params,
    });
  /**
   * @description Forces the removal of a self-hosted runner from a repository. You can use this endpoint to completely remove the runner when the machine you were using no longer exists. Authenticated users must have admin access to the repository to use this endpoint. OAuth tokens and personal access tokens (classic) need the `repo` scope to use this endpoint.
   *
   * @tags actions
   * @name ActionsDeleteSelfHostedRunnerFromRepo
   * @summary Delete a self-hosted runner from a repository
   * @request DELETE:/repos/{owner}/{repo}/actions/runners/{runner_id}
   */
  actionsDeleteSelfHostedRunnerFromRepo = (
    owner: string,
    repo: string,
    runnerId: number,
    params: RequestParams = {},
  ) =>
    this.http.request<
      ActionsDeleteSelfHostedRunnerFromRepoData,
      ValidationErrorSimple
    >({
      path: `/repos/${owner}/${repo}/actions/runners/${runnerId}`,
      method: "DELETE",
      ...params,
    });
  /**
   * @description Lists all labels for a self-hosted runner configured in a repository. Authenticated users must have admin access to the repository to use this endpoint. OAuth app tokens and personal access tokens (classic) need the `repo` scope to use this endpoint.
   *
   * @tags actions
   * @name ActionsListLabelsForSelfHostedRunnerForRepo
   * @summary List labels for a self-hosted runner for a repository
   * @request GET:/repos/{owner}/{repo}/actions/runners/{runner_id}/labels
   */
  actionsListLabelsForSelfHostedRunnerForRepo = (
    owner: string,
    repo: string,
    runnerId: number,
    params: RequestParams = {},
  ) =>
    this.http.request<
      {
        total_count: number;
        labels: RunnerLabel[];
      },
      BasicError
    >({
      path: `/repos/${owner}/${repo}/actions/runners/${runnerId}/labels`,
      method: "GET",
      ...params,
    });
  /**
   * @description Adds custom labels to a self-hosted runner configured in a repository. Authenticated users must have admin access to the organization to use this endpoint. OAuth tokens and personal access tokens (classic) need the `repo` scope to use this endpoint.
   *
   * @tags actions
   * @name ActionsAddCustomLabelsToSelfHostedRunnerForRepo
   * @summary Add custom labels to a self-hosted runner for a repository
   * @request POST:/repos/{owner}/{repo}/actions/runners/{runner_id}/labels
   */
  actionsAddCustomLabelsToSelfHostedRunnerForRepo = (
    owner: string,
    repo: string,
    runnerId: number,
    data: ActionsAddCustomLabelsToSelfHostedRunnerForRepoPayload,
    params: RequestParams = {},
  ) =>
    this.http.request<
      {
        total_count: number;
        labels: RunnerLabel[];
      },
      BasicError | ValidationErrorSimple
    >({
      path: `/repos/${owner}/${repo}/actions/runners/${runnerId}/labels`,
      method: "POST",
      body: data,
      type: ContentType.Json,
      ...params,
    });
  /**
   * @description Remove all previous custom labels and set the new custom labels for a specific self-hosted runner configured in a repository. Authenticated users must have admin access to the repository to use this endpoint. OAuth app tokens and personal access tokens (classic) need the `repo` scope to use this endpoint.
   *
   * @tags actions
   * @name ActionsSetCustomLabelsForSelfHostedRunnerForRepo
   * @summary Set custom labels for a self-hosted runner for a repository
   * @request PUT:/repos/{owner}/{repo}/actions/runners/{runner_id}/labels
   */
  actionsSetCustomLabelsForSelfHostedRunnerForRepo = (
    owner: string,
    repo: string,
    runnerId: number,
    data: ActionsSetCustomLabelsForSelfHostedRunnerForRepoPayload,
    params: RequestParams = {},
  ) =>
    this.http.request<
      {
        total_count: number;
        labels: RunnerLabel[];
      },
      BasicError | ValidationErrorSimple
    >({
      path: `/repos/${owner}/${repo}/actions/runners/${runnerId}/labels`,
      method: "PUT",
      body: data,
      type: ContentType.Json,
      ...params,
    });
  /**
   * @description Remove all custom labels from a self-hosted runner configured in a repository. Returns the remaining read-only labels from the runner. Authenticated users must have admin access to the repository to use this endpoint. OAuth app tokens and personal access tokens (classic) need the `repo` scope to use this endpoint.
   *
   * @tags actions
   * @name ActionsRemoveAllCustomLabelsFromSelfHostedRunnerForRepo
   * @summary Remove all custom labels from a self-hosted runner for a repository
   * @request DELETE:/repos/{owner}/{repo}/actions/runners/{runner_id}/labels
   */
  actionsRemoveAllCustomLabelsFromSelfHostedRunnerForRepo = (
    owner: string,
    repo: string,
    runnerId: number,
    params: RequestParams = {},
  ) =>
    this.http.request<
      {
        total_count: number;
        labels: RunnerLabel[];
      },
      BasicError
    >({
      path: `/repos/${owner}/${repo}/actions/runners/${runnerId}/labels`,
      method: "DELETE",
      ...params,
    });
  /**
   * @description Remove a custom label from a self-hosted runner configured in a repository. Returns the remaining labels from the runner. This endpoint returns a `404 Not Found` status if the custom label is not present on the runner. Authenticated users must have admin access to the repository to use this endpoint. OAuth app tokens and personal access tokens (classic) need the `repo` scope to use this endpoint.
   *
   * @tags actions
   * @name ActionsRemoveCustomLabelFromSelfHostedRunnerForRepo
   * @summary Remove a custom label from a self-hosted runner for a repository
   * @request DELETE:/repos/{owner}/{repo}/actions/runners/{runner_id}/labels/{name}
   */
  actionsRemoveCustomLabelFromSelfHostedRunnerForRepo = (
    owner: string,
    repo: string,
    runnerId: number,
    name: string,
    params: RequestParams = {},
  ) =>
    this.http.request<
      {
        total_count: number;
        labels: RunnerLabel[];
      },
      BasicError | ValidationErrorSimple
    >({
      path: `/repos/${owner}/${repo}/actions/runners/${runnerId}/labels/${name}`,
      method: "DELETE",
      ...params,
    });
  /**
   * @description Lists all workflow runs for a repository. You can use parameters to narrow the list of results. For more information about using parameters, see [Parameters](https://docs.github.com/enterprise-server@3.17/rest/guides/getting-started-with-the-rest-api#parameters). Anyone with read access to the repository can use this endpoint. OAuth app tokens and personal access tokens (classic) need the `repo` scope to use this endpoint with a private repository. This endpoint will return up to 1,000 results for each search when using the following parameters: `actor`, `branch`, `check_suite_id`, `created`, `event`, `head_sha`, `status`.
   *
   * @tags actions
   * @name ActionsListWorkflowRunsForRepo
   * @summary List workflow runs for a repository
   * @request GET:/repos/{owner}/{repo}/actions/runs
   */
  actionsListWorkflowRunsForRepo = (
    { owner, repo, ...query }: ActionsListWorkflowRunsForRepoParams,
    params: RequestParams = {},
  ) =>
    this.http.request<ActionsListWorkflowRunsForRepoData, any>({
      path: `/repos/${owner}/${repo}/actions/runs`,
      method: "GET",
      query: query,
      format: "json",
      ...params,
    });
  /**
   * @description Gets a specific workflow run. Anyone with read access to the repository can use this endpoint. OAuth app tokens and personal access tokens (classic) need the `repo` scope to use this endpoint with a private repository.
   *
   * @tags actions
   * @name ActionsGetWorkflowRun
   * @summary Get a workflow run
   * @request GET:/repos/{owner}/{repo}/actions/runs/{run_id}
   */
  actionsGetWorkflowRun = (
    { owner, repo, runId, ...query }: ActionsGetWorkflowRunParams,
    params: RequestParams = {},
  ) =>
    this.http.request<ActionsGetWorkflowRunData, any>({
      path: `/repos/${owner}/${repo}/actions/runs/${runId}`,
      method: "GET",
      query: query,
      format: "json",
      ...params,
    });
  /**
   * @description Deletes a specific workflow run. Anyone with write access to the repository can use this endpoint. If the repository is private, OAuth tokens and personal access tokens (classic) need the `repo` scope to use this endpoint.
   *
   * @tags actions
   * @name ActionsDeleteWorkflowRun
   * @summary Delete a workflow run
   * @request DELETE:/repos/{owner}/{repo}/actions/runs/{run_id}
   */
  actionsDeleteWorkflowRun = (
    owner: string,
    repo: string,
    runId: number,
    params: RequestParams = {},
  ) =>
    this.http.request<ActionsDeleteWorkflowRunData, any>({
      path: `/repos/${owner}/${repo}/actions/runs/${runId}`,
      method: "DELETE",
      ...params,
    });
  /**
   * @description Anyone with read access to the repository can use this endpoint. OAuth app tokens and personal access tokens (classic) need the `repo` scope to use this endpoint with a private repository.
   *
   * @tags actions
   * @name ActionsGetReviewsForRun
   * @summary Get the review history for a workflow run
   * @request GET:/repos/{owner}/{repo}/actions/runs/{run_id}/approvals
   */
  actionsGetReviewsForRun = (
    owner: string,
    repo: string,
    runId: number,
    params: RequestParams = {},
  ) =>
    this.http.request<ActionsGetReviewsForRunData, any>({
      path: `/repos/${owner}/${repo}/actions/runs/${runId}/approvals`,
      method: "GET",
      format: "json",
      ...params,
    });
  /**
   * @description Lists artifacts for a workflow run. Anyone with read access to the repository can use this endpoint. OAuth app tokens and personal access tokens (classic) need the `repo` scope to use this endpoint with a private repository.
   *
   * @tags actions
   * @name ActionsListWorkflowRunArtifacts
   * @summary List workflow run artifacts
   * @request GET:/repos/{owner}/{repo}/actions/runs/{run_id}/artifacts
   */
  actionsListWorkflowRunArtifacts = (
    { owner, repo, runId, ...query }: ActionsListWorkflowRunArtifactsParams,
    params: RequestParams = {},
  ) =>
    this.http.request<ActionsListWorkflowRunArtifactsData, any>({
      path: `/repos/${owner}/${repo}/actions/runs/${runId}/artifacts`,
      method: "GET",
      query: query,
      format: "json",
      ...params,
    });
  /**
   * @description Gets a specific workflow run attempt. Anyone with read access to the repository can use this endpoint. OAuth app tokens and personal access tokens (classic) need the `repo` scope to use this endpoint with a private repository.
   *
   * @tags actions
   * @name ActionsGetWorkflowRunAttempt
   * @summary Get a workflow run attempt
   * @request GET:/repos/{owner}/{repo}/actions/runs/{run_id}/attempts/{attempt_number}
   */
  actionsGetWorkflowRunAttempt = (
    {
      owner,
      repo,
      runId,
      attemptNumber,
      ...query
    }: ActionsGetWorkflowRunAttemptParams,
    params: RequestParams = {},
  ) =>
    this.http.request<ActionsGetWorkflowRunAttemptData, any>({
      path: `/repos/${owner}/${repo}/actions/runs/${runId}/attempts/${attemptNumber}`,
      method: "GET",
      query: query,
      format: "json",
      ...params,
    });
  /**
   * @description Lists jobs for a specific workflow run attempt. You can use parameters to narrow the list of results. For more information about using parameters, see [Parameters](https://docs.github.com/enterprise-server@3.17/rest/guides/getting-started-with-the-rest-api#parameters). Anyone with read access to the repository can use this endpoint. OAuth app tokens and personal access tokens (classic) need the `repo` scope to use this endpoint  with a private repository.
   *
   * @tags actions
   * @name ActionsListJobsForWorkflowRunAttempt
   * @summary List jobs for a workflow run attempt
   * @request GET:/repos/{owner}/{repo}/actions/runs/{run_id}/attempts/{attempt_number}/jobs
   */
  actionsListJobsForWorkflowRunAttempt = (
    {
      owner,
      repo,
      runId,
      attemptNumber,
      ...query
    }: ActionsListJobsForWorkflowRunAttemptParams,
    params: RequestParams = {},
  ) =>
    this.http.request<ActionsListJobsForWorkflowRunAttemptData, BasicError>({
      path: `/repos/${owner}/${repo}/actions/runs/${runId}/attempts/${attemptNumber}/jobs`,
      method: "GET",
      query: query,
      format: "json",
      ...params,
    });
  /**
   * @description Gets a redirect URL to download an archive of log files for a specific workflow run attempt. This link expires after 1 minute. Look for `Location:` in the response header to find the URL for the download. Anyone with read access to the repository can use this endpoint. If the repository is private, OAuth tokens and personal access tokens (classic) need the `repo` scope to use this endpoint.
   *
   * @tags actions
   * @name ActionsDownloadWorkflowRunAttemptLogs
   * @summary Download workflow run attempt logs
   * @request GET:/repos/{owner}/{repo}/actions/runs/{run_id}/attempts/{attempt_number}/logs
   */
  actionsDownloadWorkflowRunAttemptLogs = (
    owner: string,
    repo: string,
    runId: number,
    attemptNumber: number,
    params: RequestParams = {},
  ) =>
    this.http.request<any, void>({
      path: `/repos/${owner}/${repo}/actions/runs/${runId}/attempts/${attemptNumber}/logs`,
      method: "GET",
      ...params,
    });
  /**
   * @description Cancels a workflow run using its `id`. OAuth tokens and personal access tokens (classic) need the `repo` scope to use this endpoint.
   *
   * @tags actions
   * @name ActionsCancelWorkflowRun
   * @summary Cancel a workflow run
   * @request POST:/repos/{owner}/{repo}/actions/runs/{run_id}/cancel
   */
  actionsCancelWorkflowRun = (
    owner: string,
    repo: string,
    runId: number,
    params: RequestParams = {},
  ) =>
    this.http.request<ActionsCancelWorkflowRunData, BasicError>({
      path: `/repos/${owner}/${repo}/actions/runs/${runId}/cancel`,
      method: "POST",
      format: "json",
      ...params,
    });
  /**
   * @description Approve or reject custom deployment protection rules provided by a GitHub App for a workflow run. For more information, see "[Using environments for deployment](https://docs.github.com/enterprise-server@3.17/actions/deployment/targeting-different-environments/using-environments-for-deployment)." > [!NOTE] > GitHub Apps can only review their own custom deployment protection rules. To approve or reject pending deployments that are waiting for review from a specific person or team, see [`POST /repos/{owner}/{repo}/actions/runs/{run_id}/pending_deployments`](/rest/actions/workflow-runs#review-pending-deployments-for-a-workflow-run). OAuth app tokens and personal access tokens (classic) need the `repo` scope to use this endpoint with a private repository.
   *
   * @tags actions
   * @name ActionsReviewCustomGatesForRun
   * @summary Review custom deployment protection rules for a workflow run
   * @request POST:/repos/{owner}/{repo}/actions/runs/{run_id}/deployment_protection_rule
   */
  actionsReviewCustomGatesForRun = (
    owner: string,
    repo: string,
    runId: number,
    data: ActionsReviewCustomGatesForRunPayload,
    params: RequestParams = {},
  ) =>
    this.http.request<ActionsReviewCustomGatesForRunData, any>({
      path: `/repos/${owner}/${repo}/actions/runs/${runId}/deployment_protection_rule`,
      method: "POST",
      body: data,
      type: ContentType.Json,
      ...params,
    });
  /**
   * @description Cancels a workflow run and bypasses conditions that would otherwise cause a workflow execution to continue, such as an `always()` condition on a job. You should only use this endpoint to cancel a workflow run when the workflow run is not responding to [`POST /repos/{owner}/{repo}/actions/runs/{run_id}/cancel`](/rest/actions/workflow-runs#cancel-a-workflow-run). OAuth tokens and personal access tokens (classic) need the `repo` scope to use this endpoint.
   *
   * @tags actions
   * @name ActionsForceCancelWorkflowRun
   * @summary Force cancel a workflow run
   * @request POST:/repos/{owner}/{repo}/actions/runs/{run_id}/force-cancel
   */
  actionsForceCancelWorkflowRun = (
    owner: string,
    repo: string,
    runId: number,
    params: RequestParams = {},
  ) =>
    this.http.request<ActionsForceCancelWorkflowRunData, BasicError>({
      path: `/repos/${owner}/${repo}/actions/runs/${runId}/force-cancel`,
      method: "POST",
      format: "json",
      ...params,
    });
  /**
   * @description Lists jobs for a workflow run. You can use parameters to narrow the list of results. For more information about using parameters, see [Parameters](https://docs.github.com/enterprise-server@3.17/rest/guides/getting-started-with-the-rest-api#parameters). Anyone with read access to the repository can use this endpoint. OAuth app tokens and personal access tokens (classic) need the `repo` scope to use this endpoint with a private repository.
   *
   * @tags actions
   * @name ActionsListJobsForWorkflowRun
   * @summary List jobs for a workflow run
   * @request GET:/repos/{owner}/{repo}/actions/runs/{run_id}/jobs
   */
  actionsListJobsForWorkflowRun = (
    { owner, repo, runId, ...query }: ActionsListJobsForWorkflowRunParams,
    params: RequestParams = {},
  ) =>
    this.http.request<ActionsListJobsForWorkflowRunData, any>({
      path: `/repos/${owner}/${repo}/actions/runs/${runId}/jobs`,
      method: "GET",
      query: query,
      format: "json",
      ...params,
    });
  /**
   * @description Gets a redirect URL to download an archive of log files for a workflow run. This link expires after 1 minute. Look for `Location:` in the response header to find the URL for the download. Anyone with read access to the repository can use this endpoint. If the repository is private, OAuth tokens and personal access tokens (classic) need the `repo` scope to use this endpoint.
   *
   * @tags actions
   * @name ActionsDownloadWorkflowRunLogs
   * @summary Download workflow run logs
   * @request GET:/repos/{owner}/{repo}/actions/runs/{run_id}/logs
   */
  actionsDownloadWorkflowRunLogs = (
    owner: string,
    repo: string,
    runId: number,
    params: RequestParams = {},
  ) =>
    this.http.request<any, void>({
      path: `/repos/${owner}/${repo}/actions/runs/${runId}/logs`,
      method: "GET",
      ...params,
    });
  /**
   * @description Deletes all logs for a workflow run. OAuth tokens and personal access tokens (classic) need the `repo` scope to use this endpoint.
   *
   * @tags actions
   * @name ActionsDeleteWorkflowRunLogs
   * @summary Delete workflow run logs
   * @request DELETE:/repos/{owner}/{repo}/actions/runs/{run_id}/logs
   */
  actionsDeleteWorkflowRunLogs = (
    owner: string,
    repo: string,
    runId: number,
    params: RequestParams = {},
  ) =>
    this.http.request<ActionsDeleteWorkflowRunLogsData, BasicError>({
      path: `/repos/${owner}/${repo}/actions/runs/${runId}/logs`,
      method: "DELETE",
      ...params,
    });
  /**
   * @description Get all deployment environments for a workflow run that are waiting for protection rules to pass. Anyone with read access to the repository can use this endpoint. If the repository is private, OAuth tokens and personal access tokens (classic) need the `repo` scope to use this endpoint.
   *
   * @tags actions
   * @name ActionsGetPendingDeploymentsForRun
   * @summary Get pending deployments for a workflow run
   * @request GET:/repos/{owner}/{repo}/actions/runs/{run_id}/pending_deployments
   */
  actionsGetPendingDeploymentsForRun = (
    owner: string,
    repo: string,
    runId: number,
    params: RequestParams = {},
  ) =>
    this.http.request<ActionsGetPendingDeploymentsForRunData, any>({
      path: `/repos/${owner}/${repo}/actions/runs/${runId}/pending_deployments`,
      method: "GET",
      format: "json",
      ...params,
    });
  /**
   * @description Approve or reject pending deployments that are waiting on approval by a required reviewer. Required reviewers with read access to the repository contents and deployments can use this endpoint. OAuth app tokens and personal access tokens (classic) need the `repo` scope to use this endpoint.
   *
   * @tags actions
   * @name ActionsReviewPendingDeploymentsForRun
   * @summary Review pending deployments for a workflow run
   * @request POST:/repos/{owner}/{repo}/actions/runs/{run_id}/pending_deployments
   */
  actionsReviewPendingDeploymentsForRun = (
    owner: string,
    repo: string,
    runId: number,
    data: ActionsReviewPendingDeploymentsForRunPayload,
    params: RequestParams = {},
  ) =>
    this.http.request<ActionsReviewPendingDeploymentsForRunData, any>({
      path: `/repos/${owner}/${repo}/actions/runs/${runId}/pending_deployments`,
      method: "POST",
      body: data,
      type: ContentType.Json,
      format: "json",
      ...params,
    });
  /**
   * @description Re-runs your workflow run using its `id`. OAuth app tokens and personal access tokens (classic) need the `repo` scope to use this endpoint.
   *
   * @tags actions
   * @name ActionsReRunWorkflow
   * @summary Re-run a workflow
   * @request POST:/repos/{owner}/{repo}/actions/runs/{run_id}/rerun
   */
  actionsReRunWorkflow = (
    owner: string,
    repo: string,
    runId: number,
    data?: ActionsReRunWorkflowPayload,
    params: RequestParams = {},
  ) =>
    this.http.request<ActionsReRunWorkflowData, any>({
      path: `/repos/${owner}/${repo}/actions/runs/${runId}/rerun`,
      method: "POST",
      body: data,
      type: ContentType.Json,
      format: "json",
      ...params,
    });
  /**
   * @description Re-run all of the failed jobs and their dependent jobs in a workflow run using the `id` of the workflow run. OAuth app tokens and personal access tokens (classic) need the `repo` scope to use this endpoint.
   *
   * @tags actions
   * @name ActionsReRunWorkflowFailedJobs
   * @summary Re-run failed jobs from a workflow run
   * @request POST:/repos/{owner}/{repo}/actions/runs/{run_id}/rerun-failed-jobs
   */
  actionsReRunWorkflowFailedJobs = (
    owner: string,
    repo: string,
    runId: number,
    data?: ActionsReRunWorkflowFailedJobsPayload,
    params: RequestParams = {},
  ) =>
    this.http.request<ActionsReRunWorkflowFailedJobsData, any>({
      path: `/repos/${owner}/${repo}/actions/runs/${runId}/rerun-failed-jobs`,
      method: "POST",
      body: data,
      type: ContentType.Json,
      format: "json",
      ...params,
    });
  /**
   * @description Lists all secrets available in a repository without revealing their encrypted values. Authenticated users must have collaborator access to a repository to create, update, or read secrets. OAuth app tokens and personal access tokens (classic) need the `repo` scope to use this endpoint.
   *
   * @tags actions
   * @name ActionsListRepoSecrets
   * @summary List repository secrets
   * @request GET:/repos/{owner}/{repo}/actions/secrets
   */
  actionsListRepoSecrets = (
    { owner, repo, ...query }: ActionsListRepoSecretsParams,
    params: RequestParams = {},
  ) =>
    this.http.request<ActionsListRepoSecretsData, any>({
      path: `/repos/${owner}/${repo}/actions/secrets`,
      method: "GET",
      query: query,
      format: "json",
      ...params,
    });
  /**
   * @description Gets your public key, which you need to encrypt secrets. You need to encrypt a secret before you can create or update secrets. Anyone with read access to the repository can use this endpoint. If the repository is private, OAuth tokens and personal access tokens (classic) need the `repo` scope to use this endpoint.
   *
   * @tags actions
   * @name ActionsGetRepoPublicKey
   * @summary Get a repository public key
   * @request GET:/repos/{owner}/{repo}/actions/secrets/public-key
   */
  actionsGetRepoPublicKey = (
    owner: string,
    repo: string,
    params: RequestParams = {},
  ) =>
    this.http.request<ActionsGetRepoPublicKeyData, any>({
      path: `/repos/${owner}/${repo}/actions/secrets/public-key`,
      method: "GET",
      format: "json",
      ...params,
    });
  /**
   * @description Gets a single repository secret without revealing its encrypted value. The authenticated user must have collaborator access to the repository to use this endpoint. OAuth app tokens and personal access tokens (classic) need the `repo` scope to use this endpoint.
   *
   * @tags actions
   * @name ActionsGetRepoSecret
   * @summary Get a repository secret
   * @request GET:/repos/{owner}/{repo}/actions/secrets/{secret_name}
   */
  actionsGetRepoSecret = (
    owner: string,
    repo: string,
    secretName: string,
    params: RequestParams = {},
  ) =>
    this.http.request<ActionsGetRepoSecretData, any>({
      path: `/repos/${owner}/${repo}/actions/secrets/${secretName}`,
      method: "GET",
      format: "json",
      ...params,
    });
  /**
   * @description Creates or updates a repository secret with an encrypted value. Encrypt your secret using [LibSodium](https://libsodium.gitbook.io/doc/bindings_for_other_languages). For more information, see "[Encrypting secrets for the REST API](https://docs.github.com/enterprise-server@3.17/rest/guides/encrypting-secrets-for-the-rest-api)." Authenticated users must have collaborator access to a repository to create, update, or read secrets. OAuth tokens and personal access tokens (classic) need the `repo` scope to use this endpoint.
   *
   * @tags actions
   * @name ActionsCreateOrUpdateRepoSecret
   * @summary Create or update a repository secret
   * @request PUT:/repos/{owner}/{repo}/actions/secrets/{secret_name}
   */
  actionsCreateOrUpdateRepoSecret = (
    owner: string,
    repo: string,
    secretName: string,
    data: ActionsCreateOrUpdateRepoSecretPayload,
    params: RequestParams = {},
  ) =>
    this.http.request<ActionsCreateOrUpdateRepoSecretData, any>({
      path: `/repos/${owner}/${repo}/actions/secrets/${secretName}`,
      method: "PUT",
      body: data,
      type: ContentType.Json,
      format: "json",
      ...params,
    });
  /**
   * @description Deletes a secret in a repository using the secret name. Authenticated users must have collaborator access to a repository to create, update, or read secrets. OAuth tokens and personal access tokens (classic) need the `repo` scope to use this endpoint.
   *
   * @tags actions
   * @name ActionsDeleteRepoSecret
   * @summary Delete a repository secret
   * @request DELETE:/repos/{owner}/{repo}/actions/secrets/{secret_name}
   */
  actionsDeleteRepoSecret = (
    owner: string,
    repo: string,
    secretName: string,
    params: RequestParams = {},
  ) =>
    this.http.request<ActionsDeleteRepoSecretData, any>({
      path: `/repos/${owner}/${repo}/actions/secrets/${secretName}`,
      method: "DELETE",
      ...params,
    });
  /**
   * @description Lists all repository variables. Authenticated users must have collaborator access to a repository to create, update, or read variables. OAuth app tokens and personal access tokens (classic) need the `repo` scope to use this endpoint.
   *
   * @tags actions
   * @name ActionsListRepoVariables
   * @summary List repository variables
   * @request GET:/repos/{owner}/{repo}/actions/variables
   */
  actionsListRepoVariables = (
    { owner, repo, ...query }: ActionsListRepoVariablesParams,
    params: RequestParams = {},
  ) =>
    this.http.request<ActionsListRepoVariablesData, any>({
      path: `/repos/${owner}/${repo}/actions/variables`,
      method: "GET",
      query: query,
      format: "json",
      ...params,
    });
  /**
   * @description Creates a repository variable that you can reference in a GitHub Actions workflow. Authenticated users must have collaborator access to a repository to create, update, or read variables. OAuth tokens and personal access tokens (classic) need the `repo` scope to use this endpoint.
   *
   * @tags actions
   * @name ActionsCreateRepoVariable
   * @summary Create a repository variable
   * @request POST:/repos/{owner}/{repo}/actions/variables
   */
  actionsCreateRepoVariable = (
    owner: string,
    repo: string,
    data: ActionsCreateRepoVariablePayload,
    params: RequestParams = {},
  ) =>
    this.http.request<ActionsCreateRepoVariableData, any>({
      path: `/repos/${owner}/${repo}/actions/variables`,
      method: "POST",
      body: data,
      type: ContentType.Json,
      format: "json",
      ...params,
    });
  /**
   * @description Gets a specific variable in a repository. The authenticated user must have collaborator access to the repository to use this endpoint. OAuth app tokens and personal access tokens (classic) need the `repo` scope to use this endpoint.
   *
   * @tags actions
   * @name ActionsGetRepoVariable
   * @summary Get a repository variable
   * @request GET:/repos/{owner}/{repo}/actions/variables/{name}
   */
  actionsGetRepoVariable = (
    owner: string,
    repo: string,
    name: string,
    params: RequestParams = {},
  ) =>
    this.http.request<ActionsGetRepoVariableData, any>({
      path: `/repos/${owner}/${repo}/actions/variables/${name}`,
      method: "GET",
      format: "json",
      ...params,
    });
  /**
   * @description Updates a repository variable that you can reference in a GitHub Actions workflow. Authenticated users must have collaborator access to a repository to create, update, or read variables. OAuth app tokens and personal access tokens (classic) need the `repo` scope to use this endpoint.
   *
   * @tags actions
   * @name ActionsUpdateRepoVariable
   * @summary Update a repository variable
   * @request PATCH:/repos/{owner}/{repo}/actions/variables/{name}
   */
  actionsUpdateRepoVariable = (
    owner: string,
    repo: string,
    name: string,
    data: ActionsUpdateRepoVariablePayload,
    params: RequestParams = {},
  ) =>
    this.http.request<ActionsUpdateRepoVariableData, any>({
      path: `/repos/${owner}/${repo}/actions/variables/${name}`,
      method: "PATCH",
      body: data,
      type: ContentType.Json,
      ...params,
    });
  /**
   * @description Deletes a repository variable using the variable name. Authenticated users must have collaborator access to a repository to create, update, or read variables. OAuth tokens and personal access tokens (classic) need the `repo` scope to use this endpoint.
   *
   * @tags actions
   * @name ActionsDeleteRepoVariable
   * @summary Delete a repository variable
   * @request DELETE:/repos/{owner}/{repo}/actions/variables/{name}
   */
  actionsDeleteRepoVariable = (
    owner: string,
    repo: string,
    name: string,
    params: RequestParams = {},
  ) =>
    this.http.request<ActionsDeleteRepoVariableData, any>({
      path: `/repos/${owner}/${repo}/actions/variables/${name}`,
      method: "DELETE",
      ...params,
    });
  /**
   * @description Lists the workflows in a repository. Anyone with read access to the repository can use this endpoint. OAuth app tokens and personal access tokens (classic) need the `repo` scope to use this endpoint with a private repository.
   *
   * @tags actions
   * @name ActionsListRepoWorkflows
   * @summary List repository workflows
   * @request GET:/repos/{owner}/{repo}/actions/workflows
   */
  actionsListRepoWorkflows = (
    { owner, repo, ...query }: ActionsListRepoWorkflowsParams,
    params: RequestParams = {},
  ) =>
    this.http.request<ActionsListRepoWorkflowsData, any>({
      path: `/repos/${owner}/${repo}/actions/workflows`,
      method: "GET",
      query: query,
      format: "json",
      ...params,
    });
  /**
   * @description Gets a specific workflow. You can replace `workflow_id` with the workflow file name. For example, you could use `main.yaml`. Anyone with read access to the repository can use this endpoint. OAuth app tokens and personal access tokens (classic) need the `repo` scope to use this endpoint with a private repository.
   *
   * @tags actions
   * @name ActionsGetWorkflow
   * @summary Get a workflow
   * @request GET:/repos/{owner}/{repo}/actions/workflows/{workflow_id}
   */
  actionsGetWorkflow = (
    owner: string,
    repo: string,
    workflowId: number | string,
    params: RequestParams = {},
  ) =>
    this.http.request<ActionsGetWorkflowData, any>({
      path: `/repos/${owner}/${repo}/actions/workflows/${workflowId}`,
      method: "GET",
      format: "json",
      ...params,
    });
  /**
   * @description Disables a workflow and sets the `state` of the workflow to `disabled_manually`. You can replace `workflow_id` with the workflow file name. For example, you could use `main.yaml`. OAuth tokens and personal access tokens (classic) need the `repo` scope to use this endpoint.
   *
   * @tags actions
   * @name ActionsDisableWorkflow
   * @summary Disable a workflow
   * @request PUT:/repos/{owner}/{repo}/actions/workflows/{workflow_id}/disable
   */
  actionsDisableWorkflow = (
    owner: string,
    repo: string,
    workflowId: number | string,
    params: RequestParams = {},
  ) =>
    this.http.request<ActionsDisableWorkflowData, any>({
      path: `/repos/${owner}/${repo}/actions/workflows/${workflowId}/disable`,
      method: "PUT",
      ...params,
    });
  /**
   * @description You can use this endpoint to manually trigger a GitHub Actions workflow run. You can replace `workflow_id` with the workflow file name. For example, you could use `main.yaml`. You must configure your GitHub Actions workflow to run when the [`workflow_dispatch` webhook](/developers/webhooks-and-events/webhook-events-and-payloads#workflow_dispatch) event occurs. The `inputs` are configured in the workflow file. For more information about how to configure the `workflow_dispatch` event in the workflow file, see "[Events that trigger workflows](/actions/reference/events-that-trigger-workflows#workflow_dispatch)." OAuth tokens and personal access tokens (classic) need the `repo` scope to use this endpoint.
   *
   * @tags actions
   * @name ActionsCreateWorkflowDispatch
   * @summary Create a workflow dispatch event
   * @request POST:/repos/{owner}/{repo}/actions/workflows/{workflow_id}/dispatches
   */
  actionsCreateWorkflowDispatch = (
    owner: string,
    repo: string,
    workflowId: number | string,
    data: ActionsCreateWorkflowDispatchPayload,
    params: RequestParams = {},
  ) =>
    this.http.request<ActionsCreateWorkflowDispatchData, any>({
      path: `/repos/${owner}/${repo}/actions/workflows/${workflowId}/dispatches`,
      method: "POST",
      body: data,
      type: ContentType.Json,
      ...params,
    });
  /**
   * @description Enables a workflow and sets the `state` of the workflow to `active`. You can replace `workflow_id` with the workflow file name. For example, you could use `main.yaml`. OAuth tokens and personal access tokens (classic) need the `repo` scope to use this endpoint.
   *
   * @tags actions
   * @name ActionsEnableWorkflow
   * @summary Enable a workflow
   * @request PUT:/repos/{owner}/{repo}/actions/workflows/{workflow_id}/enable
   */
  actionsEnableWorkflow = (
    owner: string,
    repo: string,
    workflowId: number | string,
    params: RequestParams = {},
  ) =>
    this.http.request<ActionsEnableWorkflowData, any>({
      path: `/repos/${owner}/${repo}/actions/workflows/${workflowId}/enable`,
      method: "PUT",
      ...params,
    });
  /**
   * @description List all workflow runs for a workflow. You can replace `workflow_id` with the workflow file name. For example, you could use `main.yaml`. You can use parameters to narrow the list of results. For more information about using parameters, see [Parameters](https://docs.github.com/enterprise-server@3.17/rest/guides/getting-started-with-the-rest-api#parameters). Anyone with read access to the repository can use this endpoint OAuth app tokens and personal access tokens (classic) need the `repo` scope to use this endpoint with a private repository. This endpoint will return up to 1,000 results for each search when using the following parameters: `actor`, `branch`, `check_suite_id`, `created`, `event`, `head_sha`, `status`.
   *
   * @tags actions
   * @name ActionsListWorkflowRuns
   * @summary List workflow runs for a workflow
   * @request GET:/repos/{owner}/{repo}/actions/workflows/{workflow_id}/runs
   */
  actionsListWorkflowRuns = (
    { owner, repo, workflowId, ...query }: ActionsListWorkflowRunsParams,
    params: RequestParams = {},
  ) =>
    this.http.request<ActionsListWorkflowRunsData, any>({
      path: `/repos/${owner}/${repo}/actions/workflows/${workflowId}/runs`,
      method: "GET",
      query: query,
      format: "json",
      ...params,
    });
  /**
   * @description Lists a detailed history of changes to a repository, such as pushes, merges, force pushes, and branch changes, and associates these changes with commits and users. For more information about viewing repository activity, see "[Viewing activity and data for your repository](https://docs.github.com/enterprise-server@3.17/repositories/viewing-activity-and-data-for-your-repository)."
   *
   * @tags repos
   * @name ReposListActivities
   * @summary List repository activities
   * @request GET:/repos/{owner}/{repo}/activity
   */
  reposListActivities = (
    { owner, repo, ...query }: ReposListActivitiesParams,
    params: RequestParams = {},
  ) =>
    this.http.request<ReposListActivitiesData, ValidationErrorSimple>({
      path: `/repos/${owner}/${repo}/activity`,
      method: "GET",
      query: query,
      format: "json",
      ...params,
    });
  /**
   * @description Lists the [available assignees](https://docs.github.com/enterprise-server@3.17/articles/assigning-issues-and-pull-requests-to-other-github-users/) for issues in a repository.
   *
   * @tags issues
   * @name IssuesListAssignees
   * @summary List assignees
   * @request GET:/repos/{owner}/{repo}/assignees
   */
  issuesListAssignees = (
    { owner, repo, ...query }: IssuesListAssigneesParams,
    params: RequestParams = {},
  ) =>
    this.http.request<IssuesListAssigneesData, BasicError>({
      path: `/repos/${owner}/${repo}/assignees`,
      method: "GET",
      query: query,
      format: "json",
      ...params,
    });
  /**
   * @description Checks if a user has permission to be assigned to an issue in this repository. If the `assignee` can be assigned to issues in the repository, a `204` header with no content is returned. Otherwise a `404` status code is returned.
   *
   * @tags issues
   * @name IssuesCheckUserCanBeAssigned
   * @summary Check if a user can be assigned
   * @request GET:/repos/{owner}/{repo}/assignees/{assignee}
   */
  issuesCheckUserCanBeAssigned = (
    owner: string,
    repo: string,
    assignee: string,
    params: RequestParams = {},
  ) =>
    this.http.request<
      IssuesCheckUserCanBeAssignedData,
      IssuesCheckUserCanBeAssignedError
    >({
      path: `/repos/${owner}/${repo}/assignees/${assignee}`,
      method: "GET",
      ...params,
    });
  /**
   * @description Gets all autolinks that are configured for a repository. Information about autolinks are only available to repository administrators.
   *
   * @tags repos
   * @name ReposListAutolinks
   * @summary Get all autolinks of a repository
   * @request GET:/repos/{owner}/{repo}/autolinks
   */
  reposListAutolinks = (
    owner: string,
    repo: string,
    params: RequestParams = {},
  ) =>
    this.http.request<ReposListAutolinksData, any>({
      path: `/repos/${owner}/${repo}/autolinks`,
      method: "GET",
      format: "json",
      ...params,
    });
  /**
   * @description Users with admin access to the repository can create an autolink.
   *
   * @tags repos
   * @name ReposCreateAutolink
   * @summary Create an autolink reference for a repository
   * @request POST:/repos/{owner}/{repo}/autolinks
   */
  reposCreateAutolink = (
    owner: string,
    repo: string,
    data: ReposCreateAutolinkPayload,
    params: RequestParams = {},
  ) =>
    this.http.request<ReposCreateAutolinkData, ValidationError>({
      path: `/repos/${owner}/${repo}/autolinks`,
      method: "POST",
      body: data,
      type: ContentType.Json,
      format: "json",
      ...params,
    });
  /**
   * @description This returns a single autolink reference by ID that was configured for the given repository. Information about autolinks are only available to repository administrators.
   *
   * @tags repos
   * @name ReposGetAutolink
   * @summary Get an autolink reference of a repository
   * @request GET:/repos/{owner}/{repo}/autolinks/{autolink_id}
   */
  reposGetAutolink = (
    owner: string,
    repo: string,
    autolinkId: number,
    params: RequestParams = {},
  ) =>
    this.http.request<ReposGetAutolinkData, BasicError>({
      path: `/repos/${owner}/${repo}/autolinks/${autolinkId}`,
      method: "GET",
      format: "json",
      ...params,
    });
  /**
   * @description This deletes a single autolink reference by ID that was configured for the given repository. Information about autolinks are only available to repository administrators.
   *
   * @tags repos
   * @name ReposDeleteAutolink
   * @summary Delete an autolink reference from a repository
   * @request DELETE:/repos/{owner}/{repo}/autolinks/{autolink_id}
   */
  reposDeleteAutolink = (
    owner: string,
    repo: string,
    autolinkId: number,
    params: RequestParams = {},
  ) =>
    this.http.request<ReposDeleteAutolinkData, BasicError>({
      path: `/repos/${owner}/${repo}/autolinks/${autolinkId}`,
      method: "DELETE",
      ...params,
    });
  /**
   * @description Shows whether Dependabot security updates are enabled, disabled or paused for a repository. The authenticated user must have admin read access to the repository. For more information, see "[Configuring Dependabot security updates](https://docs.github.com/enterprise-server@3.17/articles/configuring-automated-security-fixes)".
   *
   * @tags repos
   * @name ReposCheckAutomatedSecurityFixes
   * @summary Check if Dependabot security updates are enabled for a repository
   * @request GET:/repos/{owner}/{repo}/automated-security-fixes
   */
  reposCheckAutomatedSecurityFixes = (
    owner: string,
    repo: string,
    params: RequestParams = {},
  ) =>
    this.http.request<ReposCheckAutomatedSecurityFixesData, void>({
      path: `/repos/${owner}/${repo}/automated-security-fixes`,
      method: "GET",
      format: "json",
      ...params,
    });
  /**
   * No description
   *
   * @tags repos
   * @name ReposListBranches
   * @summary List branches
   * @request GET:/repos/{owner}/{repo}/branches
   */
  reposListBranches = (
    { owner, repo, ...query }: ReposListBranchesParams,
    params: RequestParams = {},
  ) =>
    this.http.request<ReposListBranchesData, BasicError>({
      path: `/repos/${owner}/${repo}/branches`,
      method: "GET",
      query: query,
      format: "json",
      ...params,
    });
  /**
   * No description
   *
   * @tags repos
   * @name ReposGetBranch
   * @summary Get a branch
   * @request GET:/repos/{owner}/{repo}/branches/{branch}
   */
  reposGetBranch = (
    owner: string,
    repo: string,
    branch: string,
    params: RequestParams = {},
  ) =>
    this.http.request<ReposGetBranchData, BasicError>({
      path: `/repos/${owner}/${repo}/branches/${branch}`,
      method: "GET",
      format: "json",
      ...params,
    });
  /**
   * @description Protected branches are available in public repositories with GitHub Free and GitHub Free for organizations, and in public and private repositories with GitHub Pro, GitHub Team, GitHub Enterprise Cloud, and GitHub Enterprise Server. For more information, see [GitHub's products](https://docs.github.com/enterprise-server@3.17/github/getting-started-with-github/githubs-products) in the GitHub Help documentation.
   *
   * @tags repos
   * @name ReposGetBranchProtection
   * @summary Get branch protection
   * @request GET:/repos/{owner}/{repo}/branches/{branch}/protection
   */
  reposGetBranchProtection = (
    owner: string,
    repo: string,
    branch: string,
    params: RequestParams = {},
  ) =>
    this.http.request<ReposGetBranchProtectionData, BasicError>({
      path: `/repos/${owner}/${repo}/branches/${branch}/protection`,
      method: "GET",
      format: "json",
      ...params,
    });
  /**
   * @description Protected branches are available in public repositories with GitHub Free and GitHub Free for organizations, and in public and private repositories with GitHub Pro, GitHub Team, GitHub Enterprise Cloud, and GitHub Enterprise Server. For more information, see [GitHub's products](https://docs.github.com/enterprise-server@3.17/github/getting-started-with-github/githubs-products) in the GitHub Help documentation. Protecting a branch requires admin or owner permissions to the repository. > [!NOTE] > Passing new arrays of `users` and `teams` replaces their previous values. > [!NOTE] > The list of users, apps, and teams in total is limited to 100 items.
   *
   * @tags repos
   * @name ReposUpdateBranchProtection
   * @summary Update branch protection
   * @request PUT:/repos/{owner}/{repo}/branches/{branch}/protection
   */
  reposUpdateBranchProtection = (
    owner: string,
    repo: string,
    branch: string,
    data: ReposUpdateBranchProtectionPayload,
    params: RequestParams = {},
  ) =>
    this.http.request<
      ReposUpdateBranchProtectionData,
      BasicError | ValidationErrorSimple
    >({
      path: `/repos/${owner}/${repo}/branches/${branch}/protection`,
      method: "PUT",
      body: data,
      type: ContentType.Json,
      format: "json",
      ...params,
    });
  /**
   * @description Protected branches are available in public repositories with GitHub Free and GitHub Free for organizations, and in public and private repositories with GitHub Pro, GitHub Team, GitHub Enterprise Cloud, and GitHub Enterprise Server. For more information, see [GitHub's products](https://docs.github.com/enterprise-server@3.17/github/getting-started-with-github/githubs-products) in the GitHub Help documentation.
   *
   * @tags repos
   * @name ReposDeleteBranchProtection
   * @summary Delete branch protection
   * @request DELETE:/repos/{owner}/{repo}/branches/{branch}/protection
   */
  reposDeleteBranchProtection = (
    owner: string,
    repo: string,
    branch: string,
    params: RequestParams = {},
  ) =>
    this.http.request<ReposDeleteBranchProtectionData, BasicError>({
      path: `/repos/${owner}/${repo}/branches/${branch}/protection`,
      method: "DELETE",
      ...params,
    });
  /**
   * @description Protected branches are available in public repositories with GitHub Free and GitHub Free for organizations, and in public and private repositories with GitHub Pro, GitHub Team, GitHub Enterprise Cloud, and GitHub Enterprise Server. For more information, see [GitHub's products](https://docs.github.com/enterprise-server@3.17/github/getting-started-with-github/githubs-products) in the GitHub Help documentation.
   *
   * @tags repos
   * @name ReposGetAdminBranchProtection
   * @summary Get admin branch protection
   * @request GET:/repos/{owner}/{repo}/branches/{branch}/protection/enforce_admins
   */
  reposGetAdminBranchProtection = (
    owner: string,
    repo: string,
    branch: string,
    params: RequestParams = {},
  ) =>
    this.http.request<ReposGetAdminBranchProtectionData, any>({
      path: `/repos/${owner}/${repo}/branches/${branch}/protection/enforce_admins`,
      method: "GET",
      format: "json",
      ...params,
    });
  /**
   * @description Protected branches are available in public repositories with GitHub Free and GitHub Free for organizations, and in public and private repositories with GitHub Pro, GitHub Team, GitHub Enterprise Cloud, and GitHub Enterprise Server. For more information, see [GitHub's products](https://docs.github.com/enterprise-server@3.17/github/getting-started-with-github/githubs-products) in the GitHub Help documentation. Adding admin enforcement requires admin or owner permissions to the repository and branch protection to be enabled.
   *
   * @tags repos
   * @name ReposSetAdminBranchProtection
   * @summary Set admin branch protection
   * @request POST:/repos/{owner}/{repo}/branches/{branch}/protection/enforce_admins
   */
  reposSetAdminBranchProtection = (
    owner: string,
    repo: string,
    branch: string,
    params: RequestParams = {},
  ) =>
    this.http.request<ReposSetAdminBranchProtectionData, any>({
      path: `/repos/${owner}/${repo}/branches/${branch}/protection/enforce_admins`,
      method: "POST",
      format: "json",
      ...params,
    });
  /**
   * @description Protected branches are available in public repositories with GitHub Free and GitHub Free for organizations, and in public and private repositories with GitHub Pro, GitHub Team, GitHub Enterprise Cloud, and GitHub Enterprise Server. For more information, see [GitHub's products](https://docs.github.com/enterprise-server@3.17/github/getting-started-with-github/githubs-products) in the GitHub Help documentation. Removing admin enforcement requires admin or owner permissions to the repository and branch protection to be enabled.
   *
   * @tags repos
   * @name ReposDeleteAdminBranchProtection
   * @summary Delete admin branch protection
   * @request DELETE:/repos/{owner}/{repo}/branches/{branch}/protection/enforce_admins
   */
  reposDeleteAdminBranchProtection = (
    owner: string,
    repo: string,
    branch: string,
    params: RequestParams = {},
  ) =>
    this.http.request<ReposDeleteAdminBranchProtectionData, BasicError>({
      path: `/repos/${owner}/${repo}/branches/${branch}/protection/enforce_admins`,
      method: "DELETE",
      ...params,
    });
  /**
   * @description Protected branches are available in public repositories with GitHub Free and GitHub Free for organizations, and in public and private repositories with GitHub Pro, GitHub Team, GitHub Enterprise Cloud, and GitHub Enterprise Server. For more information, see [GitHub's products](https://docs.github.com/enterprise-server@3.17/github/getting-started-with-github/githubs-products) in the GitHub Help documentation.
   *
   * @tags repos
   * @name ReposGetPullRequestReviewProtection
   * @summary Get pull request review protection
   * @request GET:/repos/{owner}/{repo}/branches/{branch}/protection/required_pull_request_reviews
   */
  reposGetPullRequestReviewProtection = (
    owner: string,
    repo: string,
    branch: string,
    params: RequestParams = {},
  ) =>
    this.http.request<ReposGetPullRequestReviewProtectionData, any>({
      path: `/repos/${owner}/${repo}/branches/${branch}/protection/required_pull_request_reviews`,
      method: "GET",
      format: "json",
      ...params,
    });
  /**
   * @description Protected branches are available in public repositories with GitHub Free and GitHub Free for organizations, and in public and private repositories with GitHub Pro, GitHub Team, GitHub Enterprise Cloud, and GitHub Enterprise Server. For more information, see [GitHub's products](https://docs.github.com/enterprise-server@3.17/github/getting-started-with-github/githubs-products) in the GitHub Help documentation. Updating pull request review enforcement requires admin or owner permissions to the repository and branch protection to be enabled. > [!NOTE] > Passing new arrays of `users` and `teams` replaces their previous values.
   *
   * @tags repos
   * @name ReposUpdatePullRequestReviewProtection
   * @summary Update pull request review protection
   * @request PATCH:/repos/{owner}/{repo}/branches/{branch}/protection/required_pull_request_reviews
   */
  reposUpdatePullRequestReviewProtection = (
    owner: string,
    repo: string,
    branch: string,
    data?: ReposUpdatePullRequestReviewProtectionPayload,
    params: RequestParams = {},
  ) =>
    this.http.request<
      ReposUpdatePullRequestReviewProtectionData,
      ValidationError
    >({
      path: `/repos/${owner}/${repo}/branches/${branch}/protection/required_pull_request_reviews`,
      method: "PATCH",
      body: data,
      type: ContentType.Json,
      format: "json",
      ...params,
    });
  /**
   * @description Protected branches are available in public repositories with GitHub Free and GitHub Free for organizations, and in public and private repositories with GitHub Pro, GitHub Team, GitHub Enterprise Cloud, and GitHub Enterprise Server. For more information, see [GitHub's products](https://docs.github.com/enterprise-server@3.17/github/getting-started-with-github/githubs-products) in the GitHub Help documentation.
   *
   * @tags repos
   * @name ReposDeletePullRequestReviewProtection
   * @summary Delete pull request review protection
   * @request DELETE:/repos/{owner}/{repo}/branches/{branch}/protection/required_pull_request_reviews
   */
  reposDeletePullRequestReviewProtection = (
    owner: string,
    repo: string,
    branch: string,
    params: RequestParams = {},
  ) =>
    this.http.request<ReposDeletePullRequestReviewProtectionData, BasicError>({
      path: `/repos/${owner}/${repo}/branches/${branch}/protection/required_pull_request_reviews`,
      method: "DELETE",
      ...params,
    });
  /**
   * @description Protected branches are available in public repositories with GitHub Free and GitHub Free for organizations, and in public and private repositories with GitHub Pro, GitHub Team, GitHub Enterprise Cloud, and GitHub Enterprise Server. For more information, see [GitHub's products](https://docs.github.com/enterprise-server@3.17/github/getting-started-with-github/githubs-products) in the GitHub Help documentation. When authenticated with admin or owner permissions to the repository, you can use this endpoint to check whether a branch requires signed commits. An enabled status of `true` indicates you must sign commits on this branch. For more information, see [Signing commits with GPG](https://docs.github.com/enterprise-server@3.17/articles/signing-commits-with-gpg) in GitHub Help. > [!NOTE] > You must enable branch protection to require signed commits.
   *
   * @tags repos
   * @name ReposGetCommitSignatureProtection
   * @summary Get commit signature protection
   * @request GET:/repos/{owner}/{repo}/branches/{branch}/protection/required_signatures
   */
  reposGetCommitSignatureProtection = (
    owner: string,
    repo: string,
    branch: string,
    params: RequestParams = {},
  ) =>
    this.http.request<ReposGetCommitSignatureProtectionData, BasicError>({
      path: `/repos/${owner}/${repo}/branches/${branch}/protection/required_signatures`,
      method: "GET",
      format: "json",
      ...params,
    });
  /**
   * @description Protected branches are available in public repositories with GitHub Free and GitHub Free for organizations, and in public and private repositories with GitHub Pro, GitHub Team, GitHub Enterprise Cloud, and GitHub Enterprise Server. For more information, see [GitHub's products](https://docs.github.com/enterprise-server@3.17/github/getting-started-with-github/githubs-products) in the GitHub Help documentation. When authenticated with admin or owner permissions to the repository, you can use this endpoint to require signed commits on a branch. You must enable branch protection to require signed commits.
   *
   * @tags repos
   * @name ReposCreateCommitSignatureProtection
   * @summary Create commit signature protection
   * @request POST:/repos/{owner}/{repo}/branches/{branch}/protection/required_signatures
   */
  reposCreateCommitSignatureProtection = (
    owner: string,
    repo: string,
    branch: string,
    params: RequestParams = {},
  ) =>
    this.http.request<ReposCreateCommitSignatureProtectionData, BasicError>({
      path: `/repos/${owner}/${repo}/branches/${branch}/protection/required_signatures`,
      method: "POST",
      format: "json",
      ...params,
    });
  /**
   * @description Protected branches are available in public repositories with GitHub Free and GitHub Free for organizations, and in public and private repositories with GitHub Pro, GitHub Team, GitHub Enterprise Cloud, and GitHub Enterprise Server. For more information, see [GitHub's products](https://docs.github.com/enterprise-server@3.17/github/getting-started-with-github/githubs-products) in the GitHub Help documentation. When authenticated with admin or owner permissions to the repository, you can use this endpoint to disable required signed commits on a branch. You must enable branch protection to require signed commits.
   *
   * @tags repos
   * @name ReposDeleteCommitSignatureProtection
   * @summary Delete commit signature protection
   * @request DELETE:/repos/{owner}/{repo}/branches/{branch}/protection/required_signatures
   */
  reposDeleteCommitSignatureProtection = (
    owner: string,
    repo: string,
    branch: string,
    params: RequestParams = {},
  ) =>
    this.http.request<ReposDeleteCommitSignatureProtectionData, BasicError>({
      path: `/repos/${owner}/${repo}/branches/${branch}/protection/required_signatures`,
      method: "DELETE",
      ...params,
    });
  /**
   * @description Protected branches are available in public repositories with GitHub Free and GitHub Free for organizations, and in public and private repositories with GitHub Pro, GitHub Team, GitHub Enterprise Cloud, and GitHub Enterprise Server. For more information, see [GitHub's products](https://docs.github.com/enterprise-server@3.17/github/getting-started-with-github/githubs-products) in the GitHub Help documentation.
   *
   * @tags repos
   * @name ReposGetStatusChecksProtection
   * @summary Get status checks protection
   * @request GET:/repos/{owner}/{repo}/branches/{branch}/protection/required_status_checks
   */
  reposGetStatusChecksProtection = (
    owner: string,
    repo: string,
    branch: string,
    params: RequestParams = {},
  ) =>
    this.http.request<ReposGetStatusChecksProtectionData, BasicError>({
      path: `/repos/${owner}/${repo}/branches/${branch}/protection/required_status_checks`,
      method: "GET",
      format: "json",
      ...params,
    });
  /**
   * @description Protected branches are available in public repositories with GitHub Free and GitHub Free for organizations, and in public and private repositories with GitHub Pro, GitHub Team, GitHub Enterprise Cloud, and GitHub Enterprise Server. For more information, see [GitHub's products](https://docs.github.com/enterprise-server@3.17/github/getting-started-with-github/githubs-products) in the GitHub Help documentation. Updating required status checks requires admin or owner permissions to the repository and branch protection to be enabled.
   *
   * @tags repos
   * @name ReposUpdateStatusCheckProtection
   * @summary Update status check protection
   * @request PATCH:/repos/{owner}/{repo}/branches/{branch}/protection/required_status_checks
   */
  reposUpdateStatusCheckProtection = (
    owner: string,
    repo: string,
    branch: string,
    data?: ReposUpdateStatusCheckProtectionPayload,
    params: RequestParams = {},
  ) =>
    this.http.request<
      ReposUpdateStatusCheckProtectionData,
      BasicError | ValidationError
    >({
      path: `/repos/${owner}/${repo}/branches/${branch}/protection/required_status_checks`,
      method: "PATCH",
      body: data,
      type: ContentType.Json,
      format: "json",
      ...params,
    });
  /**
   * @description Protected branches are available in public repositories with GitHub Free and GitHub Free for organizations, and in public and private repositories with GitHub Pro, GitHub Team, GitHub Enterprise Cloud, and GitHub Enterprise Server. For more information, see [GitHub's products](https://docs.github.com/enterprise-server@3.17/github/getting-started-with-github/githubs-products) in the GitHub Help documentation.
   *
   * @tags repos
   * @name ReposRemoveStatusCheckProtection
   * @summary Remove status check protection
   * @request DELETE:/repos/{owner}/{repo}/branches/{branch}/protection/required_status_checks
   */
  reposRemoveStatusCheckProtection = (
    owner: string,
    repo: string,
    branch: string,
    params: RequestParams = {},
  ) =>
    this.http.request<ReposRemoveStatusCheckProtectionData, any>({
      path: `/repos/${owner}/${repo}/branches/${branch}/protection/required_status_checks`,
      method: "DELETE",
      ...params,
    });
  /**
   * @description Protected branches are available in public repositories with GitHub Free and GitHub Free for organizations, and in public and private repositories with GitHub Pro, GitHub Team, GitHub Enterprise Cloud, and GitHub Enterprise Server. For more information, see [GitHub's products](https://docs.github.com/enterprise-server@3.17/github/getting-started-with-github/githubs-products) in the GitHub Help documentation.
   *
   * @tags repos
   * @name ReposGetAllStatusCheckContexts
   * @summary Get all status check contexts
   * @request GET:/repos/{owner}/{repo}/branches/{branch}/protection/required_status_checks/contexts
   */
  reposGetAllStatusCheckContexts = (
    owner: string,
    repo: string,
    branch: string,
    params: RequestParams = {},
  ) =>
    this.http.request<ReposGetAllStatusCheckContextsData, BasicError>({
      path: `/repos/${owner}/${repo}/branches/${branch}/protection/required_status_checks/contexts`,
      method: "GET",
      format: "json",
      ...params,
    });
  /**
   * @description Protected branches are available in public repositories with GitHub Free and GitHub Free for organizations, and in public and private repositories with GitHub Pro, GitHub Team, GitHub Enterprise Cloud, and GitHub Enterprise Server. For more information, see [GitHub's products](https://docs.github.com/enterprise-server@3.17/github/getting-started-with-github/githubs-products) in the GitHub Help documentation.
   *
   * @tags repos
   * @name ReposAddStatusCheckContexts
   * @summary Add status check contexts
   * @request POST:/repos/{owner}/{repo}/branches/{branch}/protection/required_status_checks/contexts
   */
  reposAddStatusCheckContexts = (
    owner: string,
    repo: string,
    branch: string,
    data?: ReposAddStatusCheckContextsPayload,
    params: RequestParams = {},
  ) =>
    this.http.request<
      ReposAddStatusCheckContextsData,
      BasicError | ValidationError
    >({
      path: `/repos/${owner}/${repo}/branches/${branch}/protection/required_status_checks/contexts`,
      method: "POST",
      body: data,
      type: ContentType.Json,
      format: "json",
      ...params,
    });
  /**
   * @description Protected branches are available in public repositories with GitHub Free and GitHub Free for organizations, and in public and private repositories with GitHub Pro, GitHub Team, GitHub Enterprise Cloud, and GitHub Enterprise Server. For more information, see [GitHub's products](https://docs.github.com/enterprise-server@3.17/github/getting-started-with-github/githubs-products) in the GitHub Help documentation.
   *
   * @tags repos
   * @name ReposSetStatusCheckContexts
   * @summary Set status check contexts
   * @request PUT:/repos/{owner}/{repo}/branches/{branch}/protection/required_status_checks/contexts
   */
  reposSetStatusCheckContexts = (
    owner: string,
    repo: string,
    branch: string,
    data?: ReposSetStatusCheckContextsPayload,
    params: RequestParams = {},
  ) =>
    this.http.request<
      ReposSetStatusCheckContextsData,
      BasicError | ValidationError
    >({
      path: `/repos/${owner}/${repo}/branches/${branch}/protection/required_status_checks/contexts`,
      method: "PUT",
      body: data,
      type: ContentType.Json,
      format: "json",
      ...params,
    });
  /**
   * @description Protected branches are available in public repositories with GitHub Free and GitHub Free for organizations, and in public and private repositories with GitHub Pro, GitHub Team, GitHub Enterprise Cloud, and GitHub Enterprise Server. For more information, see [GitHub's products](https://docs.github.com/enterprise-server@3.17/github/getting-started-with-github/githubs-products) in the GitHub Help documentation.
   *
   * @tags repos
   * @name ReposRemoveStatusCheckContexts
   * @summary Remove status check contexts
   * @request DELETE:/repos/{owner}/{repo}/branches/{branch}/protection/required_status_checks/contexts
   */
  reposRemoveStatusCheckContexts = (
    owner: string,
    repo: string,
    branch: string,
    data: ReposRemoveStatusCheckContextsPayload,
    params: RequestParams = {},
  ) =>
    this.http.request<
      ReposRemoveStatusCheckContextsData,
      BasicError | ValidationError
    >({
      path: `/repos/${owner}/${repo}/branches/${branch}/protection/required_status_checks/contexts`,
      method: "DELETE",
      body: data,
      type: ContentType.Json,
      format: "json",
      ...params,
    });
  /**
   * @description Protected branches are available in public repositories with GitHub Free and GitHub Free for organizations, and in public and private repositories with GitHub Pro, GitHub Team, GitHub Enterprise Cloud, and GitHub Enterprise Server. For more information, see [GitHub's products](https://docs.github.com/enterprise-server@3.17/github/getting-started-with-github/githubs-products) in the GitHub Help documentation. Lists who has access to this protected branch. > [!NOTE] > Users, apps, and teams `restrictions` are only available for organization-owned repositories.
   *
   * @tags repos
   * @name ReposGetAccessRestrictions
   * @summary Get access restrictions
   * @request GET:/repos/{owner}/{repo}/branches/{branch}/protection/restrictions
   */
  reposGetAccessRestrictions = (
    owner: string,
    repo: string,
    branch: string,
    params: RequestParams = {},
  ) =>
    this.http.request<ReposGetAccessRestrictionsData, BasicError>({
      path: `/repos/${owner}/${repo}/branches/${branch}/protection/restrictions`,
      method: "GET",
      format: "json",
      ...params,
    });
  /**
   * @description Protected branches are available in public repositories with GitHub Free and GitHub Free for organizations, and in public and private repositories with GitHub Pro, GitHub Team, GitHub Enterprise Cloud, and GitHub Enterprise Server. For more information, see [GitHub's products](https://docs.github.com/enterprise-server@3.17/github/getting-started-with-github/githubs-products) in the GitHub Help documentation. Disables the ability to restrict who can push to this branch.
   *
   * @tags repos
   * @name ReposDeleteAccessRestrictions
   * @summary Delete access restrictions
   * @request DELETE:/repos/{owner}/{repo}/branches/{branch}/protection/restrictions
   */
  reposDeleteAccessRestrictions = (
    owner: string,
    repo: string,
    branch: string,
    params: RequestParams = {},
  ) =>
    this.http.request<ReposDeleteAccessRestrictionsData, any>({
      path: `/repos/${owner}/${repo}/branches/${branch}/protection/restrictions`,
      method: "DELETE",
      ...params,
    });
  /**
   * @description Protected branches are available in public repositories with GitHub Free and GitHub Free for organizations, and in public and private repositories with GitHub Pro, GitHub Team, GitHub Enterprise Cloud, and GitHub Enterprise Server. For more information, see [GitHub's products](https://docs.github.com/enterprise-server@3.17/github/getting-started-with-github/githubs-products) in the GitHub Help documentation. Lists the GitHub Apps that have push access to this branch. Only GitHub Apps that are installed on the repository and that have been granted write access to the repository contents can be added as authorized actors on a protected branch.
   *
   * @tags repos
   * @name ReposGetAppsWithAccessToProtectedBranch
   * @summary Get apps with access to the protected branch
   * @request GET:/repos/{owner}/{repo}/branches/{branch}/protection/restrictions/apps
   */
  reposGetAppsWithAccessToProtectedBranch = (
    owner: string,
    repo: string,
    branch: string,
    params: RequestParams = {},
  ) =>
    this.http.request<ReposGetAppsWithAccessToProtectedBranchData, BasicError>({
      path: `/repos/${owner}/${repo}/branches/${branch}/protection/restrictions/apps`,
      method: "GET",
      format: "json",
      ...params,
    });
  /**
   * @description Protected branches are available in public repositories with GitHub Free and GitHub Free for organizations, and in public and private repositories with GitHub Pro, GitHub Team, GitHub Enterprise Cloud, and GitHub Enterprise Server. For more information, see [GitHub's products](https://docs.github.com/enterprise-server@3.17/github/getting-started-with-github/githubs-products) in the GitHub Help documentation. Grants the specified apps push access for this branch. Only GitHub Apps that are installed on the repository and that have been granted write access to the repository contents can be added as authorized actors on a protected branch.
   *
   * @tags repos
   * @name ReposAddAppAccessRestrictions
   * @summary Add app access restrictions
   * @request POST:/repos/{owner}/{repo}/branches/{branch}/protection/restrictions/apps
   */
  reposAddAppAccessRestrictions = (
    owner: string,
    repo: string,
    branch: string,
    data: ReposAddAppAccessRestrictionsPayload,
    params: RequestParams = {},
  ) =>
    this.http.request<ReposAddAppAccessRestrictionsData, ValidationError>({
      path: `/repos/${owner}/${repo}/branches/${branch}/protection/restrictions/apps`,
      method: "POST",
      body: data,
      type: ContentType.Json,
      format: "json",
      ...params,
    });
  /**
   * @description Protected branches are available in public repositories with GitHub Free and GitHub Free for organizations, and in public and private repositories with GitHub Pro, GitHub Team, GitHub Enterprise Cloud, and GitHub Enterprise Server. For more information, see [GitHub's products](https://docs.github.com/enterprise-server@3.17/github/getting-started-with-github/githubs-products) in the GitHub Help documentation. Replaces the list of apps that have push access to this branch. This removes all apps that previously had push access and grants push access to the new list of apps. Only GitHub Apps that are installed on the repository and that have been granted write access to the repository contents can be added as authorized actors on a protected branch.
   *
   * @tags repos
   * @name ReposSetAppAccessRestrictions
   * @summary Set app access restrictions
   * @request PUT:/repos/{owner}/{repo}/branches/{branch}/protection/restrictions/apps
   */
  reposSetAppAccessRestrictions = (
    owner: string,
    repo: string,
    branch: string,
    data: ReposSetAppAccessRestrictionsPayload,
    params: RequestParams = {},
  ) =>
    this.http.request<ReposSetAppAccessRestrictionsData, ValidationError>({
      path: `/repos/${owner}/${repo}/branches/${branch}/protection/restrictions/apps`,
      method: "PUT",
      body: data,
      type: ContentType.Json,
      format: "json",
      ...params,
    });
  /**
   * @description Protected branches are available in public repositories with GitHub Free and GitHub Free for organizations, and in public and private repositories with GitHub Pro, GitHub Team, GitHub Enterprise Cloud, and GitHub Enterprise Server. For more information, see [GitHub's products](https://docs.github.com/enterprise-server@3.17/github/getting-started-with-github/githubs-products) in the GitHub Help documentation. Removes the ability of an app to push to this branch. Only GitHub Apps that are installed on the repository and that have been granted write access to the repository contents can be added as authorized actors on a protected branch.
   *
   * @tags repos
   * @name ReposRemoveAppAccessRestrictions
   * @summary Remove app access restrictions
   * @request DELETE:/repos/{owner}/{repo}/branches/{branch}/protection/restrictions/apps
   */
  reposRemoveAppAccessRestrictions = (
    owner: string,
    repo: string,
    branch: string,
    data: ReposRemoveAppAccessRestrictionsPayload,
    params: RequestParams = {},
  ) =>
    this.http.request<ReposRemoveAppAccessRestrictionsData, ValidationError>({
      path: `/repos/${owner}/${repo}/branches/${branch}/protection/restrictions/apps`,
      method: "DELETE",
      body: data,
      type: ContentType.Json,
      format: "json",
      ...params,
    });
  /**
   * @description Protected branches are available in public repositories with GitHub Free and GitHub Free for organizations, and in public and private repositories with GitHub Pro, GitHub Team, GitHub Enterprise Cloud, and GitHub Enterprise Server. For more information, see [GitHub's products](https://docs.github.com/enterprise-server@3.17/github/getting-started-with-github/githubs-products) in the GitHub Help documentation. Lists the teams who have push access to this branch. The list includes child teams.
   *
   * @tags repos
   * @name ReposGetTeamsWithAccessToProtectedBranch
   * @summary Get teams with access to the protected branch
   * @request GET:/repos/{owner}/{repo}/branches/{branch}/protection/restrictions/teams
   */
  reposGetTeamsWithAccessToProtectedBranch = (
    owner: string,
    repo: string,
    branch: string,
    params: RequestParams = {},
  ) =>
    this.http.request<ReposGetTeamsWithAccessToProtectedBranchData, BasicError>(
      {
        path: `/repos/${owner}/${repo}/branches/${branch}/protection/restrictions/teams`,
        method: "GET",
        format: "json",
        ...params,
      },
    );
  /**
   * @description Protected branches are available in public repositories with GitHub Free and GitHub Free for organizations, and in public and private repositories with GitHub Pro, GitHub Team, GitHub Enterprise Cloud, and GitHub Enterprise Server. For more information, see [GitHub's products](https://docs.github.com/enterprise-server@3.17/github/getting-started-with-github/githubs-products) in the GitHub Help documentation. Grants the specified teams push access for this branch. You can also give push access to child teams.
   *
   * @tags repos
   * @name ReposAddTeamAccessRestrictions
   * @summary Add team access restrictions
   * @request POST:/repos/{owner}/{repo}/branches/{branch}/protection/restrictions/teams
   */
  reposAddTeamAccessRestrictions = (
    owner: string,
    repo: string,
    branch: string,
    data?: ReposAddTeamAccessRestrictionsPayload,
    params: RequestParams = {},
  ) =>
    this.http.request<ReposAddTeamAccessRestrictionsData, ValidationError>({
      path: `/repos/${owner}/${repo}/branches/${branch}/protection/restrictions/teams`,
      method: "POST",
      body: data,
      type: ContentType.Json,
      format: "json",
      ...params,
    });
  /**
   * @description Protected branches are available in public repositories with GitHub Free and GitHub Free for organizations, and in public and private repositories with GitHub Pro, GitHub Team, GitHub Enterprise Cloud, and GitHub Enterprise Server. For more information, see [GitHub's products](https://docs.github.com/enterprise-server@3.17/github/getting-started-with-github/githubs-products) in the GitHub Help documentation. Replaces the list of teams that have push access to this branch. This removes all teams that previously had push access and grants push access to the new list of teams. Team restrictions include child teams.
   *
   * @tags repos
   * @name ReposSetTeamAccessRestrictions
   * @summary Set team access restrictions
   * @request PUT:/repos/{owner}/{repo}/branches/{branch}/protection/restrictions/teams
   */
  reposSetTeamAccessRestrictions = (
    owner: string,
    repo: string,
    branch: string,
    data?: ReposSetTeamAccessRestrictionsPayload,
    params: RequestParams = {},
  ) =>
    this.http.request<ReposSetTeamAccessRestrictionsData, ValidationError>({
      path: `/repos/${owner}/${repo}/branches/${branch}/protection/restrictions/teams`,
      method: "PUT",
      body: data,
      type: ContentType.Json,
      format: "json",
      ...params,
    });
  /**
   * @description Protected branches are available in public repositories with GitHub Free and GitHub Free for organizations, and in public and private repositories with GitHub Pro, GitHub Team, GitHub Enterprise Cloud, and GitHub Enterprise Server. For more information, see [GitHub's products](https://docs.github.com/enterprise-server@3.17/github/getting-started-with-github/githubs-products) in the GitHub Help documentation. Removes the ability of a team to push to this branch. You can also remove push access for child teams.
   *
   * @tags repos
   * @name ReposRemoveTeamAccessRestrictions
   * @summary Remove team access restrictions
   * @request DELETE:/repos/{owner}/{repo}/branches/{branch}/protection/restrictions/teams
   */
  reposRemoveTeamAccessRestrictions = (
    owner: string,
    repo: string,
    branch: string,
    data: ReposRemoveTeamAccessRestrictionsPayload,
    params: RequestParams = {},
  ) =>
    this.http.request<ReposRemoveTeamAccessRestrictionsData, ValidationError>({
      path: `/repos/${owner}/${repo}/branches/${branch}/protection/restrictions/teams`,
      method: "DELETE",
      body: data,
      type: ContentType.Json,
      format: "json",
      ...params,
    });
  /**
   * @description Protected branches are available in public repositories with GitHub Free and GitHub Free for organizations, and in public and private repositories with GitHub Pro, GitHub Team, GitHub Enterprise Cloud, and GitHub Enterprise Server. For more information, see [GitHub's products](https://docs.github.com/enterprise-server@3.17/github/getting-started-with-github/githubs-products) in the GitHub Help documentation. Lists the people who have push access to this branch.
   *
   * @tags repos
   * @name ReposGetUsersWithAccessToProtectedBranch
   * @summary Get users with access to the protected branch
   * @request GET:/repos/{owner}/{repo}/branches/{branch}/protection/restrictions/users
   */
  reposGetUsersWithAccessToProtectedBranch = (
    owner: string,
    repo: string,
    branch: string,
    params: RequestParams = {},
  ) =>
    this.http.request<ReposGetUsersWithAccessToProtectedBranchData, BasicError>(
      {
        path: `/repos/${owner}/${repo}/branches/${branch}/protection/restrictions/users`,
        method: "GET",
        format: "json",
        ...params,
      },
    );
  /**
   * @description Protected branches are available in public repositories with GitHub Free and GitHub Free for organizations, and in public and private repositories with GitHub Pro, GitHub Team, GitHub Enterprise Cloud, and GitHub Enterprise Server. For more information, see [GitHub's products](https://docs.github.com/enterprise-server@3.17/github/getting-started-with-github/githubs-products) in the GitHub Help documentation. Grants the specified people push access for this branch. | Type    | Description                                                                                                                   | | ------- | ----------------------------------------------------------------------------------------------------------------------------- | | `array` | Usernames for people who can have push access. **Note**: The list of users, apps, and teams in total is limited to 100 items. |
   *
   * @tags repos
   * @name ReposAddUserAccessRestrictions
   * @summary Add user access restrictions
   * @request POST:/repos/{owner}/{repo}/branches/{branch}/protection/restrictions/users
   */
  reposAddUserAccessRestrictions = (
    owner: string,
    repo: string,
    branch: string,
    data: ReposAddUserAccessRestrictionsPayload,
    params: RequestParams = {},
  ) =>
    this.http.request<ReposAddUserAccessRestrictionsData, ValidationError>({
      path: `/repos/${owner}/${repo}/branches/${branch}/protection/restrictions/users`,
      method: "POST",
      body: data,
      type: ContentType.Json,
      format: "json",
      ...params,
    });
  /**
   * @description Protected branches are available in public repositories with GitHub Free and GitHub Free for organizations, and in public and private repositories with GitHub Pro, GitHub Team, GitHub Enterprise Cloud, and GitHub Enterprise Server. For more information, see [GitHub's products](https://docs.github.com/enterprise-server@3.17/github/getting-started-with-github/githubs-products) in the GitHub Help documentation. Replaces the list of people that have push access to this branch. This removes all people that previously had push access and grants push access to the new list of people. | Type    | Description                                                                                                                   | | ------- | ----------------------------------------------------------------------------------------------------------------------------- | | `array` | Usernames for people who can have push access. **Note**: The list of users, apps, and teams in total is limited to 100 items. |
   *
   * @tags repos
   * @name ReposSetUserAccessRestrictions
   * @summary Set user access restrictions
   * @request PUT:/repos/{owner}/{repo}/branches/{branch}/protection/restrictions/users
   */
  reposSetUserAccessRestrictions = (
    owner: string,
    repo: string,
    branch: string,
    data: ReposSetUserAccessRestrictionsPayload,
    params: RequestParams = {},
  ) =>
    this.http.request<ReposSetUserAccessRestrictionsData, ValidationError>({
      path: `/repos/${owner}/${repo}/branches/${branch}/protection/restrictions/users`,
      method: "PUT",
      body: data,
      type: ContentType.Json,
      format: "json",
      ...params,
    });
  /**
   * @description Protected branches are available in public repositories with GitHub Free and GitHub Free for organizations, and in public and private repositories with GitHub Pro, GitHub Team, GitHub Enterprise Cloud, and GitHub Enterprise Server. For more information, see [GitHub's products](https://docs.github.com/enterprise-server@3.17/github/getting-started-with-github/githubs-products) in the GitHub Help documentation. Removes the ability of a user to push to this branch. | Type    | Description                                                                                                                                   | | ------- | --------------------------------------------------------------------------------------------------------------------------------------------- | | `array` | Usernames of the people who should no longer have push access. **Note**: The list of users, apps, and teams in total is limited to 100 items. |
   *
   * @tags repos
   * @name ReposRemoveUserAccessRestrictions
   * @summary Remove user access restrictions
   * @request DELETE:/repos/{owner}/{repo}/branches/{branch}/protection/restrictions/users
   */
  reposRemoveUserAccessRestrictions = (
    owner: string,
    repo: string,
    branch: string,
    data: ReposRemoveUserAccessRestrictionsPayload,
    params: RequestParams = {},
  ) =>
    this.http.request<ReposRemoveUserAccessRestrictionsData, ValidationError>({
      path: `/repos/${owner}/${repo}/branches/${branch}/protection/restrictions/users`,
      method: "DELETE",
      body: data,
      type: ContentType.Json,
      format: "json",
      ...params,
    });
  /**
   * @description Renames a branch in a repository. > [!NOTE] > Although the API responds immediately, the branch rename process might take some extra time to complete in the background. You won't be able to push to the old branch name while the rename process is in progress. For more information, see "[Renaming a branch](https://docs.github.com/enterprise-server@3.17/github/administering-a-repository/renaming-a-branch)". The authenticated user must have push access to the branch. If the branch is the default branch, the authenticated user must also have admin or owner permissions. In order to rename the default branch, fine-grained access tokens also need the `administration:write` repository permission.
   *
   * @tags repos
   * @name ReposRenameBranch
   * @summary Rename a branch
   * @request POST:/repos/{owner}/{repo}/branches/{branch}/rename
   */
  reposRenameBranch = (
    owner: string,
    repo: string,
    branch: string,
    data: ReposRenameBranchPayload,
    params: RequestParams = {},
  ) =>
    this.http.request<ReposRenameBranchData, BasicError | ValidationError>({
      path: `/repos/${owner}/${repo}/branches/${branch}/rename`,
      method: "POST",
      body: data,
      type: ContentType.Json,
      format: "json",
      ...params,
    });
  /**
   * @description Lists the requests made by users of a repository to bypass push protection rules
   *
   * @tags repos
   * @name ReposListRepoPushBypassRequests
   * @summary List repository push rule bypass requests
   * @request GET:/repos/{owner}/{repo}/bypass-requests/push-rules
   */
  reposListRepoPushBypassRequests = (
    { owner, repo, ...query }: ReposListRepoPushBypassRequestsParams,
    params: RequestParams = {},
  ) =>
    this.http.request<ReposListRepoPushBypassRequestsData, BasicError>({
      path: `/repos/${owner}/${repo}/bypass-requests/push-rules`,
      method: "GET",
      query: query,
      format: "json",
      ...params,
    });
  /**
   * @description Get information about a request to bypass push protection rules for a repository.
   *
   * @tags repos
   * @name ReposGetRepoPushBypassRequest
   * @summary Get a repository push bypass request
   * @request GET:/repos/{owner}/{repo}/bypass-requests/push-rules/{bypass_request_number}
   */
  reposGetRepoPushBypassRequest = (
    owner: string,
    repo: string,
    bypassRequestNumber: number,
    params: RequestParams = {},
  ) =>
    this.http.request<ReposGetRepoPushBypassRequestData, BasicError>({
      path: `/repos/${owner}/${repo}/bypass-requests/push-rules/${bypassRequestNumber}`,
      method: "GET",
      format: "json",
      ...params,
    });
  /**
   * @description Lists requests to bypass secret scanning push protection in a repository. Delegated bypass must be enabled on the repository and the user must be a bypass reviewer to access this endpoint. Personal access tokens (classic) need the `security_events` scope to use this endpoint.
   *
   * @tags secret-scanning
   * @name SecretScanningListRepoBypassRequests
   * @summary List bypass requests for secret scanning for a repository
   * @request GET:/repos/{owner}/{repo}/bypass-requests/secret-scanning
   */
  secretScanningListRepoBypassRequests = (
    { owner, repo, ...query }: SecretScanningListRepoBypassRequestsParams,
    params: RequestParams = {},
  ) =>
    this.http.request<SecretScanningListRepoBypassRequestsData, BasicError>({
      path: `/repos/${owner}/${repo}/bypass-requests/secret-scanning`,
      method: "GET",
      query: query,
      format: "json",
      ...params,
    });
  /**
   * @description Gets a specific request to bypass secret scanning push protection in a repository. Delegated bypass must be enabled on the repository and the user must be a bypass reviewer to access this endpoint. Personal access tokens (classic) need the `security_events` scope to use this endpoint.
   *
   * @tags secret-scanning
   * @name SecretScanningGetBypassRequest
   * @summary Get a bypass request for secret scanning
   * @request GET:/repos/{owner}/{repo}/bypass-requests/secret-scanning/{bypass_request_number}
   */
  secretScanningGetBypassRequest = (
    owner: string,
    repo: string,
    bypassRequestNumber: number,
    params: RequestParams = {},
  ) =>
    this.http.request<SecretScanningGetBypassRequestData, BasicError>({
      path: `/repos/${owner}/${repo}/bypass-requests/secret-scanning/${bypassRequestNumber}`,
      method: "GET",
      format: "json",
      ...params,
    });
  /**
   * @description Approve or deny a request to bypass secret scanning push protection in a repository. Delegated bypass must be enabled on the repository and the user must be a bypass reviewer to access this endpoint. Personal access tokens (classic) need the `security_events` scope to use this endpoint.
   *
   * @tags secret-scanning
   * @name SecretScanningReviewBypassRequest
   * @summary Review a bypass request for secret scanning
   * @request PATCH:/repos/{owner}/{repo}/bypass-requests/secret-scanning/{bypass_request_number}
   */
  secretScanningReviewBypassRequest = (
    owner: string,
    repo: string,
    bypassRequestNumber: number,
    data: SecretScanningReviewBypassRequestPayload,
    params: RequestParams = {},
  ) =>
    this.http.request<
      SecretScanningReviewBypassRequestData,
      BasicError | ValidationError
    >({
      path: `/repos/${owner}/${repo}/bypass-requests/secret-scanning/${bypassRequestNumber}`,
      method: "PATCH",
      body: data,
      type: ContentType.Json,
      format: "json",
      ...params,
    });
  /**
   * @description Dissmiss a response given to a bypass request for secret scanning push protection in a repository. Delegated bypass must be enabled on the repository and the user must be a bypass reviewer to access this endpoint. Personal access tokens (classic) need the `security_events` scope to use this endpoint.
   *
   * @tags secret-scanning
   * @name SecretScanningDismissBypassResponse
   * @summary Dismiss a response on a bypass request for secret scanning
   * @request DELETE:/repos/{owner}/{repo}/bypass-responses/secret-scanning/{bypass_response_id}
   */
  secretScanningDismissBypassResponse = (
    owner: string,
    repo: string,
    bypassResponseId: number,
    params: RequestParams = {},
  ) =>
    this.http.request<
      SecretScanningDismissBypassResponseData,
      BasicError | ValidationError
    >({
      path: `/repos/${owner}/${repo}/bypass-responses/secret-scanning/${bypassResponseId}`,
      method: "DELETE",
      ...params,
    });
  /**
   * @description Creates a new check run for a specific commit in a repository. To create a check run, you must use a GitHub App. OAuth apps and authenticated users are not able to create a check suite. In a check suite, GitHub limits the number of check runs with the same name to 1000. Once these check runs exceed 1000, GitHub will start to automatically delete older check runs. > [!NOTE] > The Checks API only looks for pushes in the repository where the check suite or check run were created. Pushes to a branch in a forked repository are not detected and return an empty `pull_requests` array.
   *
   * @tags checks
   * @name ChecksCreate
   * @summary Create a check run
   * @request POST:/repos/{owner}/{repo}/check-runs
   */
  checksCreate = (
    owner: string,
    repo: string,
    data: ChecksCreatePayload,
    params: RequestParams = {},
  ) =>
    this.http.request<ChecksCreateData, any>({
      path: `/repos/${owner}/${repo}/check-runs`,
      method: "POST",
      body: data,
      type: ContentType.Json,
      format: "json",
      ...params,
    });
  /**
   * @description Gets a single check run using its `id`. > [!NOTE] > The Checks API only looks for pushes in the repository where the check suite or check run were created. Pushes to a branch in a forked repository are not detected and return an empty `pull_requests` array. OAuth app tokens and personal access tokens (classic) need the `repo` scope to use this endpoint on a private repository.
   *
   * @tags checks
   * @name ChecksGet
   * @summary Get a check run
   * @request GET:/repos/{owner}/{repo}/check-runs/{check_run_id}
   */
  checksGet = (
    owner: string,
    repo: string,
    checkRunId: number,
    params: RequestParams = {},
  ) =>
    this.http.request<ChecksGetData, any>({
      path: `/repos/${owner}/${repo}/check-runs/${checkRunId}`,
      method: "GET",
      format: "json",
      ...params,
    });
  /**
   * @description Updates a check run for a specific commit in a repository. > [!NOTE] > The endpoints to manage checks only look for pushes in the repository where the check suite or check run were created. Pushes to a branch in a forked repository are not detected and return an empty `pull_requests` array. OAuth apps and personal access tokens (classic) cannot use this endpoint.
   *
   * @tags checks
   * @name ChecksUpdate
   * @summary Update a check run
   * @request PATCH:/repos/{owner}/{repo}/check-runs/{check_run_id}
   */
  checksUpdate = (
    owner: string,
    repo: string,
    checkRunId: number,
    data: ChecksUpdatePayload,
    params: RequestParams = {},
  ) =>
    this.http.request<ChecksUpdateData, any>({
      path: `/repos/${owner}/${repo}/check-runs/${checkRunId}`,
      method: "PATCH",
      body: data,
      type: ContentType.Json,
      format: "json",
      ...params,
    });
  /**
   * @description Lists annotations for a check run using the annotation `id`. OAuth app tokens and personal access tokens (classic) need the `repo` scope to use this endpoint on a private repository.
   *
   * @tags checks
   * @name ChecksListAnnotations
   * @summary List check run annotations
   * @request GET:/repos/{owner}/{repo}/check-runs/{check_run_id}/annotations
   */
  checksListAnnotations = (
    { owner, repo, checkRunId, ...query }: ChecksListAnnotationsParams,
    params: RequestParams = {},
  ) =>
    this.http.request<ChecksListAnnotationsData, any>({
      path: `/repos/${owner}/${repo}/check-runs/${checkRunId}/annotations`,
      method: "GET",
      query: query,
      format: "json",
      ...params,
    });
  /**
   * @description Triggers GitHub to rerequest an existing check run, without pushing new code to a repository. This endpoint will trigger the [`check_run` webhook](https://docs.github.com/enterprise-server@3.17/webhooks/event-payloads/#check_run) event with the action `rerequested`. When a check run is `rerequested`, the `status` of the check suite it belongs to is reset to `queued` and the `conclusion` is cleared. The check run itself is not updated. GitHub apps recieving the [`check_run` webhook](https://docs.github.com/enterprise-server@3.17/webhooks/event-payloads/#check_run) with the `rerequested` action should then decide if the check run should be reset or updated and call the [update `check_run` endpoint](https://docs.github.com/enterprise-server@3.17/rest/checks/runs#update-a-check-run) to update the check_run if desired. For more information about how to re-run GitHub Actions jobs, see "[Re-run a job from a workflow run](https://docs.github.com/enterprise-server@3.17/rest/actions/workflow-runs#re-run-a-job-from-a-workflow-run)".
   *
   * @tags checks
   * @name ChecksRerequestRun
   * @summary Rerequest a check run
   * @request POST:/repos/{owner}/{repo}/check-runs/{check_run_id}/rerequest
   */
  checksRerequestRun = (
    owner: string,
    repo: string,
    checkRunId: number,
    params: RequestParams = {},
  ) =>
    this.http.request<ChecksRerequestRunData, ChecksRerequestRunError>({
      path: `/repos/${owner}/${repo}/check-runs/${checkRunId}/rerequest`,
      method: "POST",
      format: "json",
      ...params,
    });
  /**
   * @description Creates a check suite manually. By default, check suites are automatically created when you create a [check run](https://docs.github.com/enterprise-server@3.17/rest/checks/runs). You only need to use this endpoint for manually creating check suites when you've disabled automatic creation using "[Update repository preferences for check suites](https://docs.github.com/enterprise-server@3.17/rest/checks/suites#update-repository-preferences-for-check-suites)". > [!NOTE] > The Checks API only looks for pushes in the repository where the check suite or check run were created. Pushes to a branch in a forked repository are not detected and return an empty `pull_requests` array and a `null` value for `head_branch`. OAuth apps and personal access tokens (classic) cannot use this endpoint.
   *
   * @tags checks
   * @name ChecksCreateSuite
   * @summary Create a check suite
   * @request POST:/repos/{owner}/{repo}/check-suites
   */
  checksCreateSuite = (
    owner: string,
    repo: string,
    data: ChecksCreateSuitePayload,
    params: RequestParams = {},
  ) =>
    this.http.request<ChecksCreateSuiteData, any>({
      path: `/repos/${owner}/${repo}/check-suites`,
      method: "POST",
      body: data,
      type: ContentType.Json,
      format: "json",
      ...params,
    });
  /**
   * @description Changes the default automatic flow when creating check suites. By default, a check suite is automatically created each time code is pushed to a repository. When you disable the automatic creation of check suites, you can manually [Create a check suite](https://docs.github.com/enterprise-server@3.17/rest/checks/suites#create-a-check-suite). You must have admin permissions in the repository to set preferences for check suites.
   *
   * @tags checks
   * @name ChecksSetSuitesPreferences
   * @summary Update repository preferences for check suites
   * @request PATCH:/repos/{owner}/{repo}/check-suites/preferences
   */
  checksSetSuitesPreferences = (
    owner: string,
    repo: string,
    data: ChecksSetSuitesPreferencesPayload,
    params: RequestParams = {},
  ) =>
    this.http.request<ChecksSetSuitesPreferencesData, any>({
      path: `/repos/${owner}/${repo}/check-suites/preferences`,
      method: "PATCH",
      body: data,
      type: ContentType.Json,
      format: "json",
      ...params,
    });
  /**
   * @description Gets a single check suite using its `id`. > [!NOTE] > The Checks API only looks for pushes in the repository where the check suite or check run were created. Pushes to a branch in a forked repository are not detected and return an empty `pull_requests` array and a `null` value for `head_branch`. OAuth app tokens and personal access tokens (classic) need the `repo` scope to use this endpoint on a private repository.
   *
   * @tags checks
   * @name ChecksGetSuite
   * @summary Get a check suite
   * @request GET:/repos/{owner}/{repo}/check-suites/{check_suite_id}
   */
  checksGetSuite = (
    owner: string,
    repo: string,
    checkSuiteId: number,
    params: RequestParams = {},
  ) =>
    this.http.request<ChecksGetSuiteData, any>({
      path: `/repos/${owner}/${repo}/check-suites/${checkSuiteId}`,
      method: "GET",
      format: "json",
      ...params,
    });
  /**
   * @description Lists check runs for a check suite using its `id`. > [!NOTE] > The endpoints to manage checks only look for pushes in the repository where the check suite or check run were created. Pushes to a branch in a forked repository are not detected and return an empty `pull_requests` array. OAuth app tokens and personal access tokens (classic) need the `repo` scope to use this endpoint on a private repository.
   *
   * @tags checks
   * @name ChecksListForSuite
   * @summary List check runs in a check suite
   * @request GET:/repos/{owner}/{repo}/check-suites/{check_suite_id}/check-runs
   */
  checksListForSuite = (
    { owner, repo, checkSuiteId, ...query }: ChecksListForSuiteParams,
    params: RequestParams = {},
  ) =>
    this.http.request<ChecksListForSuiteData, any>({
      path: `/repos/${owner}/${repo}/check-suites/${checkSuiteId}/check-runs`,
      method: "GET",
      query: query,
      format: "json",
      ...params,
    });
  /**
   * @description Triggers GitHub to rerequest an existing check suite, without pushing new code to a repository. This endpoint will trigger the [`check_suite` webhook](https://docs.github.com/enterprise-server@3.17/webhooks/event-payloads/#check_suite) event with the action `rerequested`. When a check suite is `rerequested`, its `status` is reset to `queued` and the `conclusion` is cleared.
   *
   * @tags checks
   * @name ChecksRerequestSuite
   * @summary Rerequest a check suite
   * @request POST:/repos/{owner}/{repo}/check-suites/{check_suite_id}/rerequest
   */
  checksRerequestSuite = (
    owner: string,
    repo: string,
    checkSuiteId: number,
    params: RequestParams = {},
  ) =>
    this.http.request<ChecksRerequestSuiteData, any>({
      path: `/repos/${owner}/${repo}/check-suites/${checkSuiteId}/rerequest`,
      method: "POST",
      format: "json",
      ...params,
    });
  /**
   * @description Lists code scanning alerts. The response includes a `most_recent_instance` object. This provides details of the most recent instance of this alert for the default branch (or for the specified Git reference if you used `ref` in the request). OAuth app tokens and personal access tokens (classic) need the `security_events` scope to use this endpoint with private or public repositories, or the `public_repo` scope to use this endpoint with only public repositories.
   *
   * @tags code-scanning
   * @name CodeScanningListAlertsForRepo
   * @summary List code scanning alerts for a repository
   * @request GET:/repos/{owner}/{repo}/code-scanning/alerts
   */
  codeScanningListAlertsForRepo = (
    { owner, repo, ...query }: CodeScanningListAlertsForRepoParams,
    params: RequestParams = {},
  ) =>
    this.http.request<
      CodeScanningListAlertsForRepoData,
      | BasicError
      | {
          code?: string;
          message?: string;
          documentation_url?: string;
        }
    >({
      path: `/repos/${owner}/${repo}/code-scanning/alerts`,
      method: "GET",
      query: query,
      format: "json",
      ...params,
    });
  /**
   * @description Gets a single code scanning alert. OAuth app tokens and personal access tokens (classic) need the `security_events` scope to use this endpoint with private or public repositories, or the `public_repo` scope to use this endpoint with only public repositories.
   *
   * @tags code-scanning
   * @name CodeScanningGetAlert
   * @summary Get a code scanning alert
   * @request GET:/repos/{owner}/{repo}/code-scanning/alerts/{alert_number}
   */
  codeScanningGetAlert = (
    owner: string,
    repo: string,
    alertNumber: AlertNumber,
    params: RequestParams = {},
  ) =>
    this.http.request<
      CodeScanningGetAlertData,
      | BasicError
      | {
          code?: string;
          message?: string;
          documentation_url?: string;
        }
    >({
      path: `/repos/${owner}/${repo}/code-scanning/alerts/${alertNumber}`,
      method: "GET",
      format: "json",
      ...params,
    });
  /**
   * @description Updates the status of a single code scanning alert. OAuth app tokens and personal access tokens (classic) need the `security_events` scope to use this endpoint with private or public repositories, or the `public_repo` scope to use this endpoint with only public repositories.
   *
   * @tags code-scanning
   * @name CodeScanningUpdateAlert
   * @summary Update a code scanning alert
   * @request PATCH:/repos/{owner}/{repo}/code-scanning/alerts/{alert_number}
   */
  codeScanningUpdateAlert = (
    owner: string,
    repo: string,
    alertNumber: AlertNumber,
    data: CodeScanningUpdateAlertPayload,
    params: RequestParams = {},
  ) =>
    this.http.request<
      CodeScanningUpdateAlertData,
      | BasicError
      | {
          code?: string;
          message?: string;
          documentation_url?: string;
        }
    >({
      path: `/repos/${owner}/${repo}/code-scanning/alerts/${alertNumber}`,
      method: "PATCH",
      body: data,
      type: ContentType.Json,
      format: "json",
      ...params,
    });
  /**
   * @description Lists all instances of the specified code scanning alert. OAuth app tokens and personal access tokens (classic) need the `security_events` scope to use this endpoint with private or public repositories, or the `public_repo` scope to use this endpoint with only public repositories.
   *
   * @tags code-scanning
   * @name CodeScanningListAlertInstances
   * @summary List instances of a code scanning alert
   * @request GET:/repos/{owner}/{repo}/code-scanning/alerts/{alert_number}/instances
   */
  codeScanningListAlertInstances = (
    {
      owner,
      repo,
      alertNumber,
      ...query
    }: CodeScanningListAlertInstancesParams,
    params: RequestParams = {},
  ) =>
    this.http.request<
      CodeScanningListAlertInstancesData,
      | BasicError
      | {
          code?: string;
          message?: string;
          documentation_url?: string;
        }
    >({
      path: `/repos/${owner}/${repo}/code-scanning/alerts/${alertNumber}/instances`,
      method: "GET",
      query: query,
      format: "json",
      ...params,
    });
  /**
   * @description Lists the details of all code scanning analyses for a repository, starting with the most recent. The response is paginated and you can use the `page` and `per_page` parameters to list the analyses you're interested in. By default 30 analyses are listed per page. The `rules_count` field in the response give the number of rules that were run in the analysis. For very old analyses this data is not available, and `0` is returned in this field. > [!WARNING] > **Closing down notice:** The `tool_name` field is closing down and will, in future, not be included in the response for this endpoint. The example response reflects this change. The tool name can now be found inside the `tool` field. OAuth app tokens and personal access tokens (classic) need the `security_events` scope to use this endpoint with private or public repositories, or the `public_repo` scope to use this endpoint with only public repositories.
   *
   * @tags code-scanning
   * @name CodeScanningListRecentAnalyses
   * @summary List code scanning analyses for a repository
   * @request GET:/repos/{owner}/{repo}/code-scanning/analyses
   */
  codeScanningListRecentAnalyses = (
    { owner, repo, ...query }: CodeScanningListRecentAnalysesParams,
    params: RequestParams = {},
  ) =>
    this.http.request<
      CodeScanningListRecentAnalysesData,
      | BasicError
      | {
          code?: string;
          message?: string;
          documentation_url?: string;
        }
    >({
      path: `/repos/${owner}/${repo}/code-scanning/analyses`,
      method: "GET",
      query: query,
      format: "json",
      ...params,
    });
  /**
   * @description Gets a specified code scanning analysis for a repository. The default JSON response contains fields that describe the analysis. This includes the Git reference and commit SHA to which the analysis relates, the datetime of the analysis, the name of the code scanning tool, and the number of alerts. The `rules_count` field in the default response give the number of rules that were run in the analysis. For very old analyses this data is not available, and `0` is returned in this field. This endpoint supports the following custom media types. For more information, see "[Media types](https://docs.github.com/enterprise-server@3.17/rest/using-the-rest-api/getting-started-with-the-rest-api#media-types)." - **`application/sarif+json`**: Instead of returning a summary of the analysis, this endpoint returns a subset of the analysis data that was uploaded. The data is formatted as [SARIF version 2.1.0](https://docs.oasis-open.org/sarif/sarif/v2.1.0/cs01/sarif-v2.1.0-cs01.html). It also returns additional data such as the `github/alertNumber` and `github/alertUrl` properties. OAuth app tokens and personal access tokens (classic) need the `security_events` scope to use this endpoint with private or public repositories, or the `public_repo` scope to use this endpoint with only public repositories.
   *
   * @tags code-scanning
   * @name CodeScanningGetAnalysis
   * @summary Get a code scanning analysis for a repository
   * @request GET:/repos/{owner}/{repo}/code-scanning/analyses/{analysis_id}
   */
  codeScanningGetAnalysis = (
    owner: string,
    repo: string,
    analysisId: number,
    params: RequestParams = {},
  ) =>
    this.http.request<
      CodeScanningGetAnalysisData,
      | BasicError
      | {
          code?: string;
          message?: string;
          documentation_url?: string;
        }
    >({
      path: `/repos/${owner}/${repo}/code-scanning/analyses/${analysisId}`,
      method: "GET",
      format: "json",
      ...params,
    });
  /**
   * @description Deletes a specified code scanning analysis from a repository. You can delete one analysis at a time. To delete a series of analyses, start with the most recent analysis and work backwards. Conceptually, the process is similar to the undo function in a text editor. When you list the analyses for a repository, one or more will be identified as deletable in the response: ``` "deletable": true ``` An analysis is deletable when it's the most recent in a set of analyses. Typically, a repository will have multiple sets of analyses for each enabled code scanning tool, where a set is determined by a unique combination of analysis values: * `ref` * `tool` * `category` If you attempt to delete an analysis that is not the most recent in a set, you'll get a 400 response with the message: ``` Analysis specified is not deletable. ``` The response from a successful `DELETE` operation provides you with two alternative URLs for deleting the next analysis in the set: `next_analysis_url` and `confirm_delete_url`. Use the `next_analysis_url` URL if you want to avoid accidentally deleting the final analysis in a set. This is a useful option if you want to preserve at least one analysis for the specified tool in your repository. Use the `confirm_delete_url` URL if you are content to remove all analyses for a tool. When you delete the last analysis in a set, the value of `next_analysis_url` and `confirm_delete_url` in the 200 response is `null`. As an example of the deletion process, let's imagine that you added a workflow that configured a particular code scanning tool to analyze the code in a repository. This tool has added 15 analyses: 10 on the default branch, and another 5 on a topic branch. You therefore have two separate sets of analyses for this tool. You've now decided that you want to remove all of the analyses for the tool. To do this you must make 15 separate deletion requests. To start, you must find an analysis that's identified as deletable. Each set of analyses always has one that's identified as deletable. Having found the deletable analysis for one of the two sets, delete this analysis and then continue deleting the next analysis in the set until they're all deleted. Then repeat the process for the second set. The procedure therefore consists of a nested loop: **Outer loop**: * List the analyses for the repository, filtered by tool. * Parse this list to find a deletable analysis. If found: **Inner loop**: * Delete the identified analysis. * Parse the response for the value of `confirm_delete_url` and, if found, use this in the next iteration. The above process assumes that you want to remove all trace of the tool's analyses from the GitHub user interface, for the specified repository, and it therefore uses the `confirm_delete_url` value. Alternatively, you could use the `next_analysis_url` value, which would leave the last analysis in each set undeleted to avoid removing a tool's analysis entirely. OAuth app tokens and personal access tokens (classic) need the `repo` scope to use this endpoint with private or public repositories, or the `public_repo` scope to use this endpoint with only public repositories.
   *
   * @tags code-scanning
   * @name CodeScanningDeleteAnalysis
   * @summary Delete a code scanning analysis from a repository
   * @request DELETE:/repos/{owner}/{repo}/code-scanning/analyses/{analysis_id}
   */
  codeScanningDeleteAnalysis = (
    { owner, repo, analysisId, ...query }: CodeScanningDeleteAnalysisParams,
    params: RequestParams = {},
  ) =>
    this.http.request<
      CodeScanningDeleteAnalysisData,
      | BasicError
      | {
          code?: string;
          message?: string;
          documentation_url?: string;
        }
    >({
      path: `/repos/${owner}/${repo}/code-scanning/analyses/${analysisId}`,
      method: "DELETE",
      query: query,
      format: "json",
      ...params,
    });
  /**
   * @description Gets a code scanning default setup configuration. OAuth app tokens and personal access tokens (classic) need the `repo` scope to use this endpoint with private or public repositories, or the `public_repo` scope to use this endpoint with only public repositories.
   *
   * @tags code-scanning
   * @name CodeScanningGetDefaultSetup
   * @summary Get a code scanning default setup configuration
   * @request GET:/repos/{owner}/{repo}/code-scanning/default-setup
   */
  codeScanningGetDefaultSetup = (
    owner: string,
    repo: string,
    params: RequestParams = {},
  ) =>
    this.http.request<
      CodeScanningGetDefaultSetupData,
      | BasicError
      | {
          code?: string;
          message?: string;
          documentation_url?: string;
        }
    >({
      path: `/repos/${owner}/${repo}/code-scanning/default-setup`,
      method: "GET",
      format: "json",
      ...params,
    });
  /**
   * @description Updates a code scanning default setup configuration. OAuth app tokens and personal access tokens (classic) need the `repo` scope to use this endpoint with private or public repositories, or the `public_repo` scope to use this endpoint with only public repositories.
   *
   * @tags code-scanning
   * @name CodeScanningUpdateDefaultSetup
   * @summary Update a code scanning default setup configuration
   * @request PATCH:/repos/{owner}/{repo}/code-scanning/default-setup
   */
  codeScanningUpdateDefaultSetup = (
    owner: string,
    repo: string,
    data: CodeScanningDefaultSetupUpdate,
    params: RequestParams = {},
  ) =>
    this.http.request<
      CodeScanningUpdateDefaultSetupData,
      | BasicError
      | {
          code?: string;
          message?: string;
          documentation_url?: string;
        }
    >({
      path: `/repos/${owner}/${repo}/code-scanning/default-setup`,
      method: "PATCH",
      body: data,
      type: ContentType.Json,
      format: "json",
      ...params,
    });
  /**
   * @description Uploads SARIF data containing the results of a code scanning analysis to make the results available in a repository. For troubleshooting information, see "[Troubleshooting SARIF uploads](https://docs.github.com/enterprise-server@3.17/code-security/code-scanning/troubleshooting-sarif)." There are two places where you can upload code scanning results. - If you upload to a pull request, for example `--ref refs/pull/42/merge` or `--ref refs/pull/42/head`, then the results appear as alerts in a pull request check. For more information, see "[Triaging code scanning alerts in pull requests](/code-security/secure-coding/triaging-code-scanning-alerts-in-pull-requests)." - If you upload to a branch, for example `--ref refs/heads/my-branch`, then the results appear in the **Security** tab for your repository. For more information, see "[Managing code scanning alerts for your repository](/code-security/secure-coding/managing-code-scanning-alerts-for-your-repository#viewing-the-alerts-for-a-repository)." You must compress the SARIF-formatted analysis data that you want to upload, using `gzip`, and then encode it as a Base64 format string. For example: ``` gzip -c analysis-data.sarif | base64 -w0 ``` SARIF upload supports a maximum number of entries per the following data objects, and an analysis will be rejected if any of these objects is above its maximum value. For some objects, there are additional values over which the entries will be ignored while keeping the most important entries whenever applicable. To get the most out of your analysis when it includes data above the supported limits, try to optimize the analysis configuration. For example, for the CodeQL tool, identify and remove the most noisy queries. For more information, see "[SARIF results exceed one or more limits](https://docs.github.com/enterprise-server@3.17/code-security/code-scanning/troubleshooting-sarif/results-exceed-limit)." | **SARIF data**                   | **Maximum values** | **Additional limits**                                                            | |----------------------------------|:------------------:|----------------------------------------------------------------------------------| | Runs per file                    |         20         |                                                                                  | | Results per run                  |       25,000       | Only the top 5,000 results will be included, prioritized by severity.            | | Rules per run                    |       25,000       |                                                                                  | | Tool extensions per run          |        100         |                                                                                  | | Thread Flow Locations per result |       10,000       | Only the top 1,000 Thread Flow Locations will be included, using prioritization. | | Location per result	             |       1,000        | Only 100 locations will be included.                                             | | Tags per rule	                   |         20         | Only 10 tags will be included.                                                   | The `202 Accepted` response includes an `id` value. You can use this ID to check the status of the upload by using it in the `/sarifs/{sarif_id}` endpoint. For more information, see "[Get information about a SARIF upload](/rest/code-scanning/code-scanning#get-information-about-a-sarif-upload)." OAuth app tokens and personal access tokens (classic) need the `security_events` scope to use this endpoint with private or public repositories, or the `public_repo` scope to use this endpoint with only public repositories. This endpoint is limited to 1,000 requests per hour for each user or app installation calling it.
   *
   * @tags code-scanning
   * @name CodeScanningUploadSarif
   * @summary Upload an analysis as SARIF data
   * @request POST:/repos/{owner}/{repo}/code-scanning/sarifs
   */
  codeScanningUploadSarif = (
    owner: string,
    repo: string,
    data: CodeScanningUploadSarifPayload,
    params: RequestParams = {},
  ) =>
    this.http.request<
      CodeScanningUploadSarifData,
      | void
      | BasicError
      | {
          code?: string;
          message?: string;
          documentation_url?: string;
        }
    >({
      path: `/repos/${owner}/${repo}/code-scanning/sarifs`,
      method: "POST",
      body: data,
      type: ContentType.Json,
      format: "json",
      ...params,
    });
  /**
   * @description Gets information about a SARIF upload, including the status and the URL of the analysis that was uploaded so that you can retrieve details of the analysis. For more information, see "[Get a code scanning analysis for a repository](/rest/code-scanning/code-scanning#get-a-code-scanning-analysis-for-a-repository)." OAuth app tokens and personal access tokens (classic) need the `security_events` scope to use this endpoint with private or public repositories, or the `public_repo` scope to use this endpoint with only public repositories.
   *
   * @tags code-scanning
   * @name CodeScanningGetSarif
   * @summary Get information about a SARIF upload
   * @request GET:/repos/{owner}/{repo}/code-scanning/sarifs/{sarif_id}
   */
  codeScanningGetSarif = (
    owner: string,
    repo: string,
    sarifId: string,
    params: RequestParams = {},
  ) =>
    this.http.request<
      CodeScanningGetSarifData,
      | BasicError
      | void
      | {
          code?: string;
          message?: string;
          documentation_url?: string;
        }
    >({
      path: `/repos/${owner}/${repo}/code-scanning/sarifs/${sarifId}`,
      method: "GET",
      format: "json",
      ...params,
    });
  /**
   * @description Get the code security configuration that manages a repository's code security settings. The authenticated user must be an administrator or security manager for the organization to use this endpoint. OAuth app tokens and personal access tokens (classic) need the `repo` scope to use this endpoint.
   *
   * @tags code-security
   * @name CodeSecurityGetConfigurationForRepository
   * @summary Get the code security configuration associated with a repository
   * @request GET:/repos/{owner}/{repo}/code-security-configuration
   */
  codeSecurityGetConfigurationForRepository = (
    owner: string,
    repo: string,
    params: RequestParams = {},
  ) =>
    this.http.request<
      CodeSecurityGetConfigurationForRepositoryData,
      BasicError
    >({
      path: `/repos/${owner}/${repo}/code-security-configuration`,
      method: "GET",
      format: "json",
      ...params,
    });
  /**
   * @description List any syntax errors that are detected in the CODEOWNERS file. For more information about the correct CODEOWNERS syntax, see "[About code owners](https://docs.github.com/enterprise-server@3.17/repositories/managing-your-repositorys-settings-and-features/customizing-your-repository/about-code-owners)."
   *
   * @tags repos
   * @name ReposCodeownersErrors
   * @summary List CODEOWNERS errors
   * @request GET:/repos/{owner}/{repo}/codeowners/errors
   */
  reposCodeownersErrors = (
    { owner, repo, ...query }: ReposCodeownersErrorsParams,
    params: RequestParams = {},
  ) =>
    this.http.request<ReposCodeownersErrorsData, void>({
      path: `/repos/${owner}/${repo}/codeowners/errors`,
      method: "GET",
      query: query,
      format: "json",
      ...params,
    });
  /**
   * @description For organization-owned repositories, the list of collaborators includes outside collaborators, organization members that are direct collaborators, organization members with access through team memberships, organization members with access through default organization permissions, and organization owners. The `permissions` hash returned in the response contains the base role permissions of the collaborator. The `role_name` is the highest role assigned to the collaborator after considering all sources of grants, including: repo, teams, organization, and enterprise. There is presently not a way to differentiate between an organization level grant and a repository level grant from this endpoint response. Team members will include the members of child teams. The authenticated user must have write, maintain, or admin privileges on the repository to use this endpoint. For organization-owned repositories, the authenticated user needs to be a member of the organization. OAuth app tokens and personal access tokens (classic) need the `read:org` and `repo` scopes to use this endpoint.
   *
   * @tags repos
   * @name ReposListCollaborators
   * @summary List repository collaborators
   * @request GET:/repos/{owner}/{repo}/collaborators
   */
  reposListCollaborators = (
    { owner, repo, ...query }: ReposListCollaboratorsParams,
    params: RequestParams = {},
  ) =>
    this.http.request<ReposListCollaboratorsData, BasicError>({
      path: `/repos/${owner}/${repo}/collaborators`,
      method: "GET",
      query: query,
      format: "json",
      ...params,
    });
  /**
   * @description For organization-owned repositories, the list of collaborators includes outside collaborators, organization members that are direct collaborators, organization members with access through team memberships, organization members with access through default organization permissions, and organization owners. Team members will include the members of child teams. The authenticated user must have push access to the repository to use this endpoint. OAuth app tokens and personal access tokens (classic) need the `read:org` and `repo` scopes to use this endpoint.
   *
   * @tags repos
   * @name ReposCheckCollaborator
   * @summary Check if a user is a repository collaborator
   * @request GET:/repos/{owner}/{repo}/collaborators/{username}
   */
  reposCheckCollaborator = (
    owner: string,
    repo: string,
    username: string,
    params: RequestParams = {},
  ) =>
    this.http.request<ReposCheckCollaboratorData, void>({
      path: `/repos/${owner}/${repo}/collaborators/${username}`,
      method: "GET",
      ...params,
    });
  /**
   * @description This endpoint triggers [notifications](https://docs.github.com/enterprise-server@3.17/github/managing-subscriptions-and-notifications-on-github/about-notifications). Creating content too quickly using this endpoint may result in secondary rate limiting. For more information, see "[Rate limits for the API](https://docs.github.com/enterprise-server@3.17/rest/using-the-rest-api/rate-limits-for-the-rest-api#about-secondary-rate-limits)" and "[Best practices for using the REST API](https://docs.github.com/enterprise-server@3.17/rest/guides/best-practices-for-using-the-rest-api)." Adding an outside collaborator may be restricted by enterprise administrators. For more information, see "[Enforcing repository management policies in your enterprise](https://docs.github.com/enterprise-server@3.17/admin/policies/enforcing-policies-for-your-enterprise/enforcing-repository-management-policies-in-your-enterprise#enforcing-a-policy-for-inviting-outside-collaborators-to-repositories)." For more information on permission levels, see "[Repository permission levels for an organization](https://docs.github.com/enterprise-server@3.17/github/setting-up-and-managing-organizations-and-teams/repository-permission-levels-for-an-organization#permission-levels-for-repositories-owned-by-an-organization)". There are restrictions on which permissions can be granted to organization members when an organization base role is in place. In this case, the permission being given must be equal to or higher than the org base permission. Otherwise, the request will fail with: ``` Cannot assign {member} permission of {role name} ``` Note that, if you choose not to pass any parameters, you'll need to set `Content-Length` to zero when calling out to this endpoint. For more information, see "[HTTP method](https://docs.github.com/enterprise-server@3.17/rest/guides/getting-started-with-the-rest-api#http-method)." **Updating an existing collaborator's permission level** The endpoint can also be used to change the permissions of an existing collaborator without first removing and re-adding the collaborator. To change the permissions, use the same endpoint and pass a different `permission` parameter. The response will be a `204`, with no other indication that the permission level changed.
   *
   * @tags repos
   * @name ReposAddCollaborator
   * @summary Add a repository collaborator
   * @request PUT:/repos/{owner}/{repo}/collaborators/{username}
   */
  reposAddCollaborator = (
    owner: string,
    repo: string,
    username: string,
    data?: ReposAddCollaboratorPayload,
    params: RequestParams = {},
  ) =>
    this.http.request<ReposAddCollaboratorData, ReposAddCollaboratorError>({
      path: `/repos/${owner}/${repo}/collaborators/${username}`,
      method: "PUT",
      body: data,
      type: ContentType.Json,
      ...params,
    });
  /**
   * @description Removes a collaborator from a repository. To use this endpoint, the authenticated user must either be an administrator of the repository or target themselves for removal. This endpoint also: - Cancels any outstanding invitations sent by the collaborator - Unassigns the user from any issues - Removes access to organization projects if the user is not an organization member and is not a collaborator on any other organization repositories. - Unstars the repository - Updates access permissions to packages Removing a user as a collaborator has the following effects on forks: - If the user had access to a fork through their membership to this repository, the user will also be removed from the fork. - If the user had their own fork of the repository, the fork will be deleted. - If the user still has read access to the repository, open pull requests by this user from a fork will be denied. > [!NOTE] > A user can still have access to the repository through organization permissions like base repository permissions. Although the API responds immediately, the additional permission updates might take some extra time to complete in the background. For more information on fork permissions, see "[About permissions and visibility of forks](https://docs.github.com/enterprise-server@3.17/pull-requests/collaborating-with-pull-requests/working-with-forks/about-permissions-and-visibility-of-forks)".
   *
   * @tags repos
   * @name ReposRemoveCollaborator
   * @summary Remove a repository collaborator
   * @request DELETE:/repos/{owner}/{repo}/collaborators/{username}
   */
  reposRemoveCollaborator = (
    owner: string,
    repo: string,
    username: string,
    params: RequestParams = {},
  ) =>
    this.http.request<
      ReposRemoveCollaboratorData,
      BasicError | ValidationError
    >({
      path: `/repos/${owner}/${repo}/collaborators/${username}`,
      method: "DELETE",
      ...params,
    });
  /**
   * @description Checks the repository permission and role of a collaborator. The `permission` attribute provides the legacy base roles of `admin`, `write`, `read`, and `none`, where the `maintain` role is mapped to `write` and the `triage` role is mapped to `read`. The `role_name` attribute provides the name of the assigned role, including custom roles. The `permission` can also be used to determine which base level of access the collaborator has to the repository. The calculated permissions are the highest role assigned to the collaborator after considering all sources of grants, including: repo, teams, organization, and enterprise. There is presently not a way to differentiate between an organization level grant and a repository level grant from this endpoint response.
   *
   * @tags repos
   * @name ReposGetCollaboratorPermissionLevel
   * @summary Get repository permissions for a user
   * @request GET:/repos/{owner}/{repo}/collaborators/{username}/permission
   */
  reposGetCollaboratorPermissionLevel = (
    owner: string,
    repo: string,
    username: string,
    params: RequestParams = {},
  ) =>
    this.http.request<ReposGetCollaboratorPermissionLevelData, BasicError>({
      path: `/repos/${owner}/${repo}/collaborators/${username}/permission`,
      method: "GET",
      format: "json",
      ...params,
    });
  /**
   * @description Lists the commit comments for a specified repository. Comments are ordered by ascending ID. This endpoint supports the following custom media types. For more information, see "[Media types](https://docs.github.com/enterprise-server@3.17/rest/using-the-rest-api/getting-started-with-the-rest-api#media-types)." - **`application/vnd.github-commitcomment.raw+json`**: Returns the raw markdown body. Response will include `body`. This is the default if you do not pass any specific media type. - **`application/vnd.github-commitcomment.text+json`**: Returns a text only representation of the markdown body. Response will include `body_text`. - **`application/vnd.github-commitcomment.html+json`**: Returns HTML rendered from the body's markdown. Response will include `body_html`. - **`application/vnd.github-commitcomment.full+json`**: Returns raw, text, and HTML representations. Response will include `body`, `body_text`, and `body_html`.
   *
   * @tags repos
   * @name ReposListCommitCommentsForRepo
   * @summary List commit comments for a repository
   * @request GET:/repos/{owner}/{repo}/comments
   */
  reposListCommitCommentsForRepo = (
    { owner, repo, ...query }: ReposListCommitCommentsForRepoParams,
    params: RequestParams = {},
  ) =>
    this.http.request<ReposListCommitCommentsForRepoData, any>({
      path: `/repos/${owner}/${repo}/comments`,
      method: "GET",
      query: query,
      format: "json",
      ...params,
    });
  /**
   * @description Gets a specified commit comment. This endpoint supports the following custom media types. For more information, see "[Media types](https://docs.github.com/enterprise-server@3.17/rest/using-the-rest-api/getting-started-with-the-rest-api#media-types)." - **`application/vnd.github-commitcomment.raw+json`**: Returns the raw markdown body. Response will include `body`. This is the default if you do not pass any specific media type. - **`application/vnd.github-commitcomment.text+json`**: Returns a text only representation of the markdown body. Response will include `body_text`. - **`application/vnd.github-commitcomment.html+json`**: Returns HTML rendered from the body's markdown. Response will include `body_html`. - **`application/vnd.github-commitcomment.full+json`**: Returns raw, text, and HTML representations. Response will include `body`, `body_text`, and `body_html`.
   *
   * @tags repos
   * @name ReposGetCommitComment
   * @summary Get a commit comment
   * @request GET:/repos/{owner}/{repo}/comments/{comment_id}
   */
  reposGetCommitComment = (
    owner: string,
    repo: string,
    commentId: number,
    params: RequestParams = {},
  ) =>
    this.http.request<ReposGetCommitCommentData, BasicError>({
      path: `/repos/${owner}/${repo}/comments/${commentId}`,
      method: "GET",
      format: "json",
      ...params,
    });
  /**
   * @description Updates the contents of a specified commit comment. This endpoint supports the following custom media types. For more information, see "[Media types](https://docs.github.com/enterprise-server@3.17/rest/using-the-rest-api/getting-started-with-the-rest-api#media-types)." - **`application/vnd.github-commitcomment.raw+json`**: Returns the raw markdown body. Response will include `body`. This is the default if you do not pass any specific media type. - **`application/vnd.github-commitcomment.text+json`**: Returns a text only representation of the markdown body. Response will include `body_text`. - **`application/vnd.github-commitcomment.html+json`**: Returns HTML rendered from the body's markdown. Response will include `body_html`. - **`application/vnd.github-commitcomment.full+json`**: Returns raw, text, and HTML representations. Response will include `body`, `body_text`, and `body_html`.
   *
   * @tags repos
   * @name ReposUpdateCommitComment
   * @summary Update a commit comment
   * @request PATCH:/repos/{owner}/{repo}/comments/{comment_id}
   */
  reposUpdateCommitComment = (
    owner: string,
    repo: string,
    commentId: number,
    data: ReposUpdateCommitCommentPayload,
    params: RequestParams = {},
  ) =>
    this.http.request<ReposUpdateCommitCommentData, BasicError>({
      path: `/repos/${owner}/${repo}/comments/${commentId}`,
      method: "PATCH",
      body: data,
      type: ContentType.Json,
      format: "json",
      ...params,
    });
  /**
   * No description
   *
   * @tags repos
   * @name ReposDeleteCommitComment
   * @summary Delete a commit comment
   * @request DELETE:/repos/{owner}/{repo}/comments/{comment_id}
   */
  reposDeleteCommitComment = (
    owner: string,
    repo: string,
    commentId: number,
    params: RequestParams = {},
  ) =>
    this.http.request<ReposDeleteCommitCommentData, BasicError>({
      path: `/repos/${owner}/${repo}/comments/${commentId}`,
      method: "DELETE",
      ...params,
    });
  /**
   * @description List the reactions to a [commit comment](https://docs.github.com/enterprise-server@3.17/rest/commits/comments#get-a-commit-comment).
   *
   * @tags reactions
   * @name ReactionsListForCommitComment
   * @summary List reactions for a commit comment
   * @request GET:/repos/{owner}/{repo}/comments/{comment_id}/reactions
   */
  reactionsListForCommitComment = (
    { owner, repo, commentId, ...query }: ReactionsListForCommitCommentParams,
    params: RequestParams = {},
  ) =>
    this.http.request<ReactionsListForCommitCommentData, BasicError>({
      path: `/repos/${owner}/${repo}/comments/${commentId}/reactions`,
      method: "GET",
      query: query,
      format: "json",
      ...params,
    });
  /**
   * @description Create a reaction to a [commit comment](https://docs.github.com/enterprise-server@3.17/rest/commits/comments#get-a-commit-comment). A response with an HTTP `200` status means that you already added the reaction type to this commit comment.
   *
   * @tags reactions
   * @name ReactionsCreateForCommitComment
   * @summary Create reaction for a commit comment
   * @request POST:/repos/{owner}/{repo}/comments/{comment_id}/reactions
   */
  reactionsCreateForCommitComment = (
    owner: string,
    repo: string,
    commentId: number,
    data: ReactionsCreateForCommitCommentPayload,
    params: RequestParams = {},
  ) =>
    this.http.request<ReactionsCreateForCommitCommentData, ValidationError>({
      path: `/repos/${owner}/${repo}/comments/${commentId}/reactions`,
      method: "POST",
      body: data,
      type: ContentType.Json,
      format: "json",
      ...params,
    });
  /**
   * @description > [!NOTE] > You can also specify a repository by `repository_id` using the route `DELETE /repositories/:repository_id/comments/:comment_id/reactions/:reaction_id`. Delete a reaction to a [commit comment](https://docs.github.com/enterprise-server@3.17/rest/commits/comments#get-a-commit-comment).
   *
   * @tags reactions
   * @name ReactionsDeleteForCommitComment
   * @summary Delete a commit comment reaction
   * @request DELETE:/repos/{owner}/{repo}/comments/{comment_id}/reactions/{reaction_id}
   */
  reactionsDeleteForCommitComment = (
    owner: string,
    repo: string,
    commentId: number,
    reactionId: number,
    params: RequestParams = {},
  ) =>
    this.http.request<ReactionsDeleteForCommitCommentData, any>({
      path: `/repos/${owner}/${repo}/comments/${commentId}/reactions/${reactionId}`,
      method: "DELETE",
      ...params,
    });
  /**
   * @description **Signature verification object** The response will include a `verification` object that describes the result of verifying the commit's signature. The following fields are included in the `verification` object: | Name | Type | Description | | ---- | ---- | ----------- | | `verified` | `boolean` | Indicates whether GitHub considers the signature in this commit to be verified. | | `reason` | `string` | The reason for verified value. Possible values and their meanings are enumerated in table below. | | `signature` | `string` | The signature that was extracted from the commit. | | `payload` | `string` | The value that was signed. | | `verified_at` | `string` | The date the signature was verified by GitHub. | These are the possible values for `reason` in the `verification` object: | Value | Description | | ----- | ----------- | | `expired_key` | The key that made the signature is expired. | | `not_signing_key` | The "signing" flag is not among the usage flags in the GPG key that made the signature. | | `gpgverify_error` | There was an error communicating with the signature verification service. | | `gpgverify_unavailable` | The signature verification service is currently unavailable. | | `unsigned` | The object does not include a signature. | | `unknown_signature_type` | A non-PGP signature was found in the commit. | | `no_user` | No user was associated with the `committer` email address in the commit. | | `unverified_email` | The `committer` email address in the commit was associated with a user, but the email address is not verified on their account. | | `bad_email` | The `committer` email address in the commit is not included in the identities of the PGP key that made the signature. | | `unknown_key` | The key that made the signature has not been registered with any user's account. | | `malformed_signature` | There was an error parsing the signature. | | `invalid` | The signature could not be cryptographically verified using the key whose key-id was found in the signature. | | `valid` | None of the above errors applied, so the signature is considered to be verified. |
   *
   * @tags repos
   * @name ReposListCommits
   * @summary List commits
   * @request GET:/repos/{owner}/{repo}/commits
   */
  reposListCommits = (
    { owner, repo, ...query }: ReposListCommitsParams,
    params: RequestParams = {},
  ) =>
    this.http.request<ReposListCommitsData, BasicError>({
      path: `/repos/${owner}/${repo}/commits`,
      method: "GET",
      query: query,
      format: "json",
      ...params,
    });
  /**
   * @description Protected branches are available in public repositories with GitHub Free and GitHub Free for organizations, and in public and private repositories with GitHub Pro, GitHub Team, GitHub Enterprise Cloud, and GitHub Enterprise Server. For more information, see [GitHub's products](https://docs.github.com/enterprise-server@3.17/github/getting-started-with-github/githubs-products) in the GitHub Help documentation. Returns all branches where the given commit SHA is the HEAD, or latest commit for the branch.
   *
   * @tags repos
   * @name ReposListBranchesForHeadCommit
   * @summary List branches for HEAD commit
   * @request GET:/repos/{owner}/{repo}/commits/{commit_sha}/branches-where-head
   */
  reposListBranchesForHeadCommit = (
    owner: string,
    repo: string,
    commitSha: string,
    params: RequestParams = {},
  ) =>
    this.http.request<
      ReposListBranchesForHeadCommitData,
      BasicError | ValidationError
    >({
      path: `/repos/${owner}/${repo}/commits/${commitSha}/branches-where-head`,
      method: "GET",
      format: "json",
      ...params,
    });
  /**
   * @description Lists the comments for a specified commit. This endpoint supports the following custom media types. For more information, see "[Media types](https://docs.github.com/enterprise-server@3.17/rest/using-the-rest-api/getting-started-with-the-rest-api#media-types)." - **`application/vnd.github-commitcomment.raw+json`**: Returns the raw markdown body. Response will include `body`. This is the default if you do not pass any specific media type. - **`application/vnd.github-commitcomment.text+json`**: Returns a text only representation of the markdown body. Response will include `body_text`. - **`application/vnd.github-commitcomment.html+json`**: Returns HTML rendered from the body's markdown. Response will include `body_html`. - **`application/vnd.github-commitcomment.full+json`**: Returns raw, text, and HTML representations. Response will include `body`, `body_text`, and `body_html`.
   *
   * @tags repos
   * @name ReposListCommentsForCommit
   * @summary List commit comments
   * @request GET:/repos/{owner}/{repo}/commits/{commit_sha}/comments
   */
  reposListCommentsForCommit = (
    { owner, repo, commitSha, ...query }: ReposListCommentsForCommitParams,
    params: RequestParams = {},
  ) =>
    this.http.request<ReposListCommentsForCommitData, any>({
      path: `/repos/${owner}/${repo}/commits/${commitSha}/comments`,
      method: "GET",
      query: query,
      format: "json",
      ...params,
    });
  /**
   * @description Create a comment for a commit using its `:commit_sha`. This endpoint triggers [notifications](https://docs.github.com/enterprise-server@3.17/github/managing-subscriptions-and-notifications-on-github/about-notifications). Creating content too quickly using this endpoint may result in secondary rate limiting. For more information, see "[Rate limits for the API](https://docs.github.com/enterprise-server@3.17/rest/using-the-rest-api/rate-limits-for-the-rest-api#about-secondary-rate-limits)" and "[Best practices for using the REST API](https://docs.github.com/enterprise-server@3.17/rest/guides/best-practices-for-using-the-rest-api)." This endpoint supports the following custom media types. For more information, see "[Media types](https://docs.github.com/enterprise-server@3.17/rest/using-the-rest-api/getting-started-with-the-rest-api#media-types)." - **`application/vnd.github-commitcomment.raw+json`**: Returns the raw markdown body. Response will include `body`. This is the default if you do not pass any specific media type. - **`application/vnd.github-commitcomment.text+json`**: Returns a text only representation of the markdown body. Response will include `body_text`. - **`application/vnd.github-commitcomment.html+json`**: Returns HTML rendered from the body's markdown. Response will include `body_html`. - **`application/vnd.github-commitcomment.full+json`**: Returns raw, text, and HTML representations. Response will include `body`, `body_text`, and `body_html`.
   *
   * @tags repos
   * @name ReposCreateCommitComment
   * @summary Create a commit comment
   * @request POST:/repos/{owner}/{repo}/commits/{commit_sha}/comments
   */
  reposCreateCommitComment = (
    owner: string,
    repo: string,
    commitSha: string,
    data: ReposCreateCommitCommentPayload,
    params: RequestParams = {},
  ) =>
    this.http.request<
      ReposCreateCommitCommentData,
      BasicError | ValidationError
    >({
      path: `/repos/${owner}/${repo}/commits/${commitSha}/comments`,
      method: "POST",
      body: data,
      type: ContentType.Json,
      format: "json",
      ...params,
    });
  /**
   * @description Lists the merged pull request that introduced the commit to the repository. If the commit is not present in the default branch, it will return merged and open pull requests associated with the commit. To list the open or merged pull requests associated with a branch, you can set the `commit_sha` parameter to the branch name.
   *
   * @tags repos
   * @name ReposListPullRequestsAssociatedWithCommit
   * @summary List pull requests associated with a commit
   * @request GET:/repos/{owner}/{repo}/commits/{commit_sha}/pulls
   */
  reposListPullRequestsAssociatedWithCommit = (
    {
      owner,
      repo,
      commitSha,
      ...query
    }: ReposListPullRequestsAssociatedWithCommitParams,
    params: RequestParams = {},
  ) =>
    this.http.request<
      ReposListPullRequestsAssociatedWithCommitData,
      BasicError
    >({
      path: `/repos/${owner}/${repo}/commits/${commitSha}/pulls`,
      method: "GET",
      query: query,
      format: "json",
      ...params,
    });
  /**
   * @description Returns the contents of a single commit reference. You must have `read` access for the repository to use this endpoint. > [!NOTE] > If there are more than 300 files in the commit diff and the default JSON media type is requested, the response will include pagination link headers for the remaining files, up to a limit of 3000 files. Each page contains the static commit information, and the only changes are to the file listing. This endpoint supports the following custom media types. For more information, see "[Media types](https://docs.github.com/enterprise-server@3.17/rest/using-the-rest-api/getting-started-with-the-rest-api#media-types)." Pagination query parameters are not supported for these media types. - **`application/vnd.github.diff`**: Returns the diff of the commit. Larger diffs may time out and return a 5xx status code. - **`application/vnd.github.patch`**: Returns the patch of the commit. Diffs with binary data will have no `patch` property. Larger diffs may time out and return a 5xx status code. - **`application/vnd.github.sha`**: Returns the commit's SHA-1 hash. You can use this endpoint to check if a remote reference's SHA-1 hash is the same as your local reference's SHA-1 hash by providing the local SHA-1 reference as the ETag. **Signature verification object** The response will include a `verification` object that describes the result of verifying the commit's signature. The following fields are included in the `verification` object: | Name | Type | Description | | ---- | ---- | ----------- | | `verified` | `boolean` | Indicates whether GitHub considers the signature in this commit to be verified. | | `reason` | `string` | The reason for verified value. Possible values and their meanings are enumerated in table below. | | `signature` | `string` | The signature that was extracted from the commit. | | `payload` | `string` | The value that was signed. | | `verified_at` | `string` | The date the signature was verified by GitHub. | These are the possible values for `reason` in the `verification` object: | Value | Description | | ----- | ----------- | | `expired_key` | The key that made the signature is expired. | | `not_signing_key` | The "signing" flag is not among the usage flags in the GPG key that made the signature. | | `gpgverify_error` | There was an error communicating with the signature verification service. | | `gpgverify_unavailable` | The signature verification service is currently unavailable. | | `unsigned` | The object does not include a signature. | | `unknown_signature_type` | A non-PGP signature was found in the commit. | | `no_user` | No user was associated with the `committer` email address in the commit. | | `unverified_email` | The `committer` email address in the commit was associated with a user, but the email address is not verified on their account. | | `bad_email` | The `committer` email address in the commit is not included in the identities of the PGP key that made the signature. | | `unknown_key` | The key that made the signature has not been registered with any user's account. | | `malformed_signature` | There was an error parsing the signature. | | `invalid` | The signature could not be cryptographically verified using the key whose key-id was found in the signature. | | `valid` | None of the above errors applied, so the signature is considered to be verified. |
   *
   * @tags repos
   * @name ReposGetCommit
   * @summary Get a commit
   * @request GET:/repos/{owner}/{repo}/commits/{ref}
   */
  reposGetCommit = (
    { owner, repo, ref, ...query }: ReposGetCommitParams,
    params: RequestParams = {},
  ) =>
    this.http.request<
      ReposGetCommitData,
      | BasicError
      | ValidationError
      | {
          code?: string;
          message?: string;
          documentation_url?: string;
        }
    >({
      path: `/repos/${owner}/${repo}/commits/${ref}`,
      method: "GET",
      query: query,
      format: "json",
      ...params,
    });
  /**
   * @description Lists check runs for a commit ref. The `ref` can be a SHA, branch name, or a tag name. > [!NOTE] > The endpoints to manage checks only look for pushes in the repository where the check suite or check run were created. Pushes to a branch in a forked repository are not detected and return an empty `pull_requests` array. If there are more than 1000 check suites on a single git reference, this endpoint will limit check runs to the 1000 most recent check suites. To iterate over all possible check runs, use the [List check suites for a Git reference](https://docs.github.com/enterprise-server@3.17/rest/reference/checks#list-check-suites-for-a-git-reference) endpoint and provide the `check_suite_id` parameter to the [List check runs in a check suite](https://docs.github.com/enterprise-server@3.17/rest/reference/checks#list-check-runs-in-a-check-suite) endpoint. OAuth app tokens and personal access tokens (classic) need the `repo` scope to use this endpoint on a private repository.
   *
   * @tags checks
   * @name ChecksListForRef
   * @summary List check runs for a Git reference
   * @request GET:/repos/{owner}/{repo}/commits/{ref}/check-runs
   */
  checksListForRef = (
    { owner, repo, ref, ...query }: ChecksListForRefParams,
    params: RequestParams = {},
  ) =>
    this.http.request<ChecksListForRefData, any>({
      path: `/repos/${owner}/${repo}/commits/${ref}/check-runs`,
      method: "GET",
      query: query,
      format: "json",
      ...params,
    });
  /**
   * @description Lists check suites for a commit `ref`. The `ref` can be a SHA, branch name, or a tag name. > [!NOTE] > The endpoints to manage checks only look for pushes in the repository where the check suite or check run were created. Pushes to a branch in a forked repository are not detected and return an empty `pull_requests` array and a `null` value for `head_branch`. OAuth app tokens and personal access tokens (classic) need the `repo` scope to use this endpoint on a private repository.
   *
   * @tags checks
   * @name ChecksListSuitesForRef
   * @summary List check suites for a Git reference
   * @request GET:/repos/{owner}/{repo}/commits/{ref}/check-suites
   */
  checksListSuitesForRef = (
    { owner, repo, ref, ...query }: ChecksListSuitesForRefParams,
    params: RequestParams = {},
  ) =>
    this.http.request<ChecksListSuitesForRefData, any>({
      path: `/repos/${owner}/${repo}/commits/${ref}/check-suites`,
      method: "GET",
      query: query,
      format: "json",
      ...params,
    });
  /**
   * @description Users with pull access in a repository can access a combined view of commit statuses for a given ref. The ref can be a SHA, a branch name, or a tag name. Additionally, a combined `state` is returned. The `state` is one of: *   **failure** if any of the contexts report as `error` or `failure` *   **pending** if there are no statuses or a context is `pending` *   **success** if the latest status for all contexts is `success`
   *
   * @tags repos
   * @name ReposGetCombinedStatusForRef
   * @summary Get the combined status for a specific reference
   * @request GET:/repos/{owner}/{repo}/commits/{ref}/status
   */
  reposGetCombinedStatusForRef = (
    { owner, repo, ref, ...query }: ReposGetCombinedStatusForRefParams,
    params: RequestParams = {},
  ) =>
    this.http.request<ReposGetCombinedStatusForRefData, BasicError>({
      path: `/repos/${owner}/${repo}/commits/${ref}/status`,
      method: "GET",
      query: query,
      format: "json",
      ...params,
    });
  /**
   * @description Users with pull access in a repository can view commit statuses for a given ref. The ref can be a SHA, a branch name, or a tag name. Statuses are returned in reverse chronological order. The first status in the list will be the latest one. This resource is also available via a legacy route: `GET /repos/:owner/:repo/statuses/:ref`.
   *
   * @tags repos
   * @name ReposListCommitStatusesForRef
   * @summary List commit statuses for a reference
   * @request GET:/repos/{owner}/{repo}/commits/{ref}/statuses
   */
  reposListCommitStatusesForRef = (
    { owner, repo, ref, ...query }: ReposListCommitStatusesForRefParams,
    params: RequestParams = {},
  ) =>
    this.http.request<ReposListCommitStatusesForRefData, BasicError>({
      path: `/repos/${owner}/${repo}/commits/${ref}/statuses`,
      method: "GET",
      query: query,
      format: "json",
      ...params,
    });
  /**
   * @description Compares two commits against one another. You can compare refs (branches or tags) and commit SHAs in the same repository, or you can compare refs and commit SHAs that exist in different repositories within the same repository network, including fork branches. For more information about how to view a repository's network, see "[Understanding connections between repositories](https://docs.github.com/enterprise-server@3.17/repositories/viewing-activity-and-data-for-your-repository/understanding-connections-between-repositories)." This endpoint is equivalent to running the `git log BASE..HEAD` command, but it returns commits in a different order. The `git log BASE..HEAD` command returns commits in reverse chronological order, whereas the API returns commits in chronological order. This endpoint supports the following custom media types. For more information, see "[Media types](https://docs.github.com/enterprise-server@3.17/rest/using-the-rest-api/getting-started-with-the-rest-api#media-types)." - **`application/vnd.github.diff`**: Returns the diff of the commit. - **`application/vnd.github.patch`**: Returns the patch of the commit. Diffs with binary data will have no `patch` property. The API response includes details about the files that were changed between the two commits. This includes the status of the change (if a file was added, removed, modified, or renamed), and details of the change itself. For example, files with a `renamed` status have a `previous_filename` field showing the previous filename of the file, and files with a `modified` status have a `patch` field showing the changes made to the file. When calling this endpoint without any paging parameter (`per_page` or `page`), the returned list is limited to 250 commits, and the last commit in the list is the most recent of the entire comparison. **Working with large comparisons** To process a response with a large number of commits, use a query parameter (`per_page` or `page`) to paginate the results. When using pagination: - The list of changed files is only shown on the first page of results, and it includes up to 300 changed files for the entire comparison. - The results are returned in chronological order, but the last commit in the returned list may not be the most recent one in the entire set if there are more pages of results. For more information on working with pagination, see "[Using pagination in the REST API](https://docs.github.com/enterprise-server@3.17/rest/guides/using-pagination-in-the-rest-api)." **Signature verification object** The response will include a `verification` object that describes the result of verifying the commit's signature. The `verification` object includes the following fields: | Name | Type | Description | | ---- | ---- | ----------- | | `verified` | `boolean` | Indicates whether GitHub considers the signature in this commit to be verified. | | `reason` | `string` | The reason for verified value. Possible values and their meanings are enumerated in table below. | | `signature` | `string` | The signature that was extracted from the commit. | | `payload` | `string` | The value that was signed. | | `verified_at` | `string` | The date the signature was verified by GitHub. | These are the possible values for `reason` in the `verification` object: | Value | Description | | ----- | ----------- | | `expired_key` | The key that made the signature is expired. | | `not_signing_key` | The "signing" flag is not among the usage flags in the GPG key that made the signature. | | `gpgverify_error` | There was an error communicating with the signature verification service. | | `gpgverify_unavailable` | The signature verification service is currently unavailable. | | `unsigned` | The object does not include a signature. | | `unknown_signature_type` | A non-PGP signature was found in the commit. | | `no_user` | No user was associated with the `committer` email address in the commit. | | `unverified_email` | The `committer` email address in the commit was associated with a user, but the email address is not verified on their account. | | `bad_email` | The `committer` email address in the commit is not included in the identities of the PGP key that made the signature. | | `unknown_key` | The key that made the signature has not been registered with any user's account. | | `malformed_signature` | There was an error parsing the signature. | | `invalid` | The signature could not be cryptographically verified using the key whose key-id was found in the signature. | | `valid` | None of the above errors applied, so the signature is considered to be verified. |
   *
   * @tags repos
   * @name ReposCompareCommits
   * @summary Compare two commits
   * @request GET:/repos/{owner}/{repo}/compare/{basehead}
   */
  reposCompareCommits = (
    { owner, repo, basehead, ...query }: ReposCompareCommitsParams,
    params: RequestParams = {},
  ) =>
    this.http.request<
      ReposCompareCommitsData,
      | BasicError
      | {
          code?: string;
          message?: string;
          documentation_url?: string;
        }
    >({
      path: `/repos/${owner}/${repo}/compare/${basehead}`,
      method: "GET",
      query: query,
      format: "json",
      ...params,
    });
  /**
   * @description Gets the contents of a file or directory in a repository. Specify the file path or directory with the `path` parameter. If you omit the `path` parameter, you will receive the contents of the repository's root directory. This endpoint supports the following custom media types. For more information, see "[Media types](https://docs.github.com/enterprise-server@3.17/rest/using-the-rest-api/getting-started-with-the-rest-api#media-types)." - **`application/vnd.github.raw+json`**: Returns the raw file contents for files and symlinks. - **`application/vnd.github.html+json`**: Returns the file contents in HTML. Markup languages are rendered to HTML using GitHub's open-source [Markup library](https://github.com/github/markup). - **`application/vnd.github.object+json`**: Returns the contents in a consistent object format regardless of the content type. For example, instead of an array of objects for a directory, the response will be an object with an `entries` attribute containing the array of objects. If the content is a directory, the response will be an array of objects, one object for each item in the directory. When listing the contents of a directory, submodules have their "type" specified as "file". Logically, the value _should_ be "submodule". This behavior exists [for backwards compatibility purposes](https://git.io/v1YCW). In the next major version of the API, the type will be returned as "submodule". If the content is a symlink and the symlink's target is a normal file in the repository, then the API responds with the content of the file. Otherwise, the API responds with an object describing the symlink itself. If the content is a submodule, the `submodule_git_url` field identifies the location of the submodule repository, and the `sha` identifies a specific commit within the submodule repository. Git uses the given URL when cloning the submodule repository, and checks out the submodule at that specific commit. If the submodule repository is not hosted on github.com, the Git URLs (`git_url` and `_links["git"]`) and the github.com URLs (`html_url` and `_links["html"]`) will have null values. **Notes**: - To get a repository's contents recursively, you can [recursively get the tree](https://docs.github.com/enterprise-server@3.17/rest/git/trees#get-a-tree). - This API has an upper limit of 1,000 files for a directory. If you need to retrieve more files, use the [Git Trees API](https://docs.github.com/enterprise-server@3.17/rest/git/trees#get-a-tree). - Download URLs expire and are meant to be used just once. To ensure the download URL does not expire, please use the contents API to obtain a fresh download URL for each download. - If the requested file's size is: - 1 MB or smaller: All features of this endpoint are supported. - Between 1-100 MB: Only the `raw` or `object` custom media types are supported. Both will work as normal, except that when using the `object` media type, the `content` field will be an empty string and the `encoding` field will be `"none"`. To get the contents of these larger files, use the `raw` media type. - Greater than 100 MB: This endpoint is not supported.
   *
   * @tags repos
   * @name ReposGetContent
   * @summary Get repository content
   * @request GET:/repos/{owner}/{repo}/contents/{path}
   */
  reposGetContent = (
    { owner, repo, path, ...query }: ReposGetContentParams,
    params: RequestParams = {},
  ) =>
    this.http.request<ReposGetContentData, BasicError>({
      path: `/repos/${owner}/${repo}/contents/${path}`,
      method: "GET",
      query: query,
      format: "json",
      ...params,
    });
  /**
   * @description Creates a new file or replaces an existing file in a repository. > [!NOTE] > If you use this endpoint and the "[Delete a file](https://docs.github.com/enterprise-server@3.17/rest/repos/contents/#delete-a-file)" endpoint in parallel, the concurrent requests will conflict and you will receive errors. You must use these endpoints serially instead. OAuth app tokens and personal access tokens (classic) need the `repo` scope to use this endpoint. The `workflow` scope is also required in order to modify files in the `.github/workflows` directory.
   *
   * @tags repos
   * @name ReposCreateOrUpdateFileContents
   * @summary Create or update file contents
   * @request PUT:/repos/{owner}/{repo}/contents/{path}
   */
  reposCreateOrUpdateFileContents = (
    owner: string,
    repo: string,
    path: string,
    data: ReposCreateOrUpdateFileContentsPayload,
    params: RequestParams = {},
  ) =>
    this.http.request<
      ReposCreateOrUpdateFileContentsData,
      ReposCreateOrUpdateFileContentsError
    >({
      path: `/repos/${owner}/${repo}/contents/${path}`,
      method: "PUT",
      body: data,
      type: ContentType.Json,
      format: "json",
      ...params,
    });
  /**
   * @description Deletes a file in a repository. You can provide an additional `committer` parameter, which is an object containing information about the committer. Or, you can provide an `author` parameter, which is an object containing information about the author. The `author` section is optional and is filled in with the `committer` information if omitted. If the `committer` information is omitted, the authenticated user's information is used. You must provide values for both `name` and `email`, whether you choose to use `author` or `committer`. Otherwise, you'll receive a `422` status code. > [!NOTE] > If you use this endpoint and the "[Create or update file contents](https://docs.github.com/enterprise-server@3.17/rest/repos/contents/#create-or-update-file-contents)" endpoint in parallel, the concurrent requests will conflict and you will receive errors. You must use these endpoints serially instead.
   *
   * @tags repos
   * @name ReposDeleteFile
   * @summary Delete a file
   * @request DELETE:/repos/{owner}/{repo}/contents/{path}
   */
  reposDeleteFile = (
    owner: string,
    repo: string,
    path: string,
    data: ReposDeleteFilePayload,
    params: RequestParams = {},
  ) =>
    this.http.request<
      ReposDeleteFileData,
      | BasicError
      | ValidationError
      | {
          code?: string;
          message?: string;
          documentation_url?: string;
        }
    >({
      path: `/repos/${owner}/${repo}/contents/${path}`,
      method: "DELETE",
      body: data,
      type: ContentType.Json,
      format: "json",
      ...params,
    });
  /**
   * @description Lists contributors to the specified repository and sorts them by the number of commits per contributor in descending order. This endpoint may return information that is a few hours old because the GitHub REST API caches contributor data to improve performance. GitHub identifies contributors by author email address. This endpoint groups contribution counts by GitHub user, which includes all associated email addresses. To improve performance, only the first 500 author email addresses in the repository link to GitHub users. The rest will appear as anonymous contributors without associated GitHub user information.
   *
   * @tags repos
   * @name ReposListContributors
   * @summary List repository contributors
   * @request GET:/repos/{owner}/{repo}/contributors
   */
  reposListContributors = (
    { owner, repo, ...query }: ReposListContributorsParams,
    params: RequestParams = {},
  ) =>
    this.http.request<ReposListContributorsData, BasicError>({
      path: `/repos/${owner}/${repo}/contributors`,
      method: "GET",
      query: query,
      format: "json",
      ...params,
    });
  /**
   * @description OAuth app tokens and personal access tokens (classic) need the `security_events` scope to use this endpoint. If this endpoint is only used with public repositories, the token can use the `public_repo` scope instead.
   *
   * @tags dependabot
   * @name DependabotListAlertsForRepo
   * @summary List Dependabot alerts for a repository
   * @request GET:/repos/{owner}/{repo}/dependabot/alerts
   */
  dependabotListAlertsForRepo = (
    { owner, repo, ...query }: DependabotListAlertsForRepoParams,
    params: RequestParams = {},
  ) =>
    this.http.request<
      DependabotListAlertsForRepoData,
      BasicError | ValidationErrorSimple
    >({
      path: `/repos/${owner}/${repo}/dependabot/alerts`,
      method: "GET",
      query: query,
      format: "json",
      ...params,
    });
  /**
   * @description OAuth app tokens and personal access tokens (classic) need the `security_events` scope to use this endpoint. If this endpoint is only used with public repositories, the token can use the `public_repo` scope instead.
   *
   * @tags dependabot
   * @name DependabotGetAlert
   * @summary Get a Dependabot alert
   * @request GET:/repos/{owner}/{repo}/dependabot/alerts/{alert_number}
   */
  dependabotGetAlert = (
    owner: string,
    repo: string,
    alertNumber: AlertNumber,
    params: RequestParams = {},
  ) =>
    this.http.request<DependabotGetAlertData, BasicError>({
      path: `/repos/${owner}/${repo}/dependabot/alerts/${alertNumber}`,
      method: "GET",
      format: "json",
      ...params,
    });
  /**
   * @description The authenticated user must have access to security alerts for the repository to use this endpoint. For more information, see "[Granting access to security alerts](https://docs.github.com/enterprise-server@3.17/repositories/managing-your-repositorys-settings-and-features/enabling-features-for-your-repository/managing-security-and-analysis-settings-for-your-repository#granting-access-to-security-alerts)." OAuth app tokens and personal access tokens (classic) need the `security_events` scope to use this endpoint. If this endpoint is only used with public repositories, the token can use the `public_repo` scope instead.
   *
   * @tags dependabot
   * @name DependabotUpdateAlert
   * @summary Update a Dependabot alert
   * @request PATCH:/repos/{owner}/{repo}/dependabot/alerts/{alert_number}
   */
  dependabotUpdateAlert = (
    owner: string,
    repo: string,
    alertNumber: AlertNumber,
    data: DependabotUpdateAlertPayload,
    params: RequestParams = {},
  ) =>
    this.http.request<
      DependabotUpdateAlertData,
      BasicError | ValidationErrorSimple
    >({
      path: `/repos/${owner}/${repo}/dependabot/alerts/${alertNumber}`,
      method: "PATCH",
      body: data,
      type: ContentType.Json,
      format: "json",
      ...params,
    });
  /**
   * @description Lists all secrets available in a repository without revealing their encrypted values. OAuth app tokens and personal access tokens (classic) need the `repo` scope to use this endpoint.
   *
   * @tags dependabot
   * @name DependabotListRepoSecrets
   * @summary List repository secrets
   * @request GET:/repos/{owner}/{repo}/dependabot/secrets
   */
  dependabotListRepoSecrets = (
    { owner, repo, ...query }: DependabotListRepoSecretsParams,
    params: RequestParams = {},
  ) =>
    this.http.request<DependabotListRepoSecretsData, any>({
      path: `/repos/${owner}/${repo}/dependabot/secrets`,
      method: "GET",
      query: query,
      format: "json",
      ...params,
    });
  /**
   * @description Gets your public key, which you need to encrypt secrets. You need to encrypt a secret before you can create or update secrets. Anyone with read access to the repository can use this endpoint. OAuth app tokens and personal access tokens (classic) need the `repo` scope to use this endpoint if the repository is private.
   *
   * @tags dependabot
   * @name DependabotGetRepoPublicKey
   * @summary Get a repository public key
   * @request GET:/repos/{owner}/{repo}/dependabot/secrets/public-key
   */
  dependabotGetRepoPublicKey = (
    owner: string,
    repo: string,
    params: RequestParams = {},
  ) =>
    this.http.request<DependabotGetRepoPublicKeyData, any>({
      path: `/repos/${owner}/${repo}/dependabot/secrets/public-key`,
      method: "GET",
      format: "json",
      ...params,
    });
  /**
   * @description Gets a single repository secret without revealing its encrypted value. OAuth app tokens and personal access tokens (classic) need the `repo` scope to use this endpoint.
   *
   * @tags dependabot
   * @name DependabotGetRepoSecret
   * @summary Get a repository secret
   * @request GET:/repos/{owner}/{repo}/dependabot/secrets/{secret_name}
   */
  dependabotGetRepoSecret = (
    owner: string,
    repo: string,
    secretName: string,
    params: RequestParams = {},
  ) =>
    this.http.request<DependabotGetRepoSecretData, any>({
      path: `/repos/${owner}/${repo}/dependabot/secrets/${secretName}`,
      method: "GET",
      format: "json",
      ...params,
    });
  /**
   * @description Creates or updates a repository secret with an encrypted value. Encrypt your secret using [LibSodium](https://libsodium.gitbook.io/doc/bindings_for_other_languages). For more information, see "[Encrypting secrets for the REST API](https://docs.github.com/enterprise-server@3.17/rest/guides/encrypting-secrets-for-the-rest-api)." OAuth app tokens and personal access tokens (classic) need the `repo` scope to use this endpoint.
   *
   * @tags dependabot
   * @name DependabotCreateOrUpdateRepoSecret
   * @summary Create or update a repository secret
   * @request PUT:/repos/{owner}/{repo}/dependabot/secrets/{secret_name}
   */
  dependabotCreateOrUpdateRepoSecret = (
    owner: string,
    repo: string,
    secretName: string,
    data: DependabotCreateOrUpdateRepoSecretPayload,
    params: RequestParams = {},
  ) =>
    this.http.request<DependabotCreateOrUpdateRepoSecretData, any>({
      path: `/repos/${owner}/${repo}/dependabot/secrets/${secretName}`,
      method: "PUT",
      body: data,
      type: ContentType.Json,
      format: "json",
      ...params,
    });
  /**
   * @description Deletes a secret in a repository using the secret name. OAuth app tokens and personal access tokens (classic) need the `repo` scope to use this endpoint.
   *
   * @tags dependabot
   * @name DependabotDeleteRepoSecret
   * @summary Delete a repository secret
   * @request DELETE:/repos/{owner}/{repo}/dependabot/secrets/{secret_name}
   */
  dependabotDeleteRepoSecret = (
    owner: string,
    repo: string,
    secretName: string,
    params: RequestParams = {},
  ) =>
    this.http.request<DependabotDeleteRepoSecretData, any>({
      path: `/repos/${owner}/${repo}/dependabot/secrets/${secretName}`,
      method: "DELETE",
      ...params,
    });
  /**
   * @description Gets the diff of the dependency changes between two commits of a repository, based on the changes to the dependency manifests made in those commits.
   *
   * @tags dependency-graph
   * @name DependencyGraphDiffRange
   * @summary Get a diff of the dependencies between commits
   * @request GET:/repos/{owner}/{repo}/dependency-graph/compare/{basehead}
   */
  dependencyGraphDiffRange = (
    { owner, repo, basehead, ...query }: DependencyGraphDiffRangeParams,
    params: RequestParams = {},
  ) =>
    this.http.request<DependencyGraphDiffRangeData, BasicError>({
      path: `/repos/${owner}/${repo}/dependency-graph/compare/${basehead}`,
      method: "GET",
      query: query,
      format: "json",
      ...params,
    });
  /**
   * @description Exports the software bill of materials (SBOM) for a repository in SPDX JSON format.
   *
   * @tags dependency-graph
   * @name DependencyGraphExportSbom
   * @summary Export a software bill of materials (SBOM) for a repository.
   * @request GET:/repos/{owner}/{repo}/dependency-graph/sbom
   */
  dependencyGraphExportSbom = (
    owner: string,
    repo: string,
    params: RequestParams = {},
  ) =>
    this.http.request<DependencyGraphExportSbomData, BasicError>({
      path: `/repos/${owner}/${repo}/dependency-graph/sbom`,
      method: "GET",
      format: "json",
      ...params,
    });
  /**
   * @description Create a new snapshot of a repository's dependencies. The authenticated user must have access to the repository. OAuth app tokens and personal access tokens (classic) need the `repo` scope to use this endpoint.
   *
   * @tags dependency-graph
   * @name DependencyGraphCreateRepositorySnapshot
   * @summary Create a snapshot of dependencies for a repository
   * @request POST:/repos/{owner}/{repo}/dependency-graph/snapshots
   */
  dependencyGraphCreateRepositorySnapshot = (
    owner: string,
    repo: string,
    data: Snapshot,
    params: RequestParams = {},
  ) =>
    this.http.request<DependencyGraphCreateRepositorySnapshotData, any>({
      path: `/repos/${owner}/${repo}/dependency-graph/snapshots`,
      method: "POST",
      body: data,
      type: ContentType.Json,
      format: "json",
      ...params,
    });
  /**
   * @description Simple filtering of deployments is available via query parameters:
   *
   * @tags repos
   * @name ReposListDeployments
   * @summary List deployments
   * @request GET:/repos/{owner}/{repo}/deployments
   */
  reposListDeployments = (
    { owner, repo, ...query }: ReposListDeploymentsParams,
    params: RequestParams = {},
  ) =>
    this.http.request<ReposListDeploymentsData, any>({
      path: `/repos/${owner}/${repo}/deployments`,
      method: "GET",
      query: query,
      format: "json",
      ...params,
    });
  /**
   * @description Deployments offer a few configurable parameters with certain defaults. The `ref` parameter can be any named branch, tag, or SHA. At GitHub Enterprise Server we often deploy branches and verify them before we merge a pull request. The `environment` parameter allows deployments to be issued to different runtime environments. Teams often have multiple environments for verifying their applications, such as `production`, `staging`, and `qa`. This parameter makes it easier to track which environments have requested deployments. The default environment is `production`. The `auto_merge` parameter is used to ensure that the requested ref is not behind the repository's default branch. If the ref _is_ behind the default branch for the repository, we will attempt to merge it for you. If the merge succeeds, the API will return a successful merge commit. If merge conflicts prevent the merge from succeeding, the API will return a failure response. By default, [commit statuses](https://docs.github.com/enterprise-server@3.17/rest/commits/statuses) for every submitted context must be in a `success` state. The `required_contexts` parameter allows you to specify a subset of contexts that must be `success`, or to specify contexts that have not yet been submitted. You are not required to use commit statuses to deploy. If you do not require any contexts or create any commit statuses, the deployment will always succeed. The `payload` parameter is available for any extra information that a deployment system might need. It is a JSON text field that will be passed on when a deployment event is dispatched. The `task` parameter is used by the deployment system to allow different execution paths. In the web world this might be `deploy:migrations` to run schema changes on the system. In the compiled world this could be a flag to compile an application with debugging enabled. Merged branch response: You will see this response when GitHub automatically merges the base branch into the topic branch instead of creating a deployment. This auto-merge happens when: *   Auto-merge option is enabled in the repository *   Topic branch does not include the latest changes on the base branch, which is `master` in the response example *   There are no merge conflicts If there are no new commits in the base branch, a new request to create a deployment should give a successful response. Merge conflict response: This error happens when the `auto_merge` option is enabled and when the default branch (in this case `master`), can't be merged into the branch that's being deployed (in this case `topic-branch`), due to merge conflicts. Failed commit status checks: This error happens when the `required_contexts` parameter indicates that one or more contexts need to have a `success` status for the commit to be deployed, but one or more of the required contexts do not have a state of `success`. OAuth app tokens and personal access tokens (classic) need the `repo` or `repo_deployment` scope to use this endpoint.
   *
   * @tags repos
   * @name ReposCreateDeployment
   * @summary Create a deployment
   * @request POST:/repos/{owner}/{repo}/deployments
   */
  reposCreateDeployment = (
    owner: string,
    repo: string,
    data: ReposCreateDeploymentPayload,
    params: RequestParams = {},
  ) =>
    this.http.request<ReposCreateDeploymentData, void | ValidationError>({
      path: `/repos/${owner}/${repo}/deployments`,
      method: "POST",
      body: data,
      type: ContentType.Json,
      format: "json",
      ...params,
    });
  /**
   * No description
   *
   * @tags repos
   * @name ReposGetDeployment
   * @summary Get a deployment
   * @request GET:/repos/{owner}/{repo}/deployments/{deployment_id}
   */
  reposGetDeployment = (
    owner: string,
    repo: string,
    deploymentId: number,
    params: RequestParams = {},
  ) =>
    this.http.request<ReposGetDeploymentData, BasicError>({
      path: `/repos/${owner}/${repo}/deployments/${deploymentId}`,
      method: "GET",
      format: "json",
      ...params,
    });
  /**
   * @description If the repository only has one deployment, you can delete the deployment regardless of its status. If the repository has more than one deployment, you can only delete inactive deployments. This ensures that repositories with multiple deployments will always have an active deployment. To set a deployment as inactive, you must: *   Create a new deployment that is active so that the system has a record of the current state, then delete the previously active deployment. *   Mark the active deployment as inactive by adding any non-successful deployment status. For more information, see "[Create a deployment](https://docs.github.com/enterprise-server@3.17/rest/deployments/deployments/#create-a-deployment)" and "[Create a deployment status](https://docs.github.com/enterprise-server@3.17/rest/deployments/statuses#create-a-deployment-status)." OAuth app tokens and personal access tokens (classic) need the `repo` or `repo_deployment` scope to use this endpoint.
   *
   * @tags repos
   * @name ReposDeleteDeployment
   * @summary Delete a deployment
   * @request DELETE:/repos/{owner}/{repo}/deployments/{deployment_id}
   */
  reposDeleteDeployment = (
    owner: string,
    repo: string,
    deploymentId: number,
    params: RequestParams = {},
  ) =>
    this.http.request<
      ReposDeleteDeploymentData,
      BasicError | ValidationErrorSimple
    >({
      path: `/repos/${owner}/${repo}/deployments/${deploymentId}`,
      method: "DELETE",
      ...params,
    });
  /**
   * @description Users with pull access can view deployment statuses for a deployment:
   *
   * @tags repos
   * @name ReposListDeploymentStatuses
   * @summary List deployment statuses
   * @request GET:/repos/{owner}/{repo}/deployments/{deployment_id}/statuses
   */
  reposListDeploymentStatuses = (
    { owner, repo, deploymentId, ...query }: ReposListDeploymentStatusesParams,
    params: RequestParams = {},
  ) =>
    this.http.request<ReposListDeploymentStatusesData, BasicError>({
      path: `/repos/${owner}/${repo}/deployments/${deploymentId}/statuses`,
      method: "GET",
      query: query,
      format: "json",
      ...params,
    });
  /**
   * @description Users with `push` access can create deployment statuses for a given deployment. OAuth app tokens and personal access tokens (classic) need the `repo_deployment` scope to use this endpoint.
   *
   * @tags repos
   * @name ReposCreateDeploymentStatus
   * @summary Create a deployment status
   * @request POST:/repos/{owner}/{repo}/deployments/{deployment_id}/statuses
   */
  reposCreateDeploymentStatus = (
    owner: string,
    repo: string,
    deploymentId: number,
    data: ReposCreateDeploymentStatusPayload,
    params: RequestParams = {},
  ) =>
    this.http.request<ReposCreateDeploymentStatusData, ValidationError>({
      path: `/repos/${owner}/${repo}/deployments/${deploymentId}/statuses`,
      method: "POST",
      body: data,
      type: ContentType.Json,
      format: "json",
      ...params,
    });
  /**
   * @description Users with pull access can view a deployment status for a deployment:
   *
   * @tags repos
   * @name ReposGetDeploymentStatus
   * @summary Get a deployment status
   * @request GET:/repos/{owner}/{repo}/deployments/{deployment_id}/statuses/{status_id}
   */
  reposGetDeploymentStatus = (
    owner: string,
    repo: string,
    deploymentId: number,
    statusId: number,
    params: RequestParams = {},
  ) =>
    this.http.request<ReposGetDeploymentStatusData, BasicError>({
      path: `/repos/${owner}/${repo}/deployments/${deploymentId}/statuses/${statusId}`,
      method: "GET",
      format: "json",
      ...params,
    });
  /**
   * @description You can use this endpoint to trigger a webhook event called `repository_dispatch` when you want activity that happens outside of GitHub Enterprise Server to trigger a GitHub Actions workflow or GitHub App webhook. You must configure your GitHub Actions workflow or GitHub App to run when the `repository_dispatch` event occurs. For an example `repository_dispatch` webhook payload, see "[RepositoryDispatchEvent](https://docs.github.com/enterprise-server@3.17/webhooks/event-payloads/#repository_dispatch)." The `client_payload` parameter is available for any extra information that your workflow might need. This parameter is a JSON payload that will be passed on when the webhook event is dispatched. For example, the `client_payload` can include a message that a user would like to send using a GitHub Actions workflow. Or the `client_payload` can be used as a test to debug your workflow. This input example shows how you can use the `client_payload` as a test to debug your workflow. OAuth app tokens and personal access tokens (classic) need the `repo` scope to use this endpoint.
   *
   * @tags repos
   * @name ReposCreateDispatchEvent
   * @summary Create a repository dispatch event
   * @request POST:/repos/{owner}/{repo}/dispatches
   */
  reposCreateDispatchEvent = (
    owner: string,
    repo: string,
    data: ReposCreateDispatchEventPayload,
    params: RequestParams = {},
  ) =>
    this.http.request<
      ReposCreateDispatchEventData,
      BasicError | ValidationError
    >({
      path: `/repos/${owner}/${repo}/dispatches`,
      method: "POST",
      body: data,
      type: ContentType.Json,
      ...params,
    });
  /**
   * @description Lists the environments for a repository. Anyone with read access to the repository can use this endpoint. OAuth app tokens and personal access tokens (classic) need the `repo` scope to use this endpoint with a private repository.
   *
   * @tags repos
   * @name ReposGetAllEnvironments
   * @summary List environments
   * @request GET:/repos/{owner}/{repo}/environments
   */
  reposGetAllEnvironments = (
    { owner, repo, ...query }: ReposGetAllEnvironmentsParams,
    params: RequestParams = {},
  ) =>
    this.http.request<ReposGetAllEnvironmentsData, any>({
      path: `/repos/${owner}/${repo}/environments`,
      method: "GET",
      query: query,
      format: "json",
      ...params,
    });
  /**
   * @description > [!NOTE] > To get information about name patterns that branches must match in order to deploy to this environment, see "[Get a deployment branch policy](/rest/deployments/branch-policies#get-a-deployment-branch-policy)." Anyone with read access to the repository can use this endpoint. OAuth app tokens and personal access tokens (classic) need the `repo` scope to use this endpoint with a private repository.
   *
   * @tags repos
   * @name ReposGetEnvironment
   * @summary Get an environment
   * @request GET:/repos/{owner}/{repo}/environments/{environment_name}
   */
  reposGetEnvironment = (
    owner: string,
    repo: string,
    environmentName: string,
    params: RequestParams = {},
  ) =>
    this.http.request<ReposGetEnvironmentData, any>({
      path: `/repos/${owner}/${repo}/environments/${environmentName}`,
      method: "GET",
      format: "json",
      ...params,
    });
  /**
   * @description Create or update an environment with protection rules, such as required reviewers. For more information about environment protection rules, see "[Environments](/actions/reference/environments#environment-protection-rules)." > [!NOTE] > To create or update name patterns that branches must match in order to deploy to this environment, see "[Deployment branch policies](/rest/deployments/branch-policies)." > [!NOTE] > To create or update secrets for an environment, see "[GitHub Actions secrets](/rest/actions/secrets)." OAuth app tokens and personal access tokens (classic) need the `repo` scope to use this endpoint.
   *
   * @tags repos
   * @name ReposCreateOrUpdateEnvironment
   * @summary Create or update an environment
   * @request PUT:/repos/{owner}/{repo}/environments/{environment_name}
   */
  reposCreateOrUpdateEnvironment = (
    owner: string,
    repo: string,
    environmentName: string,
    data?: ReposCreateOrUpdateEnvironmentPayload,
    params: RequestParams = {},
  ) =>
    this.http.request<
      ReposCreateOrUpdateEnvironmentData,
      ReposCreateOrUpdateEnvironmentError
    >({
      path: `/repos/${owner}/${repo}/environments/${environmentName}`,
      method: "PUT",
      body: data,
      type: ContentType.Json,
      format: "json",
      ...params,
    });
  /**
   * @description OAuth app tokens and personal access tokens (classic) need the `repo` scope to use this endpoint.
   *
   * @tags repos
   * @name ReposDeleteAnEnvironment
   * @summary Delete an environment
   * @request DELETE:/repos/{owner}/{repo}/environments/{environment_name}
   */
  reposDeleteAnEnvironment = (
    owner: string,
    repo: string,
    environmentName: string,
    params: RequestParams = {},
  ) =>
    this.http.request<ReposDeleteAnEnvironmentData, any>({
      path: `/repos/${owner}/${repo}/environments/${environmentName}`,
      method: "DELETE",
      ...params,
    });
  /**
   * @description Lists the deployment branch policies for an environment. Anyone with read access to the repository can use this endpoint. OAuth app tokens and personal access tokens (classic) need the `repo` scope to use this endpoint with a private repository.
   *
   * @tags repos
   * @name ReposListDeploymentBranchPolicies
   * @summary List deployment branch policies
   * @request GET:/repos/{owner}/{repo}/environments/{environment_name}/deployment-branch-policies
   */
  reposListDeploymentBranchPolicies = (
    {
      owner,
      repo,
      environmentName,
      ...query
    }: ReposListDeploymentBranchPoliciesParams,
    params: RequestParams = {},
  ) =>
    this.http.request<ReposListDeploymentBranchPoliciesData, any>({
      path: `/repos/${owner}/${repo}/environments/${environmentName}/deployment-branch-policies`,
      method: "GET",
      query: query,
      format: "json",
      ...params,
    });
  /**
   * @description Creates a deployment branch or tag policy for an environment. OAuth app tokens and personal access tokens (classic) need the `repo` scope to use this endpoint.
   *
   * @tags repos
   * @name ReposCreateDeploymentBranchPolicy
   * @summary Create a deployment branch policy
   * @request POST:/repos/{owner}/{repo}/environments/{environment_name}/deployment-branch-policies
   */
  reposCreateDeploymentBranchPolicy = (
    owner: string,
    repo: string,
    environmentName: string,
    data: DeploymentBranchPolicyNamePatternWithType,
    params: RequestParams = {},
  ) =>
    this.http.request<ReposCreateDeploymentBranchPolicyData, void>({
      path: `/repos/${owner}/${repo}/environments/${environmentName}/deployment-branch-policies`,
      method: "POST",
      body: data,
      type: ContentType.Json,
      format: "json",
      ...params,
    });
  /**
   * @description Gets a deployment branch or tag policy for an environment. Anyone with read access to the repository can use this endpoint. OAuth app tokens and personal access tokens (classic) need the `repo` scope to use this endpoint with a private repository.
   *
   * @tags repos
   * @name ReposGetDeploymentBranchPolicy
   * @summary Get a deployment branch policy
   * @request GET:/repos/{owner}/{repo}/environments/{environment_name}/deployment-branch-policies/{branch_policy_id}
   */
  reposGetDeploymentBranchPolicy = (
    owner: string,
    repo: string,
    environmentName: string,
    branchPolicyId: number,
    params: RequestParams = {},
  ) =>
    this.http.request<ReposGetDeploymentBranchPolicyData, any>({
      path: `/repos/${owner}/${repo}/environments/${environmentName}/deployment-branch-policies/${branchPolicyId}`,
      method: "GET",
      format: "json",
      ...params,
    });
  /**
   * @description Updates a deployment branch or tag policy for an environment. OAuth app tokens and personal access tokens (classic) need the `repo` scope to use this endpoint.
   *
   * @tags repos
   * @name ReposUpdateDeploymentBranchPolicy
   * @summary Update a deployment branch policy
   * @request PUT:/repos/{owner}/{repo}/environments/{environment_name}/deployment-branch-policies/{branch_policy_id}
   */
  reposUpdateDeploymentBranchPolicy = (
    owner: string,
    repo: string,
    environmentName: string,
    branchPolicyId: number,
    data: DeploymentBranchPolicyNamePattern,
    params: RequestParams = {},
  ) =>
    this.http.request<ReposUpdateDeploymentBranchPolicyData, any>({
      path: `/repos/${owner}/${repo}/environments/${environmentName}/deployment-branch-policies/${branchPolicyId}`,
      method: "PUT",
      body: data,
      type: ContentType.Json,
      format: "json",
      ...params,
    });
  /**
   * @description Deletes a deployment branch or tag policy for an environment. OAuth app tokens and personal access tokens (classic) need the `repo` scope to use this endpoint.
   *
   * @tags repos
   * @name ReposDeleteDeploymentBranchPolicy
   * @summary Delete a deployment branch policy
   * @request DELETE:/repos/{owner}/{repo}/environments/{environment_name}/deployment-branch-policies/{branch_policy_id}
   */
  reposDeleteDeploymentBranchPolicy = (
    owner: string,
    repo: string,
    environmentName: string,
    branchPolicyId: number,
    params: RequestParams = {},
  ) =>
    this.http.request<ReposDeleteDeploymentBranchPolicyData, any>({
      path: `/repos/${owner}/${repo}/environments/${environmentName}/deployment-branch-policies/${branchPolicyId}`,
      method: "DELETE",
      ...params,
    });
  /**
   * @description Gets all custom deployment protection rules that are enabled for an environment. Anyone with read access to the repository can use this endpoint. For more information about environments, see "[Using environments for deployment](https://docs.github.com/enterprise-server@3.17/actions/deployment/targeting-different-environments/using-environments-for-deployment)." For more information about the app that is providing this custom deployment rule, see the [documentation for the `GET /apps/{app_slug}` endpoint](https://docs.github.com/enterprise-server@3.17/rest/apps/apps#get-an-app). OAuth app tokens and personal access tokens (classic) need the `repo` scope to use this endpoint with a private repository.
   *
   * @tags repos
   * @name ReposGetAllDeploymentProtectionRules
   * @summary Get all deployment protection rules for an environment
   * @request GET:/repos/{owner}/{repo}/environments/{environment_name}/deployment_protection_rules
   */
  reposGetAllDeploymentProtectionRules = (
    environmentName: string,
    repo: string,
    owner: string,
    params: RequestParams = {},
  ) =>
    this.http.request<ReposGetAllDeploymentProtectionRulesData, any>({
      path: `/repos/${owner}/${repo}/environments/${environmentName}/deployment_protection_rules`,
      method: "GET",
      format: "json",
      ...params,
    });
  /**
   * @description Enable a custom deployment protection rule for an environment. The authenticated user must have admin or owner permissions to the repository to use this endpoint. For more information about the app that is providing this custom deployment rule, see the [documentation for the `GET /apps/{app_slug}` endpoint](https://docs.github.com/enterprise-server@3.17/rest/apps/apps#get-an-app), as well as the [guide to creating custom deployment protection rules](https://docs.github.com/enterprise-server@3.17/actions/managing-workflow-runs-and-deployments/managing-deployments/creating-custom-deployment-protection-rules). OAuth app tokens and personal access tokens (classic) need the `repo` scope to use this endpoint.
   *
   * @tags repos
   * @name ReposCreateDeploymentProtectionRule
   * @summary Create a custom deployment protection rule on an environment
   * @request POST:/repos/{owner}/{repo}/environments/{environment_name}/deployment_protection_rules
   */
  reposCreateDeploymentProtectionRule = (
    environmentName: string,
    repo: string,
    owner: string,
    data: ReposCreateDeploymentProtectionRulePayload,
    params: RequestParams = {},
  ) =>
    this.http.request<ReposCreateDeploymentProtectionRuleData, any>({
      path: `/repos/${owner}/${repo}/environments/${environmentName}/deployment_protection_rules`,
      method: "POST",
      body: data,
      type: ContentType.Json,
      format: "json",
      ...params,
    });
  /**
   * @description Gets all custom deployment protection rule integrations that are available for an environment. The authenticated user must have admin or owner permissions to the repository to use this endpoint. For more information about environments, see "[Using environments for deployment](https://docs.github.com/enterprise-server@3.17/actions/deployment/targeting-different-environments/using-environments-for-deployment)." For more information about the app that is providing this custom deployment rule, see "[GET an app](https://docs.github.com/enterprise-server@3.17/rest/apps/apps#get-an-app)". OAuth app tokens and personal access tokens (classic) need the `repo` scope to use this endpoint with a private repository.
   *
   * @tags repos
   * @name ReposListCustomDeploymentRuleIntegrations
   * @summary List custom deployment rule integrations available for an environment
   * @request GET:/repos/{owner}/{repo}/environments/{environment_name}/deployment_protection_rules/apps
   */
  reposListCustomDeploymentRuleIntegrations = (
    {
      environmentName,
      repo,
      owner,
      ...query
    }: ReposListCustomDeploymentRuleIntegrationsParams,
    params: RequestParams = {},
  ) =>
    this.http.request<ReposListCustomDeploymentRuleIntegrationsData, any>({
      path: `/repos/${owner}/${repo}/environments/${environmentName}/deployment_protection_rules/apps`,
      method: "GET",
      query: query,
      format: "json",
      ...params,
    });
  /**
   * @description Gets an enabled custom deployment protection rule for an environment. Anyone with read access to the repository can use this endpoint. For more information about environments, see "[Using environments for deployment](https://docs.github.com/enterprise-server@3.17/actions/deployment/targeting-different-environments/using-environments-for-deployment)." For more information about the app that is providing this custom deployment rule, see [`GET /apps/{app_slug}`](https://docs.github.com/enterprise-server@3.17/rest/apps/apps#get-an-app). OAuth app tokens and personal access tokens (classic) need the `repo` scope to use this endpoint with a private repository.
   *
   * @tags repos
   * @name ReposGetCustomDeploymentProtectionRule
   * @summary Get a custom deployment protection rule
   * @request GET:/repos/{owner}/{repo}/environments/{environment_name}/deployment_protection_rules/{protection_rule_id}
   */
  reposGetCustomDeploymentProtectionRule = (
    owner: string,
    repo: string,
    environmentName: string,
    protectionRuleId: number,
    params: RequestParams = {},
  ) =>
    this.http.request<ReposGetCustomDeploymentProtectionRuleData, any>({
      path: `/repos/${owner}/${repo}/environments/${environmentName}/deployment_protection_rules/${protectionRuleId}`,
      method: "GET",
      format: "json",
      ...params,
    });
  /**
   * @description Disables a custom deployment protection rule for an environment. The authenticated user must have admin or owner permissions to the repository to use this endpoint. OAuth app tokens and personal access tokens (classic) need the `repo` scope to use this endpoint.
   *
   * @tags repos
   * @name ReposDisableDeploymentProtectionRule
   * @summary Disable a custom protection rule for an environment
   * @request DELETE:/repos/{owner}/{repo}/environments/{environment_name}/deployment_protection_rules/{protection_rule_id}
   */
  reposDisableDeploymentProtectionRule = (
    environmentName: string,
    repo: string,
    owner: string,
    protectionRuleId: number,
    params: RequestParams = {},
  ) =>
    this.http.request<ReposDisableDeploymentProtectionRuleData, any>({
      path: `/repos/${owner}/${repo}/environments/${environmentName}/deployment_protection_rules/${protectionRuleId}`,
      method: "DELETE",
      ...params,
    });
  /**
   * @description Lists all secrets available in an environment without revealing their encrypted values. Authenticated users must have collaborator access to a repository to create, update, or read secrets. OAuth app tokens and personal access tokens (classic) need the `repo` scope to use this endpoint.
   *
   * @tags actions
   * @name ActionsListEnvironmentSecrets
   * @summary List environment secrets
   * @request GET:/repos/{owner}/{repo}/environments/{environment_name}/secrets
   */
  actionsListEnvironmentSecrets = (
    {
      owner,
      repo,
      environmentName,
      ...query
    }: ActionsListEnvironmentSecretsParams,
    params: RequestParams = {},
  ) =>
    this.http.request<ActionsListEnvironmentSecretsData, any>({
      path: `/repos/${owner}/${repo}/environments/${environmentName}/secrets`,
      method: "GET",
      query: query,
      format: "json",
      ...params,
    });
  /**
   * @description Get the public key for an environment, which you need to encrypt environment secrets. You need to encrypt a secret before you can create or update secrets. Anyone with read access to the repository can use this endpoint. If the repository is private, OAuth tokens and personal access tokens (classic) need the `repo` scope to use this endpoint.
   *
   * @tags actions
   * @name ActionsGetEnvironmentPublicKey
   * @summary Get an environment public key
   * @request GET:/repos/{owner}/{repo}/environments/{environment_name}/secrets/public-key
   */
  actionsGetEnvironmentPublicKey = (
    owner: string,
    repo: string,
    environmentName: string,
    params: RequestParams = {},
  ) =>
    this.http.request<ActionsGetEnvironmentPublicKeyData, any>({
      path: `/repos/${owner}/${repo}/environments/${environmentName}/secrets/public-key`,
      method: "GET",
      format: "json",
      ...params,
    });
  /**
   * @description Gets a single environment secret without revealing its encrypted value. Authenticated users must have collaborator access to a repository to create, update, or read secrets. OAuth tokens and personal access tokens (classic) need the `repo` scope to use this endpoint.
   *
   * @tags actions
   * @name ActionsGetEnvironmentSecret
   * @summary Get an environment secret
   * @request GET:/repos/{owner}/{repo}/environments/{environment_name}/secrets/{secret_name}
   */
  actionsGetEnvironmentSecret = (
    owner: string,
    repo: string,
    environmentName: string,
    secretName: string,
    params: RequestParams = {},
  ) =>
    this.http.request<ActionsGetEnvironmentSecretData, any>({
      path: `/repos/${owner}/${repo}/environments/${environmentName}/secrets/${secretName}`,
      method: "GET",
      format: "json",
      ...params,
    });
  /**
   * @description Creates or updates an environment secret with an encrypted value. Encrypt your secret using [LibSodium](https://libsodium.gitbook.io/doc/bindings_for_other_languages). For more information, see "[Encrypting secrets for the REST API](https://docs.github.com/enterprise-server@3.17/rest/guides/encrypting-secrets-for-the-rest-api)." Authenticated users must have collaborator access to a repository to create, update, or read secrets. OAuth tokens and personal access tokens (classic) need the `repo` scope to use this endpoint.
   *
   * @tags actions
   * @name ActionsCreateOrUpdateEnvironmentSecret
   * @summary Create or update an environment secret
   * @request PUT:/repos/{owner}/{repo}/environments/{environment_name}/secrets/{secret_name}
   */
  actionsCreateOrUpdateEnvironmentSecret = (
    owner: string,
    repo: string,
    environmentName: string,
    secretName: string,
    data: ActionsCreateOrUpdateEnvironmentSecretPayload,
    params: RequestParams = {},
  ) =>
    this.http.request<ActionsCreateOrUpdateEnvironmentSecretData, any>({
      path: `/repos/${owner}/${repo}/environments/${environmentName}/secrets/${secretName}`,
      method: "PUT",
      body: data,
      type: ContentType.Json,
      format: "json",
      ...params,
    });
  /**
   * @description Deletes a secret in an environment using the secret name. Authenticated users must have collaborator access to a repository to create, update, or read secrets. OAuth tokens and personal access tokens (classic) need the `repo` scope to use this endpoint.
   *
   * @tags actions
   * @name ActionsDeleteEnvironmentSecret
   * @summary Delete an environment secret
   * @request DELETE:/repos/{owner}/{repo}/environments/{environment_name}/secrets/{secret_name}
   */
  actionsDeleteEnvironmentSecret = (
    owner: string,
    repo: string,
    environmentName: string,
    secretName: string,
    params: RequestParams = {},
  ) =>
    this.http.request<ActionsDeleteEnvironmentSecretData, any>({
      path: `/repos/${owner}/${repo}/environments/${environmentName}/secrets/${secretName}`,
      method: "DELETE",
      ...params,
    });
  /**
   * @description Lists all environment variables. Authenticated users must have collaborator access to a repository to create, update, or read variables. OAuth app tokens and personal access tokens (classic) need the `repo` scope to use this endpoint.
   *
   * @tags actions
   * @name ActionsListEnvironmentVariables
   * @summary List environment variables
   * @request GET:/repos/{owner}/{repo}/environments/{environment_name}/variables
   */
  actionsListEnvironmentVariables = (
    {
      owner,
      repo,
      environmentName,
      ...query
    }: ActionsListEnvironmentVariablesParams,
    params: RequestParams = {},
  ) =>
    this.http.request<ActionsListEnvironmentVariablesData, any>({
      path: `/repos/${owner}/${repo}/environments/${environmentName}/variables`,
      method: "GET",
      query: query,
      format: "json",
      ...params,
    });
  /**
   * @description Create an environment variable that you can reference in a GitHub Actions workflow. Authenticated users must have collaborator access to a repository to create, update, or read variables. OAuth tokens and personal access tokens (classic) need the `repo` scope to use this endpoint.
   *
   * @tags actions
   * @name ActionsCreateEnvironmentVariable
   * @summary Create an environment variable
   * @request POST:/repos/{owner}/{repo}/environments/{environment_name}/variables
   */
  actionsCreateEnvironmentVariable = (
    owner: string,
    repo: string,
    environmentName: string,
    data: ActionsCreateEnvironmentVariablePayload,
    params: RequestParams = {},
  ) =>
    this.http.request<ActionsCreateEnvironmentVariableData, any>({
      path: `/repos/${owner}/${repo}/environments/${environmentName}/variables`,
      method: "POST",
      body: data,
      type: ContentType.Json,
      format: "json",
      ...params,
    });
  /**
   * @description Gets a specific variable in an environment. Authenticated users must have collaborator access to a repository to create, update, or read variables. OAuth tokens and personal access tokens (classic) need the `repo` scope to use this endpoint.
   *
   * @tags actions
   * @name ActionsGetEnvironmentVariable
   * @summary Get an environment variable
   * @request GET:/repos/{owner}/{repo}/environments/{environment_name}/variables/{name}
   */
  actionsGetEnvironmentVariable = (
    owner: string,
    repo: string,
    environmentName: string,
    name: string,
    params: RequestParams = {},
  ) =>
    this.http.request<ActionsGetEnvironmentVariableData, any>({
      path: `/repos/${owner}/${repo}/environments/${environmentName}/variables/${name}`,
      method: "GET",
      format: "json",
      ...params,
    });
  /**
   * @description Updates an environment variable that you can reference in a GitHub Actions workflow. Authenticated users must have collaborator access to a repository to create, update, or read variables. OAuth app tokens and personal access tokens (classic) need the `repo` scope to use this endpoint.
   *
   * @tags actions
   * @name ActionsUpdateEnvironmentVariable
   * @summary Update an environment variable
   * @request PATCH:/repos/{owner}/{repo}/environments/{environment_name}/variables/{name}
   */
  actionsUpdateEnvironmentVariable = (
    owner: string,
    repo: string,
    name: string,
    environmentName: string,
    data: ActionsUpdateEnvironmentVariablePayload,
    params: RequestParams = {},
  ) =>
    this.http.request<ActionsUpdateEnvironmentVariableData, any>({
      path: `/repos/${owner}/${repo}/environments/${environmentName}/variables/${name}`,
      method: "PATCH",
      body: data,
      type: ContentType.Json,
      ...params,
    });
  /**
   * @description Deletes an environment variable using the variable name. Authenticated users must have collaborator access to a repository to create, update, or read variables. OAuth tokens and personal access tokens (classic) need the `repo` scope to use this endpoint.
   *
   * @tags actions
   * @name ActionsDeleteEnvironmentVariable
   * @summary Delete an environment variable
   * @request DELETE:/repos/{owner}/{repo}/environments/{environment_name}/variables/{name}
   */
  actionsDeleteEnvironmentVariable = (
    owner: string,
    repo: string,
    name: string,
    environmentName: string,
    params: RequestParams = {},
  ) =>
    this.http.request<ActionsDeleteEnvironmentVariableData, any>({
      path: `/repos/${owner}/${repo}/environments/${environmentName}/variables/${name}`,
      method: "DELETE",
      ...params,
    });
  /**
   * @description > [!NOTE] > This API is not built to serve real-time use cases. Depending on the time of day, event latency can be anywhere from 30s to 6h.
   *
   * @tags activity
   * @name ActivityListRepoEvents
   * @summary List repository events
   * @request GET:/repos/{owner}/{repo}/events
   */
  activityListRepoEvents = (
    { owner, repo, ...query }: ActivityListRepoEventsParams,
    params: RequestParams = {},
  ) =>
    this.http.request<ActivityListRepoEventsData, any>({
      path: `/repos/${owner}/${repo}/events`,
      method: "GET",
      query: query,
      format: "json",
      ...params,
    });
  /**
   * No description
   *
   * @tags repos
   * @name ReposListForks
   * @summary List forks
   * @request GET:/repos/{owner}/{repo}/forks
   */
  reposListForks = (
    { owner, repo, ...query }: ReposListForksParams,
    params: RequestParams = {},
  ) =>
    this.http.request<ReposListForksData, BasicError>({
      path: `/repos/${owner}/${repo}/forks`,
      method: "GET",
      query: query,
      format: "json",
      ...params,
    });
  /**
   * @description Create a fork for the authenticated user. > [!NOTE] > Forking a Repository happens asynchronously. You may have to wait a short period of time before you can access the git objects. If this takes longer than 5 minutes, be sure to contact [GitHub Enterprise Server Support](https://support.github.com/contact?tags=dotcom-rest-api). > [!NOTE] > Although this endpoint works with GitHub Apps, the GitHub App must be installed on the destination account with access to all repositories and on the source account with access to the source repository.
   *
   * @tags repos
   * @name ReposCreateFork
   * @summary Create a fork
   * @request POST:/repos/{owner}/{repo}/forks
   */
  reposCreateFork = (
    owner: string,
    repo: string,
    data?: ReposCreateForkPayload,
    params: RequestParams = {},
  ) =>
    this.http.request<ReposCreateForkData, BasicError | ValidationError>({
      path: `/repos/${owner}/${repo}/forks`,
      method: "POST",
      body: data,
      type: ContentType.Json,
      format: "json",
      ...params,
    });
  /**
   * No description
   *
   * @tags git
   * @name GitCreateBlob
   * @summary Create a blob
   * @request POST:/repos/{owner}/{repo}/git/blobs
   */
  gitCreateBlob = (
    owner: string,
    repo: string,
    data: GitCreateBlobPayload,
    params: RequestParams = {},
  ) =>
    this.http.request<GitCreateBlobData, GitCreateBlobError>({
      path: `/repos/${owner}/${repo}/git/blobs`,
      method: "POST",
      body: data,
      type: ContentType.Json,
      format: "json",
      ...params,
    });
  /**
   * @description The `content` in the response will always be Base64 encoded. This endpoint supports the following custom media types. For more information, see "[Media types](https://docs.github.com/enterprise-server@3.17/rest/using-the-rest-api/getting-started-with-the-rest-api#media-types)." - **`application/vnd.github.raw+json`**: Returns the raw blob data. - **`application/vnd.github+json`**: Returns a JSON representation of the blob with `content` as a base64 encoded string. This is the default if no media type is specified. **Note** This endpoint supports blobs up to 100 megabytes in size.
   *
   * @tags git
   * @name GitGetBlob
   * @summary Get a blob
   * @request GET:/repos/{owner}/{repo}/git/blobs/{file_sha}
   */
  gitGetBlob = (
    owner: string,
    repo: string,
    fileSha: string,
    params: RequestParams = {},
  ) =>
    this.http.request<GitGetBlobData, BasicError | ValidationError>({
      path: `/repos/${owner}/${repo}/git/blobs/${fileSha}`,
      method: "GET",
      format: "json",
      ...params,
    });
  /**
   * @description Creates a new Git [commit object](https://git-scm.com/book/en/v2/Git-Internals-Git-Objects). **Signature verification object** The response will include a `verification` object that describes the result of verifying the commit's signature. The following fields are included in the `verification` object: | Name | Type | Description | | ---- | ---- | ----------- | | `verified` | `boolean` | Indicates whether GitHub considers the signature in this commit to be verified. | | `reason` | `string` | The reason for verified value. Possible values and their meanings are enumerated in the table below. | | `signature` | `string` | The signature that was extracted from the commit. | | `payload` | `string` | The value that was signed. | | `verified_at` | `string` | The date the signature was verified by GitHub. | These are the possible values for `reason` in the `verification` object: | Value | Description | | ----- | ----------- | | `expired_key` | The key that made the signature is expired. | | `not_signing_key` | The "signing" flag is not among the usage flags in the GPG key that made the signature. | | `gpgverify_error` | There was an error communicating with the signature verification service. | | `gpgverify_unavailable` | The signature verification service is currently unavailable. | | `unsigned` | The object does not include a signature. | | `unknown_signature_type` | A non-PGP signature was found in the commit. | | `no_user` | No user was associated with the `committer` email address in the commit. | | `unverified_email` | The `committer` email address in the commit was associated with a user, but the email address is not verified on their account. | | `bad_email` | The `committer` email address in the commit is not included in the identities of the PGP key that made the signature. | | `unknown_key` | The key that made the signature has not been registered with any user's account. | | `malformed_signature` | There was an error parsing the signature. | | `invalid` | The signature could not be cryptographically verified using the key whose key-id was found in the signature. | | `valid` | None of the above errors applied, so the signature is considered to be verified. |
   *
   * @tags git
   * @name GitCreateCommit
   * @summary Create a commit
   * @request POST:/repos/{owner}/{repo}/git/commits
   */
  gitCreateCommit = (
    owner: string,
    repo: string,
    data: GitCreateCommitPayload,
    params: RequestParams = {},
  ) =>
    this.http.request<GitCreateCommitData, BasicError | ValidationError>({
      path: `/repos/${owner}/${repo}/git/commits`,
      method: "POST",
      body: data,
      type: ContentType.Json,
      format: "json",
      ...params,
    });
  /**
   * @description Gets a Git [commit object](https://git-scm.com/book/en/v2/Git-Internals-Git-Objects). To get the contents of a commit, see "[Get a commit](/rest/commits/commits#get-a-commit)." **Signature verification object** The response will include a `verification` object that describes the result of verifying the commit's signature. The following fields are included in the `verification` object: | Name | Type | Description | | ---- | ---- | ----------- | | `verified` | `boolean` | Indicates whether GitHub considers the signature in this commit to be verified. | | `reason` | `string` | The reason for verified value. Possible values and their meanings are enumerated in the table below. | | `signature` | `string` | The signature that was extracted from the commit. | | `payload` | `string` | The value that was signed. | | `verified_at` | `string` | The date the signature was verified by GitHub. | These are the possible values for `reason` in the `verification` object: | Value | Description | | ----- | ----------- | | `expired_key` | The key that made the signature is expired. | | `not_signing_key` | The "signing" flag is not among the usage flags in the GPG key that made the signature. | | `gpgverify_error` | There was an error communicating with the signature verification service. | | `gpgverify_unavailable` | The signature verification service is currently unavailable. | | `unsigned` | The object does not include a signature. | | `unknown_signature_type` | A non-PGP signature was found in the commit. | | `no_user` | No user was associated with the `committer` email address in the commit. | | `unverified_email` | The `committer` email address in the commit was associated with a user, but the email address is not verified on their account. | | `bad_email` | The `committer` email address in the commit is not included in the identities of the PGP key that made the signature. | | `unknown_key` | The key that made the signature has not been registered with any user's account. | | `malformed_signature` | There was an error parsing the signature. | | `invalid` | The signature could not be cryptographically verified using the key whose key-id was found in the signature. | | `valid` | None of the above errors applied, so the signature is considered to be verified. |
   *
   * @tags git
   * @name GitGetCommit
   * @summary Get a commit object
   * @request GET:/repos/{owner}/{repo}/git/commits/{commit_sha}
   */
  gitGetCommit = (
    owner: string,
    repo: string,
    commitSha: string,
    params: RequestParams = {},
  ) =>
    this.http.request<GitGetCommitData, BasicError>({
      path: `/repos/${owner}/${repo}/git/commits/${commitSha}`,
      method: "GET",
      format: "json",
      ...params,
    });
  /**
   * @description Returns an array of references from your Git database that match the supplied name. The `:ref` in the URL must be formatted as `heads/<branch name>` for branches and `tags/<tag name>` for tags. If the `:ref` doesn't exist in the repository, but existing refs start with `:ref`, they will be returned as an array. When you use this endpoint without providing a `:ref`, it will return an array of all the references from your Git database, including notes and stashes if they exist on the server. Anything in the namespace is returned, not just `heads` and `tags`. > [!NOTE] > You need to explicitly [request a pull request](https://docs.github.com/enterprise-server@3.17/rest/pulls/pulls#get-a-pull-request) to trigger a test merge commit, which checks the mergeability of pull requests. For more information, see "[Checking mergeability of pull requests](https://docs.github.com/enterprise-server@3.17/rest/guides/getting-started-with-the-git-database-api#checking-mergeability-of-pull-requests)". If you request matching references for a branch named `feature` but the branch `feature` doesn't exist, the response can still include other matching head refs that start with the word `feature`, such as `featureA` and `featureB`.
   *
   * @tags git
   * @name GitListMatchingRefs
   * @summary List matching references
   * @request GET:/repos/{owner}/{repo}/git/matching-refs/{ref}
   */
  gitListMatchingRefs = (
    owner: string,
    repo: string,
    ref: string,
    params: RequestParams = {},
  ) =>
    this.http.request<GitListMatchingRefsData, BasicError>({
      path: `/repos/${owner}/${repo}/git/matching-refs/${ref}`,
      method: "GET",
      format: "json",
      ...params,
    });
  /**
   * @description Returns a single reference from your Git database. The `:ref` in the URL must be formatted as `heads/<branch name>` for branches and `tags/<tag name>` for tags. If the `:ref` doesn't match an existing ref, a `404` is returned. > [!NOTE] > You need to explicitly [request a pull request](https://docs.github.com/enterprise-server@3.17/rest/pulls/pulls#get-a-pull-request) to trigger a test merge commit, which checks the mergeability of pull requests. For more information, see "[Checking mergeability of pull requests](https://docs.github.com/enterprise-server@3.17/rest/guides/getting-started-with-the-git-database-api#checking-mergeability-of-pull-requests)".
   *
   * @tags git
   * @name GitGetRef
   * @summary Get a reference
   * @request GET:/repos/{owner}/{repo}/git/ref/{ref}
   */
  gitGetRef = (
    owner: string,
    repo: string,
    ref: string,
    params: RequestParams = {},
  ) =>
    this.http.request<GitGetRefData, BasicError>({
      path: `/repos/${owner}/${repo}/git/ref/${ref}`,
      method: "GET",
      format: "json",
      ...params,
    });
  /**
   * @description Creates a reference for your repository. You are unable to create new references for empty repositories, even if the commit SHA-1 hash used exists. Empty repositories are repositories without branches.
   *
   * @tags git
   * @name GitCreateRef
   * @summary Create a reference
   * @request POST:/repos/{owner}/{repo}/git/refs
   */
  gitCreateRef = (
    owner: string,
    repo: string,
    data: GitCreateRefPayload,
    params: RequestParams = {},
  ) =>
    this.http.request<GitCreateRefData, BasicError | ValidationError>({
      path: `/repos/${owner}/${repo}/git/refs`,
      method: "POST",
      body: data,
      type: ContentType.Json,
      format: "json",
      ...params,
    });
  /**
   * @description Updates the provided reference to point to a new SHA. For more information, see "[Git References](https://git-scm.com/book/en/v2/Git-Internals-Git-References)" in the Git documentation.
   *
   * @tags git
   * @name GitUpdateRef
   * @summary Update a reference
   * @request PATCH:/repos/{owner}/{repo}/git/refs/{ref}
   */
  gitUpdateRef = (
    owner: string,
    repo: string,
    ref: string,
    data: GitUpdateRefPayload,
    params: RequestParams = {},
  ) =>
    this.http.request<GitUpdateRefData, BasicError | ValidationError>({
      path: `/repos/${owner}/${repo}/git/refs/${ref}`,
      method: "PATCH",
      body: data,
      type: ContentType.Json,
      format: "json",
      ...params,
    });
  /**
   * @description Deletes the provided reference.
   *
   * @tags git
   * @name GitDeleteRef
   * @summary Delete a reference
   * @request DELETE:/repos/{owner}/{repo}/git/refs/{ref}
   */
  gitDeleteRef = (
    owner: string,
    repo: string,
    ref: string,
    params: RequestParams = {},
  ) =>
    this.http.request<GitDeleteRefData, BasicError | void>({
      path: `/repos/${owner}/${repo}/git/refs/${ref}`,
      method: "DELETE",
      ...params,
    });
  /**
   * @description Note that creating a tag object does not create the reference that makes a tag in Git. If you want to create an annotated tag in Git, you have to do this call to create the tag object, and then [create](https://docs.github.com/enterprise-server@3.17/rest/git/refs#create-a-reference) the `refs/tags/[tag]` reference. If you want to create a lightweight tag, you only have to [create](https://docs.github.com/enterprise-server@3.17/rest/git/refs#create-a-reference) the tag reference - this call would be unnecessary. **Signature verification object** The response will include a `verification` object that describes the result of verifying the commit's signature. The following fields are included in the `verification` object: | Name | Type | Description | | ---- | ---- | ----------- | | `verified` | `boolean` | Indicates whether GitHub considers the signature in this commit to be verified. | | `reason` | `string` | The reason for verified value. Possible values and their meanings are enumerated in table below. | | `signature` | `string` | The signature that was extracted from the commit. | | `payload` | `string` | The value that was signed. | | `verified_at` | `string` | The date the signature was verified by GitHub. | These are the possible values for `reason` in the `verification` object: | Value | Description | | ----- | ----------- | | `expired_key` | The key that made the signature is expired. | | `not_signing_key` | The "signing" flag is not among the usage flags in the GPG key that made the signature. | | `gpgverify_error` | There was an error communicating with the signature verification service. | | `gpgverify_unavailable` | The signature verification service is currently unavailable. | | `unsigned` | The object does not include a signature. | | `unknown_signature_type` | A non-PGP signature was found in the commit. | | `no_user` | No user was associated with the `committer` email address in the commit. | | `unverified_email` | The `committer` email address in the commit was associated with a user, but the email address is not verified on their account. | | `bad_email` | The `committer` email address in the commit is not included in the identities of the PGP key that made the signature. | | `unknown_key` | The key that made the signature has not been registered with any user's account. | | `malformed_signature` | There was an error parsing the signature. | | `invalid` | The signature could not be cryptographically verified using the key whose key-id was found in the signature. | | `valid` | None of the above errors applied, so the signature is considered to be verified. |
   *
   * @tags git
   * @name GitCreateTag
   * @summary Create a tag object
   * @request POST:/repos/{owner}/{repo}/git/tags
   */
  gitCreateTag = (
    owner: string,
    repo: string,
    data: GitCreateTagPayload,
    params: RequestParams = {},
  ) =>
    this.http.request<GitCreateTagData, BasicError | ValidationError>({
      path: `/repos/${owner}/${repo}/git/tags`,
      method: "POST",
      body: data,
      type: ContentType.Json,
      format: "json",
      ...params,
    });
  /**
   * @description **Signature verification object** The response will include a `verification` object that describes the result of verifying the commit's signature. The following fields are included in the `verification` object: | Name | Type | Description | | ---- | ---- | ----------- | | `verified` | `boolean` | Indicates whether GitHub considers the signature in this commit to be verified. | | `reason` | `string` | The reason for verified value. Possible values and their meanings are enumerated in table below. | | `signature` | `string` | The signature that was extracted from the commit. | | `payload` | `string` | The value that was signed. | | `verified_at` | `string` | The date the signature was verified by GitHub. | These are the possible values for `reason` in the `verification` object: | Value | Description | | ----- | ----------- | | `expired_key` | The key that made the signature is expired. | | `not_signing_key` | The "signing" flag is not among the usage flags in the GPG key that made the signature. | | `gpgverify_error` | There was an error communicating with the signature verification service. | | `gpgverify_unavailable` | The signature verification service is currently unavailable. | | `unsigned` | The object does not include a signature. | | `unknown_signature_type` | A non-PGP signature was found in the commit. | | `no_user` | No user was associated with the `committer` email address in the commit. | | `unverified_email` | The `committer` email address in the commit was associated with a user, but the email address is not verified on their account. | | `bad_email` | The `committer` email address in the commit is not included in the identities of the PGP key that made the signature. | | `unknown_key` | The key that made the signature has not been registered with any user's account. | | `malformed_signature` | There was an error parsing the signature. | | `invalid` | The signature could not be cryptographically verified using the key whose key-id was found in the signature. | | `valid` | None of the above errors applied, so the signature is considered to be verified. |
   *
   * @tags git
   * @name GitGetTag
   * @summary Get a tag
   * @request GET:/repos/{owner}/{repo}/git/tags/{tag_sha}
   */
  gitGetTag = (
    owner: string,
    repo: string,
    tagSha: string,
    params: RequestParams = {},
  ) =>
    this.http.request<GitGetTagData, BasicError>({
      path: `/repos/${owner}/${repo}/git/tags/${tagSha}`,
      method: "GET",
      format: "json",
      ...params,
    });
  /**
   * @description The tree creation API accepts nested entries. If you specify both a tree and a nested path modifying that tree, this endpoint will overwrite the contents of the tree with the new path contents, and create a new tree structure. If you use this endpoint to add, delete, or modify the file contents in a tree, you will need to commit the tree and then update a branch to point to the commit. For more information see "[Create a commit](https://docs.github.com/enterprise-server@3.17/rest/git/commits#create-a-commit)" and "[Update a reference](https://docs.github.com/enterprise-server@3.17/rest/git/refs#update-a-reference)." Returns an error if you try to delete a file that does not exist.
   *
   * @tags git
   * @name GitCreateTree
   * @summary Create a tree
   * @request POST:/repos/{owner}/{repo}/git/trees
   */
  gitCreateTree = (
    owner: string,
    repo: string,
    data: GitCreateTreePayload,
    params: RequestParams = {},
  ) =>
    this.http.request<GitCreateTreeData, BasicError | ValidationError>({
      path: `/repos/${owner}/${repo}/git/trees`,
      method: "POST",
      body: data,
      type: ContentType.Json,
      format: "json",
      ...params,
    });
  /**
   * @description Returns a single tree using the SHA1 value or ref name for that tree. If `truncated` is `true` in the response then the number of items in the `tree` array exceeded our maximum limit. If you need to fetch more items, use the non-recursive method of fetching trees, and fetch one sub-tree at a time. > [!NOTE] > The limit for the `tree` array is 100,000 entries with a maximum size of 7 MB when using the `recursive` parameter.
   *
   * @tags git
   * @name GitGetTree
   * @summary Get a tree
   * @request GET:/repos/{owner}/{repo}/git/trees/{tree_sha}
   */
  gitGetTree = (
    { owner, repo, treeSha, ...query }: GitGetTreeParams,
    params: RequestParams = {},
  ) =>
    this.http.request<GitGetTreeData, BasicError | ValidationError>({
      path: `/repos/${owner}/${repo}/git/trees/${treeSha}`,
      method: "GET",
      query: query,
      format: "json",
      ...params,
    });
  /**
   * @description Lists webhooks for a repository. `last response` may return null if there have not been any deliveries within 30 days.
   *
   * @tags repos
   * @name ReposListWebhooks
   * @summary List repository webhooks
   * @request GET:/repos/{owner}/{repo}/hooks
   */
  reposListWebhooks = (
    { owner, repo, ...query }: ReposListWebhooksParams,
    params: RequestParams = {},
  ) =>
    this.http.request<ReposListWebhooksData, BasicError>({
      path: `/repos/${owner}/${repo}/hooks`,
      method: "GET",
      query: query,
      format: "json",
      ...params,
    });
  /**
   * @description Repositories can have multiple webhooks installed. Each webhook should have a unique `config`. Multiple webhooks can share the same `config` as long as those webhooks do not have any `events` that overlap.
   *
   * @tags repos
   * @name ReposCreateWebhook
   * @summary Create a repository webhook
   * @request POST:/repos/{owner}/{repo}/hooks
   */
  reposCreateWebhook = (
    owner: string,
    repo: string,
    data?: ReposCreateWebhookPayload,
    params: RequestParams = {},
  ) =>
    this.http.request<ReposCreateWebhookData, BasicError | ValidationError>({
      path: `/repos/${owner}/${repo}/hooks`,
      method: "POST",
      body: data,
      type: ContentType.Json,
      format: "json",
      ...params,
    });
  /**
   * @description Returns a webhook configured in a repository. To get only the webhook `config` properties, see "[Get a webhook configuration for a repository](/rest/webhooks/repo-config#get-a-webhook-configuration-for-a-repository)."
   *
   * @tags repos
   * @name ReposGetWebhook
   * @summary Get a repository webhook
   * @request GET:/repos/{owner}/{repo}/hooks/{hook_id}
   */
  reposGetWebhook = (
    owner: string,
    repo: string,
    hookId: number,
    params: RequestParams = {},
  ) =>
    this.http.request<ReposGetWebhookData, BasicError>({
      path: `/repos/${owner}/${repo}/hooks/${hookId}`,
      method: "GET",
      format: "json",
      ...params,
    });
  /**
   * @description Updates a webhook configured in a repository. If you previously had a `secret` set, you must provide the same `secret` or set a new `secret` or the secret will be removed. If you are only updating individual webhook `config` properties, use "[Update a webhook configuration for a repository](/rest/webhooks/repo-config#update-a-webhook-configuration-for-a-repository)."
   *
   * @tags repos
   * @name ReposUpdateWebhook
   * @summary Update a repository webhook
   * @request PATCH:/repos/{owner}/{repo}/hooks/{hook_id}
   */
  reposUpdateWebhook = (
    owner: string,
    repo: string,
    hookId: number,
    data: ReposUpdateWebhookPayload,
    params: RequestParams = {},
  ) =>
    this.http.request<ReposUpdateWebhookData, BasicError | ValidationError>({
      path: `/repos/${owner}/${repo}/hooks/${hookId}`,
      method: "PATCH",
      body: data,
      type: ContentType.Json,
      format: "json",
      ...params,
    });
  /**
   * @description Delete a webhook for an organization. The authenticated user must be a repository owner, or have admin access in the repository, to delete the webhook.
   *
   * @tags repos
   * @name ReposDeleteWebhook
   * @summary Delete a repository webhook
   * @request DELETE:/repos/{owner}/{repo}/hooks/{hook_id}
   */
  reposDeleteWebhook = (
    owner: string,
    repo: string,
    hookId: number,
    params: RequestParams = {},
  ) =>
    this.http.request<ReposDeleteWebhookData, BasicError>({
      path: `/repos/${owner}/${repo}/hooks/${hookId}`,
      method: "DELETE",
      ...params,
    });
  /**
   * @description Returns the webhook configuration for a repository. To get more information about the webhook, including the `active` state and `events`, use "[Get a repository webhook](/rest/webhooks/repos#get-a-repository-webhook)." OAuth app tokens and personal access tokens (classic) need the `read:repo_hook` or `repo` scope to use this endpoint.
   *
   * @tags repos
   * @name ReposGetWebhookConfigForRepo
   * @summary Get a webhook configuration for a repository
   * @request GET:/repos/{owner}/{repo}/hooks/{hook_id}/config
   */
  reposGetWebhookConfigForRepo = (
    owner: string,
    repo: string,
    hookId: number,
    params: RequestParams = {},
  ) =>
    this.http.request<ReposGetWebhookConfigForRepoData, any>({
      path: `/repos/${owner}/${repo}/hooks/${hookId}/config`,
      method: "GET",
      format: "json",
      ...params,
    });
  /**
   * @description Updates the webhook configuration for a repository. To update more information about the webhook, including the `active` state and `events`, use "[Update a repository webhook](/rest/webhooks/repos#update-a-repository-webhook)." OAuth app tokens and personal access tokens (classic) need the `write:repo_hook` or `repo` scope to use this endpoint.
   *
   * @tags repos
   * @name ReposUpdateWebhookConfigForRepo
   * @summary Update a webhook configuration for a repository
   * @request PATCH:/repos/{owner}/{repo}/hooks/{hook_id}/config
   */
  reposUpdateWebhookConfigForRepo = (
    owner: string,
    repo: string,
    hookId: number,
    data?: ReposUpdateWebhookConfigForRepoPayload,
    params: RequestParams = {},
  ) =>
    this.http.request<ReposUpdateWebhookConfigForRepoData, any>({
      path: `/repos/${owner}/${repo}/hooks/${hookId}/config`,
      method: "PATCH",
      body: data,
      type: ContentType.Json,
      format: "json",
      ...params,
    });
  /**
   * @description Returns a list of webhook deliveries for a webhook configured in a repository.
   *
   * @tags repos
   * @name ReposListWebhookDeliveries
   * @summary List deliveries for a repository webhook
   * @request GET:/repos/{owner}/{repo}/hooks/{hook_id}/deliveries
   */
  reposListWebhookDeliveries = (
    { owner, repo, hookId, ...query }: ReposListWebhookDeliveriesParams,
    params: RequestParams = {},
  ) =>
    this.http.request<
      ReposListWebhookDeliveriesData,
      BasicError | ValidationError
    >({
      path: `/repos/${owner}/${repo}/hooks/${hookId}/deliveries`,
      method: "GET",
      query: query,
      format: "json",
      ...params,
    });
  /**
   * @description Returns a delivery for a webhook configured in a repository.
   *
   * @tags repos
   * @name ReposGetWebhookDelivery
   * @summary Get a delivery for a repository webhook
   * @request GET:/repos/{owner}/{repo}/hooks/{hook_id}/deliveries/{delivery_id}
   */
  reposGetWebhookDelivery = (
    owner: string,
    repo: string,
    hookId: number,
    deliveryId: number,
    params: RequestParams = {},
  ) =>
    this.http.request<
      ReposGetWebhookDeliveryData,
      BasicError | ValidationError
    >({
      path: `/repos/${owner}/${repo}/hooks/${hookId}/deliveries/${deliveryId}`,
      method: "GET",
      format: "json",
      ...params,
    });
  /**
   * @description Redeliver a webhook delivery for a webhook configured in a repository.
   *
   * @tags repos
   * @name ReposRedeliverWebhookDelivery
   * @summary Redeliver a delivery for a repository webhook
   * @request POST:/repos/{owner}/{repo}/hooks/{hook_id}/deliveries/{delivery_id}/attempts
   */
  reposRedeliverWebhookDelivery = (
    owner: string,
    repo: string,
    hookId: number,
    deliveryId: number,
    params: RequestParams = {},
  ) =>
    this.http.request<object, BasicError | ValidationError>({
      path: `/repos/${owner}/${repo}/hooks/${hookId}/deliveries/${deliveryId}/attempts`,
      method: "POST",
      ...params,
    });
  /**
   * @description This will trigger a [ping event](https://docs.github.com/enterprise-server@3.17/webhooks/#ping-event) to be sent to the hook.
   *
   * @tags repos
   * @name ReposPingWebhook
   * @summary Ping a repository webhook
   * @request POST:/repos/{owner}/{repo}/hooks/{hook_id}/pings
   */
  reposPingWebhook = (
    owner: string,
    repo: string,
    hookId: number,
    params: RequestParams = {},
  ) =>
    this.http.request<ReposPingWebhookData, BasicError>({
      path: `/repos/${owner}/${repo}/hooks/${hookId}/pings`,
      method: "POST",
      ...params,
    });
  /**
   * @description This will trigger the hook with the latest push to the current repository if the hook is subscribed to `push` events. If the hook is not subscribed to `push` events, the server will respond with 204 but no test POST will be generated. > [!NOTE] > Previously `/repos/:owner/:repo/hooks/:hook_id/test`
   *
   * @tags repos
   * @name ReposTestPushWebhook
   * @summary Test the push repository webhook
   * @request POST:/repos/{owner}/{repo}/hooks/{hook_id}/tests
   */
  reposTestPushWebhook = (
    owner: string,
    repo: string,
    hookId: number,
    params: RequestParams = {},
  ) =>
    this.http.request<ReposTestPushWebhookData, BasicError>({
      path: `/repos/${owner}/${repo}/hooks/${hookId}/tests`,
      method: "POST",
      ...params,
    });
  /**
   * @description Enables an authenticated GitHub App to find the repository's installation information. The installation's account type will be either an organization or a user account, depending which account the repository belongs to. You must use a [JWT](https://docs.github.com/enterprise-server@3.17/apps/building-github-apps/authenticating-with-github-apps/#authenticating-as-a-github-app) to access this endpoint.
   *
   * @tags apps
   * @name AppsGetRepoInstallation
   * @summary Get a repository installation for the authenticated app
   * @request GET:/repos/{owner}/{repo}/installation
   */
  appsGetRepoInstallation = (
    owner: string,
    repo: string,
    params: RequestParams = {},
  ) =>
    this.http.request<AppsGetRepoInstallationData, BasicError>({
      path: `/repos/${owner}/${repo}/installation`,
      method: "GET",
      format: "json",
      ...params,
    });
  /**
   * @description When authenticating as a user with admin rights to a repository, this endpoint will list all currently open repository invitations.
   *
   * @tags repos
   * @name ReposListInvitations
   * @summary List repository invitations
   * @request GET:/repos/{owner}/{repo}/invitations
   */
  reposListInvitations = (
    { owner, repo, ...query }: ReposListInvitationsParams,
    params: RequestParams = {},
  ) =>
    this.http.request<ReposListInvitationsData, any>({
      path: `/repos/${owner}/${repo}/invitations`,
      method: "GET",
      query: query,
      format: "json",
      ...params,
    });
  /**
   * No description
   *
   * @tags repos
   * @name ReposUpdateInvitation
   * @summary Update a repository invitation
   * @request PATCH:/repos/{owner}/{repo}/invitations/{invitation_id}
   */
  reposUpdateInvitation = (
    owner: string,
    repo: string,
    invitationId: number,
    data?: ReposUpdateInvitationPayload,
    params: RequestParams = {},
  ) =>
    this.http.request<ReposUpdateInvitationData, any>({
      path: `/repos/${owner}/${repo}/invitations/${invitationId}`,
      method: "PATCH",
      body: data,
      type: ContentType.Json,
      format: "json",
      ...params,
    });
  /**
   * No description
   *
   * @tags repos
   * @name ReposDeleteInvitation
   * @summary Delete a repository invitation
   * @request DELETE:/repos/{owner}/{repo}/invitations/{invitation_id}
   */
  reposDeleteInvitation = (
    owner: string,
    repo: string,
    invitationId: number,
    params: RequestParams = {},
  ) =>
    this.http.request<ReposDeleteInvitationData, any>({
      path: `/repos/${owner}/${repo}/invitations/${invitationId}`,
      method: "DELETE",
      ...params,
    });
  /**
   * @description List issues in a repository. Only open issues will be listed. > [!NOTE] > GitHub's REST API considers every pull request an issue, but not every issue is a pull request. For this reason, "Issues" endpoints may return both issues and pull requests in the response. You can identify pull requests by the `pull_request` key. Be aware that the `id` of a pull request returned from "Issues" endpoints will be an _issue id_. To find out the pull request id, use the "[List pull requests](https://docs.github.com/enterprise-server@3.17/rest/pulls/pulls#list-pull-requests)" endpoint. This endpoint supports the following custom media types. For more information, see "[Media types](https://docs.github.com/enterprise-server@3.17/rest/using-the-rest-api/getting-started-with-the-rest-api#media-types)." - **`application/vnd.github.raw+json`**: Returns the raw markdown body. Response will include `body`. This is the default if you do not pass any specific media type. - **`application/vnd.github.text+json`**: Returns a text only representation of the markdown body. Response will include `body_text`. - **`application/vnd.github.html+json`**: Returns HTML rendered from the body's markdown. Response will include `body_html`. - **`application/vnd.github.full+json`**: Returns raw, text, and HTML representations. Response will include `body`, `body_text`, and `body_html`.
   *
   * @tags issues
   * @name IssuesListForRepo
   * @summary List repository issues
   * @request GET:/repos/{owner}/{repo}/issues
   */
  issuesListForRepo = (
    { owner, repo, ...query }: IssuesListForRepoParams,
    params: RequestParams = {},
  ) =>
    this.http.request<IssuesListForRepoData, BasicError | ValidationError>({
      path: `/repos/${owner}/${repo}/issues`,
      method: "GET",
      query: query,
      format: "json",
      ...params,
    });
  /**
   * @description Any user with pull access to a repository can create an issue. If [issues are disabled in the repository](https://docs.github.com/enterprise-server@3.17/articles/disabling-issues/), the API returns a `410 Gone` status. This endpoint triggers [notifications](https://docs.github.com/enterprise-server@3.17/github/managing-subscriptions-and-notifications-on-github/about-notifications). Creating content too quickly using this endpoint may result in secondary rate limiting. For more information, see "[Rate limits for the API](https://docs.github.com/enterprise-server@3.17/rest/using-the-rest-api/rate-limits-for-the-rest-api#about-secondary-rate-limits)" and "[Best practices for using the REST API](https://docs.github.com/enterprise-server@3.17/rest/guides/best-practices-for-using-the-rest-api)." This endpoint supports the following custom media types. For more information, see "[Media types](https://docs.github.com/enterprise-server@3.17/rest/using-the-rest-api/getting-started-with-the-rest-api#media-types)." - **`application/vnd.github.raw+json`**: Returns the raw markdown body. Response will include `body`. This is the default if you do not pass any specific media type. - **`application/vnd.github.text+json`**: Returns a text only representation of the markdown body. Response will include `body_text`. - **`application/vnd.github.html+json`**: Returns HTML rendered from the body's markdown. Response will include `body_html`. - **`application/vnd.github.full+json`**: Returns raw, text, and HTML representations. Response will include `body`, `body_text`, and `body_html`.
   *
   * @tags issues
   * @name IssuesCreate
   * @summary Create an issue
   * @request POST:/repos/{owner}/{repo}/issues
   */
  issuesCreate = (
    owner: string,
    repo: string,
    data: IssuesCreatePayload,
    params: RequestParams = {},
  ) =>
    this.http.request<
      IssuesCreateData,
      | BasicError
      | ValidationError
      | {
          code?: string;
          message?: string;
          documentation_url?: string;
        }
    >({
      path: `/repos/${owner}/${repo}/issues`,
      method: "POST",
      body: data,
      type: ContentType.Json,
      format: "json",
      ...params,
    });
  /**
   * @description You can use the REST API to list comments on issues and pull requests for a repository. Every pull request is an issue, but not every issue is a pull request. By default, issue comments are ordered by ascending ID. This endpoint supports the following custom media types. For more information, see "[Media types](https://docs.github.com/enterprise-server@3.17/rest/using-the-rest-api/getting-started-with-the-rest-api#media-types)." - **`application/vnd.github.raw+json`**: Returns the raw markdown body. Response will include `body`. This is the default if you do not pass any specific media type. - **`application/vnd.github.text+json`**: Returns a text only representation of the markdown body. Response will include `body_text`. - **`application/vnd.github.html+json`**: Returns HTML rendered from the body's markdown. Response will include `body_html`. - **`application/vnd.github.full+json`**: Returns raw, text, and HTML representations. Response will include `body`, `body_text`, and `body_html`.
   *
   * @tags issues
   * @name IssuesListCommentsForRepo
   * @summary List issue comments for a repository
   * @request GET:/repos/{owner}/{repo}/issues/comments
   */
  issuesListCommentsForRepo = (
    { owner, repo, ...query }: IssuesListCommentsForRepoParams,
    params: RequestParams = {},
  ) =>
    this.http.request<
      IssuesListCommentsForRepoData,
      BasicError | ValidationError
    >({
      path: `/repos/${owner}/${repo}/issues/comments`,
      method: "GET",
      query: query,
      format: "json",
      ...params,
    });
  /**
   * @description You can use the REST API to get comments on issues and pull requests. Every pull request is an issue, but not every issue is a pull request. This endpoint supports the following custom media types. For more information, see "[Media types](https://docs.github.com/enterprise-server@3.17/rest/using-the-rest-api/getting-started-with-the-rest-api#media-types)." - **`application/vnd.github.raw+json`**: Returns the raw markdown body. Response will include `body`. This is the default if you do not pass any specific media type. - **`application/vnd.github.text+json`**: Returns a text only representation of the markdown body. Response will include `body_text`. - **`application/vnd.github.html+json`**: Returns HTML rendered from the body's markdown. Response will include `body_html`. - **`application/vnd.github.full+json`**: Returns raw, text, and HTML representations. Response will include `body`, `body_text`, and `body_html`.
   *
   * @tags issues
   * @name IssuesGetComment
   * @summary Get an issue comment
   * @request GET:/repos/{owner}/{repo}/issues/comments/{comment_id}
   */
  issuesGetComment = (
    owner: string,
    repo: string,
    commentId: number,
    params: RequestParams = {},
  ) =>
    this.http.request<IssuesGetCommentData, BasicError>({
      path: `/repos/${owner}/${repo}/issues/comments/${commentId}`,
      method: "GET",
      format: "json",
      ...params,
    });
  /**
   * @description You can use the REST API to update comments on issues and pull requests. Every pull request is an issue, but not every issue is a pull request. This endpoint supports the following custom media types. For more information, see "[Media types](https://docs.github.com/enterprise-server@3.17/rest/using-the-rest-api/getting-started-with-the-rest-api#media-types)." - **`application/vnd.github.raw+json`**: Returns the raw markdown body. Response will include `body`. This is the default if you do not pass any specific media type. - **`application/vnd.github.text+json`**: Returns a text only representation of the markdown body. Response will include `body_text`. - **`application/vnd.github.html+json`**: Returns HTML rendered from the body's markdown. Response will include `body_html`. - **`application/vnd.github.full+json`**: Returns raw, text, and HTML representations. Response will include `body`, `body_text`, and `body_html`.
   *
   * @tags issues
   * @name IssuesUpdateComment
   * @summary Update an issue comment
   * @request PATCH:/repos/{owner}/{repo}/issues/comments/{comment_id}
   */
  issuesUpdateComment = (
    owner: string,
    repo: string,
    commentId: number,
    data: IssuesUpdateCommentPayload,
    params: RequestParams = {},
  ) =>
    this.http.request<IssuesUpdateCommentData, ValidationError>({
      path: `/repos/${owner}/${repo}/issues/comments/${commentId}`,
      method: "PATCH",
      body: data,
      type: ContentType.Json,
      format: "json",
      ...params,
    });
  /**
   * @description You can use the REST API to delete comments on issues and pull requests. Every pull request is an issue, but not every issue is a pull request.
   *
   * @tags issues
   * @name IssuesDeleteComment
   * @summary Delete an issue comment
   * @request DELETE:/repos/{owner}/{repo}/issues/comments/{comment_id}
   */
  issuesDeleteComment = (
    owner: string,
    repo: string,
    commentId: number,
    params: RequestParams = {},
  ) =>
    this.http.request<IssuesDeleteCommentData, any>({
      path: `/repos/${owner}/${repo}/issues/comments/${commentId}`,
      method: "DELETE",
      ...params,
    });
  /**
   * @description List the reactions to an [issue comment](https://docs.github.com/enterprise-server@3.17/rest/issues/comments#get-an-issue-comment).
   *
   * @tags reactions
   * @name ReactionsListForIssueComment
   * @summary List reactions for an issue comment
   * @request GET:/repos/{owner}/{repo}/issues/comments/{comment_id}/reactions
   */
  reactionsListForIssueComment = (
    { owner, repo, commentId, ...query }: ReactionsListForIssueCommentParams,
    params: RequestParams = {},
  ) =>
    this.http.request<ReactionsListForIssueCommentData, BasicError>({
      path: `/repos/${owner}/${repo}/issues/comments/${commentId}/reactions`,
      method: "GET",
      query: query,
      format: "json",
      ...params,
    });
  /**
   * @description Create a reaction to an [issue comment](https://docs.github.com/enterprise-server@3.17/rest/issues/comments#get-an-issue-comment). A response with an HTTP `200` status means that you already added the reaction type to this issue comment.
   *
   * @tags reactions
   * @name ReactionsCreateForIssueComment
   * @summary Create reaction for an issue comment
   * @request POST:/repos/{owner}/{repo}/issues/comments/{comment_id}/reactions
   */
  reactionsCreateForIssueComment = (
    owner: string,
    repo: string,
    commentId: number,
    data: ReactionsCreateForIssueCommentPayload,
    params: RequestParams = {},
  ) =>
    this.http.request<ReactionsCreateForIssueCommentData, ValidationError>({
      path: `/repos/${owner}/${repo}/issues/comments/${commentId}/reactions`,
      method: "POST",
      body: data,
      type: ContentType.Json,
      format: "json",
      ...params,
    });
  /**
   * @description > [!NOTE] > You can also specify a repository by `repository_id` using the route `DELETE delete /repositories/:repository_id/issues/comments/:comment_id/reactions/:reaction_id`. Delete a reaction to an [issue comment](https://docs.github.com/enterprise-server@3.17/rest/issues/comments#get-an-issue-comment).
   *
   * @tags reactions
   * @name ReactionsDeleteForIssueComment
   * @summary Delete an issue comment reaction
   * @request DELETE:/repos/{owner}/{repo}/issues/comments/{comment_id}/reactions/{reaction_id}
   */
  reactionsDeleteForIssueComment = (
    owner: string,
    repo: string,
    commentId: number,
    reactionId: number,
    params: RequestParams = {},
  ) =>
    this.http.request<ReactionsDeleteForIssueCommentData, any>({
      path: `/repos/${owner}/${repo}/issues/comments/${commentId}/reactions/${reactionId}`,
      method: "DELETE",
      ...params,
    });
  /**
   * @description Lists events for a repository.
   *
   * @tags issues
   * @name IssuesListEventsForRepo
   * @summary List issue events for a repository
   * @request GET:/repos/{owner}/{repo}/issues/events
   */
  issuesListEventsForRepo = (
    { owner, repo, ...query }: IssuesListEventsForRepoParams,
    params: RequestParams = {},
  ) =>
    this.http.request<IssuesListEventsForRepoData, ValidationError>({
      path: `/repos/${owner}/${repo}/issues/events`,
      method: "GET",
      query: query,
      format: "json",
      ...params,
    });
  /**
   * @description Gets a single event by the event id.
   *
   * @tags issues
   * @name IssuesGetEvent
   * @summary Get an issue event
   * @request GET:/repos/{owner}/{repo}/issues/events/{event_id}
   */
  issuesGetEvent = (
    owner: string,
    repo: string,
    eventId: number,
    params: RequestParams = {},
  ) =>
    this.http.request<IssuesGetEventData, BasicError>({
      path: `/repos/${owner}/${repo}/issues/events/${eventId}`,
      method: "GET",
      format: "json",
      ...params,
    });
  /**
   * @description The API returns a [`301 Moved Permanently` status](https://docs.github.com/enterprise-server@3.17/rest/guides/best-practices-for-using-the-rest-api#follow-redirects) if the issue was [transferred](https://docs.github.com/enterprise-server@3.17/articles/transferring-an-issue-to-another-repository/) to another repository. If the issue was transferred to or deleted from a repository where the authenticated user lacks read access, the API returns a `404 Not Found` status. If the issue was deleted from a repository where the authenticated user has read access, the API returns a `410 Gone` status. To receive webhook events for transferred and deleted issues, subscribe to the [`issues`](https://docs.github.com/enterprise-server@3.17/webhooks/event-payloads/#issues) webhook. > [!NOTE] > GitHub's REST API considers every pull request an issue, but not every issue is a pull request. For this reason, "Issues" endpoints may return both issues and pull requests in the response. You can identify pull requests by the `pull_request` key. Be aware that the `id` of a pull request returned from "Issues" endpoints will be an _issue id_. To find out the pull request id, use the "[List pull requests](https://docs.github.com/enterprise-server@3.17/rest/pulls/pulls#list-pull-requests)" endpoint. This endpoint supports the following custom media types. For more information, see "[Media types](https://docs.github.com/enterprise-server@3.17/rest/using-the-rest-api/getting-started-with-the-rest-api#media-types)." - **`application/vnd.github.raw+json`**: Returns the raw markdown body. Response will include `body`. This is the default if you do not pass any specific media type. - **`application/vnd.github.text+json`**: Returns a text only representation of the markdown body. Response will include `body_text`. - **`application/vnd.github.html+json`**: Returns HTML rendered from the body's markdown. Response will include `body_html`. - **`application/vnd.github.full+json`**: Returns raw, text, and HTML representations. Response will include `body`, `body_text`, and `body_html`.
   *
   * @tags issues
   * @name IssuesGet
   * @summary Get an issue
   * @request GET:/repos/{owner}/{repo}/issues/{issue_number}
   */
  issuesGet = (
    owner: string,
    repo: string,
    issueNumber: number,
    params: RequestParams = {},
  ) =>
    this.http.request<IssuesGetData, BasicError>({
      path: `/repos/${owner}/${repo}/issues/${issueNumber}`,
      method: "GET",
      format: "json",
      ...params,
    });
  /**
   * @description Issue owners and users with push access or Triage role can edit an issue. This endpoint supports the following custom media types. For more information, see "[Media types](https://docs.github.com/enterprise-server@3.17/rest/using-the-rest-api/getting-started-with-the-rest-api#media-types)." - **`application/vnd.github.raw+json`**: Returns the raw markdown body. Response will include `body`. This is the default if you do not pass any specific media type. - **`application/vnd.github.text+json`**: Returns a text only representation of the markdown body. Response will include `body_text`. - **`application/vnd.github.html+json`**: Returns HTML rendered from the body's markdown. Response will include `body_html`. - **`application/vnd.github.full+json`**: Returns raw, text, and HTML representations. Response will include `body`, `body_text`, and `body_html`.
   *
   * @tags issues
   * @name IssuesUpdate
   * @summary Update an issue
   * @request PATCH:/repos/{owner}/{repo}/issues/{issue_number}
   */
  issuesUpdate = (
    owner: string,
    repo: string,
    issueNumber: number,
    data?: IssuesUpdatePayload,
    params: RequestParams = {},
  ) =>
    this.http.request<
      IssuesUpdateData,
      | BasicError
      | ValidationError
      | {
          code?: string;
          message?: string;
          documentation_url?: string;
        }
    >({
      path: `/repos/${owner}/${repo}/issues/${issueNumber}`,
      method: "PATCH",
      body: data,
      type: ContentType.Json,
      format: "json",
      ...params,
    });
  /**
   * @description Adds up to 10 assignees to an issue. Users already assigned to an issue are not replaced.
   *
   * @tags issues
   * @name IssuesAddAssignees
   * @summary Add assignees to an issue
   * @request POST:/repos/{owner}/{repo}/issues/{issue_number}/assignees
   */
  issuesAddAssignees = (
    owner: string,
    repo: string,
    issueNumber: number,
    data?: IssuesAddAssigneesPayload,
    params: RequestParams = {},
  ) =>
    this.http.request<IssuesAddAssigneesData, any>({
      path: `/repos/${owner}/${repo}/issues/${issueNumber}/assignees`,
      method: "POST",
      body: data,
      type: ContentType.Json,
      format: "json",
      ...params,
    });
  /**
   * @description Removes one or more assignees from an issue.
   *
   * @tags issues
   * @name IssuesRemoveAssignees
   * @summary Remove assignees from an issue
   * @request DELETE:/repos/{owner}/{repo}/issues/{issue_number}/assignees
   */
  issuesRemoveAssignees = (
    owner: string,
    repo: string,
    issueNumber: number,
    data: IssuesRemoveAssigneesPayload,
    params: RequestParams = {},
  ) =>
    this.http.request<IssuesRemoveAssigneesData, any>({
      path: `/repos/${owner}/${repo}/issues/${issueNumber}/assignees`,
      method: "DELETE",
      body: data,
      type: ContentType.Json,
      format: "json",
      ...params,
    });
  /**
   * @description Checks if a user has permission to be assigned to a specific issue. If the `assignee` can be assigned to this issue, a `204` status code with no content is returned. Otherwise a `404` status code is returned.
   *
   * @tags issues
   * @name IssuesCheckUserCanBeAssignedToIssue
   * @summary Check if a user can be assigned to a issue
   * @request GET:/repos/{owner}/{repo}/issues/{issue_number}/assignees/{assignee}
   */
  issuesCheckUserCanBeAssignedToIssue = (
    owner: string,
    repo: string,
    issueNumber: number,
    assignee: string,
    params: RequestParams = {},
  ) =>
    this.http.request<
      IssuesCheckUserCanBeAssignedToIssueData,
      IssuesCheckUserCanBeAssignedToIssueError
    >({
      path: `/repos/${owner}/${repo}/issues/${issueNumber}/assignees/${assignee}`,
      method: "GET",
      ...params,
    });
  /**
   * @description You can use the REST API to list comments on issues and pull requests. Every pull request is an issue, but not every issue is a pull request. Issue comments are ordered by ascending ID. This endpoint supports the following custom media types. For more information, see "[Media types](https://docs.github.com/enterprise-server@3.17/rest/using-the-rest-api/getting-started-with-the-rest-api#media-types)." - **`application/vnd.github.raw+json`**: Returns the raw markdown body. Response will include `body`. This is the default if you do not pass any specific media type. - **`application/vnd.github.text+json`**: Returns a text only representation of the markdown body. Response will include `body_text`. - **`application/vnd.github.html+json`**: Returns HTML rendered from the body's markdown. Response will include `body_html`. - **`application/vnd.github.full+json`**: Returns raw, text, and HTML representations. Response will include `body`, `body_text`, and `body_html`.
   *
   * @tags issues
   * @name IssuesListComments
   * @summary List issue comments
   * @request GET:/repos/{owner}/{repo}/issues/{issue_number}/comments
   */
  issuesListComments = (
    { owner, repo, issueNumber, ...query }: IssuesListCommentsParams,
    params: RequestParams = {},
  ) =>
    this.http.request<IssuesListCommentsData, BasicError>({
      path: `/repos/${owner}/${repo}/issues/${issueNumber}/comments`,
      method: "GET",
      query: query,
      format: "json",
      ...params,
    });
  /**
   * @description You can use the REST API to create comments on issues and pull requests. Every pull request is an issue, but not every issue is a pull request. This endpoint triggers [notifications](https://docs.github.com/enterprise-server@3.17/github/managing-subscriptions-and-notifications-on-github/about-notifications). Creating content too quickly using this endpoint may result in secondary rate limiting. For more information, see "[Rate limits for the API](https://docs.github.com/enterprise-server@3.17/rest/using-the-rest-api/rate-limits-for-the-rest-api#about-secondary-rate-limits)" and "[Best practices for using the REST API](https://docs.github.com/enterprise-server@3.17/rest/guides/best-practices-for-using-the-rest-api)." This endpoint supports the following custom media types. For more information, see "[Media types](https://docs.github.com/enterprise-server@3.17/rest/using-the-rest-api/getting-started-with-the-rest-api#media-types)." - **`application/vnd.github.raw+json`**: Returns the raw markdown body. Response will include `body`. This is the default if you do not pass any specific media type. - **`application/vnd.github.text+json`**: Returns a text only representation of the markdown body. Response will include `body_text`. - **`application/vnd.github.html+json`**: Returns HTML rendered from the body's markdown. Response will include `body_html`. - **`application/vnd.github.full+json`**: Returns raw, text, and HTML representations. Response will include `body`, `body_text`, and `body_html`.
   *
   * @tags issues
   * @name IssuesCreateComment
   * @summary Create an issue comment
   * @request POST:/repos/{owner}/{repo}/issues/{issue_number}/comments
   */
  issuesCreateComment = (
    owner: string,
    repo: string,
    issueNumber: number,
    data: IssuesCreateCommentPayload,
    params: RequestParams = {},
  ) =>
    this.http.request<IssuesCreateCommentData, BasicError | ValidationError>({
      path: `/repos/${owner}/${repo}/issues/${issueNumber}/comments`,
      method: "POST",
      body: data,
      type: ContentType.Json,
      format: "json",
      ...params,
    });
  /**
   * @description Lists all events for an issue.
   *
   * @tags issues
   * @name IssuesListEvents
   * @summary List issue events
   * @request GET:/repos/{owner}/{repo}/issues/{issue_number}/events
   */
  issuesListEvents = (
    { owner, repo, issueNumber, ...query }: IssuesListEventsParams,
    params: RequestParams = {},
  ) =>
    this.http.request<IssuesListEventsData, BasicError>({
      path: `/repos/${owner}/${repo}/issues/${issueNumber}/events`,
      method: "GET",
      query: query,
      format: "json",
      ...params,
    });
  /**
   * @description Lists all labels for an issue.
   *
   * @tags issues
   * @name IssuesListLabelsOnIssue
   * @summary List labels for an issue
   * @request GET:/repos/{owner}/{repo}/issues/{issue_number}/labels
   */
  issuesListLabelsOnIssue = (
    { owner, repo, issueNumber, ...query }: IssuesListLabelsOnIssueParams,
    params: RequestParams = {},
  ) =>
    this.http.request<IssuesListLabelsOnIssueData, BasicError>({
      path: `/repos/${owner}/${repo}/issues/${issueNumber}/labels`,
      method: "GET",
      query: query,
      format: "json",
      ...params,
    });
  /**
   * @description Adds labels to an issue. If you provide an empty array of labels, all labels are removed from the issue.
   *
   * @tags issues
   * @name IssuesAddLabels
   * @summary Add labels to an issue
   * @request POST:/repos/{owner}/{repo}/issues/{issue_number}/labels
   */
  issuesAddLabels = (
    owner: string,
    repo: string,
    issueNumber: number,
    data?: IssuesAddLabelsPayload,
    params: RequestParams = {},
  ) =>
    this.http.request<IssuesAddLabelsData, BasicError | ValidationError>({
      path: `/repos/${owner}/${repo}/issues/${issueNumber}/labels`,
      method: "POST",
      body: data,
      type: ContentType.Json,
      format: "json",
      ...params,
    });
  /**
   * @description Removes any previous labels and sets the new labels for an issue.
   *
   * @tags issues
   * @name IssuesSetLabels
   * @summary Set labels for an issue
   * @request PUT:/repos/{owner}/{repo}/issues/{issue_number}/labels
   */
  issuesSetLabels = (
    owner: string,
    repo: string,
    issueNumber: number,
    data?: IssuesSetLabelsPayload,
    params: RequestParams = {},
  ) =>
    this.http.request<IssuesSetLabelsData, BasicError | ValidationError>({
      path: `/repos/${owner}/${repo}/issues/${issueNumber}/labels`,
      method: "PUT",
      body: data,
      type: ContentType.Json,
      format: "json",
      ...params,
    });
  /**
   * @description Removes all labels from an issue.
   *
   * @tags issues
   * @name IssuesRemoveAllLabels
   * @summary Remove all labels from an issue
   * @request DELETE:/repos/{owner}/{repo}/issues/{issue_number}/labels
   */
  issuesRemoveAllLabels = (
    owner: string,
    repo: string,
    issueNumber: number,
    params: RequestParams = {},
  ) =>
    this.http.request<IssuesRemoveAllLabelsData, BasicError>({
      path: `/repos/${owner}/${repo}/issues/${issueNumber}/labels`,
      method: "DELETE",
      ...params,
    });
  /**
   * @description Removes the specified label from the issue, and returns the remaining labels on the issue. This endpoint returns a `404 Not Found` status if the label does not exist.
   *
   * @tags issues
   * @name IssuesRemoveLabel
   * @summary Remove a label from an issue
   * @request DELETE:/repos/{owner}/{repo}/issues/{issue_number}/labels/{name}
   */
  issuesRemoveLabel = (
    owner: string,
    repo: string,
    issueNumber: number,
    name: string,
    params: RequestParams = {},
  ) =>
    this.http.request<IssuesRemoveLabelData, BasicError>({
      path: `/repos/${owner}/${repo}/issues/${issueNumber}/labels/${name}`,
      method: "DELETE",
      format: "json",
      ...params,
    });
  /**
   * @description Users with push access can lock an issue or pull request's conversation. Note that, if you choose not to pass any parameters, you'll need to set `Content-Length` to zero when calling out to this endpoint. For more information, see "[HTTP method](https://docs.github.com/enterprise-server@3.17/rest/guides/getting-started-with-the-rest-api#http-method)."
   *
   * @tags issues
   * @name IssuesLock
   * @summary Lock an issue
   * @request PUT:/repos/{owner}/{repo}/issues/{issue_number}/lock
   */
  issuesLock = (
    owner: string,
    repo: string,
    issueNumber: number,
    data?: IssuesLockPayload,
    params: RequestParams = {},
  ) =>
    this.http.request<IssuesLockData, BasicError | ValidationError>({
      path: `/repos/${owner}/${repo}/issues/${issueNumber}/lock`,
      method: "PUT",
      body: data,
      type: ContentType.Json,
      ...params,
    });
  /**
   * @description Users with push access can unlock an issue's conversation.
   *
   * @tags issues
   * @name IssuesUnlock
   * @summary Unlock an issue
   * @request DELETE:/repos/{owner}/{repo}/issues/{issue_number}/lock
   */
  issuesUnlock = (
    owner: string,
    repo: string,
    issueNumber: number,
    params: RequestParams = {},
  ) =>
    this.http.request<IssuesUnlockData, BasicError>({
      path: `/repos/${owner}/${repo}/issues/${issueNumber}/lock`,
      method: "DELETE",
      ...params,
    });
  /**
   * @description List the reactions to an [issue](https://docs.github.com/enterprise-server@3.17/rest/issues/issues#get-an-issue).
   *
   * @tags reactions
   * @name ReactionsListForIssue
   * @summary List reactions for an issue
   * @request GET:/repos/{owner}/{repo}/issues/{issue_number}/reactions
   */
  reactionsListForIssue = (
    { owner, repo, issueNumber, ...query }: ReactionsListForIssueParams,
    params: RequestParams = {},
  ) =>
    this.http.request<ReactionsListForIssueData, BasicError>({
      path: `/repos/${owner}/${repo}/issues/${issueNumber}/reactions`,
      method: "GET",
      query: query,
      format: "json",
      ...params,
    });
  /**
   * @description Create a reaction to an [issue](https://docs.github.com/enterprise-server@3.17/rest/issues/issues#get-an-issue). A response with an HTTP `200` status means that you already added the reaction type to this issue.
   *
   * @tags reactions
   * @name ReactionsCreateForIssue
   * @summary Create reaction for an issue
   * @request POST:/repos/{owner}/{repo}/issues/{issue_number}/reactions
   */
  reactionsCreateForIssue = (
    owner: string,
    repo: string,
    issueNumber: number,
    data: ReactionsCreateForIssuePayload,
    params: RequestParams = {},
  ) =>
    this.http.request<ReactionsCreateForIssueData, ValidationError>({
      path: `/repos/${owner}/${repo}/issues/${issueNumber}/reactions`,
      method: "POST",
      body: data,
      type: ContentType.Json,
      format: "json",
      ...params,
    });
  /**
   * @description > [!NOTE] > You can also specify a repository by `repository_id` using the route `DELETE /repositories/:repository_id/issues/:issue_number/reactions/:reaction_id`. Delete a reaction to an [issue](https://docs.github.com/enterprise-server@3.17/rest/issues/issues#get-an-issue).
   *
   * @tags reactions
   * @name ReactionsDeleteForIssue
   * @summary Delete an issue reaction
   * @request DELETE:/repos/{owner}/{repo}/issues/{issue_number}/reactions/{reaction_id}
   */
  reactionsDeleteForIssue = (
    owner: string,
    repo: string,
    issueNumber: number,
    reactionId: number,
    params: RequestParams = {},
  ) =>
    this.http.request<ReactionsDeleteForIssueData, any>({
      path: `/repos/${owner}/${repo}/issues/${issueNumber}/reactions/${reactionId}`,
      method: "DELETE",
      ...params,
    });
  /**
   * @description List all timeline events for an issue.
   *
   * @tags issues
   * @name IssuesListEventsForTimeline
   * @summary List timeline events for an issue
   * @request GET:/repos/{owner}/{repo}/issues/{issue_number}/timeline
   */
  issuesListEventsForTimeline = (
    { owner, repo, issueNumber, ...query }: IssuesListEventsForTimelineParams,
    params: RequestParams = {},
  ) =>
    this.http.request<IssuesListEventsForTimelineData, BasicError>({
      path: `/repos/${owner}/${repo}/issues/${issueNumber}/timeline`,
      method: "GET",
      query: query,
      format: "json",
      ...params,
    });
  /**
   * No description
   *
   * @tags repos
   * @name ReposListDeployKeys
   * @summary List deploy keys
   * @request GET:/repos/{owner}/{repo}/keys
   */
  reposListDeployKeys = (
    { owner, repo, ...query }: ReposListDeployKeysParams,
    params: RequestParams = {},
  ) =>
    this.http.request<ReposListDeployKeysData, any>({
      path: `/repos/${owner}/${repo}/keys`,
      method: "GET",
      query: query,
      format: "json",
      ...params,
    });
  /**
   * @description You can create a read-only deploy key.
   *
   * @tags repos
   * @name ReposCreateDeployKey
   * @summary Create a deploy key
   * @request POST:/repos/{owner}/{repo}/keys
   */
  reposCreateDeployKey = (
    owner: string,
    repo: string,
    data: ReposCreateDeployKeyPayload,
    params: RequestParams = {},
  ) =>
    this.http.request<ReposCreateDeployKeyData, ValidationError>({
      path: `/repos/${owner}/${repo}/keys`,
      method: "POST",
      body: data,
      type: ContentType.Json,
      format: "json",
      ...params,
    });
  /**
   * No description
   *
   * @tags repos
   * @name ReposGetDeployKey
   * @summary Get a deploy key
   * @request GET:/repos/{owner}/{repo}/keys/{key_id}
   */
  reposGetDeployKey = (
    owner: string,
    repo: string,
    keyId: number,
    params: RequestParams = {},
  ) =>
    this.http.request<ReposGetDeployKeyData, BasicError>({
      path: `/repos/${owner}/${repo}/keys/${keyId}`,
      method: "GET",
      format: "json",
      ...params,
    });
  /**
   * @description Deploy keys are immutable. If you need to update a key, remove the key and create a new one instead.
   *
   * @tags repos
   * @name ReposDeleteDeployKey
   * @summary Delete a deploy key
   * @request DELETE:/repos/{owner}/{repo}/keys/{key_id}
   */
  reposDeleteDeployKey = (
    owner: string,
    repo: string,
    keyId: number,
    params: RequestParams = {},
  ) =>
    this.http.request<ReposDeleteDeployKeyData, any>({
      path: `/repos/${owner}/${repo}/keys/${keyId}`,
      method: "DELETE",
      ...params,
    });
  /**
   * @description Lists all labels for a repository.
   *
   * @tags issues
   * @name IssuesListLabelsForRepo
   * @summary List labels for a repository
   * @request GET:/repos/{owner}/{repo}/labels
   */
  issuesListLabelsForRepo = (
    { owner, repo, ...query }: IssuesListLabelsForRepoParams,
    params: RequestParams = {},
  ) =>
    this.http.request<IssuesListLabelsForRepoData, BasicError>({
      path: `/repos/${owner}/${repo}/labels`,
      method: "GET",
      query: query,
      format: "json",
      ...params,
    });
  /**
   * @description Creates a label for the specified repository with the given name and color. The name and color parameters are required. The color must be a valid [hexadecimal color code](http://www.color-hex.com/).
   *
   * @tags issues
   * @name IssuesCreateLabel
   * @summary Create a label
   * @request POST:/repos/{owner}/{repo}/labels
   */
  issuesCreateLabel = (
    owner: string,
    repo: string,
    data: IssuesCreateLabelPayload,
    params: RequestParams = {},
  ) =>
    this.http.request<IssuesCreateLabelData, BasicError | ValidationError>({
      path: `/repos/${owner}/${repo}/labels`,
      method: "POST",
      body: data,
      type: ContentType.Json,
      format: "json",
      ...params,
    });
  /**
   * @description Gets a label using the given name.
   *
   * @tags issues
   * @name IssuesGetLabel
   * @summary Get a label
   * @request GET:/repos/{owner}/{repo}/labels/{name}
   */
  issuesGetLabel = (
    owner: string,
    repo: string,
    name: string,
    params: RequestParams = {},
  ) =>
    this.http.request<IssuesGetLabelData, BasicError>({
      path: `/repos/${owner}/${repo}/labels/${name}`,
      method: "GET",
      format: "json",
      ...params,
    });
  /**
   * @description Updates a label using the given label name.
   *
   * @tags issues
   * @name IssuesUpdateLabel
   * @summary Update a label
   * @request PATCH:/repos/{owner}/{repo}/labels/{name}
   */
  issuesUpdateLabel = (
    owner: string,
    repo: string,
    name: string,
    data?: IssuesUpdateLabelPayload,
    params: RequestParams = {},
  ) =>
    this.http.request<IssuesUpdateLabelData, any>({
      path: `/repos/${owner}/${repo}/labels/${name}`,
      method: "PATCH",
      body: data,
      type: ContentType.Json,
      format: "json",
      ...params,
    });
  /**
   * @description Deletes a label using the given label name.
   *
   * @tags issues
   * @name IssuesDeleteLabel
   * @summary Delete a label
   * @request DELETE:/repos/{owner}/{repo}/labels/{name}
   */
  issuesDeleteLabel = (
    owner: string,
    repo: string,
    name: string,
    params: RequestParams = {},
  ) =>
    this.http.request<IssuesDeleteLabelData, any>({
      path: `/repos/${owner}/${repo}/labels/${name}`,
      method: "DELETE",
      ...params,
    });
  /**
   * @description Lists languages for the specified repository. The value shown for each language is the number of bytes of code written in that language.
   *
   * @tags repos
   * @name ReposListLanguages
   * @summary List repository languages
   * @request GET:/repos/{owner}/{repo}/languages
   */
  reposListLanguages = (
    owner: string,
    repo: string,
    params: RequestParams = {},
  ) =>
    this.http.request<ReposListLanguagesData, any>({
      path: `/repos/${owner}/${repo}/languages`,
      method: "GET",
      format: "json",
      ...params,
    });
  /**
   * @description Enables Git LFS for a repository. OAuth app tokens and personal access tokens (classic) need the `admin:enterprise` scope to use this endpoint.
   *
   * @tags repos
   * @name ReposEnableLfsForRepo
   * @summary Enable Git LFS for a repository
   * @request PUT:/repos/{owner}/{repo}/lfs
   */
  reposEnableLfsForRepo = (
    owner: string,
    repo: string,
    params: RequestParams = {},
  ) =>
    this.http.request<object, void>({
      path: `/repos/${owner}/${repo}/lfs`,
      method: "PUT",
      ...params,
    });
  /**
   * @description Disables Git LFS for a repository. OAuth app tokens and personal access tokens (classic) need the `admin:enterprise` scope to use this endpoint.
   *
   * @tags repos
   * @name ReposDisableLfsForRepo
   * @summary Disable Git LFS for a repository
   * @request DELETE:/repos/{owner}/{repo}/lfs
   */
  reposDisableLfsForRepo = (
    owner: string,
    repo: string,
    params: RequestParams = {},
  ) =>
    this.http.request<ReposDisableLfsForRepoData, any>({
      path: `/repos/${owner}/${repo}/lfs`,
      method: "DELETE",
      ...params,
    });
  /**
   * @description This method returns the contents of the repository's license file, if one is detected. This endpoint supports the following custom media types. For more information, see "[Media types](https://docs.github.com/enterprise-server@3.17/rest/using-the-rest-api/getting-started-with-the-rest-api#media-types)." - **`application/vnd.github.raw+json`**: Returns the raw contents of the license. - **`application/vnd.github.html+json`**: Returns the license contents in HTML. Markup languages are rendered to HTML using GitHub's open-source [Markup library](https://github.com/github/markup).
   *
   * @tags licenses
   * @name LicensesGetForRepo
   * @summary Get the license for a repository
   * @request GET:/repos/{owner}/{repo}/license
   */
  licensesGetForRepo = (
    { owner, repo, ...query }: LicensesGetForRepoParams,
    params: RequestParams = {},
  ) =>
    this.http.request<LicensesGetForRepoData, BasicError>({
      path: `/repos/${owner}/${repo}/license`,
      method: "GET",
      query: query,
      format: "json",
      ...params,
    });
  /**
   * @description Sync a branch of a forked repository to keep it up-to-date with the upstream repository.
   *
   * @tags repos
   * @name ReposMergeUpstream
   * @summary Sync a fork branch with the upstream repository
   * @request POST:/repos/{owner}/{repo}/merge-upstream
   */
  reposMergeUpstream = (
    owner: string,
    repo: string,
    data: ReposMergeUpstreamPayload,
    params: RequestParams = {},
  ) =>
    this.http.request<ReposMergeUpstreamData, void>({
      path: `/repos/${owner}/${repo}/merge-upstream`,
      method: "POST",
      body: data,
      type: ContentType.Json,
      format: "json",
      ...params,
    });
  /**
   * No description
   *
   * @tags repos
   * @name ReposMerge
   * @summary Merge a branch
   * @request POST:/repos/{owner}/{repo}/merges
   */
  reposMerge = (
    owner: string,
    repo: string,
    data: ReposMergePayload,
    params: RequestParams = {},
  ) =>
    this.http.request<ReposMergeData, BasicError | void | ValidationError>({
      path: `/repos/${owner}/${repo}/merges`,
      method: "POST",
      body: data,
      type: ContentType.Json,
      format: "json",
      ...params,
    });
  /**
   * @description Lists milestones for a repository.
   *
   * @tags issues
   * @name IssuesListMilestones
   * @summary List milestones
   * @request GET:/repos/{owner}/{repo}/milestones
   */
  issuesListMilestones = (
    { owner, repo, ...query }: IssuesListMilestonesParams,
    params: RequestParams = {},
  ) =>
    this.http.request<IssuesListMilestonesData, BasicError>({
      path: `/repos/${owner}/${repo}/milestones`,
      method: "GET",
      query: query,
      format: "json",
      ...params,
    });
  /**
   * @description Creates a milestone.
   *
   * @tags issues
   * @name IssuesCreateMilestone
   * @summary Create a milestone
   * @request POST:/repos/{owner}/{repo}/milestones
   */
  issuesCreateMilestone = (
    owner: string,
    repo: string,
    data: IssuesCreateMilestonePayload,
    params: RequestParams = {},
  ) =>
    this.http.request<IssuesCreateMilestoneData, BasicError | ValidationError>({
      path: `/repos/${owner}/${repo}/milestones`,
      method: "POST",
      body: data,
      type: ContentType.Json,
      format: "json",
      ...params,
    });
  /**
   * @description Gets a milestone using the given milestone number.
   *
   * @tags issues
   * @name IssuesGetMilestone
   * @summary Get a milestone
   * @request GET:/repos/{owner}/{repo}/milestones/{milestone_number}
   */
  issuesGetMilestone = (
    owner: string,
    repo: string,
    milestoneNumber: number,
    params: RequestParams = {},
  ) =>
    this.http.request<IssuesGetMilestoneData, BasicError>({
      path: `/repos/${owner}/${repo}/milestones/${milestoneNumber}`,
      method: "GET",
      format: "json",
      ...params,
    });
  /**
   * No description
   *
   * @tags issues
   * @name IssuesUpdateMilestone
   * @summary Update a milestone
   * @request PATCH:/repos/{owner}/{repo}/milestones/{milestone_number}
   */
  issuesUpdateMilestone = (
    owner: string,
    repo: string,
    milestoneNumber: number,
    data?: IssuesUpdateMilestonePayload,
    params: RequestParams = {},
  ) =>
    this.http.request<IssuesUpdateMilestoneData, any>({
      path: `/repos/${owner}/${repo}/milestones/${milestoneNumber}`,
      method: "PATCH",
      body: data,
      type: ContentType.Json,
      format: "json",
      ...params,
    });
  /**
   * @description Deletes a milestone using the given milestone number.
   *
   * @tags issues
   * @name IssuesDeleteMilestone
   * @summary Delete a milestone
   * @request DELETE:/repos/{owner}/{repo}/milestones/{milestone_number}
   */
  issuesDeleteMilestone = (
    owner: string,
    repo: string,
    milestoneNumber: number,
    params: RequestParams = {},
  ) =>
    this.http.request<IssuesDeleteMilestoneData, BasicError>({
      path: `/repos/${owner}/${repo}/milestones/${milestoneNumber}`,
      method: "DELETE",
      ...params,
    });
  /**
   * @description Lists labels for issues in a milestone.
   *
   * @tags issues
   * @name IssuesListLabelsForMilestone
   * @summary List labels for issues in a milestone
   * @request GET:/repos/{owner}/{repo}/milestones/{milestone_number}/labels
   */
  issuesListLabelsForMilestone = (
    {
      owner,
      repo,
      milestoneNumber,
      ...query
    }: IssuesListLabelsForMilestoneParams,
    params: RequestParams = {},
  ) =>
    this.http.request<IssuesListLabelsForMilestoneData, any>({
      path: `/repos/${owner}/${repo}/milestones/${milestoneNumber}/labels`,
      method: "GET",
      query: query,
      format: "json",
      ...params,
    });
  /**
   * @description Lists all notifications for the current user in the specified repository.
   *
   * @tags activity
   * @name ActivityListRepoNotificationsForAuthenticatedUser
   * @summary List repository notifications for the authenticated user
   * @request GET:/repos/{owner}/{repo}/notifications
   */
  activityListRepoNotificationsForAuthenticatedUser = (
    {
      owner,
      repo,
      ...query
    }: ActivityListRepoNotificationsForAuthenticatedUserParams,
    params: RequestParams = {},
  ) =>
    this.http.request<
      ActivityListRepoNotificationsForAuthenticatedUserData,
      any
    >({
      path: `/repos/${owner}/${repo}/notifications`,
      method: "GET",
      query: query,
      format: "json",
      ...params,
    });
  /**
   * @description Marks all notifications in a repository as "read" for the current user. If the number of notifications is too large to complete in one request, you will receive a `202 Accepted` status and GitHub Enterprise Server will run an asynchronous process to mark notifications as "read." To check whether any "unread" notifications remain, you can use the [List repository notifications for the authenticated user](https://docs.github.com/enterprise-server@3.17/rest/activity/notifications#list-repository-notifications-for-the-authenticated-user) endpoint and pass the query parameter `all=false`.
   *
   * @tags activity
   * @name ActivityMarkRepoNotificationsAsRead
   * @summary Mark repository notifications as read
   * @request PUT:/repos/{owner}/{repo}/notifications
   */
  activityMarkRepoNotificationsAsRead = (
    owner: string,
    repo: string,
    data?: ActivityMarkRepoNotificationsAsReadPayload,
    params: RequestParams = {},
  ) =>
    this.http.request<ActivityMarkRepoNotificationsAsReadData, any>({
      path: `/repos/${owner}/${repo}/notifications`,
      method: "PUT",
      body: data,
      type: ContentType.Json,
      format: "json",
      ...params,
    });
  /**
   * @description Gets information about a GitHub Enterprise Server Pages site. OAuth app tokens and personal access tokens (classic) need the `repo` scope to use this endpoint.
   *
   * @tags repos
   * @name ReposGetPages
   * @summary Get a GitHub Enterprise Server Pages site
   * @request GET:/repos/{owner}/{repo}/pages
   */
  reposGetPages = (owner: string, repo: string, params: RequestParams = {}) =>
    this.http.request<ReposGetPagesData, BasicError>({
      path: `/repos/${owner}/${repo}/pages`,
      method: "GET",
      format: "json",
      ...params,
    });
  /**
   * @description Configures a GitHub Enterprise Server Pages site. For more information, see "[About GitHub Pages](/github/working-with-github-pages/about-github-pages)." The authenticated user must be a repository administrator, maintainer, or have the 'manage GitHub Pages settings' permission. OAuth app tokens and personal access tokens (classic) need the `repo` scope to use this endpoint.
   *
   * @tags repos
   * @name ReposCreatePagesSite
   * @summary Create a GitHub Enterprise Server Pages site
   * @request POST:/repos/{owner}/{repo}/pages
   */
  reposCreatePagesSite = (
    owner: string,
    repo: string,
    data: ReposCreatePagesSitePayload,
    params: RequestParams = {},
  ) =>
    this.http.request<ReposCreatePagesSiteData, BasicError | ValidationError>({
      path: `/repos/${owner}/${repo}/pages`,
      method: "POST",
      body: data,
      type: ContentType.Json,
      format: "json",
      ...params,
    });
  /**
   * @description Updates information for a GitHub Enterprise Server Pages site. For more information, see "[About GitHub Pages](/github/working-with-github-pages/about-github-pages). The authenticated user must be a repository administrator, maintainer, or have the 'manage GitHub Pages settings' permission. OAuth app tokens and personal access tokens (classic) need the `repo` scope to use this endpoint.
   *
   * @tags repos
   * @name ReposUpdateInformationAboutPagesSite
   * @summary Update information about a GitHub Enterprise Server Pages site
   * @request PUT:/repos/{owner}/{repo}/pages
   */
  reposUpdateInformationAboutPagesSite = (
    owner: string,
    repo: string,
    data: ReposUpdateInformationAboutPagesSitePayload,
    params: RequestParams = {},
  ) =>
    this.http.request<
      ReposUpdateInformationAboutPagesSiteData,
      BasicError | ValidationError
    >({
      path: `/repos/${owner}/${repo}/pages`,
      method: "PUT",
      body: data,
      type: ContentType.Json,
      ...params,
    });
  /**
   * @description Deletes a GitHub Enterprise Server Pages site. For more information, see "[About GitHub Pages](/github/working-with-github-pages/about-github-pages). The authenticated user must be a repository administrator, maintainer, or have the 'manage GitHub Pages settings' permission. OAuth app tokens and personal access tokens (classic) need the `repo` scope to use this endpoint.
   *
   * @tags repos
   * @name ReposDeletePagesSite
   * @summary Delete a GitHub Enterprise Server Pages site
   * @request DELETE:/repos/{owner}/{repo}/pages
   */
  reposDeletePagesSite = (
    owner: string,
    repo: string,
    params: RequestParams = {},
  ) =>
    this.http.request<ReposDeletePagesSiteData, BasicError | ValidationError>({
      path: `/repos/${owner}/${repo}/pages`,
      method: "DELETE",
      ...params,
    });
  /**
   * @description Lists builts of a GitHub Enterprise Server Pages site. OAuth app tokens and personal access tokens (classic) need the `repo` scope to use this endpoint.
   *
   * @tags repos
   * @name ReposListPagesBuilds
   * @summary List GitHub Enterprise Server Pages builds
   * @request GET:/repos/{owner}/{repo}/pages/builds
   */
  reposListPagesBuilds = (
    { owner, repo, ...query }: ReposListPagesBuildsParams,
    params: RequestParams = {},
  ) =>
    this.http.request<ReposListPagesBuildsData, any>({
      path: `/repos/${owner}/${repo}/pages/builds`,
      method: "GET",
      query: query,
      format: "json",
      ...params,
    });
  /**
   * @description You can request that your site be built from the latest revision on the default branch. This has the same effect as pushing a commit to your default branch, but does not require an additional commit. Manually triggering page builds can be helpful when diagnosing build warnings and failures. Build requests are limited to one concurrent build per repository and one concurrent build per requester. If you request a build while another is still in progress, the second request will be queued until the first completes.
   *
   * @tags repos
   * @name ReposRequestPagesBuild
   * @summary Request a GitHub Enterprise Server Pages build
   * @request POST:/repos/{owner}/{repo}/pages/builds
   */
  reposRequestPagesBuild = (
    owner: string,
    repo: string,
    params: RequestParams = {},
  ) =>
    this.http.request<ReposRequestPagesBuildData, any>({
      path: `/repos/${owner}/${repo}/pages/builds`,
      method: "POST",
      format: "json",
      ...params,
    });
  /**
   * @description Gets information about the single most recent build of a GitHub Enterprise Server Pages site. OAuth app tokens and personal access tokens (classic) need the `repo` scope to use this endpoint.
   *
   * @tags repos
   * @name ReposGetLatestPagesBuild
   * @summary Get latest Pages build
   * @request GET:/repos/{owner}/{repo}/pages/builds/latest
   */
  reposGetLatestPagesBuild = (
    owner: string,
    repo: string,
    params: RequestParams = {},
  ) =>
    this.http.request<ReposGetLatestPagesBuildData, any>({
      path: `/repos/${owner}/${repo}/pages/builds/latest`,
      method: "GET",
      format: "json",
      ...params,
    });
  /**
   * @description Gets information about a GitHub Enterprise Server Pages build. OAuth app tokens and personal access tokens (classic) need the `repo` scope to use this endpoint.
   *
   * @tags repos
   * @name ReposGetPagesBuild
   * @summary Get GitHub Enterprise Server Pages build
   * @request GET:/repos/{owner}/{repo}/pages/builds/{build_id}
   */
  reposGetPagesBuild = (
    owner: string,
    repo: string,
    buildId: number,
    params: RequestParams = {},
  ) =>
    this.http.request<ReposGetPagesBuildData, any>({
      path: `/repos/${owner}/${repo}/pages/builds/${buildId}`,
      method: "GET",
      format: "json",
      ...params,
    });
  /**
   * @description Create a GitHub Pages deployment for a repository. The authenticated user must have write permission to the repository.
   *
   * @tags repos
   * @name ReposCreatePagesDeployment
   * @summary Create a GitHub Pages deployment
   * @request POST:/repos/{owner}/{repo}/pages/deployments
   */
  reposCreatePagesDeployment = (
    owner: string,
    repo: string,
    data: ReposCreatePagesDeploymentPayload,
    params: RequestParams = {},
  ) =>
    this.http.request<
      ReposCreatePagesDeploymentData,
      BasicError | ValidationError
    >({
      path: `/repos/${owner}/${repo}/pages/deployments`,
      method: "POST",
      body: data,
      type: ContentType.Json,
      format: "json",
      ...params,
    });
  /**
   * @description Gets the current status of a GitHub Pages deployment. The authenticated user must have read permission for the GitHub Pages site.
   *
   * @tags repos
   * @name ReposGetPagesDeployment
   * @summary Get the status of a GitHub Pages deployment
   * @request GET:/repos/{owner}/{repo}/pages/deployments/{pages_deployment_id}
   */
  reposGetPagesDeployment = (
    owner: string,
    repo: string,
    pagesDeploymentId: number | string,
    params: RequestParams = {},
  ) =>
    this.http.request<ReposGetPagesDeploymentData, BasicError>({
      path: `/repos/${owner}/${repo}/pages/deployments/${pagesDeploymentId}`,
      method: "GET",
      format: "json",
      ...params,
    });
  /**
   * @description Cancels a GitHub Pages deployment. The authenticated user must have write permissions for the GitHub Pages site.
   *
   * @tags repos
   * @name ReposCancelPagesDeployment
   * @summary Cancel a GitHub Pages deployment
   * @request POST:/repos/{owner}/{repo}/pages/deployments/{pages_deployment_id}/cancel
   */
  reposCancelPagesDeployment = (
    owner: string,
    repo: string,
    pagesDeploymentId: number | string,
    params: RequestParams = {},
  ) =>
    this.http.request<any, BasicError>({
      path: `/repos/${owner}/${repo}/pages/deployments/${pagesDeploymentId}/cancel`,
      method: "POST",
      ...params,
    });
  /**
   * @description List all pre-receive hooks that are enabled or testing for this repository as well as any disabled hooks that are allowed to be enabled at the repository level. Pre-receive hooks that are disabled at a higher level and are not configurable will not be listed.
   *
   * @tags enterprise-admin
   * @name EnterpriseAdminListPreReceiveHooksForRepo
   * @summary List pre-receive hooks for a repository
   * @request GET:/repos/{owner}/{repo}/pre-receive-hooks
   */
  enterpriseAdminListPreReceiveHooksForRepo = (
    { owner, repo, ...query }: EnterpriseAdminListPreReceiveHooksForRepoParams,
    params: RequestParams = {},
  ) =>
    this.http.request<EnterpriseAdminListPreReceiveHooksForRepoData, any>({
      path: `/repos/${owner}/${repo}/pre-receive-hooks`,
      method: "GET",
      query: query,
      format: "json",
      ...params,
    });
  /**
   * No description
   *
   * @tags enterprise-admin
   * @name EnterpriseAdminGetPreReceiveHookForRepo
   * @summary Get a pre-receive hook for a repository
   * @request GET:/repos/{owner}/{repo}/pre-receive-hooks/{pre_receive_hook_id}
   */
  enterpriseAdminGetPreReceiveHookForRepo = (
    owner: string,
    repo: string,
    preReceiveHookId: number,
    params: RequestParams = {},
  ) =>
    this.http.request<EnterpriseAdminGetPreReceiveHookForRepoData, any>({
      path: `/repos/${owner}/${repo}/pre-receive-hooks/${preReceiveHookId}`,
      method: "GET",
      format: "json",
      ...params,
    });
  /**
   * @description For pre-receive hooks which are allowed to be configured at the repo level, you can set `enforcement`
   *
   * @tags enterprise-admin
   * @name EnterpriseAdminUpdatePreReceiveHookEnforcementForRepo
   * @summary Update pre-receive hook enforcement for a repository
   * @request PATCH:/repos/{owner}/{repo}/pre-receive-hooks/{pre_receive_hook_id}
   */
  enterpriseAdminUpdatePreReceiveHookEnforcementForRepo = (
    owner: string,
    repo: string,
    preReceiveHookId: number,
    data?: EnterpriseAdminUpdatePreReceiveHookEnforcementForRepoPayload,
    params: RequestParams = {},
  ) =>
    this.http.request<
      EnterpriseAdminUpdatePreReceiveHookEnforcementForRepoData,
      any
    >({
      path: `/repos/${owner}/${repo}/pre-receive-hooks/${preReceiveHookId}`,
      method: "PATCH",
      body: data,
      type: ContentType.Json,
      format: "json",
      ...params,
    });
  /**
   * @description Deletes any overridden enforcement on this repository for the specified hook. Responds with effective values inherited from owner and/or global level.
   *
   * @tags enterprise-admin
   * @name EnterpriseAdminRemovePreReceiveHookEnforcementForRepo
   * @summary Remove pre-receive hook enforcement for a repository
   * @request DELETE:/repos/{owner}/{repo}/pre-receive-hooks/{pre_receive_hook_id}
   */
  enterpriseAdminRemovePreReceiveHookEnforcementForRepo = (
    owner: string,
    repo: string,
    preReceiveHookId: number,
    params: RequestParams = {},
  ) =>
    this.http.request<
      EnterpriseAdminRemovePreReceiveHookEnforcementForRepoData,
      any
    >({
      path: `/repos/${owner}/${repo}/pre-receive-hooks/${preReceiveHookId}`,
      method: "DELETE",
      format: "json",
      ...params,
    });
  /**
   * @description > [!WARNING] > **Closing down notice:** Projects (classic) is being deprecated in favor of the new Projects experience. > See the [changelog](https://github.blog/changelog/2024-05-23-sunset-notice-projects-classic/) for more information.
   *
   * @tags projects
   * @name ProjectsListForRepo
   * @summary List repository projects
   * @request GET:/repos/{owner}/{repo}/projects
   * @deprecated
   */
  projectsListForRepo = (
    { owner, repo, ...query }: ProjectsListForRepoParams,
    params: RequestParams = {},
  ) =>
    this.http.request<
      ProjectsListForRepoData,
      BasicError | ValidationErrorSimple
    >({
      path: `/repos/${owner}/${repo}/projects`,
      method: "GET",
      query: query,
      format: "json",
      ...params,
    });
  /**
   * @description > [!WARNING] > **Closing down notice:** Projects (classic) is being deprecated in favor of the new Projects experience. > See the [changelog](https://github.blog/changelog/2024-05-23-sunset-notice-projects-classic/) for more information.
   *
   * @tags projects
   * @name ProjectsCreateForRepo
   * @summary Create a repository project
   * @request POST:/repos/{owner}/{repo}/projects
   * @deprecated
   */
  projectsCreateForRepo = (
    owner: string,
    repo: string,
    data: ProjectsCreateForRepoPayload,
    params: RequestParams = {},
  ) =>
    this.http.request<
      ProjectsCreateForRepoData,
      BasicError | ValidationErrorSimple
    >({
      path: `/repos/${owner}/${repo}/projects`,
      method: "POST",
      body: data,
      type: ContentType.Json,
      format: "json",
      ...params,
    });
  /**
   * @description Gets all custom property values that are set for a repository. Users with read access to the repository can use this endpoint.
   *
   * @tags repos
   * @name ReposGetCustomPropertiesValues
   * @summary Get all custom property values for a repository
   * @request GET:/repos/{owner}/{repo}/properties/values
   */
  reposGetCustomPropertiesValues = (
    owner: string,
    repo: string,
    params: RequestParams = {},
  ) =>
    this.http.request<ReposGetCustomPropertiesValuesData, BasicError>({
      path: `/repos/${owner}/${repo}/properties/values`,
      method: "GET",
      format: "json",
      ...params,
    });
  /**
   * @description Create new or update existing custom property values for a repository. Using a value of `null` for a custom property will remove or 'unset' the property value from the repository. Repository admins and other users with the repository-level "edit custom property values" fine-grained permission can use this endpoint.
   *
   * @tags repos
   * @name ReposCreateOrUpdateCustomPropertiesValues
   * @summary Create or update custom property values for a repository
   * @request PATCH:/repos/{owner}/{repo}/properties/values
   */
  reposCreateOrUpdateCustomPropertiesValues = (
    owner: string,
    repo: string,
    data: ReposCreateOrUpdateCustomPropertiesValuesPayload,
    params: RequestParams = {},
  ) =>
    this.http.request<
      ReposCreateOrUpdateCustomPropertiesValuesData,
      BasicError | ValidationError
    >({
      path: `/repos/${owner}/${repo}/properties/values`,
      method: "PATCH",
      body: data,
      type: ContentType.Json,
      ...params,
    });
  /**
   * @description Lists pull requests in a specified repository. Draft pull requests are available in public repositories with GitHub Free and GitHub Free for organizations, GitHub Pro, and legacy per-repository billing plans, and in public and private repositories with GitHub Team and GitHub Enterprise Cloud. For more information, see [GitHub's products](https://docs.github.com/enterprise-server@3.17/github/getting-started-with-github/githubs-products) in the GitHub Help documentation. This endpoint supports the following custom media types. For more information, see "[Media types](https://docs.github.com/enterprise-server@3.17/rest/using-the-rest-api/getting-started-with-the-rest-api#media-types)." - **`application/vnd.github.raw+json`**: Returns the raw markdown body. Response will include `body`. This is the default if you do not pass any specific media type. - **`application/vnd.github.text+json`**: Returns a text only representation of the markdown body. Response will include `body_text`. - **`application/vnd.github.html+json`**: Returns HTML rendered from the body's markdown. Response will include `body_html`. - **`application/vnd.github.full+json`**: Returns raw, text, and HTML representations. Response will include `body`, `body_text`, and `body_html`.
   *
   * @tags pulls
   * @name PullsList
   * @summary List pull requests
   * @request GET:/repos/{owner}/{repo}/pulls
   */
  pullsList = (
    { owner, repo, ...query }: PullsListParams,
    params: RequestParams = {},
  ) =>
    this.http.request<PullsListData, ValidationError>({
      path: `/repos/${owner}/${repo}/pulls`,
      method: "GET",
      query: query,
      format: "json",
      ...params,
    });
  /**
   * @description Draft pull requests are available in public repositories with GitHub Free and GitHub Free for organizations, GitHub Pro, and legacy per-repository billing plans, and in public and private repositories with GitHub Team and GitHub Enterprise Cloud. For more information, see [GitHub's products](https://docs.github.com/enterprise-server@3.17/github/getting-started-with-github/githubs-products) in the GitHub Help documentation. To open or update a pull request in a public repository, you must have write access to the head or the source branch. For organization-owned repositories, you must be a member of the organization that owns the repository to open or update a pull request. This endpoint triggers [notifications](https://docs.github.com/enterprise-server@3.17/github/managing-subscriptions-and-notifications-on-github/about-notifications). Creating content too quickly using this endpoint may result in secondary rate limiting. For more information, see "[Rate limits for the API](https://docs.github.com/enterprise-server@3.17/rest/using-the-rest-api/rate-limits-for-the-rest-api#about-secondary-rate-limits)" and "[Best practices for using the REST API](https://docs.github.com/enterprise-server@3.17/rest/guides/best-practices-for-using-the-rest-api)." This endpoint supports the following custom media types. For more information, see "[Media types](https://docs.github.com/enterprise-server@3.17/rest/using-the-rest-api/getting-started-with-the-rest-api#media-types)." - **`application/vnd.github.raw+json`**: Returns the raw markdown body. Response will include `body`. This is the default if you do not pass any specific media type. - **`application/vnd.github.text+json`**: Returns a text only representation of the markdown body. Response will include `body_text`. - **`application/vnd.github.html+json`**: Returns HTML rendered from the body's markdown. Response will include `body_html`. - **`application/vnd.github.full+json`**: Returns raw, text, and HTML representations. Response will include `body`, `body_text`, and `body_html`.
   *
   * @tags pulls
   * @name PullsCreate
   * @summary Create a pull request
   * @request POST:/repos/{owner}/{repo}/pulls
   */
  pullsCreate = (
    owner: string,
    repo: string,
    data: PullsCreatePayload,
    params: RequestParams = {},
  ) =>
    this.http.request<PullsCreateData, BasicError | ValidationError>({
      path: `/repos/${owner}/${repo}/pulls`,
      method: "POST",
      body: data,
      type: ContentType.Json,
      format: "json",
      ...params,
    });
  /**
   * @description Lists review comments for all pull requests in a repository. By default, review comments are in ascending order by ID. This endpoint supports the following custom media types. For more information, see "[Media types](https://docs.github.com/enterprise-server@3.17/rest/using-the-rest-api/getting-started-with-the-rest-api#media-types)." - **`application/vnd.github-commitcomment.raw+json`**: Returns the raw markdown body. Response will include `body`. This is the default if you do not pass any specific media type. - **`application/vnd.github-commitcomment.text+json`**: Returns a text only representation of the markdown body. Response will include `body_text`. - **`application/vnd.github-commitcomment.html+json`**: Returns HTML rendered from the body's markdown. Response will include `body_html`. - **`application/vnd.github-commitcomment.full+json`**: Returns raw, text, and HTML representations. Response will include `body`, `body_text`, and `body_html`.
   *
   * @tags pulls
   * @name PullsListReviewCommentsForRepo
   * @summary List review comments in a repository
   * @request GET:/repos/{owner}/{repo}/pulls/comments
   */
  pullsListReviewCommentsForRepo = (
    { owner, repo, ...query }: PullsListReviewCommentsForRepoParams,
    params: RequestParams = {},
  ) =>
    this.http.request<PullsListReviewCommentsForRepoData, any>({
      path: `/repos/${owner}/${repo}/pulls/comments`,
      method: "GET",
      query: query,
      format: "json",
      ...params,
    });
  /**
   * @description Provides details for a specified review comment. This endpoint supports the following custom media types. For more information, see "[Media types](https://docs.github.com/enterprise-server@3.17/rest/using-the-rest-api/getting-started-with-the-rest-api#media-types)." - **`application/vnd.github-commitcomment.raw+json`**: Returns the raw markdown body. Response will include `body`. This is the default if you do not pass any specific media type. - **`application/vnd.github-commitcomment.text+json`**: Returns a text only representation of the markdown body. Response will include `body_text`. - **`application/vnd.github-commitcomment.html+json`**: Returns HTML rendered from the body's markdown. Response will include `body_html`. - **`application/vnd.github-commitcomment.full+json`**: Returns raw, text, and HTML representations. Response will include `body`, `body_text`, and `body_html`.
   *
   * @tags pulls
   * @name PullsGetReviewComment
   * @summary Get a review comment for a pull request
   * @request GET:/repos/{owner}/{repo}/pulls/comments/{comment_id}
   */
  pullsGetReviewComment = (
    owner: string,
    repo: string,
    commentId: number,
    params: RequestParams = {},
  ) =>
    this.http.request<PullsGetReviewCommentData, BasicError>({
      path: `/repos/${owner}/${repo}/pulls/comments/${commentId}`,
      method: "GET",
      format: "json",
      ...params,
    });
  /**
   * @description Edits the content of a specified review comment. This endpoint supports the following custom media types. For more information, see "[Media types](https://docs.github.com/enterprise-server@3.17/rest/using-the-rest-api/getting-started-with-the-rest-api#media-types)." - **`application/vnd.github-commitcomment.raw+json`**: Returns the raw markdown body. Response will include `body`. This is the default if you do not pass any specific media type. - **`application/vnd.github-commitcomment.text+json`**: Returns a text only representation of the markdown body. Response will include `body_text`. - **`application/vnd.github-commitcomment.html+json`**: Returns HTML rendered from the body's markdown. Response will include `body_html`. - **`application/vnd.github-commitcomment.full+json`**: Returns raw, text, and HTML representations. Response will include `body`, `body_text`, and `body_html`.
   *
   * @tags pulls
   * @name PullsUpdateReviewComment
   * @summary Update a review comment for a pull request
   * @request PATCH:/repos/{owner}/{repo}/pulls/comments/{comment_id}
   */
  pullsUpdateReviewComment = (
    owner: string,
    repo: string,
    commentId: number,
    data: PullsUpdateReviewCommentPayload,
    params: RequestParams = {},
  ) =>
    this.http.request<PullsUpdateReviewCommentData, any>({
      path: `/repos/${owner}/${repo}/pulls/comments/${commentId}`,
      method: "PATCH",
      body: data,
      type: ContentType.Json,
      format: "json",
      ...params,
    });
  /**
   * @description Deletes a review comment.
   *
   * @tags pulls
   * @name PullsDeleteReviewComment
   * @summary Delete a review comment for a pull request
   * @request DELETE:/repos/{owner}/{repo}/pulls/comments/{comment_id}
   */
  pullsDeleteReviewComment = (
    owner: string,
    repo: string,
    commentId: number,
    params: RequestParams = {},
  ) =>
    this.http.request<PullsDeleteReviewCommentData, BasicError>({
      path: `/repos/${owner}/${repo}/pulls/comments/${commentId}`,
      method: "DELETE",
      ...params,
    });
  /**
   * @description List the reactions to a [pull request review comment](https://docs.github.com/enterprise-server@3.17/rest/pulls/comments#get-a-review-comment-for-a-pull-request).
   *
   * @tags reactions
   * @name ReactionsListForPullRequestReviewComment
   * @summary List reactions for a pull request review comment
   * @request GET:/repos/{owner}/{repo}/pulls/comments/{comment_id}/reactions
   */
  reactionsListForPullRequestReviewComment = (
    {
      owner,
      repo,
      commentId,
      ...query
    }: ReactionsListForPullRequestReviewCommentParams,
    params: RequestParams = {},
  ) =>
    this.http.request<ReactionsListForPullRequestReviewCommentData, BasicError>(
      {
        path: `/repos/${owner}/${repo}/pulls/comments/${commentId}/reactions`,
        method: "GET",
        query: query,
        format: "json",
        ...params,
      },
    );
  /**
   * @description Create a reaction to a [pull request review comment](https://docs.github.com/enterprise-server@3.17/rest/pulls/comments#get-a-review-comment-for-a-pull-request). A response with an HTTP `200` status means that you already added the reaction type to this pull request review comment.
   *
   * @tags reactions
   * @name ReactionsCreateForPullRequestReviewComment
   * @summary Create reaction for a pull request review comment
   * @request POST:/repos/{owner}/{repo}/pulls/comments/{comment_id}/reactions
   */
  reactionsCreateForPullRequestReviewComment = (
    owner: string,
    repo: string,
    commentId: number,
    data: ReactionsCreateForPullRequestReviewCommentPayload,
    params: RequestParams = {},
  ) =>
    this.http.request<
      ReactionsCreateForPullRequestReviewCommentData,
      ValidationError
    >({
      path: `/repos/${owner}/${repo}/pulls/comments/${commentId}/reactions`,
      method: "POST",
      body: data,
      type: ContentType.Json,
      format: "json",
      ...params,
    });
  /**
   * @description > [!NOTE] > You can also specify a repository by `repository_id` using the route `DELETE /repositories/:repository_id/pulls/comments/:comment_id/reactions/:reaction_id.` Delete a reaction to a [pull request review comment](https://docs.github.com/enterprise-server@3.17/rest/pulls/comments#get-a-review-comment-for-a-pull-request).
   *
   * @tags reactions
   * @name ReactionsDeleteForPullRequestComment
   * @summary Delete a pull request comment reaction
   * @request DELETE:/repos/{owner}/{repo}/pulls/comments/{comment_id}/reactions/{reaction_id}
   */
  reactionsDeleteForPullRequestComment = (
    owner: string,
    repo: string,
    commentId: number,
    reactionId: number,
    params: RequestParams = {},
  ) =>
    this.http.request<ReactionsDeleteForPullRequestCommentData, any>({
      path: `/repos/${owner}/${repo}/pulls/comments/${commentId}/reactions/${reactionId}`,
      method: "DELETE",
      ...params,
    });
  /**
   * @description Draft pull requests are available in public repositories with GitHub Free and GitHub Free for organizations, GitHub Pro, and legacy per-repository billing plans, and in public and private repositories with GitHub Team and GitHub Enterprise Cloud. For more information, see [GitHub's products](https://docs.github.com/enterprise-server@3.17/github/getting-started-with-github/githubs-products) in the GitHub Help documentation. Lists details of a pull request by providing its number. When you get, [create](https://docs.github.com/enterprise-server@3.17/rest/pulls/pulls/#create-a-pull-request), or [edit](https://docs.github.com/enterprise-server@3.17/rest/pulls/pulls#update-a-pull-request) a pull request, GitHub Enterprise Server creates a merge commit to test whether the pull request can be automatically merged into the base branch. This test commit is not added to the base branch or the head branch. You can review the status of the test commit using the `mergeable` key. For more information, see "[Checking mergeability of pull requests](https://docs.github.com/enterprise-server@3.17/rest/guides/getting-started-with-the-git-database-api#checking-mergeability-of-pull-requests)". The value of the `mergeable` attribute can be `true`, `false`, or `null`. If the value is `null`, then GitHub Enterprise Server has started a background job to compute the mergeability. After giving the job time to complete, resubmit the request. When the job finishes, you will see a non-`null` value for the `mergeable` attribute in the response. If `mergeable` is `true`, then `merge_commit_sha` will be the SHA of the _test_ merge commit. The value of the `merge_commit_sha` attribute changes depending on the state of the pull request. Before merging a pull request, the `merge_commit_sha` attribute holds the SHA of the _test_ merge commit. After merging a pull request, the `merge_commit_sha` attribute changes depending on how you merged the pull request: *   If merged as a [merge commit](https://docs.github.com/enterprise-server@3.17/articles/about-merge-methods-on-github/), `merge_commit_sha` represents the SHA of the merge commit. *   If merged via a [squash](https://docs.github.com/enterprise-server@3.17/articles/about-merge-methods-on-github/#squashing-your-merge-commits), `merge_commit_sha` represents the SHA of the squashed commit on the base branch. *   If [rebased](https://docs.github.com/enterprise-server@3.17/articles/about-merge-methods-on-github/#rebasing-and-merging-your-commits), `merge_commit_sha` represents the commit that the base branch was updated to. Pass the appropriate [media type](https://docs.github.com/enterprise-server@3.17/rest/using-the-rest-api/getting-started-with-the-rest-api#media-types) to fetch diff and patch formats. This endpoint supports the following custom media types. For more information, see "[Media types](https://docs.github.com/enterprise-server@3.17/rest/using-the-rest-api/getting-started-with-the-rest-api#media-types)." - **`application/vnd.github.raw+json`**: Returns the raw markdown body. Response will include `body`. This is the default if you do not pass any specific media type. - **`application/vnd.github.text+json`**: Returns a text only representation of the markdown body. Response will include `body_text`. - **`application/vnd.github.html+json`**: Returns HTML rendered from the body's markdown. Response will include `body_html`. - **`application/vnd.github.full+json`**: Returns raw, text, and HTML representations. Response will include `body`, `body_text`, and `body_html`. - **`application/vnd.github.diff`**: For more information, see "[git-diff](https://git-scm.com/docs/git-diff)" in the Git documentation. If a diff is corrupt, contact us through the [GitHub Support portal](https://support.github.com/). Include the repository name and pull request ID in your message.
   *
   * @tags pulls
   * @name PullsGet
   * @summary Get a pull request
   * @request GET:/repos/{owner}/{repo}/pulls/{pull_number}
   */
  pullsGet = (
    owner: string,
    repo: string,
    pullNumber: number,
    params: RequestParams = {},
  ) =>
    this.http.request<
      PullsGetData,
      | BasicError
      | {
          code?: string;
          message?: string;
          documentation_url?: string;
        }
    >({
      path: `/repos/${owner}/${repo}/pulls/${pullNumber}`,
      method: "GET",
      format: "json",
      ...params,
    });
  /**
   * @description Draft pull requests are available in public repositories with GitHub Free and GitHub Free for organizations, GitHub Pro, and legacy per-repository billing plans, and in public and private repositories with GitHub Team and GitHub Enterprise Cloud. For more information, see [GitHub's products](https://docs.github.com/enterprise-server@3.17/github/getting-started-with-github/githubs-products) in the GitHub Help documentation. To open or update a pull request in a public repository, you must have write access to the head or the source branch. For organization-owned repositories, you must be a member of the organization that owns the repository to open or update a pull request. This endpoint supports the following custom media types. For more information, see "[Media types](https://docs.github.com/enterprise-server@3.17/rest/using-the-rest-api/getting-started-with-the-rest-api#media-types)." - **`application/vnd.github.raw+json`**: Returns the raw markdown body. Response will include `body`. This is the default if you do not pass any specific media type. - **`application/vnd.github.text+json`**: Returns a text only representation of the markdown body. Response will include `body_text`. - **`application/vnd.github.html+json`**: Returns HTML rendered from the body's markdown. Response will include `body_html`. - **`application/vnd.github.full+json`**: Returns raw, text, and HTML representations. Response will include `body`, `body_text`, and `body_html`.
   *
   * @tags pulls
   * @name PullsUpdate
   * @summary Update a pull request
   * @request PATCH:/repos/{owner}/{repo}/pulls/{pull_number}
   */
  pullsUpdate = (
    owner: string,
    repo: string,
    pullNumber: number,
    data?: PullsUpdatePayload,
    params: RequestParams = {},
  ) =>
    this.http.request<PullsUpdateData, BasicError | ValidationError>({
      path: `/repos/${owner}/${repo}/pulls/${pullNumber}`,
      method: "PATCH",
      body: data,
      type: ContentType.Json,
      format: "json",
      ...params,
    });
  /**
   * @description Lists all review comments for a specified pull request. By default, review comments are in ascending order by ID. This endpoint supports the following custom media types. For more information, see "[Media types](https://docs.github.com/enterprise-server@3.17/rest/using-the-rest-api/getting-started-with-the-rest-api#media-types)." - **`application/vnd.github-commitcomment.raw+json`**: Returns the raw markdown body. Response will include `body`. This is the default if you do not pass any specific media type. - **`application/vnd.github-commitcomment.text+json`**: Returns a text only representation of the markdown body. Response will include `body_text`. - **`application/vnd.github-commitcomment.html+json`**: Returns HTML rendered from the body's markdown. Response will include `body_html`. - **`application/vnd.github-commitcomment.full+json`**: Returns raw, text, and HTML representations. Response will include `body`, `body_text`, and `body_html`.
   *
   * @tags pulls
   * @name PullsListReviewComments
   * @summary List review comments on a pull request
   * @request GET:/repos/{owner}/{repo}/pulls/{pull_number}/comments
   */
  pullsListReviewComments = (
    { owner, repo, pullNumber, ...query }: PullsListReviewCommentsParams,
    params: RequestParams = {},
  ) =>
    this.http.request<PullsListReviewCommentsData, any>({
      path: `/repos/${owner}/${repo}/pulls/${pullNumber}/comments`,
      method: "GET",
      query: query,
      format: "json",
      ...params,
    });
  /**
   * @description Creates a review comment on the diff of a specified pull request. To add a regular comment to a pull request timeline, see "[Create an issue comment](https://docs.github.com/enterprise-server@3.17/rest/issues/comments#create-an-issue-comment)." If your comment applies to more than one line in the pull request diff, you should use the parameters `line`, `side`, and optionally `start_line` and `start_side` in your request. The `position` parameter is closing down. If you use `position`, the `line`, `side`, `start_line`, and `start_side` parameters are not required. This endpoint triggers [notifications](https://docs.github.com/enterprise-server@3.17/github/managing-subscriptions-and-notifications-on-github/about-notifications). Creating content too quickly using this endpoint may result in secondary rate limiting. For more information, see "[Rate limits for the API](https://docs.github.com/enterprise-server@3.17/rest/using-the-rest-api/rate-limits-for-the-rest-api#about-secondary-rate-limits)" and "[Best practices for using the REST API](https://docs.github.com/enterprise-server@3.17/rest/guides/best-practices-for-using-the-rest-api)." This endpoint supports the following custom media types. For more information, see "[Media types](https://docs.github.com/enterprise-server@3.17/rest/using-the-rest-api/getting-started-with-the-rest-api#media-types)." - **`application/vnd.github-commitcomment.raw+json`**: Returns the raw markdown body. Response will include `body`. This is the default if you do not pass any specific media type. - **`application/vnd.github-commitcomment.text+json`**: Returns a text only representation of the markdown body. Response will include `body_text`. - **`application/vnd.github-commitcomment.html+json`**: Returns HTML rendered from the body's markdown. Response will include `body_html`. - **`application/vnd.github-commitcomment.full+json`**: Returns raw, text, and HTML representations. Response will include `body`, `body_text`, and `body_html`.
   *
   * @tags pulls
   * @name PullsCreateReviewComment
   * @summary Create a review comment for a pull request
   * @request POST:/repos/{owner}/{repo}/pulls/{pull_number}/comments
   */
  pullsCreateReviewComment = (
    owner: string,
    repo: string,
    pullNumber: number,
    data: PullsCreateReviewCommentPayload,
    params: RequestParams = {},
  ) =>
    this.http.request<
      PullsCreateReviewCommentData,
      BasicError | ValidationError
    >({
      path: `/repos/${owner}/${repo}/pulls/${pullNumber}/comments`,
      method: "POST",
      body: data,
      type: ContentType.Json,
      format: "json",
      ...params,
    });
  /**
   * @description Creates a reply to a review comment for a pull request. For the `comment_id`, provide the ID of the review comment you are replying to. This must be the ID of a _top-level review comment_, not a reply to that comment. Replies to replies are not supported. This endpoint triggers [notifications](https://docs.github.com/enterprise-server@3.17/github/managing-subscriptions-and-notifications-on-github/about-notifications). Creating content too quickly using this endpoint may result in secondary rate limiting. For more information, see "[Rate limits for the API](https://docs.github.com/enterprise-server@3.17/rest/using-the-rest-api/rate-limits-for-the-rest-api#about-secondary-rate-limits)" and "[Best practices for using the REST API](https://docs.github.com/enterprise-server@3.17/rest/guides/best-practices-for-using-the-rest-api)." This endpoint supports the following custom media types. For more information, see "[Media types](https://docs.github.com/enterprise-server@3.17/rest/using-the-rest-api/getting-started-with-the-rest-api#media-types)." - **`application/vnd.github-commitcomment.raw+json`**: Returns the raw markdown body. Response will include `body`. This is the default if you do not pass any specific media type. - **`application/vnd.github-commitcomment.text+json`**: Returns a text only representation of the markdown body. Response will include `body_text`. - **`application/vnd.github-commitcomment.html+json`**: Returns HTML rendered from the body's markdown. Response will include `body_html`. - **`application/vnd.github-commitcomment.full+json`**: Returns raw, text, and HTML representations. Response will include `body`, `body_text`, and `body_html`.
   *
   * @tags pulls
   * @name PullsCreateReplyForReviewComment
   * @summary Create a reply for a review comment
   * @request POST:/repos/{owner}/{repo}/pulls/{pull_number}/comments/{comment_id}/replies
   */
  pullsCreateReplyForReviewComment = (
    owner: string,
    repo: string,
    pullNumber: number,
    commentId: number,
    data: PullsCreateReplyForReviewCommentPayload,
    params: RequestParams = {},
  ) =>
    this.http.request<PullsCreateReplyForReviewCommentData, BasicError>({
      path: `/repos/${owner}/${repo}/pulls/${pullNumber}/comments/${commentId}/replies`,
      method: "POST",
      body: data,
      type: ContentType.Json,
      format: "json",
      ...params,
    });
  /**
   * @description Lists a maximum of 250 commits for a pull request. To receive a complete commit list for pull requests with more than 250 commits, use the [List commits](https://docs.github.com/enterprise-server@3.17/rest/commits/commits#list-commits) endpoint. This endpoint supports the following custom media types. For more information, see "[Media types](https://docs.github.com/enterprise-server@3.17/rest/using-the-rest-api/getting-started-with-the-rest-api#media-types)." - **`application/vnd.github.raw+json`**: Returns the raw markdown body. Response will include `body`. This is the default if you do not pass any specific media type. - **`application/vnd.github.text+json`**: Returns a text only representation of the markdown body. Response will include `body_text`. - **`application/vnd.github.html+json`**: Returns HTML rendered from the body's markdown. Response will include `body_html`. - **`application/vnd.github.full+json`**: Returns raw, text, and HTML representations. Response will include `body`, `body_text`, and `body_html`.
   *
   * @tags pulls
   * @name PullsListCommits
   * @summary List commits on a pull request
   * @request GET:/repos/{owner}/{repo}/pulls/{pull_number}/commits
   */
  pullsListCommits = (
    { owner, repo, pullNumber, ...query }: PullsListCommitsParams,
    params: RequestParams = {},
  ) =>
    this.http.request<PullsListCommitsData, any>({
      path: `/repos/${owner}/${repo}/pulls/${pullNumber}/commits`,
      method: "GET",
      query: query,
      format: "json",
      ...params,
    });
  /**
   * @description Lists the files in a specified pull request. > [!NOTE] > Responses include a maximum of 3000 files. The paginated response returns 30 files per page by default. This endpoint supports the following custom media types. For more information, see "[Media types](https://docs.github.com/enterprise-server@3.17/rest/using-the-rest-api/getting-started-with-the-rest-api#media-types)." - **`application/vnd.github.raw+json`**: Returns the raw markdown body. Response will include `body`. This is the default if you do not pass any specific media type. - **`application/vnd.github.text+json`**: Returns a text only representation of the markdown body. Response will include `body_text`. - **`application/vnd.github.html+json`**: Returns HTML rendered from the body's markdown. Response will include `body_html`. - **`application/vnd.github.full+json`**: Returns raw, text, and HTML representations. Response will include `body`, `body_text`, and `body_html`.
   *
   * @tags pulls
   * @name PullsListFiles
   * @summary List pull requests files
   * @request GET:/repos/{owner}/{repo}/pulls/{pull_number}/files
   */
  pullsListFiles = (
    { owner, repo, pullNumber, ...query }: PullsListFilesParams,
    params: RequestParams = {},
  ) =>
    this.http.request<
      PullsListFilesData,
      | ValidationError
      | BasicError
      | {
          code?: string;
          message?: string;
          documentation_url?: string;
        }
    >({
      path: `/repos/${owner}/${repo}/pulls/${pullNumber}/files`,
      method: "GET",
      query: query,
      format: "json",
      ...params,
    });
  /**
   * @description Checks if a pull request has been merged into the base branch. The HTTP status of the response indicates whether or not the pull request has been merged; the response body is empty.
   *
   * @tags pulls
   * @name PullsCheckIfMerged
   * @summary Check if a pull request has been merged
   * @request GET:/repos/{owner}/{repo}/pulls/{pull_number}/merge
   */
  pullsCheckIfMerged = (
    owner: string,
    repo: string,
    pullNumber: number,
    params: RequestParams = {},
  ) =>
    this.http.request<PullsCheckIfMergedData, void>({
      path: `/repos/${owner}/${repo}/pulls/${pullNumber}/merge`,
      method: "GET",
      ...params,
    });
  /**
   * @description Merges a pull request into the base branch. This endpoint triggers [notifications](https://docs.github.com/enterprise-server@3.17/github/managing-subscriptions-and-notifications-on-github/about-notifications). Creating content too quickly using this endpoint may result in secondary rate limiting. For more information, see "[Rate limits for the API](https://docs.github.com/enterprise-server@3.17/rest/using-the-rest-api/rate-limits-for-the-rest-api#about-secondary-rate-limits)" and "[Best practices for using the REST API](https://docs.github.com/enterprise-server@3.17/rest/guides/best-practices-for-using-the-rest-api)."
   *
   * @tags pulls
   * @name PullsMerge
   * @summary Merge a pull request
   * @request PUT:/repos/{owner}/{repo}/pulls/{pull_number}/merge
   */
  pullsMerge = (
    owner: string,
    repo: string,
    pullNumber: number,
    data?: PullsMergePayload,
    params: RequestParams = {},
  ) =>
    this.http.request<PullsMergeData, PullsMergeError>({
      path: `/repos/${owner}/${repo}/pulls/${pullNumber}/merge`,
      method: "PUT",
      body: data,
      type: ContentType.Json,
      format: "json",
      ...params,
    });
  /**
   * @description Gets the users or teams whose review is requested for a pull request. Once a requested reviewer submits a review, they are no longer considered a requested reviewer. Their review will instead be returned by the [List reviews for a pull request](https://docs.github.com/enterprise-server@3.17/rest/pulls/reviews#list-reviews-for-a-pull-request) operation.
   *
   * @tags pulls
   * @name PullsListRequestedReviewers
   * @summary Get all requested reviewers for a pull request
   * @request GET:/repos/{owner}/{repo}/pulls/{pull_number}/requested_reviewers
   */
  pullsListRequestedReviewers = (
    owner: string,
    repo: string,
    pullNumber: number,
    params: RequestParams = {},
  ) =>
    this.http.request<PullsListRequestedReviewersData, any>({
      path: `/repos/${owner}/${repo}/pulls/${pullNumber}/requested_reviewers`,
      method: "GET",
      format: "json",
      ...params,
    });
  /**
   * @description Requests reviews for a pull request from a given set of users and/or teams. This endpoint triggers [notifications](https://docs.github.com/enterprise-server@3.17/github/managing-subscriptions-and-notifications-on-github/about-notifications). Creating content too quickly using this endpoint may result in secondary rate limiting. For more information, see "[Rate limits for the API](https://docs.github.com/enterprise-server@3.17/rest/using-the-rest-api/rate-limits-for-the-rest-api#about-secondary-rate-limits)" and "[Best practices for using the REST API](https://docs.github.com/enterprise-server@3.17/rest/guides/best-practices-for-using-the-rest-api)."
   *
   * @tags pulls
   * @name PullsRequestReviewers
   * @summary Request reviewers for a pull request
   * @request POST:/repos/{owner}/{repo}/pulls/{pull_number}/requested_reviewers
   */
  pullsRequestReviewers = (
    owner: string,
    repo: string,
    pullNumber: number,
    data?: PullsRequestReviewersPayload,
    params: RequestParams = {},
  ) =>
    this.http.request<PullsRequestReviewersData, BasicError | void>({
      path: `/repos/${owner}/${repo}/pulls/${pullNumber}/requested_reviewers`,
      method: "POST",
      body: data,
      type: ContentType.Json,
      format: "json",
      ...params,
    });
  /**
   * @description Removes review requests from a pull request for a given set of users and/or teams.
   *
   * @tags pulls
   * @name PullsRemoveRequestedReviewers
   * @summary Remove requested reviewers from a pull request
   * @request DELETE:/repos/{owner}/{repo}/pulls/{pull_number}/requested_reviewers
   */
  pullsRemoveRequestedReviewers = (
    owner: string,
    repo: string,
    pullNumber: number,
    data: PullsRemoveRequestedReviewersPayload,
    params: RequestParams = {},
  ) =>
    this.http.request<PullsRemoveRequestedReviewersData, ValidationError>({
      path: `/repos/${owner}/${repo}/pulls/${pullNumber}/requested_reviewers`,
      method: "DELETE",
      body: data,
      type: ContentType.Json,
      format: "json",
      ...params,
    });
  /**
   * @description Lists all reviews for a specified pull request. The list of reviews returns in chronological order. This endpoint supports the following custom media types. For more information, see "[Media types](https://docs.github.com/enterprise-server@3.17/rest/using-the-rest-api/getting-started-with-the-rest-api#media-types)." - **`application/vnd.github-commitcomment.raw+json`**: Returns the raw markdown body. Response will include `body`. This is the default if you do not pass any specific media type. - **`application/vnd.github-commitcomment.text+json`**: Returns a text only representation of the markdown body. Response will include `body_text`. - **`application/vnd.github-commitcomment.html+json`**: Returns HTML rendered from the body's markdown. Response will include `body_html`. - **`application/vnd.github-commitcomment.full+json`**: Returns raw, text, and HTML representations. Response will include `body`, `body_text`, and `body_html`.
   *
   * @tags pulls
   * @name PullsListReviews
   * @summary List reviews for a pull request
   * @request GET:/repos/{owner}/{repo}/pulls/{pull_number}/reviews
   */
  pullsListReviews = (
    { owner, repo, pullNumber, ...query }: PullsListReviewsParams,
    params: RequestParams = {},
  ) =>
    this.http.request<PullsListReviewsData, any>({
      path: `/repos/${owner}/${repo}/pulls/${pullNumber}/reviews`,
      method: "GET",
      query: query,
      format: "json",
      ...params,
    });
  /**
   * @description Creates a review on a specified pull request. This endpoint triggers [notifications](https://docs.github.com/enterprise-server@3.17/github/managing-subscriptions-and-notifications-on-github/about-notifications). Creating content too quickly using this endpoint may result in secondary rate limiting. For more information, see "[Rate limits for the API](https://docs.github.com/enterprise-server@3.17/rest/using-the-rest-api/rate-limits-for-the-rest-api#about-secondary-rate-limits)" and "[Best practices for using the REST API](https://docs.github.com/enterprise-server@3.17/rest/guides/best-practices-for-using-the-rest-api)." Pull request reviews created in the `PENDING` state are not submitted and therefore do not include the `submitted_at` property in the response. To create a pending review for a pull request, leave the `event` parameter blank. For more information about submitting a `PENDING` review, see "[Submit a review for a pull request](https://docs.github.com/enterprise-server@3.17/rest/pulls/reviews#submit-a-review-for-a-pull-request)." > [!NOTE] > To comment on a specific line in a file, you need to first determine the position of that line in the diff. To see a pull request diff, add the `application/vnd.github.v3.diff` media type to the `Accept` header of a call to the [Get a pull request](https://docs.github.com/enterprise-server@3.17/rest/pulls/pulls#get-a-pull-request) endpoint. The `position` value equals the number of lines down from the first "@@" hunk header in the file you want to add a comment. The line just below the "@@" line is position 1, the next line is position 2, and so on. The position in the diff continues to increase through lines of whitespace and additional hunks until the beginning of a new file. This endpoint supports the following custom media types. For more information, see "[Media types](https://docs.github.com/enterprise-server@3.17/rest/using-the-rest-api/getting-started-with-the-rest-api#media-types)." - **`application/vnd.github-commitcomment.raw+json`**: Returns the raw markdown body. Response will include `body`. This is the default if you do not pass any specific media type. - **`application/vnd.github-commitcomment.text+json`**: Returns a text only representation of the markdown body. Response will include `body_text`. - **`application/vnd.github-commitcomment.html+json`**: Returns HTML rendered from the body's markdown. Response will include `body_html`. - **`application/vnd.github-commitcomment.full+json`**: Returns raw, text, and HTML representations. Response will include `body`, `body_text`, and `body_html`.
   *
   * @tags pulls
   * @name PullsCreateReview
   * @summary Create a review for a pull request
   * @request POST:/repos/{owner}/{repo}/pulls/{pull_number}/reviews
   */
  pullsCreateReview = (
    owner: string,
    repo: string,
    pullNumber: number,
    data?: PullsCreateReviewPayload,
    params: RequestParams = {},
  ) =>
    this.http.request<
      PullsCreateReviewData,
      BasicError | ValidationErrorSimple
    >({
      path: `/repos/${owner}/${repo}/pulls/${pullNumber}/reviews`,
      method: "POST",
      body: data,
      type: ContentType.Json,
      format: "json",
      ...params,
    });
  /**
   * @description Retrieves a pull request review by its ID. This endpoint supports the following custom media types. For more information, see "[Media types](https://docs.github.com/enterprise-server@3.17/rest/using-the-rest-api/getting-started-with-the-rest-api#media-types)." - **`application/vnd.github-commitcomment.raw+json`**: Returns the raw markdown body. Response will include `body`. This is the default if you do not pass any specific media type. - **`application/vnd.github-commitcomment.text+json`**: Returns a text only representation of the markdown body. Response will include `body_text`. - **`application/vnd.github-commitcomment.html+json`**: Returns HTML rendered from the body's markdown. Response will include `body_html`. - **`application/vnd.github-commitcomment.full+json`**: Returns raw, text, and HTML representations. Response will include `body`, `body_text`, and `body_html`.
   *
   * @tags pulls
   * @name PullsGetReview
   * @summary Get a review for a pull request
   * @request GET:/repos/{owner}/{repo}/pulls/{pull_number}/reviews/{review_id}
   */
  pullsGetReview = (
    owner: string,
    repo: string,
    pullNumber: number,
    reviewId: number,
    params: RequestParams = {},
  ) =>
    this.http.request<PullsGetReviewData, BasicError>({
      path: `/repos/${owner}/${repo}/pulls/${pullNumber}/reviews/${reviewId}`,
      method: "GET",
      format: "json",
      ...params,
    });
  /**
   * @description Updates the contents of a specified review summary comment. This endpoint supports the following custom media types. For more information, see "[Media types](https://docs.github.com/enterprise-server@3.17/rest/using-the-rest-api/getting-started-with-the-rest-api#media-types)." - **`application/vnd.github-commitcomment.raw+json`**: Returns the raw markdown body. Response will include `body`. This is the default if you do not pass any specific media type. - **`application/vnd.github-commitcomment.text+json`**: Returns a text only representation of the markdown body. Response will include `body_text`. - **`application/vnd.github-commitcomment.html+json`**: Returns HTML rendered from the body's markdown. Response will include `body_html`. - **`application/vnd.github-commitcomment.full+json`**: Returns raw, text, and HTML representations. Response will include `body`, `body_text`, and `body_html`.
   *
   * @tags pulls
   * @name PullsUpdateReview
   * @summary Update a review for a pull request
   * @request PUT:/repos/{owner}/{repo}/pulls/{pull_number}/reviews/{review_id}
   */
  pullsUpdateReview = (
    owner: string,
    repo: string,
    pullNumber: number,
    reviewId: number,
    data: PullsUpdateReviewPayload,
    params: RequestParams = {},
  ) =>
    this.http.request<PullsUpdateReviewData, ValidationErrorSimple>({
      path: `/repos/${owner}/${repo}/pulls/${pullNumber}/reviews/${reviewId}`,
      method: "PUT",
      body: data,
      type: ContentType.Json,
      format: "json",
      ...params,
    });
  /**
   * @description Deletes a pull request review that has not been submitted. Submitted reviews cannot be deleted. This endpoint supports the following custom media types. For more information, see "[Media types](https://docs.github.com/enterprise-server@3.17/rest/using-the-rest-api/getting-started-with-the-rest-api#media-types)." - **`application/vnd.github-commitcomment.raw+json`**: Returns the raw markdown body. Response will include `body`. This is the default if you do not pass any specific media type. - **`application/vnd.github-commitcomment.text+json`**: Returns a text only representation of the markdown body. Response will include `body_text`. - **`application/vnd.github-commitcomment.html+json`**: Returns HTML rendered from the body's markdown. Response will include `body_html`. - **`application/vnd.github-commitcomment.full+json`**: Returns raw, text, and HTML representations. Response will include `body`, `body_text`, and `body_html`.
   *
   * @tags pulls
   * @name PullsDeletePendingReview
   * @summary Delete a pending review for a pull request
   * @request DELETE:/repos/{owner}/{repo}/pulls/{pull_number}/reviews/{review_id}
   */
  pullsDeletePendingReview = (
    owner: string,
    repo: string,
    pullNumber: number,
    reviewId: number,
    params: RequestParams = {},
  ) =>
    this.http.request<
      PullsDeletePendingReviewData,
      BasicError | ValidationErrorSimple
    >({
      path: `/repos/${owner}/${repo}/pulls/${pullNumber}/reviews/${reviewId}`,
      method: "DELETE",
      format: "json",
      ...params,
    });
  /**
   * @description Lists comments for a specific pull request review. This endpoint supports the following custom media types. For more information, see "[Media types](https://docs.github.com/enterprise-server@3.17/rest/using-the-rest-api/getting-started-with-the-rest-api#media-types)." - **`application/vnd.github-commitcomment.raw+json`**: Returns the raw markdown body. Response will include `body`. This is the default if you do not pass any specific media type. - **`application/vnd.github-commitcomment.text+json`**: Returns a text only representation of the markdown body. Response will include `body_text`. - **`application/vnd.github-commitcomment.html+json`**: Returns HTML rendered from the body's markdown. Response will include `body_html`. - **`application/vnd.github-commitcomment.full+json`**: Returns raw, text, and HTML representations. Response will include `body`, `body_text`, and `body_html`.
   *
   * @tags pulls
   * @name PullsListCommentsForReview
   * @summary List comments for a pull request review
   * @request GET:/repos/{owner}/{repo}/pulls/{pull_number}/reviews/{review_id}/comments
   */
  pullsListCommentsForReview = (
    {
      owner,
      repo,
      pullNumber,
      reviewId,
      ...query
    }: PullsListCommentsForReviewParams,
    params: RequestParams = {},
  ) =>
    this.http.request<PullsListCommentsForReviewData, BasicError>({
      path: `/repos/${owner}/${repo}/pulls/${pullNumber}/reviews/${reviewId}/comments`,
      method: "GET",
      query: query,
      format: "json",
      ...params,
    });
  /**
   * @description Dismisses a specified review on a pull request. > [!NOTE] > To dismiss a pull request review on a [protected branch](https://docs.github.com/enterprise-server@3.17/rest/branches/branch-protection), you must be a repository administrator or be included in the list of people or teams who can dismiss pull request reviews. This endpoint supports the following custom media types. For more information, see "[Media types](https://docs.github.com/enterprise-server@3.17/rest/using-the-rest-api/getting-started-with-the-rest-api#media-types)." - **`application/vnd.github-commitcomment.raw+json`**: Returns the raw markdown body. Response will include `body`. This is the default if you do not pass any specific media type. - **`application/vnd.github-commitcomment.text+json`**: Returns a text only representation of the markdown body. Response will include `body_text`. - **`application/vnd.github-commitcomment.html+json`**: Returns HTML rendered from the body's markdown. Response will include `body_html`. - **`application/vnd.github-commitcomment.full+json`**: Returns raw, text, and HTML representations. Response will include `body`, `body_text`, and `body_html`.
   *
   * @tags pulls
   * @name PullsDismissReview
   * @summary Dismiss a review for a pull request
   * @request PUT:/repos/{owner}/{repo}/pulls/{pull_number}/reviews/{review_id}/dismissals
   */
  pullsDismissReview = (
    owner: string,
    repo: string,
    pullNumber: number,
    reviewId: number,
    data: PullsDismissReviewPayload,
    params: RequestParams = {},
  ) =>
    this.http.request<
      PullsDismissReviewData,
      BasicError | ValidationErrorSimple
    >({
      path: `/repos/${owner}/${repo}/pulls/${pullNumber}/reviews/${reviewId}/dismissals`,
      method: "PUT",
      body: data,
      type: ContentType.Json,
      format: "json",
      ...params,
    });
  /**
   * @description Submits a pending review for a pull request. For more information about creating a pending review for a pull request, see "[Create a review for a pull request](https://docs.github.com/enterprise-server@3.17/rest/pulls/reviews#create-a-review-for-a-pull-request)." This endpoint supports the following custom media types. For more information, see "[Media types](https://docs.github.com/enterprise-server@3.17/rest/using-the-rest-api/getting-started-with-the-rest-api#media-types)." - **`application/vnd.github-commitcomment.raw+json`**: Returns the raw markdown body. Response will include `body`. This is the default if you do not pass any specific media type. - **`application/vnd.github-commitcomment.text+json`**: Returns a text only representation of the markdown body. Response will include `body_text`. - **`application/vnd.github-commitcomment.html+json`**: Returns HTML rendered from the body's markdown. Response will include `body_html`. - **`application/vnd.github-commitcomment.full+json`**: Returns raw, text, and HTML representations. Response will include `body`, `body_text`, and `body_html`.
   *
   * @tags pulls
   * @name PullsSubmitReview
   * @summary Submit a review for a pull request
   * @request POST:/repos/{owner}/{repo}/pulls/{pull_number}/reviews/{review_id}/events
   */
  pullsSubmitReview = (
    owner: string,
    repo: string,
    pullNumber: number,
    reviewId: number,
    data: PullsSubmitReviewPayload,
    params: RequestParams = {},
  ) =>
    this.http.request<
      PullsSubmitReviewData,
      BasicError | ValidationErrorSimple
    >({
      path: `/repos/${owner}/${repo}/pulls/${pullNumber}/reviews/${reviewId}/events`,
      method: "POST",
      body: data,
      type: ContentType.Json,
      format: "json",
      ...params,
    });
  /**
   * @description Updates the pull request branch with the latest upstream changes by merging HEAD from the base branch into the pull request branch. Note: If making a request on behalf of a GitHub App you must also have permissions to write the contents of the head repository.
   *
   * @tags pulls
   * @name PullsUpdateBranch
   * @summary Update a pull request branch
   * @request PUT:/repos/{owner}/{repo}/pulls/{pull_number}/update-branch
   */
  pullsUpdateBranch = (
    owner: string,
    repo: string,
    pullNumber: number,
    data?: PullsUpdateBranchPayload,
    params: RequestParams = {},
  ) =>
    this.http.request<PullsUpdateBranchData, BasicError | ValidationError>({
      path: `/repos/${owner}/${repo}/pulls/${pullNumber}/update-branch`,
      method: "PUT",
      body: data,
      type: ContentType.Json,
      format: "json",
      ...params,
    });
  /**
   * @description Gets the preferred README for a repository. This endpoint supports the following custom media types. For more information, see "[Media types](https://docs.github.com/enterprise-server@3.17/rest/using-the-rest-api/getting-started-with-the-rest-api#media-types)." - **`application/vnd.github.raw+json`**: Returns the raw file contents. This is the default if you do not specify a media type. - **`application/vnd.github.html+json`**: Returns the README in HTML. Markup languages are rendered to HTML using GitHub's open-source [Markup library](https://github.com/github/markup).
   *
   * @tags repos
   * @name ReposGetReadme
   * @summary Get a repository README
   * @request GET:/repos/{owner}/{repo}/readme
   */
  reposGetReadme = (
    { owner, repo, ...query }: ReposGetReadmeParams,
    params: RequestParams = {},
  ) =>
    this.http.request<ReposGetReadmeData, BasicError | ValidationError>({
      path: `/repos/${owner}/${repo}/readme`,
      method: "GET",
      query: query,
      format: "json",
      ...params,
    });
  /**
   * @description Gets the README from a repository directory. This endpoint supports the following custom media types. For more information, see "[Media types](https://docs.github.com/enterprise-server@3.17/rest/using-the-rest-api/getting-started-with-the-rest-api#media-types)." - **`application/vnd.github.raw+json`**: Returns the raw file contents. This is the default if you do not specify a media type. - **`application/vnd.github.html+json`**: Returns the README in HTML. Markup languages are rendered to HTML using GitHub's open-source [Markup library](https://github.com/github/markup).
   *
   * @tags repos
   * @name ReposGetReadmeInDirectory
   * @summary Get a repository README for a directory
   * @request GET:/repos/{owner}/{repo}/readme/{dir}
   */
  reposGetReadmeInDirectory = (
    { owner, repo, dir, ...query }: ReposGetReadmeInDirectoryParams,
    params: RequestParams = {},
  ) =>
    this.http.request<
      ReposGetReadmeInDirectoryData,
      BasicError | ValidationError
    >({
      path: `/repos/${owner}/${repo}/readme/${dir}`,
      method: "GET",
      query: query,
      format: "json",
      ...params,
    });
  /**
   * @description This returns a list of releases, which does not include regular Git tags that have not been associated with a release. To get a list of Git tags, use the [Repository Tags API](https://docs.github.com/enterprise-server@3.17/rest/repos/repos#list-repository-tags). Information about published releases are available to everyone. Only users with push access will receive listings for draft releases.
   *
   * @tags repos
   * @name ReposListReleases
   * @summary List releases
   * @request GET:/repos/{owner}/{repo}/releases
   */
  reposListReleases = (
    { owner, repo, ...query }: ReposListReleasesParams,
    params: RequestParams = {},
  ) =>
    this.http.request<ReposListReleasesData, BasicError>({
      path: `/repos/${owner}/${repo}/releases`,
      method: "GET",
      query: query,
      format: "json",
      ...params,
    });
  /**
   * @description Users with push access to the repository can create a release. This endpoint triggers [notifications](https://docs.github.com/enterprise-server@3.17/github/managing-subscriptions-and-notifications-on-github/about-notifications). Creating content too quickly using this endpoint may result in secondary rate limiting. For more information, see "[Rate limits for the API](https://docs.github.com/enterprise-server@3.17/rest/using-the-rest-api/rate-limits-for-the-rest-api#about-secondary-rate-limits)" and "[Best practices for using the REST API](https://docs.github.com/enterprise-server@3.17/rest/guides/best-practices-for-using-the-rest-api)."
   *
   * @tags repos
   * @name ReposCreateRelease
   * @summary Create a release
   * @request POST:/repos/{owner}/{repo}/releases
   */
  reposCreateRelease = (
    owner: string,
    repo: string,
    data: ReposCreateReleasePayload,
    params: RequestParams = {},
  ) =>
    this.http.request<ReposCreateReleaseData, ValidationError>({
      path: `/repos/${owner}/${repo}/releases`,
      method: "POST",
      body: data,
      type: ContentType.Json,
      format: "json",
      ...params,
    });
  /**
   * @description To download the asset's binary content: - If within a browser, fetch the location specified in the `browser_download_url` key provided in the response. - Alternatively, set the `Accept` header of the request to [`application/octet-stream`](https://docs.github.com/enterprise-server@3.17/rest/using-the-rest-api/getting-started-with-the-rest-api#media-types). The API will either redirect the client to the location, or stream it directly if possible. API clients should handle both a `200` or `302` response.
   *
   * @tags repos
   * @name ReposGetReleaseAsset
   * @summary Get a release asset
   * @request GET:/repos/{owner}/{repo}/releases/assets/{asset_id}
   */
  reposGetReleaseAsset = (
    owner: string,
    repo: string,
    assetId: number,
    params: RequestParams = {},
  ) =>
    this.http.request<ReposGetReleaseAssetData, BasicError>({
      path: `/repos/${owner}/${repo}/releases/assets/${assetId}`,
      method: "GET",
      format: "json",
      ...params,
    });
  /**
   * @description Users with push access to the repository can edit a release asset.
   *
   * @tags repos
   * @name ReposUpdateReleaseAsset
   * @summary Update a release asset
   * @request PATCH:/repos/{owner}/{repo}/releases/assets/{asset_id}
   */
  reposUpdateReleaseAsset = (
    owner: string,
    repo: string,
    assetId: number,
    data?: ReposUpdateReleaseAssetPayload,
    params: RequestParams = {},
  ) =>
    this.http.request<ReposUpdateReleaseAssetData, any>({
      path: `/repos/${owner}/${repo}/releases/assets/${assetId}`,
      method: "PATCH",
      body: data,
      type: ContentType.Json,
      format: "json",
      ...params,
    });
  /**
   * No description
   *
   * @tags repos
   * @name ReposDeleteReleaseAsset
   * @summary Delete a release asset
   * @request DELETE:/repos/{owner}/{repo}/releases/assets/{asset_id}
   */
  reposDeleteReleaseAsset = (
    owner: string,
    repo: string,
    assetId: number,
    params: RequestParams = {},
  ) =>
    this.http.request<ReposDeleteReleaseAssetData, any>({
      path: `/repos/${owner}/${repo}/releases/assets/${assetId}`,
      method: "DELETE",
      ...params,
    });
  /**
   * @description Generate a name and body describing a [release](https://docs.github.com/enterprise-server@3.17/rest/releases/releases#get-a-release). The body content will be markdown formatted and contain information like the changes since last release and users who contributed. The generated release notes are not saved anywhere. They are intended to be generated and used when creating a new release.
   *
   * @tags repos
   * @name ReposGenerateReleaseNotes
   * @summary Generate release notes content for a release
   * @request POST:/repos/{owner}/{repo}/releases/generate-notes
   */
  reposGenerateReleaseNotes = (
    owner: string,
    repo: string,
    data: ReposGenerateReleaseNotesPayload,
    params: RequestParams = {},
  ) =>
    this.http.request<ReposGenerateReleaseNotesData, BasicError>({
      path: `/repos/${owner}/${repo}/releases/generate-notes`,
      method: "POST",
      body: data,
      type: ContentType.Json,
      format: "json",
      ...params,
    });
  /**
   * @description View the latest published full release for the repository. The latest release is the most recent non-prerelease, non-draft release, sorted by the `created_at` attribute. The `created_at` attribute is the date of the commit used for the release, and not the date when the release was drafted or published.
   *
   * @tags repos
   * @name ReposGetLatestRelease
   * @summary Get the latest release
   * @request GET:/repos/{owner}/{repo}/releases/latest
   */
  reposGetLatestRelease = (
    owner: string,
    repo: string,
    params: RequestParams = {},
  ) =>
    this.http.request<ReposGetLatestReleaseData, any>({
      path: `/repos/${owner}/${repo}/releases/latest`,
      method: "GET",
      format: "json",
      ...params,
    });
  /**
   * @description Get a published release with the specified tag.
   *
   * @tags repos
   * @name ReposGetReleaseByTag
   * @summary Get a release by tag name
   * @request GET:/repos/{owner}/{repo}/releases/tags/{tag}
   */
  reposGetReleaseByTag = (
    owner: string,
    repo: string,
    tag: string,
    params: RequestParams = {},
  ) =>
    this.http.request<ReposGetReleaseByTagData, BasicError>({
      path: `/repos/${owner}/${repo}/releases/tags/${tag}`,
      method: "GET",
      format: "json",
      ...params,
    });
  /**
   * @description Gets a public release with the specified release ID. > [!NOTE] > This returns an `upload_url` key corresponding to the endpoint for uploading release assets. This key is a hypermedia resource. For more information, see "[Getting started with the REST API](https://docs.github.com/enterprise-server@3.17/rest/using-the-rest-api/getting-started-with-the-rest-api#hypermedia)."
   *
   * @tags repos
   * @name ReposGetRelease
   * @summary Get a release
   * @request GET:/repos/{owner}/{repo}/releases/{release_id}
   */
  reposGetRelease = (
    owner: string,
    repo: string,
    releaseId: number,
    params: RequestParams = {},
  ) =>
    this.http.request<ReposGetReleaseData, void>({
      path: `/repos/${owner}/${repo}/releases/${releaseId}`,
      method: "GET",
      format: "json",
      ...params,
    });
  /**
   * @description Users with push access to the repository can edit a release.
   *
   * @tags repos
   * @name ReposUpdateRelease
   * @summary Update a release
   * @request PATCH:/repos/{owner}/{repo}/releases/{release_id}
   */
  reposUpdateRelease = (
    owner: string,
    repo: string,
    releaseId: number,
    data?: ReposUpdateReleasePayload,
    params: RequestParams = {},
  ) =>
    this.http.request<ReposUpdateReleaseData, any>({
      path: `/repos/${owner}/${repo}/releases/${releaseId}`,
      method: "PATCH",
      body: data,
      type: ContentType.Json,
      format: "json",
      ...params,
    });
  /**
   * @description Users with push access to the repository can delete a release.
   *
   * @tags repos
   * @name ReposDeleteRelease
   * @summary Delete a release
   * @request DELETE:/repos/{owner}/{repo}/releases/{release_id}
   */
  reposDeleteRelease = (
    owner: string,
    repo: string,
    releaseId: number,
    params: RequestParams = {},
  ) =>
    this.http.request<ReposDeleteReleaseData, any>({
      path: `/repos/${owner}/${repo}/releases/${releaseId}`,
      method: "DELETE",
      ...params,
    });
  /**
   * No description
   *
   * @tags repos
   * @name ReposListReleaseAssets
   * @summary List release assets
   * @request GET:/repos/{owner}/{repo}/releases/{release_id}/assets
   */
  reposListReleaseAssets = (
    { owner, repo, releaseId, ...query }: ReposListReleaseAssetsParams,
    params: RequestParams = {},
  ) =>
    this.http.request<ReposListReleaseAssetsData, any>({
      path: `/repos/${owner}/${repo}/releases/${releaseId}/assets`,
      method: "GET",
      query: query,
      format: "json",
      ...params,
    });
  /**
   * @description This endpoint makes use of a [Hypermedia relation](https://docs.github.com/enterprise-server@3.17/rest/using-the-rest-api/getting-started-with-the-rest-api#hypermedia) to determine which URL to access. The endpoint you call to upload release assets is specific to your release. Use the `upload_url` returned in the response of the [Create a release endpoint](https://docs.github.com/enterprise-server@3.17/rest/releases/releases#create-a-release) to upload a release asset. You need to use an HTTP client which supports [SNI](http://en.wikipedia.org/wiki/Server_Name_Indication) to make calls to this endpoint. Most libraries will set the required `Content-Length` header automatically. Use the required `Content-Type` header to provide the media type of the asset. For a list of media types, see [Media Types](https://www.iana.org/assignments/media-types/media-types.xhtml). For example: `application/zip` GitHub Enterprise Server expects the asset data in its raw binary form, rather than JSON. You will send the raw binary content of the asset as the request body. Everything else about the endpoint is the same as the rest of the API. For example, you'll still need to pass your authentication to be able to upload an asset. When an upstream failure occurs, you will receive a `502 Bad Gateway` status. This may leave an empty asset with a state of `starter`. It can be safely deleted. **Notes:** *   GitHub Enterprise Server renames asset filenames that have special characters, non-alphanumeric characters, and leading or trailing periods. The "[List release assets](https://docs.github.com/enterprise-server@3.17/rest/releases/assets#list-release-assets)" endpoint lists the renamed filenames. For more information and help, contact [GitHub Enterprise Server Support](https://support.github.com/contact?tags=dotcom-rest-api). *   To find the `release_id` query the [`GET /repos/{owner}/{repo}/releases/latest` endpoint](https://docs.github.com/enterprise-server@3.17/rest/releases/releases#get-the-latest-release). *   If you upload an asset with the same filename as another uploaded asset, you'll receive an error and must delete the old file before you can re-upload the new asset.
   *
   * @tags repos
   * @name ReposUploadReleaseAsset
   * @summary Upload a release asset
   * @request POST:/repos/{owner}/{repo}/releases/{release_id}/assets
   */
  reposUploadReleaseAsset = (
    { owner, repo, releaseId, ...query }: ReposUploadReleaseAssetParams,
    data?: ReposUploadReleaseAssetPayload,
    params: RequestParams = {},
  ) =>
    this.http.request<ReposUploadReleaseAssetData, void>({
      path: `/repos/${owner}/${repo}/releases/${releaseId}/assets`,
      method: "POST",
      query: query,
      body: data,
      format: "json",
      ...params,
    });
  /**
   * @description List the reactions to a [release](https://docs.github.com/enterprise-server@3.17/rest/releases/releases#get-a-release).
   *
   * @tags reactions
   * @name ReactionsListForRelease
   * @summary List reactions for a release
   * @request GET:/repos/{owner}/{repo}/releases/{release_id}/reactions
   */
  reactionsListForRelease = (
    { owner, repo, releaseId, ...query }: ReactionsListForReleaseParams,
    params: RequestParams = {},
  ) =>
    this.http.request<ReactionsListForReleaseData, BasicError>({
      path: `/repos/${owner}/${repo}/releases/${releaseId}/reactions`,
      method: "GET",
      query: query,
      format: "json",
      ...params,
    });
  /**
   * @description Create a reaction to a [release](https://docs.github.com/enterprise-server@3.17/rest/releases/releases#get-a-release). A response with a `Status: 200 OK` means that you already added the reaction type to this release.
   *
   * @tags reactions
   * @name ReactionsCreateForRelease
   * @summary Create reaction for a release
   * @request POST:/repos/{owner}/{repo}/releases/{release_id}/reactions
   */
  reactionsCreateForRelease = (
    owner: string,
    repo: string,
    releaseId: number,
    data: ReactionsCreateForReleasePayload,
    params: RequestParams = {},
  ) =>
    this.http.request<ReactionsCreateForReleaseData, ValidationError>({
      path: `/repos/${owner}/${repo}/releases/${releaseId}/reactions`,
      method: "POST",
      body: data,
      type: ContentType.Json,
      format: "json",
      ...params,
    });
  /**
   * @description > [!NOTE] > You can also specify a repository by `repository_id` using the route `DELETE delete /repositories/:repository_id/releases/:release_id/reactions/:reaction_id`. Delete a reaction to a [release](https://docs.github.com/enterprise-server@3.17/rest/releases/releases#get-a-release).
   *
   * @tags reactions
   * @name ReactionsDeleteForRelease
   * @summary Delete a release reaction
   * @request DELETE:/repos/{owner}/{repo}/releases/{release_id}/reactions/{reaction_id}
   */
  reactionsDeleteForRelease = (
    owner: string,
    repo: string,
    releaseId: number,
    reactionId: number,
    params: RequestParams = {},
  ) =>
    this.http.request<ReactionsDeleteForReleaseData, any>({
      path: `/repos/${owner}/${repo}/releases/${releaseId}/reactions/${reactionId}`,
      method: "DELETE",
      ...params,
    });
  /**
   * @description Lists the status of each repository cache replica.
   *
   * @tags repos
   * @name ReposListCacheInfo
   * @summary List repository cache replication status
   * @request GET:/repos/{owner}/{repo}/replicas/caches
   */
  reposListCacheInfo = (
    { owner, repo, ...query }: ReposListCacheInfoParams,
    params: RequestParams = {},
  ) =>
    this.http.request<ReposListCacheInfoData, BasicError>({
      path: `/repos/${owner}/${repo}/replicas/caches`,
      method: "GET",
      query: query,
      format: "json",
      ...params,
    });
  /**
   * @description Returns all active rules that apply to the specified branch. The branch does not need to exist; rules that would apply to a branch with that name will be returned. All active rules that apply will be returned, regardless of the level at which they are configured (e.g. repository or organization). Rules in rulesets with "evaluate" or "disabled" enforcement statuses are not returned.
   *
   * @tags repos
   * @name ReposGetBranchRules
   * @summary Get rules for a branch
   * @request GET:/repos/{owner}/{repo}/rules/branches/{branch}
   */
  reposGetBranchRules = (
    { owner, repo, branch, ...query }: ReposGetBranchRulesParams,
    params: RequestParams = {},
  ) =>
    this.http.request<ReposGetBranchRulesData, any>({
      path: `/repos/${owner}/${repo}/rules/branches/${branch}`,
      method: "GET",
      query: query,
      format: "json",
      ...params,
    });
  /**
   * @description Get all the rulesets for a repository.
   *
   * @tags repos
   * @name ReposGetRepoRulesets
   * @summary Get all repository rulesets
   * @request GET:/repos/{owner}/{repo}/rulesets
   */
  reposGetRepoRulesets = (
    { owner, repo, ...query }: ReposGetRepoRulesetsParams,
    params: RequestParams = {},
  ) =>
    this.http.request<ReposGetRepoRulesetsData, BasicError>({
      path: `/repos/${owner}/${repo}/rulesets`,
      method: "GET",
      query: query,
      format: "json",
      ...params,
    });
  /**
   * @description Create a ruleset for a repository.
   *
   * @tags repos
   * @name ReposCreateRepoRuleset
   * @summary Create a repository ruleset
   * @request POST:/repos/{owner}/{repo}/rulesets
   */
  reposCreateRepoRuleset = (
    owner: string,
    repo: string,
    data: ReposCreateRepoRulesetPayload,
    params: RequestParams = {},
  ) =>
    this.http.request<ReposCreateRepoRulesetData, BasicError>({
      path: `/repos/${owner}/${repo}/rulesets`,
      method: "POST",
      body: data,
      type: ContentType.Json,
      format: "json",
      ...params,
    });
  /**
   * @description Lists suites of rule evaluations at the repository level. For more information, see "[Managing rulesets for a repository](https://docs.github.com/enterprise-server@3.17/repositories/configuring-branches-and-merges-in-your-repository/managing-rulesets/managing-rulesets-for-a-repository#viewing-insights-for-rulesets)."
   *
   * @tags repos
   * @name ReposGetRepoRuleSuites
   * @summary List repository rule suites
   * @request GET:/repos/{owner}/{repo}/rulesets/rule-suites
   */
  reposGetRepoRuleSuites = (
    { owner, repo, ...query }: ReposGetRepoRuleSuitesParams,
    params: RequestParams = {},
  ) =>
    this.http.request<ReposGetRepoRuleSuitesData, BasicError>({
      path: `/repos/${owner}/${repo}/rulesets/rule-suites`,
      method: "GET",
      query: query,
      format: "json",
      ...params,
    });
  /**
   * @description Gets information about a suite of rule evaluations from within a repository. For more information, see "[Managing rulesets for a repository](https://docs.github.com/enterprise-server@3.17/repositories/configuring-branches-and-merges-in-your-repository/managing-rulesets/managing-rulesets-for-a-repository#viewing-insights-for-rulesets)."
   *
   * @tags repos
   * @name ReposGetRepoRuleSuite
   * @summary Get a repository rule suite
   * @request GET:/repos/{owner}/{repo}/rulesets/rule-suites/{rule_suite_id}
   */
  reposGetRepoRuleSuite = (
    owner: string,
    repo: string,
    ruleSuiteId: number,
    params: RequestParams = {},
  ) =>
    this.http.request<ReposGetRepoRuleSuiteData, BasicError>({
      path: `/repos/${owner}/${repo}/rulesets/rule-suites/${ruleSuiteId}`,
      method: "GET",
      format: "json",
      ...params,
    });
  /**
   * @description Get a ruleset for a repository. **Note:** To prevent leaking sensitive information, the `bypass_actors` property is only returned if the user making the API request has write access to the ruleset.
   *
   * @tags repos
   * @name ReposGetRepoRuleset
   * @summary Get a repository ruleset
   * @request GET:/repos/{owner}/{repo}/rulesets/{ruleset_id}
   */
  reposGetRepoRuleset = (
    { owner, repo, rulesetId, ...query }: ReposGetRepoRulesetParams,
    params: RequestParams = {},
  ) =>
    this.http.request<ReposGetRepoRulesetData, BasicError>({
      path: `/repos/${owner}/${repo}/rulesets/${rulesetId}`,
      method: "GET",
      query: query,
      format: "json",
      ...params,
    });
  /**
   * @description Update a ruleset for a repository.
   *
   * @tags repos
   * @name ReposUpdateRepoRuleset
   * @summary Update a repository ruleset
   * @request PUT:/repos/{owner}/{repo}/rulesets/{ruleset_id}
   */
  reposUpdateRepoRuleset = (
    owner: string,
    repo: string,
    rulesetId: number,
    data?: ReposUpdateRepoRulesetPayload,
    params: RequestParams = {},
  ) =>
    this.http.request<ReposUpdateRepoRulesetData, BasicError>({
      path: `/repos/${owner}/${repo}/rulesets/${rulesetId}`,
      method: "PUT",
      body: data,
      type: ContentType.Json,
      format: "json",
      ...params,
    });
  /**
   * @description Delete a ruleset for a repository.
   *
   * @tags repos
   * @name ReposDeleteRepoRuleset
   * @summary Delete a repository ruleset
   * @request DELETE:/repos/{owner}/{repo}/rulesets/{ruleset_id}
   */
  reposDeleteRepoRuleset = (
    owner: string,
    repo: string,
    rulesetId: number,
    params: RequestParams = {},
  ) =>
    this.http.request<ReposDeleteRepoRulesetData, BasicError>({
      path: `/repos/${owner}/${repo}/rulesets/${rulesetId}`,
      method: "DELETE",
      ...params,
    });
  /**
   * @description Lists secret scanning alerts for an eligible repository, from newest to oldest. The authenticated user must be an administrator for the repository or for the organization that owns the repository to use this endpoint. OAuth app tokens and personal access tokens (classic) need the `repo` or `security_events` scope to use this endpoint. If this endpoint is only used with public repositories, the token can use the `public_repo` scope instead.
   *
   * @tags secret-scanning
   * @name SecretScanningListAlertsForRepo
   * @summary List secret scanning alerts for a repository
   * @request GET:/repos/{owner}/{repo}/secret-scanning/alerts
   */
  secretScanningListAlertsForRepo = (
    { owner, repo, ...query }: SecretScanningListAlertsForRepoParams,
    params: RequestParams = {},
  ) =>
    this.http.request<
      SecretScanningListAlertsForRepoData,
      void | {
        code?: string;
        message?: string;
        documentation_url?: string;
      }
    >({
      path: `/repos/${owner}/${repo}/secret-scanning/alerts`,
      method: "GET",
      query: query,
      format: "json",
      ...params,
    });
  /**
   * @description Gets a single secret scanning alert detected in an eligible repository. The authenticated user must be an administrator for the repository or for the organization that owns the repository to use this endpoint. OAuth app tokens and personal access tokens (classic) need the `repo` or `security_events` scope to use this endpoint. If this endpoint is only used with public repositories, the token can use the `public_repo` scope instead.
   *
   * @tags secret-scanning
   * @name SecretScanningGetAlert
   * @summary Get a secret scanning alert
   * @request GET:/repos/{owner}/{repo}/secret-scanning/alerts/{alert_number}
   */
  secretScanningGetAlert = (
    owner: string,
    repo: string,
    alertNumber: AlertNumber,
    params: RequestParams = {},
  ) =>
    this.http.request<
      SecretScanningGetAlertData,
      void | {
        code?: string;
        message?: string;
        documentation_url?: string;
      }
    >({
      path: `/repos/${owner}/${repo}/secret-scanning/alerts/${alertNumber}`,
      method: "GET",
      format: "json",
      ...params,
    });
  /**
   * @description Updates the status of a secret scanning alert in an eligible repository. The authenticated user must be an administrator for the repository or for the organization that owns the repository to use this endpoint. OAuth app tokens and personal access tokens (classic) need the `repo` or `security_events` scope to use this endpoint. If this endpoint is only used with public repositories, the token can use the `public_repo` scope instead.
   *
   * @tags secret-scanning
   * @name SecretScanningUpdateAlert
   * @summary Update a secret scanning alert
   * @request PATCH:/repos/{owner}/{repo}/secret-scanning/alerts/{alert_number}
   */
  secretScanningUpdateAlert = (
    owner: string,
    repo: string,
    alertNumber: AlertNumber,
    data: SecretScanningUpdateAlertPayload,
    params: RequestParams = {},
  ) =>
    this.http.request<
      SecretScanningUpdateAlertData,
      void | {
        code?: string;
        message?: string;
        documentation_url?: string;
      }
    >({
      path: `/repos/${owner}/${repo}/secret-scanning/alerts/${alertNumber}`,
      method: "PATCH",
      body: data,
      type: ContentType.Json,
      format: "json",
      ...params,
    });
  /**
   * @description Lists all locations for a given secret scanning alert for an eligible repository. The authenticated user must be an administrator for the repository or for the organization that owns the repository to use this endpoint. OAuth app tokens and personal access tokens (classic) need the `repo` or `security_events` scope to use this endpoint. If this endpoint is only used with public repositories, the token can use the `public_repo` scope instead.
   *
   * @tags secret-scanning
   * @name SecretScanningListLocationsForAlert
   * @summary List locations for a secret scanning alert
   * @request GET:/repos/{owner}/{repo}/secret-scanning/alerts/{alert_number}/locations
   */
  secretScanningListLocationsForAlert = (
    {
      owner,
      repo,
      alertNumber,
      ...query
    }: SecretScanningListLocationsForAlertParams,
    params: RequestParams = {},
  ) =>
    this.http.request<
      SecretScanningListLocationsForAlertData,
      void | {
        code?: string;
        message?: string;
        documentation_url?: string;
      }
    >({
      path: `/repos/${owner}/${repo}/secret-scanning/alerts/${alertNumber}/locations`,
      method: "GET",
      query: query,
      format: "json",
      ...params,
    });
  /**
   * @description Creates a bypass for a previously push protected secret. The authenticated user must be the original author of the committed secret. OAuth app tokens and personal access tokens (classic) need the `repo` scope to use this endpoint.
   *
   * @tags secret-scanning
   * @name SecretScanningCreatePushProtectionBypass
   * @summary Create a push protection bypass
   * @request POST:/repos/{owner}/{repo}/secret-scanning/push-protection-bypasses
   */
  secretScanningCreatePushProtectionBypass = (
    owner: string,
    repo: string,
    data: SecretScanningCreatePushProtectionBypassPayload,
    params: RequestParams = {},
  ) =>
    this.http.request<
      SecretScanningCreatePushProtectionBypassData,
      void | {
        code?: string;
        message?: string;
        documentation_url?: string;
      }
    >({
      path: `/repos/${owner}/${repo}/secret-scanning/push-protection-bypasses`,
      method: "POST",
      body: data,
      type: ContentType.Json,
      format: "json",
      ...params,
    });
  /**
   * @description Lists the latest default incremental and backfill scans by type for a repository. Scans from Copilot Secret Scanning are not included. OAuth app tokens and personal access tokens (classic) need the `repo` or `security_events` scope to use this endpoint. If this endpoint is only used with public repositories, the token can use the `public_repo` scope instead.
   *
   * @tags secret-scanning
   * @name SecretScanningGetScanHistory
   * @summary Get secret scanning scan history for a repository
   * @request GET:/repos/{owner}/{repo}/secret-scanning/scan-history
   */
  secretScanningGetScanHistory = (
    owner: string,
    repo: string,
    params: RequestParams = {},
  ) =>
    this.http.request<
      SecretScanningGetScanHistoryData,
      void | {
        code?: string;
        message?: string;
        documentation_url?: string;
      }
    >({
      path: `/repos/${owner}/${repo}/secret-scanning/scan-history`,
      method: "GET",
      format: "json",
      ...params,
    });
  /**
   * @description Lists the people that have starred the repository. This endpoint supports the following custom media types. For more information, see "[Media types](https://docs.github.com/enterprise-server@3.17/rest/using-the-rest-api/getting-started-with-the-rest-api#media-types)." - **`application/vnd.github.star+json`**: Includes a timestamp of when the star was created.
   *
   * @tags activity
   * @name ActivityListStargazersForRepo
   * @summary List stargazers
   * @request GET:/repos/{owner}/{repo}/stargazers
   */
  activityListStargazersForRepo = (
    { owner, repo, ...query }: ActivityListStargazersForRepoParams,
    params: RequestParams = {},
  ) =>
    this.http.request<ActivityListStargazersForRepoData, ValidationError>({
      path: `/repos/${owner}/${repo}/stargazers`,
      method: "GET",
      query: query,
      format: "json",
      ...params,
    });
  /**
   * @description Returns a weekly aggregate of the number of additions and deletions pushed to a repository.
   *
   * @tags repos
   * @name ReposGetCodeFrequencyStats
   * @summary Get the weekly commit activity
   * @request GET:/repos/{owner}/{repo}/stats/code_frequency
   */
  reposGetCodeFrequencyStats = (
    owner: string,
    repo: string,
    params: RequestParams = {},
  ) =>
    this.http.request<ReposGetCodeFrequencyStatsData, any>({
      path: `/repos/${owner}/${repo}/stats/code_frequency`,
      method: "GET",
      format: "json",
      ...params,
    });
  /**
   * @description Returns the last year of commit activity grouped by week. The `days` array is a group of commits per day, starting on `Sunday`.
   *
   * @tags repos
   * @name ReposGetCommitActivityStats
   * @summary Get the last year of commit activity
   * @request GET:/repos/{owner}/{repo}/stats/commit_activity
   */
  reposGetCommitActivityStats = (
    owner: string,
    repo: string,
    params: RequestParams = {},
  ) =>
    this.http.request<ReposGetCommitActivityStatsData, any>({
      path: `/repos/${owner}/${repo}/stats/commit_activity`,
      method: "GET",
      format: "json",
      ...params,
    });
  /**
   * @description Returns the `total` number of commits authored by the contributor. In addition, the response includes a Weekly Hash (`weeks` array) with the following information: *   `w` - Start of the week, given as a [Unix timestamp](https://en.wikipedia.org/wiki/Unix_time). *   `a` - Number of additions *   `d` - Number of deletions *   `c` - Number of commits
   *
   * @tags repos
   * @name ReposGetContributorsStats
   * @summary Get all contributor commit activity
   * @request GET:/repos/{owner}/{repo}/stats/contributors
   */
  reposGetContributorsStats = (
    owner: string,
    repo: string,
    params: RequestParams = {},
  ) =>
    this.http.request<ReposGetContributorsStatsData, any>({
      path: `/repos/${owner}/${repo}/stats/contributors`,
      method: "GET",
      format: "json",
      ...params,
    });
  /**
   * @description Returns the total commit counts for the `owner` and total commit counts in `all`. `all` is everyone combined, including the `owner` in the last 52 weeks. If you'd like to get the commit counts for non-owners, you can subtract `owner` from `all`. The array order is oldest week (index 0) to most recent week. The most recent week is seven days ago at UTC midnight to today at UTC midnight.
   *
   * @tags repos
   * @name ReposGetParticipationStats
   * @summary Get the weekly commit count
   * @request GET:/repos/{owner}/{repo}/stats/participation
   */
  reposGetParticipationStats = (
    owner: string,
    repo: string,
    params: RequestParams = {},
  ) =>
    this.http.request<ReposGetParticipationStatsData, BasicError>({
      path: `/repos/${owner}/${repo}/stats/participation`,
      method: "GET",
      format: "json",
      ...params,
    });
  /**
   * @description Each array contains the day number, hour number, and number of commits: *   `0-6`: Sunday - Saturday *   `0-23`: Hour of day *   Number of commits For example, `[2, 14, 25]` indicates that there were 25 total commits, during the 2:00pm hour on Tuesdays. All times are based on the time zone of individual commits.
   *
   * @tags repos
   * @name ReposGetPunchCardStats
   * @summary Get the hourly commit count for each day
   * @request GET:/repos/{owner}/{repo}/stats/punch_card
   */
  reposGetPunchCardStats = (
    owner: string,
    repo: string,
    params: RequestParams = {},
  ) =>
    this.http.request<ReposGetPunchCardStatsData, any>({
      path: `/repos/${owner}/${repo}/stats/punch_card`,
      method: "GET",
      format: "json",
      ...params,
    });
  /**
   * @description Users with push access in a repository can create commit statuses for a given SHA. Note: there is a limit of 1000 statuses per `sha` and `context` within a repository. Attempts to create more than 1000 statuses will result in a validation error.
   *
   * @tags repos
   * @name ReposCreateCommitStatus
   * @summary Create a commit status
   * @request POST:/repos/{owner}/{repo}/statuses/{sha}
   */
  reposCreateCommitStatus = (
    owner: string,
    repo: string,
    sha: string,
    data: ReposCreateCommitStatusPayload,
    params: RequestParams = {},
  ) =>
    this.http.request<ReposCreateCommitStatusData, any>({
      path: `/repos/${owner}/${repo}/statuses/${sha}`,
      method: "POST",
      body: data,
      type: ContentType.Json,
      format: "json",
      ...params,
    });
  /**
   * @description Lists the people watching the specified repository.
   *
   * @tags activity
   * @name ActivityListWatchersForRepo
   * @summary List watchers
   * @request GET:/repos/{owner}/{repo}/subscribers
   */
  activityListWatchersForRepo = (
    { owner, repo, ...query }: ActivityListWatchersForRepoParams,
    params: RequestParams = {},
  ) =>
    this.http.request<ActivityListWatchersForRepoData, any>({
      path: `/repos/${owner}/${repo}/subscribers`,
      method: "GET",
      query: query,
      format: "json",
      ...params,
    });
  /**
   * @description Gets information about whether the authenticated user is subscribed to the repository.
   *
   * @tags activity
   * @name ActivityGetRepoSubscription
   * @summary Get a repository subscription
   * @request GET:/repos/{owner}/{repo}/subscription
   */
  activityGetRepoSubscription = (
    owner: string,
    repo: string,
    params: RequestParams = {},
  ) =>
    this.http.request<ActivityGetRepoSubscriptionData, BasicError | void>({
      path: `/repos/${owner}/${repo}/subscription`,
      method: "GET",
      format: "json",
      ...params,
    });
  /**
   * @description If you would like to watch a repository, set `subscribed` to `true`. If you would like to ignore notifications made within a repository, set `ignored` to `true`. If you would like to stop watching a repository, [delete the repository's subscription](https://docs.github.com/enterprise-server@3.17/rest/activity/watching#delete-a-repository-subscription) completely.
   *
   * @tags activity
   * @name ActivitySetRepoSubscription
   * @summary Set a repository subscription
   * @request PUT:/repos/{owner}/{repo}/subscription
   */
  activitySetRepoSubscription = (
    owner: string,
    repo: string,
    data?: ActivitySetRepoSubscriptionPayload,
    params: RequestParams = {},
  ) =>
    this.http.request<ActivitySetRepoSubscriptionData, any>({
      path: `/repos/${owner}/${repo}/subscription`,
      method: "PUT",
      body: data,
      type: ContentType.Json,
      format: "json",
      ...params,
    });
  /**
   * @description This endpoint should only be used to stop watching a repository. To control whether or not you wish to receive notifications from a repository, [set the repository's subscription manually](https://docs.github.com/enterprise-server@3.17/rest/activity/watching#set-a-repository-subscription).
   *
   * @tags activity
   * @name ActivityDeleteRepoSubscription
   * @summary Delete a repository subscription
   * @request DELETE:/repos/{owner}/{repo}/subscription
   */
  activityDeleteRepoSubscription = (
    owner: string,
    repo: string,
    params: RequestParams = {},
  ) =>
    this.http.request<ActivityDeleteRepoSubscriptionData, any>({
      path: `/repos/${owner}/${repo}/subscription`,
      method: "DELETE",
      ...params,
    });
  /**
   * No description
   *
   * @tags repos
   * @name ReposListTags
   * @summary List repository tags
   * @request GET:/repos/{owner}/{repo}/tags
   */
  reposListTags = (
    { owner, repo, ...query }: ReposListTagsParams,
    params: RequestParams = {},
  ) =>
    this.http.request<ReposListTagsData, any>({
      path: `/repos/${owner}/${repo}/tags`,
      method: "GET",
      query: query,
      format: "json",
      ...params,
    });
  /**
   * @description > [!WARNING] > **Closing down notice:** This operation is closing down and will be removed after August 30, 2024. Use the "[Repository Rulesets](https://docs.github.com/enterprise-server@3.17/rest/repos/rules#get-all-repository-rulesets)" endpoint instead. This returns the tag protection states of a repository. This information is only available to repository administrators.
   *
   * @tags repos
   * @name ReposListTagProtection
   * @summary Closing down - List tag protection states for a repository
   * @request GET:/repos/{owner}/{repo}/tags/protection
   * @deprecated
   */
  reposListTagProtection = (
    owner: string,
    repo: string,
    params: RequestParams = {},
  ) =>
    this.http.request<ReposListTagProtectionData, BasicError>({
      path: `/repos/${owner}/${repo}/tags/protection`,
      method: "GET",
      format: "json",
      ...params,
    });
  /**
   * @description > [!WARNING] > **Closing down notice:** This operation is closing down and will be removed after August 30, 2024. Use the "[Repository Rulesets](https://docs.github.com/enterprise-server@3.17/rest/repos/rules#create-a-repository-ruleset)" endpoint instead. This creates a tag protection state for a repository. This endpoint is only available to repository administrators.
   *
   * @tags repos
   * @name ReposCreateTagProtection
   * @summary Closing down - Create a tag protection state for a repository
   * @request POST:/repos/{owner}/{repo}/tags/protection
   * @deprecated
   */
  reposCreateTagProtection = (
    owner: string,
    repo: string,
    data: ReposCreateTagProtectionPayload,
    params: RequestParams = {},
  ) =>
    this.http.request<ReposCreateTagProtectionData, BasicError>({
      path: `/repos/${owner}/${repo}/tags/protection`,
      method: "POST",
      body: data,
      type: ContentType.Json,
      format: "json",
      ...params,
    });
  /**
   * @description > [!WARNING] > **Closing down notice:** This operation is closing down and will be removed after August 30, 2024. Use the "[Repository Rulesets](https://docs.github.com/enterprise-server@3.17/rest/repos/rules#delete-a-repository-ruleset)" endpoint instead. This deletes a tag protection state for a repository. This endpoint is only available to repository administrators.
   *
   * @tags repos
   * @name ReposDeleteTagProtection
   * @summary Closing down - Delete a tag protection state for a repository
   * @request DELETE:/repos/{owner}/{repo}/tags/protection/{tag_protection_id}
   * @deprecated
   */
  reposDeleteTagProtection = (
    owner: string,
    repo: string,
    tagProtectionId: number,
    params: RequestParams = {},
  ) =>
    this.http.request<ReposDeleteTagProtectionData, BasicError>({
      path: `/repos/${owner}/${repo}/tags/protection/${tagProtectionId}`,
      method: "DELETE",
      ...params,
    });
  /**
   * @description Gets a redirect URL to download a tar archive for a repository. If you omit `:ref`, the repository’s default branch (usually `main`) will be used. Please make sure your HTTP framework is configured to follow redirects or you will need to use the `Location` header to make a second `GET` request. > [!NOTE] > For private repositories, these links are temporary and expire after five minutes.
   *
   * @tags repos
   * @name ReposDownloadTarballArchive
   * @summary Download a repository archive (tar)
   * @request GET:/repos/{owner}/{repo}/tarball/{ref}
   */
  reposDownloadTarballArchive = (
    owner: string,
    repo: string,
    ref: string,
    params: RequestParams = {},
  ) =>
    this.http.request<any, void>({
      path: `/repos/${owner}/${repo}/tarball/${ref}`,
      method: "GET",
      ...params,
    });
  /**
   * @description Lists the teams that have access to the specified repository and that are also visible to the authenticated user. For a public repository, a team is listed only if that team added the public repository explicitly. OAuth app tokens and personal access tokens (classic) need the `public_repo` or `repo` scope to use this endpoint with a public repository, and `repo` scope to use this endpoint with a private repository.
   *
   * @tags repos
   * @name ReposListTeams
   * @summary List repository teams
   * @request GET:/repos/{owner}/{repo}/teams
   */
  reposListTeams = (
    { owner, repo, ...query }: ReposListTeamsParams,
    params: RequestParams = {},
  ) =>
    this.http.request<ReposListTeamsData, BasicError>({
      path: `/repos/${owner}/${repo}/teams`,
      method: "GET",
      query: query,
      format: "json",
      ...params,
    });
  /**
   * No description
   *
   * @tags repos
   * @name ReposGetAllTopics
   * @summary Get all repository topics
   * @request GET:/repos/{owner}/{repo}/topics
   */
  reposGetAllTopics = (
    { owner, repo, ...query }: ReposGetAllTopicsParams,
    params: RequestParams = {},
  ) =>
    this.http.request<ReposGetAllTopicsData, BasicError>({
      path: `/repos/${owner}/${repo}/topics`,
      method: "GET",
      query: query,
      format: "json",
      ...params,
    });
  /**
   * No description
   *
   * @tags repos
   * @name ReposReplaceAllTopics
   * @summary Replace all repository topics
   * @request PUT:/repos/{owner}/{repo}/topics
   */
  reposReplaceAllTopics = (
    owner: string,
    repo: string,
    data: ReposReplaceAllTopicsPayload,
    params: RequestParams = {},
  ) =>
    this.http.request<
      ReposReplaceAllTopicsData,
      BasicError | ValidationErrorSimple
    >({
      path: `/repos/${owner}/${repo}/topics`,
      method: "PUT",
      body: data,
      type: ContentType.Json,
      format: "json",
      ...params,
    });
  /**
   * @description A transfer request will need to be accepted by the new owner when transferring a personal repository to another user. The response will contain the original `owner`, and the transfer will continue asynchronously. For more details on the requirements to transfer personal and organization-owned repositories, see [about repository transfers](https://docs.github.com/enterprise-server@3.17/articles/about-repository-transfers/).
   *
   * @tags repos
   * @name ReposTransfer
   * @summary Transfer a repository
   * @request POST:/repos/{owner}/{repo}/transfer
   */
  reposTransfer = (
    owner: string,
    repo: string,
    data: ReposTransferPayload,
    params: RequestParams = {},
  ) =>
    this.http.request<ReposTransferData, any>({
      path: `/repos/${owner}/${repo}/transfer`,
      method: "POST",
      body: data,
      type: ContentType.Json,
      format: "json",
      ...params,
    });
  /**
   * @description Shows whether dependency alerts are enabled or disabled for a repository. The authenticated user must have admin read access to the repository. For more information, see "[About security alerts for vulnerable dependencies](https://docs.github.com/enterprise-server@3.17/articles/about-security-alerts-for-vulnerable-dependencies)".
   *
   * @tags repos
   * @name ReposCheckVulnerabilityAlerts
   * @summary Check if vulnerability alerts are enabled for a repository
   * @request GET:/repos/{owner}/{repo}/vulnerability-alerts
   */
  reposCheckVulnerabilityAlerts = (
    owner: string,
    repo: string,
    params: RequestParams = {},
  ) =>
    this.http.request<ReposCheckVulnerabilityAlertsData, void>({
      path: `/repos/${owner}/${repo}/vulnerability-alerts`,
      method: "GET",
      ...params,
    });
  /**
   * @description Enables dependency alerts and the dependency graph for a repository. The authenticated user must have admin access to the repository. For more information, see "[About security alerts for vulnerable dependencies](https://docs.github.com/enterprise-server@3.17/articles/about-security-alerts-for-vulnerable-dependencies)".
   *
   * @tags repos
   * @name ReposEnableVulnerabilityAlerts
   * @summary Enable vulnerability alerts
   * @request PUT:/repos/{owner}/{repo}/vulnerability-alerts
   */
  reposEnableVulnerabilityAlerts = (
    owner: string,
    repo: string,
    params: RequestParams = {},
  ) =>
    this.http.request<ReposEnableVulnerabilityAlertsData, any>({
      path: `/repos/${owner}/${repo}/vulnerability-alerts`,
      method: "PUT",
      ...params,
    });
  /**
   * @description Disables dependency alerts for a repository. The authenticated user must have admin access to the repository. For more information, see "[About security alerts for vulnerable dependencies](https://docs.github.com/enterprise-server@3.17/articles/about-security-alerts-for-vulnerable-dependencies)".
   *
   * @tags repos
   * @name ReposDisableVulnerabilityAlerts
   * @summary Disable vulnerability alerts
   * @request DELETE:/repos/{owner}/{repo}/vulnerability-alerts
   */
  reposDisableVulnerabilityAlerts = (
    owner: string,
    repo: string,
    params: RequestParams = {},
  ) =>
    this.http.request<ReposDisableVulnerabilityAlertsData, any>({
      path: `/repos/${owner}/${repo}/vulnerability-alerts`,
      method: "DELETE",
      ...params,
    });
  /**
   * @description Gets a redirect URL to download a zip archive for a repository. If you omit `:ref`, the repository’s default branch (usually `main`) will be used. Please make sure your HTTP framework is configured to follow redirects or you will need to use the `Location` header to make a second `GET` request. > [!NOTE] > For private repositories, these links are temporary and expire after five minutes. If the repository is empty, you will receive a 404 when you follow the redirect.
   *
   * @tags repos
   * @name ReposDownloadZipballArchive
   * @summary Download a repository archive (zip)
   * @request GET:/repos/{owner}/{repo}/zipball/{ref}
   */
  reposDownloadZipballArchive = (
    owner: string,
    repo: string,
    ref: string,
    params: RequestParams = {},
  ) =>
    this.http.request<any, void>({
      path: `/repos/${owner}/${repo}/zipball/${ref}`,
      method: "GET",
      ...params,
    });
  /**
   * @description Creates a new repository using a repository template. Use the `template_owner` and `template_repo` route parameters to specify the repository to use as the template. If the repository is not public, the authenticated user must own or be a member of an organization that owns the repository. To check if a repository is available to use as a template, get the repository's information using the [Get a repository](https://docs.github.com/enterprise-server@3.17/rest/repos/repos#get-a-repository) endpoint and check that the `is_template` key is `true`. OAuth app tokens and personal access tokens (classic) need the `public_repo` or `repo` scope to create a public repository, and `repo` scope to create a private repository.
   *
   * @tags repos
   * @name ReposCreateUsingTemplate
   * @summary Create a repository using a template
   * @request POST:/repos/{template_owner}/{template_repo}/generate
   */
  reposCreateUsingTemplate = (
    templateOwner: string,
    templateRepo: string,
    data: ReposCreateUsingTemplatePayload,
    params: RequestParams = {},
  ) =>
    this.http.request<ReposCreateUsingTemplateData, any>({
      path: `/repos/${templateOwner}/${templateRepo}/generate`,
      method: "POST",
      body: data,
      type: ContentType.Json,
      format: "json",
      ...params,
    });
}
