import { CardCapsule } from '@hrbolek/uoisfrontend-shared/src'
import { formatNumber } from '../Misc/FormatNumber.jsx'
import { FinanceLink } from '../Finance/FinanceLink.jsx'
import { SortableTable } from '../Misc/SortableTable.jsx'
import { ProjectLink } from "../Project/index.js";


// @module Projects
/**
 * FinancesTableCard Component
 *
 * Displays a sortable table of finances associated with the given project.
 * Sorting works on each collumn.
 * @component
 *
 * @param {Object} project - project object from @query containing connected finances
 * @param {Object[]} project.finances - An array of finance objects 
 * @param {string} project.finances[].name - name
 * @param {float} project.finances[].amount - amount in czk
 * @param {string} project.finances[].financeType[].name - finance type
 *
 * @returns {JSX.Element} component containing a SortableTable for displaying the finances.
 * @function
 */

export const FinancesTableCard = ({project}) => {
    const columns = [
        { key: 'name', label: 'Finance' },
        { key: 'amount', label: 'Částka' },
        { key: 'financeType', label: 'Typ' }
    ];

    const renderRow = (row, columnKey) => {
        if (columnKey === 'name') {
            return <FinanceLink finance={row} menu={true}></FinanceLink>;
        } else if (columnKey === 'financeType') {
            return row.financeType.map((type) => type.name).join(', ');
        } else {
            return formatNumber(row[columnKey]) + ' Kč';
        }
    };

    return (
        <CardCapsule title={
            <>
                <span>Finance pro: </span>
                <ProjectLink project={project} menu={true} />
            </>
        }>
        <SortableTable
            columns={columns}
            data={project?.finances}
            renderRow={renderRow}
        />
        </CardCapsule>
    );
}
