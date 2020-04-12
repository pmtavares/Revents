import { ASYNC_ACTION_START, ASYNC_ACTION_FINISH, ASYNC_ACTION_ERROR } from "./asyncContants";

export const asyncActionStart = (name) => {
    return{
        type: ASYNC_ACTION_START,
        payload: name
    }
}


export const asyncActionFinish = () => {
    return{
        type: ASYNC_ACTION_FINISH
    }
}


export const asyncActionError = () => {
    return{
        type: ASYNC_ACTION_ERROR
    }
}