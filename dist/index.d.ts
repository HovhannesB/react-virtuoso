import { default as React_2 } from 'react';

export declare type CalculateViewLocation = (params: CalculateViewLocationParams) => IndexLocationWithAlign | number | null;

export declare interface CalculateViewLocationParams {
    itemTop: number;
    itemBottom: number;
    viewportTop: number;
    viewportBottom: number;
    locationParams: {
        align?: 'start' | 'center' | 'end';
        behavior?: 'auto' | 'smooth';
    } & ({
        index: number;
    } | {
        groupIndex: number;
    });
}

/**
 * Customize the Virtuoso rendering by passing a set of custom components.
 */
export declare interface Components<Data = unknown, Context = unknown> {
    /**
     * Set to render a component at the top of the list.
     *
     * The header remains above the top items and does not remain sticky.
     */
    Header?: React_2.ComponentType<{
        context?: Context;
    }>;
    /**
     * Set to render a component at the bottom of the list.
     */
    Footer?: React_2.ComponentType<{
        context?: Context;
    }>;
    /**
     * Set to customize the item wrapping element. Use only if you would like to render list from elements different than a `div`.
     */
    Item?: React_2.ComponentType<ItemProps<Data> & {
        context?: Context;
    }>;
    /**
     * Set to customize the group item wrapping element. Use only if you would like to render list from elements different than a `div`.
     */
    Group?: React_2.ComponentType<GroupProps & {
        context?: Context;
    }>;
    /**
     * Set to customize the top list item wrapping element. Use if you would like to render list from elements different than a `div`
     * or you want to set a custom z-index for the sticky position.
     */
    TopItemList?: React_2.ComponentType<TopItemListProps & {
        context?: Context;
    }>;
    /**
     * Set to customize the outermost scrollable element. This should not be necessary in general,
     * as the component passes its HTML attribute props to it.
     */
    Scroller?: React_2.ComponentType<ScrollerProps & {
        context?: Context;
    }>;
    /**
     * Set to customize the items wrapper. Use only if you would like to render list from elements different than a `div`.
     */
    List?: React_2.ComponentType<ListProps & {
        context?: Context;
    }>;
    /**
     * Set to render a custom UI when the list is empty.
     */
    EmptyPlaceholder?: React_2.ComponentType<{
        context?: Context;
    }>;
    /**
     * Set to render an item placeholder when the user scrolls fast.  See the `scrollSeek` property for more details.
     */
    ScrollSeekPlaceholder?: React_2.ComponentType<ScrollSeekPlaceholderProps & {
        context?: Context;
    }>;
}

export declare interface ComputeItemKey<D, C> {
    (index: number, item: D, context: C): React_2.Key;
}

export declare interface ElementDimensions {
    width: number;
    height: number;
}

/**
 * Passed to the Components.FillerRow custom component
 */
export declare interface FillerRowProps {
    height: number;
}

export declare type FixedFooterContent = (() => React_2.ReactNode) | null;

export declare type FixedHeaderContent = (() => React_2.ReactNode) | null;

export declare interface FlatIndexLocationWithAlign extends LocationOptions {
    /**
     * The index of the item to scroll to.
     */
    index: number | 'LAST';
}

export declare interface FlatScrollIntoViewLocation extends ScrollIntoViewLocationOptions {
    index: number;
}

export declare type FollowOutput = FollowOutputCallback | FollowOutputScalarType;

export declare type FollowOutputCallback = (isAtBottom: boolean) => FollowOutputScalarType;

export declare type FollowOutputScalarType = boolean | 'smooth' | 'auto';

export declare interface Gap {
    row: number;
    column: number;
}

export declare interface GridComponents<Context = any> {
    /**
     * Set to customize the item wrapping element. Use only if you would like to render list from elements different than a `div`.
     */
    Item?: React_2.ComponentType<GridItemProps & {
        context?: Context;
    }>;
    /**
     * Set to customize the outermost scrollable element. This should not be necessary in general,
     * as the component passes its HTML attribute props to it.
     */
    Scroller?: React_2.ComponentType<ScrollerProps & {
        context?: Context;
    }>;
    /**
     * Set to customize the items wrapper. Use only if you would like to render list from elements different than a `div`.
     */
    List?: React_2.ComponentType<GridListProps & {
        context?: Context;
    }>;
    /**
     * Set to render a component at the top of the list.
     *
     * The header remains above the top items and does not remain sticky.
     */
    Header?: React_2.ComponentType<{
        context?: Context;
    }>;
    /**
     * Set to render a component at the bottom of the list.
     */
    Footer?: React_2.ComponentType<{
        context?: Context;
    }>;
    /**
     * Set to render an item placeholder when the user scrolls fast.
     * See the `scrollSeekConfiguration` property for more details.
     */
    ScrollSeekPlaceholder?: React_2.ComponentType<GridScrollSeekPlaceholderProps & {
        context?: Context;
    }>;
}

