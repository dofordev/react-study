export type UserRequest = {
  _id?: string;
  title: string;
  content: string;
};

export type UserResponse = {
  data: UserRequest[];
};
