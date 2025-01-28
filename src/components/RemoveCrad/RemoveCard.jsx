import React from "react";
import trashBin from "../../images/remove-icon.svg";

const RemoveCard = ({ onCardDelete }) => {
  return (
    <img className="element__remove" src={trashBin} onClick={onCardDelete} />
  );
};

export default RemoveCard;
