import { View } from "react-native";
import { Typography, PortalHost, Portal, Button } from "../../src";
import playground from "../playground";
import { Fragment, createContext, useContext, useState } from "react";

const Display = () => {
    const [renderContext, setRenderContext] = useState(false);

    const ContentContextProvider = renderContext ? ContentContext.Provider : Fragment;

    return (
        <>
            <View
                style={{
                    position: "absolute",
                    width: "100%",
                    height: "100%",
                    alignItems: "center",
                    justifyContent: "center",
                }}
            >
                <Button onPress={() => setRenderContext(!renderContext)}>Render context</Button>
                <PortalHost name="test" />
            </View>
            <ContentContextProvider value={{ value: "Hello" }}>
                <Portal hostName="test">
                    <Content />
                </Portal>
            </ContentContextProvider>
        </>
    );
};

const ContentContext = createContext({ value: "default" });

const Content = () => {
    const { value } = useContext(ContentContext);

    return <Typography variant="body1">{value}</Typography>;
};

export default playground("Portal", Display);
