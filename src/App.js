import React from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';
import Task from './components/Task';
import TasksList from './components/TasksList';
import TasksPage from './components/TasksPage';

function App() {
  return (
    <>
      <h2 className= 'display-4'>Jordan</h2>
      <Task/>
      <TasksList/>
      <TasksPage/>
    </>
  );
}

export default App;
