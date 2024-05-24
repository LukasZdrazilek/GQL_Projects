import { useState } from 'react';
import { formatDate } from "../Misc/FormatDate.jsx"; // Ensure you import the formatDate function

export const SortableTable = ({ columns, data, renderRow }) => {
    const [sortBy, setSortBy] = useState(null);
    const [sortOrder, setSortOrder] = useState('asc');

    const toggleSortOrder = () => {
        setSortOrder(sortOrder === 'asc' ? 'desc' : 'asc');
    };

    const getValueByPath = (obj, path) => {
        return path.split('.').reduce((acc, key) => acc[key], obj);
    };

    const sortedData = () => {
        if (!sortBy) return data;

        return data.slice().sort((a, b) => {
            const aValue = getValueByPath(a, sortBy);
            const bValue = getValueByPath(b, sortBy);

            if (aValue < bValue) return sortOrder === 'asc' ? -1 : 1;
            if (aValue > bValue) return sortOrder === 'asc' ? 1 : -1;
            return 0;
        });
    };

    const handleSort = (column) => {
        if (sortBy === column) {
            toggleSortOrder();
        } else {
            setSortBy(column);
            setSortOrder('asc');
        }
    };

    const getRowClass = (startdate, enddate) => {
        const today = new Date();
        const startDate = new Date(startdate);
        const endDate = new Date(enddate);

        if (endDate < today) {
            return 'table-danger';
        } else if (startDate <= today && endDate >= today) {
            return 'table-success';
        } else {
            return '';
        }
    };

    return (
        <table className="table">
            <thead>
            <tr>
                {columns.map((column) => (
                    <th key={column.key} onClick={() => handleSort(column.key)} className="sortable-header">
                        {column.label}
                    </th>
                ))}
            </tr>
            </thead>
            <tbody>
            {sortedData().map((row, index) => (
                <tr key={index} className={getRowClass(row.startdate, row.enddate)}>
                    {columns.map((column) => (
                        <td key={column.key}>{renderRow(row, column.key)}</td>
                    ))}
                </tr>
            ))}
            </tbody>
        </table>
    );
};
