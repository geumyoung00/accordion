import React, { useState } from "react";

const Question = ({ questions }) => {
  const [isOpen, setIsOpen] = useState(false);
  const openHandler = (e) => {
    setIsOpen((prev) => !prev);
  };
  return (
    <section>
      <div>
        <h4>{questions.title}</h4>
        <button onClick={openHandler}>{isOpen ? "-" : "+"}</button>
      </div>
      {isOpen ? <p>{questions.info}</p> : <br />}
    </section>
  );
};

export default Question;
