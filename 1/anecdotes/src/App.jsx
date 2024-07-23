import { useEffect, useState } from "react";

const App = () => {
  const anecdotes = [
    "If it hurts, do it more often.",
    "Adding manpower to a late software project makes it later!",
    "The first 90 percent of the code accounts for the first 10 percent of the development time...The remaining 10 percent of the code accounts for the other 90 percent of the development time.",
    "Any fool can write code that a computer can understand. Good programmers write code that humans can understand.",
    "Premature optimization is the root of all evil.",
    "Debugging is twice as hard as writing the code in the first place. Therefore, if you write the code as cleverly as possible, you are, by definition, not smart enough to debug it.",
    "Programming without an extremely heavy use of console.log is same as if a doctor would refuse to use x-rays or blood tests when diagnosing patients.",
    "The only way to go fast, is to go well.",
  ];

  const [selected, setSelected] = useState(0);
  const numberOfAnecdote = anecdotes.length;

  const handleRandomAnecdotes = () => {
    let randomNumber = Math.floor(Math.random() * numberOfAnecdote);
    setSelected(randomNumber);
  };
  const obj = {};
  for (let elem = 0; elem <= anecdotes.length - 1; elem++) {
    obj[elem] = 0;
  }

  const [votesScores, setVotesScores] = useState({ ...obj });

  const votesGenerator = (number) => {
    return setVotesScores({
      ...votesScores,
      [number]: votesScores[number] + 1,
    });
  };
  const [moreVoted, setMoreVoted] = useState({});

  useEffect(() => {
    let maxValue = 0;
    let key = null;
    for (let elem in votesScores) {
      if (votesScores[elem] > maxValue) {
        maxValue = votesScores[elem];
        key = elem;
      }
    }

    return setMoreVoted({ key: key, value: maxValue });
  }, [votesScores]);

  return (
    <div>
      <p>{anecdotes[selected]}</p>
      <button onClick={() => votesGenerator(selected)}>Vote</button>
      <button onClick={handleRandomAnecdotes}>Next Anecdote</button>
      <p>This Anecdote has {votesScores[selected]} votes</p>
      <h2>Anectdotes with most votes</h2>
      {anecdotes[moreVoted.key] === undefined ? (
        <p>Lets vote for an Anectdote</p>
      ) : (
        <p>{anecdotes[moreVoted.key]}</p>
      )}
    </div>
  );
};

export default App;
