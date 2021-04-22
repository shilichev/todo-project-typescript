import classes from "./Add.module.css";
import {
  addTodoThunkCreate,
  setValueThunkCreate,
} from "../../../store/container_todos/thunk";
import { connect } from "react-redux";

import objectSlice from "../../../store/container_todos/slice";

interface INewTODO {
  id: string;
  title: string;
  description: string;
  status: "DONE" | "TODO";
}
interface IPropsDispatchToState {
  value: any;
}

interface IPropsDispatch {
  addTodo: (params: INewTODO) => void;
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
      title: value.getValue() || "New Title",
      description: "New Description",
      status: "TODO",
    });
  };

  const createRandomId = () => {
    let randomId = String(Math.round(Math.random() * (9999 - 1000) + 1000));
    addNewTodo(randomId);
  };

  return (
    <div className={classes.add}>
      <input value={value.getValue()} onChange={onChangeText}></input>
      <button onClick={createRandomId}>
        <strong>ADD</strong>
      </button>
    </div>
  );
};
const mapStateToProps = (state: any): IPropsDispatchToState => {
  return {
    value: objectSlice.selectors(state),
  };
};

const mapDispatchToProps = (dispatch: any): IPropsDispatch => ({
  addTodo: (params: INewTODO) => dispatch(addTodoThunkCreate(params)),
  setValue: (params: string) => dispatch(setValueThunkCreate(params)),
});
export default connect(mapStateToProps, mapDispatchToProps)(Add);
