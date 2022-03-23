import React, { useState } from "react";
import { StyledStatistics } from "./styles";
import { observer } from "mobx-react-lite";
import ChartCardItem from "../ChartCard";
import Total from "./total";


const Statistics = observer(() => {

    const chartItems = [
        {
            text: "Sales",
            value: 129103.05,
            tooltipText: "This is tooltip"
        },
        {
            text: "Refunds",
            value: -3348.97,
            tooltipText: "This is tooltip"
        },
        {
            text: "Expenses",
            value: -70763.79,
            tooltipText: "This is tooltip"
        }
    ];

    return (
        <StyledStatistics>
            {
                chartItems.map((item, index) => <ChartCardItem key={index} chartItem={item} />)
            }
            <Total />
        </StyledStatistics>
    );
});

export default Statistics;
