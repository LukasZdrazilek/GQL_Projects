import { useState } from 'react';
import { DeleteButton } from '@hrbolek/uoisfrontend-shared/src/Components/DeleteButton.jsx'

export const SortableTable = ({ columns, data, renderRow, edit = false }) => {
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

    return (
        <table className="table">
            <thead>
            <tr>
                {columns.map((column) => (
                    <th key={column.key} onClick={() => handleSort(column.key)} className="sortable-header">
                        {column.label}
                    </th>
                ))}
                {edit && (
                    <td>
                        <DeleteButton onClick={"#"}>Smazat vše</DeleteButton>
                    </td>
                )}
            </tr>
            </thead>
            <tbody>
            {sortedData().map((row, index) => (
                <tr key={index}>
                    {columns.map((column) => (
                        <td key={column.key}>{renderRow(row, column.key)}</td>
                    ))}
                    {edit && (
                        <td>
                            <DeleteButton onClick={"#"}>Smazat</DeleteButton>
                        </td>
                    )}

                </tr>
            ))}
            </tbody>
        </table>
    );
};
