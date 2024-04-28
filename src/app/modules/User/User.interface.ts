export type TUser = {
  name: string;
  email: string;
  password: string;
  bio?: string;
  profession?: string;
  address?: string;
  created_at: Date;
  updated_at: Date;
};

export type TUserProfile = {
  bio?: string;
  profession?: string;
  address?: string;
};
