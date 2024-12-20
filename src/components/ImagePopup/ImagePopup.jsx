
export default function ImagePopup(props) {

console.log(props)
  return (
   <>
   <img src={props.selectedCard?.link}alt="" />
   <p>{props.selectedCard?.name}</p>
   </>
  );
}