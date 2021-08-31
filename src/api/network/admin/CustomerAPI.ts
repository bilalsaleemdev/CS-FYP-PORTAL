import { RequestType } from "../../models/RequestType";
import { AscentRequest } from "../../models/Request";
import { processRequest } from "../Network";
import AscentResponse from "../AscentResponse";
import CustomerListRes from "../../api-responses/admin/CustomerListRes";
// import { getErrorResponse } from '../customer/EmployeeApi';
import CustomerRes from "../../api-responses/admin/CustomerRes";
import { CancelToken } from "axios";
import CustomerRiskReportsRes from "../../api-responses/admin/CustomerRiskReportsRes";
import CustomerScreeningSummaryListRes from '../../api-responses/admin/CustomerScreeningSummaryListRes'
import CustomerRiskReport from "../../models/customer/CustomerRiskReport";
import CustomerProfile from "../../models/customer/CustomerProfile";
import CustomerProfileRes from "../../api-responses/admin/CustomerProfileRes";
import CustomerCrpIndividualProfile from '../../models/customer/CustomerCrpIndividualProfile';
import CustomerScreeningDetails from "../../models/customer/CustomerScreeningDetails";
import CustomerExpiringDocumentstRes from "../../api-responses/admin/CustomerExpiringDocumentstRes";
import CustomerScreeningDetailsRes from "../../api-responses/admin/CustomerScreeningDetailsRes";
import CustomerRestrictedListRes from "../../api-responses/admin/CustomerRestrictedListRes";
import CustomerPeriodicReviewRes from "../../api-responses/admin/CustomerPeriodicReviewRes";
import CustomerDocumentTypeRes from "../../api-responses/admin/CustomerDocumentTypeRes";
import CustomerInvestorActivityRes from "../../api-responses/admin/CustomerInvestorActivityRes";
import CustomerRequiredDocumentRes from "../../api-responses/admin/CustomerRequiredDocumentRes";
import CustomerDocumentListRes from "../../api-responses/admin/CustomerDocumentListRes";
import CustomerSingleRestrictedListRes from "../../api-responses/admin/CustomerSingleRestrictedListRes";
import RestrictedListCustomerRes from "../../api-responses/admin/RestrictedListCustomerRes";
import RestrictedListCustomersRes from "../../api-responses/admin/RestrictedListCustomers/RestrictedListCustomersRes";
import CustomerVerifyDocumentRes from "../../api-responses/admin/CustomerVerifyDocumentRes";
import SingleDocumentRes from "../../api-responses/admin/SingleDocumentRes";
import CustomerProfileCorporate from "../../models/customer/CustomerProfileCorporate";
import CustomerProfileCorporateRes from "../../api-responses/admin/CustomerProfileCorporateRes";
import CustomerDocumentList from "../../models/admin/CustomerDocumentList";
import CustomerCrpRoleMetaRes from "../../api-responses/admin/CustomerCrpRoleMetaRes";

import ScreeningInternetResultRes from "../../api-responses/admin/ScreeningInternetResultRes";
import ScreeningWorldCheckRes from "../../api-responses/admin/ScreeningWorldCheckRes";
import ScreeningRes from "../../api-responses/admin/ScreeningRes";
import ScreeningResPull from "../../api-responses/admin/ScreeningResPull";
import QuickScanListRes from "../../api-responses/admin/QuickScanListRes";
import CustomerCrpsProfileRes from "../../api-responses/admin/CustomerCrpsIndividualProfileRes";
import CrpsCustomerListRes from "../../api-responses/admin/CrpsCustomerListRes";
import CustomerCrpCorporateProfile from "../../models/customer/CustomerCrpCorporateProfile";
import CustomerCrpIndividualProfileRes from "../../api-responses/admin/CustomerCrpsIndividualProfileRes";
import CustomerCrpsCorporateProfileRes from "../../api-responses/admin/CustomerCrpsCorporateProfileRes";
import ScreeningSummaryRes from "../../api-responses/admin/ScreeningSummaryRes";
import ScreeningCommentsRes from "../../api-responses/admin/ScreeningCommentsRes";
import ScreeningConclusionRes from "../../api-responses/admin/ScreeningConclusionRes";
import CRPRolesMetaRes from "../../api-responses/admin/CRPRolesMetaRes";
import CRPIndividualDocumentListRes from "../../api-responses/admin/CRPIndividualDocumentListRes";
import CRPIndividualDocumentRes from "../../api-responses/admin/CRPIndividualDocumentRes";
import RistAssessmentReportRes from "../../api-responses/admin/RistAssessmentReportRes";
import RistAssessmentReportRecordRes from "../../api-responses/admin/RistAssessmentReportRecordRes";
import RistAssessmentReportOverAllStatusRes from "../../api-responses/admin/RistAssessmentReportOverAllStatusRes";
import RistAssessmentStatusRes from "../../api-responses/admin/RistAssessmentStatusRes";
import QuickScanDownloadCSVRes from "../../api-responses/admin/QuickScanDownloadCSVRes";

// export const getCustomerListAPI = async (orgId: string, fundId: string, prams: any,cancelToken: CancelToken): Promise<AscentResponse<CustomerListRes>> => {
//         const url = `organizations/${orgId}/funds/${fundId}/customers`;
//         const request: AscentRequest = { type: RequestType.GET, urlString: url, params:prams };
//         try {
//             const response = await processRequest<AscentResponse<CustomerListRes>>(request, cancelToken);
//             return response.data;
//         } catch (error) {
//             return getErrorResponse<CustomerListRes>(error);
//         }
//     }
    
    
//     export const createCustomerAPI = async (orgId: string, fundId: string, data: any,cancelToken: CancelToken): Promise<AscentResponse<CustomerRes>> => {
//         const url = `organizations/${orgId}/admin/funds/${fundId}/customer`;
//         const request: AscentRequest = { type: RequestType.POST, urlString: url, params: data };
        
//         try {
//             const response = await processRequest<AscentResponse<CustomerRes>>(request, cancelToken);
//             return response.data;
//         } catch (error) {
//             return getErrorResponse<CustomerRes>(error);
//         }
//     };
    
//     export const getCustomerTypeAPI = async (orgId: string, fundId: string, customerId: number, cancelToken: CancelToken): Promise<AscentResponse<CustomerProfileRes>> => {
//         const url = `organizations/${orgId}/funds/${fundId}/customers/${customerId}`;
//         const request: AscentRequest = { type: RequestType.GET, urlString: url };
//         try {
//             const response = await processRequest<AscentResponse<CustomerProfileRes>>(request, cancelToken);
//             return response.data;
//         } catch (error) {
//             return getErrorResponse<CustomerProfileRes>(error);
//         }
//     }

//     export const getCustomerAPI = async (orgId: string, fundId: string, customerId: number, cancelToken: CancelToken): Promise<AscentResponse<CustomerProfileRes>> => {
//         const url = `organizations/${orgId}/funds/${fundId}/customers/${customerId}`;
//         const request: AscentRequest = { type: RequestType.GET, urlString: url };
//         try {
//             const response = await processRequest<AscentResponse<CustomerProfileRes>>(request, cancelToken);
//             return response.data;
//         } catch (error) {
//             return getErrorResponse<CustomerProfileRes>(error);
//         }
//     }

//     export const getCustomerCorporateAPI = async (orgId: string, fundId: string, customerId: number, cancelToken: CancelToken): Promise<AscentResponse<CustomerProfileCorporateRes>> => {
//         const url = `organizations/${orgId}/funds/${fundId}/customers/${customerId}`;
//         const request: AscentRequest = { type: RequestType.GET, urlString: url };
//         try {
//             const response = await processRequest<AscentResponse<CustomerProfileCorporateRes>>(request, cancelToken);
//             return response.data;
//         } catch (error) {
//             return getErrorResponse<CustomerProfileCorporateRes>(error);
//         }
//     }
    
// export const getCustomerListAPI = async (orgId: string, fundId: string, prams: any, cancelToken: CancelToken): Promise<AscentResponse<CustomerListRes>> => {
//     const url = `organizations/${orgId}/funds/${fundId}/customers`;
//     const request: AscentRequest = { type: RequestType.GET, urlString: url, params: prams };
//     try {
//         const response = await processRequest<AscentResponse<CustomerListRes>>(request, cancelToken);
//         return response.data;
//     } catch (error) {
//         return getErrorResponse<CustomerListRes>(error);
//     }
// }

// export const createCustomerAPI = async (orgId: string, fundId: string, data: any, cancelToken: CancelToken): Promise<AscentResponse<CustomerRes>> => {
//     const url = `organizations/${orgId}/admin/funds/${fundId}/customer`;
//     const request: AscentRequest = { type: RequestType.POST, urlString: url, params: data };

//     try {
//         const response = await processRequest<AscentResponse<CustomerRes>>(request, cancelToken);
//         return response.data;
//     } catch (error) {
//         return getErrorResponse<CustomerRes>(error);
//     }
// };

// export const getCustomerTypeAPI = async (orgId: string, fundId: string, customerId: number, cancelToken: CancelToken): Promise<AscentResponse<CustomerProfileRes>> => {
//     const url = `organizations/${orgId}/funds/${fundId}/customers/${customerId}`;
//     const request: AscentRequest = { type: RequestType.GET, urlString: url };
//     try {
//         const response = await processRequest<AscentResponse<CustomerProfileRes>>(request, cancelToken);
//         return response.data;
//     } catch (error) {
//         return getErrorResponse<CustomerProfileRes>(error);
//     }
// }

// export const getCustomerAPI = async (orgId: string, fundId: string, customerId: number, cancelToken: CancelToken): Promise<AscentResponse<CustomerProfileRes>> => {
//     const url = `organizations/${orgId}/funds/${fundId}/customers/${customerId}`;
//     const request: AscentRequest = { type: RequestType.GET, urlString: url };
//     try {
//         const response = await processRequest<AscentResponse<CustomerProfileRes>>(request, cancelToken);
//         return response.data;
//     } catch (error) {
//         return getErrorResponse<CustomerProfileRes>(error);
//     }
// }

