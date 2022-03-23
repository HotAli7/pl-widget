import styled from "styled-components";

interface Props {
    plus?: boolean;
    height?: number;
}

export const StyledWidgetItemLayout = styled.div`
    position: relative;
    display: flex;
    align-items: center;
    height: ${(props: Props) => props.height}px;
    min-height: 25px;
    width: 100%;
`;

export const StyledWidgetItem = styled.div`
    display: flex;
    justify-content: space-between;
    align-items: center;
    padding: 0 8px;
    background-color: #FFF9F5;
    margin: 8px;
    width: 100%;
    border-radius: 4px;
    cursor: pointer;
`;

export const StyledWidgetItemHeader = styled.h6`
    font-family: 'PT Sans';
    font-weight: 700;
    font-size: 12px;
    line-height: 17px;
    color: #213157;
    margin: 0;
    width: 100%;
`;

export const StyledWidgetItemValue = styled.p`
    font-family: 'PT Sans';
    font-weight: 700;
    font-size: 11px;
    line-height: 25px;
    text-align: right;
    color: ${(props: Props) => props.plus ? "#5096FA" : "#FF4B55"};
    margin: 0;
    width: 100%;
`;

export const StyledSubWidgetInfoWrap = styled.div`
    display: none;
    justify-content: space-between;
    align-items: center;
    background-color: #FFF9F5;
    width: 0;
    cursor: pointer;
`;