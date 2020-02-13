import React from "react";

function SpellingCard(props) {
  const dragStart = e => {
    const target = e.target;

    e.dataTransfer.setData("card_id", target.id);

    setTimeout(() => {
      target.style.display = "visible";
    }, 0);
  };

  const dragOver = e => {
    e.stopPropagation();
  };

  return (
    <div
      id={props.id}
      className="card"
      draggable={props.draggable}
      onDragStart={dragStart}
      onDragOver={dragOver}
    >
      {props.children}
    </div>
  );
}

export default SpellingCard;
