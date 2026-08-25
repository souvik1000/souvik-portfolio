import {
  FaTag,
  FaUser,
  FaEnvelope,
  FaCommentAlt,
  FaPaperPlane,
} from "react-icons/fa";

import {
  Row,
  Input,
  Title,
  TextArea,
  Container,
  InputGroup,
  IconWrapper,
  FormWrapper,
  SubmitButton,
  ModalOverlay,
  ModalCard,
  ModalTextTitle,
  ModalMessage,
  ModalButton,
} from "./contactStyles";
import emailjs from "@emailjs/browser";
import React, { useRef, useState } from "react";

const Contact = () => {
  const formRef = useRef<HTMLFormElement>(null);
  const nameRef = useRef<HTMLInputElement>(null);
  const emailRef = useRef<HTMLInputElement>(null);
  const subjectRef = useRef<HTMLInputElement>(null);
  const messageRef = useRef<HTMLTextAreaElement>(null);
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [modal, setModal] = useState<{
    show: boolean;
    title: string;
    message: string;
  }>({
    show: false,
    title: "",
    message: "",
  });

  // Cast icons to avoid TS errors
  const UserIcon = FaUser as any;
  const EnvelopeIcon = FaEnvelope as any;
  const CommentIcon = FaCommentAlt as any;
  const PaperPlaneIcon = FaPaperPlane as any;
  const TagIcon = FaTag as any;

  // Retrieve keys from environment variables with backwards-compatible fallbacks
  const serviceId =
    process.env.REACT_APP_EMAILJS_SERVICE_ID ||
    process.env.REACT_APP_FORMIK_SERVICE_ID ||
    "";
  const templateId =
    process.env.REACT_APP_EMAILJS_TEMPLATE_ID ||
    process.env.REACT_APP_FORMIK_TEMPLATE_ID ||
    "";
  const publicKey =
    process.env.REACT_APP_EMAILJS_PUBLIC_KEY ||
    process.env.REACT_APP_FORMIK_USER_ID ||
    "";

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setIsSubmitting(true);

    if (!serviceId || !templateId || !publicKey) {
      setModal({
        show: true,
        title: "Configuration Error",
        message:
          "EmailJS environment variables are not configured. Please check your .env file.",
      });
      setIsSubmitting(false);
      return;
    }

    try {
      await emailjs.sendForm(
        serviceId,
        templateId,
        formRef.current!,
        publicKey,
      );
      setModal({
        show: true,
        title: "Success!",
        message:
          "Your message has been sent successfully. I will get back to you shortly!",
      });

      // Reset form fields
      if (formRef.current) {
        formRef.current.reset();
      }
    } catch (error) {
      console.error("EmailJS Error:", error);
      setModal({
        show: true,
        title: "Submission Failed",
        message:
          "Failed to send the message. Please check your network connection and try again.",
      });
    } finally {
      setIsSubmitting(false);
    }
  };

  return (
    <>
      <Container>
        <FormWrapper>
          <Title>Get In Touch</Title>
          <form ref={formRef} onSubmit={handleSubmit}>
            <Row>
              <InputGroup width="40%">
                <Input
                  type="text"
                  name="from_name"
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
                  name="reply_to"
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
              {isSubmitting ? "Sending..." : "Send Message"}
              {!isSubmitting && <PaperPlaneIcon />}
            </SubmitButton>
          </form>
        </FormWrapper>
      </Container>

      {modal.show && (
        <ModalOverlay onClick={() => setModal({ ...modal, show: false })}>
          <ModalCard onClick={(e) => e.stopPropagation()}>
            <ModalTextTitle>{modal.title}</ModalTextTitle>
            <ModalMessage>{modal.message}</ModalMessage>
            <ModalButton onClick={() => setModal({ ...modal, show: false })}>
              Okay
            </ModalButton>
          </ModalCard>
        </ModalOverlay>
      )}
    </>
  );
};

export default Contact;
