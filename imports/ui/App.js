import React, { Component } from 'react';
import TaskComponent from './ComponentTask.js';
import { withTracker } from 'meteor/react-meteor-data';
import { Tasks } from '../api/tasks';
import ReactDOM from 'react-dom';

class App extends Component {

  constructor(props){
    super(props);
  }
  
  handleSubmitCreateTask(event) {
        event.preventDefault();
        // Find the text field via the React ref
        const text = ReactDOM.findDOMNode(this.refs.textInput).value.trim();
        Tasks.insert({
          text,
          createdAt: new Date(), // current time
        });
        // Clear form
        ReactDOM.findDOMNode(this.refs.textInput).value = '';
  }

  renderTasks() {
    return this.props.tasks.map((task) => (
        <TaskComponent key={task._id} task={task} />
    ));
  }
  
  render() {
    return (
      <div className="container">
        <header>
          <h1>Todo List</h1>
        </header>
        <form className="new-task" onSubmit={this.handleSubmitCreateTask.bind(this)} >
            <input
              type="text"
              ref="textInput"
              placeholder="Type to add new tasks"
            />
          </form>
        <ul>
          {this.renderTasks()}
        </ul>
      </div>
    );
  }
}

// withTracker is a function that accepts other function
export default withTracker(() => {
    return {
        // return Tasks from mongo db
        //tasks: Tasks.find({}).fetch(),
        tasks: Tasks.find({}, { sort: { createdAt: -1 } }).fetch(),
    };
})(App);
