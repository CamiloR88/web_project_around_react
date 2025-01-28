//import trashBin from "../../images/remove-icon.svg";
import RemoveCard from "../RemoveCrad/RemoveCard";
import { CurrentUserContext } from "../../contexts/CurrentUserContext";
import { useContext } from "react";

export default function Card({
  handleOpenPopup,
  card,
  onCardLike,
  onCardDelete,
}) {
  const { currentUser } = useContext(CurrentUserContext);
  function handleClick() {
    handleOpenPopup(card);
  }
  function handleDeleteClick() {
    onCardDelete(card);
  }

  return (
    <li className="elements__element">
      <RemoveCard onCardDelete={handleDeleteClick} />
      {/* <img
        className="element__remove"
        src={trashBin}
        onClick={() => onCardDelete(card)}
      /> */}

      <img className="element__img" src={card.link} onClick={handleClick} />
      <div className="element__description">
        <div className="element__name">{card.name}</div>
        <button
          onClick={() => onCardLike(card)}
          className={`element__like ${card.isLiked ? "element__like_active" : ""}`}
        ></button>
      </div>
    </li>
  );
}
