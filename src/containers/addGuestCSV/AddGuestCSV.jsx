import React, { useRef, useState } from "react";
import ReactDOM from "react-dom";
import { useDispatch } from "react-redux";
import { RiCloseLine } from "react-icons/ri";
import { addGuestCSVAction } from "../../redux/actions";
import { Button, Description } from "../../components";
import "./addGuestCSV.css";
import { CSV_UPLOAD_API } from "../../helpers/Constants";

function AddGuestCSV() {
  const dispatch = useDispatch();
  const inputFile = useRef(null);
  const [filename, setFilename] = useState("No File Chosen");
  const [csvFile, setCsvFile] = useState(null);


  const browseFile = () => {
    inputFile.current.click();
  };

  const selectFile = (event) => {
    setCsvFile(event.target.files[0]);
    setFilename(event.target.files[0].name);
  };

  const handleUpload = () => {
    const formData = new FormData();
    formData.append("file", csvFile);

    fetch(CSV_UPLOAD_API, {
      method: "POST",
      headers: {
        Authorization: `Token ${localStorage.getItem("saveToken")}`,
      },
      body: formData,
    })
      .then((response) => response.json())
      .then((data) => data);

    window.location.reload();
  };

  return ReactDOM.createPortal(
    <div className="bguest__addGuestCSV">
      <div className="bguest__addGuestCSV-body">
        <RiCloseLine
          className="bguest__addGuestCSV-close-button"
          onClick={() => {
            dispatch(addGuestCSVAction(false));
          }}
        />
        <div className="bguest__addGuestCSV-body-title">
          <Description
            text="Upload Guest CSV File"
            fontSize="32px"
            paddingTop={0}
          />
        </div>
        <div className="bguest__addGuestCSV-body-upload">
          <Description
            text={filename}
            fontSize="16px"
            paddingTop={0}
            color="#808080"
          />
          <div className="bguest__addGuestCSV-body-upload-browse" onClick={browseFile}>
            <input
              type="file"
              id='file'
              ref={inputFile}
              className="csv-file-container"
              onChange={selectFile}
              style={{display: 'none'}}
            />
            <Description
              text="Browse File"
              fontSize="14px"
              paddingTop={0}
              color="#E04648"
            />
          </div>
        </div>
        <Button
          width="120px"
          height="50px"
          borderRadius="8px"
          fontSize="14px"
          text="Upload"
          onClick={handleUpload}
        />
      </div>
    </div>,
    document.getElementById("portal")
  );
}

export default AddGuestCSV;
