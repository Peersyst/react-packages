import { JSXElementConstructor } from "react";
import { View } from "react-native";

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
      return (
        <View
          style={{
            width: "100%",
            height: "100%",
            justifyContent: "center",
            alignItems: "center",
          }}
        >
          <Component {...(props as any)} />
        </View>
      );
    },
  };
}
