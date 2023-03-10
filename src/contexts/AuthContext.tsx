import { createContext, useEffect, useState } from "react";
import { Preloader } from "../components/Preloader";
import api from "../services/api";

interface User {
  id: number;
  name: string;
}

interface AuthContextData {
  user: User | null;
  signIn: (
    userId: string,
    password: string,
    passwordConfirmation: string
  ) => Promise<void>;
  signOut: () => Promise<void>;
}

interface AuthProviderProps {
  children: React.ReactNode;
}

export const AuthContext = createContext({} as AuthContextData);

export const AuthProvider: React.FC<AuthProviderProps> = ({ children }) => {
  const [user, setUser] = useState<User | null>(null);
  const [isLoading, setIsLoading] = useState(true);

  useEffect(() => {
    async function getAuthenticatedUser() {
      try {
        const token = localStorage.getItem("token");
        if (token) {
          const response = await api.get("user");
          const { data } = response.data;
          setUser(data.user);
          setIsLoading(false);
        } else {
          setIsLoading(false);
        }
      } catch (error) {
        localStorage.removeItem("token");
        setUser(null);
        setIsLoading(false);
      }
    }

    getAuthenticatedUser();
  }, []);

  const signIn = async (
    userId: string,
    password: string,
    passwordConfirmation: string
  ) => {
    const response = await api.post("login", {
      user_id: userId,
      password,
      password_confirmation: passwordConfirmation,
    });

    const { token } = response.data.data;

    if (token) {
      localStorage.setItem("token", token);

      const userResponse = await api.get("user");

      setUser(userResponse.data.data.user);
    }
  };

  const signOut = async () => {
    await api.post("logout");
    localStorage.removeItem("token");
    setUser(null);
  };

  if (isLoading) {
    return <Preloader />;
  }

  return (
    <AuthContext.Provider value={{ user, signIn, signOut }}>
      {children}
    </AuthContext.Provider>
  );
};
