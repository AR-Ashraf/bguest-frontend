import React, { useEffect, useMemo, useState } from "react";
import { useParams, useNavigate } from "react-router-dom";
import { BiArrowBack } from "react-icons/bi";
import { BsTelephone } from "react-icons/bs";
import { AiOutlineMail } from "react-icons/ai";
import { Button, Description, Title } from "../../components";
import DataTable from "react-data-table-component";
import "./uniqueGuestData.css";
import { useSelector } from "react-redux";
import { OpenLinkNewTab } from "../../helpers/Functions";
import { GUESTDATA_API, GUEST_DATA_EXPORT } from "../../helpers/Constants";


function UniqueGuestData() {
  const { id } = useParams();
  const navigate = useNavigate();
  const isToken = useSelector((state) => state.isToken);
  const isCurrentGuest = useSelector((state) => state.isCurrentGuest);
  const [storeIndividual, setStoreIndividual] = useState([]);
  const [downloadIndividual, setDownloadIndividual] = useState([]);
  const [totalRows, setTotalRows] = useState(0);
  const paginationComponentOptions = {
    noRowsPerPage: true
  };

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
        name: "Date",
        selector: (row) => row.date,
        sortable: true,
      },
      {
        name: "Arrival Time",
        selector: (row) => row.connect_time,
        sortable: true,
      },
      {
        name: "Departure Time",
        selector: (row) => row.disconnect_time,
        sortable: true,
      },
      {
        name: "Total Duration",
        selector: (row) => row.duration,
        sortable: true,
      },
    ],
    []
  );

  const fetchGuestData = async (API) => {

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
  
      setStoreIndividual(data);
  
    } catch (error) {
      console.log("error", error);
    }
  };

  const downloadGuestData = async (API) => {

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
		fetchGuestData(GUESTDATA_API + `/${id}?page=${page}`);
	};

  useEffect(() => {
   
    fetchGuestData(GUESTDATA_API + `/${id}`);
    // eslint-disable-next-line
  }, []);

  return (
    <div className="bguest__uniqueGuestData">
      <div className="bguest__uniqueGuestData-back" onClick={() => navigate(-1)}>
        <BiArrowBack />
      </div>
      <div className="bguest__uniqueGuestData-body">
        <Title firstLineText={isCurrentGuest[0].username} fontSize="2em" />
        <div className="bguest__uniqueGuestData-body-info">
          <div className="info">
            <AiOutlineMail />
            <Description text={isCurrentGuest[0].address} paddingTop={0} />
          </div>
          <div className="info">
            <BsTelephone />
            <Description text={isCurrentGuest[0].phone_number} paddingTop={0} />
          </div>
        </div>
        <div className="bguest__uniqueGuestData-body-download">
        <Button
              width="10vw"
              height="3rem"
              borderRadius="8px"
              fontSize="14px"
              text="Download"
              onClick={() => {downloadGuestData(GUEST_DATA_EXPORT + `/${id}`)}}
            />
        </div>
        <div className="bguest__uniqueGuestData-body-table">
        <DataTable
          data={storeIndividual}
          columns={columns}
          customStyles={tableStyle}
          pagination
          paginationServer
          paginationTotalRows={totalRows}
          onChangePage={handlePageChange}
          paginationComponentOptions={paginationComponentOptions}
          persistTableHead
          highlightOnHover
        />
      </div>
      </div>
    </div>
  );
}

export default UniqueGuestData;
