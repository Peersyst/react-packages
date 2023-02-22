export class TimeoutPromiseError extends Error {
    constructor() {
        super("Promise timed out");
    }
}

export default async function timeoutPromise<T>(promise: Promise<T>, ms: number): Promise<T> {
    const timeout = setTimeout(() => {
        Promise.reject(new TimeoutPromiseError());
    }, ms);
    const res = await promise;
    clearTimeout(timeout);
    return res;
}
