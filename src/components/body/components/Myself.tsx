import styled from "styled-components";

const HeaderWrapper = styled.div`
  display: flex;
  flex-direction: column;
`;

const Header = styled.div`
  font-size: 48px;
`;

const SubHeaderWrapper = styled.div`
  gap: 8px;
  display: flex;
  margin-top: 16px;
  text-align: justify;
  flex-direction: column;
`;

const SubHeader = styled.div`
  font-size: 16px;
`;

const Image = styled.img`
  width: 50%;
  height: 50%;
`;

const MySelf = () => {
  return (
    <div
      style={{
        width: "100%",
        height: "85vh",
        display: "flex",
        flexDirection: "row",
        alignItems: "center",
      }}
    >
      <div
        style={{
          width: "40%",
          margin: "auto",
        }}
      >
        <HeaderWrapper>
          <Header style={{ fontSize: "64px" }}>Hi,</Header>
          <Header>
            My name is <span>Souvik Ghosh</span>
          </Header>
        </HeaderWrapper>
        <SubHeaderWrapper>
          <SubHeader>
            I'm a creative frontend developer, based in India with an experience
            of React & Typescript for more than one and half year.
          </SubHeader>
          <SubHeader>
            I'm passionate about working on cutting-edge technologies and
            learning new eras of technologies.
          </SubHeader>
        </SubHeaderWrapper>
      </div>
      <div
        style={{
          width: "40%",
          display: "flex",
          justifyContent: "center",
          margin: "auto",
        }}
      >
        <Image src="Souvik.jpg" />
      </div>
    </div>
  );
};

export default MySelf;
