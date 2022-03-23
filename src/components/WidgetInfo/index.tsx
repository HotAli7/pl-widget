import React, { useState, useRef } from "react";
import { StyledWidgetLayout } from "./styles";
import { observer } from "mobx-react-lite";
import WidgetItem from "../WidgetItem";

interface WidgetItemType {
    text: string;
    value: number;
    subBalance?: Array<WidgetItemType>;
    tooltipText: string;
}

interface WidgetInfoProps {
    widgetItems: Array<WidgetItemType>;
    total: number;
}

const WidgetInfo = observer(({ widgetItems, total }: WidgetInfoProps) => {
    const widgetLayoutRef = useRef() as React.MutableRefObject<HTMLInputElement>;

    return (
        <StyledWidgetLayout ref={widgetLayoutRef}>
            {
                widgetItems.map((item: WidgetItemType, index: number) => <WidgetItem key={index} widgetItem={item} height={item.value / total * 100} widgetLayoutRef={widgetLayoutRef} />)
            }
        </StyledWidgetLayout>
    );
});

export default WidgetInfo;
