import { setRef } from "@peersyst/react-utils";
import * as React from "react";
import { useMemo } from "react";

export default function useForkRef<Instance>(
    refA: React.Ref<Instance> | null | undefined,
    refB: React.Ref<Instance> | null | undefined,
): React.Ref<Instance> | null {
    /**
     * This will create a new function if the ref props change and are defined.
     * This means react will call the old forkRef with `null` and the new forkRef
     * with the ref. Cleanup naturally emerges from this behavior.
     */
    return useMemo(() => {
        if (refA == null && refB == null) {
            return null;
        }
        return (refValue) => {
            setRef(refA, refValue);
            setRef(refB, refValue);
        };
    }, [refA, refB]);
}
