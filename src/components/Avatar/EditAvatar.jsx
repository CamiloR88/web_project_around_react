import { useState, useContext } from "react";
import { CurrentUserContext } from "../../contexts/CurrentUserContext";

export default function EditAvatar() {
  const { currentUser, handleUpdateUser } = useContext(CurrentUserContext);
  const [avatar, setAvatar] = useState(currentUser.avatar);

  const handleAvatarChange = (e) => {
    setAvatar(e.target.value);
  };
  const handleSubmit = (e) => {
    e.preventDefault();
    handleUpdateUser({ avatar });
  };
  return (
    <form
      className="popup__form-small"
      method="dialog"
      id="change-avatar_form"
      noValidate
      onSubmit={handleSubmit}
    >
      <input
        type="url"
        className="popup__input"
        placeholder="image URL"
        id="url"
        name="link"
        minLength="1"
        required
        onChange={handleAvatarChange}
      />
      <span className="url-error popup__input-error"></span>
      <button className="popup__submit-btn">Guardar</button>
    </form>
  );
}
