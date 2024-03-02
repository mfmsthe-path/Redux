// App.js
import React from 'react';
import { Provider } from 'react-redux';
import { createStore } from 'redux';
import reducer from './Reducer';
import AddTask from './AddTask';
import TaskList from './TaskList';
const store = createStore(reducer);

const App = () => {
  return (
    <Provider store={store}>
      <div>
        <h1>ToDo App</h1>
        <AddTask />
        <TaskList />
      </div>
    </Provider>
  );
};

export default App;


