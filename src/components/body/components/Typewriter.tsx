import React, { useState, useEffect } from 'react';
import styled, { keyframes } from 'styled-components';

const blink = keyframes`
  0% { opacity: 1; }
  50% { opacity: 0; }
  100% { opacity: 1; }
`;

const Cursor = styled.span`
  display: inline-block;
  width: 10px;
  height: 1em;
  background-color: #4db5ff;
  margin-left: 5px;
  vertical-align: middle;
  animation: ${blink} 1s step-end infinite;
`;

const TextWrapper = styled.span`
  color: #4db5ff;
  font-weight: 600;
`;

interface TypewriterProps {
    strings: string[];
    typeSpeed?: number;
    deleteSpeed?: number;
    pauseDuration?: number;
}

const Typewriter: React.FC<TypewriterProps> = ({
    strings,
    typeSpeed = 100,
    deleteSpeed = 50,
    pauseDuration = 2000
}) => {
    const [currentStringIndex, setCurrentStringIndex] = useState(0);
    const [currentText, setCurrentText] = useState('');
    const [isDeleting, setIsDeleting] = useState(false);

    useEffect(() => {
        const currentString = strings[currentStringIndex];

        const handleTyping = () => {
            if (!isDeleting) {
                // Typing
                if (currentText.length < currentString.length) {
                    setCurrentText(currentString.slice(0, currentText.length + 1));
                } else {
                    // Finished typing, pause before deleting
                    setTimeout(() => setIsDeleting(true), pauseDuration);
                }
            } else {
                // Deleting
                if (currentText.length > 0) {
                    setCurrentText(currentString.slice(0, currentText.length - 1));
                } else {
                    // Finished deleting, move to next string
                    setIsDeleting(false);
                    setCurrentStringIndex((prev) => (prev + 1) % strings.length);
                }
            }
        };

        const timer = setTimeout(
            handleTyping,
            isDeleting ? deleteSpeed : typeSpeed
        );

        return () => clearTimeout(timer);
    }, [currentText, isDeleting, currentStringIndex, strings, typeSpeed, deleteSpeed, pauseDuration]);

    return (
        <TextWrapper>
            {currentText}
            <Cursor />
        </TextWrapper>
    );
};

export default Typewriter;
