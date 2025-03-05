import React, { useEffect } from "react";
import { useSelector, useDispatch } from "react-redux";
import { fetchTopGainers } from "../../redux/stockSlice";
import TableHeader from "../core/TableHeader";
import TableRow from "../core/TableRow";

const TopGainersTable = () => {
  const dispatch = useDispatch();
  const { topGainers, status, error } = useSelector((state) => state.stocks);

  useEffect(() => {
    dispatch(fetchTopGainers());
  }, [dispatch]);

  const headers = ["ticker", "price", "change_amount", "change_percentage"];

  if (status === "loading") return <div>Loading Top Gainers...</div>;
  if (status === "failed") return <div>Error: {error}</div>;

  return (
    <div className="overflow-x-auto mt-6">
      <h2 className="text-xl font-bold mb-4 text-green-500">Top Gainers</h2>
      <table className="w-full border-collapse">
        <TableHeader headers={headers} />
        <tbody>
          {topGainers?.map((row, index) => (
            <TableRow key={index} row={row} headers={headers} />
          ))}
        </tbody>
      </table>
    </div>
  );
};

export default TopGainersTable;