export declare interface GridComputeItemKey<D, C> {
    (index: number, item: D, context: C): React_2.Key;
}

export declare type GridIndexLocation = FlatIndexLocationWithAlign | number;

export declare interface GridItem<D> {
    index: number;
    data?: D;
}

export declare interface GridItemContent<D, C> {
    (index: number, data: D, context: C): React_2.ReactNode;
}

export declare interface GridItemProps {
    'data-index': number;
    className?: string;
}

/**
 * Passed to the Components.List custom component
 */
export declare type GridListProps = Pick<React_2.ComponentPropsWithRef<'div'>, 'style' | 'children' | 'ref' | 'className'> & {
    'data-test-id': string;
};

export declare type GridRootProps = Omit<React_2.HTMLProps<HTMLDivElement>, 'ref' | 'data'>;

/**
 * Passed to the GridComponents.ScrollSeekPlaceholder custom component
 */
export declare interface GridScrollSeekPlaceholderProps {
    index: number;
    height: number;
    width: number;
}

export declare interface GridStateSnapshot {
    viewport: ElementDimensions;
    item: ElementDimensions;
    gap: Gap;
    scrollTop: number;
}

export declare interface GroupContent<C> {
    (index: number, context: C): React_2.ReactNode;
}

export declare interface GroupedScrollIntoViewLocation extends ScrollIntoViewLocationOptions {
    groupIndex: number;
}

export declare const GroupedVirtuoso: <ItemData = any, Context = any>(props: GroupedVirtuosoProps<ItemData, Context> & {
    ref?: React_2.Ref<GroupedVirtuosoHandle> | undefined;
}) => React_2.ReactElement;

export declare interface GroupedVirtuosoHandle {
    scrollToIndex(location: number | IndexLocationWithAlign): void;
    scrollIntoView(location: number | ScrollIntoViewLocation): void;
    scrollTo(location: ScrollToOptions): void;
    scrollBy(location: ScrollToOptions): void;
    autoscrollToBottom(): void;
    /**
     * Obtains the internal size state of the component, so that it can be restored later. This does not include the data items.
     */
    getState(stateCb: StateCallback): void;
}

export declare interface GroupedVirtuosoProps<D, C> extends Omit<VirtuosoProps<D, C>, 'totalCount' | 'itemContent'> {
    /**
     * Specifies the amount of items in each group (and, actually, how many groups are there).
     * For example, passing [20, 30] will display 2 groups with 20 and 30 items each.
     */
    groupCounts?: number[];
    /**
     * Specifies how each each group header gets rendered. The callback receives the zero-based index of the group.
     */
    groupContent?: GroupContent<C>;
    /**
     * Specifies how each each item gets rendered.
     */
    itemContent?: GroupItemContent<D, C>;
    /**
     * Use when implementing inverse infinite scrolling, decrease the value this property
     * in combination with a change in `groupCounts` to prepend groups items to the top of the list.
     * Both new groups and extending the top group is supported.
     *
     * The delta of the firstItemIndex should equal the amount of new items introduced, without the group themselves.
     * As an example, if you prepend 2 groups with 20 and 30 items each, the firstItemIndex should be decreased with 50.
     *
     * You can also prepend more items to the first group, for example:
     * \{ groupCounts: [20, 30], firstItemIndex: 1000 \} can become \{ groupCounts: [10, 30, 30], firstItemIndex: 980 \}
     *
     * Warning: the firstItemIndex should **be a positive number**, based on the total amount of items to be displayed.
     */
    firstItemIndex?: number;
}

export declare interface GroupIndexLocationWithAlign extends LocationOptions {
    /**
     * The group index of the item to scroll to.
     */
    groupIndex: number;
}

export declare interface GroupItem<D> extends Item<D> {
    type: 'group';
    originalIndex?: number;
}

export declare interface GroupItemContent<D, C> {
    (index: number, groupIndex: number, data: D, context: C): React_2.ReactNode;
}

export declare type GroupProps = Pick<React_2.ComponentPropsWithRef<'div'>, 'style' | 'children'> & {
    'data-index': number;
    'data-item-index': number;
    'data-known-size': number;
};

export declare type IndexLocationWithAlign = FlatIndexLocationWithAlign | GroupIndexLocationWithAlign;

export declare interface Item<D> {
    index: number;
    offset: number;
    size: number;
    data?: D;
}

