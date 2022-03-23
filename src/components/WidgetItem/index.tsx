import React, { useState, useRef } from "react";
import { StyledWidgetItemLayout, StyledWidgetItem, StyledWidgetItemHeader, StyledWidgetItemValue, StyledSubWidgetInfoWrap } from "./styles";
import { observer } from "mobx-react-lite";

import ShapeWrap from "../ShapeWrap";
import WidgetInfo from "../WidgetInfo";


interface WidgetItemType {
    text: string;
    value: number;
    subBalance?: Array<WidgetItemType>;
    tooltipText: string;
}

interface IProps {
    widgetItem: WidgetItemType;
    height: number;
    widgetLayoutRef: React.MutableRefObject<HTMLInputElement>;
}

const WidgetItem = observer(({ widgetItem, height, widgetLayoutRef }: IProps) => {
    const widgetItemRef = useRef() as React.MutableRefObject<HTMLInputElement>;
    const subWidgetItemRef = useRef() as React.MutableRefObject<HTMLInputElement>;
    const [resize, setResize] = useState(true);

    const resizeElement = (event: any) => {
        setResize(!resize);
        if (widgetLayoutRef.current && widgetItem.subBalance?.length) {
            widgetLayoutRef.current.style.width = resize ? "50%" : "100%";
            widgetItemRef.current.style.background = resize ? "#F48031" : "#FFF9F5";
            subWidgetItemRef.current.style.display = resize ? "flex" : "none";
        }
    }

    return (
        <StyledWidgetItemLayout height={Math.abs(Math.ceil(height))} plus={widgetItem.value > 0 ? true : false}>
            <StyledWidgetItem onClick={(e) => resizeElement(e)} ref={widgetItemRef}>
                <StyledWidgetItemHeader>
                    {widgetItem.text}
                </StyledWidgetItemHeader>
                <StyledWidgetItemValue plus={widgetItem.value > 0 ? true : false}>{widgetItem.value}</StyledWidgetItemValue>
            </StyledWidgetItem>
            {
                widgetItem.subBalance?.length ?
                    <StyledSubWidgetInfoWrap ref={subWidgetItemRef}>
                        <ShapeWrap shapeItems={widgetItem.subBalance} total={widgetItem.value} sourceY={40} targetY={25} width={80} height={100} />
                        <WidgetInfo widgetItems={widgetItem.subBalance} total={widgetItem.value} />
                    </StyledSubWidgetInfoWrap>
                    :
                    <></>
            }
        </StyledWidgetItemLayout>
    );
});

export default WidgetItem;
