import { createContext, useState, useContext } from "react";
import "react-native-get-random-values";
import "@ethersproject/shims";
import "@/utils/globals";
import { LOGIN_PROVIDER } from "@web3auth/react-native-sdk";
import { ethereumPrivateKeyProvider, web3auth } from "@/lib/web3auth";
import { EthereumPrivateKeyProvider } from "@web3auth/ethereum-provider";
import { IProvider } from "@web3auth/base";

const Context = createContext<{
  provider: IProvider;
  login: (email: string, toast) => Promise<EthereumPrivateKeyProvider>;
  logout: (toast) => Promise<any>;
} | null>(null);

export const ContextProvider = ({ children }) => {
  const [provider, setProvider] = useState<IProvider | null>(null);

  const login = async (email, toast) => {
    try {
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
      await web3auth
        .login({
          loginProvider: LOGIN_PROVIDER.EMAIL_PASSWORDLESS,
          extraLoginOptions: {
            login_hint: email,
          },
        })
        .then(async (res) => {
          toast.show("Sucess!", {
            message: res,
            type: "success",
          });

          if (web3auth.privKey) {
            await ethereumPrivateKeyProvider.setupProvider(web3auth.privKey);
            setProvider(ethereumPrivateKeyProvider);
          }
          return provider;
        })
        .catch((err) => {
          return toast.show("Cancelled Auth Flow", {
            message: err.message,
            type: "error",
          });
        });
    } catch (e) {
      toast.show(e.message, { type: "error" });
    }
  };

  const logout = async (toast) => {
    if (!web3auth.ready) {
      return toast.show("Web3Auth SDK is not ready", {
        message: "Please try again later.",
        type: "error",
      });
    }

    await web3auth.logout();

    if (!web3auth.privKey) {
      setProvider(null);
    }
  };

  return (
    <Context.Provider value={{ provider, login, logout }}>
      {children}
    </Context.Provider>
  );
};

export const useContextProvider = () => {
  const context = useContext(Context);
  if (!context) {
    throw new Error("useContextProvider must be used within a ContextProvider");
  }
  return context;
};
