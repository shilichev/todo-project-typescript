import Delete from "./Delete/Delete";
import classes from "./Todo.module.css";
import Field from "../common/UpdateField/Field";
import Status from "./Status/Status";

interface Props {
  title: string;
  id: string;
  description: string;
  status: "TODO" | "DONE";
}
const Todo = ({ title, id, description, status }: Props) => (
  <div className={classes.box}>
    <Status id={id} status={status} />
    <Field field={title} id={id} scale="title" />
    <Field field={description} id={id} scale="description" />
    <Delete id={id} />
  </div>
);

export default Todo;
