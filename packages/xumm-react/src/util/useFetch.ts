import { useState } from "react";
import useXumm from "../useXumm";
import { XummContextType } from "../XummContext";
import catchErrors from "./catchErrors";

export interface FetchError {
    status: number;
    message: string;
    body: any;
}

export interface UseFetchResult<T> {
    isLoading: boolean;
    isSuccess: boolean;
    isError: boolean;
    data: T;
    error?: FetchError;
    fetchData: (...params: any[]) => Promise<T | undefined>;
}

export interface UseFetchOptions<T> {
    retryDelay?: number;
    retry?: false | number | ((retries: number, data?: T, error?: FetchError) => boolean);
    onSuccess?: (data: T) => void;
    onError?: (error: FetchError) => void;
}

export interface FetchStatus<T> {
    isLoading: boolean;
    isSuccess: boolean;
    isError: boolean;
    error?: FetchError;
    data?: T;
}

/**
 * Simple hook to provide basic fetch functionality to main hooks
 * @param path path name
 * @param retryDelay
 * @param retry false, the number of retries or a function that decides if it should retry
 * @param onSuccess
 * @param onError
 */
export default function <T = any>(
    path: keyof XummContextType["paths"],
    { retryDelay = 5000, retry = false, onSuccess, onError }: UseFetchOptions<T> = {},
): UseFetchResult<T> {
    const { url: baseUrl, paths, onError: contextOnError, getToken, removeToken } = useXumm();

    const [{ isLoading, isSuccess, isError, error, data }, setFetchStatus] = useState<
        FetchStatus<T>
    >({
        isLoading: false,
        isSuccess: false,
        isError: false,
    });

    const fetchData = async (...params: any[]): Promise<T | undefined> => {
        setFetchStatus({
            isLoading: true,
            isError: false,
            isSuccess: false,
            data: undefined,
            error: undefined,
        });

        // url and headers
        const url = baseUrl + paths[path] + params.join("/");
        const headers = new Headers();
        const token = await getToken();
        if (token) headers.append("Authorization", `Bearer ${token}`);
        headers.append("Accept", "application/json");
        headers.append("Content-Type", "application/json");

        let retries = 0;

        return new Promise((resolve) => {
            const tryFetch = async () => {
                try {
                    const res = await fetch(url, { headers });
                    await catchErrors(res);
                    const jsonRes = await res.json();
                    // Resolve correctly or retry
                    if (
                        !retry ||
                        (typeof retry === "number" ? retries++ > retry : !retry(++retries, jsonRes))
                    ) {
                        setFetchStatus({
                            isLoading: false,
                            isError: false,
                            isSuccess: true,
                            data: jsonRes,
                        });
                        await onSuccess?.(jsonRes);
                        resolve(jsonRes);
                    } else setTimeout(tryFetch, retryDelay);
                } catch (e) {
                    const fetchError = e as FetchError;
                    // Resolve with error or retry
                    if (
                        !retry ||
                        (typeof retry === "number"
                            ? retries++ > retry
                            : !retry(++retries, undefined, fetchError))
                    ) {
                        if (fetchError.status === 401) removeToken();
                        setFetchStatus({
                            isLoading: false,
                            isError: true,
                            isSuccess: false,
                            error: fetchError,
                        });
                        onError?.(fetchError);
                        contextOnError?.(fetchError);
                        resolve(undefined);
                    } else setTimeout(tryFetch, retryDelay);
                }
            };
            tryFetch();
        });
    };

    return {
        isLoading,
        isSuccess,
        isError,
        error,
        data: data as T,
        fetchData,
    };
}
