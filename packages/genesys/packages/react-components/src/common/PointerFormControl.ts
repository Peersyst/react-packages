import { FormControl } from "../FormControl";
import styled from "styled-components";

export default styled(FormControl)`
    cursor: pointer;
    * {
        cursor: pointer;
    }

    &.Disabled,
    &.Readonly {
        cursor: default;
        pointer-events: none;
        * {
            pointer-events: none;
        }
    }
` as typeof FormControl;
