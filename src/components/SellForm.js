import React, { Component } from 'react';
import tokenLogo from '../token-logo.png'
import ethLogo from '../eth-logo.png'

class SellForm extends Component {
  constructor(props) {
    super(props)
    this.state = {
      output: 0
    }
  }

  handleOnChange = (event) => {
      const tokenAmount = event.target.value
      this.setState({
        output: tokenAmount / 100
      })
  }

  handleOnSubmit = (event) => {
    event.preventDefault()
    let tokenAmount
    tokenAmount = this.input.value.toString() //Using the ref property of the input to get user input
    tokenAmount = window.web3.utils.toWei(tokenAmount, 'Ether')
    this.props.sellTokens(tokenAmount)
    alert(`You bought ${this.state.output} tokens!`)
  }
  render() {
    return (
      <form className="mb-3" onSubmit={this.handleOnSubmit}>
        <div>
          <label className="float-left"><b>Input</b></label>
          <span className="float-right text-muted">
            Balance: {window.web3.utils.fromWei(this.props.tokenBalance, 'Ether')}
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
              <img src={tokenLogo} height='32' alt=""/>
              &nbsp; DApp
            </div>
          </div>
        </div>
        <div>
          <label className="float-left"><b>Output</b></label>
          <span className="float-right text-muted">
            Balance: {window.web3.utils.fromWei(this.props.ethBalance, 'Ether')}
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
              <img src={ethLogo} height='32' alt=""/>
              &nbsp; &nbsp; &nbsp; ETH
            </div>
          </div>
        </div>
        <div className="mb-5">
          <span className="float-left text-muted">Exchange Rate</span>
          <span className="float-right text-muted">100 DApp = 1 ETH</span>
        </div>
        <button type="submit" className="btn btn-primary btn-block btn-lg">SWAP!</button>
      </form>
    );
  }
}

export default SellForm
