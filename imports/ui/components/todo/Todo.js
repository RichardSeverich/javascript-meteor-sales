// React
import React, { Component } from 'react';
import ReactDOM from 'react-dom';

// Meteor
import { Meteor } from 'meteor/meteor';
import { withTracker } from 'meteor/react-meteor-data';

// Mongo
import { Tasks } from '../../../api/tasks';

// Components
import Task from './Task.js';
import NavigationBar from './../nav-bar/NavigationBar';

// Others
import './Todo.css';


class Todo extends Component {

  constructor(props){
    super(props);
    this.handleCreateTask = this.handleCreateTask.bind(this);
  }
  
  handleCreateTask(event) {
        event.preventDefault();
        // Find the text field via the React ref
        const taskName = ReactDOM.findDOMNode(this.refs.inputTaskName).value.trim();
        Meteor.call('taskMethods.insert', taskName);
  }

  // Clasic
  /*renderTasks() { 
    return this.props.tasks.map((task) => ( 
        <Task key={task._id} task={task} />
    ));
  }*/

    renderTasks() { 
    return this.props.tasks.map(task => {
        const currentUser = this.props.currentUser;
        const currentUserId = currentUser && currentUser._id;
        const showPrivateButton = task.owner === currentUserId;
        return <Task key={task._id} task={task} showPrivateButton={showPrivateButton}/>
    });
   }
  
  render() {
    return ( <div>
        <NavigationBar></NavigationBar>
        <div className="ui centered grid container addtodo">
                <div className="six wide column">
                    <div className="ui fluid card">
                        <div className="margin-bottom-one"></div>
                            <h3 align="center">Todo List</h3>
                        <div className="margin-bottom-one"></div>
                        <div className="content" align="center">
                            <form className="ui form">
                                <div className="field">
                                    <label>Task Name</label>
                                    <input
                                        className="form-control"
                                        ref="inputTaskName" 
                                        minLength="3" 
                                        maxLength="24">
                                    </input>
                                </div>
                                <div className="text-center">
                                   <button onClick={this.handleCreateTask} type="button" className="ui basic button">
                                      <i className="save icon"></i>Add
                                    </button>
                                </div>
                            </form>
                        </div>
                    </div>
                </div>
          </div>
          <ul>
              {this.renderTasks()}
          </ul>
    </div>);
  }
}

// withTracker is a function that accepts other function
export default withTracker(() => {
    Meteor.subscribe('taskMethods'); // this should be the same taskMethods line 8
    return {
        // return Tasks from mongo db
        //tasks: Tasks.find({}).fetch(),
        tasks: Tasks.find({}, { sort: { createdAt: -1 } }).fetch(),
        currentUser: Meteor.user()
    };
})(Todo);
