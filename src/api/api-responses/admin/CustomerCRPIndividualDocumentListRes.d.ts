import CustomerDocumentList from "../../models/admin/CustomerDocumentList";

export default interface CustomerCRPIndividualDocumentListRes{
    crp_documents: Array<CustomerDocumentList>,
        customer_fund_document_id:string,
        url:string
    }