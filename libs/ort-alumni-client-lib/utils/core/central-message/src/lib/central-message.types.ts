export enum MessageType {
  Error,
  Info,
  Success,
}
export interface HttpResponseDetails {
  statusCode:number;
  errorDetails:unknown;
  message: string;
}

export interface Message {
  type: MessageType;
  description: string;
  httpResponseDetails?:HttpResponseDetails
}

export interface CentralMessageConfig {
  enableLoggers: boolean;
}

export enum TimeToShow {
  interceptorAlertTime = 3000,
}