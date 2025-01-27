import trashBin from "../../images/remove-icon.svg";
import { CurrentUserContext } from "../../contexts/CurrentUserContext";
import { useContext } from "react";

export default function Card({ handleOpenPopup, card, onCardLike }) {
  const { currentUser } = useContext(CurrentUserContext);
  function handleClick() {
    handleOpenPopup(card);
    console.log(card);
  }

  return (
    <li className="elements__element">
      <img className="element__remove" src={trashBin} />
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
