import { FILTER_STATUS, ITodoObject } from './../../data/types';

import objectSlice from "./slice";

const todoContainer: any = [
    {
        id: "1",
        title: "Help",
        description: "This description about help",
        status: "DONE",
    },
    {
        id: "2",
        title: "News",
        description: "This description all about news",
        status: "TODO",
    },
    {
        id: "3",
        title: "Interestings",
        description: "This description about interestings",
        status: "TODO",
    },
];


export const setTodoThunkCreate = () => async (dispatch: any) => {
    dispatch(objectSlice.actions.setTodo(todoContainer));
};
export const addTodoThunkCreate = (params: ITodoObject) => (dispatch: any) => {
    dispatch(objectSlice.actions.addTodo(params));
};
export const deleteTodoThunkCreate = (params: ITodoObject) => (dispatch: any) => {
    dispatch(objectSlice.actions.deleteTodo(params));
};
export const updateTodoThunkCreate = (params: ITodoObject) => (dispatch: any) => {
    dispatch(objectSlice.actions.updateTodo(params));
};
export const setValueThunkCreate = (params: string) => (dispatch: any) => {
    dispatch(objectSlice.actions.setValue(params));
};
export const changeCheckboxThunkCreate = (params: FILTER_STATUS) => (dispatch: any) => {
    dispatch(objectSlice.actions.changeCheckbox(params));
};

// export const sortTodoThunkCreate = (params: ITodoObject) => (dispatch: any) => {

//     return dispatch(sortTodo.actions.sortTodo(params));


// };