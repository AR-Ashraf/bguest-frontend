import React, { useEffect, useRef, useState } from 'react';
import { BsThreeDots } from "react-icons/bs";
import { useDispatch, useSelector } from 'react-redux';
import { useNavigate } from 'react-router-dom';
import { Description } from "../../components";
import { ROOT_API } from '../../helpers/Constants';
import { currentGuestAction } from '../../redux/actions';
import './dotButton.css';

const DotButton = ({id, name, email, phone, is_block, count}) =>  {
    const [isClicked, setIsClicked] = useState(false);
    const isToken = useSelector((state) => state.isToken);
    const ref = useRef(null);
    const navigate = useNavigate();
    const dispatch = useDispatch();

    const dotClicked = () => {
      setIsClicked(!isClicked);
      const guest = [{
        "pk" : id,
        "username" : name,
        "address" : email,
        "phone_number" : phone,
        "is_block" : is_block,
        "count" : count
      }]

      dispatch(currentGuestAction(guest));

    };

    function encodeData(data) {
      return Object.keys(data)
        .map(
          (key) => encodeURIComponent(key) + "=" + encodeURIComponent(data[key])
        )
        .join("&");
    }

    const handleBlock = (API, credentials, parameter) => {

      try {
        fetch( API + `${parameter === "block" ? "/account/block" : "/account/unblock"}`, 
        {
          method: "PUT",
          headers: {
            Accept: "application/json",
            "Content-type": "application/x-www-form-urlencoded",
            Authorization:
          `Token ${localStorage.getItem("saveToken")}` || `Token ${isToken}`,
          },
          body: encodeData(credentials),
        }
        )
          .then((response) => response.json())
          .then((data) => data);

          navigate(0);
          setIsClicked(false);
        
    
      } catch (error) {
        console.log("error", error);
      }
    };

    useEffect(() => {
       
      function handleClickOutside(event) {
        if (ref.current && !ref.current.contains(event.target)) {
          setIsClicked(false);
        }
      }
      // Bind the event listener
      document.addEventListener("mousedown", handleClickOutside);
      return () => {
        // Unbind the event listener on clean up
        document.removeEventListener("mousedown", handleClickOutside);
      };
    }, [ref]);

    return (
        <div
            className="bguest__dotButton">
            <div className="bguest__dotButton-icon">
              <BsThreeDots onClick={dotClicked}/>
            </div>
            <div
              className="bguest__dotButton-menu"
              ref={ref}
              style={{ visibility: isClicked ? "visible" : "hidden" }}
            >
              <div className="menu" 
              onClick={() => {navigate(`/dashboard/guest/${id}`)}}
              >
                <Description text="View Details" />
              </div>
              <div className="menu">
                <Description text="View Reviews" />
              </div>
              <div className="menu" onClick={() => {handleBlock(ROOT_API, {pk: id}, is_block ? "unblock" : "block")}}>
                <Description text={is_block ? "Unblock Guest" : "Block Guest"} color="red"/>
              </div>
            </div>
          </div>
    );
}

export default DotButton;