import React, { useEffect, useMemo, useState } from "react";
import { Button, Description, DotButton, Tagline, Title } from "../../components";
import { FiDownload, FiSearch } from "react-icons/fi";
import { BsTelephone, BsClipboard2Data } from "react-icons/bs";
import { AiOutlineMail } from "react-icons/ai";
import { CgClose } from "react-icons/cg";
import { useDispatch, useSelector } from "react-redux";
import { downloadCSV, fetchGuestData } from "../../helpers/Functions";
import { GUESTDATA_API } from "../../helpers/Constants";
import { guestDataAction } from "../../redux/actions";
import DataTable from "react-data-table-component";
import "./guestList.css";

function GuestList() {
  const [isDownload, setIsDownload] = useState(false);
  const dispatch = useDispatch();
  const isGuestData = useSelector((state) => state.isGuestData);
  const [guestPhone, setGuestPhone] = useState([]);
  const [guestEmail, setGuestEmail] = useState([]);
  const isToken = useSelector((state) => state.isToken);

  const [filterText, setFilterText] = useState('');
	const [resetPaginationToggle, setResetPaginationToggle] = useState(false);
	const filteredItems = isGuestData.filter(
		item => (item.username && item.username.toLowerCase().includes(filterText.toLowerCase()))
    || (item.address && item.address.toLowerCase().includes(filterText.toLowerCase()))
    || (item.phone_number && item.phone_number.toLowerCase().includes(filterText.toLowerCase()))
    ,
	);

  const tableStyle = {
    headCells: {
        style: {
            fontSize:'16px'
        },
    },
    cells: {
      style: {
          fontSize:'14px'
      },
  },
    rows: {
          highlightOnHoverStyle: {
            backgroundColor: '#F4F7FF',
            borderBottomColor: '#CEDDFF',
            outline: '1px solid #CEDDFF',
          },
        },
};

  const columns = useMemo(
    () => [
      {
        name: "ID",
        selector: (row, index) => index + 1,
        style: {
          			color: '#808080',
          		},
        width: '50px',
      },
      {
        name: "Name",
        selector: (row) => row.username,
        sortable: true,
        allowOverflow: true,
        grow: 2,
      },
      {
        name: "Phone Number",
        selector: (row) => row.phone_number,
        sortable: true,
      },
      {
        name: "Email",
        selector: (row) => row.address,
        sortable: true,
        allowOverflow: true,
      },
      {
        name: "Visiting Count",
        selector: (row) => row.count,
        sortable: true,
        right: true,
      },
      {
        name: "Status",
        selector: (row) => (row.is_block ? <Description text="Blocked"/> : <Description text="Active"/>),
        sortable: true,
        right: true,
      },
      {
        cell: (row) => (<DotButton is_block={row.is_block}/>),
        ignoreRowClick: true,
        allowOverflow: true,
        button: true,
      },
    ],
    []
  );

  const handleClear = () => {
    			if (filterText) {
    				setResetPaginationToggle(!resetPaginationToggle);
    				setFilterText('');
    			}
    		};

  const handleDownload = (array, filename) => {
    var phone = [];
    var email = [];
    var i = 0, len = isGuestData.length;
    while (i < len) {
        email.push({"Email Address" : isGuestData[i].address});
        phone.push({"Phone Number" : isGuestData[i].phone_number});
        i++
    }
    setGuestEmail(email);
    setGuestPhone(phone);

    downloadCSV(array, filename);
  };

  useEffect(() => {
    fetchGuestData(GUESTDATA_API, isToken, dispatch, guestDataAction);
    // eslint-disable-next-line
  }, []);

  return (
    <div className="bguest__guestList">
      <div className="bguest__guestList-banner">
        <div className="bguest__guestList-banner-downloader">
          <Title firstLineText="Guest List" fontSize="2em" />
          <div
            className="bguest__guestList-banner-downloader-icon"
            onClick={() => {
              setIsDownload(!isDownload);
            }}
          >
            <div className="bguest__guestList-banner-downloader-icon-main">
              <FiDownload />
            </div>
            <div
              className="bguest__guestList-banner-downloader-menu"
              style={{ visibility: isDownload ? "visible" : "hidden" }}
            >
              <div className="bguest__guestList-banner-downloader-menu-tagline">
                <Tagline text="Download as CSV" />
              </div>
              <div className="menu" onClick={() => {handleDownload(guestPhone, 'bguestphone.csv')}}>
                <BsTelephone />
                <Description text="Contact Numbers"/>
              </div>
              <div className="menu" onClick={() => {handleDownload(guestEmail, 'bguestemail.csv')}}>
                <AiOutlineMail />
                <Description text="Email Addresses" />
              </div>
              <div className="menu" onClick={() => {handleDownload(isGuestData, 'bguestdata.csv')}}>
                <BsClipboard2Data />
                <Description text="All Data" />
              </div>
            </div>
          </div>
        </div>
        <div className="bguest__guestList-banner-actions">
        <div className="bguest__guestList-banner-actions-input">
          <label htmlFor="Search Input">
            <input
              className="bguest__guestList-banner-actions-input-field"
              type="text"
              id="search"
              name="search"
              value={filterText}
              onChange={e => setFilterText(e.target.value)}
              placeholder="Type to Filter"
            />
          </label>
        </div>
          <div className="bguest__guestList-banner-actions-search">
            {filterText !== '' ? <CgClose onClick={handleClear}/> : <FiSearch/>}
          </div>
          <Button
            width="10vw"
            height="3rem"
            borderRadius="8px"
            fontSize="14px"
            text="+ Add New Guest"
          />
        </div>
      </div>

      <div className="bguest__guestList-table">
        <DataTable 
        data={filteredItems} 
        columns={columns} 
        customStyles={tableStyle} 
        pagination 
        paginationResetDefaultPage={resetPaginationToggle}
        persistTableHead
        highlightOnHover/>
      </div>
    </div>
  );
}

export default GuestList;
