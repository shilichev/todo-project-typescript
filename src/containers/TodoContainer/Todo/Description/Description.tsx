import { useState } from "react";
import classes from "../../Todo/Todo.module.css";
import UpdateField from "./UpdateDescription";
import { updateTodoThunkCreate } from "../../../../store/container_todos/thunk";
import { connect } from "react-redux";

interface Props {
  id: string;
  description: string;
}
interface IPropsDispatch {
  updateTodo: (params: any) => void;
}

const Description = ({
  id,
  description,
  updateTodo,
}: Props & IPropsDispatch) => {
  const [update, setUpdate] = useState(false);

  const startField = () => {
    setUpdate(!update);
  };

  const updateField = (description: string) => {
    startField();
    updateTodo({ id, description: description });
  };

  return update ? (
    <div className={classes.item}>
      <UpdateField value={description} updateField={updateField} />
    </div>
  ) : (
    <div className={classes.item}>
      <div className={description} onClick={startField}>
        <label>{description}</label>
      </div>
    </div>
  );
};

const mapDispatchToProps = (dispatch: any): IPropsDispatch => ({
  updateTodo: (params: any) => dispatch(updateTodoThunkCreate(params)),
});

export default connect(null, mapDispatchToProps)(Description);
