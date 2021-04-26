export interface IDataProcedureState {
    data: any[],
    value: string,
    checkbox: FILTER_STATUS,
    total: number
}
export interface ITodoObjectPayload {
    id?: string, title?: string, description?: string, status?: STATUS
}
export interface ITodoObject {
    id: string, title: string, description: string, status: STATUS,
}

export enum FILTER_STATUS {
    DONE = "DONE",
    TODO = "TODO",
    ALL = "ALL"
}
export enum STATUS {
    DONE = "DONE",
    TODO = "TODO",
}