import "./ed.css"
import React from "react";
import Close from "../../../assets/close.png";
// import { NFTData } from "../../../assets/Data/Data";
import { domain } from "../../../config";
import { useState } from "react";
import Swal from "sweetalert2";
import Successful from "./Successful";

function Edtt({ setMod3, nft }) {
  function turnOff() {
    // setSuccess(false);
    setMod3(false);
  }
  return (
    <>
        <div className="mod-wrapper">
            <div className="moders">
            <div className="top">
            <div className="left">
              <p>Edit</p>
            </div>
            <img  src={Close} alt="close" />
          </div>
            </div>
        </div>
    </>
  )
}

export default Edtt;