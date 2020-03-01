
export const USERDATA_CREATE_FAILURE = "USERDATA_CREATE_FAILURE";
export const USERDATA_CREATE_PROGRESS = "USERDATA_CREATE_PROGRESS";
export const USERDATA_CREATE_SUCCESS = "USERDATA_CREATE_SUCCESS";

export const userDataCreateProgress = () => ({
  type: USERDATA_CREATE_PROGRESS
});

export const userDataCreateSuccess = user => ({
  type: USERDATA_CREATE_SUCCESS,
  data: user
});

export const userDataCreateFailure = error => ({
  type: USERDATA_CREATE_FAILURE,
  data: error
});

export const userDataCreate = user => ({
  type: USERDATA_CREATE_SUCCESS,
  data: user
});
