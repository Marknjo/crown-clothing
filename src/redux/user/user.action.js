import userActionType from "./user.actions.types";

export const setCurrentUser = user => ({
    type: userActionType.SET_CURRENT_USER,
    payload: user
});