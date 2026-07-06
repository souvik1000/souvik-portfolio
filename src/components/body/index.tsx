import React from "react";
import { connect } from "react-redux";

import MySelf from "./components/Myself";
import Skills from "./components/Skills";
import Particles from "src/utils/Particles";
import Projects from "./components/Projects";
import { IReducerState } from "src/reducers";
import Contact from "./components/Contact";
import Experience from "./components/Experience/V2";

type IStateProps = ReturnType<typeof mapStateToProps>;

type IReduxProps = IStateProps;

const BASE_URL = window.origin;

const Body: React.FC<IReduxProps> = ({ selectedType }) => {
  const getRenderedComponentOnType = () => {
    switch (selectedType) {
      case "About":
        return <MySelf />;
      case "Work":
        return <Experience />;
      case "Project":
        return <Projects />;
      case "Skill":
        return <Skills />;
      case "Contact":
        return <Contact />;
      default:
        window.history.pushState(null, "", BASE_URL);
        return <MySelf />;
    }
  };

  return (
    <div style={{ paddingTop: "80px" }}>
      <Particles />
      {getRenderedComponentOnType()}
    </div>
  );
};

const mapStateToProps = (state: IReducerState) => {
  const { menuOptions } = state;
  return {
    selectedType: menuOptions.selectedMenu,
  };
};

export default connect(mapStateToProps)(Body);
