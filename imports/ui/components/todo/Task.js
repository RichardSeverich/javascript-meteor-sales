import React, { Component } from 'react';
//import { Tasks } from '../../../api/tasks';
import './Task.css';
import classnames from 'classnames';

// Task component - represents a single todo item
export default class Task extends Component {
  toggleChecked() {
    // Set the checked property to the opposite of its current value
    /*Tasks.update(this.props.task._id, {
      $set: { checked: !this.props.task.checked },
    });*/
    Meteor.call('taskMethods.setChecked', this.props.task._id, !this.props.task.checked);
  }
  deleteThisTask() {
    //Tasks.remove(this.props.task._id);
    Meteor.call('taskMethods.remove', this.props.task._id);
  }
  // private
  togglePrivate() {
    Meteor.call('taskMethods.setPrivate', this.props.task._id, ! this.props.task.private);
  }
  render() {
    // Give tasks a different className when they are checked off,
    // so that we can style them nicely in CSS
    //const taskClassName = this.props.task.checked ? 'checked' : '';
    
    const taskClassName = classnames({
      checked: this.props.task.checked,
      private: this.props.task.private,
    });
    return (<div align="center">
      <li className={taskClassName}>
        <button className="delete" onClick={this.deleteThisTask.bind(this)}>
          &times;
        </button>
        <input
          type="checkbox"
          readOnly
          checked={!!this.props.task.checked}
          onClick={this.toggleChecked.bind(this)}
        />
        
        { 
          // Private Button
          this.props.showPrivateButton ? (
            <button className="ui basic button toggle-private" onClick={this.togglePrivate.bind(this)}>
              { this.props.task.private ? 'Is Private' : 'Is Public' }
            </button>
          ) : ''
        }

        <span className="text">{this.props.task.username}</span>
        <span className="text">{this.props.task.taskName}</span>
      </li>
      </div>);
  }
}
