export interface User {
  id?: string;
  name?: string;
  email?: string;
  username?: string;
  role?: string;
  fecha_de_alta?: string;
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

const authData: Partial <authData> = {};