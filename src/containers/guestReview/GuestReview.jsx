import React, { useMemo, useState } from "react";
import DataTable from "react-data-table-component";
import { CgClose } from "react-icons/cg";
import { FiSearch } from "react-icons/fi";
import { DotButton, Title } from "../../components";

import "./guestReview.css";

function GuestReview() {

  const isGuestReview = [
    {
    "username" : "Ashraful Islam",
    "date" : "2023-03-18",
    "rating" : "4",
    "review" : "The food was good"
  },
  {
    "username" : "Faysal Khan",
    "date" : "2023-03-12",
    "rating" : "4.5",
    "review" : "Loved the chef's special menu. Will try it again"
  },
  {
    "username" : "Shayedul Rakib Niloy",
    "date" : "2023-03-14",
    "rating" : "3",
    "review" : "It was cold. Please try to keep it warm before serving"
  },
  {
    "username" : "Priom",
    "date" : "2023-04-25",
    "rating" : "5",
    "review" : "Excellent food. This will be my favorite from now"
  },
  {
    "username" : "Tahseen",
    "date" : "2022-03-10",
    "rating" : "4.5",
    "review" : "Moderate."
  },
]

  const [filterText, setFilterText] = useState("");
  const [resetPaginationToggle, setResetPaginationToggle] = useState(false);
  const filteredItems = isGuestReview.filter(
    (item) =>
      (item.username &&
        item.username.toLowerCase().includes(filterText.toLowerCase())) ||
      (item.date &&
        item.date.toLowerCase().includes(filterText.toLowerCase())) ||
      (item.rating &&
        item.rating.toLowerCase().includes(filterText.toLowerCase())) ||
        (item.review &&
          item.review.toLowerCase().includes(filterText.toLowerCase()))
  );

  const tableStyle = {
    headCells: {
      style: {
        fontSize: "16px",
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
        width: "400px"
,      },
      {
        name: "Date",
        selector: (row) => row.date,
        sortable: true,
        width:"100px",
      },
      {
        name: "Rating",
        selector: (row) => row.rating,
        sortable: true,
        right: true,
        width:"100px",
      },
      {
        name: "Review",
        selector: (row) => row.review,
        sortable: true,
        allowOverflow: true,
      },
      {
        cell: (row) => <DotButton is_block={row.is_block} />,
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
      setFilterText("");
    }
  };


  return (
    <div className="bguest__guestReview">
      <div className="bguest__guestReview-banner">
        <Title firstLineText="Guest Reviews" fontSize="2em" />
        <div className="bguest__guestReview-banner-actions">
          <div className="bguest__guestReview-banner-actions-input">
            <label htmlFor="Search Input">
              <input
                className="bguest__guestReview-banner-actions-input-field"
                type="text"
                id="search"
                name="search"
                value={filterText}
                onChange={(e) => setFilterText(e.target.value)}
                placeholder="Type to Filter"
              />
            </label>
          </div>
          <div className="bguest__guestReview-banner-actions-search">
            {filterText !== "" ? (
              <CgClose onClick={handleClear} />
            ) : (
              <FiSearch />
            )}
          </div>
        </div>
      </div>
      <div className="bguest__guestReview-table">
        <DataTable
          data={filteredItems}
          columns={columns}
          customStyles={tableStyle}
          pagination
          paginationResetDefaultPage={resetPaginationToggle}
          persistTableHead
          highlightOnHover
        />
      </div>
    </div>
  );
}

export default GuestReview;
