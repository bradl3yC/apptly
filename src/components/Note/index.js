// Dependencies
import React, { Component } from 'react';


class Note extends Component {

  deleteNote = (event) => {
    event.preventDefault()

    const headers = new Headers()
    headers.append('Content-type', 'application/json');

    const options = {
      method: 'DELETE',
      headers
    }

    fetch(`http://localhost:8080/notes/${this.props.note.id}`, options)
    .then(window.location.href=`/locations/${this.props.note.location_id}`)

  }

  render() {
    return (
      <li className="collection-item dismissable">
        <div>{this.props.note.entry}
          <a href={`/locations/${this.props.note.location_id}/notes/${this.props.note.id}/edit`} className="secondary-content">
            <i className="material-icons">create</i>
          </a>
          <a onClick={ event => this.deleteNote(event) } className="secondary-content">
            <i className="material-icons">cancel</i>
          </a>
        </div>
      </li>
    );
  }
}

export default Note;
