import Delete from "./Delete/Delete";
import classes from "./Todo.module.css";
import Status from "./Status/Status";
import Description from "./Description/Description";
import { STATUS } from "../../../data/types";
import Title from "./Title/Title";

interface Props {
  title: string;
  id: string;
  description: string;
  status: STATUS;
}
const Todo = ({ title, id, description, status }: Props) => (
  <div className={classes.box}>
    <Status id={id} status={status} />
    <Title title={title} id={id} />
    <Description description={description} id={id} />
    <Delete id={id} />
  </div>
);

export default Todo;