// export const getCustomerCorporateAPI = async (orgId: string, fundId: string, customerId: number, cancelToken: CancelToken): Promise<AscentResponse<CustomerProfileCorporateRes>> => {
//     const url = `organizations/${orgId}/funds/${fundId}/customers/${customerId}`;
//     const request: AscentRequest = { type: RequestType.GET, urlString: url };
//     try {
//         const response = await processRequest<AscentResponse<CustomerProfileCorporateRes>>(request, cancelToken);
//         return response.data;
//     } catch (error) {
//         return getErrorResponse<CustomerProfileCorporateRes>(error);
//     }
// }

// export const updateCustomerAPI = async (orgId: string, fundId: string, customerId: string, cancelToken: CancelToken): Promise<AscentResponse<CustomerRes>> => {
//     const url = `organizations/${orgId}/admin/funds/${fundId}/customers/${customerId}`;
//     const request: AscentRequest = { type: RequestType.PUT, urlString: url };
//     try {
//         const response = await processRequest<AscentResponse<CustomerRes>>(request, cancelToken);
//         return response.data;
//     } catch (error) {
//         return getErrorResponse<CustomerRes>(error);
//     }
// }

// export const getCustomerRiskReportsAPI = async (orgId: string, fundId: string, customerId: string, cancelToken: CancelToken): Promise<AscentResponse<CustomerRiskReportsRes>> => {
//     const url = `organizations/${orgId}/admin/funds/${fundId}/customers/${customerId}/risk-reports`;
//     const request: AscentRequest = { type: RequestType.GET, urlString: url };
//     try {
//         const response = await processRequest<AscentResponse<CustomerRiskReportsRes>>(request, cancelToken);
//         return response.data;
//     } catch (error) {
//         return getErrorResponse<CustomerRiskReportsRes>(error);
//     }
// }

// export const getCustomerRiskReportRecentAPI = async (orgId: string, fundId: string, customerId: string, cancelToken: CancelToken): Promise<AscentResponse<CustomerRiskReport>> => {
//     const url = `organizations/${orgId}/admin/funds/${fundId}/customers/${customerId}/risk-report/recent`;
//     const request: AscentRequest = { type: RequestType.GET, urlString: url };
//     try {
//         const response = await processRequest<AscentResponse<CustomerRiskReport>>(request, cancelToken);
//         return response.data;
//     } catch (error) {
//         return getErrorResponse<CustomerRiskReport>(error);
//     }
// }

// export const getCustomerScreeningSummaryAPI = async (orgId: string, fundId: string, data: any, cancelToken: CancelToken): Promise<AscentResponse<CustomerScreeningSummaryListRes>> => {
//     const url = `organizations/${orgId}/funds/${fundId}/humanSearch/customer/screeningStatus`;
//     const request: AscentRequest = { type: RequestType.POST, urlString: url, params: data };
//     try {
//         const response = await processRequest<AscentResponse<CustomerScreeningSummaryListRes>>(request, cancelToken);
//         return response.data;
//     } catch (error) {
//         return getErrorResponse<CustomerScreeningSummaryListRes>(error);
//     }
// }

// export const getCustomerScreeningDetailAPI = async (orgId: string, fundId: string, customerId: string, cancelToken: CancelToken): Promise<AscentResponse<CustomerScreeningDetailsRes>> => {
//     const url = `organizations/${orgId}/admin/funds/${fundId}/customers/${customerId}/screening/details`;
//     const request: AscentRequest = { type: RequestType.GET, urlString: url };
//     try {
//         const response = await processRequest<AscentResponse<CustomerScreeningDetailsRes>>(request, cancelToken);
//         return response.data;
//     } catch (error) {
//         return getErrorResponse<CustomerScreeningDetailsRes>(error);
//     }
// }

// export const getCustomerExpiryDocumentsAPI = async (orgId: string, fundId: string, cancelToken: CancelToken): Promise<AscentResponse<CustomerExpiringDocumentstRes>> => {
//     const url = `organizations/${orgId}/funds/${fundId}/documents-expiring`;
//     const request: AscentRequest = { type: RequestType.GET, urlString: url };
//     try {
//         const response = await processRequest<AscentResponse<CustomerExpiringDocumentstRes>>(request, cancelToken);
//         return response.data;
//     } catch (error) {
//         return getErrorResponse<CustomerExpiringDocumentstRes>(error);
//     }
// }
// export const getOwnRestrincedListAPI = async (orgId: string, fundId: string, data:any, cancelToken: CancelToken): Promise<AscentResponse<CustomerRestrictedListRes>> => {
//     const url = `organizations/${orgId}/funds/${fundId}/restricted-lists`;
//     const request: AscentRequest = { type: RequestType.GET, urlString: url,params:data };
//     try {
//         const response = await processRequest<AscentResponse<CustomerRestrictedListRes>>(request, cancelToken);
//         return response.data;
//     } catch (error) {
//         return getErrorResponse<CustomerRestrictedListRes>(error);
//     }
// }

// export const createOwnRestrincedListAPI = async (orgId: string, fundId: string, params: any, cancelToken: CancelToken): Promise<AscentResponse<CustomerRestrictedListRes>> => {
//     // const url = `organizations/${orgId}/funds/${fundId}/restricted-lists`;
//     const url = `organizations/${orgId}/funds/${fundId}/restricted-lists`;
//     const request: AscentRequest = { type: RequestType.POST, urlString: url, params: params };
//     try {
//         const response = await processRequest<AscentResponse<CustomerRestrictedListRes>>(request, cancelToken);
//         return response.data;
//     } catch (error) {
//         return getErrorResponse<CustomerRestrictedListRes>(error);
//     }
// }
// export const updateOwnRestrincedListAPI = async (orgId: string, fundId: string, restrictedListsId: Number, params: any, cancelToken: CancelToken): Promise<AscentResponse<CustomerRestrictedListRes>> => {
//     const url = `organizations/${orgId}/funds/${fundId}/restricted-lists/${restrictedListsId}`;

//     const request: AscentRequest = { type: RequestType.PUT, urlString: url, params: params };
//     try {
//         const response = await processRequest<AscentResponse<CustomerRestrictedListRes>>(request, cancelToken);
//         return response.data;
//     } catch (error) {
//         return getErrorResponse<CustomerRestrictedListRes>(error);
//     }
// }
// export const deleteOwnRestrincedListAPI = async (orgId: string, fundId: string, restrictedListId: string, cancelToken: CancelToken): Promise<AscentResponse<SingleDocumentRes>> => {
//     const url = `organizations/${orgId}/funds/${fundId}/restricted-lists/${restrictedListId}`;
//     const request: AscentRequest = { type: RequestType.DELETE, urlString: url };
//     try {
//         const response = await processRequest<AscentResponse<SingleDocumentRes>>(request, cancelToken);
//         return response.data;
//     } catch (error) {
//         return getErrorResponse<SingleDocumentRes>(error);
//     }
// }

// export const getSingleRestricteListAPI = async (orgId: string, fundId: string, restrictedListId: number, cancelToken: CancelToken): Promise<AscentResponse<CustomerSingleRestrictedListRes>> => {
//     const url = `organizations/${orgId}/funds/${fundId}/restricted-lists/${restrictedListId}`;
//     const request: AscentRequest = { type: RequestType.GET, urlString: url };
//     try {
//         const response = await processRequest<AscentResponse<CustomerSingleRestrictedListRes>>(request, cancelToken);
//         return response.data;
//     } catch (error) {
//         return getErrorResponse<CustomerSingleRestrictedListRes>(error);
//     }
// }

// export const createOwnRestrincedListCustomerAPI = async (orgId: string, fundId: string, restrictedListId: number, params: any, cancelToken: CancelToken): Promise<AscentResponse<RestrictedListCustomerRes>> => {
//     const url = `organizations/${orgId}/funds/${fundId}/restricted-lists/${restrictedListId}/customers`;
//     const request: AscentRequest = { type: RequestType.POST, urlString: url, params: params };
//     try {
//         const response = await processRequest<AscentResponse<RestrictedListCustomerRes>>(request, cancelToken);
//         return response.data;
//     } catch (error) {
//         return getErrorResponse<RestrictedListCustomerRes>(error);
//     }
// }
// export const updateOwnRestrincedListCustomerAPI = async (orgId: string, fundId: string, restrictedListId: number, params: any, cancelToken: CancelToken): Promise<AscentResponse<RestrictedListCustomerRes>> => {
//     const url = `organizations/${orgId}/funds/${fundId}/restricted-lists/${restrictedListId}/customers/${params.id}`;
//     const request: AscentRequest = { type: RequestType.PUT, urlString: url, params: params };
//     try {
//         const response = await processRequest<AscentResponse<RestrictedListCustomerRes>>(request, cancelToken);
//         return response.data;
//     } catch (error) {
//         return getErrorResponse<RestrictedListCustomerRes>(error);
//     }
// }
// export const getOwnRestrincedListCustomersAPI = async (orgId: string, fundId: string, restrictedListId: number,data:any, cancelToken: CancelToken): Promise<AscentResponse<RestrictedListCustomersRes>> => {
//     const url = `organizations/${orgId}/funds/${fundId}/restricted-lists/${restrictedListId}/customers`;
//     const request: AscentRequest = { type: RequestType.GET, urlString: url, params:data };
//     try {
//         const response = await processRequest<AscentResponse<RestrictedListCustomersRes>>(request, cancelToken);
//         return response.data;
//     } catch (error) {
//         return getErrorResponse<RestrictedListCustomersRes>(error);
//     }
// }

