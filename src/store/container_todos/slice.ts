

import { createSlice, PayloadAction } from "@reduxjs/toolkit";
import { assoc, compose, concat, merge, pipe } from "ramda";


interface IDataProcedureState {
    data: any[],
    value: string
}

interface ITodoObject {
    id: string, title: string, description: string, status: "TODO" | "DONE",
}

const initialState: IDataProcedureState = {
    data: [],
    value: ""
}
interface ITodoObjectPayload {
    id?: string, title?: string, description?: string, status?: "TODO" | "DONE"
}

export const { actions, reducer } = createSlice({
    name: "todos",
    initialState,
    reducers: {
        setTodo(state: IDataProcedureState, { payload }: any) {
            return compose(assoc('data', payload))(state)
        },

        addTodo(state: IDataProcedureState, { payload }: PayloadAction<ITodoObjectPayload>) {
            // payload = concat([payload], state.data);
            return pipe(
                assoc('data', concat([payload], state.data)),
                assoc('value', ''),
            )(state)
        },
        deleteTodo(state: IDataProcedureState, { payload }: PayloadAction<ITodoObjectPayload>) {
            return compose(assoc('data', state.data.filter((item: any) => item.id !== payload)),)(state)
        },
        updateTodo(state: IDataProcedureState, { payload }: PayloadAction<ITodoObjectPayload>) {

            return compose(
                assoc('data', state.data.map((item: ITodoObject) => {
                    if (item.id === payload.id) {
                        return merge(item, payload);
                    }
                    return item;
                })),
            )(state)
        },
        setValue(state: IDataProcedureState, { payload }: any) {
            state.value = payload
        }
    },
});

export const selectors = (state: any): any => {
    const dataSlice = (): any => state.todos || initialState;
    return {
        getData: (params: any): any[] => dataSlice().data.filter((item: any) => item.status !== params) || [],
        getValue: (): string => dataSlice().value || "",
    };
};

const objectSlice = {
    selectors,
    actions,
    reducer,
};

export default objectSlice;