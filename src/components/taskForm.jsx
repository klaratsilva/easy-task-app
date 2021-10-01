import React from "react";
import Joi from "joi-browser";
import Form from "./common/form";
import { getTask, saveTask } from "../services/taskService";
import { getTypes } from "../services/typeService";

class TaskForm extends Form {
  state = {
    data: {
      title: "",
      typeId: "",
      description: "",
    },
    types: [],
    errors: {},
  };

  schema = {
    _id: Joi.string(),
    title: Joi.string().required().label("Title"),
    typeId: Joi.string().required().label("Type"),
    description: Joi.string().required().max(200).label("Description"),
  };

  async populateTypes() {
    //populating genre
    const { data: types } = await getTypes();
    this.setState({ types });
  }

  async populateTasks() {
    //populating movie
    try {
      const taskId = this.props.match.params.id;
      if (taskId === "new") return;
      const { data: task } = await getTask(taskId);
      this.setState({ data: this.mapToViewModel(task) });
    } catch (ex) {
      if (ex.response && ex.response.status === 404) {
        this.props.history.replace("/not-found");
      }
    }
  }

  async componentDidMount() {
    await this.populateTypes();
    await this.populateTasks();
  }

  mapToViewModel(task) {
    return {
      _id: task._id,
      title: task.title,
      typeId: task.type._id,
      description: task.description,
    };
  }

  doSubmit = async () => {
    await saveTask(this.state.data);

    this.props.history.push("/tasks");
  };

  render() {
    return (
      <div>
        <h1>New Task</h1>
        <form onSubmit={this.handleSubmit}>
          {this.renderInput("title", "Title")}
          {this.renderSelect("typeId", "Type", this.state.types)}
          {this.renderInput("description", "Description")}
          {this.renderButton("Save")}
        </form>
      </div>
    );
  }
}

export default TaskForm;
