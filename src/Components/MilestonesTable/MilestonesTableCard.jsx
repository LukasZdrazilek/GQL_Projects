import { MilestoneCreateLink, MilestoneLink } from "../Milestone/MilestoneLink.jsx";
import { formatDate } from "../Misc/FormatDate.jsx";
import { CardCapsule } from "@hrbolek/uoisfrontend-shared/src";
import { SortableTable } from "../Misc/SortableTable.jsx";

/**
 * MilestonesTableEditCard Component
 *
 * Displays a sortable and editable table of milestones associated with a project.
 * Allows for creating, editing, and sorting milestones.
 *
 * @component
 *
 * @param {Object} project - The project object from @query
 * @param {Object[]} project.milestones - list of milestones
 * @param {string} project.milestones[].name - their name
 * @param {Date} project.milestones[].startdate - start date
 * @param {Date} project.milestones[].enddate - end date
 *
 * @returns {JSX.Element} A CardCapsule component containing a SortableTable along with a CreateButton
 */

export const MilestonesTableCard = ({ project }) => {
    const columns = [
        { key: 'name', label: 'Milníky' },
        { key: 'startdate', label: 'Počátek' },
        { key: 'enddate', label: 'Konec' },
    ];

    const renderRow = (row, columnKey) => {
        if (columnKey === 'name') {
            return <MilestoneLink milestone={row} menu={true}></MilestoneLink>;
        } else {
            return formatDate(row[columnKey]);
        }
    };

    return (
        <CardCapsule title={<>Milníky pro: <MilestoneCreateLink project={project} menu={true}></MilestoneCreateLink></>}>
            <SortableTable
                columns={columns}
                data={project?.milestones}
                renderRow={renderRow}
            />
        </CardCapsule>
    );
};
