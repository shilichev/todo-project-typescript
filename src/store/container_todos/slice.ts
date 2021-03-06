
import { createSlice, PayloadAction } from "@reduxjs/toolkit";
import { assoc, compose, concat, merge, pipe } from "ramda";
import { IDataProcedureState, ITodoObjectPayload, ITodoObject, FILTER_STATUS } from "../../data/types";

const initialState: IDataProcedureState = {
    data: [],
    value: "",
    checkbox: FILTER_STATUS.ALL,
}

export const { actions, reducer } = createSlice({
    name: "todos",
    initialState,
    reducers: {
        setTodo(state: IDataProcedureState, { payload }: any): IDataProcedureState {
            return pipe(
                assoc('data', payload),
            )(state);
        },

        addTodo(state: IDataProcedureState, { payload }: PayloadAction<ITodoObjectPayload>): IDataProcedureState {
            return pipe(
                assoc('data', concat([payload], state.data)),
                assoc('value', ''),
            )(state);
        },

        deleteTodo(state: IDataProcedureState, { payload }: PayloadAction<string>): IDataProcedureState {       
            return pipe(
                assoc('data', state.data.filter((item: any) => item.id !== payload)))(state)
        },
        updateTodo(state: IDataProcedureState, { payload }: PayloadAction<ITodoObjectPayload>): IDataProcedureState {
            return compose(
                assoc('data', state.data.map((item: ITodoObject) => {
                    if (item.id === payload.id) {
                        return merge(item, payload);
                    }
                    return item;
                })),
            )(state)
        },
        setValue(state: IDataProcedureState, { payload }: any): IDataProcedureState {
            return compose(assoc('value', payload))(state)
        },
        changeCheckbox(state: IDataProcedureState, { payload }: PayloadAction<FILTER_STATUS>): IDataProcedureState {
            return compose(assoc('checkbox', payload))(state)
        }
    },
});

export const selectors = (state: any): any => {
    const dataSlice = (): any => state.todos || initialState;
    return {
        getData: (): any[] => dataSlice().data.filter((item: any) => item.status !== dataSlice().checkbox) || [],
        getValue: (): string => dataSlice().value || "",
        getTotal: (): number => dataSlice().data.length || 0,
    };
};


const objectSlice = {
    selectors,
    actions,
    reducer,
};

export default objectSlice;