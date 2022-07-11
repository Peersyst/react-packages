import useFetch, { UseFetchOptions, UseFetchResult } from "./util/useFetch";
import useXumm from "./useXumm";

export interface VerifySignInResponse {
    address: string;
    access_token: string;
}

export interface UseVerifySignInResult extends Omit<UseFetchResult<any>, "data" | "fetchData"> {
    data?: VerifySignInResponse;
    verifySignIn: () => Promise<VerifySignInResponse | undefined>;
}

export interface UseVerifySignInOptions
    extends Omit<UseFetchOptions<VerifySignInResponse>, "retry"> {
    retry?: boolean | number;
}

export default function ({
    retry = false,
    retryDelay = 2500,
    ...restOptions
}: UseVerifySignInOptions = {}): UseVerifySignInResult {
    const { setToken } = useXumm();
    const { fetchData, data, ...rest } = useFetch<VerifySignInResponse>("verifySignIn", {
        retry: retry ? (retries, data) => (retry === true ? 4 : retry) > retries && !data : false,
        retryDelay,
        ...restOptions,
    });

    const verifySignIn = async (): Promise<VerifySignInResponse | undefined> => {
        const res = await fetchData();
        if (res?.access_token) setToken(res.access_token);
        return res;
    };

    return {
        ...rest,
        verifySignIn,
        data,
    };
}
