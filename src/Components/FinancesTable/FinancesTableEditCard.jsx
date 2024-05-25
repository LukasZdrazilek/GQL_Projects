import { CardCapsule } from '@hrbolek/uoisfrontend-shared/src'
import { formatNumber } from '../Misc/FormatNumber.jsx'
import { FinanceLink, FinanceCreateLink} from '../Finance/FinanceLink.jsx'
import { SortableTable } from '../Misc/SortableTable.jsx'
import { CreateButton } from "../Misc/CreateButton.jsx";
import { CreateFinanceAsyncAction } from "../../Queries/Finance/CreateFinanceAsyncAction.js";

/**
 * FinancesTableEditCard Component
 *
 * Displays a sortable table of finances associated with the given project,
 * also includes button at the bottom to add another finance object to the project.
 * Sorting works on each collumn.
 * @component
 *
 * @param {Object} project - project object from @query containing connected finances
 * @param {Object[]} project.finances - An array of finance objects 
 * @param {string} project.finances[].name - name
 * @param {float} project.finances[].amount - amount in czk
 * @param {string} project.finances[].financeType[].name - finance type
 *
 * @returns {JSX.Element} component containing a SortableTable with additional create button
 *
 */


export const FinancesTableEditCard = ({project}) => {
    const data = {
        "project_id" : project.id,
        "name" : "Nové finance",
        "financeType_id" : "9e37059c-de2c-4112-9009-559c8b0396f1"
    }
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
        <div className="form-floating">
        <CardCapsule title={<>Finance pro: <FinanceCreateLink project={project} menu={true}></FinanceCreateLink></>}>
            <SortableTable
                columns={columns}
                data={project?.finances}
                renderRow={renderRow}
                edit={true}
            />
            <CreateButton data={data} asyncCreator={CreateFinanceAsyncAction} />
        </CardCapsule>
        </div>
    );
}
