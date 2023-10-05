import React from "react";
import { useQuiz } from "../contexts/QuizContext";

function FinishScreen() {
  const { points, possibleTotalPoints, highScore, dispatch } = useQuiz();
  const percentage = (points / possibleTotalPoints) * 100;
  return (
    <>
      <p className="result">
        You scored <strong>{points}</strong> out of{" "}
        <strong>{possibleTotalPoints}</strong> ({Math.ceil(percentage)}%)
      </p>
      <p className="highscore">(High Score : {highScore})</p>
      <button
        className="btn btn-ui"
        onClick={() => dispatch({ type: "restart" })}
      >
        Restart Quiz
      </button>
    </>
  );
}

export default FinishScreen;
