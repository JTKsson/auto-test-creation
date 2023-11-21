import { useState } from "react"

const VoteButton = ({voteValue}) => {
  const [vote, setVote] = useState(0)

  const handleOnClick = () => {
    setVote (vote + 1)
  }
  

  return(
    <>
    <p data-testid="vote-value">Vote: {vote}</p>
    <button onClick={handleOnClick}>Vote</button>
    </>
  )
}

export default VoteButton