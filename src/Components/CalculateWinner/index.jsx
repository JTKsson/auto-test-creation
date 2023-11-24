import React from "react";

const CalculateWinner = ({ bulbasaurVote, charmanderVote, squirtleVote }) => {
  const calculateWinner = () => {
    const votes = {
      Bulbasaur: bulbasaurVote,
      Charmander: charmanderVote,
      Squirtle: squirtleVote,
    };

    const topVotes = Math.max(...Object.values(votes));
    const winners = Object.keys(votes).filter(
      (pokemon) => votes[pokemon] === topVotes
    );

    if (bulbasaurVote === 0 && charmanderVote === 0 && squirtleVote === 0) {
      return "Start voting!";
    }

    if (winners.length === 1) {
      return `${winners[0]} is in the lead with ${topVotes} votes!`;
    } else {
      return `It's a tie between ${winners.join(
        " and "
      )} with ${topVotes} votes each!`;
    }
  };

  const winner = calculateWinner();

  return <h2>{winner}</h2>;
};

export default CalculateWinner;
