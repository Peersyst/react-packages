import { ComponentClass, ComponentType, Component as ReactComponent } from "react";

export default function classify<P>(Component: ComponentType<P>): ComponentClass<P> {
    return class ClassComponent extends ReactComponent<P> {
        render(): JSX.Element {
            return <Component {...this.props} />;
        }
    };
}
