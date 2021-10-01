import http from "./httpService";

const apiEndpoint = "/tasks";

function taskUrl(id) {
  return `${apiEndpoint}/${id}`;
}

export function getTasks() {
  return http.get(apiEndpoint);
}

export function deleteTask(taskId) {
  return http.delete(taskUrl(taskId));
}

export function getTask(taskId) {
  return http.get(taskUrl(taskId));
}

export function saveTask(task) {
  if (task._id) {
    const body = { ...task };
    delete body._id;
    return http.put(taskUrl(task._id), body);
  }
  return http.post(apiEndpoint, task);
}
