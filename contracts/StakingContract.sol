
// SPDX-License-Identifier: MIT
pragma solidity ^0.8.20;

import "@openzeppelin/contracts/token/ERC20/IERC20.sol";

contract StakingContract {
    IERC20 public stakingToken;
    mapping(address => uint256) public stakedBalances;

    constructor(address _stakingTokenAddress) {
        stakingToken = IERC20(_stakingTokenAddress);
    }

    function stake(uint256 _amount) public {
        require(_amount > 0, "Cannot stake 0 tokens");
        stakedBalances[msg.sender] += _amount;
        require(stakingToken.transferFrom(msg.sender, address(this), _amount), "Token transfer failed");
    }

    function unstake(uint256 _amount) public {
        require(stakedBalances[msg.sender] >= _amount, "Insufficient staked balance");
        stakedBalances[msg.sender] -= _amount;
        require(stakingToken.transfer(msg.sender, _amount), "Token transfer failed");
    }
}
