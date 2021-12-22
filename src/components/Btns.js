import React, { useState } from 'react';
const deg = 45;

function Btns(props) {

  let [index, setIndex] = useState(0);

  const plus = () => {
    setIndex(++index);
    props.frame.current.style.transform = `rotate(${index * deg}deg)`;

  }

  const minus = () => {
    setIndex(--index);
    props.frame.current.style.transform = `rotate(${index * deg}deg)`;

  }

  return (
    <div>
      <span className="btnPrev" onClick={plus}>PREV</span>
      <span className="btnNext" onClick={minus}>NEXT</span>
    </div>
  )
}

export default Btns
