import styled, { css } from "styled-components";
import { Label } from "../Label";

export const FormControlLabelRoot = styled(Label)(
    ({ theme }) => css`
        &&.Focused {
            > .Label {
                color: ${theme.palette.primary};
            }
        }

        &&.Invalid {
            > .Label {
                color: ${theme.palette.status.error};
            }
        }

        &&.Valid {
            > .Label {
                color: ${theme.palette.status.success};
            }
        }

        &&.Disabled {
            > .Label {
                color: ${theme.palette.disabled};
            }
        }
    `,
);
