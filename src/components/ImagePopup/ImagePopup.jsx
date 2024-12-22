
import React from "react";

export default function ImagePopup(props) {



  return (
   <>
   <img src={props.selectedCard?.link}alt="" />
   <p>{props.selectedCard?.name}</p>
   </>
  );
}

