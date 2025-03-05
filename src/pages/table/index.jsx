import React from "react";
import TableData from "../../components/core/TableData";

const TablePage = () => {
  return (
    <div className="container mx-auto p-6">
      <h1 className="text-2xl font-bold mb-6">Dynamic Tables</h1>
      <TableData />
    </div>
  );
};

export default TablePage;