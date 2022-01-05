import React, { Component } from 'react';
import tokenLogo from '../token-logo.png'
import ethLogo from '../eth-logo.png'

class Main extends Component {
  constructor(props) {
    super(props)
    this.state = {
      output: 0
    }
  }

  handleOnChange = (event) => {
      const ethAmount = event.target.value
      this.setState({
        output: ethAmount * 100
      })
  }

  handleOnSubmit = (event) => {
    event.preventDefault()
    let ethAmount
    ethAmount = this.input.value.toString()
    ethAmount = window.web3.utils.toWei(ethAmount, 'Ether')
    this.props.buyTokens(ethAmount)
    alert(`You bought ${this.state.output} tokens!`)
  }
  render() {
    return (
      <div className="card mb-4">
      <div className="card-body">
      <form className="mb-3" onSubmit={this.handleOnSubmit}>
        <div>
          <label className="float-left"><b>Input</b></label>
          <span className="float-right text-muted">
            Balance: {window.web3.utils.fromWei(this.props.ethBalance, 'Ether')}
          </span>
        </div>
        <div className="input-group mb-4">
          <input
            type="text"
            onChange={this.handleOnChange}
            ref={(input) => {this.input = input}}
            className="form-control form-control-lg"
            placeholder="0"
            required />
            <div className="input-group-append">
            <div className="input-group-text">
              <img src={ethLogo} height='32' alt=""/>
              &nbsp;&nbsp;&nbsp; ETH
            </div>
          </div>
        </div>
        <div>
          <label className="float-left"><b>Output</b></label>
          <span className="float-right text-muted">
            Balance: {window.web3.utils.fromWei(this.props.tokenBalance, 'Ether')}
          </span>
        </div>
        <div className="input-group mb-4">
          <input
            type="text"
            className="form-control form-control-lg"
            placeholder="0"
            value={this.state.output}
            disabled />
            <div className="input-group-append">
            <div className="input-group-text">
              <img src={tokenLogo} height='32' alt=""/>
              &nbsp; DApp
            </div>
          </div>
        </div>
        <div className="mb-5">
          <span className="float-left text-muted">Exchange Rate</span>
          <span className="float-right text-muted">1 ETH = 100 DApp</span>
        </div>
        <button type="submit" className="btn btn-primary btn-block btn-lg">SWAP!</button>
      </form>
      </div>
      </div>
    );
  }
}

export default Main
