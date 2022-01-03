pragma solidity^0.5.0;
import "./Token.sol";
contract EthSwap {
  string public name = "EthSwap Instant Exchange";
  Token public token;
  uint public rate = 100;

  event TokenPurchased(
    address account,
    address token,
    uint amount,
    uint rate
  );

  constructor(Token _token) public {
    token = _token;
  }

  function buyTokens() public payable {
    //Calculate number of tokens to buy
    uint tokenAmount = msg.value * rate;
    //Checks that the exchange has enough tokens to sell
    require(token.balanceOf(address(this)) >= tokenAmount);
    //Transer tokens to user
    token.transfer(msg.sender, tokenAmount);

    //Emit an event
    emit TokenPurchased(msg.sender, address(token), tokenAmount, rate);
  }

  function sellTokens(uint _amount) public {
    //Calculate amount of ETH to redeem
    uint etherAmount = _amount / rate;
    //Perform a sale
    token.transferFrom(msg.sender, address(this), _amount);
    msg.sender.transfer(etherAmount);
  }
 }
