import React from "react";
import TableHeader from "./TableHeader";
import TableRow from "./TableRow";
import { TABLE_HEADERS } from "../../constants/enums";
import { COMPANY_DATA } from "../../constants/mockData";

const TableData = () => {
    const headers = TABLE_HEADERS.COMPANY_TABLE;
    const data = COMPANY_DATA;

    if (!headers || !data || headers.length === 0 || data.length === 0) {
        return <div>Data Unavailable</div>;
    }

    return (
        <div className="overflow-x-auto">
            <table className="w-full border-collapse">
                <TableHeader headers={headers} />
                <tbody>
                    {data?.map((row, index) => (
                        <TableRow key={index} row={row} headers={headers} />
                    ))}
                </tbody>
            </table>
        </div>
    );
};

export default TableData;