export declare interface ItemContent<D, C> {
    (index: number, data: D, context: C): React_2.ReactNode;
}

export declare type ItemProps<D> = Pick<React_2.ComponentPropsWithRef<'div'>, 'style' | 'children'> & {
    'data-index': number;
    'data-item-index': number;
    'data-item-group-index'?: number;
    'data-known-size': number;
    item: D;
};

export declare type ListItem<D> = RecordItem<D> | GroupItem<D>;

/**
 * Passed to the Components.List custom component
 */
export declare type ListProps = Pick<React_2.ComponentPropsWithRef<'div'>, 'style' | 'children' | 'ref'> & {
    'data-test-id': string;
};

export declare interface ListRange {
    startIndex: number;
    endIndex: number;
}

export declare type ListRootProps = Omit<React_2.HTMLProps<HTMLDivElement>, 'ref' | 'data'>;

export declare interface LocationOptions {
    /**
     * How to position the item in the viewport.
     */
    align?: 'start' | 'center' | 'end';
    /**
     * Set 'smooth' to have an animated transition to the specified location.
     */
    behavior?: 'smooth' | 'auto';
    /**
     * The offset to scroll.
     */
    offset?: number;
}

export declare enum LogLevel {
    DEBUG = 0,
    INFO = 1,
    WARN = 2,
    ERROR = 3
}

export declare interface RecordItem<D> extends Item<D> {
    type?: undefined;
    groupIndex?: number;
    originalIndex?: number;
    data?: D;
}

export declare interface ScrollContainerState {
    scrollHeight: number;
    scrollTop: number;
    viewportHeight: number;
}

/**
 * Passed to the Components.Scroller custom component
 */
export declare type ScrollerProps = Pick<React_2.ComponentPropsWithRef<'div'>, 'style' | 'children' | 'tabIndex' | 'ref'> & {
    'data-test-id'?: string;
    'data-virtuoso-scroller'?: boolean;
};

export declare type ScrollIntoViewLocation = FlatScrollIntoViewLocation | GroupedScrollIntoViewLocation;

export declare interface ScrollIntoViewLocationOptions {
    align?: 'start' | 'center' | 'end';
    behavior?: 'auto' | 'smooth';
    /**
     * Will be called when the scroll is done, or immediately if no scroll is needed.
     */
    done?: () => void;
    /**
     * Use this function to fine-tune the scrollIntoView behavior.
     * The function receives the item's top and bottom position in the viewport, and the viewport top/bottom.
     * Return an location object to scroll, or null to prevent scrolling.
     * Here's the default implementation:
     * ```ts
     const defaultCalculateViewLocation: CalculateViewLocation = ({
     itemTop,
     itemBottom,
     viewportTop,
     viewportBottom,
     locationParams: { behavior, align, ...rest },
     }) => {
     if (itemTop < viewportTop) {
     return { ...rest, behavior, align: align ?? 'start' }
     }
     if (itemBottom > viewportBottom) {
     return { ...rest, behavior, align: align ?? 'end' }
     }
     return null
     }
     *```
     */
    calculateViewLocation?: CalculateViewLocation;
}

export declare interface ScrollSeekConfiguration {
    /**
     * Callback to determine if the list should enter "scroll seek" mode.
     */
    enter: ScrollSeekToggle;
    /**
     * called during scrolling in scroll seek mode - use to display a hint where the list is.
     */
    change?: (velocity: number, range: ListRange) => void;
    /**
     * Callback to determine if the list should exit "scroll seek" mode.
     */
    exit: ScrollSeekToggle;
}

/**
 * Passed to the Components.ScrollSeekPlaceholder custom component
 */
export declare interface ScrollSeekPlaceholderProps {
    index: number;
    height: number;
    groupIndex?: number;
    type: 'group' | 'item';
}

export declare interface ScrollSeekToggle {
    (velocity: number, range: ListRange): boolean;
}

/** Calculates the height of `el`, which will be the `Item` element in the DOM. */
export declare type SizeFunction = (el: HTMLElement, field: 'offsetHeight' | 'offsetWidth') => number;

export declare interface SizeRange {
    startIndex: number;
    endIndex: number;
    size: number;
}

export declare type StateCallback = (state: StateSnapshot) => void;

export declare interface StateSnapshot {
    ranges: SizeRange[];
    scrollTop: number;
}

/**
 * Passed to the Components.TableBody custom component
 */
export declare type TableBodyProps = Pick<React_2.ComponentPropsWithRef<'tbody'>, 'style' | 'children' | 'ref' | 'className'> & {
    'data-test-id': string;
};

/**
 * Customize the TableVirtuoso rendering by passing a set of custom components.
 */
