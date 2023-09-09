import "./Edit.css";
import Close from "../../../assets/close.png";
import { NFTData } from "../../../assets/Data/Data";
import { domain } from "../../../config";
import { useState } from "react";
import Swal from "sweetalert2";
import Successful from "./Successful";
function Edit({ setMod3, nft }) {
  const userDetails = JSON.parse(localStorage.getItem("user"));
  const [success, setSuccess] = useState(false);
  const [successMessage, setSuccesMessage] = useState("");
  const [Loading, setLoading] = useState(false);
  const [input, setInput] = useState({
    pushToMarket: false,
    priceInEtherium: 0,
  });
  function turnOff() {
    setSuccess(false);
    setMod3(false);
  }
  function handleChange(e) {
    setInput((preValue) => {
      return {
        ...preValue,
        pushToMarket: !input.pushToMarket,
      };
    });
    console.log(input);
  }
  function handleInput(e) {
    const { name, value } = e.target;
    setInput((preValue) => {
      return {
        ...preValue,
        [name]: value,
      };
    });
  }
  return (
    <>
      <div className="mod-wrapper mods">
        {success ? (
          <Successful title={successMessage} turnOff={turnOff} />
        ) : null}
        <div className="mod3">
          <div className="top d-flex justify-content-between align-nfts-center">
            <div className="left">
              <p>Edit</p>
            </div>
            <img onClick={() => setMod3(false)} src={Close} alt="close" />
          </div>

          <div className="mod3-card">
            <div className="nftcard" key={nft.id}>
              <div className="card-hold">
                <div className="tops">
                  <img
                    className="bg"
                    crossOrigin="anonymous"
                    src={`${domain}${nft.photo}`}
                    alt="nftImage"
                  />
                  <div className="glass">
                    <p>For Sale</p>
                  </div>
                </div>
                <div className="bottom">
                  <div className="name">
                    <p>{nft.name}</p>
                    <div className="right">
                      <span>Current Bid</span>
                      <p>{nft.priceInEtherium}</p>
                    </div>
                  </div>
                  <div className="profile">
                    <div className="left">
                      <div className="text"></div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>

          <div className="push">
            <p>Push to market</p>

            <div className="form-check form-switch form-switch-sm">
              <input
                className="form-check-input"
                type="checkbox"
                id="flexSwitchCheckChecked"
                onChange={handleChange}
              />
            </div>
          </div>
          <div className="prices">
            <span>Current Price</span>
            <div className="current">{nft.priceInEtherium}ETH</div>
            <span>New Price</span>
            <input
              type="text"
              name="priceInEtherium"
              value={input.priceInEtherium}
              onChange={handleInput}
            />
          </div>
          <div className="button">
            <button
              className="bt1"
              disabled={Loading}
              onClick={(e) => {
                setLoading(true);
                e.preventDefault();
                if (input.priceInEtherium < 0.2) {
                  setMod3(false);
                  Swal.fire({
                    icon: "error",
                    title: "Oops!",
                    text: "Nft value must be greater than or equal to 0.2ETH",
                  });
                } else {
                  fetch(`${domain}/api/v1/nft/${nft.id}`, {
                    method: "PATCH",
                    headers: {
                      "Content-Type": "application/json",
                      Authorization: `Bearer ${userDetails.token}`,
                    },
                    body: JSON.stringify(input),
                  })
                    .then((res) => res.json())
                    .then((data) => {
                      if (data.status === "error") {
                        setMod3(false);
                        return;
                        Swal.fire("Opps!", data.message, data.status);
                      } else if (data.status === "success") {
                        setSuccess(true);
                        setLoading(false);
                        setSuccesMessage(data.message);
                      }
                    });
                }
              }}
            >
              {!Loading ? 
              "Update"
             : 
              <div className="p">
                <span className="loader"></span>
                <span className="pppp">Updating...</span>
              </div>
            }
            </button>
            <button className="bt2" onClick={turnOff}>
              Cancel
            </button>
          </div>
        </div>
      </div>
    </>
  );
}

export default Edit;
