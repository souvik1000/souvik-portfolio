import React from "react";
import { debounce } from "lodash";
import { useFormik } from "formik";
import { connect } from "react-redux";
import { object as YupObject, string as YupString } from "yup";

import Stack from "src/utils/Stack";
import styled from "styled-components";
import { IReducerState } from "src/reducers";
import { actions } from "src/reducers/contacts";
import { ParticalStyle } from "./styles/particleStyle";
import { BottomBorderStyle } from "./BorderBottomStyle";
import { formikFields } from "src/interfaces/api/sendEmail";
import "src/components/body/components/styles/particleStyle/index.scss";

const Error = styled.p``;
const Input = styled.input``;
const MailIcon = styled.span`
  color: #000;
  font-size: 18px;
  padding: 2px 4px;
  background-color: #f2f2f2;
`;
const MailBody = styled.textarea``;
const SubjectInput = styled.input``;
const SendMailButton = styled.button``;

const EMailForm = styled.div`
`;

const InputBox = styled.div`
  flex: 1;

  input {
    width: 100%;
    height: 16px;
    padding: 20px;
    border: 1px solid;
    border-radius: 4px;
    box-sizing: border-box;
  }

  ${MailBody} {
    width: 97%;
    padding: 8px;
    resize: vertical;
    border: 1px solid;
    min-height: 128px;
    max-height: 224px;
    border-radius: 4px;
  }

  ${Error} {
    margin: 0px;
    margin-top: 8px;
    color: #ff3333;
    font-size: 10px;
  }
`;

const SendMail = styled.div`
  width: 100%;
  display: flex;
  align-items: center;
  justify-content: space-between;

  ${SendMailButton} {
    border: 0px;
    color: #000;
    padding: 2px;
    display: flex;
    padding: 6px 12px;
    border-radius: 25px;
    align-items: center;
    background-color: #f2f2f2;

    ${MailIcon} {
      
    }
  }
`;

type IStateProps = ReturnType<typeof mapStateToProps>;
type IDispatchProps = typeof mapDispatchToProps;

type IReduxProps = IStateProps & IDispatchProps;

const INITIAL_VALUES = {
  subject: "",
  message: "",
  reply_to: "",
  from_name: "",
  to_name: process.env.REACT_APP_ADMIN_EMAIL!,
};

const Contact: React.FC<IReduxProps> = ({
  mailSentStatus,
  mailSending,
  sentMail,
}) => {
  const mailForm = React.useRef(null);

  const formik = useFormik({
    initialValues: INITIAL_VALUES,
    validationSchema: YupObject({
      from_name: YupString().required("* Name field is required"),
      subject: YupString().required("* Subject field is required"),
      reply_to: YupString()
        .email("Invalid email address")
        .required("* Email field is required"),
      message: YupString().required("* Message field is required"),
    }),
    onSubmit: (values, { resetForm }) => {
      sentMail(mailForm);

      // Reset all the input value
      resetForm({ values: INITIAL_VALUES });

      // Reseting the input, textarea value
      document.getElementsByTagName("textarea")[0].value = "";
      const inputList = document.getElementsByTagName("input");
      for (let inputIndex = 0; inputIndex < inputList.length; inputIndex++) {
        inputList[inputIndex].value = "";
      }
    },
  });

  const formikErrorChecker = (formikField: formikFields) =>
    formik.touched[formikField] && formik.errors[formikField];

  const handleTextUpdate = (formikField: formikFields, formikValue: string) => {
    formik.setFieldTouched(formikField, true);
    formik.setFieldValue(formikField, formikValue);
  };

  const debouncedChangeHandler = React.useCallback(
    debounce(handleTextUpdate, 800),
    []
  );

  return (
    <div
      style={{
        width: "100%",
        height: "85vh",
        display: "flex",
        overflow: "hidden",
        alignItems: "center",
        flexDirection: "row",
      }}
    >
      <div style={{ width: "50%" }}>
        <div style={{ width: "80%", margin: "auto" }}>
          <BottomBorderStyle>Feedback</BottomBorderStyle>
          <EMailForm>
            <form ref={mailForm} onSubmit={formik.handleSubmit}>
              <Stack margin={12} direction="column">
                <Stack margin={12} direction="row">
                  <InputBox>
                    <label htmlFor="from_name" />
                    <Input
                      type="text"
                      id="from_name"
                      name="from_name"
                      autoComplete="off"
                      placeholder="Your name*"
                      onChange={(e) => {
                        debouncedChangeHandler("from_name", e.target.value);
                      }}
                    />
                    {formikErrorChecker("from_name") && (
                      <Error>{formik.errors.from_name}</Error>
                    )}
                  </InputBox>
                  <InputBox>
                    <label htmlFor="reply_to" />
                    <Input
                      type="text"
                      id="reply_to"
                      name="reply_to"
                      autoComplete="off"
                      placeholder="Your email*"
                      onChange={(e) => {
                        debouncedChangeHandler("reply_to", e.target.value);
                      }}
                    />
                    {formikErrorChecker("reply_to") && (
                      <Error>{formik.errors.reply_to}</Error>
                    )}
                  </InputBox>
                </Stack>
                <InputBox>
                  <label htmlFor="subject" />
                  <SubjectInput
                    type="text"
                    id="subject"
                    name="subject"
                    placeholder="Subject*"
                    onChange={(e) => {
                      debouncedChangeHandler("subject", e.target.value);
                    }}
                  />
                  {formikErrorChecker("subject") && (
                    <Error>{formik.errors.subject}</Error>
                  )}
                </InputBox>
                <InputBox>
                  <label htmlFor="message" />
                  <MailBody
                    id="message"
                    name="message"
                    placeholder="Body*"
                    onChange={(e) => {
                      debouncedChangeHandler("message", e.target.value);
                    }}
                  />
                  {formikErrorChecker("message") && (
                    <Error>{formik.errors.message}</Error>
                  )}
                </InputBox>
                <SendMail>
                  {/* Todo: Have to add icons & animations on mail sent */}
                  <p
                    style={{
                      color: mailSentStatus ? "#00cc00" : "#a6a6a6",
                      userSelect: "none",
                      fontSize: "12px",
                    }}
                  >
                    {mailSentStatus
                      ? "\u2714 SuccessFully Sent!"
                      : "Not send yet"}
                  </p>
                  <SendMailButton
                    type="submit"
                    disabled={
                      formik.isSubmitting || mailSending || mailSentStatus
                    }
                  >
                    <MailIcon>✉</MailIcon>
                    {mailSentStatus ? "E-mail Sent" : "Send E-mail"}
                  </SendMailButton>
                </SendMail>
              </Stack>
            </form>
          </EMailForm>
        </div>
      </div>
      <div style={{ width: "50%" }}>
        {/* Copied from https://codepen.io/natewiley/pen/GgONKy */}
        {/* TODO(Souvik): have to learn scss, pug html */}
        <div style={{ display: "flex", alignItems: "center" }}>
          <ParticalStyle />
        </div>
      </div>
    </div>
  );
};

const mapStateToProps = (state: IReducerState) => {
  const { contacts } = state;
  return {
    mailSentStatus: contacts.status,
    mailSending: contacts.loading,
  };
};

const mapDispatchToProps = {
  sentMail: actions.setMilSentStatusAsync,
};

export default connect(mapStateToProps, mapDispatchToProps)(Contact);
