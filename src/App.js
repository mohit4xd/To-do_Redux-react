// App.js
import React from 'react';
import { Provider } from 'react-redux';
import store from './store/store';
import TaskInput from './components/TaskInput';
import TaskList from './components/TaskList';
import './App.css';

function App() {
  return (
    <Provider store={store}>
      <div className="App ">
        <h1 className='bg-slate-300 mb-4'>To-Do List</h1>
        <TaskInput />
        <TaskList />
      </div>
    </Provider>
  );
}

export default App;
