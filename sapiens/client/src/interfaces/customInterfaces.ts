export interface UserInterface{
  id: string;
  name: string;
  username: string;
  email: string;
  address: string,
  phone: number;
  website: string;
  company: string 
}


export interface UserListInterface {
  users: UserInterface[]
}


export interface UserFormInterface {
  todos: UserInterface[];
  handleUserCreate: (todo: UserInterface) => void;
}