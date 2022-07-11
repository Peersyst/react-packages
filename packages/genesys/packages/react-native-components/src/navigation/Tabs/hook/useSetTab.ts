import useTabs from "./useTabs";

export default function useSetTab(): (index: number) => void {
    return useTabs()[1];
}
