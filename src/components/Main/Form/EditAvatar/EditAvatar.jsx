export default function EditAvatar(){
  return( <form
          className="popup__form-small"
          method="dialog"
          id="change-avatar_form"
          noValidate
        >

          <input
            type="url"
            className="popup__input"
            placeholder="image URL"
            id="url"
            name="link"
            minLength="1"
            required
          />
          <span className="url-error popup__input-error"></span>
          <button className="popup__submit-btn">Guardar</button>
        </form>)
}