// export const getPeriodicReviewListAPI = async (orgId: string, fundId: string,dataToSend:any, cancelToken: CancelToken): Promise<AscentResponse<CustomerPeriodicReviewRes>> => {
//     const url = `organizations/${orgId}/funds/${fundId}/getPeriodicReviewList`;
//     const request: AscentRequest = { type: RequestType.GET, urlString: url,params:dataToSend };
//     try {
//         const response = await processRequest<AscentResponse<CustomerPeriodicReviewRes>>(request, cancelToken);
//         return response.data;
//     } catch (error) {
//         return getErrorResponse<CustomerPeriodicReviewRes>(error);
//     }
// }
// export const getInvertorActivityAPI = async (orgId: string, fundId: string, cancelToken: CancelToken): Promise<AscentResponse<CustomerInvestorActivityRes>> => {
//     const url = `organizations/${orgId}/funds/${fundId}/getInvestorActivity`;
//     const request: AscentRequest = { type: RequestType.GET, urlString: url };
//     try {
//         const response = await processRequest<AscentResponse<CustomerInvestorActivityRes>>(request, cancelToken);
//         return response.data;
//     } catch (error) {
//         return getErrorResponse<CustomerInvestorActivityRes>(error);
//     }
// }
// export const getgetInvestorTypesAPI = async (orgId: string, fundId: string, cancelToken: CancelToken): Promise<AscentResponse<CustomerInvestorActivityRes>> => {
//     const url = `organizations/${orgId}/funds/${fundId}/getInvestorTypes`;
//     const request: AscentRequest = { type: RequestType.GET, urlString: url };
//     try {
//         const response = await processRequest<AscentResponse<CustomerInvestorActivityRes>>(request, cancelToken);
//         return response.data;
//     } catch (error) {
//         return getErrorResponse<CustomerInvestorActivityRes>(error);
//     }
// }


// export const getFundDocumentAPI = async (orgId: string, fundId: string, cancelToken: CancelToken): Promise<AscentResponse<CustomerDocumentTypeRes>> => {
//     const url = `organizations/${orgId}/funds/${fundId}/document-types`;
//     const request: AscentRequest = { type: RequestType.GET, urlString: url };
//     try {
//         const response = await processRequest<AscentResponse<CustomerDocumentTypeRes>>(request, cancelToken);
//         return response.data;
//     } catch (error) {
//         return getErrorResponse<CustomerDocumentTypeRes>(error);
//     }
// }

// export const getCrpRoleAPI = async (orgId: string, fundId: string, cancelToken: CancelToken): Promise<AscentResponse<CustomerCrpRoleMetaRes>> => {
//     const url = `organizations/${orgId}/funds/${fundId}/crp-roles-meta`;
//     const request: AscentRequest = { type: RequestType.GET, urlString: url };
//     try {
//         const response = await processRequest<AscentResponse<CustomerCrpRoleMetaRes>>(request, cancelToken);
//         return response.data;
//     } catch (error) {
//         return getErrorResponse<CustomerCrpRoleMetaRes>(error);
//     }
// }

// export const getCrpsAPI = async (orgId: string, fundId: string, prams: any, cancelToken: CancelToken): Promise<AscentResponse<CrpsCustomerListRes>> => {
//     const url = `organizations/${orgId}/funds/${fundId}/customer-crps`;
//     const request: AscentRequest = { type: RequestType.GET, urlString: url, params: prams };
//     try {
//         const response = await processRequest<AscentResponse<CrpsCustomerListRes>>(request, cancelToken);
//         return response.data;
//     } catch (error) {
//         return getErrorResponse<CrpsCustomerListRes>(error);
//     }
// }

// export const deleteCrpsAPI = async (orgId: string, fundId: string, customerId: string, crpId: number|null, prams: any, cancelToken: CancelToken): Promise<AscentResponse<SingleDocumentRes>> => {
//     const url = `organizations/${orgId}/funds/${fundId}/customer-crps/${crpId}?customer_id=${customerId}`;
//     const request: AscentRequest = { type: RequestType.DELETE, urlString: url,  params: prams };
//     try {
//         const response = await processRequest<AscentResponse<SingleDocumentRes>>(request, cancelToken);
//         return response.data;
//     } catch (error) {
//         return getErrorResponse<SingleDocumentRes>(error);
//     }
// }

// export const createNewCustomerCRPIndividualAPI = async (orgId: string, fundId: string, params: CustomerCrpIndividualProfile, cancelToken: CancelToken): Promise<AscentResponse<CustomerCrpIndividualProfileRes>> => {
//     const url = `organizations/${orgId}/funds/${fundId}/customer-crps`;    
//     var request: AscentRequest = { type: RequestType.POST, urlString: url, params: params };
//     try {
//         const response = await processRequest<AscentResponse<CustomerCrpIndividualProfileRes>>(request, cancelToken);
//         return response.data;
//     } catch (error) {
//         return getErrorResponse<CustomerCrpIndividualProfileRes>(error);
//     }
// }
// export const createNewCustomerCRPCorporateAPI = async (orgId: string, fundId: string, params: CustomerCrpCorporateProfile, cancelToken: CancelToken): Promise<AscentResponse<CustomerCrpsCorporateProfileRes>> => {
//     const url = `organizations/${orgId}/funds/${fundId}/customer-crps`;    
//     var request: AscentRequest = { type: RequestType.POST, urlString: url, params: params };
//     try {
//         const response = await processRequest<AscentResponse<CustomerCrpsCorporateProfileRes>>(request, cancelToken);
//         return response.data;
//     } catch (error) {
//         return getErrorResponse<CustomerCrpsCorporateProfileRes>(error);
//     }
// }
// export const editCustomerCRPIndividualAPI = async (orgId: string, fundId: string, crpId: number|null, customerId: string, params: CustomerCrpIndividualProfile, cancelToken: CancelToken): Promise<AscentResponse<CustomerCrpIndividualProfile>> => {
//     const url = `organizations/${orgId}/funds/${fundId}/customer-crps/${crpId}?customer_id=${customerId}`;
//     const request: AscentRequest = { type: RequestType.PUT, urlString: url, params: params };
    
//     try {
//         const response = await processRequest<AscentResponse<CustomerCrpIndividualProfile>>(request, cancelToken);
//         return response.data;
//     } catch (error) {
//         return getErrorResponse<CustomerCrpIndividualProfile>(error);
//     }
// }

// export const editCustomerCRPCorporateAPI = async (orgId: string, fundId: string, crpId: number|null, customerId: string, params: CustomerCrpCorporateProfile, cancelToken: CancelToken): Promise<AscentResponse<CustomerCrpCorporateProfile>> => {
//     const url = `organizations/${orgId}/funds/${fundId}/customer-crps/${crpId}?customer_id=${customerId}`;
//     const request: AscentRequest = { type: RequestType.PUT, urlString: url, params: params };
    
//     try {
//         const response = await processRequest<AscentResponse<CustomerCrpCorporateProfile>>(request, cancelToken);
//         return response.data;
//     } catch (error) {
//         return getErrorResponse<CustomerCrpCorporateProfile>(error);
//     }
// }

// export const createNewCustomerAPI = async (orgId: string, fundId: string, params: CustomerProfile, cancelToken: CancelToken): Promise<AscentResponse<CustomerProfileRes>> => {
//     const url = `organizations/${orgId}/funds/${fundId}/customers`;
  
//     var request: AscentRequest = { type: RequestType.POST, urlString: url, params: params };
//     // if(!!window.customerData){
//     //      request = { type: RequestType.PUT, urlString: url, params: params };
//     // }
//     try {
//         const response = await processRequest<AscentResponse<CustomerProfileRes>>(request, cancelToken);
//         return response.data;
//     } catch (error) {
//         return getErrorResponse<CustomerProfileRes>(error);
//     }
// }
// export const createNewCorporateCustomerAPI = async (orgId: string, fundId: string, params: CustomerProfileCorporate, cancelToken: CancelToken): Promise<AscentResponse<CustomerProfileCorporateRes>> => {
//     const url = `organizations/${orgId}/funds/${fundId}/customers`;
  
//     var request: AscentRequest = { type: RequestType.POST, urlString: url, params: params };
//     try {
//         const response = await processRequest<AscentResponse<CustomerProfileCorporateRes>>(request, cancelToken);
//         return response.data;
//     } catch (error) {
//         return getErrorResponse<CustomerProfileCorporateRes>(error);
//     }
// }

// export const updateCustomerAPI = async (orgId: string, fundId: string, params: CustomerProfile, customerId: Number, cancelToken: CancelToken): Promise<AscentResponse<CustomerProfileRes>> => {
//     const url = `organizations/${orgId}/funds/${fundId}/customers/${customerId}`;
//     const request: AscentRequest = { type: RequestType.PUT, urlString: url, params: params };
    
//     try {
//         const response = await processRequest<AscentResponse<CustomerProfileRes>>(request, cancelToken);
//         return response.data;
//     } catch (error) {
//         return getErrorResponse<CustomerProfileRes>(error);
//     }
// }
// export const updateCorporateCustomerAPI = async (orgId: string, fundId: string, params: CustomerProfileCorporate, customerId: Number, cancelToken: CancelToken): Promise<AscentResponse<CustomerProfileCorporateRes>> => {
//     const url = `organizations/${orgId}/funds/${fundId}/customers/${customerId}`;
//     const request: AscentRequest = { type: RequestType.PUT, urlString: url, params: params };
    
//     try {
//         const response = await processRequest<AscentResponse<CustomerProfileCorporateRes>>(request, cancelToken);
//         return response.data;
//     } catch (error) {
//         return getErrorResponse<CustomerProfileCorporateRes>(error);
//     }
// }

// export const getDocumentTypeListAPI = async (orgId: string, fundId: string, cancelToken: CancelToken): Promise<AscentResponse<CustomerDocumentTypeRes>> => {
//     const url = `organizations/${orgId}/funds/${fundId}/document-types`;
//     const request: AscentRequest = { type: RequestType.GET, urlString: url };

//     try {
//         const response = await processRequest<AscentResponse<CustomerDocumentTypeRes>>(request, cancelToken);
//         return response.data;
//     } catch (error) {
//         return getErrorResponse<CustomerDocumentTypeRes>(error);
//     }
// }
// export const getRequiredDocumentAPI = async (orgId: string, fundId: string, customerId: String, cancelToken: CancelToken): Promise<AscentResponse<CustomerRequiredDocumentRes>> => {
//     const url = `organizations/${orgId}/funds/${fundId}/required-documents?customer_id=${customerId}`;
//     const request: AscentRequest = { type: RequestType.GET, urlString: url };

//     try {
//         const response = await processRequest<AscentResponse<CustomerRequiredDocumentRes>>(request, cancelToken);
//         return response.data;
//     } catch (error) {
//         return getErrorResponse<CustomerRequiredDocumentRes>(error);
//     }
// }

