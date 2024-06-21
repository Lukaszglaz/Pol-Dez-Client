export interface CreateUserRequest {
  firstName: string;
  lastName: string;
  email: string;
  password: string;
  confirmPassword: string;
  playerTag: string;
}

export interface LoginRequest {
  email: string;
  password: string;
}

export enum UserRole {
  User = "User",
  Admin = "Admin",
}
