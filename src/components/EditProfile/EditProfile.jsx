import { useState, useContext } from "react";
import { CurrentUserContext } from "../../contexts/CurrentUserContext";
export default function EditProfile() {
  const { currentUser, handleUpdateUser } = useContext(CurrentUserContext);
  const [name, setName] = useState(currentUser.name);
  const [description, setDescription] = useState(currentUser.about);
  const handleNameChange = (e) => {
    setName(e.target.value);
  };

  const handleDescriptionChange = (e) => {
    setDescription(e.target.value);
  };
  const handleSubmit = (e) => {
    e.preventDefault();
    handleUpdateUser({ name, about: description });
  };
  return (
    <form
      className="popup__form"
      method="dialog"
      id="profileForm"
      noValidate
      onSubmit={handleSubmit}
    >
      <input
        type="text"
        className="popup__input"
        placeholder="Nombre"
        id="name"
        name="name"
        minLength="2"
        maxLength="20"
        required
        value={name}
        onChange={handleNameChange}
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
        value={description}
        onChange={handleDescriptionChange}
      />
      <span className="about-error popup__input-error"></span>

      <button type="submit" className="popup__submit-btn">
        Guadar
      </button>
    </form>
  );
}
