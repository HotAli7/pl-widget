import React from "react";
import * as d3 from 'd3';


interface ShapeItemProps {
    value: number;
    tooltipText: string;
}

interface IProps {
    shapeItems: ShapeItemProps[];
    total: number;
    index: number;
    sourceY: number;
    targetY: number;
    width: number;
    height: number;
}

const ShapeItem = (({ shapeItems, total, index, sourceY, targetY, width, height }: IProps) => {

    const calcHeight = (max: number, value: number, total: number) => {
        return Math.ceil(max * Math.abs(value / total)) + 2;
    }
    const x0 = 0,
        x1 = width - 10,
        xi = d3.interpolateNumber(x0, x1),
        x2 = xi(.5),
        x3 = xi(1 - .5),
        y0 = index === 0 ? sourceY : sourceY - (sourceY !== 0 ? 5 : 0) + shapeItems.map((shapeItem: ShapeItemProps, i: number) => {
            return index > i ? calcHeight(20, shapeItem.value, total) : 0;
        }).reduce((total, num) => total + num),
        ytr = index === 0 ? targetY : targetY + shapeItems.map((shapeItem: ShapeItemProps, i: number) => {
            return index > i ? calcHeight(height, shapeItem.value, total) : 0;
        }).reduce((total, num) => total + num) + 16 * index,
        ybr = index === 0 ? targetY + calcHeight(height, shapeItems[0].value, total) : targetY + shapeItems.map((shapeItem: ShapeItemProps, i: number) => {
            return index >= i ? calcHeight(height, shapeItem.value, total) : 0;
        }).reduce((total, num) => total + num) + 16 * index,
        ybl = index === 0 ? sourceY + calcHeight(20, shapeItems[0].value, total) : sourceY + shapeItems.map((shapeItem: ShapeItemProps, i: number) => {
            return index >= i ? calcHeight(20, shapeItem.value, total) : 0;
        }).reduce((total, num) => total + num);

    const data = "M" + x0 + "," + y0  //top left corner
        + "C" + x2 + "," + y0  //top left curve
        + " " + x3 + "," + ytr //top right curve
        + " " + x1 + "," + ytr //Top right corner
        + "L" + x1 + "," + ybr //bottom right corner
        + "C" + x3 + "," + ybr //bottom right curve
        + " " + x2 + "," + ybl //bottom left curve
        + " " + x0 + "," + ybl //bottom left corner
        + "L" + x0 + "," + (y0);
    console.log(x0, x1, x2, x3, y0, ytr, ybr, ybl);

    const changeBackground = (event: any, color: string) => {
        event.target.setAttribute("fill", color);
        event.target.setAttribute("fill-opacity", 0.7);
    }

    return (
        <>
            <path
                d={data}
                fill={sourceY === 0 ? "#FFEDEE" : "#DCEAFE"}
                strokeOpacity={0.5}
                strokeWidth={1}
                data-tip={shapeItems[index].tooltipText}
                onMouseOver={(e) => changeBackground(e, sourceY === 0 ? "#FF6F77" : "#73ABFB")}
                onMouseOut={(e) => changeBackground(e, sourceY === 0 ? "#FFEDEE" : "#DCEAFE")}
            />
            <rect
                x={x1}
                y={ytr - 2}
                rx="2"
                ry="2"
                width={8}
                height={Math.abs(ytr - ybr) + 4}
                fill={sourceY === 0 ? "#FF6F77" : "#73ABFB"}
            />
        </>
    );
});

export default ShapeItem;
