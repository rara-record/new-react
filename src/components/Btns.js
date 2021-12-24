/* eslint-disable no-const-assign */

import React, { useState } from 'react';

function Btns(props) {
  let [index, setIndex] = useState(0);

  const plus = () => {
    setIndex(++index);
    props.frame.current.style.transform = `rotate(${index * props.deg}deg)`;
  }

  const minus = () => {
    setIndex(--index);
    props.frame.current.style.transform = `rotate(${index * props.deg}deg)`;
  }

  return (
    <>
      <span className="btnPrev" onClick={plus}>PREV</span>
      <span className="btnNext" onClick={minus}>NEXT</span>
    </>
  )
}

export default Btns