// export const getCRPIndividualDocumentAPI = async (orgId: string, fundId: string, crpID: any, customerID: any, cancelToken: CancelToken): Promise<AscentResponse<CRPIndividualDocumentRes>> => {
//     const url = `organizations/${orgId}/funds/${fundId}/customer-crps/${crpID}/documents?customer_id=${customerID}`;
//     const request: AscentRequest = { type: RequestType.GET, urlString: url };

//     try {
//         const response = await processRequest<AscentResponse<CRPIndividualDocumentRes>>(request, cancelToken);
//         return response.data;
//     } catch (error) {
//         return getErrorResponse<CRPIndividualDocumentRes>(error);
//     }
// }
// export const getCRPIndividualSingleDocumentAPI = async (orgId: string, fundId: string, crpID: any, customerID: any, documentID: number, cancelToken: CancelToken): Promise<AscentResponse<SingleDocumentRes>> => {
//     const url = `organizations/${orgId}/funds/${fundId}/customer-crps/${crpID}/documents/${documentID}?customer_id=${customerID}`;
//     const request: AscentRequest = { type: RequestType.GET, urlString: url };

//     try {
//         const response = await processRequest<AscentResponse<SingleDocumentRes>>(request, cancelToken);
//         return response.data;
//     } catch (error) {
//         return getErrorResponse<SingleDocumentRes>(error);
//     }
// }

// export const getCRPRolesMetaAPI = async (orgId: string, fundId: string, cancelToken: CancelToken): Promise<AscentResponse<CRPRolesMetaRes>> => {
//     const url = `organizations/${orgId}/funds/${fundId}/crp-roles-meta/documents`;
//     const request: AscentRequest = { type: RequestType.GET, urlString: url };

//     try {
//         const response = await processRequest<AscentResponse<CRPRolesMetaRes>>(request, cancelToken);
//         return response.data;
//     } catch (error) {
//         return getErrorResponse<CRPRolesMetaRes>(error);
//     }
// }

// export const postCustomerDocument = async (orgId: string, fundId: string, customerId: string, cancelToken: CancelToken, postData: any): Promise<AscentResponse<CustomerDocumentListRes>> => {
//     const url = `organizations/${orgId}/funds/${fundId}/customer-fund-documents`;
//     const request: AscentRequest = { type: RequestType.POST, urlString: url, params: postData };

//     try {
//         const response = await processRequest<AscentResponse<CustomerDocumentListRes>>(request, cancelToken);
//         return response.data;
//     } catch (error) {
//         return getErrorResponse<CustomerDocumentListRes>(error);
//     }
// }
// export const postCRPIndividualCustomerDocument = async (orgId: string, fundId: string, crpID: number|null, cancelToken: CancelToken, postData: any): Promise<AscentResponse<CRPIndividualDocumentListRes>> => {
//     const url = `organizations/${orgId}/funds/${fundId}/customer-crps/${crpID}/documents`;
//     const request: AscentRequest = { type: RequestType.POST, urlString: url, params: postData };

//     try {
//         const response = await processRequest<AscentResponse<CRPIndividualDocumentListRes>>(request, cancelToken);
//         return response.data;
//     } catch (error) {
//         return getErrorResponse<CRPIndividualDocumentListRes>(error);
//     }
// }
// export const putCRPIndividualDocument = async (orgId: string, fundId: string, crpID: number|null, documentID:number ,cancelToken: CancelToken, putData: any): Promise<AscentResponse<CRPIndividualDocumentListRes>> => {
//     const url = `organizations/${orgId}/funds/${fundId}/customer-crps/${crpID}/documents/${documentID}`;
//     const request: AscentRequest = { type: RequestType.PUT, urlString: url, params: putData };

//     try {
//         const response = await processRequest<AscentResponse<CRPIndividualDocumentListRes>>(request, cancelToken);
//         return response.data;
//     } catch (error) {
//         return getErrorResponse<CRPIndividualDocumentListRes>(error);
//     }
// }
// export const deleteSingleCRPIndividualDocumentAPI = async (orgId: string, fundId: string, crpID:number | null, customerID: string, documentID: string, cancelToken: CancelToken): Promise<AscentResponse<SingleDocumentRes>> => {
//     const url = `organizations/${orgId}/funds/${fundId}/customer-crps/${crpID}/documents/${documentID}?customer_id=${customerID}`;
//     const request: AscentRequest = { type: RequestType.DELETE, urlString: url };
//     try {
//         const response = await processRequest<AscentResponse<SingleDocumentRes>>(request, cancelToken);
//         return response.data;
//     } catch (error) {
//         return getErrorResponse<SingleDocumentRes>(error);
//     }
// }

// export const putCustomerDocument = async (orgId: string, fundId: string, customerId: string, cancelToken: CancelToken, postData: any, documentId: number): Promise<AscentResponse<CustomerDocumentListRes>> => {
//     const url = `organizations/${orgId}/funds/${fundId}/customer-fund-documents/${documentId}`;
//     const request: AscentRequest = { type: RequestType.PUT, urlString: url, params: postData };

//     try {
//         const response = await processRequest<AscentResponse<CustomerDocumentListRes>>(request, cancelToken);
//         return response.data;
//     } catch (error) {
//         return getErrorResponse<CustomerDocumentListRes>(error);
//     }
// }
// export const verifyUploadedDocumentAPI = async (orgId: string, fundId: string, customerID: string, customerFundDocumentId: string, postData: any, cancelToken: CancelToken): Promise<AscentResponse<CustomerVerifyDocumentRes>> => {
//     const url = `organizations/${orgId}/funds/${fundId}/customer-fund-documents/${customerFundDocumentId}/verify-upload`;
//     const request: AscentRequest = { type: RequestType.POST, urlString: url, params: postData };

//     try {
//         const response = await processRequest<AscentResponse<CustomerVerifyDocumentRes>>(request, cancelToken);
//         return response.data;
//     } catch (error) {
//         return getErrorResponse<CustomerVerifyDocumentRes>(error);
//     }
// }
// export const verifyUploadedCRPIndividualDocumentAPI = async (orgId: string, fundId: string, crpID: any, documentID: string, postData: any, cancelToken: CancelToken): Promise<AscentResponse<CustomerVerifyDocumentRes>> => {
//     const url = `organizations/${orgId}/funds/${fundId}/customer-crps/${crpID}/documents/${documentID}/verify-upload`;
//     const request: AscentRequest = { type: RequestType.POST, urlString: url, params: postData };

//     try {
//         const response = await processRequest<AscentResponse<CustomerVerifyDocumentRes>>(request, cancelToken);
//         return response.data;
//     } catch (error) {
//         return getErrorResponse<CustomerVerifyDocumentRes>(error);
//     }
// }

// export const getDocumentListAPI = async (orgId: string, fundId: string, customerID: string, cancelToken: CancelToken): Promise<AscentResponse<Array<CustomerDocumentList>>> => {
//     const url = `organizations/${orgId}/funds/${fundId}/customer-fund-documents?customer_id=${customerID}`;
//     const request: AscentRequest = { type: RequestType.GET, urlString: url };
//     try {
//         const response = await processRequest<AscentResponse<Array<CustomerDocumentList>>>(request, cancelToken);
//         return response.data;
//     } catch (error) {
//         return getErrorResponse<Array<CustomerDocumentList>>(error);
//     }
// }

// export const getCRPDocumentListAPI = async (orgId: string, fundId: string, crpId: any, customerID: string, cancelToken: CancelToken): Promise<AscentResponse<Array<CustomerDocumentList>>> => {
//     const url = `organizations/${orgId}/funds/${fundId}/customer-crps/${crpId}/documents?customer_id=${customerID}`;
//     const request: AscentRequest = { type: RequestType.GET, urlString: url };
//     try {
//         const response = await processRequest<AscentResponse<Array<CustomerDocumentList>>>(request, cancelToken);
//         return response.data;
//     } catch (error) {
//         return getErrorResponse<Array<CustomerDocumentList>>(error);
//     }
// }

// export const getSingleDocumentAPI = async (orgId: string, fundId: string, customerID: string, documentId: string, cancelToken: CancelToken): Promise<AscentResponse<SingleDocumentRes>> => {
//     const url = `organizations/${orgId}/funds/${fundId}/customer-fund-documents/${documentId}?customer_id=${customerID}`;
//     const request: AscentRequest = { type: RequestType.GET, urlString: url };
//     try {
//         const response = await processRequest<AscentResponse<SingleDocumentRes>>(request, cancelToken);
//         return response.data;
//     } catch (error) {
//         return getErrorResponse<SingleDocumentRes>(error);
//     }
// }

// export const deleteSingleDocumentAPI = async (orgId: string, fundId: string, customerID: string, documentId: string, cancelToken: CancelToken): Promise<AscentResponse<SingleDocumentRes>> => {
//     const url = `organizations/${orgId}/funds/${fundId}/customer-fund-documents/${documentId}?customer_id=${customerID}`;
//     const request: AscentRequest = { type: RequestType.DELETE, urlString: url };
//     try {
//         const response = await processRequest<AscentResponse<SingleDocumentRes>>(request, cancelToken);
//         return response.data;
//     } catch (error) {
//         return getErrorResponse<SingleDocumentRes>(error);
//     }
// }
// export const getCustomerScreeningInternetSearchAPI = async (orgId: string, fundId: string, data: any, cancelToken: CancelToken): Promise<AscentResponse<ScreeningInternetResultRes>> => {
//     const url = `organizations/${orgId}/funds/${fundId}/humanSearch/screening`;
//     const request: AscentRequest = { type: RequestType.POST, urlString: url, params: data };
//     try {
//         const response = await processRequest<AscentResponse<ScreeningInternetResultRes>>(request, cancelToken);
//         return response.data;
//     } catch (error) {
//         return getErrorResponse<ScreeningInternetResultRes>(error);
//     }
// }
// export const updateCustomerScreeningInternetSearchStatusAPI = async (orgId: string, fundId: string, customerID: any, data: any, cancelToken: CancelToken): Promise<AscentResponse<ScreeningInternetResultRes>> => {

//     const url = `organizations/${orgId}/funds/${fundId}/screening/document/updateStatus`;
//     const request: AscentRequest = { type: RequestType.PUT, urlString: url, params: data };
//     try {
//         const response = await processRequest<AscentResponse<ScreeningInternetResultRes>>(request, cancelToken);
//         return response.data;
//     } catch (error) {
//         return getErrorResponse<ScreeningInternetResultRes>(error);
//     }
// }
// // export const getCustomerScreeningPullAPI = async (orgId: string, fundId: string, data: any, cancelToken: CancelToken): Promise<AscentResponse<ScreeningInternetResultRes>> => {

