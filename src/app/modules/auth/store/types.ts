export enum UserRolesEnum {
  ADMIN = 1,
  STUDENT = 2,
}

// export interface IUser {
//   email: string;
//   firstName: string;
//   lastName: string;
//   password: string;
//   roleId: number;
//   userID: number;
// }

export interface IResponseUser {
  userId: number;
  roleId: number;
  userToken: string;
  refreshToken: string;
}

export interface IUser {
  _id: string;
  name: string;
  email: string;
  role: string;
  schoolName: string;
}

export interface IStudent {
  _id: string;
  name: string;
  email: string;
  role: string;
  school: any;
  sclassName: any;
}

export interface IAuthTokens {
  token: string;
  refreshToken: string;
}

export interface IAuthToken {
  token: string;
}

export interface ILogin {
  email: string;
  password: string;
}
