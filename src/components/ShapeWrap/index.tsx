import React from "react";
import ShapeItem from "../Shape"

interface ShapeItemType {
    value: number;
    tooltipText: string;
    text?: string;
    subBalance?: Array<ShapeItemType>;
}

interface ShapeWrapProps {
    shapeItems: Array<ShapeItemType>;
    total: number;
    sourceY: number;
    targetY: number;
    width: number;
    height: number;
}


const ShapeWrap = (({ shapeItems, total, sourceY, targetY, width, height }: ShapeWrapProps) => {

    return (
        <div>
            <svg width={width} height={height}>
                <g>
                    {
                        shapeItems.map((item: ShapeItemType, index: number) => <ShapeItem key={index} shapeItems={shapeItems} total={total} index={index} sourceY={sourceY} targetY={targetY} width={width} height={height / 2} />)
                    }
                </g>
            </svg>
        </div>
    );
});

export default ShapeWrap;
