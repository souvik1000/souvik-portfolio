import React from "react";
import { connect } from "react-redux";
import { useNavigate } from "react-router-dom";
import { bindActionCreators, Dispatch } from "redux";
import styled, { keyframes } from "styled-components";

import MenuList from "./MenuList";
import Stack from "src/utils/Stack";
import { useOutsideClick } from "src/hooks/useOutsideClick";
import { actions as menuActions } from "src/reducers/menuList";
import * as ResumeDownloadAPI from "src/interfaces/api/downloadResume";
import { ReactComponent as DownloadIcon } from "./components/assets/download.svg";

const FixedContainer = styled.div`
  position: fixed;
  top: 0;
  left: 0;
  width: 100%;
  z-index: 1000;
  background: rgba(0, 0, 0, 0.8);
  backdrop-filter: blur(10px);
  -webkit-backdrop-filter: blur(10px);
  border-bottom: 1px solid #333;
`;

const HeaderWrapper = styled.div`
  width: 90%;
  margin: auto;
  height: 60px; /* Slightly taller for better touch targets */
  display: flex;
  padding: 8px 0;
  font-size: 13px;
  align-items: center;
  justify-content: space-between;
`;

const Logo = styled.img`
  width: 36px;
  height: 36px;
  padding-right: 8px;
`;

const downloadBottom = keyframes`
    from{ transform: translateY(-4px); }
    to{transform: translateY(4px); }
`;

const Download = styled.div`
  display: flex;
  align-items: center;
`;

const ResumeWrapper = styled.div`
  padding: 4px 8px;
  border-radius: 25px;
  display: flex;
  gap: 4px;
  align-items: center;
  justify-content: center;
  border: 1px solid #000;
  transition: all ease 0.3s;

  &:hover {
    cursor: pointer;
    border: 1px solid #fff;
    ${Download} {
      animation: ${downloadBottom} 1s linear 5;
    }
  }
`;

const ContactMe = styled.div`
  padding: 4px 8px;
  border-radius: 25px;
  border: 1px solid #000;
  transition: all ease 0.3s;

  &:hover {
    cursor: pointer;
    border: 1px solid #fff;
  }
`;

const Links = styled.a`
  padding: 0px 4px;
  padding-top: 4px;
  border-radius: 25px;
  border: 1px solid #000;
  transition: all ease 0.3s;

  &:hover {
    border: 1px solid #fff;
    transform: translateY(-4px);
  }
`;

interface IDispatchProps {
  updateSelectedMenuOption: typeof menuActions.updateSelectedMenuOptionAsync;
}

const Header: React.FC<IDispatchProps> = ({ updateSelectedMenuOption }) => {
  const personalEmail = process.env.REACT_APP_PERSONAL_EMAIL;
  const navigate = useNavigate();
  const contactRef = React.useRef(null);
  const [showContacts, setShowContacts] = React.useState(false);

  useOutsideClick(contactRef, () => setShowContacts(false));

  const handleLogoClick = () => {
    navigate("/");
    updateSelectedMenuOption("About");
  };

  return (
    <FixedContainer>
      <HeaderWrapper>
        <div style={{ display: "flex", alignItems: "center" }}>
          <Logo loading="lazy" src="./MyName.png" alt="Page Logo" onClick={handleLogoClick} style={{ cursor: "pointer" }} />
          <MenuList />
        </div>
        {/* <div style={{ cursor: "pointer" }}>HIRE ME</div> */}
        {/* Todo(Souvik): Make it as dropdown, with Download resume & contact */}
        <Stack margin={16} style={{ display: "flex", alignItems: "center" }}>
          <ResumeWrapper
            style={{ cursor: "pointer" }}
            onClick={() => ResumeDownloadAPI.GET.service()}
          >
            <Download><DownloadIcon /></Download> RESUME
          </ResumeWrapper>
          {showContacts ? (
            <div ref={contactRef}>
              <Stack margin={12}>
                <Links href={`mailto: ${personalEmail}`} target={"_blank"}>
                  <img
                    loading="lazy"
                    src="gmail.png"
                    width="22"
                    height="22"
                    title={`Gmail: ${personalEmail}`}
                    alt="Gmail icon"
                  />
                </Links>
                <Links
                  style={{ padding: "4px 6px 0px 6px" }}
                  href="https://www.linkedin.com/in/souvik1000/"
                  target={"_blank"}
                >
                  <img
                    loading="lazy"
                    src="linkedIn.png"
                    width="19"
                    height="19"
                    title="LinkedIn: Souvik Ghosh"
                    alt="LinkedIn icon"
                  />
                </Links>
                <Links href="https://github.com/souvik1000" target={"_blank"}>
                  <img
                    loading="lazy"
                    src="github_white.png"
                    width="24"
                    height="24"
                    title="Github: @souvik1000"
                    alt="Github icon"
                  />
                </Links>
                <Links
                  href="https://codesandbox.io/dashboard/sandboxes/?workspace=8a261c9d-2efc-4cc7-bf48-4b5f03350f8c"
                  target={"_blank"}
                >
                  <img
                    loading="lazy"
                    src="codesandbox.png"
                    width="25"
                    height="25"
                    title="Codesandbox: Souvik Ghosh"
                    alt="Codesandbox icon"
                  />
                </Links>
              </Stack>
            </div>
          ) : (
            <ContactMe onClick={() => setShowContacts(!showContacts)}>
              CONTACT ME
            </ContactMe>
          )}
        </Stack>
      </HeaderWrapper>
    </FixedContainer>
  );
};

const mapDispatchToProps = (dispatch: Dispatch) =>
  bindActionCreators(
    {
      updateSelectedMenuOption: menuActions.updateSelectedMenuOptionAsync,
    },
    dispatch
  );

export default connect(null, mapDispatchToProps)(Header);
