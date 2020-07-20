import React from "react";
const CompletedList = (props) => {
  const { todoList } = props;
  const filtered = todoList.filter((element) => element.completed === true);

  console.log(todoList);
  return (
    <div>
      <h5>{filtered.length <= 0 ? "Você ainda não completou nenhuma tarefa!" : "Tarefas já completadas"}</h5>

      <ul>
        {
          // Filter all item at Todo List that is COMPLETED
          filtered.map((itemList, index) => {
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
