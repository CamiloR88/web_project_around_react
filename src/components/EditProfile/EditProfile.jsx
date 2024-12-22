export default function EditProfile(){
  return( <form className="popup__form" method="dialog" id="profileForm" noValidate>


          <input
            type="text"
            className="popup__input"
            placeholder="Nombre"
            id="name"
            name="name"
            minLength="2"
            maxLength="20"
            required
          />
          <span className="name-error popup__input-error"></span>

          <input
            type="text"
            className="popup__input"
            placeholder="Acerca de mi"
            id="about"
            name="about"
            minLength="2"
            maxLength="20"
            required
          />
          <span className="about-error popup__input-error"></span>

          <button type="submit" className="popup__submit-btn">Guadar</button>
        </form>

  )
}