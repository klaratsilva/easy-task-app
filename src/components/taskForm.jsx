import React from "react";

const TaskForm = ({ match, history }) => {
  return (
    <div>
      <h1>Task Form : {match.params.id} </h1>
      <button
        className="btn btn-primary"
        onClick={() => {
          history.push("/tasks");
        }}
      >
        {" "}
        Save
      </button>
    </div>
  );
};

export default TaskForm;
