import React from "react";
import TopGainersTable from "../../components/table/TopGainersTable";
import TopLosersTable from "../../components/table/TopLosersTable";

const TablePage = () => {
  return (
    <div className="container mx-auto p-6">
      <h1 className="text-2xl font-bold mb-6">Stock Table Pages</h1>
      <div className="grid md:grid-cols-2 gap-6">
        <TopGainersTable />
        <TopLosersTable />
      </div>
    </div>
  );
};

export default TablePage;