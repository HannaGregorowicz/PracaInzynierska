export type RegisterRequestBody = {
  firstName?: string;
  lastName?: string;
  email?: string;
  phone?: string;
  password?: string;
};

export type LoginRequestBody = {
  email: string;
  password: string;
};
