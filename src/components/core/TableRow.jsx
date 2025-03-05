import React from "react";
import PropTypes from "prop-types";

const TableRow = ({row, headers}) => {
    return (
        <tr>
            {headers?.map((header, rowindex) => {
                const key = header;
                return (
                    <td key={rowindex} className="p-3 border-b border-gray-200"> {row[key] || ''} </td>
                )
            })}
        </tr>
    )
}

TableRow.propTypes = {
    row:PropTypes.object.isRequired,
    headers:PropTypes.arrayOf(PropTypes.string).isRequired
}

export default TableRow;