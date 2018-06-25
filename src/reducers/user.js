import {SET_USER_PROFILE} from "../actions";

const INITIAL_STATE = {
    profile: {}
};

const user = (state = INITIAL_STATE, action) => {
    switch(action.type){
        case SET_USER_PROFILE:
            return {
                profile: action.userData
            };

        default:
            return state
    }
};

export default user;