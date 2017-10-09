// Dependencies
import React, { Component } from 'react';

class CreateNote extends Component {
  constructor(props) {
    super(props)
    this.state = {
      entry: "",
    }
  }

  onChangeHandler = (entry) => {
    this.setState({ entry })
  }

  submitNote = (event) => {
      event.preventDefault()

      const data = {
        entry: this.state.entry,
        patient_id: this.props.match.params.id,
      }

      const headers = new Headers()
      headers.append('Content-type', 'application/json');

      const options = {
        method: 'POST',
        headers,
        body: JSON.stringify(data)
      }

      fetch('http://localhost:8080/notes', options)
      .then(window.location.href=`/patients/${this.props.match.params.id}`)
  }

  render() {
    return (
      <div className="row">
        <form className="col s12" onSubmit={ event => this.submitNote(event) }>
          <div className="input-field col s6">
            <textarea
              onChange={ event => this.onChangeHandler(event.target.value) }
              id="entry"
              className="materialize-textarea"
              placeholder="Note:"
              defaultValue={this.state.entry}>
            </textarea>
          </div>
          <div className="section">
            <button type="submit" className="btn-floating btn-large waves-effect waves-light red">
              <i className="material-icons">add</i>
            </button>
          </div>
        </form>
      </div>
    )
  }
}

export default CreateNote;