export declare interface TableComponents<Data = unknown, Context = unknown> {
    /**
     * Set to customize the wrapping `table` element.
     *
     */
    Table?: React_2.ComponentType<TableProps & {
        context?: Context;
    }>;
    /**
     * Set to render a fixed header at the top of the table (`thead`). use [[fixedHeaderContent]] to set the contents
     *
     */
    TableHead?: React_2.ComponentType<Pick<React_2.ComponentPropsWithRef<'thead'>, 'style' | 'children' | 'ref'> & {
        context?: Context;
    }>;
    /**
     * Set to render a fixed footer at the bottom of the table (`tfoot`). use [[fixedFooterContent]] to set the contents
     */
    TableFoot?: React_2.ComponentType<Pick<React_2.ComponentPropsWithRef<'tfoot'>, 'style' | 'children' | 'ref'> & {
        context?: Context;
    }>;
    /**
     * Set to customize the item wrapping element. Default is `tr`.
     */
    TableRow?: React_2.ComponentType<ItemProps<Data> & {
        context?: Context;
    }>;
    /**
     * Set to customize the outermost scrollable element. This should not be necessary in general,
     * as the component passes its HTML attribute props to it.
     */
    Scroller?: React_2.ComponentType<ScrollerProps & {
        context?: Context;
    }>;
    /**
     * Set to customize the items wrapper. Default is `tbody`.
     */
    TableBody?: React_2.ComponentType<TableBodyProps & {
        context?: Context;
    }>;
    /**
     * Set to render a custom UI when the list is empty.
     */
    EmptyPlaceholder?: React_2.ComponentType<{
        context?: Context;
    }>;
    /**
     * Set to render an item placeholder when the user scrolls fast.  See the `scrollSeek` property for more details.
     */
    ScrollSeekPlaceholder?: React_2.ComponentType<ScrollSeekPlaceholderProps & {
        context?: Context;
    }>;
    /**
     * Set to render an empty item placeholder.
     */
    FillerRow?: React_2.ComponentType<FillerRowProps & {
        context?: Context;
    }>;
}

export declare type TableProps = Pick<React_2.ComponentPropsWithRef<'table'>, 'style' | 'children'>;

export declare type TableRootProps = Omit<React_2.HTMLProps<HTMLTableElement>, 'ref' | 'data'>;

export declare const TableVirtuoso: <ItemData = any, Context = any>(props: TableVirtuosoProps<ItemData, Context> & {
    ref?: React_2.Ref<TableVirtuosoHandle> | undefined;
}) => React_2.ReactElement;

export declare interface TableVirtuosoHandle {
    scrollIntoView(location: number | FlatScrollIntoViewLocation): void;
    scrollToIndex(location: number | FlatIndexLocationWithAlign): void;
    scrollTo(location: ScrollToOptions): void;
    scrollBy(location: ScrollToOptions): void;
    /**
     * Obtains the internal size state of the component, so that it can be restored later. This does not include the data items.
     */
    getState(stateCb: StateCallback): void;
}

