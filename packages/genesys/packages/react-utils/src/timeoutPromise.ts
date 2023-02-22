export class TimeoutPromiseError extends Error {
    constructor() {
        super("Promise timeout");
    }
}

export default async function timeoutPromise<T>(promise: Promise<T>, ms: number): Promise<T> {
    let timeout;
    const rejectedPromise = new Promise<T>((_, reject) => {
        timeout = setTimeout(() => {
            reject(new TimeoutPromiseError());
        }, ms);
    });

    const res = await Promise.race([promise, rejectedPromise]);
    clearTimeout(timeout);
    return res;
}
