import {MilestoneCreateLink, MilestoneLink} from "../Milestone/MilestoneLink.jsx";
import {formatDate} from "../Misc/FormatDate.jsx";
import {CardCapsule} from "@hrbolek/uoisfrontend-shared/src";
import {SortableTable} from "../Misc/SortableTable.jsx";
import { CreateButton } from "../Misc/CreateButton.jsx";
import { CreateMilestoneAsyncAction } from "../../Queries/Milestone/CreateMilestoneAsyncAction.js";

/**
 * MilestonesTableEditCard Component
 *
 * Displays a sortable and editable table of milestones associated with a project.
 * Allows for creating, editing, and sorting milestones.
 *
 * @component
 *
 * @param {Object} project - project object from @query
 * @param {Object[]} project.milestones - array of milestones 
 * @param {string} project.milestones[].name - name of milestones
 * @param {Date} project.milestones[].startdate - start dates
 * @param {Date} project.milestones[].enddate - end dates
 *
 * @returns {JSX.Element} A CardCapsule component containing a SortableTable and a CreateButton
 */

export const MilestonesTableEditCard = ({project}) => {
    const data = {
        "project_id": project?.id,
        "name": "Nový milník"
    }

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
        <div className="form-floating">
        <CardCapsule title={<>Milníky pro: <MilestoneCreateLink project={project} menu={true}></MilestoneCreateLink></>}>
            <SortableTable
                columns={columns}
                data={project?.milestones}
                renderRow={renderRow}
                edit={true}
            />
            <CreateButton data={data} asyncCreator={CreateMilestoneAsyncAction} />
        </CardCapsule>
        </div>
    );
}
