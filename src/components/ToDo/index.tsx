import react, { useState } from "react";
import styled from "styled-components";

const ToDoEl = styled.li`
  display: flex;
  align-items: center;

  width: 350px;
  border-bottom: 1px solid #dbdbdb;
  padding: 10px 0;
  & > label {
    margin-left: 8px;
    width: 300px;
    padding-top: 5px;
  }

  &.completed > label {
    text-decoration: line-through;
    color: #aaa;
  }
`;
const ToggleCompletedBtn = styled.button`
  width: 25px;
  height: 25px;
  border: 1px solid #464646;
  border-radius: 50%;
  background-color: #fff;
  cursor: pointer;
  position: relative;

  &.completed {
    border: 2px solid #464646;
  }

  & > span {
    position: absolute;
    visibility: hidden;
  }

  &.completed > span {
    visibility: inherit;
    top: 0px;
    right: 2px;
    font-size: 12px;
  }
`;
const DeleteToDoBtn = styled.button`
  border: none;
  background-color: transparent;
  cursor: pointer;
`;

function ToDo({ id, contents, completed }) {
  //   const [isCompleted, setIsCompleted] = useState(completed);
  const [isCompleted, setIsCompleted] = useState(false);
  return (
    <ToDoEl className={`${isCompleted ? "completed" : null}`}>
      <ToggleCompletedBtn
        className={`${isCompleted ? "completed" : null}`}
        onClick={() => setIsCompleted(!isCompleted)}
      >
        <span>✔️</span>
      </ToggleCompletedBtn>
      <label>{contents}</label>
      <DeleteToDoBtn>✕</DeleteToDoBtn>
    </ToDoEl>
  );
}

export default ToDo;
