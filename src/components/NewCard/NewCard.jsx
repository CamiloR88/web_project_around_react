import { useState, useContext } from "react";
import { CurrentUserContext } from "../../contexts/CurrentUserContext";

export default function NewCard({ onSubmit }) {
  const { currentUser } = useContext(CurrentUserContext);
  const [newCard, setNewCard] = useState();
  return (
    <form
      className="popup__form"
      method="dialog"
      id="newCardForm"
      noValidate
      onSubmit={onSubmit}
    >
      <input
        type="text"
        className="popup__input"
        placeholder="title"
        id="title"
        name="title"
        minLength="2"
        maxLength="30"
        required
      />
      <span className="title-error popup__input-error"></span>

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

      <button type="submit" className="popup__submit-btn" id="s-btn">
        Guadar
      </button>
    </form>
  );
}
