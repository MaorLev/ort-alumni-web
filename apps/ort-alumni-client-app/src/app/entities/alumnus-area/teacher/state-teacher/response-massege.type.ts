export interface ResponseMassege {
  statuscode: StatusCODE;
  statustext:string;
  user:number;
  body:object;
  shortbody:string;
}

enum StatusCODE
{
    Success = 1000,
    Faild,
    Error,
    Warning
}