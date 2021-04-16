import classes from "../Todo.module.css";
interface Props {
  id: string;
  deleteTodo: (id: string) => any;
}

const Delete = ({ id, deleteTodo }: Props) => {
  return (
    <div className={classes.item}>
      <button
        onClick={() => {
          deleteTodo(id);
        }}
      >
        {/* <i className="fas fa-trash-alt" /> */}
      </button>
    </div>
  );
};

export default Delete;
