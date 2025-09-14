
// SPDX-License-Identifier: MIT
pragma solidity ^0.8.20;

contract VotingContract {
    struct Proposal {
        string description;
        uint256 voteCount;
    }

    mapping(uint256 => Proposal) public proposals;
    mapping(address => mapping(uint256 => bool)) public hasVoted;
    uint256 public proposalCount;

    function createProposal(string memory _description) public {
        proposalCount++;
        proposals[proposalCount] = Proposal(_description, 0);
    }

    function vote(uint256 _proposalId) public {
        require(_proposalId > 0 && _proposalId <= proposalCount, "Invalid proposal ID");
        require(!hasVoted[msg.sender][_proposalId], "Already voted");

        proposals[_proposalId].voteCount++;
        hasVoted[msg.sender][_proposalId] = true;
    }
}
