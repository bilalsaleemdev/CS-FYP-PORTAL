import riskReportRes from "../../models/customer/riskReportRes";

export default interface RistAssessmentReportRes {
    computedRiskRating:string;
    riskReport: riskReportRes;
    count:number;
    score:number
}