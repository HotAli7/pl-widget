import styled from "styled-components";

export const StyledHeaderWrap = styled.div`
    display: flex;
    justify-content: space-between;
    align-items: center;
    margin: 4px;
`;

export const StyledHeaderText = styled.div`
    font-family: 'PT Sans';
    font-weight: 700;
    font-size: 18px;
    line-height: 27px;
`;

export const StyledHeaderToolWrap = styled.div`
    position: relative;
    display: flex;
    align-items: center;
`;

export const StyledMenuWrap = styled.div`
    position: absolute;
    width: 160px;
    right: 0;
    top: 28px;
    border: 1px solid #EDEFF5;
    border-radius: 8px;
    visibility: hidden;
    z-index: -1;
    background-color: white;
`;

export const StyledMenu = styled.ul`
    display: flex;
    flex-direction: column;
`;

export const StyledMenuItem = styled.li`
    padding: 8px 16px;
    font-family: 'PT Sans';
    font-weight: 700;
    font-size: 14px;
    line-height: 23px;
    color: #213157;
    cursor: pointer;
    list-style: none;
    &:hover {
        color: #A6B1CB;
    }
`;