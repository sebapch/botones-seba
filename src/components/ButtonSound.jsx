
import React, {useState, useRef} from "react";




const ButtonSound = ({ soundName }) => {
    

  //this is telefono
  return (
    <>
        <div >
      <audio controls className="w-[100%]">
        <source src={soundName} type="audio/mpeg" />
        Your browser does not support the audio element.
      </audio>
    </div>
    </>
  );
};

export default ButtonSound;
