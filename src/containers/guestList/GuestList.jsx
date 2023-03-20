import React, { useEffect, useMemo, useState } from "react";
import {
  Button,
  Description,
  DotButton,
  Tagline,
  Title,
} from "../../components";
import {AddGuestCSV, AddGuestForm} from '../../containers';
import { FiDownload, FiSearch } from "react-icons/fi";
import { BsTelephone, BsClipboard2Data, BsUpload } from "react-icons/bs";
import { AiOutlineMail } from "react-icons/ai";
import { CgClose } from "react-icons/cg";
import { useDispatch, useSelector } from "react-redux";
import { OpenLinkNewTab } from "../../helpers/Functions";
import { GUESTDATA_API, GUEST_DATA_EXPORT, GUEST_EMAIL_EXPORT, GUEST_PHONE_EXPORT, SEARCH_GUEST_API } from "../../helpers/Constants";
import { addGuestCSVAction, addGuestFormAction, guestDataAction } from "../../redux/actions";
import DataTable from "react-data-table-component";
import "./guestList.css";

function GuestList() {
  const [isDownload, setIsDownload] = useState(false);
  const [isAddGuest, setIsAddGuest] = useState(false);
  const dispatch = useDispatch();
  const isGuestData = useSelector((state) => state.isGuestData);
  const isToken = useSelector((state) => state.isToken);
  const isAddGuestCSV = useSelector((state) => state.isAddGuestCSV);
  const isAddGuestForm = useSelector((state) => state.isAddGuestForm);

  const [totalRows, setTotalRows] = useState(0);
  const paginationComponentOptions = {
    noRowsPerPage: true
  };
  const [filterText, setFilterText] = useState("");
  const [resetPaginationToggle, setResetPaginationToggle] = useState(false);

  const tableStyle = {
    headCells: {
      style: {
        fontSize: "16px",
        paddingTop: "40px",
        paddingBottom: "40px",
      },
    },
    cells: {
      style: {
        fontSize: "14px",
      },
    },
    rows: {
      highlightOnHoverStyle: {
        backgroundColor: "#F4F7FF",
        borderBottomColor: "#CEDDFF",
        outline: "1px solid #CEDDFF",
      },
    },
  };

  const columns = useMemo(
    () => [
      {
        name: "ID",
        selector: (row, index) => index + 1,
        style: {
          color: "#808080",
        },
        width: "50px",
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
        selector: (row) =>
          row.is_block ? (
            <Description text="Blocked" color="red"/>
          ) : (
            <Description text="Active" />
          ),
        sortable: true,
        right: true,
      },
      {
        cell: (row) => 
        <DotButton 
        id={row.pk} 
        name={row.username} 
        email={row.address} 
        phone={row.phone_number}
        is_block={row.is_block} 
        count={row.count}/>,
        ignoreRowClick: true,
        allowOverflow: true,
        button: true,
      },
    ],
    []
  );

  const handleSearch = (searchText) => {
    fetchGuestData(SEARCH_GUEST_API + `${searchText}`, isToken, dispatch, guestDataAction);
    setFilterText(searchText);
  };

  const handleClear = () => {
    if (filterText) {
      setResetPaginationToggle(!resetPaginationToggle);
      setFilterText("");
      fetchGuestData(GUESTDATA_API, isToken, dispatch, guestDataAction);
    }
  };

  const handleDownload = async (API) => {
    try {
      const response = await fetch(API, {
        headers: {
          Authorization:
            `Token ${localStorage.getItem("saveToken")}` || `Token ${isToken}`,
        },
      });
      const json = await response.json();
      const data = json.response;
      OpenLinkNewTab(data);

  
    } catch (error) {
      console.log("error", error);
    }
  };

  const handlePageChange = page => {
		fetchGuestData(GUESTDATA_API + `?page=${page}`, isToken, dispatch, guestDataAction);
	};

  const fetchGuestData = async (API, isToken, dispatch, action) => {

    try {
      const response = await fetch(API, {
        headers: {
          Authorization:
            `Token ${localStorage.getItem("saveToken")}` || `Token ${isToken}`,
        },
      });
      const json = await response.json();

      setTotalRows(json.count);
  
      const data = json.results;
  
      dispatch(action(data));
  
    } catch (error) {
      console.log("error", error);
    }
  };


  useEffect(() => {
   
    fetchGuestData(GUESTDATA_API, isToken, dispatch, guestDataAction);
    // eslint-disable-next-line
  }, []);

  return (
    <div className="bguest__guestList">
    {isAddGuestCSV ? <AddGuestCSV/> : null}
    {isAddGuestForm ? <AddGuestForm/> : null}
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
              <div
                className="menu"
                onClick={() => {
                  handleDownload(GUEST_PHONE_EXPORT);
                }}
              >
                <BsTelephone />
                <Description text="Contact Numbers" />
              </div>
              <div
                className="menu"
                onClick={() => {
                  handleDownload(GUEST_EMAIL_EXPORT);
                }}
              >
                <AiOutlineMail />
                <Description text="Email Addresses" />
              </div>
              <div
                className="menu"
                onClick={() => {
                  handleDownload(GUEST_DATA_EXPORT);
                }}
              >
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
                onChange={(e) => handleSearch(e.target.value)}
                placeholder="Type to Filter"
              />
            </label>
          </div>
          <div className="bguest__guestList-banner-actions-search">
            {filterText !== "" ? (
              <CgClose onClick={handleClear} />
            ) : (
              <FiSearch />
            )}
          </div>
          <div className="bguest__guestList-banner-actions-add">
            <Button
              width="10vw"
              height="3rem"
              borderRadius="8px"
              fontSize="14px"
              text="+ Add New Guest"
              onClick={() => {setIsAddGuest(!isAddGuest)}}
            />
            <div
              className="bguest__guestList-banner-actions-add-menu"
              style={{ visibility: isAddGuest ? "visible" : "hidden" }}
            >
              <div className="bguest__guestList-banner-actions-add-menu-tagline">
                <Tagline text="Add Type" />
              </div>
              <div
                className="menu"
                onClick={() => {
                  dispatch(addGuestCSVAction(true));
                  setIsAddGuest(false);
                }}
              >
                <BsUpload />
                <Description text="Upload by CSV" />
              </div>
              <div
                className="menu"
                onClick={() => {
                  dispatch(addGuestFormAction(true));
                  setIsAddGuest(false);
                }}
              >
                <BsClipboard2Data />
                <Description text="Upload by Form" />
              </div>
            </div>
          </div>
        </div>
      </div>

      <div className="bguest__guestList-table">
        <DataTable
          data={isGuestData}
          columns={columns}
          customStyles={tableStyle}
          pagination
          paginationResetDefaultPage={resetPaginationToggle}
          paginationServer
          paginationTotalRows={totalRows}
          onChangePage={handlePageChange}
          paginationComponentOptions={paginationComponentOptions}
          persistTableHead
          highlightOnHover
        />
      </div>
    </div>
  );
}

export default GuestList;
