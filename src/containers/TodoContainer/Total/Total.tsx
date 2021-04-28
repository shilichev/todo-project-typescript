import { connect } from "react-redux";
import objectSlice from "../../../store/container_todos/slice";
import classes from "./Total.module.css";
import { changeCheckboxThunkCreate } from "../../../store/container_todos/thunk";

// interface Props {
//   filterData: (params: any) => any;
// }
import { FILTER_STATUS } from "../../../data/types";

interface IPropsDispatchToState {
  total: number;
}
interface IPropsDispatch {
  changeCheckbox: (params: any) => void;
}

const Total = ({
  total,
  changeCheckbox,
}: IPropsDispatchToState & IPropsDispatch) => {
  const filterTodo = (e: any) => {
    changeCheckbox(e.target.value);
  };

  return (
    <div className={classes.total}>
      Total:{total}
      <button value={FILTER_STATUS.DONE} onClick={filterTodo}>{/* pushing value which must filtered */}
        Active
      </button>
      <button value={FILTER_STATUS.TODO} onClick={filterTodo}>
        Done
      </button>
      <button value={FILTER_STATUS.ALL} onClick={filterTodo}>
        ALL
      </button>
    </div>
  );
};

const mapStateToProps = (state: any): IPropsDispatchToState => {
  const dataSelector = objectSlice.selectors(state);
  return {
    total: dataSelector.getTotal(),
  };
};
const mapDispatchToProps = (dispatch: any): IPropsDispatch => ({
  changeCheckbox: (params: FILTER_STATUS) =>
    dispatch(changeCheckboxThunkCreate(params)),
});

export default connect(mapStateToProps, mapDispatchToProps)(Total);
