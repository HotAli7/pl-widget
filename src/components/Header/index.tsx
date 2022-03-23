import React, { useState, useRef } from "react";
import { StyledHeaderWrap, StyledHeaderText, StyledHeaderToolWrap } from "./styles";
import Menu from "./Menu";
import MoveIcon from '../../assets/images/move-icon.svg';
import MenuIcon from '../../assets/images/menu-icon.svg';

const Header = (() => {
    const menuRef = useRef() as React.MutableRefObject<HTMLInputElement>;
    const [show, setShow] = useState(true);

    const handleMenuShow = () => {
        setShow(!show);
        console.log(menuRef.current)
        if (menuRef.current) {
            menuRef.current.style.visibility = show ? "visible" : "hidden";
            menuRef.current.style.zIndex = show ? "1" : "-1";
        }
    }
    return (
        <StyledHeaderWrap>
            <StyledHeaderText>P&L Widget</StyledHeaderText>
            <StyledHeaderToolWrap>
                <img src={MoveIcon} alt={"move-icon"} style={{ marginRight: "16px", cursor: "pointer" }} />
                <img src={MenuIcon} alt={"menu-icon"} style={{ cursor: "pointer" }} onClick={handleMenuShow} />
                <Menu menuRef={menuRef} />
            </StyledHeaderToolWrap>
        </StyledHeaderWrap>
    );
});

export default Header;
