import React, { Component } from 'react';

class Main extends Component {
  constructor(props) {
    super(props)
    this.state = {
      currentForm: "buy"
    }
  }
  render() {
    return (
      <form>
        <div class="form-group">
          <label for="input"><b>Input</b></label>
          <input type="text" />
        </div>
      </form>
    );
  }
}

export default Main
