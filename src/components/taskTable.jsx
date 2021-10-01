import React from "react";
import { Link } from "react-router-dom";

const TaskTable = (props) => {
  const { tasks, onDelete, onToggle } = props;

  return (
    <table className="table">
      <thead>
        <tr>
          <th scope="col">Tasks</th>
          <th scope="col">Type</th>
          <th scope="col">Description</th>
          <th>Done</th>
        </tr>
      </thead>
      <tbody>
        {tasks.map((task, i) => (
          <tr key={task._id}>
            <td>{task.title}</td>
            <td>{task.type.name}</td>
            <td>{task.description}</td>
            <td onClick={() => onToggle(i)}>
              <button className="btn btn">
                {task.isCompleted === true ? "done" : "not done"}
              </button>
            </td>
            <td>
              <button className="btn btn-warning" type="button">
                <Link to={`/tasks/${task._id}`}> Edit</Link>
              </button>
            </td>
            <td>
              <button
                className="btn btn-danger"
                type="button"
                onClick={() => onDelete(task._id)}
              >
                Remove
              </button>
            </td>
          </tr>
        ))}
      </tbody>
    </table>
  );
};

export default TaskTable;