export declare interface TableVirtuosoProps<D, C> extends Omit<VirtuosoProps<D, C>, 'components' | 'headerFooterTag' | 'topItemCount'> {
    /**
     * Use the `components` property for advanced customization of the elements rendered by the table.
     */
    components?: TableComponents<D, C>;
    /**
     * Set the contents of the table header.
     */
    fixedHeaderContent?: FixedHeaderContent;
    /**
     * Set the contents of the table footer.
     */
    fixedFooterContent?: FixedFooterContent;
    /**
     * The total amount of items to be rendered.
     */
    totalCount?: number;
    /**
     * The data items to be rendered. If data is set, the total count will be inferred from the length of the array.
     */
    data?: readonly D[];
    /**
     * Set the overscan property to make the component "chunk" the rendering of new items on scroll.
     * The property causes the component to render more items than the necessary, but reduces the re-renders on scroll.
     * Setting `{ main: number, reverse: number }` lets you extend the list in both the main and the reverse scrollable directions.
     * See the `increaseViewportBy` property for a similar behavior (equivalent to the `overscan` in `react-window`).
     */
    overscan?: number | {
        main: number;
        reverse: number;
    };
    /**
     * Set the increaseViewportBy property to artificially increase the viewport size, causing items to be rendered before outside of the viewport.
     * The property causes the component to render more items than the necessary, but can help with slow loading content.
     * Using `{ top?: number, bottom?: number }` lets you set the increase for each end separately.
     */
    increaseViewportBy?: number | {
        top: number;
        bottom: number;
    };
    /**
     * Set to a value between 0 and totalCount - 1 to make the list start scrolled to that item.
     */
    initialTopMostItemIndex?: number;
    /**
     * Set this value to offset the initial location of the list.
     * Warning: using this property will still run a render cycle at the scrollTop: 0 list window.
     * If possible, avoid using it and stick to `initialTopMostItemIndex` instead.
     */
    initialScrollTop?: number;
    /**
     * Use for server-side rendering - if set, the list will render the specified amount of items
     * regardless of the container / item size.
     */
    initialItemCount?: number;
    /**
     * Set the callback to specify the contents of the item.
     */
    itemContent?: ItemContent<D, C>;
    /**
     * If specified, the component will use the function to generate the `key` property for each list item.
     */
    computeItemKey?: ComputeItemKey<D, C>;
    /**
     * By default, the component assumes the default item height from the first rendered item (rendering it as a "probe").
     *
     * If the first item turns out to be an outlier (very short or tall), the rest of the rendering will be slower,
     * as multiple passes of rendering should happen for the list to fill the viewport.
     *
     * Setting `defaultItemHeight` causes the component to skip the "probe" rendering and use the property
     * value as default height instead.
     */
    defaultItemHeight?: number;
    /**
     * Allows customizing the height/width calculation of `Item` elements.
     *
     * The default implementation reads `el.getBoundingClientRect().height` and `el.getBoundingClientRect().width`.
     */
    itemSize?: SizeFunction;
    /**
     * Can be used to improve performance if the rendered items are of known size.
     * Setting it causes the component to skip item measurements.
     */
    fixedItemHeight?: number;
    /**
     * Use to display placeholders if the user scrolls fast through the list.
     *
     * Set `components.ScrollSeekPlaceholder` to change the placeholder content.
     */
    scrollSeekConfiguration?: ScrollSeekConfiguration | false;
    /**
     * If set to `true`, the list automatically scrolls to bottom if the total count is changed.
     * Set to `"smooth"` for an animated scrolling.
     *
     * By default, `followOutput` scrolls down only if the list is already at the bottom.
     * To implement an arbitrary logic behind that, pass a function:
     *
     * ```tsx
     * <Virtuoso
     *  followOutput={(isAtBottom: boolean) => {
     *    if (expression) {
     *      return 'smooth' // can be 'auto' or false to avoid scrolling
     *    } else {
     *      return false
     *    }
     *  }} />
     * ```
     */
    followOutput?: FollowOutput;
    /**
     * Use when implementing inverse infinite scrolling - decrease the value this property
     * in combination with  `data` or `totalCount` to prepend items to the top of the list.
     *
     * Warning: the firstItemIndex should **be a positive number**, based on the total amount of items to be displayed.
     */
    firstItemIndex?: number;
    /**
     * Called when the list starts/stops scrolling.
     */
    isScrolling?: (isScrolling: boolean) => void;
    /**
     * Gets called when the user scrolls to the end of the list.
     * Receives the last item index as an argument. Can be used to implement endless scrolling.
     */
    endReached?: (index: number) => void;
    /**
     * Called when the user scrolls to the start of the list.
     */
    startReached?: (index: number) => void;
    /**
     * Called with the new set of items each time the list items are rendered due to scrolling.
     */
    rangeChanged?: (range: ListRange) => void;
    /**
     * Called with true / false when the list has reached the bottom / gets scrolled up.
     * Can be used to load newer items, like `tail -f`.
     */
    atBottomStateChange?: (atBottom: boolean) => void;
    /**
     * Called with `true` / `false` when the list has reached the top / gets scrolled down.
     */
    atTopStateChange?: (atTop: boolean) => void;
    /**
     * Called when the total list height is changed due to new items or viewport resize.
     */
    totalListHeightChanged?: (height: number) => void;
    /**
     * Called with the new set of items each time the list items are rendered due to scrolling.
     */
    itemsRendered?: (items: ListItem<D>[]) => void;
    /**
     * Setting `alignToBottom` to `true` aligns the items to the bottom of the list if the list is shorter than the viewport.
     * Use `followOutput` property to keep the list aligned when new items are appended.
     */
    alignToBottom?: boolean;
    /**
     * Uses the document scroller rather than wrapping the list in its own.
     */
    useWindowScroll?: boolean;
    /**
     * Pass a reference to a scrollable parent element, so that the table won't wrap in its own.
     */
    customScrollParent?: HTMLElement;
    /**
     * Provides access to the root DOM element
     */
    scrollerRef?: (ref: HTMLElement | Window | null) => any;
    /**
     * By default `0`. Redefine to change how much away from the top the scroller can be before the list is not considered not at top.
     */
    atTopThreshold?: number;
    /**
     * By default `4`. Redefine to change how much away from the bottom the scroller can be before the list is not considered not at bottom.
     */
    atBottomThreshold?: number;
    /**
     * pass a state obtained from the getState() method to restore the list state - this includes the previously measured item sizes and the scroll location.
     * Notice that you should still pass the same data and totalCount properties as before, so that the list can match the data with the stored measurements.
     * This is useful when you want to keep the list state when the component is unmounted and remounted, for example when navigating to a different page.
     */
    restoreStateFrom?: StateSnapshot;
}

