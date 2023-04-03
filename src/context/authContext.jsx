import { createContext, useState } from "react";
import {
  createUserWithEmailAndPassword,
  signInWithEmailAndPassword,
  GoogleAuthProvider,
  signInWithPopup,
} from "firebase/auth";

import { auth } from "../services/firebase-config";

export const authContext = createContext();

export const AuthProvider = ({ children }) => {
  const [isLoggedIn, setIsLoggedIn] = useState(false);
  const [error, setError] = useState(null);

  const provider = new GoogleAuthProvider();

  const signup = async (email, password) => {
    try {
      await createUserWithEmailAndPassword(auth, email, password);
    } catch (error) {
      setError(error.message);
      return error.message;
    }
  };

  const login = async (email, password) => {
    setError("");
    try {
      await signInWithEmailAndPassword(auth, email, password);
    } catch (error) {
      setError(error.message);
      return error.message;
    }
  };

  const loginWhitGoogle = async () => {
    setError("");
    try {
      await signInWithPopup(auth, provider);
    } catch (error) {
      setError(error.message);
      return error.message;
    }
  };

  return (
    <authContext.Provider
      value={{ signup, login, isLoggedIn, setIsLoggedIn, error, loginWhitGoogle }}
    >
      {children}
    </authContext.Provider>
  );
};
