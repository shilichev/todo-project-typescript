import { STATUS, FILTER_STATUS, IDataProcedureState } from '../../../data/types';
import { Thunk } from 'redux-testkit';
import { setTodoThunkCreate, addTodoThunkCreate, updateTodoThunkCreate, deleteTodoThunkCreate, changeCheckboxThunkCreate } from '../thunk';
import { actions } from '../slice';

const initialState: IDataProcedureState = {
    data: [],
    value: "",
    checkbox: FILTER_STATUS.ALL,
}
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
        description: "This description about interestings",
        id: "3",
        status: "TODO",
        title: "Interestings",
    },
];

const forAdd = {
    id: "4",
    title: "Interestings",
    description: "This description about interestings",
    status: STATUS.DONE,
};
describe('data - thunk', () => {
    beforeEach(() => {
        jest.resetAllMocks();
    });
    it('setTodoThunkCreate', () => {
        const dispatches = Thunk(setTodoThunkCreate).withState(initialState).execute();
        expect(dispatches.length).toBe(1);
        expect(dispatches[0].getAction()).toEqual(actions.setTodo(todoContainer));
    });
    it('addTodoThunkCreate', () => {
        const dispatches = Thunk(addTodoThunkCreate).withState(initialState).execute(forAdd);
        expect(dispatches.length).toBe(1);
        expect(dispatches[0].getAction()).toEqual(actions.addTodo(forAdd));
    });
    it('updateTodoThunkCreate', () => {
        const dispatches = Thunk(deleteTodoThunkCreate).withState(initialState).execute("2");
        expect(dispatches.length).toBe(1);
        expect(dispatches[0].getAction()).toEqual(actions.deleteTodo("2"));
    });
    it('updateTodoThunkCreate', () => {
        const dispatches = Thunk(updateTodoThunkCreate).withState(initialState).execute({ id: "2", title: "NEWNEW" });
        expect(dispatches.length).toBe(1);
        expect(dispatches[0].getAction()).toEqual(actions.updateTodo({ id: "2", title: "NEWNEW" }));
    });
    it('updateTodoThunkCreate', () => {
        const dispatches = Thunk(changeCheckboxThunkCreate).withState(initialState).execute(FILTER_STATUS.DONE);
        expect(dispatches.length).toBe(1);
        expect(dispatches[0].getAction()).toEqual(actions.changeCheckbox(FILTER_STATUS.DONE));
    });
});