export declare type TopItemListProps = Pick<React_2.ComponentPropsWithRef<'div'>, 'style' | 'children'>;

export declare const Virtuoso: <ItemData = any, Context = any>(props: VirtuosoProps<ItemData, Context> & {
    ref?: React_2.Ref<VirtuosoHandle> | undefined;
}) => React_2.ReactElement;

export declare const VirtuosoGrid: <ItemData = any, Context = any>(props: VirtuosoGridProps<ItemData, Context> & {
    ref?: React_2.Ref<VirtuosoGridHandle> | undefined;
}) => React_2.ReactElement;

export declare interface VirtuosoGridHandle {
    scrollToIndex(location: GridIndexLocation): void;
    scrollTo(location: ScrollToOptions): void;
    scrollBy(location: ScrollToOptions): void;
}

export declare const VirtuosoGridMockContext: React_2.Context<VirtuosoGridMockContextValue | undefined>;

export declare interface VirtuosoGridMockContextValue {
    viewportHeight: number;
    viewportWidth: number;
    itemHeight: number;
    itemWidth: number;
}

export declare interface VirtuosoGridProps<D, C = unknown> extends GridRootProps {
    /**
     * The total amount of items to be rendered.
     */
    totalCount?: number;
    /**
     * The data items to be rendered. If data is set, the total count will be inferred from the length of the array.
     */
    data?: readonly D[];
    /**
     * Additional context available in the custom components and content callbacks
     */
    context?: C;
    /**
     * Use for server-side rendering - if set, the list will render the specified amount of items
     * regardless of the container / item size.
     */
    initialItemCount?: number;
    /**
     * Set the callback to specify the contents of the item.
     */
    itemContent?: GridItemContent<D, C>;
    /**
     * Use the `components` property for advanced customization of the elements rendered by the list.
     */
    components?: GridComponents<C>;
    /**
     * Set the overscan property to make the component "chunk" the rendering of new items on scroll.
     * The property causes the component to render more items than the necessary, but reduces the re-renders on scroll.
     * Setting `{ main: number, reverse: number }` lets you extend the list in both the main and the reverse scrollable directions.
     */
    overscan?: number | {
        main: number;
        reverse: number;
    };
    /**
     * If specified, the component will use the function to generate the `key` property for each list item.
     */
    computeItemKey?: GridComputeItemKey<D, C>;
    /**
     * Use to display placeholders if the user scrolls fast through the list.
     *
     * Set `components.ScrollSeekPlaceholder` to change the placeholder content.
     */
    scrollSeekConfiguration?: ScrollSeekConfiguration | false;
    /**
     * Called when the list starts/stops scrolling.
     */
    isScrolling?: (isScrolling: boolean) => void;
    /**
     * Gets called when the user scrolls to the end of the list.
     * Receives the last item index as an argument. Can be used to implement endless scrolling.
     */
    endReached?: (index: number) => void;
    /**
     * Called when the user scrolls to the start of the list.
     */
    startReached?: (index: number) => void;
    /**
     * Called with the new set of items each time the list items are rendered due to scrolling.
     */
    rangeChanged?: (range: ListRange) => void;
    /**
     * reports when the grid state changes. The reported value can be stored and passed back to `restoreStateFrom` to restore the grid to the same state.
     */
    stateChanged?: (state: GridStateSnapshot) => void;
    restoreStateFrom?: GridStateSnapshot | undefined | null;
    /**
     * Called with true / false when the list has reached the bottom / gets scrolled up.
     * Can be used to load newer items, like `tail -f`.
     */
    atBottomStateChange?: (atBottom: boolean) => void;
    /**
     * Called with `true` / `false` when the list has reached the top / gets scrolled down.
     */
    atTopStateChange?: (atTop: boolean) => void;
    /**
     * Provides access to the root DOM element
     */
    scrollerRef?: (ref: HTMLElement | null) => any;
    /**
     * Sets the className for the list DOM element
     */
    listClassName?: string;
    /**
     * Sets the grid items' className
     */
    itemClassName?: string;
    /**
     * Uses the document scroller rather than wrapping the grid in its own.
     */
    useWindowScroll?: boolean;
    /**
     * Pass a reference to a scrollable parent element, so that the grid won't wrap in its own.
     */
    customScrollParent?: HTMLElement;
    /**
     * set to LogLevel.DEBUG to enable various diagnostics in the console, the most useful being the item measurement reports.
     *
     * Ensure that you have "all levels" enabled in the browser console too see the messages.
     */
    logLevel?: LogLevel;
    initialTopMostItemIndex?: GridIndexLocation;
}

