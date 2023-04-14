import { AnyObject } from "@peersyst/react-types";

export type AccessorResolverFn = <S extends AnyObject>(style: S, property: string) => S;

export type AccessorResolver = AccessorResolverFn & { resolver: true };
