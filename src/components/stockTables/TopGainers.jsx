import React, { useEffect } from "react";
import { useSelector, useDispatch } from "react-redux";
import { fetchTopGainers } from "../../store/reducers/stockSlice";
import { selectTopGainers, selectStocksStatus } from "../../store/selectors/stocks";
import TableComponent from "../core/TableComponent";

const TopGainers = () => {
  const dispatch = useDispatch();

  const topGainers = useSelector(selectTopGainers);
  const { status, error } = useSelector(selectStocksStatus);

  useEffect(() => {
    dispatch(fetchTopGainers());
  }, [dispatch]);

  const headers = ["ticker", "price", "change_amount", "change_percentage"];

  if (status === "loading") return <div>Loading Top Gainers...</div>;
  if (status === "failed") return <div>Error: {error}</div>;

  return (
    <div>
      <h2 className="text-xl font-bold mb-4 text-green-500">Top Gainers</h2>
      <TableComponent headers={headers} data={topGainers} />
    </div>
  );
};

export default TopGainers;