import React, { useState } from "react";

const Question = ({ questions, selected, setSelected }) => {
  // const [isOpen, setIsOpen] = useState(false);

  const open = selected === questions.id;

  const openHandler = () => {
    open ? setSelected(null) : setSelected(questions.id);
  };

  return (
    <section>
      <div>
        <h4>{questions.title}</h4>
        <button onClick={openHandler}>{open ? "-" : "+"}</button>
      </div>
      {open ? <p>{questions.info}</p> : <br />}
    </section>
  );
};

export default Question;
