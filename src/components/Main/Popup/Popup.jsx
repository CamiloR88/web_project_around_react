import xBtn from "../../../assets/images/popup-close.svg"
function Popup(props){
  const{title,children}=props;
  return(
         <dialog className="popup">
          <div className="popup__content">
        <button aria-label="Close modal" type="button" className="popup__close" onClick={onClose} >
          <img src={xBtn} alt="boton de cerrar" />
        </button>

          <h3 className="popup__title">{title}</h3>
          {children}

          </div>
      </dialog>
  )
}
export default Popup