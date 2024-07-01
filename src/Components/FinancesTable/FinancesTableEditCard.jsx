import {CardCapsule, EditableAttributeText} from '@hrbolek/uoisfrontend-shared/src'
import { ProjectLink } from "../Project/index.js";
import { SortableTable } from '../Misc/SortableTable.jsx'
import { CreateButton } from "../Misc/CreateButton.jsx";
import { CreateFinanceAsyncAction } from "../../Queries/Finance/CreateFinanceAsyncAction.js";
import {
    ChangedUpdateFinanceAsyncAction,
    RawUpdateFinanceAsyncAction
} from "../../Queries/Finance/UpdateFinanceAsyncAction.js";
import {FinanceEditType} from "../Finance/FinanceEditType.jsx";

// @module Projects
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
 * @function
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
            return <EditableAttributeText item={row} attributeName="name" label="Název" asyncUpdater={RawUpdateFinanceAsyncAction} />;
        } else if (columnKey === 'financeType') {
            return <FinanceEditType finance={row} />;
        } else if (columnKey === 'amount') {
            return <EditableAttributeText item={row} attributeName="amount" label="Rozpočet" asyncUpdater={ChangedUpdateFinanceAsyncAction} type="number" />;
        }
    };

    return (
        <div className="form-floating">
        <CardCapsule title={<>Finance pro: <ProjectLink project={project} menu={true} /></>}>
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
