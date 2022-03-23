import React, { useState } from "react";
import { StyledChartCard, ChartCardHeader, ChartCardValue } from "./styles";
import { observer } from "mobx-react-lite";
import QuestionMark from '../../assets/images/question-mark.svg';


interface ChartItem {
    text: string;
    value: number;
    tooltipText: string;
}

interface IProps {
    chartItem: ChartItem;
}

const ChartCardItem = observer(({ chartItem }: IProps) => {
    return (
        <StyledChartCard plus={chartItem.value > 0 ? true : false}>
            <ChartCardHeader>
                {chartItem.text}
                <a data-tip={chartItem.tooltipText} href="#!">
                    <img src={QuestionMark} alt="tooltip" style={{ marginLeft: "4px" }} />
                </a>
            </ChartCardHeader>
            <ChartCardValue plus={chartItem.value > 0 ? true : false}>{chartItem.value}</ChartCardValue>
        </StyledChartCard>
    );
});

export default ChartCardItem;
