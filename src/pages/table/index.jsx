import React from "react";
import TopGainersTable from "./TopGainersTable";
import TopLosersTable from "./TopLosersTable";

const TablePage = () => {
  return (
    <div className="container mx-auto p-6">
      <h1 className="text-2xl font-bold mb-6">Stock Market Overview</h1>
      <div className="grid md:grid-cols-2 gap-6">
        <TopGainersTable />
        <TopLosersTable />
      </div>
    </div>
  );
};

export default TablePage;