import Delete from "./Delete/Delete";
import classes from "./Todo.module.css";

interface Props {
  title: string;
  id: string;
  description: string;
  status: string;
  deleteTodo: (id: string) => any;
}
const Todo = ({ title, id, description, status, deleteTodo }: Props) => (
  <div className={classes.box}>
    <Delete id={id} deleteTodo={deleteTodo} />
  </div>
);

export default Todo;
