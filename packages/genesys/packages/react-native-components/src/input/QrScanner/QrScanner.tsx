import { QrScannerProps } from "./QrScanner.types";
import { useEffect, useState } from "react";
import { BackButton, IdleQrScanner, QrScannerRoot } from "./QrScanner.styles";
import { Backdrop } from "../../feedback/Backdrop";
import { createModal } from "../../feedback/ModalProvider";
import { StyleSheet } from "react-native";
import { BarCodeScanner } from "expo-barcode-scanner";
import { CrossIcon } from "../../assets/icons";
import { useMergeDefaultProps } from "@peersyst/react-components-core";

const QrScanner = createModal((props: QrScannerProps): JSX.Element => {
    const { back, onScan, ...backdropProps } = useMergeDefaultProps("QrScanner", props);

    const [hasPermission, setHasPermission] = useState<boolean>();

    useEffect(() => {
        BarCodeScanner.requestPermissionsAsync().then(({ status }) =>
            setHasPermission(status === "granted"),
        );
    }, []);

    return (
        <Backdrop
            animationInTiming={1}
            animationOutTiming={1}
            animationIn="fadeIn"
            animationOut="fadeOut"
            {...backdropProps}
        >
            {(open, setOpen) => {
                if (hasPermission === false) open && setOpen(false);
                return hasPermission ? (
                    <QrScannerRoot>
                        <BackButton
                            style={{ color: "white", fontSize: 30 }}
                            onPress={() => setOpen(false)}
                        >
                            {back || <CrossIcon />}
                        </BackButton>
                        <BarCodeScanner
                            onBarCodeScanned={(data) => {
                                onScan(data);
                                setOpen(false);
                            }}
                            style={StyleSheet.absoluteFillObject}
                        />
                    </QrScannerRoot>
                ) : (
                    <IdleQrScanner />
                );
            }}
        </Backdrop>
    );
});

export default QrScanner;
