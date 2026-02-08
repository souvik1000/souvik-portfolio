import actionCreatorFactory from "typescript-fsa";

import { IThunk } from "../store";
import * as SendEmailAPI from "src/interfaces/api/sendEmail";

const actionCreator = actionCreatorFactory("contacts");

const actions = {
  setMilSentStatus: actionCreator.async<void, SendEmailAPI.EmailJSResponse>(
    "setMilSentStatus"
  ),
};

const thunks = {
  setMilSentStatusAsync:
    (
      formRef: React.MutableRefObject<HTMLFormElement | string | null>
    ): IThunk =>
    (dispatch) => {
      dispatch(actions.setMilSentStatus.started());
      SendEmailAPI.GET.service({
        serviceId: process.env.REACT_APP_FORMIK_SERVICE_ID!,
        templateId: process.env.REACT_APP_FORMIK_TEMPLATE_ID!,
        userId: process.env.REACT_APP_FORMIK_USER_ID!,
        formElement: formRef.current,
      }).then((response) => {
        dispatch(
          actions.setMilSentStatus.done({
            result: response,
          })
        );
      });
    },
};

const exportedObject = { ...actions, ...thunks };
export default exportedObject;
