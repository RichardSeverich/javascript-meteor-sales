import React, { Component } from "react";

class Row extends Component {
  constructor(props) {
    super(props);
    this.delete = this.delete.bind(this);
  }

  delete(_id) {
    alert("deleted successfully");
  }

  render() {
    return (
      <tr>
        <td scope="col">
          <input type="checkbox"></input>
        </td>
        <td scope="col">{this.props.user.profile.id}</td>
        <td scope="col">{this.props.user.username}</td>
        <td scope="col">*******</td>
        <td scope="col">{this.props.user.profile.name}</td>
        <td scope="col">{this.props.user.profile.lastName}</td>
        <td scope="col">{this.props.user.emails[0].address}</td>
        <td scope="col">{this.props.user.profile.type}</td>
        <td scope="col">
          <button className="ui basic button">
            <i className="edit icon"></i>
            Edit
          </button>
        </td>
        <td scope="col">
          <button
            onClick={this.delete.bind(this, this.props.user._id)}
            className="ui basic button"
          >
            <i className="remove sign icon"></i>
            Delete
          </button>
        </td>
      </tr>
    );
  }
}
export default Row;
