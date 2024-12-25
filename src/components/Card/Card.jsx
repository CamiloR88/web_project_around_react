 import trashBin from "../../images/remove-icon.svg";

export default function Card({handleOpenPopup, card}) {
  function handleClick() {

    handleOpenPopup(card);
  }

  return (
    <li className="elements__element">
      <img className="element__remove" src={trashBin} alt="" />
      <img className="element__img" src={card.link} onClick={handleClick} />
      <div className="element__description">
        <div className="element__name">{card.name}</div>
        <button
          className={`element__like ${card.isLiked ? "element__like_active" : ""}`}
        ></button>
      </div>
    </li>
  );
}