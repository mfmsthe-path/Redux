// TaskList.js
import React from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { toggleTask } from './Action';

const TaskList = () => {
  const tasks = useSelector(state => state.tasks);
  const dispatch = useDispatch();

  const handleToggle = (id) => {
    dispatch(toggleTask(id));
  };

  return (
    <div>
      <h2>Task List</h2>
      <ul>
        {tasks.map(task => (
          <li key={task.id} onClick={() => handleToggle(task.id)} style={{ textDecoration: task.isDone ? 'line-through' : 'none' }}>
            {task.description}
          </li>
        ))}
      </ul>
    </div>
  );
};

export default TaskList;
