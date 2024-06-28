import { useState } from "react";
import { MilestoneCreateLink, MilestoneLink } from "../Milestone/MilestoneLink.jsx";
import { formatDate } from "../Misc/FormatDate.jsx";
import { CardCapsule } from "@hrbolek/uoisfrontend-shared/src";
import { SortableTable } from "../Misc/SortableTable.jsx";
import { FrappeGantt } from "../Misc/FrappeGantt.jsx"

// @module Projects
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
 * @function
 */

export const MilestonesTableCard = ({ project }) => {
    const [viewMode, setViewMode] = useState('table');
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

    const milestones = project?.milestones?.map(item => ({
        id: item.id,
        name: item.name,
        start: item.startdate,
        end: item.enddate,
        dependencies: item?.previous?.map(dep => dep.id).join(", ") || ""
    }));

    return (
        <>
        <CardCapsule title={
            <div className="d-flex justify-content-between align-items-center">
                <div>
                    <MilestoneCreateLink project={project} menu={true}>
                        <span>Milníky:</span>
                    </MilestoneCreateLink>
                </div>
                <button className='btn btn-light' onClick={() => setViewMode(viewMode === 'table' ? 'gantt' : 'table')}>
                    {viewMode === 'table' ? 'Přepnout na Ganttův diagram' : 'Přepnout na tabulku'}
                </button>
            </div>}>
            {viewMode === 'table' ? (
                <SortableTable
                    columns={columns}
                    data={project?.milestones}
                    renderRow={renderRow}
                />
            ) : (
                <FrappeGantt tasks={milestones} />
            )}
        </CardCapsule>
        </>
    );
};
