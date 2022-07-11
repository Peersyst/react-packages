export type XummQrQuality = "m" | "q" | "h";

export interface XummPostPayloadResponse {
    uuid: string;
    next: {
        always: string;
        no_push_msg_received?: string;
    };
    refs: {
        qr_png: string;
        qr_matrix: string;
        qr_uri_quality_opts: XummQrQuality[];
        websocket_status: string;
    };
    pushed: boolean;
}
