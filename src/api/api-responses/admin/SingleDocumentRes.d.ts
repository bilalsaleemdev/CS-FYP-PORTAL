import SingleDocument from "./../../models/admin/singleDocument";

export default interface SingleDocumentRes{
    single_document: Array<SingleDocument>;    
    signed_url: any;
}