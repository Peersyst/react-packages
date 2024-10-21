import { alpha } from "@peersyst/react-utils";
import styled, { css } from "styled-components";

export const TableBodyRoot = styled.tbody(
    ({ theme }) => css`
        position: relative;

        background-color: inherit;

        tr {
            height: 3.25rem;

            &.TableRowClickable {
                &:hover {
                    background-color: ${alpha(theme.palette.primary, 0.1)};
                }
            }

            td {
                border-bottom: var(--table-cell-border);
            }
        }
    `,
);
