import React, { Component } from 'react';
import './App.css';
import Web3 from 'web3';
import NavBar from './NavBar'

class App extends Component {

  constructor(props) {
    super(props);
    this.state = {
      account: '',
      ethBalance: 0
    }
  }

   async componentWillMount() {
     await this.loadWeb3()
     await this.loadBlockchainData()
  }

  async loadBlockchainData() {
    const web3 = window.web3
    const accounts = await web3.eth.getAccounts()
    this.setState({account: accounts[0]})

    const ethBalance = await web3.eth.getBalance(this.state.account)
    this.setState({ethBalance: ethBalance})
    console.log(this.state)
  }

  async loadWeb3() {
    if (window.ethereum) {
      window.web3 = new Web3(window.ethereum)
      await window.ethereum.enable()
    } else if(window.web3) {
      window.web3 = new Web3(window.web3.currentProvider)
    } else {
      window.alert("Non-Ethereum browser detected. Try MetaMask")
    }
  }

  render() {
    return (
      <div>
      <NavBar account={this.state.account} />
        <div className="container-fluid mt-5">
          <div className="row">
            <main role="main" className="col-lg-12 d-flex text-center">
              <div className="content mr-auto ml-auto">
                <h1>Welcome to ETH Swap</h1>


              </div>
            </main>
          </div>
        </div>
      </div>
    );
  }
}

export default App;
