import styled, { keyframes } from "styled-components";

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
  height: 60px;
  display: flex;
  padding: 8px 0;
  font-size: 13px;
  align-items: center;
  justify-content: space-between;
  position: relative;
`;

const Logo = styled.img`
  width: 36px;
  height: 36px;
  padding-right: 8px;
`;

const MobileIcon = styled.div`
  display: none;
  font-size: 1.5rem;
  cursor: pointer;
  color: #fff;

  @media (max-width: 768px) {
    display: block;
  }
`;

const DesktopMenu = styled.div`
  display: flex;
  align-items: center;

  @media (max-width: 768px) {
    display: none;
  }
`;

const MobileMenuContainer = styled.div<{ isOpen: boolean }>`
  position: fixed;
  top: 77px;
  left: 0;
  width: 100%;
  height: calc(100vh - 77px);
  background: rgba(0, 0, 0, 0.95);
  backdrop-filter: blur(10px);
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: flex-start;
  padding-top: 40px;
  transition: transform 0.3s ease-in-out;
  transform: ${({ isOpen }) => (isOpen ? "translateX(0)" : "translateX(100%)")};
  z-index: 999;
  border-top: 1px solid #333;

  @media (min-width: 769px) {
    display: none;
  }
`;

const downloadBottom = keyframes`
    from{ transform: translateY(-4px); }
    to{transform: translateY(4px); }
`;

const Download = styled.div`
  display: flex;
  align-items: center;
`;

const ResumeWrapper = styled.a`
  padding: 4px 8px;
  border-radius: 25px;
  display: flex;
  gap: 4px;
  align-items: center;
  justify-content: center;
  border: 1px solid #000;
  transition: all ease 0.3s;
  cursor: pointer;
  color: #fff;
  text-decoration: none;

  &:hover {
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
  cursor: pointer;

  &:hover {
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

export {
  FixedContainer,
  HeaderWrapper,
  Logo,
  MobileIcon,
  DesktopMenu,
  MobileMenuContainer,
  downloadBottom,
  Download,
  ResumeWrapper,
  ContactMe,
  Links,
};
