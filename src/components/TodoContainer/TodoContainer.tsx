import classes from "./TodoContainer.module.css";
import Add from "./Add/Add";
import Todo from "./Todo/Todo";
import Total from "./Total/Total";

import { useEffect } from "react";
import { connect } from "react-redux";

import objectSlice from "../../store/container_todos/slice";
import { setTodoThunkCreate } from "../../store/container_todos/thunk";


interface IPropsDispatch {
  setTodo: () => void;
}
interface IPropsDispatchToState {
  data: any;
}

const TodoContainer = ({
  setTodo,
  data,
}: IPropsDispatch & IPropsDispatchToState) => {

  useEffect(() => {
    setTodo();
  }, [setTodo]);

  return (
    <div className={classes.container}>
      <Add />
      <Total />
      {data.map((todo: any) => (
      <Todo key={todo.id}
            title={todo.title}
            id={todo.id}
            status={todo.status}
            description={todo.description}
        />
      ))}
    </div>
  );
};

const mapStateToProps = (state: any): IPropsDispatchToState => {
  const dataSelector = objectSlice.selectors(state);
  return {
    data: dataSelector.getData(),
  };
};

const mapDispatchToProps = (dispatch: any): IPropsDispatch => ({
  setTodo: () => dispatch(setTodoThunkCreate()),
});

export default connect(mapStateToProps, mapDispatchToProps)(TodoContainer);
