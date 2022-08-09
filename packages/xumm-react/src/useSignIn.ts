import useFetch, { UseFetchOptions, UseFetchResult } from "./util/useFetch";
import useTransactionRequestStatus from "./useTransactionRequestStatus";
import useVerifySignIn, { VerifySignInResponse } from "./useVerifySignIn";
import useXumm from "./useXumm";
import { XummPostPayloadResponse } from "./types";

export interface SignInResponse {
    access_token: string;
    xummPayload: XummPostPayloadResponse;
}

export interface UseSignInResult extends Omit<UseFetchResult<any>, "data" | "fetchData"> {
    signInData?: SignInResponse;
    verifySignInData?: VerifySignInResponse;
    signIn: () => Promise<SignInResponse | undefined>;
    signInLoading: boolean;
    transactionRequestStatusLoading: boolean;
    verifySignInLoading: boolean;
}

export interface UseSignInOptions extends Omit<UseFetchOptions<SignInResponse>, "onSuccess"> {
    onSignIn?: (data: SignInResponse) => void;
    onSignInVerified?: (data: VerifySignInResponse) => void;
}

export default function ({
    onSignIn,
    onSignInVerified,
    ...restOptions
}: UseSignInOptions = {}): UseSignInResult {
    const { setToken, removeToken } = useXumm();
    // Verify sign in when transaction request is signed
    const {
        verifySignIn,
        data: verifySignInData,
        isError: verifySignInError,
        isLoading: verifySignInLoading,
        isSuccess,
    } = useVerifySignIn({
        onSuccess: onSignInVerified,
        onError: () => {
            removeToken();
        },
        retry: true,
    });
    // Check transaction request status when sign in succeeds
    const {
        fetchStatus,
        isLoading: transactionRequestStatusLoading,
        isError: transactionRequestStatusError,
    } = useTransactionRequestStatus({
        onSigned: verifySignIn,
    });
    // Sign in and store temporal token to verify sign in later
    const {
        fetchData,
        data: signInData,
        isError: signInError,
        isLoading: signInLoading,
        ...rest
    } = useFetch<SignInResponse>("signIn", {
        ...restOptions,
        onSuccess: async (res) => {
            const {
                xummPayload: { uuid },
                access_token,
            } = res;
            setToken(access_token);
            await onSignIn?.(res);
            await fetchStatus(uuid);
        },
    });

    const signIn = async (): Promise<SignInResponse | undefined> => {
        return fetchData();
    };

    const isLoading = signInLoading || transactionRequestStatusLoading || verifySignInLoading;

    return {
        ...rest,
        signIn,
        signInData,
        verifySignInData,
        isLoading,
        signInLoading,
        transactionRequestStatusLoading,
        verifySignInLoading,
        isError: !isLoading && (signInError || transactionRequestStatusError || verifySignInError),
        isSuccess,
    };
}
