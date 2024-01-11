export interface IUser {
  id: number;
  name: string;
  role: string;
  expiration: number
}

export interface ILoginRequest {
  email: string;
  password: string;
}

export interface ILoginResponse {
  token: string;
  expiration: string;
}
