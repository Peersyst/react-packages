import { JSXElementConstructor } from "react";
import { useWindowDimensions } from "react-native";
import { KeyboardAwareScrollView } from "react-native-keyboard-aware-scroll-view";
import { useSafeAreaInsets } from "react-native-safe-area-context";

export interface Playground {
    name: string;
    component: JSXElementConstructor<{}>;
}

export default function playground<P>(
    name: string,
    Component: JSXElementConstructor<P>,
    props?: P,
): Playground {
    return {
        name,
        component: function PlaygroundComponent(): JSX.Element {
            const { width, height } = useWindowDimensions();
            const { bottom } = useSafeAreaInsets();

            return (
                <KeyboardAwareScrollView
                    alwaysBounceVertical={false}
                    contentContainerStyle={{
                        width,
                        height,
                        justifyContent: "center",
                        alignItems: "center",
                        padding: 20,
                        paddingBottom: 20 + bottom,
                    }}
                >
                    <Component {...(props as any)} />
                </KeyboardAwareScrollView>
            );
        },
    };
}
