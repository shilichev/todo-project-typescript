

import { createSlice } from "@reduxjs/toolkit";

interface IDataProcedureState {
    data: any[],
}

// interface ITodoObject {
//     id: string, title: string, description: string, status: "TODO" | "DONE",
// }

const initialState: IDataProcedureState = {
    data: [],
}


export const { actions, reducer } = createSlice({
    name: "todos",
    initialState,
    reducers: {
        setTodo(state: IDataProcedureState, { payload }: any) {
            state.data = payload;
        },
        addTodo(state: IDataProcedureState, { payload }: any) {
            state.data = [payload, ...state.data];
        },
        deleteTodo(state: IDataProcedureState, { payload }: any) {
            state.data = state.data.filter((item) => item.id !== payload);
        }
    },
});

export const selectors = (state: any): any => {
    const dataSlice = (): any => state.todos || initialState;
    return {
        getData: (): any[] => dataSlice().data || [],
    };
};

const objectSlice = {
    selectors,
    actions,
    reducer,
};

export default objectSlice;