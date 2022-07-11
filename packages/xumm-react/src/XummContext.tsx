import { createContext, ReactNode } from "react";
import { FetchError } from "./util/useFetch";

export interface XummContextType {
    url: string;
    paths: {
        status: string;
        signIn: string;
        verifySignIn: string;
    };
    getToken: () => any;
    setToken: (token: string) => any;
    removeToken: () => any;
    onError?: (e: FetchError) => void;
}

export const XummContext = createContext<XummContextType>({} as any);

export interface XummProviderConfig {
    url: string;
    getToken: XummContextType["getToken"];
    setToken: XummContextType["setToken"];
    removeToken: XummContextType["removeToken"];
    onError?: XummContextType["onError"];
    paths?: Partial<XummContextType["paths"]>;
}

export interface XummProviderProps {
    config: XummProviderConfig;
    children?: ReactNode;
}

export const XummProvider = ({
    config: {
        url,
        getToken,
        setToken,
        removeToken,
        paths: {
            status = "status/",
            signIn = "auth/sign-in",
            verifySignIn = "auth/verify-sign-in",
        } = {},
        onError,
    },
    children,
}: XummProviderProps) => {
    return (
        <XummContext.Provider
            value={{
                url: url.endsWith("/") ? url : url + "/",
                paths: {
                    status: status.startsWith("/") ? status.substring(1) : status,
                    signIn: signIn.startsWith("/") ? signIn.substring(1) : signIn,
                    verifySignIn: verifySignIn.startsWith("/")
                        ? verifySignIn.substring(1)
                        : verifySignIn,
                },
                onError,
                getToken,
                setToken,
                removeToken,
            }}
        >
            {children}
        </XummContext.Provider>
    );
};
export const XummConsumer = XummContext.Consumer;
