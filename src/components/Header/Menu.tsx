import React from "react";
import { observer } from "mobx-react-lite";
import { StyledMenuWrap, StyledMenuItem } from "./styles";

interface IProps {
    menuRef: React.MutableRefObject<HTMLInputElement>;
}

const Menu = React.forwardRef(({ menuRef }: IProps) => {
    console.log(menuRef)
    const menuData = [
        "Edit",
        "Delete",
        "Export CSV"
    ]
    return (
        <StyledMenuWrap ref={menuRef}>
            {
                menuData.map((menuItem: string, index: number) => <StyledMenuItem key={index}>{menuItem}</StyledMenuItem>)
            }
        </StyledMenuWrap>
    );
});

export default Menu;
