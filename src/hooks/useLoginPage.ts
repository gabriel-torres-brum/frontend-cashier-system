import { AxiosError } from "axios";
import { FormEvent, useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";
import api from "../services/api";
import { useAuth } from "./useAuth";

export const useLoginPage = () => {
  const navigate = useNavigate();
  const { user, signIn } = useAuth();

  const [usersList, setUsersList] = useState([]);
  const [userId, setUserId] = useState("");
  const [password, setPassword] = useState("");
  const [passwordConfirmation, setPasswordConfirmation] = useState("");

  const handleLogin = async (e: FormEvent) => {
    e.preventDefault();

    try {
      await signIn(userId, password, passwordConfirmation);
      navigate("/dashboard");
    } catch (error) {
      console.log(error);
    }
  };

  useEffect(() => {
    if (user) navigate("/dashboard");
  }, [user]);

  useEffect(() => {
    const controller = new AbortController();
    let isMounted = true;

    async function getAuthenticableUsers() {
      try {
        const response = await api.get("users", {
          signal: controller.signal,
        });

        if (isMounted) {
          setUsersList(response.data.data.users);
        }
      } catch (error) {
        console.log(error);
      }
    }

    getAuthenticableUsers();

    return () => {
      controller.abort();
      isMounted = false;
    };
  }, []);

  return {
    handleLogin,
    usersList,
    userId,
    setUserId,
    setPassword,
    setPasswordConfirmation
  };
};
