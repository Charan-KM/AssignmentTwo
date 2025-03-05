import React from "react";
import PropTypes from "prop-types";

const TableHeader = ({ headers }) => {
    return(
        <thead>
            <tr>
                {headers?.map((header,index) => (
                    <th key={index} className="p-3 text-left border-b-2 border-gray-200 bg-gray-100 font-semibold">{header}</th>
                ))}
            </tr>
        </thead>
    )
}

TableHeader.PropTypes={
    headers: PropTypes.arrayOf(PropTypes.string).isRequired
}

export default TableHeader;