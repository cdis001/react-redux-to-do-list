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

## Additional

### 새로고침해도 store 데이터가 초기화 되지 않게 변경

1. redux-persist

```bash
yarn add redux-persist
```

2. reducers/store.ts

```javascript
import { createStore } from "redux";
import { persistStore, persistReducer } from "redux-persist";
import storage from "redux-persist/lib/storage"; //local storage

import reducer from "./reducer";

const persistConfig: any = {
  key: "root",
  storage,
};

const persistedReducer = persistReducer(persistConfig, reducer);

export const store = createStore(persistedReducer);
export const persistor = persistStore(store);
```

- 기존에 단순히 createStore(reducer) 로 정의했던 store를 redux-persist를 이용해 재정의
- persistConfig를 이용해 설정 정의
- persistReducer() 함수를 이용해 persistConfig와 reducer를 합쳐서 store를 만들어줌
- main에서 쓸 PersistGate의 설정에 필요한 persistor도 새로 만든 store를 이용해 만들어줌

3. main.tsx

```javascript
import React from "react";
import ReactDOM from "react-dom/client";
import { Provider } from "react-redux";
import { PersistGate } from "redux-persist/integration/react";

import App from "./components/App";
import { store, persistor } from "./reducers/store";
import "./main.css";

ReactDOM.createRoot(document.getElementById("root") as HTMLElement).render(
  <Provider store={store}>
    <PersistGate loading={null} persistor={persistor}>
      <App />
    </PersistGate>
  </Provider>
);

```

- PersistGate를 이용해 App 컴포넌트를 감싸줌
- PersistGate에 "loading" 프로퍼티에 로딩중일 때의 컴포넌트 추가 가능

- PersistGate는 state가 변경될 때, redux에 저장할 때 까지 UI 랜더링을 지연시킴
- persistor는 state의 변경 여부를 판단한 뒤, 변경 되었다면 Promise를 사용하여 redux에 저장하고 데이터를 랜더링 하는 듯?
- 즉, redux와 store를 동기화 함
- 굳이 persistor를 사용하는 이유는? -> react가 CSR이라서?

## common style

- button

```css
border: none;
background-color: transparent;
cursor: pointer;
```
