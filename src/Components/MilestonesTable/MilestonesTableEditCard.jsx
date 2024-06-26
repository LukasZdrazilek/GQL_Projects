import { ProjectLink } from "../Project/index.js";
import {CardCapsule} from "@hrbolek/uoisfrontend-shared/src";
import {SortableTable} from "../Misc/SortableTable.jsx";
import { CreateButton } from "../Misc/CreateButton.jsx";
import { CreateMilestoneAsyncAction } from "../../Queries/Milestone/CreateMilestoneAsyncAction.js";
import { SelectInputRework } from "../Misc/SelectInputRework.jsx";
import { EditableAttributeText } from "@hrbolek/uoisfrontend-shared/src";
import {RawUpdateMilestoneAsyncAction} from "../../Queries/Milestone/UpdateMilestoneAsyncAction.js";

// @module Projects
/**
 * MilestonesTableEditCard Component
 *
 * Displays a sortable and editable table of milestones associated with a project.
 * Allows for creating, editing, sorting and accessing Gantt chart for linking the milestones together.
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
 * @function
 */

export const MilestonesTableEditCard = ({ project }) => {
    const data = {
        project_id: project?.id,
        name: "Nový milník"
    };

    const columns = [
        {key: 'name', label: 'Milníky'},
        {key: 'startdate', label: 'Počátek'},
        {key: 'enddate', label: 'Konec'},
        {key: 'action', label: 'Předcházející'},
    ];

    const renderRow = (row, columnKey) => {
        console.log(row)
        if (columnKey === 'name') {
            return <EditableAttributeText item={row} attributeName="name" label="Název" asyncUpdater={RawUpdateMilestoneAsyncAction} />
        } else if (columnKey === 'action') {
            return <SelectInputRework milestone={row} />;
        } else if (columnKey === 'startdate') {
            return <EditableAttributeText item={row} attributeName="startdate" label="Datum zahajeni" asyncUpdater={RawUpdateMilestoneAsyncAction} type="datetime-local" />;
        } else if (columnKey === 'enddate') {
            return <EditableAttributeText item={row} attributeName="enddate" label="Datum ukonceni" asyncUpdater={RawUpdateMilestoneAsyncAction} type="datetime-local" />

        }
    };

    return (
        <div className="form-floating">
            <CardCapsule title={<>Milníky pro: <ProjectLink project={project} menu={true} /></>}>
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
};
