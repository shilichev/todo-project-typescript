import classes from "./TodoContainer.module.css";
import Add from "./Add/Add";
import Todo from "./Todo/Todo";
import { useEffect } from "react";
import { connect } from "react-redux";

import dataSlice from "../../store/container_todos/slice";
import {
  setTodoThunkCreate,
  addTodoThunkCreate,
  deleteTodoThunkCreate,
} from "../../store/container_todos/thunk";


const TodoContainer = (props: any) => {
  let todos: any[] = props.data.getData();

  useEffect(() => {
    props.setTodo();
  }, []);

  const addNewTodo = (id: string) => {
    props.addTodo({ id: id, title: "1", description: "1", status: "TODO" });
  };
  const deleteTodoById = (id: string) => {
    props.deleteTodo(id);
  };
  return (
    <div className={classes.container}>
      <Add addTodo={addNewTodo} />
      {todos.map((todo) => (
        <Todo
          key={todo.id}
          title={todo.title}
          id={todo.id}
          status={todo.status}
          description={todo.description}
          deleteTodo={deleteTodoById}
        />
      ))}
    </div>
  );
};
const mapStateToProps = (state: any) => {
  return {
    data: dataSlice.selectors(state),
  };
};

const mapDispatchToProps = (dispatch: any) => ({
  addTodo: (params: any) => dispatch(addTodoThunkCreate(params)),
  setTodo: () => dispatch(setTodoThunkCreate()),
  deleteTodo: (params: any) => dispatch(deleteTodoThunkCreate(params)),
});

export default connect(mapStateToProps, mapDispatchToProps)(TodoContainer);
