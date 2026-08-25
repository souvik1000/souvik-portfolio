import styled from "styled-components";

const Container = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  min-height: 80vh;
  padding: 20px;
  perspective: 1500px;
  overflow: hidden;
`;

const FormWrapper = styled.div`
  width: 100%;
  max-width: 600px;
  background: rgba(255, 255, 255, 0.05);
  backdrop-filter: blur(5px);
  -webkit-backdrop-filter: blur(5px);
  border-radius: 20px;
  padding: 40px;
  box-shadow: 
    0 15px 35px rgba(0, 0, 0, 0.2),
    0 5px 15px rgba(0, 0, 0, 0.1);
  border: 1px solid rgba(255, 255, 255, 0.1);

  &:hover {
    transform: rotateX(0deg) scale(1.02);
    box-shadow: 
      0 20px 40px rgba(0, 0, 0, 0.3),
      0 10px 20px rgba(0, 0, 0, 0.15),
      0 0 20px rgba(77, 181, 255, 0.1);
    background: rgba(255, 255, 255, 0.08);
  }

  @media (max-width: 768px) {
    transform: none;
    padding: 30px 20px;
    
    &:hover {
      transform: none;
    }
  }
`;

const Title = styled.h2`
  color: #fff;
  text-align: center;
  margin-bottom: 30px;
  font-size: 2.5rem;
  letter-spacing: 1px;
  text-shadow: 0 5px 15px rgba(0,0,0,0.3);
  position: relative;
  transform: translateZ(30px);
  
  &:after {
    content: '';
    display: block;
    width: 60px;
    height: 4px;
    background: #4db5ff;
    margin: 15px auto 0;
    border-radius: 2px;
    box-shadow: 0 0 15px #4db5ff;
  }
`;

const InputGroup = styled.div<{ width?: string }>`
  position: relative;
  margin-bottom: 25px;
  width: ${props => props.width || '100%'};

  @media (max-width: 600px) {
    width: 100%;
  }
`;

const Row = styled.div`
  display: flex;
  gap: 20px;
  width: 100%;

  @media (max-width: 600px) {
    flex-direction: column;
    gap: 0;
  }
`;

const IconWrapper = styled.div`
  position: absolute;
  left: 15px;
  top: 15px;
  color: #4db5ff;
  font-size: 1.1rem;
  z-index: 1;
  transition: all 0.3s ease;
`;

const Input = styled.input`
  width: 100%;
  padding: 15px 15px 15px 45px;
  background: rgba(255, 255, 255, 0.05);
  border: 1px solid rgba(255, 255, 255, 0.1);
  border-radius: 10px;
  color: #fff;
  font-size: 1rem;
  outline: none;
  transition: all 0.3s ease;
  box-shadow: inset 2px 2px 5px rgba(0, 0, 0, 0.2);
  box-sizing: border-box;

  &::placeholder {
    color: rgba(255, 255, 255, 0.5);
  }

  &:focus {
    background: rgba(255, 255, 255, 0.1);
    border-color: #4db5ff;
    box-shadow: 
      0 0 15px rgba(77, 181, 255, 0.2),
      inset 2px 2px 5px rgba(0, 0, 0, 0.2);
    transform: translateY(-2px);
  }

  &:focus + ${IconWrapper} {
    color: #fff;
    transform: scale(1.1);
  }
`;

const TextArea = styled.textarea`
  width: 100%;
  padding: 15px 15px 15px 45px;
  background: rgba(255, 255, 255, 0.05);
  border: 1px solid rgba(255, 255, 255, 0.1);
  border-radius: 10px;
  color: #fff;
  font-size: 1rem;
  outline: none;
  resize: vertical;
  min-height: 120px;
  transition: all 0.3s ease;
  box-shadow: inset 2px 2px 5px rgba(0, 0, 0, 0.2);
  font-family: inherit;
  box-sizing: border-box;

  &::placeholder {
    color: rgba(255, 255, 255, 0.5);
  }

  &:focus {
    background: rgba(255, 255, 255, 0.1);
    border-color: #4db5ff;
    box-shadow: 
      0 0 15px rgba(77, 181, 255, 0.2),
      inset 2px 2px 5px rgba(0, 0, 0, 0.2);
    transform: translateY(-2px);
  }

  &:focus + ${IconWrapper} {
    color: #fff;
    transform: scale(1.1);
  }
