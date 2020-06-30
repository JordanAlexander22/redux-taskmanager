import React from 'react';
import {connect} from 'react-redux';
import 'bootstrap/dist/css/bootstrap.min.css';
import Task from './components/Task';
import TasksList from './components/TasksList';
import TasksPage from './components/TasksPage';

function App(props) {
  return (
    <>
      <h2 className= 'display-4'>Jordan</h2>
      <TasksPage tasks= {props.tasks}/>
    </>
  );
}

const mapStateToProps = (state) => {
  return{
    tasks: state.tasks
  };
};

export default connect(mapStateToProps)(App);
