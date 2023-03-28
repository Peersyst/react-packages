export default function hashToShareData(text: string): ShareData {
    return {
        text: `Check out this hash: ${text}`,
    };
}
