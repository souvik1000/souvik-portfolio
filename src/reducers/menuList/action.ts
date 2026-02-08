import actionCreatorFactory from "typescript-fsa";

import { IThunk } from "../store";
import { MenuTypes } from "./reducer";

const actionCreator = actionCreatorFactory("WEATHER");
const BASE_URL = window.origin;

const actions = {
  resetState: actionCreator("resetState"),
  updateSelectedMenuOption: actionCreator<MenuTypes>(
    "updateSelectedMenuOption"
  ),
};

const thunks = {
  updateSelectedMenuOptionAsync:
    (selectedMenuType: MenuTypes): IThunk =>
    (dispatch) => {
      const nextURL = `${BASE_URL}/${selectedMenuType}`;
      window.history.pushState(null, "", nextURL);
      dispatch(actions.updateSelectedMenuOption(selectedMenuType));
    },
};

const exportedObject = { ...actions, ...thunks };
export default exportedObject;