// //     const url = `organizations/${orgId}/funds/${fundId}/humanSearch/document/checkResultCalculated`;
// //     const request: AscentRequest = { type: RequestType.GET, urlString: url, params: data };
// //     try {
// //         const response = await processRequest<AscentResponse<ScreeningInternetResultRes>>(request, cancelToken);
// //         return response.data;
// //     } catch (error) {
// //         return getErrorResponse<ScreeningInternetResultRes>(error);
// //     }
// // }
// export const refreshCustomerScreeningAPI = async (orgId: string, fundId: string, data: any, cancelToken: CancelToken): Promise<AscentResponse<ScreeningInternetResultRes>> => {

//     const url = `organizations/${orgId}/funds/${fundId}/humanSearch/document/refresh`;
//     const request: AscentRequest = { type: RequestType.PUT, urlString: url, params: data };
//     try {
//         const response = await processRequest<AscentResponse<ScreeningInternetResultRes>>(request, cancelToken);
//         return response.data;
//     } catch (error) {
//         return getErrorResponse<ScreeningInternetResultRes>(error);
//     }
// }
// export const getCustomerScreeningWorldCheckAPI = async (orgId: string, fundId: string, data: any, cancelToken: CancelToken): Promise<AscentResponse<ScreeningWorldCheckRes>> => {
//     const url = `organizations/${orgId}/funds/${fundId}/humanSearch/screening`;
//     const request: AscentRequest = { type: RequestType.POST, urlString: url, params: data };
//     try {
//         const response = await processRequest<AscentResponse<ScreeningWorldCheckRes>>(request, cancelToken);
//         return response.data;
//     } catch (error) {
//         return getErrorResponse<ScreeningWorldCheckRes>(error);
//     }
// }
// export const getCustomerScreeningWorldCheckPullAPI = async (orgId: string, fundId: string, data: any, cancelToken: CancelToken): Promise<AscentResponse<ScreeningWorldCheckRes>> => {
//     const url = `organizations/${orgId}/funds/${fundId}/humanSearch/document/checkResultCalculated`;
//     const request: AscentRequest = { type: RequestType.GET, urlString: url, params: data };
//     try {
//         const response = await processRequest<AscentResponse<ScreeningWorldCheckRes>>(request, cancelToken);
//         return response.data;
//     } catch (error) {
//         return getErrorResponse<ScreeningWorldCheckRes>(error);
//     }
// }
// export const updateCustomerScreeningWorldCheckStatusAPI = async (orgId: string, fundId: string, customerID: any, data: any, cancelToken: CancelToken): Promise<AscentResponse<ScreeningWorldCheckRes>> => {

//     const url = `organizations/${orgId}/funds/${fundId}/screening/document/updateStatus`;
//     const request: AscentRequest = { type: RequestType.PUT, urlString: url, params: data };
//     try {
//         const response = await processRequest<AscentResponse<ScreeningWorldCheckRes>>(request, cancelToken);
//         return response.data;
//     } catch (error) {
//         return getErrorResponse<ScreeningWorldCheckRes>(error);
//     }
// }
// export const refreshCustomerScreeningWorldCheckAPI = async (orgId: string, fundId: string, data: any, cancelToken: CancelToken): Promise<AscentResponse<ScreeningWorldCheckRes>> => {

//     const url = `organizations/${orgId}/funds/${fundId}/screening/document/refresh`;
//     const request: AscentRequest = { type: RequestType.PUT, urlString: url, params: data };
//     try {
//         const response = await processRequest<AscentResponse<ScreeningWorldCheckRes>>(request, cancelToken);
//         return response.data;
//     } catch (error) {
//         return getErrorResponse<ScreeningWorldCheckRes>(error);
//     }
// }

