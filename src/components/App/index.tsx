import React, { useState } from "react";
import styled from "styled-components";
import { useDispatch } from "react-redux";

import ToDoList from "../ToDoList";
import { addTodo } from "../../reducers/actions";

const AppContainer = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
`;

const Title = styled.h1`
  font-size: xxx-large;
`;

const AddToDo = styled.div`
  width: 360px;
  height: 30px;
  box-sizing: border-box;
  margin: 0 40px 6px;
  padding-right: 8px;

  display: flex;
  flex-direction: row;
  align-items: center;

  border: 1px solid #dbdbdb;
  border-radius: 3px;
  background-color: #fafafa;

  & > input {
    padding: 4px 8px;
    width: 100%;

    border: none;
    background-color: transparent;
    font-size: 18px;
  }

  & > input:focus {
    border: none;
    outline: none !important;
  }
`;

function App() {
  const [text, setText] = useState("");
  const dispatch = useDispatch();

  const addTodoToState = (e) => {
    e.preventDefault();
    dispatch(addTodo(text));
    setText("");
  };
  return (
    <AppContainer>
      <h1>To Do List</h1>
      <AddToDo>
        <input
          value={text}
          onChange={(e) => setText(e.target.value)}
          onKeyUp={(e) => {
            if (window.event.keyCode === 13) addTodoToState(e);
          }}
        />
        <button onClick={addTodoToState}>⮐</button>
      </AddToDo>
      <ToDoList />
    </AppContainer>
  );
}

export default App;
