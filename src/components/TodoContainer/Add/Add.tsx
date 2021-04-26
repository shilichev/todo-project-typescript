import classes from "./Add.module.css";
import {
  addTodoThunkCreate,
  setValueThunkCreate,
} from "../../../store/container_todos/thunk";
import { connect } from "react-redux";

import objectSlice from "../../../store/container_todos/slice";
import { ITodoObject, STATUS } from "../../../data/types";

interface IPropsDispatchToState {
  value: any;
}

interface IPropsDispatch {
  addTodo: (params: ITodoObject) => void;
  setValue: (params: string) => void;
}

const Add = ({
  addTodo,
  setValue,
  value,
}: IPropsDispatch & IPropsDispatchToState) => {
  const onChangeText = (event: any) => {
    setValue(event.target.value);
  };

  const addNewTodo = (id: string) => {
    addTodo({
      id: id,
      title: value || "New Title",
      description: "New Description",
      status: STATUS.TODO,
    });
  };

  const createRandomId = () => {
    let randomId = String(Math.round(Math.random() * (9999 - 1000) + 1000));
    addNewTodo(randomId);
  };

  return (
    <div className={classes.add}>
      <input value={value} onChange={onChangeText}></input>
      <button onClick={createRandomId}>
        <strong>ADD</strong>
      </button>
    </div>
  );
};
const mapStateToProps = (state: any): IPropsDispatchToState => {
  const valueSlice = objectSlice.selectors(state)
  return {
    value: valueSlice.getValue(),
  };
};

const mapDispatchToProps = (dispatch: any): IPropsDispatch => (
  {
  addTodo: (params: ITodoObject) => dispatch(addTodoThunkCreate(params)),
  setValue: (params: string) => dispatch(setValueThunkCreate(params)),
});
export default connect(mapStateToProps, mapDispatchToProps)(Add);
