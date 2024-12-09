import avatar from "../../assets/images/Jacques-photo.jpg"
import editPrflIcon from "../../assets/images/pencil.svg"
import addCardIcon from "../../assets/images/plus.svg"
import changeAvatarIcon from "../../assets/images/big-pencil.svg"
function Main(){
  return(
     <main className="main">
          <section className="profile">
            <button className="profile__avatar-container" id="img-avatar">
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

                <button type="submit" className="profile__edit-btn">
                  <img
                    src={editPrflIcon}
                    alt="boton de editar"
                  />
                </button>
              </div>
              <div className="profile__about">Explorer</div>
            </div>
            <button className="profile__add-btn">
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
        </main>
  )
};
export default Main;