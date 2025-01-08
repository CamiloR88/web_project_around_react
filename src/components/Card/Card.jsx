import trashBin from "../../images/remove-icon.svg";
import likeIconOff from "../../images/like-off.svg";
import likeIconOn from "../../images/like-on.svg";
import { CurrentUserContext } from "../../contexts/CurrentUserContext";
import { useContext } from "react";

export default function Card({ handleOpenPopup, card }) {
  const { currentUser } = useContext(CurrentUserContext);
  function handleClick() {
    handleOpenPopup(card);
  }

  return (
    <li className="elements__element">
      <img className="element__remove" src={trashBin} />
      <img className="element__img" src={card.link} onClick={handleClick} />
      <div className="element__description">
        <div className="element__name">{card.name}</div>
        <button
          className={`element__like ${card.isLiked ? "element__like_active" : ""}`}
        >
          <img src={likeIconOff} alt="Likes" />
        </button>
      </div>
    </li>
  );
}
