
import setTodo from "./slice";
import addTodo from "./slice";
import deleteTodo from "./slice";
import updateTodo from "./slice";
import setValue from "./slice";

const todoContainer = [
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

interface ITodoObject {
    id: string, title?: string, description?: string, status?: "TODO" | "DONE",
}

export const setTodoThunkCreate = () => async (dispatch: any) => {
    dispatch(setTodo.actions.setTodo(todoContainer));
};
export const addTodoThunkCreate = (params: ITodoObject) => (dispatch: any) => {
    dispatch(addTodo.actions.addTodo(params));
};
export const deleteTodoThunkCreate = (params: ITodoObject) => (dispatch: any) => {
    dispatch(deleteTodo.actions.deleteTodo(params));
};
export const updateTodoThunkCreate = (params: ITodoObject) => (dispatch: any) => {
    dispatch(updateTodo.actions.updateTodo(params));
};
export const setValueThunkCreate = (params: string) => (dispatch: any) => {
    dispatch(setValue.actions.setValue(params));
};
// export const sortTodoThunkCreate = (params: ITodoObject) => (dispatch: any) => {

//     return dispatch(sortTodo.actions.sortTodo(params));


// };