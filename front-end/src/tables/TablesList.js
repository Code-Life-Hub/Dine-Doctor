import React, { useState } from "react";
import TableFinish from "./TableFinish";
import * as api from "../utils/api";

const TablesList = ({ tables, clickHandler, error }) => {
  const [updatedTables, setUpdatedTables] = useState(tables); // Use state to manage the tables list

  const deleteTable = async (table_id) => {
    try {
      await api.deleteTable(table_id);
      const newTables = updatedTables.filter(
        (table) => table.table_id !== table_id
      );
      setUpdatedTables(newTables);
    } catch (error) {
      console.error("Error deleting table:", error);
    }
  };

  const tableRows = updatedTables.map((table) => (
    <tr key={table.table_id}>
      <th scope="row">{table.table_name}</th>
      <td>{table.capacity}</td>
      <td data-table-id-status={table.table_id}>
        {table.reservation_id === null ? "free" : "occupied"}
      </td>
      <td>
        <TableFinish table={table} clickHandler={clickHandler} error={error} />
        <button onClick={() => deleteTable(table.table_id)}>
          Delete Table
        </button>
      </td>
    </tr>
  ));

  return (
    <>
      <h4>Tables</h4>
      <div className="table table-striped table-responsive table-sm">
        <table className="table table-hover">
          <thead>
            <tr>
              <th scope="col">Table name</th>
              <th scope="col">Capacity</th>
              <th scope="col">Table status</th>
              <th scope="col">Action</th>
            </tr>
          </thead>
          <tbody>{tableRows}</tbody>
        </table>
      </div>
    </>
  );
};

export default TablesList;
