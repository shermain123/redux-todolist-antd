import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import TodoList from './reactRedux/todolist'
import { Provider } from "react-redux";
import store from './reactRedux/store/index'

const App =(
  <Provider store={store} >
    <TodoList />
  </Provider>
);

ReactDOM.render(
  
    App,
 
  document.getElementById('root')
);


