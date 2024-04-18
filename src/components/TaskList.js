// TaskList.js
import React from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { deleteTask, toggleTask } from '../store/actions';

function TaskList() {
  const tasks = useSelector(state => state.tasks);
  const dispatch = useDispatch();

  const handleDelete = (id) => {
    dispatch(deleteTask(id));
  };

  const handleToggle = (id) => {
    dispatch(toggleTask(id));
  };

  return (
    <ul className='mt-8 bg-neutral-400 text-red-600 font-serif text-2xl '>
      {tasks.map(task => (
        <li key={task.id} className='mt-3 mb-2'>
          <span style={{ textDecoration: task.completed ? 'line-through ' : 'none ' }}>
            {task.text}
          </span>
          <button
          className=' bg-slate-300 h-9 ml-6 pl-3 pr-3 text-black text-xl hover:bg-slate-400  rounded-2xl border-2 border-black'
           onClick={() => handleToggle(task.id)}>
            {task.completed ? 'Undo' : 'Complete'}
          </button>
          <button
          className=' bg-slate-300 h-9 ml-6 pl-3 pr-3 text-black text-xl hover:bg-slate-400  rounded-2xl border-2 border-black'
           onClick={() => handleDelete(task.id)}>Delete</button>
        </li>
      ))}
    </ul>
  );
}

export default TaskList;
