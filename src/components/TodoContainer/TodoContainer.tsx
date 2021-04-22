import classes from "./TodoContainer.module.css";
import Add from "./Add/Add";
import Todo from "./Todo/Todo";
import { useEffect, useState } from "react";
import { connect } from "react-redux";

import objectSlice from "../../store/container_todos/slice";
import { setTodoThunkCreate } from "../../store/container_todos/thunk";
import Total from "./Total/Total";


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
  const [todos, setTodos] = useState([]);
  const [filter, setFilter] = useState("");
  // let todos: any[] = data.getData();

  useEffect(() => {
    setTodo();
  }, [setTodo]);

  useEffect(() => {
    setTodos(data.getData(filter));
  }, [filter, data]);

  const filterData = (params: string) => {
    setFilter(params);
  };

  return (
    <div className={classes.container}>
      <Add />
      <Total filterData={filterData} />
      {todos.map((todo: any) => (
        <Todo
          key={todo.id}
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
  return {
    data: objectSlice.selectors(state),
  };
};

const mapDispatchToProps = (dispatch: any): IPropsDispatch => ({
  setTodo: () => dispatch(setTodoThunkCreate()),
});

export default connect(mapStateToProps, mapDispatchToProps)(TodoContainer);
