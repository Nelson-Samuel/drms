import { useState } from "react";

import "./ListTab.css";
import { Table } from "./components/Table.jsx";
import { Modal } from "./components/Modal.jsx";
import Header2 from "../../../Componnents/Header2.js";

function ListCit() {
  const [modalOpen, setModalOpen] = useState(false);
  const [rows, setRows] = useState([
    {
      page: "Sanjay K",
      description: "Missed Dog",
      status: "live",
      statuse:"Rescued"
    },
    {
      page: "Krishna N",
      description: "Wounded Dog",
      status: "draft",
      statuse:"Can\'t Rescued"
    },
    {
      page: "Alan ",
      description: "Abused Dog",
      status: "error",
      statuse:"Pending"
    },
    {
      page: "Balaji R",
      description: "Missed Dog",
      status: "process",
      statuse:"Processing"
    },
  ]);
  const [rowToEdit, setRowToEdit] = useState(null);
  
  const handleDeleteRow = (targetIndex) => {
    setRows(rows.filter((_, idx) => idx !== targetIndex));
  };

  const handleEditRow = (idx) => {
    setRowToEdit(idx);

    setModalOpen(true);
  };

  const handleSubmit = (newRow) => {
    rowToEdit === null
      ? setRows([...rows, newRow])
      : setRows(
          rows.map((currRow, idx) => {
            if (idx !== rowToEdit) return currRow;

            return newRow;
          })
        );
  };

  return (
    <div className="ListCit">
      <Header2/>
      <Table rows={rows} deleteRow={handleDeleteRow} editRow={handleEditRow} />
      {modalOpen && (
        <Modal
          closeModal={() => {
            setModalOpen(false);
            setRowToEdit(null);
          }}
          onSubmit={handleSubmit}
          defaultValue={rowToEdit !== null && rows[rowToEdit]}
        />
      )}
     
    </div>
  );
}

export default ListCit
