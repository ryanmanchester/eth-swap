import React, { Component } from 'react';
import './App.css';
import Web3 from 'web3';
import Token from '../abis/Token.json'
import EthSwap from '../abis/EthSwap.json'
import NavBar from './NavBar'
import Main from './Main'

class App extends Component {

  constructor(props) {
    super(props);
    this.state = {
      account: '',
      token: {},
      ethSwap: {},
      ethBalance: 0,
      tokenBalance: 0,
      loading: true
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

    //Load token
    const abi = Token.abi
    const networkId = await web3.eth.net.getId()
    const tokenData = Token.networks[networkId]

    if (tokenData) {
      const address = tokenData.address
      const token = new web3.eth.Contract(abi, address)
      this.setState({ token })
      let tokenBalance = await token.methods.balanceOf(this.state.account).call()
      this.setState({tokenBalance: tokenBalance.toString()})
    } else {
      window.alert("Token contract not deployed to detected network")
    }
    //Load EthSwap
    const ethSwapData = EthSwap.networks[networkId]

    if (ethSwapData) {
      const ethSwap = new web3.eth.Contract(EthSwap.abi, ethSwapData.address)
      this.setState({ ethSwap })
    } else {
      window.alert("EthSwap contract not deployed to detected network")
    }
    this.setState({loading: false})
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
    let content
    if (this.state.loading) {
      content = <p id="loader" className="text-center">Loading...</p>
    } else {
      content = <Main />
    }

    return (
      <div>
      <NavBar account={this.state.account} />
        <div className="container-fluid mt-5">
          <div className="row">
            <main role="main" className="col-lg-12 d-flex text-center">
              <div className="content mr-auto ml-auto">
                <h1>Welcome to ETH Swap</h1>
                {content}
              </div>
            </main>
          </div>
        </div>
      </div>
    );
  }
}

export default App;
