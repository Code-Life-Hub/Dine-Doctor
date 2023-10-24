/** @format */

import React from "react";

//import components
import ErrorAlert from "../layout/ErrorAlert";

const TableFinish = ({ table, clickHandler, error }) => {
  const newHandler = (e) => {
    e.preventDefault();
    clickHandler(table.table_id);
    console.log("table.table_id", table.table_id);
  };
  return (
    table.reservation_id && (
      <div>
        <ErrorAlert error={error} />
        <button
          data-table-id-finish={`${table.table_id}`}
          className="btn btn-danger"
          type="button"
          onClick={newHandler}
        >
          Finish
        </button>
      </div>
    )
  );
};

export default TableFinish;
