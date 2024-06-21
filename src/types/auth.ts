import { UserResponse } from "../contexts/user.context";

export interface LoginResponse {
  user: UserResponse;

  token: string;
}
