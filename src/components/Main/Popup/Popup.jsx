import xBtn from "../../../assets/images/popup-close.svg"
export default function Popup(props){
  const{onClose,title,children,}=props;
  return(
         <div className="popup" open>
          <div className="popup__overlay"></div>
          <div   className={`popup__content ${
          !title ? "popup__content_content_image" : ""
        }`}>
        <button aria-label="Close modal" type="button" className="popup__close-btn" onClick={onClose} >
          <img src={xBtn} alt="boton de cerrar" />
        </button>

           {title && <h3 className="popup__title">{title}</h3>}
          {children}

          </div>
      </div>
  )
}
