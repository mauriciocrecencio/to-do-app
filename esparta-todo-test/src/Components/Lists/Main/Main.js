import React, { useState } from "react";
import TodosList from "../TodoList";
import EditTodoList from "../EditLists";
import { BrowserRouter as Router, Switch, Route, Link } from "react-router-dom";
import CompletedList from "../CompletedList";
import "./Main.css";

const Lists = () => {
  const [input, setInput] = useState("");
  const [todoList, setTodoList] = useState([]);
  const [page, setPage] = useState("/");

  const handleSubmit = (e) => {
    e.preventDefault();
    setTodoList([
      ...todoList,
      {
        item: input,
        completed: false,
      },
    ]);
    setInput("");
  };

  // Set object'sproperty "completed" TRUE or FALSE
  const handleCompleted = (indexTodo) => {
    const newList = todoList;
    newList[indexTodo].completed = !newList[indexTodo].completed;
    setTodoList([...newList]);
  };

  const removeTodo = (indexTodo) => {
    const newList = todoList;
    newList.splice(indexTodo, 1);
    setTodoList([...newList]);
  };

  return (
    <Router>
      <div>
        <Link style={page === "/" ? { color: "red" } : null} className="Links" to="/" onClick={() => setPage("/")}>
          Todas as tarefas
        </Link>
        <Link style={page === "/edit-list" ? { color: "red" } : null} className="Links" to="/edit-list" onClick={() => setPage("/edit-list")}>
          Editar tarefas
        </Link>
        <Link style={page === "/completed" ? { color: "red" } : null} className="Links" to="/completed" onClick={() => setPage("/completed")}>
          Tarefas completas
        </Link>
        <hr />
      </div>
      <Switch>
        <Route exact path="/edit-list">
          <EditTodoList removeTodo={removeTodo} setInput={setInput} handleSubmit={handleSubmit} input={input} handleCompleted={handleCompleted} todoList={todoList} />
        </Route>
        <Route exact path="/">
          <TodosList todoList={todoList} />
        </Route>
        <Route exact path="/completed">
          <CompletedList todoList={todoList} />
        </Route>
      </Switch>
    </Router>
  );
};

export default Lists;
