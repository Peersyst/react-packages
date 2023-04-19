import React, { Fragment, JSXElementConstructor } from "react";
import { useReactDocgenProps } from "../../hooks";

export interface PropsProps {
    component: string | JSXElementConstructor<any>;
}

const Props = ({ component }: PropsProps) => {
    const props = useReactDocgenProps(component);

    if (!props) {
        return null;
    }

    return (
        <>
            {Object.keys(props).map((key) => {
                return (
                    <Fragment key={key}>
                        <h3 id={props[key].name}>
                            <code>{props[key].name + (props[key].required ? "*" : "")}</code>
                        </h3>
                        <p>
                            {props[key].description +
                                (props[key].description.endsWith(".") ? "" : ".")}
                        </p>
                        <table style={{ width: "100%", display: "table" }}>
                            <thead>
                                <tr style={{ borderBottom: "none" }}>
                                    <th style={{ textAlign: "left", fontSize: "0.8rem" }}>TYPE</th>
                                </tr>
                            </thead>
                            <tbody>
                                <tr style={{ columnSpan: "all" }}>
                                    <td>{props[key].type?.raw || props[key].type?.name}</td>
                                </tr>
                            </tbody>
                        </table>
                        {!!props[key].defaultValue && (
                            <p>
                                Default value:{" "}
                                <code>{JSON.stringify(props[key].defaultValue.value)}</code>
                            </p>
                        )}
                    </Fragment>
                );
            })}
        </>
    );
};

export default Props;
