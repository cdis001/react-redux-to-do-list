import { ADD_TODO, DELETE_TODO, COMPLETE_TODO } from "./types";

interface ToDos {
  id: number;
  contents: string;
  conpleted: boolean;
}

interface State {
  toDos: ToDos[];
}

const initialState = {
  toDos: [
    {
      id: 1,
      contents: "make To Do List",
      completed: true,
    },
  ],
};

export default function reducer(state: State = initialState, action) {
  switch (action.type) {
    case ADD_TODO:
      return {
        toDos: [
          ...state.toDos,
          {
            id:
              state.toDos.reduce(
                (maxId, todo) => Math.max(todo.id, maxId),
                -1
              ) + 1,
            contents: action.text,
            completed: false,
          },
        ],
      };

    case DELETE_TODO:
      return { toDos: state.toDos.filter((todo) => todo.id !== action.id) };

    case COMPLETE_TODO:
      return {
        toDos: state.toDos.map((todo) =>
          todo.id === action.id ? { ...todo, completed: !todo.completed } : todo
        ),
      };
    default:
      return state;
  }
}
