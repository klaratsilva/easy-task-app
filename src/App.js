import React from "react";
import { Route, Redirect, Switch } from "react-router-dom";

//components
import LoginForm from "./components/loginForm";
//import Logout from "./components/logout";
import Tasks from "./components/tasks";
import TaskForm from "./components/taskForm";
import NavBar from "./components/navBar";
import NotFound from "./components/notFound";
import RegisterForm from "./components/registerForm";

//others
import "./App.css";

function App() {
  return (
    <>
      <NavBar />
      <main className="container">
        <Switch>
          <Route path="/login" component={LoginForm} />
          <Route path="/register" component={RegisterForm} />
          <Route path="/tasks/:id" component={TaskForm} />
          <Route path="/tasks" component={Tasks} />

          <Route path="/not-found" component={NotFound} />
          <Redirect from="/" exact to="/tasks" />
          <Redirect to="/not-found" />
        </Switch>
      </main>
    </>
  );
}

export default App;
