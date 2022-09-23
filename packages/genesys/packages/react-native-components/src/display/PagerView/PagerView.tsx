import BasePagerView, { PagerViewProps as BasePagerViewProps } from "react-native-pager-view";
import { Col, ColProps } from "../../layout/Col";
import { Children, useEffect, useMemo, useState } from "react";
import { LayoutChangeEvent, NativeSyntheticEvent, View, ViewStyle } from "react-native";
import { PagerViewOnPageSelectedEventData } from "react-native-pager-view/src/types";
import { DottedPagination, DottedPaginationStyle } from "../../navigation/DottedPagination";
import { useMergeDefaultProps } from "@peersyst/react-components-core";
import { useGlobalStyles } from "../../config";

export type PagerViewStyle = ViewStyle & {
    pagination?: DottedPaginationStyle;
};

export interface PagerViewProps extends Omit<BasePagerViewProps, "onPageSelected" | "style"> {
    page?: number;
    height: ViewStyle["height"];
    gap?: ColProps["gap"];
    onPageSelected?: (page: number) => void;
    pagePadding?: {
        all?: ViewStyle["padding"];
        top?: ViewStyle["paddingTop"];
        bottom?: ViewStyle["paddingTop"];
        left?: ViewStyle["paddingTop"];
        right?: ViewStyle["paddingTop"];
        vertical?: ViewStyle["paddingTop"];
        horizontal?: ViewStyle["paddingTop"];
    };
    style?: PagerViewStyle;
}

const PagerView = (props: PagerViewProps): JSX.Element => {
    const {
        children,
        showPageIndicator,
        style: { pagination: paginationStyle = {}, ...style } = {},
        onPageSelected,
        page,
        initialPage = 0,
        height: heightProp,
        pageMargin,
        gap = 10,
        pagePadding: {
            all: padding = undefined,
            top: paddingTop = undefined,
            left: paddingLeft = undefined,
            bottom: paddingBottom = undefined,
            right: paddingRight = undefined,
            horizontal: paddingHorizontal = undefined,
            vertical: paddingVertical = undefined,
        } = {},
        ...rest
    } = useMergeDefaultProps("PagerView", props);

    const { pagination: globalPaginationStyle, ...globalStyle } = useGlobalStyles("PagerView");

    const [currentPage, setCurrentPage] = useState(page ?? initialPage);
    const [rerender, setRerender] = useState(false);
    const childrenLength = useMemo(() => Children.count(children), [children]);

    useEffect(() => {
        setRerender(true);
    }, [childrenLength]);

    useEffect(() => {
        if (page !== undefined && page !== currentPage) {
            setCurrentPage(page);
            setRerender(true);
        }
    }, [page]);

    useEffect(() => {
        if (rerender) setRerender(false);
    }, [rerender]);

    const handlePageSelected = (e: NativeSyntheticEvent<PagerViewOnPageSelectedEventData>) => {
        setCurrentPage(e.nativeEvent.position);
        onPageSelected?.(e.nativeEvent.position);
    };

    const [heightState, setHeightState] = useState<number>();

    const handleLayout = (e: LayoutChangeEvent) => {
        setHeightState(e.nativeEvent.layout.height);
    };

    const height = heightProp ?? heightState;

    return (
        <Col style={[globalStyle, style, { height }]} gap={gap}>
            {!rerender && (
                <BasePagerView
                    style={{ flex: 1 }}
                    pageMargin={pageMargin}
                    initialPage={currentPage}
                    onPageSelected={handlePageSelected}
                    {...rest}
                >
                    {Children.map(children, (child, key) => (
                        <View
                            style={{
                                position: "absolute",
                                alignItems: "center",
                                justifyContent: "center",
                                padding,
                                paddingTop,
                                paddingLeft,
                                paddingBottom,
                                paddingRight,
                                paddingHorizontal,
                                paddingVertical,
                            }}
                            collapsable
                            key={key}
                            onLayout={handleLayout}
                        >
                            {child}
                        </View>
                    ))}
                </BasePagerView>
            )}
            {showPageIndicator && (
                <DottedPagination
                    pages={Children.count(children)}
                    currentPage={currentPage + 1}
                    style={{ ...globalPaginationStyle, ...paginationStyle }}
                />
            )}
        </Col>
    );
};

export default PagerView;
