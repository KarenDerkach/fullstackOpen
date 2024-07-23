import { useEffect, useState } from "react";
import "./App.css";
import Buttons from "./components/Buttons";
import Table from "./components/Table";

function App() {
  // guarda los clics de cada botón en su propio estado
  const [feedback, setFeedback] = useState({
    good: 0,
    neutral: 0,
    bad: 0,
  });

  const handleGood = () => {
    setFeedback({
      ...feedback,
      good: feedback.good + 1,
    });
  };
  const handleNeutral = () => {
    setFeedback({
      ...feedback,
      neutral: feedback.neutral + 1,
    });
  };
  const handleBad = () => {
    setFeedback({
      ...feedback,
      bad: feedback.bad + 1,
    });
  };

  const [allScore, setAllScore] = useState(0);
  const [positive, setPositive] = useState(0);

  useEffect(() => {
    setAllScore(feedback.good + feedback.bad + feedback.neutral);
    setPositive(feedback.good / allScore);
  }, [feedback, allScore]);

  return (
    <>
      <h1>WELCOLME TO UNICAFE</h1>
      <section className="btnSection">
        <h2>Give Feedback</h2>
        <div className="container">
          <Buttons onClick={handleGood} text="Good" />
          <Buttons onClick={handleNeutral} text="Neutral" />
          <Buttons onClick={handleBad} text="Bad" />
        </div>
      </section>
      <section className="statistics">
        <h2>Statistics!</h2>
        {allScore === 0 ? (
          "No feedback given"
        ) : (
          <div className="tables">
            <div className="table">
              <Table text="Good" number={feedback.good} />
              <Table text="Bad" number={feedback.bad} />
              <Table text="Neutral" number={feedback.neutral} />
            </div>
            <div className="table">
              <Table text="All" number={allScore} />
              <Table text="Averange" number={allScore} />
              <Table text="Positive" number={positive} />
            </div>
          </div>
        )}
      </section>
    </>
  );
}

export default App;