// export const getQuickScanAPI = async (orgId: string, fundId: string, prams: any, cancelToken: CancelToken): Promise<AscentResponse<QuickScanListRes>> => {
//     const url = `organizations/${orgId}/funds/${fundId}/screening/getQuickScanList`;
//     const request: AscentRequest = { type: RequestType.GET, urlString: url, params: prams };
//     try {
//         const response = await processRequest<AscentResponse<QuickScanListRes>>(request, cancelToken);
//         return response.data;
//     } catch (error) {
//         return getErrorResponse<QuickScanListRes>(error);
//     }
// }
// export const getQuickScanDetailAPI = async (orgId: string, fundId: string, prams: any, cancelToken: CancelToken): Promise<AscentResponse<QuickScanListRes>> => {
//     const url = `organizations/${orgId}/funds/${fundId}/humanSearch/detail?id=${prams}`;
//     const request: AscentRequest = { type: RequestType.GET, urlString: url };
//     try {
//         const response = await processRequest<AscentResponse<QuickScanListRes>>(request, cancelToken);
//         return response.data;
//     } catch (error) {
//         return getErrorResponse<QuickScanListRes>(error);
//     }
// }
    // export const getCustomerRiskReportsAPI = async (orgId: string, fundId: string, customerId: string, cancelToken: CancelToken): Promise<AscentResponse<CustomerRiskReportsRes>> => {
    //     const url = `organizations/${orgId}/admin/funds/${fundId}/customers/${customerId}/risk-reports`;
    //     const request: AscentRequest = { type: RequestType.GET, urlString: url };
    //     try {
    //         const response = await processRequest<AscentResponse<CustomerRiskReportsRes>>(request, cancelToken);
    //         return response.data;
    //     } catch (error) {
    //         return getErrorResponse<CustomerRiskReportsRes>(error);
    //     }
    // }

    // export const getCustomerRiskReportRecentAPI = async (orgId: string, fundId: string, customerId: string, cancelToken: CancelToken): Promise<AscentResponse<CustomerRiskReport>> => {
    //     const url = `organizations/${orgId}/admin/funds/${fundId}/customers/${customerId}/risk-report/recent`;
    //     const request: AscentRequest = { type: RequestType.GET, urlString: url };
    //     try {
    //         const response = await processRequest<AscentResponse<CustomerRiskReport>>(request, cancelToken);
    //         return response.data;
    //     } catch (error) {
    //         return getErrorResponse<CustomerRiskReport>(error);
    //     }
    // }

    // export const getCustomerScreeningSummaryAPI = async (orgId: string, fundId: string, data: any,cancelToken: CancelToken): Promise<AscentResponse<CustomerScreeningSummaryListRes>> => {
    //     const url = `organizations/${orgId}/funds/${fundId}/screening/screeningStatus`;
    //     const request: AscentRequest = { type: RequestType.POST, urlString: url,params:data };
    //     try {
    //         const response = await processRequest<AscentResponse<CustomerScreeningSummaryListRes>>(request, cancelToken);
    //         return response.data;
    //     } catch (error) {
    //         return getErrorResponse<CustomerScreeningSummaryListRes>(error);
    //     }
    // }

    // export const getCustomerScreeningDetailAPI = async (orgId: string, fundId: string, customerId: string,cancelToken: CancelToken): Promise<AscentResponse<CustomerScreeningDetailsRes>> => {
    //     const url = `organizations/${orgId}/admin/funds/${fundId}/customers/${customerId}/screening/details`;
    //     const request: AscentRequest = { type: RequestType.GET, urlString: url };
    //     try {
    //         const response = await processRequest<AscentResponse<CustomerScreeningDetailsRes>>(request, cancelToken);
    //         return response.data;
    //     } catch (error) {
    //         return getErrorResponse<CustomerScreeningDetailsRes>(error);
    //     }
    // }
    
    // export const getCustomerExpiryDocumentsAPI = async (orgId: string, fundId: string,cancelToken: CancelToken): Promise<AscentResponse<CustomerExpiringDocumentstRes>> => {
    //     const url = `organizations/${orgId}/funds/${fundId}/expiring-documents`;
    //     const request: AscentRequest = { type: RequestType.GET, urlString: url };
    //     try {
    //         const response = await processRequest<AscentResponse<CustomerExpiringDocumentstRes>>(request, cancelToken);
    //         return response.data;
    //     } catch (error) {
    //         return getErrorResponse<CustomerExpiringDocumentstRes>(error);
    //     }
    // }
    // export const getOwnRestrincedListAPI = async (orgId: string, fundId: string,cancelToken: CancelToken): Promise<AscentResponse<CustomerRestrictedListRes>> => {
    //     const url = `organizations/${orgId}/funds/${fundId}/restricted-lists`;
    //     const request: AscentRequest = { type: RequestType.GET, urlString: url };
    //     try {
    //         const response = await processRequest<AscentResponse<CustomerRestrictedListRes>>(request, cancelToken);
    //         return response.data;
    //     } catch (error) {
    //         return getErrorResponse<CustomerRestrictedListRes>(error);
    //     }
    // }

    // export const createOwnRestrincedListAPI = async (orgId: string, fundId: string, params: any, cancelToken: CancelToken): Promise<AscentResponse<CustomerRestrictedListRes>> => {
    //     // const url = `organizations/${orgId}/funds/${fundId}/restricted-lists`;
    //     const url = `organizations/${orgId}/funds/${fundId}/restricted-lists`;
    //     const request: AscentRequest = { type: RequestType.POST, urlString: url, params: params };
    //     try {
    //         const response = await processRequest<AscentResponse<CustomerRestrictedListRes>>(request, cancelToken);
    //         return response.data;
    //     } catch (error) {
    //         return getErrorResponse<CustomerRestrictedListRes>(error);
    //     }
    // }
    // export const updateOwnRestrincedListAPI = async (orgId: string, fundId: string, restrictedListsId:Number, params: any, cancelToken: CancelToken): Promise<AscentResponse<CustomerRestrictedListRes>> => {        
    //     const url = `organizations/${orgId}/funds/${fundId}/restricted-lists/${restrictedListsId}`;
        
    //     const request: AscentRequest = { type: RequestType.PUT, urlString: url, params: params };
    //     try {
    //         const response = await processRequest<AscentResponse<CustomerRestrictedListRes>>(request, cancelToken);
    //         return response.data;
    //     } catch (error) {
    //         return getErrorResponse<CustomerRestrictedListRes>(error);
    //     }
    // }
    
    // export const getSingleRestricteListAPI = async (orgId: string, fundId: string, restrictedListId: number,cancelToken: CancelToken): Promise<AscentResponse<CustomerSingleRestrictedListRes>> => {
    //     const url = `organizations/${orgId}/funds/${fundId}/restricted-lists/${restrictedListId}`;
    //     const request: AscentRequest = { type: RequestType.GET, urlString: url };
    //     try {
    //         const response = await processRequest<AscentResponse<CustomerSingleRestrictedListRes>>(request, cancelToken);
    //         return response.data;
    //     } catch (error) {
    //         return getErrorResponse<CustomerSingleRestrictedListRes>(error);
    //     }
    // }

    // export const createOwnRestrincedListCustomerAPI = async (orgId: string, fundId: string, restrictedListId: number, params: any, cancelToken: CancelToken): Promise<AscentResponse<RestrictedListCustomerRes>> => { 
    //     const url = `organizations/${orgId}/funds/${fundId}/restricted-lists/${restrictedListId}/customers`;
    //     const request: AscentRequest = { type: RequestType.POST, urlString: url, params: params };
    //     try {
    //         const response = await processRequest<AscentResponse<RestrictedListCustomerRes>>(request, cancelToken);
    //         return response.data;
    //     } catch (error) {
    //         return getErrorResponse<RestrictedListCustomerRes>(error);
    //     }
    // }
    // export const getOwnRestrincedListCustomersAPI = async (orgId: string, fundId: string, restrictedListId: number, cancelToken: CancelToken): Promise<AscentResponse<RestrictedListCustomersRes>> => { 
    //     const url = `organizations/${orgId}/funds/${fundId}/restricted-lists/${restrictedListId}/customers`;
    //     const request: AscentRequest = { type: RequestType.GET, urlString: url };
    //     try {
    //         const response = await processRequest<AscentResponse<RestrictedListCustomersRes>>(request, cancelToken);
    //         return response.data;
    //     } catch (error) {
    //         return getErrorResponse<RestrictedListCustomersRes>(error);
    //     }
    // }

    // export const getPeriodicReviewListAPI = async (orgId: string, fundId: string,cancelToken: CancelToken): Promise<AscentResponse<CustomerPeriodicReviewRes>> => {
    //     const url = `organizations/${orgId}/funds/${fundId}/periodic-review`;
    //     const request: AscentRequest = { type: RequestType.GET, urlString: url };
    //     try {
    //         const response = await processRequest<AscentResponse<CustomerPeriodicReviewRes>>(request, cancelToken);
    //         return response.data;
    //     } catch (error) {
    //         return getErrorResponse<CustomerPeriodicReviewRes>(error);
    //     }
    // }

    // export const getFundDocumentAPI = async (orgId: string, fundId: string,cancelToken: CancelToken): Promise<AscentResponse<CustomerDocumentTypeRes>> => {
    //     const url = `organizations/${orgId}/funds/${fundId}/document-types`;
    //     const request: AscentRequest = { type: RequestType.GET, urlString: url };
    //     try {
    //         const response = await processRequest<AscentResponse<CustomerDocumentTypeRes>>(request, cancelToken);
    //         return response.data;
    //     } catch (error) {
    //         return getErrorResponse<CustomerDocumentTypeRes>(error);
    //     }
    // }
    // export const getCrpRoleAPI = async (orgId: string, fundId: string,cancelToken: CancelToken): Promise<AscentResponse<CustomerCrpRoleMetaRes>> => {
    //     const url = `organizations/${orgId}/funds/${fundId}/crp-roles-meta`;
    //     const request: AscentRequest = { type: RequestType.GET, urlString: url };
    //     try {
    //         const response = await processRequest<AscentResponse<CustomerCrpRoleMetaRes>>(request, cancelToken);
    //         return response.data;
    //     } catch (error) {
    //         return getErrorResponse<CustomerCrpRoleMetaRes>(error);
    //     }
    // }

    // export const createNewCustomerAPI = async (orgId: string, fundId: string, params: CustomerProfile, cancelToken: CancelToken): Promise<AscentResponse<CustomerProfileRes>> => {        
    //     const url = `organizations/${orgId}/funds/${fundId}/customers`;
    //    
    //     var request: AscentRequest = { type: RequestType.POST, urlString: url, params: params };
    //     // if(!!window.customerData){
    //     //      request = { type: RequestType.PUT, urlString: url, params: params };
    //     // }
    //     try {
    //         const response = await processRequest<AscentResponse<CustomerProfileRes>>(request, cancelToken);
    //         return response.data;
    //     } catch (error) {
    //         return getErrorResponse<CustomerProfileRes>(error);
    //     }
    // }
    // export const createNewCorporateCustomerAPI = async (orgId: string, fundId: string, params: CustomerProfileCorporate, cancelToken: CancelToken): Promise<AscentResponse<CustomerProfileCorporateRes>> => {
    //     const url = `organizations/${orgId}/funds/${fundId}/customers`;
    //   
    //     var request: AscentRequest = { type: RequestType.POST, urlString: url, params: params };        
    //     try {
    //         const response = await processRequest<AscentResponse<CustomerProfileCorporateRes>>(request, cancelToken);
    //         return response.data;
    //     } catch (error) {
    //         return getErrorResponse<CustomerProfileCorporateRes>(error);
    //     }
    // }

    // export const updateCustomerAPI = async (orgId: string, fundId: string, params: CustomerProfile, customerId: Number, cancelToken: CancelToken): Promise<AscentResponse<CustomerProfileRes>> => {
    //     const url = `organizations/${orgId}/funds/${fundId}/customers/${customerId}`;
    //     const request: AscentRequest = { type: RequestType.PUT, urlString: url, params: params };
    //     
    //     try {
    //         const response = await processRequest<AscentResponse<CustomerProfileRes>>(request, cancelToken);
    //         return response.data;
    //     } catch (error) {
    //         return getErrorResponse<CustomerProfileRes>(error);
    //     }
    // }
    // export const updateCorporateCustomerAPI = async (orgId: string, fundId: string, params: CustomerProfileCorporate, customerId: Number, cancelToken: CancelToken): Promise<AscentResponse<CustomerProfileCorporateRes>> => {
    //     const url = `organizations/${orgId}/funds/${fundId}/customers/${customerId}`;
    //     const request: AscentRequest = { type: RequestType.PUT, urlString: url, params: params };
    //     
    //     try {
    //         const response = await processRequest<AscentResponse<CustomerProfileCorporateRes>>(request, cancelToken);
    //         return response.data;
    //     } catch (error) {
    //         return getErrorResponse<CustomerProfileCorporateRes>(error);
    //     }
    // }

    // export const getDocumentTypeListAPI = async (orgId: string, fundId: string, cancelToken: CancelToken): Promise<AscentResponse<CustomerDocumentTypeRes>> => {
    //     const url = `organizations/${orgId}/funds/${fundId}/document-types`;
    //     const request: AscentRequest = { type: RequestType.GET, urlString: url};
       
    //     try {
    //         const response = await processRequest<AscentResponse<CustomerDocumentTypeRes>>(request, cancelToken);
    //         return response.data;
    //     } catch (error) {
    //         return getErrorResponse<CustomerDocumentTypeRes>(error);
    //     }
    // }
    // export const getRequiredDocumentAPI = async (orgId: string, fundId: string,customerId : String, cancelToken: CancelToken): Promise<AscentResponse<CustomerRequiredDocumentRes>> => {
    //     const url = `organizations/${orgId}/funds/${fundId}/required-documents?customer_id=${customerId}`;
    //     const request: AscentRequest = { type: RequestType.GET, urlString: url};
       
    //     try {
    //         const response = await processRequest<AscentResponse<CustomerRequiredDocumentRes>>(request, cancelToken);
    //         return response.data;
    //     } catch (error) {
    //         return getErrorResponse<CustomerRequiredDocumentRes>(error);
    //     }
    // }
    // export const postCustomerDocument = async (orgId: string, fundId: string, customerId:string, cancelToken: CancelToken, postData: any): Promise<AscentResponse<CustomerDocumentListRes>> => {
    //     const url = `organizations/${orgId}/funds/${fundId}/customer-fund-documents`;
    //     const request: AscentRequest = { type: RequestType.POST, urlString: url, params: postData };
       
    //     try {
    //         const response = await processRequest<AscentResponse<CustomerDocumentListRes>>(request, cancelToken);
    //         return response.data;
    //     } catch (error) {
    //         return getErrorResponse<CustomerDocumentListRes>(error);
    //     }
    // }
    // export const putCustomerDocument = async (orgId: string, fundId: string, customerId:string, cancelToken: CancelToken, postData: any,documentId:number): Promise<AscentResponse<CustomerDocumentListRes>> => {
    //     const url = `organizations/${orgId}/funds/${fundId}/customer-fund-documents/${documentId}`;
    //     const request: AscentRequest = { type: RequestType.PUT, urlString: url, params: postData };
       
    //     try {
    //         const response = await processRequest<AscentResponse<CustomerDocumentListRes>>(request, cancelToken);
    //         return response.data;
    //     } catch (error) {
    //         return getErrorResponse<CustomerDocumentListRes>(error);
    //     }
    // }
    // export const verifyUploadedDocumentAPI = async (orgId: string, fundId: string, customerID: string, customerFundDocumentId:string,postData:any, cancelToken: CancelToken): Promise<AscentResponse<CustomerVerifyDocumentRes>> => {
    //     const url = `organizations/${orgId}/funds/${fundId}/customer-fund-documents/${customerFundDocumentId}/verify-upload`;
    //     const request: AscentRequest = { type: RequestType.POST, urlString: url, params: postData };
       
    //     try {
    //         const response = await processRequest<AscentResponse<CustomerVerifyDocumentRes>>(request, cancelToken);
    //         return response.data;
    //     } catch (error) {
    //         return getErrorResponse<CustomerVerifyDocumentRes>(error);
    //     }
    // }
    
    // export const getDocumentListAPI = async (orgId: string, fundId: string, customerID: string, cancelToken: CancelToken): Promise<AscentResponse<Array<CustomerDocumentList>>> => {
    //     const url = `organizations/${orgId}/funds/${fundId}/customer-fund-documents?customer_id=${customerID}`;
    //     const request: AscentRequest = { type: RequestType.GET, urlString: url };
    //     try {
    //         const response = await processRequest<AscentResponse<Array<CustomerDocumentList>>>(request, cancelToken);
    //         return response.data;
    //     } catch (error) {
    //         return getErrorResponse<Array<CustomerDocumentList>>(error);
    //     }
    // }
    // export const getSingleDocumentAPI = async (orgId: string, fundId: string, customerID: string, documentId: string, cancelToken: CancelToken): Promise<AscentResponse<SingleDocumentRes>> => {
    //     const url = `organizations/${orgId}/funds/${fundId}/customer-fund-documents/${documentId}?customer_id=${customerID}`;
    //     const request: AscentRequest = { type: RequestType.GET, urlString: url };
    //     try {
    //         const response = await processRequest<AscentResponse<SingleDocumentRes>>(request, cancelToken);
    //         return response.data;
    //     } catch (error) {
    //         return getErrorResponse<SingleDocumentRes>(error);
    //     }
    // }
    // export const deleteSingleDocumentAPI = async (orgId: string, fundId: string, customerID: string, documentId: string, cancelToken: CancelToken): Promise<AscentResponse<SingleDocumentRes>> => {
    //     const url = `organizations/${orgId}/funds/${fundId}/customer-fund-documents/${documentId}?customer_id=${customerID}`;
    //     const request: AscentRequest = { type: RequestType.DELETE, urlString: url };
    //     try {
    //         const response = await processRequest<AscentResponse<SingleDocumentRes>>(request, cancelToken);
    //         return response.data;
    //     } catch (error) {
    //         return getErrorResponse<SingleDocumentRes>(error);
    //     }
    // }
    // export const getCustomerScreeningInternetSearchAPI = async (orgId: string, fundId: string, data: any, cancelToken: CancelToken): Promise<AscentResponse<ScreeningInternetResultRes>> => {
    //     const url = `organizations/${orgId}/funds/${fundId}/humanSearch/customer/screening`;
    //     const request: AscentRequest = { type: RequestType.POST, urlString: url, params: data};
    //     try {
    //         const response = await processRequest<AscentResponse<ScreeningInternetResultRes>>(request, cancelToken);
    //         return response.data;
    //     } catch (error) {
    //         return getErrorResponse<ScreeningInternetResultRes>(error);
    //     }
    // }
    // export const updateCustomerScreeningInternetSearchStatusAPI = async (orgId: string, fundId: string, customerID: any, data: any ,cancelToken: CancelToken): Promise<AscentResponse<ScreeningInternetResultRes>> => {
       
    //     const url = `organizations/${orgId}/funds/${fundId}/screening/document/updateStatus`;
    //     const request: AscentRequest = { type: RequestType.PUT, urlString: url, params: data};
    //     try {
    //         const response = await processRequest<AscentResponse<ScreeningInternetResultRes>>(request, cancelToken);
    //         return response.data;
    //     } catch (error) {
    //         return getErrorResponse<ScreeningInternetResultRes>(error);
    //     }
    // }
    // export const getCustomerScreeningPullAPI = async (orgId: string, fundId: string, data: any ,cancelToken: CancelToken): Promise<AscentResponse<ScreeningResPull>> => {
       
    //     const url = `organizations/${orgId}/funds/${fundId}/screening/document/checkResultCalculated`;
    //     const request: AscentRequest = { type: RequestType.POST, urlString: url, params: data};
    //     try {
    //         const response = await processRequest<AscentResponse<ScreeningResPull>>(request, cancelToken);
    //         return response.data;
    //     } catch (error) {
    //         return getErrorResponse<ScreeningResPull>(error);
    //     }
    // }
    // export const refreshCustomerScreeningAPI = async (orgId: string, fundId: string, data: any ,cancelToken: CancelToken): Promise<AscentResponse<ScreeningInternetResultRes>> => {
       
    //     const url = `organizations/${orgId}/funds/${fundId}/humanSearch/document/refresh`;
    //     const request: AscentRequest = { type: RequestType.PUT, urlString: url, params: data};
    //     try {
    //         const response = await processRequest<AscentResponse<ScreeningInternetResultRes>>(request, cancelToken);
    //         return response.data;
    //     } catch (error) {
    //         return getErrorResponse<ScreeningInternetResultRes>(error);
    //     }
    // }
    // export const getCustomerScreeningWorldCheckAPI = async (orgId: string, fundId: string, data: any, cancelToken: CancelToken): Promise<AscentResponse<ScreeningWorldCheckRes>> => {
    //     const url = `organizations/${orgId}/funds/${fundId}/humanSearch/customer/screening`;
    //     const request: AscentRequest = { type: RequestType.POST, urlString: url, params: data};
    //     try {
    //         const response = await processRequest<AscentResponse<ScreeningWorldCheckRes>>(request, cancelToken);
    //         return response.data;
    //     } catch (error) {
    //         return getErrorResponse<ScreeningWorldCheckRes>(error);
    //     }
    // }
    // export const getCustomerScreeningWorldCheckPullAPI = async (orgId: string, fundId: string, data: any ,cancelToken: CancelToken): Promise<AscentResponse<ScreeningWorldCheckRes>> => {
    //     const url = `organizations/${orgId}/funds/${fundId}/humanSearch/document/checkResultCalculated`;
    //     const request: AscentRequest = { type: RequestType.GET, urlString: url, params: data};
    //     try {
    //         const response = await processRequest<AscentResponse<ScreeningWorldCheckRes>>(request, cancelToken);
    //         return response.data;
    //     } catch (error) {
    //         return getErrorResponse<ScreeningWorldCheckRes>(error);
    //     }
    // }
    // export const updateCustomerScreeningWorldCheckStatusAPI = async (orgId: string, fundId: string, customerID: any, data: any ,cancelToken: CancelToken): Promise<AscentResponse<ScreeningWorldCheckRes>> => {
       
    //     const url = `organizations/${orgId}/funds/${fundId}/screening/document/updateStatus`;
    //     const request: AscentRequest = { type: RequestType.PUT, urlString: url, params: data};
    //     try {
    //         const response = await processRequest<AscentResponse<ScreeningWorldCheckRes>>(request, cancelToken);
    //         return response.data;
    //     } catch (error) {
    //         return getErrorResponse<ScreeningWorldCheckRes>(error);
    //     }
    // }
    // export const refreshCustomerScreeningWorldCheckAPI = async (orgId: string, fundId: string, data: any ,cancelToken: CancelToken): Promise<AscentResponse<ScreeningWorldCheckRes>> => {
       
    //     const url = `organizations/${orgId}/funds/${fundId}/humanSearch/document/refresh`;
    //     const request: AscentRequest = { type: RequestType.PUT, urlString: url, params: data};
    //     try {
    //         const response = await processRequest<AscentResponse<ScreeningWorldCheckRes>>(request, cancelToken);
    //         return response.data;
    //     } catch (error) {
    //         return getErrorResponse<ScreeningWorldCheckRes>(error);
    //     }
    // }
    
    // export const getQuickScanAPI = async (orgId: string, fundId: string, prams: any,cancelToken: CancelToken): Promise<AscentResponse<QuickScanListRes>> => {
    //     const url = `organizations/${orgId}/funds/${fundId}/screening/getQuickScanList`;
    //     const request: AscentRequest = { type: RequestType.GET, urlString: url, params:prams };
    //     try {
    //         const response = await processRequest<AscentResponse<QuickScanListRes>>(request, cancelToken);
    //         return response.data;
    //     } catch (error) {
    //         return getErrorResponse<QuickScanListRes>(error);
    //     }
    // }
    // export const getQuickScanDetailAPI = async (orgId: string, fundId: string, prams: any,cancelToken: CancelToken): Promise<AscentResponse<ScreeningRes>> => {
    //     const url = `organizations/${orgId}/funds/${fundId}/screening/detail?id=${prams}`;
    //     const request: AscentRequest = { type: RequestType.GET, urlString: url };
    //     try {
    //         const response = await processRequest<AscentResponse<ScreeningRes>>(request, cancelToken);
    //         return response.data;
    //     } catch (error) {
    //         return getErrorResponse<ScreeningRes>(error);
    //     }
    // }
    // export const getCustomerScreeningInternetSearchQuickScanAPI = async (orgId: string, fundId: string, data: any, cancelToken: CancelToken): Promise<AscentResponse<ScreeningInternetResultRes>> => {
    //     const url = `organizations/${orgId}/funds/${fundId}/humanSearch/screening`;
    //     const request: AscentRequest = { type: RequestType.POST, urlString: url, params: data};
    //     try {
    //         const response = await processRequest<AscentResponse<ScreeningInternetResultRes>>(request, cancelToken);
    //         return response.data;
    //     } catch (error) {
    //         return getErrorResponse<ScreeningInternetResultRes>(error);
    //     }
    // }
    // export const getCustomerScreeningWorldCheckQuickScanAPI = async (orgId: string, fundId: string, data: any, cancelToken: CancelToken): Promise<AscentResponse<ScreeningWorldCheckRes>> => {
    //     const url = `organizations/${orgId}/funds/${fundId}/humanSearch/screening`;
    //     const request: AscentRequest = { type: RequestType.POST, urlString: url, params: data};
    //     try {
    //         const response = await processRequest<AscentResponse<ScreeningWorldCheckRes>>(request, cancelToken);
    //         return response.data;
    //     } catch (error) {
    //         return getErrorResponse<ScreeningWorldCheckRes>(error);
    //     }
    // }
    // export const getScreeningAPI = async (orgId: string, fundId: string, data: any, cancelToken: CancelToken): Promise<AscentResponse<ScreeningRes>> => {
    //     const url = `organizations/${orgId}/funds/${fundId}/screening`;
    //     const request: AscentRequest = { type: RequestType.POST, urlString: url, params: data};
    //     try {
    //         const response = await processRequest<AscentResponse<ScreeningRes>>(request, cancelToken);
    //         return response.data;
    //     } catch (error) {
    //         return getErrorResponse<ScreeningRes>(error);
    //     }
    // }
    // export const getScreeningAPICustomer = async (orgId: string, fundId: string, data: any, cancelToken: CancelToken): Promise<AscentResponse<ScreeningSummaryRes>> => {
    //     const url = `organizations/${orgId}/funds/${fundId}/screening/customer/screening`;
    //     const request: AscentRequest = { type: RequestType.GET, urlString: url, params: data};
    //     try {
    //         const response = await processRequest<AscentResponse<ScreeningSummaryRes>>(request, cancelToken);
    //         return response.data;
    //     } catch (error) {
    //         return getErrorResponse<ScreeningSummaryRes>(error);
    //     }
    // }
    // export const getCustomerScreeningRefreshQuickScanAPI = async (orgId: string, fundId: string, data: any, cancelToken: CancelToken): Promise<AscentResponse<ScreeningRes>> => {
    //     const url = `organizations/${orgId}/funds/${fundId}/screening/document/refresh`;
    //     const request: AscentRequest = { type: RequestType.PUT, urlString: url, params: data};
    //     try {
    //         const response = await processRequest<AscentResponse<ScreeningRes>>(request, cancelToken);
    //         return response.data;
    //     } catch (error) {
    //         return getErrorResponse<ScreeningRes>(error);
    //     }
    // }
    // export const getAllRescreenCaseAPI = async (orgId: string, fundId: string, data: any, cancelToken: CancelToken): Promise<AscentResponse<ScreeningRes>> => {
    //     const url = `organizations/${orgId}/funds/${fundId}/screening/customer/rescreening`;
    //     const request: AscentRequest = { type: RequestType.PUT, urlString: url, params: data};
    //     try {
    //         const response = await processRequest<AscentResponse<ScreeningRes>>(request, cancelToken);
    //         return response.data;
    //     } catch (error) {
    //         return getErrorResponse<ScreeningRes>(error);
    //     }
    // }
    // export const SubmitScreeningCommentAPI = async (orgId: string, fundId: string, data: any, cancelToken: CancelToken): Promise<AscentResponse<ScreeningRes>> => {
    //     const url = `organizations/${orgId}/funds/${fundId}/screening/add/comment`;
    //     const request: AscentRequest = { type: RequestType.POST, urlString: url, params: data};
    //     try {
    //         const response = await processRequest<AscentResponse<ScreeningRes>>(request, cancelToken);
    //         return response.data;
    //     } catch (error) {
    //         return getErrorResponse<ScreeningRes>(error);
    //     }
    // }
    // export const getScreeningCommentAPI = async (orgId: string, fundId: string, id: any, cancelToken: CancelToken): Promise<AscentResponse<ScreeningCommentsRes>> => {
    //     const url = `organizations/${orgId}/funds/${fundId}/screening/comments?id=${id}`;
    //     const request: AscentRequest = { type: RequestType.GET, urlString: url};
    //     try {
    //         const response = await processRequest<AscentResponse<ScreeningCommentsRes>>(request, cancelToken);
    //         return response.data;
    //     } catch (error) {
    //         return getErrorResponse<ScreeningCommentsRes>(error);
    //     }
    // }
    // export const getScreeningConclusionAPI = async (orgId: string, fundId: string, data: any, cancelToken: CancelToken): Promise<AscentResponse<ScreeningConclusionRes>> => {
    //     const url = `organizations/${orgId}/funds/${fundId}/screening/screeningStatus`;
    //     const request: AscentRequest = { type: RequestType.POST, urlString: url, params: data};
    //     try {
    //         const response = await processRequest<AscentResponse<ScreeningConclusionRes>>(request, cancelToken);
    //         return response.data;
    //     } catch (error) {
    //         return getErrorResponse<ScreeningConclusionRes>(error);
    //     }
    // }
    // export const submitScreeningConclusionAPI = async (orgId: string, fundId: string, data: any, cancelToken: CancelToken): Promise<AscentResponse<ScreeningConclusionRes>> => {
    //     const url = `organizations/${orgId}/funds/${fundId}/screening/customer/conclusion`;
    //     const request: AscentRequest = { type: RequestType.PUT, urlString: url, params: data};
    //     try {
    //         const response = await processRequest<AscentResponse<ScreeningConclusionRes>>(request, cancelToken);
    //         return response.data;
    //     } catch (error) {
    //         return getErrorResponse<ScreeningConclusionRes>(error);
    //     }
    // }
    // export const getRiskReportAPI = async (orgId: string, fundId: string,data:any, cancelToken: CancelToken): Promise<AscentResponse<RistAssessmentReportRes>> => {
    //     const url = `organizations/${orgId}/admin/funds/${fundId}/customerRiskReport`;
    //     const request: AscentRequest = { type: RequestType.GET, urlString: url,params: data};
    //     try {
    //         const response = await processRequest<AscentResponse<RistAssessmentReportRes>>(request, cancelToken);
    //         return response.data;
    //     } catch (error) {
    //         return getErrorResponse<RistAssessmentReportRes>(error);
    //     }
    // }
    // export const getRiskReportAssessmentRecordAPI = async (orgId: string, fundId: string,data:any, cancelToken: CancelToken): Promise<AscentResponse<RistAssessmentReportRecordRes>> => {
    //     const url = `organizations/${orgId}/admin/funds/${fundId}/previousRiskAssessments`;
    //     const request: AscentRequest = { type: RequestType.GET, urlString: url,params: data};
    //     try {
    //         const response = await processRequest<AscentResponse<RistAssessmentReportRecordRes>>(request, cancelToken);
    //         return response.data;
    //     } catch (error) {
    //         return getErrorResponse<RistAssessmentReportRecordRes>(error);
    //     }
    // }
    // export const getCustomerOverAllRiskAssessmentAPI = async (orgId: string, fundId: string,data:any, cancelToken: CancelToken): Promise<AscentResponse<RistAssessmentReportOverAllStatusRes>> => {
    //     const url = `organizations/${orgId}/admin/funds/${fundId}/customerOverAllRisk`;
    //     const request: AscentRequest = { type: RequestType.GET, urlString: url,params: data};
    //     try {
    //         const response = await processRequest<AscentResponse<RistAssessmentReportOverAllStatusRes>>(request, cancelToken);
    //         return response.data;
    //     } catch (error) {
    //         return getErrorResponse<RistAssessmentReportOverAllStatusRes>(error);
    //     }
    // }
    // export const updateRiskAssessmentStatusAPI = async (orgId: string, fundId: string,data:any, cancelToken: CancelToken): Promise<AscentResponse<RistAssessmentReportOverAllStatusRes>> => {
    //     const url = `organizations/${orgId}/admin/funds/${fundId}/addRiskStatus`;
    //     const request: AscentRequest = { type: RequestType.PUT, urlString: url,params: data};
    //     try {
    //         const response = await processRequest<AscentResponse<RistAssessmentReportOverAllStatusRes>>(request, cancelToken);
    //         return response.data;
    //     } catch (error) {
    //         return getErrorResponse<RistAssessmentReportOverAllStatusRes>(error);
    //     }
    // }
    // export const RescreenCRPAPI = async (orgId: string, fundId: string,data:any, cancelToken: CancelToken): Promise<AscentResponse<RistAssessmentReportOverAllStatusRes>> => {
    //     const url = `organizations/${orgId}/funds/${fundId}/screening/crp/rescreening`;
    //     const request: AscentRequest = { type: RequestType.PUT, urlString: url,params: data};
    //     try {
    //         const response = await processRequest<AscentResponse<RistAssessmentReportOverAllStatusRes>>(request, cancelToken);
    //         return response.data;
    //     } catch (error) {
    //         return getErrorResponse<RistAssessmentReportOverAllStatusRes>(error);
    //     }
    // }
    // export const getRiskAssessmentStatusAPI = async (orgId: string, fundId: string,data:any, cancelToken: CancelToken): Promise<AscentResponse<RistAssessmentStatusRes>> => {
    //     const url = `organizations/${orgId}/funds/${fundId}/RiskTabStatus`;
    //     const request: AscentRequest = { type: RequestType.GET, urlString: url,params: data};
    //     try {
    //         const response = await processRequest<AscentResponse<RistAssessmentStatusRes>>(request, cancelToken);
    //         return response.data;
    //     } catch (error) {
    //         return getErrorResponse<RistAssessmentStatusRes>(error);
    //     }
    // }
    // export const updateExpiryDocumentStatus = async (orgId: string, fundId: string,data:any, cancelToken: CancelToken): Promise<AscentResponse<RistAssessmentStatusRes>> => {
    //     const url = `organizations/${orgId}/funds/${fundId}/Update-expire-doc-status`;
    //     const request: AscentRequest = { type: RequestType.PUT, urlString: url,params: data};
    //     try {
    //         const response = await processRequest<AscentResponse<RistAssessmentStatusRes>>(request, cancelToken);
    //         return response.data;
    //     } catch (error) {
    //         return getErrorResponse<RistAssessmentStatusRes>(error);
    //     }
    // }
    // export const getDownloadCSVQuickScanAPI = async (orgId: string, fundId: string, cancelToken: CancelToken): Promise<AscentResponse<QuickScanDownloadCSVRes>> => {
    //     const url = `organizations/${orgId}/funds/${fundId}/screening/generateQuickScanCsv`;
    //     const request: AscentRequest = { type: RequestType.POST, urlString: url};
    //     try {
    //         const response = await processRequest<AscentResponse<QuickScanDownloadCSVRes>>(request, cancelToken);
    //         return response.data;
    //     } catch (error) {
    //         return getErrorResponse<QuickScanDownloadCSVRes>(error);
    //     }
    // }
    // export const getDownloadCSVQuickScanPullAPI = async (orgId: string, fundId: string, cancelToken: CancelToken): Promise<AscentResponse<QuickScanDownloadCSVRes>> => {
    //     const url = `organizations/${orgId}/funds/${fundId}/screening/quickScanCsvPulling`;
    //     const request: AscentRequest = { type: RequestType.GET, urlString: url};
    //     try {
    //         const response = await processRequest<AscentResponse<QuickScanDownloadCSVRes>>(request, cancelToken);
    //         return response.data;
    //     } catch (error) {
    //         return getErrorResponse<QuickScanDownloadCSVRes>(error);
    //     }
    // }
