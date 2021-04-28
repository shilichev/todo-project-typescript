import objectSlice, { selectors } from './../slice';
import { reducer } from './../../reducers';
import { FILTER_STATUS, IDataProcedureState, STATUS } from './../../../data/types';
import { actions } from "../slice";


const initialState: IDataProcedureState = {
    data: [],
    value: "",
    checkbox: FILTER_STATUS.ALL,
}
const data = [
    {
        id: "1",
        title: "Help",
        description: "This description about help",
        status: STATUS.DONE,
    },
    {
        id: "2",
        title: "News",
        description: "This description all about news",
        status: STATUS.TODO,
    },
    {
        id: "3",
        title: "Interestings",
        description: "This description about interestings",
        status: STATUS.TODO,
    },
];
const forAdd = {
    id: "4",
    title: "Interestings",
    description: "This description about interestings",
    status: STATUS.DONE,
};

const forDelete = "2"


const dataForDelete = [
    {
        id: "1",
        title: "Help",
        description: "This description about help",
        status: STATUS.DONE,
    },
    {
        id: "3",
        title: "Interestings",
        description: "This description about interestings",
        status: STATUS.TODO,
    },
];

const forUpdate = {
    id: "2",
    title: "News News",
    description: "This description all about news This description all about news",
    status: STATUS.DONE
}

const dataForUpdate = [
    {
        id: "1",
        title: "Help",
        description: "This description about help",
        status: STATUS.DONE,
    },
    {
        id: "2",
        title: "News News",
        description: "This description all about news This description all about news",
        status: STATUS.DONE
    },
    {
        id: "3",
        title: "Interestings",
        description: "This description about interestings",
        status: STATUS.TODO,
    },
];

describe('data - slice', () => {
    it('action - setTodo', () => {
        expect(reducer({ todos: initialState }, actions.setTodo(data))).toEqual(
            { todos: { ...initialState, data: data, } });
    });
    it('action - addTodo', () => {
        expect(reducer({ todos: { ...initialState, data: data } }, actions.addTodo(forAdd))).toEqual(
            { todos: { ...initialState, data: [forAdd, ...data], } });
    });
    it('action - deleteTodo', () => {
        expect(reducer({ todos: { ...initialState, data: data } }, actions.deleteTodo(forDelete))).toEqual(
            { todos: { ...initialState, data: dataForDelete, } });
    });
    it('action - updateTodo', () => {
        expect(reducer({ todos: { ...initialState, data: data } }, actions.updateTodo(forUpdate))).toEqual(
            { todos: { ...initialState, data: dataForUpdate, } });
    });
    it('action - changeCheckbox', () => {
        expect(reducer({ todos: initialState }, actions.changeCheckbox(FILTER_STATUS.DONE))).toEqual(
            { todos: { ...initialState, checkbox: FILTER_STATUS.DONE, } });
    });
    it('selector - getData', () => {
        const dataSelector = objectSlice.selectors({ todos: { ...initialState, data: data, } });
        expect(dataSelector.getData()).toEqual(data)
    });
    it('selector - getTotal', () => {
        const dataSelector = objectSlice.selectors({ todos: { ...initialState, data: data, } });
        expect(dataSelector.getTotal()).toEqual(data.length)
    });
});