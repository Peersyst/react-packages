import useFetch, { UseFetchOptions, UseFetchResult } from "./util/useFetch";

export type TransactionRequestStatus =
    | "signed"
    | "declined"
    | "cancelled"
    | "expired"
    | "pending"
    | string;

export interface StatusRequestResponse {
    status: TransactionRequestStatus;
}

export interface UseTransactionRequestStatus
    extends Omit<UseFetchResult<any>, "data" | "fetchData"> {
    fetchStatus: (uuid: string) => Promise<TransactionRequestStatus | undefined>;
    status?: TransactionRequestStatus;
}

export interface UseTransactionRequestOptions extends UseFetchOptions<StatusRequestResponse> {
    onSigned?: () => void;
    onSignatureResolved?: (status: TransactionRequestStatus) => void;
}

export default function ({
    onSigned,
    onSignatureResolved,
    retryDelay = 10000,
    ...restOptions
}: UseTransactionRequestOptions = {}): UseTransactionRequestStatus {
    const { fetchData, data, ...rest } = useFetch<StatusRequestResponse>("status", {
        retry: (_retries, data) => data?.status === "pending",
        retryDelay,
        ...restOptions,
    });

    const fetchStatus = async (uuid: string): Promise<TransactionRequestStatus | undefined> => {
        const res = await fetchData(uuid);
        if (res) {
            onSignatureResolved?.(res.status);
            if (res.status === "signed") await onSigned?.();
            return res?.status;
        }
    };

    return {
        ...rest,
        fetchStatus,
        status: data?.status,
    };
}
