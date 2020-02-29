import { fromJS } from "immutable";
import {
  USERDATA_UPDATE_FAILURE,
  USERDATA_UPDATE_PROGRESS,
  USERDATA_UPDATE_SUCCESS,
  USERDATA_DELETE_FAILURE,
  USERDATA_DELETE_PROGRESS,
  USERDATA_DELETE_SUCCESS,
  USERDATA_CREATE_FAILURE,
  USERDATA_CREATE_PROGRESS,
  USERDATA_CREATE_SUCCESS
} from "../actions/userAction";

const intialState = {
  user: {},
  isUserLoading: true,
  userError: {}
};

export function user(state = fromJS(intialState), action) {
  let oldState = {};
  switch (action.type) {
    case USERDATA_CREATE_SUCCESS:
      oldState = state.toJS();
      oldState.user = action.data;
      oldState.isUserLoading = false;
      return fromJS(oldState);
    case USERDATA_CREATE_PROGRESS:
      oldState = state.toJS();
      oldState.isUserLoading = true;
      return fromJS(oldState);
    case USERDATA_CREATE_FAILURE:
      oldState = state.toJS();
      oldState.userError = action.error;
      oldState.isUserLoading = false;
      return fromJS(oldState);
    case USERDATA_DELETE_SUCCESS:
      oldState = state.toJS();
      oldState.user = {};
      oldState.isUserLoading = false;
      return fromJS(oldState);
    case USERDATA_DELETE_PROGRESS:
      oldState = state.toJS();
      oldState.isUserLoading = true;
      return fromJS(oldState);
    case USERDATA_DELETE_FAILURE:
      oldState = state.toJS();
      oldState.userError = action.data;
      oldState.isUserLoading = false;
      return fromJS(oldState);
    case USERDATA_UPDATE_SUCCESS:
      oldState = state.toJS();
      oldState.user = action.data;
      oldState.isUserLoading = false;
      return fromJS(oldState);
    case USERDATA_UPDATE_PROGRESS:
      oldState = state.toJS();
      oldState.isUserLoading = true;
      return fromJS(oldState);
    case USERDATA_UPDATE_FAILURE:
      oldState = state.toJS();
      oldState.userError = action.data;
      oldState.isUserLoading = false;
      return fromJS(oldState);
    default:
      return state;
  }
}
