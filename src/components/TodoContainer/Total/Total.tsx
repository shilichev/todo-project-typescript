import { connect } from "react-redux";
import dataSlice from "../../../store/container_todos/slice";
import classes from "./Total.module.css";

interface Props {
  filterData: (params: any) => any;
}

interface IPropsDispatchToState {
  data: any;
}

const Total = ({ data, filterData }: IPropsDispatchToState & Props) => {
  const sortActiveTodo = (e: any) => {
    filterData(e.target.value);
  };

  return (
    <div className={classes.total}>
      Total:{data.getData().length}
      <button value={"TODO"} onClick={sortActiveTodo}>
        Active
      </button>
      <button value={"DONE"} onClick={sortActiveTodo}>
        DONE
      </button>
      <button value={"ALL"} onClick={sortActiveTodo}>
        ALL
      </button>
    </div>
  );
};
const mapStateToProps = (state: any): IPropsDispatchToState => {
  return {
    data: dataSlice.selectors(state),
  };
};

export default connect(mapStateToProps)(Total);
