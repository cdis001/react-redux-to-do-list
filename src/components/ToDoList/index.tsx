import react, { useState } from "react";
import styled from "styled-components";
import { useDispatch, useSelector } from "react-redux";

import ToDo from "../ToDo";

const ToDoListBox = styled.ul`
  width: 350px;
  list-style: none;
  margin: 0px;
  padding: 0px;
`;

function ToDoList() {
  const toDos = useSelector((state) => state.toDos) || [];
  return (
    <ToDoListBox>
      {toDos.map((data) => (
        <ToDo key={data.id} {...data} />
      ))}
    </ToDoListBox>
  );
}

export default ToDoList;
