import React from "react";

const NextButton = ({ answer, index, numQuestions,  dispatch }) => {
  if (answer === null) return null;
  if (index < numQuestions - 1) {
    return (
      <button
        className="btn btn-ui"
        onClick={() => dispatch({ type: "nextQuestion" })}
      >
        Next
      </button>
    );
  }
  // if (index + 1 === numQuestions) {
  if (index === numQuestions - 1) {
    return (
      <button
        className="btn btn-ui"
        onClick={() => dispatch({ type: "finish" })}
      >
        Finish
      </button>
    );
  }
};

export default NextButton;
