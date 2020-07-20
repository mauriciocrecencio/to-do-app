import React from "react";

const EditTodoList = (props) => {
  const { removeTodo, handleCompleted, todoList, input, handleSubmit, setInput } = props;
  console.log(todoList);

  return (
    <>
      <h5>Adicione ou edite uma tarefa!</h5>
      <div style={{ display: "flex" }}>
        <form style={{ display: "flex" }} onSubmit={(e) => handleSubmit(e)}>
          <input placeholder="Digite sua tarefa" value={input} onChange={(e) => setInput(e.target.value)}></input>
        </form>

        <button onClick={(e) => handleSubmit(e)}> Adicionar </button>
      </div>
      <ul>
        {todoList.map((itemList, index) => {
          return (
            <div key={index} style={{ display: "flex" }}>
              <li style={itemList.completed === true ? { textDecoration: "line-through" } : null}>{itemList.item}</li> {/* <span style={{ display: "flex" }}> */}
              {itemList.completed === false ? (
                <button style={{ marginLeft: "10px" }} onClick={() => handleCompleted(index)}>
                  Concluída
                </button>
              ) : (
                <button style={{ marginLeft: "10px" }} onClick={() => handleCompleted(index)}>
                  Reverter
                </button>
              )}
              <button style={{ marginLeft: "10px" }} onClick={() => removeTodo(index)}>
                Excluir
              </button>
            </div>
          );
        })}
      </ul>
    </>
  );
};

export default EditTodoList;