export declare interface VirtuosoHandle {
    /**
     * Scrolls the component to the specified item index. See {@link IndexLocationWithAlign} for more options.
     */
    scrollToIndex(location: number | FlatIndexLocationWithAlign): void;
    /**
     * Scrolls the item into view if necessary. See [the website example](http://virtuoso.dev/keyboard-navigation/) for an implementation.
     */
    scrollIntoView(location: FlatScrollIntoViewLocation): void;
    /**
     * Scrolls the component to the specified location. See [ScrollToOptions (MDN)](https://developer.mozilla.org/en-US/docs/Web/API/ScrollToOptions)
     */
    scrollTo(location: ScrollToOptions): void;
    /**
     * Scrolls the component with the specified amount. See [ScrollToOptions (MDN)](https://developer.mozilla.org/en-US/docs/Web/API/ScrollToOptions)
     */
    scrollBy(location: ScrollToOptions): void;
    /**
     * Use this with combination with follow output if you have images loading in the list. Listen to the image loading and call the method.
     */
    autoscrollToBottom(): void;
    /**
     * Obtains the internal size state of the component, so that it can be restored later. This does not include the data items.
     */
    getState(stateCb: StateCallback): void;
}

export declare const VirtuosoMockContext: React_2.Context<VirtuosoMockContextValue | undefined>;

export declare interface VirtuosoMockContextValue {
    viewportHeight: number;
    itemHeight: number;
}

