

export interface JWTResult{
  access_token: string,
  type: string,
  expired: number
}

export interface PayloadInterface {
  aud:string,
  exp:number,
  iss:string,
  name:string,
  role:string,
  userId:string
}