import useTabs from "./useTabs";

export default function useTab(): number {
    return useTabs()[0];
}
