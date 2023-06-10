//返回 res.data 的interface
export interface IResponse {
    code: number | string;
    data: never;
    msg: string;
}
