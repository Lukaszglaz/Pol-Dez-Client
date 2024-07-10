/* eslint-disable react-refresh/only-export-components */
import {
  Dispatch,
  ReactNode,
  SetStateAction,
  createContext,
  useContext,
  useEffect,
  useState,
} from "react";
import { callApi } from "../utils/api";

export interface UserResponse {
  role: Role;
  id: string;
  name: string;
}

interface UserContextValue {
  user: UserResponse | null;
  setUser: Dispatch<SetStateAction<UserResponse | null>>;
}

export enum Role {
  User,
  Admin,
}

const UserContext = createContext<UserContextValue>(null!);

export const useUser = () => useContext(UserContext);

interface Props {
  children: ReactNode;
}

export const UserProvider = ({ children }: Props) => {
  const [user, setUser] = useState<UserResponse | null>(null);

  useEffect(() => {
    (async () => {
      const response = await callApi<UserResponse>("auth/is-logged");
      if (response.status) {
        setUser(response.results);
      }
    })();
  }, []);

  return (
    <UserContext.Provider
      value={{
        user,
        setUser,
      }}
    >
      {children}
    </UserContext.Provider>
  );
};
