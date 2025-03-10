import React, { useEffect } from "react";
import { useSelector, useDispatch } from "react-redux";
import { fetchTopLosers } from "../../store/reducers/stockSlice";
import { selectTopLosers, selectStocksStatus } from "../../store/selectors/stocks";
import TableComponent from "../core/TableComponent";

const TopLosers = () => {
  const dispatch = useDispatch();

  const topLosers = useSelector(selectTopLosers);
  const { status, error } = useSelector(selectStocksStatus);

  useEffect(() => {
    dispatch(fetchTopLosers());
  }, [dispatch]);

  const headers = ["ticker", "price", "change_amount", "change_percentage"];

  if (status === "loading") return <div>Loading Top Losers...</div>;
  if (status === "failed") return <div>Error: {error}</div>;

  return (
    <div>
      <h2 className="text-xl font-bold mb-4 text-red-500">Top Gainers</h2>
      <TableComponent headers={headers} data={topLosers} />
    </div>
  );
};

export default TopLosers;