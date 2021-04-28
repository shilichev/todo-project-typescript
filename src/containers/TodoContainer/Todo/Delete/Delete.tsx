import classes from "../Todo.module.css";
import { connect } from "react-redux";
import { deleteTodoThunkCreate } from "../../../../store/container_todos/thunk";

interface Props {
  id: string;
}

interface IPropsDispatch {
  deleteTodo: (arg0: any) => any;
}

const Delete = ({ id, deleteTodo }: Props & IPropsDispatch) => {
  const deleteTodoById = (id: string) => {
    deleteTodo(id);
  };
  return (
    <div
    
      onClick={() => {
        deleteTodoById(id);
      }}
    ></div>
  );
};

const mapDispatchToProps = (dispatch: any): IPropsDispatch => ({
  deleteTodo: (params: any) => dispatch(deleteTodoThunkCreate(params)),
});
export default connect(null, mapDispatchToProps)(Delete);
