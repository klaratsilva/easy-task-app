import React, { useState, useEffect } from "react";
import { getTasks } from "../services/fakeTaskService";
import { getTypes } from "../services/fakeTypeService";

import { paginate } from "../utils/paginate";
//import common
import ListGroup from "./common/listGroup";
import Pagination from "./common/pagination";
//import components
import TaskTable from "./taskTable";

function Tasks() {
  const [tasks, setTasks] = useState([]);
  const [types, setTypes] = useState([]);
  const [currentPage, setCurrentPage] = useState(1);
  const [pageSize, setPageSize] = useState(4);
  const [selectedType, setSelectedType] = useState("");

  //component did mount
  useEffect(() => {
    setTasks(getTasks());
  }, []);
  useEffect(() => {
    setTypes([{ _id: "", name: "All Categories" }, ...getTypes()]);
  }, []);

  //handllike

  //remove the tasks
  function handleRemove(_id) {
    const newTasks = tasks.filter((item) => item._id !== _id);
    setTasks(newTasks);
  }

  const handlePageChange = (page) => {
    setCurrentPage(page);
  };

  const handleTypeSelect = (type) => {
    setSelectedType(type);
    setCurrentPage(1);
  };

  //filter types
  const filteredTasks =
    selectedType && selectedType._id
      ? tasks.filter((m) => m.type._id === selectedType._id)
      : tasks;

  //set tasks per page
  const pageTasks = paginate(filteredTasks, currentPage, pageSize);

  //set message if there is not task
  if (pageTasks.length === 0) {
    return (
      <>
        <h5 className="mb-5">You have all the task done!</h5>
        <ListGroup
          items={types}
          onItemSelect={handleTypeSelect}
          selectedItem={selectedType}
        />
      </>
    );
  }

  return (
    <>
      <h5 className="mb-5">You have {filteredTasks.length} tasks</h5>
      <ListGroup
        items={types}
        onItemSelect={handleTypeSelect}
        selectedItem={selectedType}
      />
      <TaskTable tasks={pageTasks} onDelete={handleRemove} />
      <br></br>
      <Pagination
        itemsCount={filteredTasks.length}
        pageSize={pageSize}
        currentPage={currentPage}
        onPageChange={handlePageChange}
      />
    </>
  );
}

export default Tasks;
