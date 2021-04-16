
import setTodo from "./slice";
import addTodo from "./slice";
import deleteTodo from "./slice";

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

export const setTodoThunkCreate = () => (dispatch: any) => {
    dispatch(setTodo.actions.setTodo(todoContainer));
};
export const addTodoThunkCreate = (params: any) => (dispatch: any) => {
    dispatch(addTodo.actions.addTodo(params));
};
export const deleteTodoThunkCreate = (params: any) => (dispatch: any) => {
    dispatch(deleteTodo.actions.deleteTodo(params));
};