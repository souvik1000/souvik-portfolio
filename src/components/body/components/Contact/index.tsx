import React, { useRef, useState } from 'react';
import { FaPaperPlane, FaUser, FaEnvelope, FaCommentAlt, FaTag } from 'react-icons/fa';

import { Container, FormWrapper, Input, InputGroup, IconWrapper, Row, SubmitButton, Title, TextArea } from './contactStyles';

const Contact = () => {
  const nameRef = useRef<HTMLInputElement>(null);
  const emailRef = useRef<HTMLInputElement>(null);
  const subjectRef = useRef<HTMLInputElement>(null);
  const messageRef = useRef<HTMLTextAreaElement>(null);
  const [isSubmitting, setIsSubmitting] = useState(false);

  // Cast icons to avoid TS errors
  const UserIcon = FaUser as any;
  const EnvelopeIcon = FaEnvelope as any;
  const CommentIcon = FaCommentAlt as any;
  const PaperPlaneIcon = FaPaperPlane as any;
  const TagIcon = FaTag as any;

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setIsSubmitting(true);

    const formData = {
      name: nameRef.current?.value || '',
      email: emailRef.current?.value || '',
      subject: subjectRef.current?.value || '',
      message: messageRef.current?.value || ''
    };

    // Simulate API call
    setTimeout(() => {
      console.log('Form submitted:', formData);
      alert('Message sent successfully!');

      // Reset form
      if (nameRef.current) nameRef.current.value = '';
      if (emailRef.current) emailRef.current.value = '';
      if (subjectRef.current) subjectRef.current.value = '';
      if (messageRef.current) messageRef.current.value = '';

      setIsSubmitting(false);
    }, 1500);
  };

  return (
    <>
      <Container>
        <FormWrapper>
          <Title>Get In Touch</Title>
          <form onSubmit={handleSubmit}>
            <Row>
              <InputGroup width="40%">
                <Input
                  type="text"
                  name="name"
                  placeholder="Name"
                  ref={nameRef}
                  required
                />
                <IconWrapper>
                  <UserIcon />
                </IconWrapper>
              </InputGroup>

              <InputGroup width="60%">
                <Input
                  type="email"
                  name="email"
                  placeholder="Email"
                  ref={emailRef}
                  required
                />
                <IconWrapper>
                  <EnvelopeIcon />
                </IconWrapper>
              </InputGroup>
            </Row>

            <InputGroup>
              <Input
                type="text"
                name="subject"
                placeholder="Subject"
                ref={subjectRef}
                required
              />
              <IconWrapper>
                <TagIcon />
              </IconWrapper>
            </InputGroup>

            <InputGroup>
              <TextArea
                name="message"
                placeholder="Message"
                ref={messageRef}
                required
              />
              <IconWrapper>
                <CommentIcon />
              </IconWrapper>
            </InputGroup>

            <SubmitButton type="submit" disabled={isSubmitting}>
              {isSubmitting ? 'Sending...' : 'Send Message'}
              {!isSubmitting && <PaperPlaneIcon />}
            </SubmitButton>
          </form>
        </FormWrapper>
      </Container>
    </>
  );
};

export default Contact;
