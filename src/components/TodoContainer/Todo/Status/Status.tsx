import classes from "../Todo.module.css";
import { updateTodoThunkCreate } from "../../../../store/container_todos/thunk";
import { connect } from "react-redux";

interface IPropsDispatch {
  updateTodo: (params: any) => void;
}

interface Props {
  id: string;
  status: "TODO" | "DONE";
}

const Status = ({ id, status, updateTodo }: Props & IPropsDispatch) => {
  const toggleCheckboxChange = (e: any) => {
    if (e.target.checked) {
      updateTodo({ id, status: "DONE" });
    } else {
      updateTodo({ id, status: "TODO" });
    }
  };

  return (
    <div className={classes.item}>
      <div className={classes.checkbox}>
        <label>
          <input
            type="checkbox"
            checked={status === "DONE"}
            onChange={toggleCheckboxChange}
          />

          {status}
        </label>
      </div>
    </div>
  );
};

const mapDispatchToProps = (dispatch: any): IPropsDispatch => ({
  updateTodo: (params: any) => dispatch(updateTodoThunkCreate(params)),
});

export default connect(null, mapDispatchToProps)(Status);
