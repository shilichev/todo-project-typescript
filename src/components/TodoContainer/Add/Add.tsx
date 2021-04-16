import classes from "./Add.module.css";

interface Props {
  addTodo: (id: string) => any;
}
const Add = ({addTodo}: Props) => {
  const addNewTodo = (id: string) => {
    addTodo(id);
  };

  const createRandomId = () => {
    let randomId = String(Math.round(Math.random() * (9999 - 1000) + 1000));
    addNewTodo(randomId);
  };

  return (
    <div className={classes.add}>
      <input></input>
      <button onClick={createRandomId}>
        <strong>ADD</strong>
      </button>
    </div>
  );
};

export default Add;
