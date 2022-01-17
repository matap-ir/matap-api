export interface Response {
    status: number;
    family: string;
    reason: string;
    data: ResponseGet | ResponsePost;
}

export interface ResponseGet {
    list: any[];
}

export interface ResponsePost {
    result: ResponsePostBody;
}

export interface ResponsePostBody {
    error_Msg: string;
    head_EPRSC_ID: string;
    error_Code: string;
}

export interface NoteHeadEprsc {
    patient: string;
    mobile: string;
    doctor: DocEprsc;
    docId: string;
    prescDate: string;
    docNationalCode: string;
    docMobileNo: string;
    prescType: PrescType | null;
    comments?: string | null;
    noteDetailEprscs?: NoteDetailEprsc[];
}

export interface DocEprsc {
    docType: DocType;
}

export interface DocType {
    docType: string;
}

export interface PrescType {
    prescTypeId: number;
}
export interface PrescTypeResponse {
    prescTypeId: number;
    prescTypeDesc: string;
    prescTypeCode: string;
}

export interface NoteDetailEprsc {
    srvId: Service;
    srvQty: number;
    timesAday?: TbDrugAmount;
    dose?: string;
    Repeat?: string;
    dateDo?: string;
    drugInstruction?: DrugInstruction;
}

export interface Service {
    srvCode: string;
    srvType: ServiceType;
    parTarefGrp?: ParTarefGroup;
}

export interface ServiceResponse {
    srvName: string;
    srvCode: string;
    srvType: ServiceType;
    parTarefGrp?: ParTarefGroup;
}

export interface ServiceType {
    srvType: string;
}

export interface ServiceTypeResponse {
    srvType: string;
    srvTypeDes: string;
    status: string;
}

export interface TbDrugAmount {
    drugAmntId: number;
}

export interface DrugInstruction {
    drugInstId: number;
}

export interface ParTarefGroup {
    parGrpCode: string;
}
