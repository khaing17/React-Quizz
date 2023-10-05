import React from "react";
import { useQuiz } from "../contexts/QuizContext";

function Progress() {
  const { numQuestions, possibleTotalPoints, index, answer, points } =
    useQuiz();
  return (
    <div className="progress">
      <progress
        max={numQuestions}
        value={index + Number(answer !== null)}
      ></progress>
      <p>
        {index + Number(answer !== null)}/{numQuestions} Questions
      </p>
      <p>
        {points}/{possibleTotalPoints} Points
      </p>
    </div>
  );
}

export default Progress;
