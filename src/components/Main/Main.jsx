import { useState } from "react"
import avatar from "../../assets/images/Jacques-photo.jpg"
import editProfileIcon from "../../assets/images/pencil.svg"
import addCardIcon from "../../assets/images/plus.svg"
import changeAvatarIcon from "../../assets/images/big-pencil.svg"
import Popup from "./Popup/Popup"
import NewCard from "./Form/NewCard/NewCard"
import EditProfile from "./Form/EditProfile/EditProfile"
import EditAvatar from "./Form/EditAvatar/EditAvatar"

export default function Main(){

  const[popup,setPopup]= useState(null);


  const newCardPopup = { title: "Nuevo lugar", children: <NewCard /> };
  const editProfilePopup={title:"Editar perfil", children:<EditProfile/>}
  const changeAvatar={title:"Cambiar foto de perfil", children:<EditAvatar/>}
  function handleOpenPopup(popup){
     setPopup(popup);
  }
  function handleClosePopup(){
    setPopup(null);
  }

  return(
     <main className="main">
          <section className="profile">
            <button className="profile__avatar-container" id="img-avatar" onClick={()=>{handleOpenPopup(changeAvatar)}}>
              <img
                className="profile__avatar"
                src={avatar}
                alt=""
              />
              <img
                src={changeAvatarIcon}
                alt=""
                className="profile__avatar-edit"
              />
            </button>
            <div className="profile__info">
              <div className="profile__content">
                <div className="profile__name">Jacques Cousteau</div>

                <button type="submit" className="profile__edit-btn" onClick={()=>handleOpenPopup(editProfilePopup)}>
                  <img
                    src={editProfileIcon}
                    alt="boton de editar"
                  />
                </button>
              </div>
              <div className="profile__about">Explorer</div>
            </div>
            <button className="profile__add-btn" onClick={()=>handleOpenPopup(newCardPopup)}>
              <img
                className="profile__add-btn_svg"
                src={addCardIcon}
                alt="boton de agregar"
              />
            </button>
          </section>
          <section className="elements">
            <div className="elements__container"></div>
          </section>
            {popup && (
        <Popup onClose={handleClosePopup} title={popup.title}>
          {popup.children}
        </Popup>
      )}
        </main>
  )
};
