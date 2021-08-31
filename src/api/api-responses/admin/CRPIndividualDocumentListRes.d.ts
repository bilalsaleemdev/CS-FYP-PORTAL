import CustomerDocumentList from "../../models/admin/CustomerDocumentList";

export default interface CRPIndividualDocumentListRes{
    customer_fund_documents: Array<CustomerDocumentList>,
    crp_document_id:string,
    url:string
    }