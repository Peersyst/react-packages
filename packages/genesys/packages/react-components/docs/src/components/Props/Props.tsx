import React, { JSXElementConstructor } from "react";
import { useReactDocgenProps } from "../../hooks";
import styles from "./Props.module.css";
import clsx from "clsx";

export interface PropsProps {
    component: string | JSXElementConstructor<any>;
}

const Props = ({ component }: PropsProps) => {
    const props = useReactDocgenProps(component);

    if (!props) {
        return null;
    }

    return (
        <table className={styles["props-table"]}>
            <thead>
                <tr>
                    <th align="left">Name</th>
                    <th align="left">Type</th>
                    <th align="left">Default</th>
                    <th align="left">Description</th>
                </tr>
            </thead>
            <tbody>
                {Object.keys(props)
                    .sort((a, b) => (props[a].required ? -1 : props[b].required ? 1 : 0))
                    .map((key) => {
                        const prop = props[key];

                        return (
                            <tr key={key}>
                                <td align="left">
                                    <span
                                        className={clsx(
                                            styles["prop-name"],
                                            prop.required && styles["required"],
                                        )}
                                    >
                                        {prop.name}
                                        {prop.required && <sup title="required">*</sup>}
                                    </span>
                                </td>
                                <td align="left">
                                    <span
                                        className={styles["prop-type"]}
                                        dangerouslySetInnerHTML={{
                                            __html: prop.type
                                                ? prop.type.value && Array.isArray(prop.type.value)
                                                    ? prop.type.value
                                                          .map((value) => value.value)
                                                          .join("<br>|&nbsp;")
                                                    : prop.type?.raw || prop.type?.name
                                                : "unknown",
                                        }}
                                    />
                                </td>
                                <td align="left">
                                    {prop.defaultValue && (
                                        <span className={styles["prop-default"]}>
                                            <code>{JSON.stringify(prop.defaultValue.value)}</code>
                                        </span>
                                    )}
                                </td>
                                <td align="left">
                                    <div>
                                        {prop.description +
                                            (prop.description.endsWith(".") ? "" : ".")}
                                    </div>
                                </td>
                            </tr>
                        );
                    })}
            </tbody>
        </table>
    );
};

export default Props;
