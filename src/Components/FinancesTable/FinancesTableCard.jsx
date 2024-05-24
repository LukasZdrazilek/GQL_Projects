import { CardCapsule } from '@hrbolek/uoisfrontend-shared/src'
import { formatNumber } from '../Misc/FormatNumber.jsx'
import { FinanceLink, FinanceCreateLink} from '../Finance/FinanceLink.jsx'
import { SortableTable } from '../Misc/SortableTable.jsx'

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
        <CardCapsule title={<>Finance pro: <FinanceCreateLink project={project} menu={true}></FinanceCreateLink></>}>
        <SortableTable
            columns={columns}
            data={project?.finances}
            renderRow={renderRow}
        />
        </CardCapsule>
    );
}