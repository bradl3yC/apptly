// Dependencies
import React, { Component } from 'react';
import { withRouter } from "react-router-dom";


class EditNote extends Component {
  constructor(props) {
    super(props)
    this.state = {
      note: [],
      entry: "",
      patient: [],
    }
  }

  onChangeHandler = (entry) => {
    this.setState({ entry })
  }

  async submitNote(event) {
    event.preventDefault()

    const data = {
      entry: this.state.entry,
      patient_id: this.props.match.params.id,
    }

    const headers = new Headers()
    headers.append('Content-type', 'application/json');

    const options = {
      method: 'PUT',
      headers,
      body: JSON.stringify(data)
    }

    const response = await fetch(`https://apptly-api.herokuapp.com/notes/${this.state.note.id}`, options)
    if (response.status === 200) {
      window.location.href=`/patients/${this.props.match.params.id}`
    }
  }

  componentDidMount() {
    fetch(`https://apptly-api.herokuapp.com/notes/${this.props.match.params.note_id}`)
    .then(response => response.json())
    .then(note => this.setState({ note, entry: note.entry, patient: note.patient }))
  }


  render() {
    return (
      <div className="row">
        <h5>Editing note for {this.state.patient.name}</h5>
        <form className="col s12" onSubmit={ event => this.submitNote(event) }>
          <div className="input-field col s4">
            <textarea
              onChange={ event => this.onChangeHandler(event.target.value) }
              id="entry"
              className="materialize-textarea"
              placeholder="Note:"
              value={this.state.entry}>
            </textarea>
          </div>
          <div className="section">
            <button type="submit" className="btn-floating btn-small waves-effect waves-light red">
              <i className="material-icons">add</i>
            </button>
          </div>
        </form>
      </div>
    );
  }
}

export default withRouter(EditNote);
