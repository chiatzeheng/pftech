// src/contexts/AuthContext.js
import React, { createContext, useState, useContext, useEffect } from "react";
import "react-native-get-random-values";
import "@ethersproject/shims";
import "@/utils/globals";
import { LOGIN_PROVIDER } from "@web3auth/react-native-sdk";
import { ethereumPrivateKeyProvider, web3auth } from "@/lib/web3auth";

const AuthContext = createContext(null);

export const AuthProvider = ({ children }) => {
  const [provider, setProvider] = useState(null);
  const [email, setEmail] = useState("");
  const [isAuthenticated, setIsAuthenticated] = useState<boolean>(true);

  const login = async (email, toast) => {
    try {
      web3auth.init();
      if (!web3auth.ready) {
        return toast.show("Web3Auth SDK is not ready", {
          message: "Please try again later.",
          type: "error",
        });
      }
      if (!email) {
        return toast.show("Email is required", {
          message: "Please enter your email.",
          type: "error",
        });
      }
      await web3auth.login({
        loginProvider: LOGIN_PROVIDER.EMAIL_PASSWORDLESS,
        extraLoginOptions: {
          login_hint: email,
        },
      });

      if (web3auth.privKey) {
        await ethereumPrivateKeyProvider.setupProvider(web3auth.privKey);
        setProvider(ethereumPrivateKeyProvider);
        setIsAuthenticated(true);
      }
    } catch (e) {
      toast.show(e.message, { type: "error" });
    }
  };

  return (
    <AuthContext.Provider
      value={{ provider, email, setEmail, login, isAuthenticated }}
    >
      {children}
    </AuthContext.Provider>
  );
};

export const useAuth = () => useContext(AuthContext);
