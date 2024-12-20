import trashBin from "../../assets/images/remove-icon.svg";

export default function Card(props) {
  const { name, link, isLiked } = props.card;
  const { handleOpenPopup,cardData} = props;
function handleClick (){
  handleOpenPopup()
  cardData(props.card)
}



  return (
    <li className="elements__element">
      <img className="element__remove" src={trashBin} alt="" />
      <img className="element__img" src={link} onClick={handleClick} />
      <div className="element__description">
        <div className="element__name">{name}</div>
        <button className={`element__like ${isLiked ? 'element__like_active' : ''}`}></button>
      </div>
    </li>
  );
}