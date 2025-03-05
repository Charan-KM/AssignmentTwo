import React, { useEffect } from "react";
import { useSelector, useDispatch } from "react-redux";
import { fetchTopLosers } from "../../redux/stockSlice";
import TableHeader from "../core/TableHeader";
import TableRow from "../core/TableRow";

const TopLosersTable = () => {
  const dispatch = useDispatch();
  const { topLosers, status, error } = useSelector((state) => state.stocks);

  useEffect(() => {
    dispatch(fetchTopLosers());
  }, [dispatch]);

  const headers = ["ticker", "price", "change_amount", "change_percentage"];

  if (status === "loading") return <div>Loading Top Losers...</div>;
  if (status === "failed") return <div>Error: {error}</div>;

  return (
    <div className="overflow-x-auto mt-6">
      <h2 className="text-xl font-bold mb-4 text-red-500">Top Losers</h2>
      <table className="w-full border-collapse">
        <TableHeader headers={headers} />
        <tbody>
          {topLosers?.map((row, index) => (
            <TableRow key={index} row={row} headers={headers} />
          ))}
        </tbody>
      </table>
    </div>
  );
};

export default TopLosersTable;