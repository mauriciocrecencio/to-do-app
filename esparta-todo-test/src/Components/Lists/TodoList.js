import React from "react";

const TodosList = ({ todoList }) => {
  const incompleteTodos = todoList.filter((element) => element.completed === false);
  return (
    <div>
      <h5>{incompleteTodos.length <= 0 ? "Você não tem nenhuma tarefa pendente!" : "Tarefas a fazer"}</h5>

      <ul>
        {
          // Filter all item at Todo List that is NOT COMPLETED
          todoList
            .filter((element) => element.completed === false)
            .map((itemList, index) => {
              return (
                <div key={index}>
                  <li>{itemList.item}</li>
                </div>
              );
            })
        }
      </ul>
    </div>
  );
};

export default TodosList;
