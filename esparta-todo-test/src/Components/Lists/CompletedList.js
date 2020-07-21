import React from "react";
const CompletedList = ({ todoList }) => {
  const completedTodos = todoList.filter((element) => element.completed === true);

  return (
    <div>
      <h5>{completedTodos.length <= 0 ? "Você ainda não completou nenhuma tarefa!" : "Tarefas já completadas"}</h5>

      <ul>
        {
          // Filter all item at Todo List that is COMPLETED
          completedTodos.map((itemList, index) => {
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

export default CompletedList;
