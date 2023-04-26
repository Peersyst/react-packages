import BasePagerView, {
    PagerViewProps as BasePagerViewProps,
    PagerViewOnPageSelectedEventData,
} from "react-native-pager-view";
import { Col, ColProps } from "../../layout/Col";
import { Children, useEffect, useMemo, useState } from "react";
import { NativeSyntheticEvent, View, ViewStyle } from "react-native";
import { DottedPagination, DottedPaginationStyle } from "../../navigation/DottedPagination";
import { useMergeDefaultProps } from "@peersyst/react-components-core";
import { usePagerViewStyles } from "./hooks";

export type PagerViewStyle = ViewStyle & {
    pagination?: DottedPaginationStyle;
};

export interface PagerViewProps extends Omit<BasePagerViewProps, "onPageSelected" | "style"> {
    page?: number;
    height?: ViewStyle["height"];
    gap?: ColProps["gap"];
    showPageIndicator?: boolean;
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

const PagerView = (rawProps: PagerViewProps): JSX.Element => {
    const props = useMergeDefaultProps("PagerView", rawProps);
    const {
        children,
        showPageIndicator,
        onPageSelected,
        page,
        initialPage = 0,
        height,
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
        style: _style,
        ...rest
    } = props;

    const { pagination: paginationStyle, ...style } = usePagerViewStyles(props);

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

    return (
        <Col style={[style, { height }]} gap={gap}>
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
                    style={paginationStyle}
                />
            )}
        </Col>
    );
};

export default PagerView;
