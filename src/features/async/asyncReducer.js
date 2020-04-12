import { createReducer } from "../../app/common/util/reducerUtils";
import { ASYNC_ACTION_START, ASYNC_ACTION_FINISH, ASYNC_ACTION_ERROR } from "./asyncContants";

const inistialState = {
    loading: false,
    elementName: null
}

const asyncActionStarted = (state, payload) => {
    return{
        ...state,
        loading: true,
        elementName: payload
    }
}

const asyncActionFinish = (state) => {
    return{
        ...state,
        loading: false,
        elementName: null
    }
}

const asyncActionError= (state) => {
    return{
        ...state,
        loading: false,
        elementName: null
    }
}

export default createReducer(inistialState, {
    [ASYNC_ACTION_START]: asyncActionStarted,
    [ASYNC_ACTION_FINISH]: asyncActionFinish,
    [ASYNC_ACTION_ERROR]: asyncActionError
})
