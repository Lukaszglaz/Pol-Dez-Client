import {
  Dispatch,
  ReactNode,
  SetStateAction,
  createContext,
  useContext,
  useEffect,
  useState,
} from "react";

interface UserResponse {
  role: Role;
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
  console.log(user);

  useEffect(() => {
    (async () => {
      try {
        const response = await fetch("http://localhost:3001/auth/is-logged");
        console.log(response);
        const results = (await response.json()) as UserResponse;
        setUser(results);
      } catch (error) {
        console.log(error);
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
