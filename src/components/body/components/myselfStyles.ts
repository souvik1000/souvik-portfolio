import styled, { keyframes } from "styled-components";

const float = keyframes`
  0% { transform: translateY(0px); }
  50% { transform: translateY(-10px); }
  100% { transform: translateY(0px); }
`;

const Wrapper = styled.div`
  width: 100%;
  min-height: 90vh;
  display: flex;
  flex-direction: row;
  align-items: center;
  justify-content: center;
  padding: 0 5%;
  box-sizing: border-box;
  overflow: hidden;

  @media (max-width: 768px) {
    flex-direction: column-reverse;
    padding: 80px 20px 40px;
    height: auto;
    gap: 40px;
  }
`;

const ContentContainer = styled.div`
  flex: 3;
  display: flex;
  flex-direction: column;
  justify-content: center;
  z-index: 1;

  @media (max-width: 768px) {
    width: 100%;
    align-items: center;
    text-align: center;
    flex: none;
  }
`;

const IntroText = styled.h2`
  font-size: 2rem;
  font-weight: 500;
  color: #fff;
  margin-bottom: 10px;

  @media (max-width: 768px) {
    font-size: 1.5rem;
  }
`;

const NameTitle = styled.h1`
  font-size: 3.5rem;
  font-weight: 700;
  color: #fff;
  margin: 0 0 20px 0;
  line-height: 1.2;

  span {
    color: #4db5ff;
  }

  @media (max-width: 768px) {
    font-size: 2.2rem;
  }
`;

const Bio = styled.p`
  font-size: 1.1rem;
  line-height: 1.6;
  color: #ccc;
  margin-bottom: 25px;
  text-align: justify;
  
  strong {
    color: #fff;
    font-weight: 600;
  }

  @media (max-width: 768px) {
    font-size: 1rem;
    text-align: center;
  }
`;

const ImageContainer = styled.div`
  flex: 2;
  display: flex;
  justify-content: center;
  align-items: center;
  position: relative;
  
  @media (max-width: 768px) {
    width: 100%;
    margin-bottom: 20px;
    flex: none;
  }
`;

const ProfileImage = styled.img`
  width: 400px;
  height: 400px;
  object-fit: cover;
  border-radius: 50%;
  border: 4px solid rgba(77, 181, 255, 0.3);
  box-shadow: 0 0 30px rgba(77, 181, 255, 0.2);
  animation: ${float} 6s ease-in-out infinite;
  
  @media (max-width: 1024px) {
    width: 350px;
    height: 350px;
  }

  @media (max-width: 768px) {
    width: 280px;
    height: 280px;
  }
`;

const BackgroundBlur = styled.div`
  position: absolute;
  width: 500px;
  height: 500px;
  background: radial-gradient(circle, rgba(77,181,255,0.1) 0%, rgba(0,0,0,0) 70%);
  top: 50%;
  left: 50%;
  transform: translate(-50%, -50%);
  z-index: -1;
`;

export { 
  Wrapper, 
  ContentContainer, 
  IntroText, 
  NameTitle, 
  Bio, 
  ImageContainer, 
  ProfileImage,
  BackgroundBlur 
};
