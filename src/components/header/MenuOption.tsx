import React from "react";
import { connect } from "react-redux";
import { IReducerState } from "src/reducers";
import { actions } from "src/reducers/menuList";
import { MenuTypes } from "src/reducers/menuList/reducer";
import styled from "styled-components";
import BorderStyle from "./components/atoms/BorderStyle";

type IStateProps = ReturnType<typeof mapStateToProps>;
type IDispatchProps = typeof mapDispatchToProps;

type IReduxProps = IStateProps & IDispatchProps;

export type MenuOptionType = {
  type: MenuTypes;
  displayString: string;
};

interface IProps extends IReduxProps {
  menuOptions: MenuOptionType[];
}

const MenuContainer = styled.div<{ isMobile?: boolean }>`
  display: flex;
  flex-direction: ${(props) => (props.isMobile ? "column" : "row")};
  gap: ${(props) => (props.isMobile ? "20px" : "12px")};
  align-items: ${(props) => (props.isMobile ? "center" : "flex-start")};
  width: ${(props) => (props.isMobile ? "100%" : "auto")};
`;

const MenuOption: React.FC<IProps & { isMobile?: boolean }> = ({
  selectedMenu,
  menuOptions,
  updateMenuOption,
  isMobile,
}) => {
  return (
    <MenuContainer isMobile={isMobile}>
      {menuOptions.map((menuOption, index) => {
        const { type, displayString } = menuOption;
        return (
          <BorderStyle
            active={selectedMenu === type}
            key={index}
            onClick={() => updateMenuOption(type)}
          >
            {displayString}
          </BorderStyle>
        );
      })}
    </MenuContainer>
  );
};

const mapStateToProps = (state: IReducerState) => {
  const { menuOptions } = state;
  return {
    ...menuOptions,
  };
};

const mapDispatchToProps = {
  updateMenuOption: actions.updateSelectedMenuOptionAsync,
};

export default connect(mapStateToProps, mapDispatchToProps)(MenuOption);
