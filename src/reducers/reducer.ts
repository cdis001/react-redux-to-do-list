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
    default:
      return state;
  }
}
