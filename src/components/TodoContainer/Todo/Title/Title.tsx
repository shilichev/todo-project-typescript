import { useState } from "react";
import classes from "../../Todo/Todo.module.css";
import UpdateTitle from "./UpdateTitle";
import { updateTodoThunkCreate } from "../../../../store/container_todos/thunk";
import { connect } from "react-redux";

interface Props {
  id: string;
  title: string;
}
interface IPropsDispatch {
  updateTodo: (params: any) => void;
}

const Title = ({ id,  title, updateTodo }: Props & IPropsDispatch) => {
  const [update, setUpdate] = useState(false);

  const startField = () => {
    setUpdate(!update);
  };

  const updateTitle = (title: string) => {
    startField();
    updateTodo({ id, title: title });
  };

  return update ? (
    <div className={classes.item}>
      <UpdateTitle  value={title} updateField={updateTitle} />
    </div>
  ) : (
    <div className={classes.item}>
      <div className={title} onClick={startField}>
        <label>{title}</label>
      </div>
    </div>
  );
};

const mapDispatchToProps = (dispatch: any): IPropsDispatch => ({
  updateTodo: (params: any) => dispatch(updateTodoThunkCreate(params)),
});

export default connect(null, mapDispatchToProps)(Title);
