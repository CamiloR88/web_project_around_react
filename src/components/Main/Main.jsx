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

export default function Main(props) {
  const [cards, setCards] = useState([]);
  const { onOpenPopup, onClosePopup, popup } = props;
  const { currentUser, handleUpdateUser } = useContext(CurrentUserContext);
  async function handleCardLike(card) {
    const isLiked = card.isLiked;
    if (!isLiked) {
      await api
        .setLike(card._id)
        .then((newCard) => {
          setCards((state) =>
            state.map((currentCard) =>
              currentCard._id === card._id ? newCard : currentCard,
            ),
          );
        })
        .catch((error) => console.error(error));
    } else {
      await api
        .rmvLike(card._id)
        .then((newCard) => {
          setCards((state) =>
            state.map((currentCard) =>
              currentCard._id === card._id ? newCard : currentCard,
            ),
          );
        })
        .catch((error) => console.error(error));
    }
  }
  function handleUpdateAvatar(avatar) {
    api
      .setProfileAvatar(avatar)
      .then((updatedUser) => {
        handleUpdateUser({
          avatar: updatedUser.avatar,
          name: updatedUser.name,
          about: updatedUser.about,
        });
      })
      .catch((error) => {
        console.error("Error updating avatar:", error);
      });
  }

  function handleNewCard(event) {
    event.preventDefault();
    const form = event.target;
    const title = form.title.value;
    const link = form.link.value;
    api
      .storeCard(title, link)
      .then((newCard) => {
        setCards([newCard, ...cards]);
        onClosePopup();
      })
      .catch((error) => {
        console.error("Error creating card:", error);
      });
  }

  useEffect(() => {
    api.getInitialCards().then((data) => {
      setCards(data);
    });
  }, []);
  const imagePopup = (selectedCard) => ({
    children: <ImagePopup selectedCard={selectedCard} />,
  });
  const newCardPopup = {
    title: "Nuevo lugar",
    children: <NewCard onSubmit={handleNewCard} />,
  };
  const editProfilePopup = {
    title: "Editar perfil",
    children: <EditProfile />,
  };
  const changeAvatarPopup = {
    title: "Cambiar foto de perfil",
    children: <EditAvatar onSubmit={handleUpdateAvatar} />,
  };

  const handleCardClick = (card) => {
    onOpenPopup(imagePopup(card));
  };

  return (
    <main className="main">
      <section className="profile">
        <button
          className="profile__avatar-container"
          id="img-avatar"
          onClick={() => {
            onOpenPopup(changeAvatarPopup);
          }}
        >
          <img
            className="profile__avatar"
            src={currentUser.avatar}
            alt="avatar"
          />
          <img src={changeAvatarIcon} alt="" className="profile__avatar-edit" />
        </button>
        <div className="profile__info">
          <div className="profile__content">
            <div className="profile__name">{currentUser.name}</div>

            <button
              type="submit"
              className="profile__edit-btn"
              onClick={() => onOpenPopup(editProfilePopup)}
            >
              <img src={editProfileIcon} alt="boton de editar" />
            </button>
          </div>
          <div className="profile__about">{currentUser.about}</div>
        </div>
        <button
          className="profile__add-btn"
          onClick={() => onOpenPopup(newCardPopup)}
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
        <Popup onClose={onClosePopup} title={popup.title}>
          {popup.children}
        </Popup>
      )}
    </main>
  );
}