export declare interface VirtuosoProps<D, C> extends ListRootProps {
    /**
     * The total amount of items to be rendered.
     */
    totalCount?: number;
    /**
     * The data items to be rendered. If data is set, the total count will be inferred from the length of the array.
     */
    data?: readonly D[];
    /**
     * Additional context available in the custom components and content callbacks
     */
    context?: C;
    /**
     * *The property accepts pixel values.*
     *
     * Set the overscan property to make the component "chunk" the rendering of new items on scroll.
     * The property causes the component to render more items than the necessary, but reduces the re-renders on scroll.
     * Setting `{ main: number, reverse: number }` lets you extend the list in both the main and the reverse scrollable directions.
     * See the `increaseViewportBy` property for a similar behavior (equivalent to the `overscan` in react-window).
     *
     */
    overscan?: number | {
        main: number;
        reverse: number;
    };
    /**
     *
     * *The property accepts pixel values.*
     *
     * Set the increaseViewportBy property to artificially increase the viewport size, causing items to be rendered before outside of the viewport.
     * The property causes the component to render more items than the necessary, but can help with slow loading content.
     * Using `{ top?: number, bottom?: number }` lets you set the increase for each end separately.
     *
     */
    increaseViewportBy?: number | {
        top: number;
        bottom: number;
    };
    /**
     * Set the amount of items to remain fixed at the top of the list.
     *
     * For a header that scrolls away when scrolling, check the `components.Header` property.
     */
    topItemCount?: number;
    /**
     * Set to a value between 0 and totalCount - 1 to make the list start scrolled to that item.
     * Pass in an object to achieve additional effects similar to `scrollToIndex`.
     */
    initialTopMostItemIndex?: number | IndexLocationWithAlign;
    /**
     * Set this value to offset the initial location of the list.
     * Warning: using this property will still run a render cycle at the scrollTop: 0 list window.
     * If possible, avoid using it and stick to `initialTopMostItemIndex` instead.
     */
    initialScrollTop?: number;
    /**
     * Use for server-side rendering - if set, the list will render the specified amount of items
     * regardless of the container / item size.
     */
    initialItemCount?: number;
    /**
     * Use the `components` property for advanced customization of the elements rendered by the list.
     */
    components?: Components<D, C>;
    /**
     * Set the callback to specify the contents of the item.
     */
    itemContent?: ItemContent<D, C>;
    /**
     * If specified, the component will use the function to generate the `key` property for each list item.
     */
    computeItemKey?: ComputeItemKey<D, C>;
    /**
     * By default, the component assumes the default item height from the first rendered item (rendering it as a "probe").
     *
     * If the first item turns out to be an outlier (very short or tall), the rest of the rendering will be slower,
     * as multiple passes of rendering should happen for the list to fill the viewport.
     *
     * Setting `defaultItemHeight` causes the component to skip the "probe" rendering and use the property
     * value as default height instead.
     */
    defaultItemHeight?: number;
    /**
     * Allows customizing the height/width calculation of `Item` elements.
     *
     * The default implementation reads `el.getBoundingClientRect().height` and `el.getBoundingClientRect().width`.
     */
    itemSize?: SizeFunction;
    /**
     * Can be used to improve performance if the rendered items are of known size.
     * Setting it causes the component to skip item measurements.
     */
    fixedItemHeight?: number;
    /**
     * Use to display placeholders if the user scrolls fast through the list.
     *
     * Set `components.ScrollSeekPlaceholder` to change the placeholder content.
     */
    scrollSeekConfiguration?: ScrollSeekConfiguration | false;
    /**
     * If set to `true`, the list automatically scrolls to bottom if the total count is changed.
     * Set to `"smooth"` for an animated scrolling.
     *
     * By default, `followOutput` scrolls down only if the list is already at the bottom.
     * To implement an arbitrary logic behind that, pass a function:
     *
     * ```tsx
     * <Virtuoso
     *  followOutput={(isAtBottom: boolean) => {
     *    if (expression) {
     *      return 'smooth' // can be 'auto' or false to avoid scrolling
     *    } else {
     *      return false
     *    }
     *  }} />
     * ```
     */
    followOutput?: FollowOutput;
    /**
     * Set to customize the wrapper tag for the header and footer components (default is `div`).
     */
    headerFooterTag?: string;
    /**
     * Use when implementing inverse infinite scrolling - decrease the value this property
     * in combination with  `data` or `totalCount` to prepend items to the top of the list.
     *
     * Warning: the firstItemIndex should **be a positive number**, based on the total amount of items to be displayed.
     */
    firstItemIndex?: number;
    /**
     * Called when the list starts/stops scrolling.
     */
    isScrolling?: (isScrolling: boolean) => void;
    /**
     * Gets called when the user scrolls to the end of the list.
     * Receives the last item index as an argument. Can be used to implement endless scrolling.
     */
    endReached?: (index: number) => void;
    /**
     * Called when the user scrolls to the start of the list.
     */
    startReached?: (index: number) => void;
    /**
     * Called with the new set of items each time the list items are rendered due to scrolling.
     */
    rangeChanged?: (range: ListRange) => void;
    /**
     * Called with true / false when the list has reached the bottom / gets scrolled up.
     * Can be used to load newer items, like `tail -f`.
     */
    atBottomStateChange?: (atBottom: boolean) => void;
    /**
     * Called with `true` / `false` when the list has reached the top / gets scrolled down.
     */
    atTopStateChange?: (atTop: boolean) => void;
    /**
     * Called when the total list height is changed due to new items or viewport resize.
     */
    totalListHeightChanged?: (height: number) => void;
    /**
     * Called with the new set of items each time the list items are rendered due to scrolling.
     */
    itemsRendered?: (items: ListItem<D>[]) => void;
    /**
     * Setting `alignToBottom` to `true` aligns the items to the bottom of the list if the list is shorter than the viewport.
     * Use `followOutput` property to keep the list aligned when new items are appended.
     */
    alignToBottom?: boolean;
    /**
     * Uses the document scroller rather than wrapping the list in its own.
     */
    useWindowScroll?: boolean;
    /**
     * Pass a reference to a scrollable parent element, so that the list won't wrap in its own.
     */
    customScrollParent?: HTMLElement;
    /**
     * Provides access to the root DOM element
     */
    scrollerRef?: (ref: HTMLElement | Window | null) => any;
    /**
     * *The property accepts pixel values.*
     *
     * By default `0`. Redefine to change how much away from the top the scroller can be before the list is not considered not at top.
     */
    atTopThreshold?: number;
    /**
     * *The property accepts pixel values.*
     *
     * By default `4`. Redefine to change how much away from the bottom the scroller can be before the list is not considered not at bottom.
     */
    atBottomThreshold?: number;
    /**
     * set to LogLevel.DEBUG to enable various diagnostics in the console, the most useful being the item measurement reports.
     *
     * Ensure that you have "all levels" enabled in the browser console too see the messages.
     */
    logLevel?: LogLevel;
    /**
     * pass a state obtained from the getState() method to restore the list state - this includes the previously measured item sizes and the scroll location.
     * Notice that you should still pass the same data and totalCount properties as before, so that the list can match the data with the stored measurements.
     * This is useful when you want to keep the list state when the component is unmounted and remounted, for example when navigating to a different page.
     */
    restoreStateFrom?: StateSnapshot;
}

export declare interface WindowViewportInfo {
    offsetTop: number;
    visibleHeight: number;
    visibleWidth: number;
}

export { }
