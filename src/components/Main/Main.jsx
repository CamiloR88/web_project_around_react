import { useState, useEffect, useContext } from "react";
import { api } from "../../utils/api";
import { CurrentUserContext } from "../../contexts/CurrentUserContext";
import editProfileIcon from "../../images/pencil.svg";
import addCardIcon from "../../images/plus.svg";
import changeAvatarIcon from "../../images/big-pencil.svg";
import Popup from "../Popup/Popup";
import NewCard from "../NewCard/NewCard";
import Card from "../Card/Card";
import EditProfile from "../EditProfile/EditProfile";
import EditAvatar from "../Avatar/EditAvatar";
import ImagePopup from "../ImagePopup/ImagePopup";

export default function Main() {
  const [popup, setPopup] = useState(null);
  const [selectedCard, setSelectedCard] = useState({});
  const [cards, setCards] = useState([]);
  const { currentUser } = useContext(CurrentUserContext);
  async function handleCardLike(card) {
    const isLiked = card.isLiked;
    await api
      .setLike(card._id, !islked)
      .then((newCard) => {
        setCards((state) =>
          state.map((currentCard) =>
            currentCard._id === card._id ? newCard : currentCard,
          ),
        );
      })
      .catch((error) => console.error(error));
  }

  useEffect(() => {
    api.getInitialCards().then((data) => {
      setCards(data);
    });
  }, []);
  console.log(selectedCard);
  const showImagePopup = {
    children: <ImagePopup selectedCard={selectedCard} />,
  };
  const newCardPopup = {
    title: "Nuevo lugar",
    children: <NewCard />,
  };
  const editProfilePopup = {
    title: "Editar perfil",
    children: <EditProfile />,
  };
  const changeAvatarPopup = {
    title: "Cambiar foto de perfil",
    children: <EditAvatar />,
  };

  function handleOpenPopup(popup) {
    setPopup(popup);
  }
  function handleClosePopup() {
    setPopup(null);
  }

  const handleCardClick = (card) => {
    setSelectedCard(card);
    handleOpenPopup(showImagePopup);
  };

  return (
    <main className="main">
      <section className="profile">
        <button
          className="profile__avatar-container"
          id="img-avatar"
          onClick={() => {
            handleOpenPopup(changeAvatarPopup);
          }}
        >
          <img className="profile__avatar" src={currentUser.avatar} alt="" />
          <img src={changeAvatarIcon} alt="" className="profile__avatar-edit" />
        </button>
        <div className="profile__info">
          <div className="profile__content">
            <div className="profile__name">{currentUser.name}</div>

            <button
              type="submit"
              className="profile__edit-btn"
              onClick={() => handleOpenPopup(editProfilePopup)}
            >
              <img src={editProfileIcon} alt="boton de editar" />
            </button>
          </div>
          <div className="profile__about">{currentUser.about}</div>
        </div>
        <button
          className="profile__add-btn"
          onClick={() => handleOpenPopup(newCardPopup)}
        >
          <img
            className="profile__add-btn_svg"
            src={addCardIcon}
            alt="boton de agregar"
          />
        </button>
      </section>
      <section className="elements">
        <ul className="elements__container">
          {cards.map((card) => (
            <Card
              key={card._id}
              card={card}
              handleOpenPopup={handleCardClick}
              onCardLike={handleCardLike}
            />
          ))}
        </ul>
      </section>
      {popup && (
        <Popup onClose={handleClosePopup} title={popup.title}>
          {popup.children}
        </Popup>
      )}
    </main>
  );
}
