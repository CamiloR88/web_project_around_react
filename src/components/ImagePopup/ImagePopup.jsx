export default function ImagePopup(props) {
  return (
    <>
      <img className="popup__image" src={props.selectedCard?.link} alt="" />
      <p className="popup__image-name">{props.selectedCard?.name}</p>
    </>
  );
}
