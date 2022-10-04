import { QrScannerProps } from "./QrScanner.types";
import { useEffect, useState } from "react";
import { BackButton, ChildrenWrapper, IdleQrScanner, QrScannerRoot } from "./QrScanner.styles";
import { Backdrop } from "../../feedback/Backdrop";
import { StyleSheet } from "react-native";
import { BarCodeScanner } from "expo-barcode-scanner";
import { CrossIcon } from "../../assets/icons";
import { useMergeDefaultProps } from "@peersyst/react-components-core";

const QrScanner = (props: QrScannerProps): JSX.Element => {
    const { back, onScan, children, style, ...backdropProps } = useMergeDefaultProps(
        "QrScanner",
        props,
    );

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
                    <QrScannerRoot style={style}>
                        <BackButton
                            style={{ color: "white", fontSize: 30 }}
                            onPress={() => setOpen(false)}
                        >
                            {back || <CrossIcon />}
                        </BackButton>
                        <ChildrenWrapper>{children}</ChildrenWrapper>
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
};

export default QrScanner;
