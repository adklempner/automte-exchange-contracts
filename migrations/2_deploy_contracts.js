var OrderBook = artifacts.require("./OrderBook.sol");
var OrderBookFactory = artifacts.require("./OrderBookFactory.sol");
var ETHOrderBook = artifacts.require("./ETHOrderBook.sol")
var SafeMath = artifacts.require("./SafeMath.sol");

module.exports = function(deployer) {
  deployer.deploy(OrderBook);
  deployer.deploy(SafeMath);
  deployer.link(OrderBook, ETHOrderBook);
  deployer.link(OrderBook, OrderBookFactory);
};
