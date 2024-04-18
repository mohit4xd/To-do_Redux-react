// TaskInput.js
import React, { useState } from 'react';
import { useDispatch } from 'react-redux';
import { addTask } from '../store/actions';


function TaskInput() {
  const [task, setTask] = useState('');
  const dispatch = useDispatch();

  const handleChange = (e) => {
    setTask(e.target.value);
  };

  const handleSubmit = () => {
    if (task.trim() !== '') {
      dispatch(addTask(task));
      setTask('');
    }
  };

  const handleKeyPress = (e) => {
    if (e.key === 'Enter') {
      handleSubmit();
    }
  };

  return (
    <div>
      <input
      className=' bg-slate-100 h-10 w-52 pl-5 rounded-2xl color border-2 border-rose-600' 
        type="text"
        value={task}
        onChange={handleChange}
        onKeyPress={handleKeyPress}
        placeholder="Add a new task"
      />
      <button onClick={handleSubmit}
      className=' bg-slate-300 h-9 ml-6 pl-3 pr-3 hover:bg-slate-400  rounded-2xl border-2 border-black'
      >Add Task</button>
    </div>
  );
}

export default TaskInput;
