export interface User {
  userId?: string;
  name?: string;
  email?: string;
  username?: string;
  role?: string;
  createdAt?: string;
}

export interface Auth {
  message?: string;
  user?: User;
  token?: string
}

export interface authData {
  username?: string,
  password?: string
}

export interface actionUserResponse {
  Status?: number;
  Message?: string
}

const authData: Partial <authData> = {};