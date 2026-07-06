import React from "react";
import { connect } from "react-redux";
import { useNavigate } from "react-router-dom";
import { FaBars, FaTimes } from "react-icons/fa";
import { bindActionCreators, Dispatch } from "redux";

import MenuList from "./MenuList";
import Stack from "src/utils/Stack";
import { useOutsideClick } from "src/hooks/useOutsideClick";
import { actions as menuActions } from "src/reducers/menuList";
import { ReactComponent as DownloadIcon } from "./components/assets/download.svg";

import {
  FixedContainer,
  HeaderWrapper,
  Logo,
  MobileIcon,
  DesktopMenu,
  MobileMenuContainer,
  Download,
  ResumeWrapper,
  ContactMe,
  Links,
} from "./headerStyles";

interface IDispatchProps {
  updateSelectedMenuOption: typeof menuActions.updateSelectedMenuOptionAsync;
}

const Header: React.FC<IDispatchProps> = ({ updateSelectedMenuOption }) => {
  const personalEmail = process.env.REACT_APP_PERSONAL_EMAIL;
  const navigate = useNavigate();
  const contactRef = React.useRef(null);
  const [showContacts, setShowContacts] = React.useState(false);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = React.useState(false);

  const FaTimesIcon = FaTimes as any;
  const FaBarsIcon = FaBars as any;

  useOutsideClick(contactRef, () => setShowContacts(false));

  const handleLogoClick = () => {
    navigate("/");
    updateSelectedMenuOption("About");
    setIsMobileMenuOpen(false);
  };

  const toggleMobileMenu = () => {
    setIsMobileMenuOpen(!isMobileMenuOpen);
    setShowContacts(false);
  };

  const handleMenuClick = () => {
    setIsMobileMenuOpen(false);
  };

  const renderSocialLinks = () => (
    <Stack margin={12} direction="row">
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
  );

  return (
    <FixedContainer>
      <HeaderWrapper>
        <div style={{ display: "flex", alignItems: "center" }}>
          <Logo
            loading="lazy"
            src="./MyName.png"
            alt="Page Logo"
            onClick={handleLogoClick}
            style={{ cursor: "pointer" }}
          />
          <DesktopMenu>
            <MenuList />
          </DesktopMenu>
        </div>

        {/* Mobile Hamburger Icon */}
        <MobileIcon onClick={toggleMobileMenu}>
          {isMobileMenuOpen ? <FaTimesIcon /> : <FaBarsIcon />}
        </MobileIcon>

        {/* Desktop Actions */}
        <DesktopMenu>
          <Stack margin={16} style={{ display: "flex", alignItems: "center" }}>
            <ResumeWrapper
              href="https://souvik-resume.web.app"
              target={"_blank"}
              rel="noopener noreferrer"
            >
              <Download>
                <DownloadIcon />
              </Download>{" "}
              RESUME
            </ResumeWrapper>
            {showContacts ? (
              <div ref={contactRef}>{renderSocialLinks()}</div>
            ) : (
              <ContactMe onClick={() => setShowContacts(!showContacts)}>
                CONTACT ME
              </ContactMe>
            )}
          </Stack>
        </DesktopMenu>

        {/* Mobile Menu Overlay */}
        <MobileMenuContainer isOpen={isMobileMenuOpen}>
          <div onClick={handleMenuClick}>
            <MenuList isMobile={true} />
          </div>

          <Stack
            margin={20}
            style={{
              display: "flex",
              flexDirection: "column",
              alignItems: "center",
              gap: "20px",
            }}
          >
            <ResumeWrapper
              href="https://souvik-resume.web.app"
              target={"_blank"}
              rel="noopener noreferrer"
            >
              <Download>
                <DownloadIcon />
              </Download>{" "}
              RESUME
            </ResumeWrapper>

            <div
              style={{
                display: "flex",
                flexDirection: "column",
                alignItems: "center",
                gap: "10px",
              }}
            >
              <div style={{ color: "#fff", marginBottom: "10px" }}>
                Connect with me:
              </div>
              {renderSocialLinks()}
            </div>
          </Stack>
        </MobileMenuContainer>
      </HeaderWrapper>
    </FixedContainer>
  );
};

const mapDispatchToProps = (dispatch: Dispatch) =>
  bindActionCreators(
    {
      updateSelectedMenuOption: menuActions.updateSelectedMenuOptionAsync,
    },
    dispatch,
  );

export default connect(null, mapDispatchToProps)(Header);
