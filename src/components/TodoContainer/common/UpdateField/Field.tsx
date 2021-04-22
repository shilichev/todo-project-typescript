import { useEffect, useState } from "react";
import classes from "../../Todo/Todo.module.css";
import UpdateField from "./UpdateField";
import { updateTodoThunkCreate } from "../../../../store/container_todos/thunk";
import { connect } from "react-redux";

interface Props {
  id: string;
  scale: string;
  field: string;
}
interface IPropsDispatch {
  updateTodo: (params: any) => void;
}

const Field = ({ id, scale, field, updateTodo }: Props & IPropsDispatch) => {
  const [update, setUpdate] = useState(false);
  const [status, setStatus] = useState(Boolean);

  const startField = () => {
    setUpdate(!update);
  };

  const updateField = (field: string) => {
    startField();
    updateTodo({ id, [scale]: field });
  };
  const setUpdateField = () => {
    startField();
  };

  useEffect(() => {
    if (scale === "title") {
      setStatus(true);
    } else if (scale === "description") {
      setStatus(false);
    }
  }, [scale]);

  return update ? (
    <div className={classes.item}>
      <UpdateField status={status} value={field} updateField={updateField} />
    </div>
  ) : (
    <div className={classes.item}>
      <div className={scale} onClick={setUpdateField}>
        <label>{field}</label>
      </div>
    </div>
  );
};

const mapDispatchToProps = (dispatch: any): IPropsDispatch => ({
  updateTodo: (params: any) => dispatch(updateTodoThunkCreate(params)),
});

export default connect(null, mapDispatchToProps)(Field);
