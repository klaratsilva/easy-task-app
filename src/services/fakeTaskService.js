//import * as typeAPI from "./fakeTypeService";

const tasks = [
  {
    _id: "5b21ca3eeb7f6fbccd471815",
    title: "Do an app",
    type: { _id: "5b21ca3eeb7f6fbccd471818", name: "Work" },
    description: "use react and next",
    isCompleted: false,
  },
  {
    _id: "5b21ca3eeb7f6fbccd471816",
    title: "Flowers",
    type: { _id: "5b21ca3eeb7f6fbccd471818", name: "Work" },
    description: "use react and next",
    isCompleted: false,
  },

  {
    _id: "5b21ca3eeb7f6fbccd471817",
    title: "clean the house",
    type: { _id: "5b21ca3eeb7f6fbccd471816", name: "Graden" },
    description: "use react and next",
    isCompleted: true,
  },

  {
    _id: "5b21ca3eeb7f6fbccd471818",
    title: "meeting Alena",
    type: { _id: "5b21ca3eeb7f6fbccd471816", name: "Graden" },
    description: "udddnd next",
    isCompleted: false,
  },

  {
    _id: "5b21ca3eeb7f6fbccd471819",
    title: "Do shopping",
    type: { _id: "5b21ca3eeb7f6fbccd471816", name: "Graden" },
    description: "dddt",
    isCompleted: false,
  },

  {
    _id: "5b21ca3eeb7f6fbccd471895",
    title: "Do yoga",
    type: { _id: "5b21ca3eeb7f6fbccd471818", name: "Work" },
    description: "dddext",
    isCompleted: false,
  },
  {
    _id: "5b21ca3eeb7f6fbccd471820",
    title: "Do an app",
    type: { _id: "5b21ca3eeb7f6fbccd471816", name: "Graden" },
    description: "use react and next",
    isCompleted: false,
  },
  {
    _id: "5b21ca3eeb7f6fbccd471821",
    title: "Flowers",
    type: { _id: "5b21ca3eeb7f6fbccd471816", name: "Graden" },
    description: "use react and next",
    isCompleted: false,
  },
];

export function getTasks() {
  return tasks;
}

export function getTask(id) {
  return tasks.find((t) => t._id === id);
}

export function saveTask(task) {
  let taskInDb = tasks.find((t) => t._id === task._id) || {};
  taskInDb.title = task.title;
  taskInDb.type = task.type;
  taskInDb.description = task.description;
  taskInDb.isDone = task.isDone;

  if (!taskInDb._id) {
    taskInDb._id = Date.now();
    tasks.push(taskInDb);
  }

  return taskInDb;
}

export function deleteTask(id) {
  let taskInDb = tasks.find((t) => t._id === id);
  tasks.splice(getTasks.indexOf(taskInDb), 1);
  return taskInDb;
}
