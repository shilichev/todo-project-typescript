import { useState } from "react";

import classes from "../../Todo/Todo.module.css";

interface Props {
  value: string;
  updateField: (params: string) => any;
}

const UpdateTitle = ({  value, updateField }: Props) => {
  const [field, setField] = useState(value);

  const handleKeyDown = (e: any) => {
    switch (e.key || e.target.value) {
      case "Enter":
      case "Confirm":
        updateField(field);
        break;
      case "Escape":
      case "Cancel":
        updateField(value);
        break;
    }
  };
  const control = (e: any) => {
    setField(e.target.value);
  };
  return (
    <div>
      <label>
          <textarea
            value={field}
            onChange={control}
            onKeyDown={handleKeyDown}
          />
      </label>
      <div className={classes.buttons}>
        <button value="Cancel" onClick={handleKeyDown}>
          <i className="fas fa-window-close  "></i>
          Cancel
        </button>
        <button value="Confirm" onClick={handleKeyDown}>
          <i className="fas fa-check-square"></i>
          Confirm
        </button>
      </div>
    </div>
  );
};

export default UpdateTitle;