`;

const SubmitButton = styled.button`
  width: 100%;
  padding: 15px;
  background: linear-gradient(45deg, #4db5ff, #0072ff);
  color: white;
  border: none;
  border-radius: 10px;
  font-size: 1.1rem;
  font-weight: 600;
  cursor: pointer;
  transition: all 0.3s ease;
  display: flex;
  justify-content: center;
  align-items: center;
  gap: 10px;
  box-shadow: 0 5px 15px rgba(0, 114, 255, 0.3);
  position: relative;
  overflow: hidden;
  transform: translateZ(20px);

  &:hover {
    transform: translateY(-3px) translateZ(20px);
    box-shadow: 0 10px 25px rgba(0, 114, 255, 0.5);
    background: linear-gradient(45deg, #0072ff, #4db5ff);
  }

  &:active {
    transform: translateY(1px) translateZ(20px);
    box-shadow: 0 3px 10px rgba(0, 114, 255, 0.3);
  }

  &:disabled {
    background: #ccc;
    cursor: not-allowed;
    transform: none;
    box-shadow: none;
  }
`;

const ModalOverlay = styled.div`
  position: fixed;
  top: 0;
  left: 0;
  right: 0;
  bottom: 0;
  background: rgba(0, 0, 0, 0.7);
  backdrop-filter: blur(8px);
  -webkit-backdrop-filter: blur(8px);
  display: flex;
  justify-content: center;
  align-items: center;
  z-index: 9999;
  animation: fadeIn 0.3s ease-out;

  @keyframes fadeIn {
    from { opacity: 0; }
    to { opacity: 1; }
  }
`;

const ModalCard = styled.div`
  background: rgba(20, 20, 20, 0.95);
  border: 1px solid rgba(255, 255, 255, 0.1);
  border-radius: 16px;
  padding: 30px 40px;
  max-width: 400px;
  width: 90%;
  text-align: center;
  box-shadow: 0 15px 35px rgba(0, 0, 0, 0.4), 0 0 30px rgba(77, 181, 255, 0.15);
  transform: translateZ(50px);
  animation: scaleIn 0.3s cubic-bezier(0.34, 1.56, 0.64, 1);

  @keyframes scaleIn {
    from { transform: scale(0.8); opacity: 0; }
    to { transform: scale(1); opacity: 1; }
  }
`;

const ModalTextTitle = styled.h3`
  color: #fff;
  font-size: 1.5rem;
  margin-top: 0;
  margin-bottom: 15px;
`;

const ModalMessage = styled.p`
  color: rgba(255, 255, 255, 0.75);
  font-size: 1rem;
  line-height: 1.5;
  margin-bottom: 25px;
`;

const ModalButton = styled.button`
  padding: 10px 30px;
  background: linear-gradient(45deg, #4db5ff, #0072ff);
  color: white;
  border: none;
  border-radius: 8px;
  font-size: 1rem;
  font-weight: 600;
  cursor: pointer;
  box-shadow: 0 5px 15px rgba(0, 114, 255, 0.3);
  transition: all 0.2s ease;

  &:hover {
    transform: translateY(-2px);
    box-shadow: 0 8px 20px rgba(0, 114, 255, 0.41);
  }

  &:active {
    transform: translateY(1px);
  }
`;

export {
  Container,
  FormWrapper,
  Input,
  InputGroup,
  IconWrapper,
  Row,
  SubmitButton,
  Title,
  TextArea,
  ModalOverlay,
  ModalCard,
  ModalTextTitle,
  ModalMessage,
  ModalButton
};
