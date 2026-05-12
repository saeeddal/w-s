export interface IUser {
  id: number;
  name: string;
  email: string;
  role: 'admin' | 'user' | 'guest';
  active: boolean;
}

export interface ICreateUserDto {
  title: string;
  body: string;
  userId: number;
}

export interface IUpdateUserDto {
  id: number;
  name?: string;
  active?: boolean;
}

export interface ICenterItem {
  id: number;
  name?: string;
  active?: boolean;
}
