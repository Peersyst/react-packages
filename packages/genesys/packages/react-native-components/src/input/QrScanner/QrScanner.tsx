import { QrScannerProps } from "./QrScanner.types";
import { useEffect, useState } from "react";
import { BackButton, ChildrenWrapper, IdleQrScanner, QrScannerRoot } from "./QrScanner.styles";
import { useMergeDefaultProps } from "@peersyst/react-components-core";
import { BarCodeScanner } from "expo-barcode-scanner";
import { StyleSheet } from "react-native";
import { Backdrop } from "../../feedback/Backdrop";
import { CrossIcon } from "../../assets/icons";
import { StatusBar } from "../../layout/StatusBar";

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
                return (
                    <>
                        {hasPermission ? (
                            <QrScannerRoot style={style}>
                                <BarCodeScanner
                                    onBarCodeScanned={(data) => {
                                        onScan(data);
                                        setOpen(false);
                                    }}
                                    style={StyleSheet.absoluteFillObject}
                                />
                                <ChildrenWrapper>
                                    <BackButton
                                        style={{ color: "white", fontSize: 30 }}
                                        onPress={() => setOpen(false)}
                                    >
                                        {back || <CrossIcon />}
                                    </BackButton>
                                    {children}
                                </ChildrenWrapper>
                            </QrScannerRoot>
                        ) : (
                            <IdleQrScanner />
                        )}
                        <StatusBar hidden translucent appearance="dark" />
                    </>
                );
            }}
        </Backdrop>
    );
};

export default QrScanner;
