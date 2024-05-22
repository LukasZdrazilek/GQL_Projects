import {MilestoneCreateLink, MilestoneLink} from "../Milestone/MilestoneLink.jsx";
import {formatDate} from "../Misc/FormatDate.jsx";
import {CardCapsule} from "@hrbolek/uoisfrontend-shared/src";
import {SortableTable} from "../Misc/SortableTable.jsx";

export const MilestonesTableCard = ({project}) => {
    const columns = [
        {key: 'name', label: 'Milníky'},
        {key: 'startdate', label: 'Počátek'},
        {key: 'enddate', label: 'Konec'},
    ];

    const renderRow = (row, columnKey) => {
        if (columnKey === 'name') {
            return <MilestoneLink milestone={row} menu={true}></MilestoneLink>;
        } else {
            return formatDate(row[columnKey]);
        }
    };

    return (
        <CardCapsule title={<MilestoneCreateLink project={project} menu={true}></MilestoneCreateLink>}>
            <SortableTable
                columns={columns}
                data={project?.milestones}
                renderRow={renderRow}
            />
        </CardCapsule>
    );
}