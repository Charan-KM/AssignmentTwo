import React from "react";
import TopGainers from "../../components/stockTables/TopGainers";
import TopLosers from "../../components/stockTables/TopLosers";

const StockTablesPage = () => {
  return (
    <div className="container mx-auto p-6">
      <h1 className="text-2xl font-bold mb-6">Stock Market Overview</h1>
      <div className="grid md:grid-cols-2 gap-6">
        <TopGainers />
        <TopLosers />
      </div>
    </div>
  );
};

export default StockTablesPage;