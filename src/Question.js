import React from "react";

const Question = ({ questions }) => {
  return (
    <section>
      <div>
        <h4>{questions.title}</h4>
        <button>+</button>
      </div>
      <p>{questions.info}</p>
    </section>
  );
};

export default Question;
