import React, { useState } from "react";
import ReactDOM from "react-dom";
import { useDispatch, useSelector } from "react-redux";
import { RiCloseLine } from "react-icons/ri";
import { addGuestFormAction } from "../../redux/actions";
import { Button, Description } from "../../components";
import "./addGuestForm.css";
import { FORM_UPLOAD_API } from "../../helpers/Constants";

function AddGuestForm() {
  const dispatch = useDispatch();
  const isToken = useSelector((state) => state.isToken);

  const [formData, setFormData] = useState({
    username: "",
    email: "",
    phone: "",
  });
  const [errorMessage, setErrorMessage] = useState("");


  async function addGuest(credentials) {
    const encodeLoginData = (data) => {
      return Object.keys(data)
        .map(
          (key) => encodeURIComponent(key) + "=" + encodeURIComponent(data[key])
        )
        .join("&");
    };

    return fetch(FORM_UPLOAD_API, {
      method: "POST",
      headers: {
        Accept: "application/json",
        "Content-type": "application/x-www-form-urlencoded",
        Authorization: `Token ${localStorage.getItem("saveToken")}` || `Token ${isToken}`,
      },
      body: encodeLoginData(credentials),
    })
      .then((response) => response.json())
      .then((data) => data);
  };

  const handleChange = (event) => {
    setFormData({
      ...formData,
      [event.target.name]: event.target.value,
    });
  };

  const handleSubmit = async (event) => {
    event.preventDefault();

    if (!formData.username || !formData.email || !formData.phone) {
      setErrorMessage("All fields are required");
    } else if (formData.phone.length !== 11){
      setErrorMessage("Phone number must be in 11 digits");
    }
    else {
      // send data to server
      setErrorMessage("");
      await addGuest({
        username: formData.username,
        phone_number: formData.phone.toString(),
        address: formData.email,
      });
      dispatch(addGuestFormAction(false));
      window.location.reload(); 
    }
  };

  return ReactDOM.createPortal(
    <div className="bguest__addGuestForm">
      <div className="bguest__addGuestForm-body">
        <RiCloseLine
          className="bguest__addGuestForm-close-button"
          onClick={() => {
            dispatch(addGuestFormAction(false));
          }}
        />
        <div className="bguest__addGuestForm-body-title">
          <Description text="Add New Guest" fontSize="32px" paddingTop={0} />
        </div>
        <div className="bguest__addGuestForm-body-info">
          <form onSubmit={handleSubmit}>
            <div className="bguest__addGuestForm-body-info-input">
              <label htmlFor="username">
                <input
                  className="field"
                  type="text"
                  id="username"
                  name="username"
                  value={formData.username}
                  onChange={handleChange}
                  placeholder="Guest Full Name"
                  required
                />
              </label>
              <label htmlFor="email">
                <input
                  className="field"
                  type="email"
                  id="email"
                  name="email"
                  value={formData.email}
                  onChange={handleChange}
                  placeholder="Email Address"
                  required
                />
              </label>
              <label htmlFor="phone">
                <input
                  className="field"
                  type="number"
                  id="phone"
                  name="phone"
                  value={formData.phone}
                  onChange={handleChange}
                  placeholder="Phone Number"
                  required
                />
              </label>
            </div>
            <Button
              width="120px"
              height="50px"
              borderRadius="8px"
              fontSize="14px"
              text="Create"
            />
          </form>
          <div className="bguest__addGuestForm-error">
            {errorMessage && (
              <p style={{ color: "red", marginTop: "20px" }}>{errorMessage}</p>
            )}
          </div>
        </div>
      </div>
    </div>,
    document.getElementById("portal")
  );
}

export default AddGuestForm;
