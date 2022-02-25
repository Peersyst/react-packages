import { ComponentClass, FunctionComponent, Component } from "react";

export default function classify<P>(FunctionComponent: FunctionComponent<P>): ComponentClass<P> {
    return class ClassComponent extends Component<P> {
        render(): JSX.Element {
            return <FunctionComponent {...this.props} />;
        }
    };
}
