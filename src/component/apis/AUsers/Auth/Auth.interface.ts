export interface Role {
  name: string;
  description: string;
  permissions: string[];
}
export interface IRegister {
  id: string;
  username: string;
  dob: string;
  email: string;
  emailVerified: boolean;
  password: string;
  name: string | null;
  gender: "male" | "female" | "other" | null;
  occupation: string | null;
  roles: Role[];
}

export interface ApiResponse {
  code: number;
  message: string;
  result: {
    token: string;
    expiryTime: string;
  };
}

export interface ILoginForm {
  password: string;
  username: string;
}
