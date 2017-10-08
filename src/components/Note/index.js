import React from 'react';

const Note = (props) => (
  <li className="collection-item dismissable">
    <div>{props.note.entry}
      <a href="link_to_edit_note" className="secondary-content">
        <i className="material-icons">create</i>
      </a>
      <a href="link_to_delete_note" className="secondary-content">
        <i className="material-icons">cancel</i>
      </a>
    </div>
  </li>
);

export default Note;
