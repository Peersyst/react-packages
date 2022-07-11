export default async function (res: any): Promise<void> {
    const errors: Record<number, string> = {
        400: "Bad Request",
        401: "Unauthorized",
        403: "Forbidden",
        404: "Not Found",
        500: "Internal Server Error",
        502: "Bad Gateway",
        503: "Service Unavailable",
    };

    const error = errors[res.status];
    if (error || !res.ok) {
        const jsonErr = await res.json();
        throw { status: res.status, message: res.statusText, body: jsonErr };
    }
}
