import styled from "styled-components";
import { Skeleton } from "../Skeleton";

export const PlayerRoot = styled.div`
    position: relative;
`;

export const PlayerSkeleton = styled(Skeleton)`
    position: absolute;
    top: 0;
    left: 0;
    width: 100%;
    height: 100%;
`;
