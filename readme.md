# React-Redux-To-Do-List

1. redux

```bash
yarn add redux
```

2. react-redux

```bash
yarn add react-redux
```

3. main.tsx

   - react-redux 의 Provider 컴포넌트를 사용하여 App 컴포넌트 로드
   - Provider의 props로 store 값을 전달해주기 위해 store.ts생성

4. reducers/store.ts

   - redux의 createStore를 이용해 store 생성 후 export

5. reducers/reducer.ts

   - 페이지 전체에서 사용할 state 생성
   - state값을 초기화 할 수 있는 initialState 상수 생성
   - state 값을 변화할 수 있는 reducer 생성
     - switch문을 이용해 type에 따라 다르게 동작하도록 설계
     - reducer에서 사용할 type정의

6. reducers/type.ts

   - reducer에서 사용할 type정의

7. reducers/actions.ts

   - state 데이터를 변경하는 함수의 모음
   - todo list에서는 addTodo, deleteTodo, completeTodo 작성

8. actions에서 정의한 함수들을 적절한 위치에서 dispatch를 이용해 사용
   - store 내부의 state값을 변화하기 위해선 actions를 사용해야 함
   - 그 actions를 store의 reducer에 전달해주는 역할을 하는 함수가 dispatch
   - 고로, dispatch -> action -> reducer -> state변화

## common style

- button

```css
border: none;
background-color: transparent;
cursor: pointer;
```
