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
      <div id="content" className="mt-3">

        <div className="d-flex justify-content-between mb-3">
          <button
              className="btn btn-light"
            >
            Buy
          </button>
          <span className="text-muted">&lt; &nbsp; &gt;</span>
          <button
              className="btn btn-light"
            >
            Sell
          </button>
        </div>

        <div className="card mb-4" >
          <div className="card-body">
            <form className="mb-3">
              <div>
              <label className="float-left"><b>Input</b></label>
              <span className="float-right text-muted">
                Balance
                </span>
              </div>
              <div>
              <div className="input-group mb-4">
              <input
                type="text"
                className="form-control form-control lg"
                placeholder="0"
                required
                />
              <div>
                <div className="input-group-append">
                  <div className="input-group-text">
                    <img src='' height='32' alt='' />
                    &nbsp;&nbsp;&nbsp; ETH
                  </div>
                </div>
              </div>
              <div>
              <label className="float-left"><b>Input</b></label>
              <span className="float-right text-muted">
                Balance
                </span>
              </div>
              <div>
              <div className="input-group mb-4">
              <input
                type="text"
                className="form-control form-control lg"
                placeholder="0"
                required
                />
              <div>
                <div className="input-group-append">
                  <div className="input-group-text">
                    <img src='' height='32' alt='' />
                    &nbsp; DApp
                  </div>
                </div>
              </div>

              </div>
              </div>
              </div>
              </div>
            </form>
          </div>

        </div>

      </div>
    );
  }
}

export default Main
