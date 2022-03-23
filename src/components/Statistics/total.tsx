import React, { useState } from "react";
import { StyledTotalLayout, StyledTotalValue } from "./styles";
import { observer } from "mobx-react-lite";
import EqualMark from '../../assets/images/equal-mark.svg';
import QuestionMarkWhite from '../../assets/images/question-mark-white.svg';

const Total = observer(() => {
    return (
        <StyledTotalLayout>
            <img src={EqualMark} alt="equal-mark" style={{ padding: "16px" }} />
            <StyledTotalValue>
                <p style={{ margin: 0 }}>Net Proceeds
                    <a data-tip={"This is Tooltip"} href="#!">
                        <img src={QuestionMarkWhite} alt="question-mark" style={{ marginLeft: "4px" }} />
                    </a>
                </p>
                <p style={{ margin: 0 }}>$54,990,29</p>
            </StyledTotalValue>
        </StyledTotalLayout>
    );
});

export default Total;
