import styled from "styled-components";

interface Props {
    plus: boolean;
}

export const StyledChartCard = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  align-items: flex-start;
  padding: 8px;
  background-color: #FDFDFD;
  border: 1px solid ${(props: Props) => props.plus ? "#DCEAFE" : "#FFEDEE"};
  border-radius: 8px;
  margin: 4px;
`;

export const ChartCardHeader = styled.h6`
    display: flex;
    align-items: center;
    font-family: 'PT Sans';
    font-weight: 700;
    font-size: 14px;
    line-height: 23px;
    color: #A6B1CB;
    margin: 0;
`;

export const ChartCardValue = styled.p`
    font-family: 'PT Sans';
    font-weight: 700;
    font-size: 12px;
    line-height: 17px;
    color: ${(props: Props) => props.plus ? "#5096FA" : "#FF4B55"};
    margin: 0;
`;