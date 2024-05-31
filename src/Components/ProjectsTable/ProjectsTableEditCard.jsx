import {CardCapsule, EditableAttributeText} from '@hrbolek/uoisfrontend-shared/src';
import { ProjectCreateLink } from '../Project/ProjectLink.jsx';
import { formatDate } from '../Misc/FormatDate.jsx';
import { SortableTable } from '../Misc/SortableTable.jsx';
import { CreateButton } from "../Misc/CreateButton.jsx";
import { CreateProjectAsyncAction } from "../../Queries/Project/CreateProjectAsyncAction.js";
import {RawUpdateProjectAsyncAction} from "../../Queries/Project/UpdateProjectAsyncAction.js";
import {ProjectEditType} from "../Project/ProjectEditType.jsx";
import {ProjectEditGroup} from "../Project/ProjectEditGroup.jsx";

// @module Projects
/**
 * ProjectsTableEditCard Component
 *
 * Displays a sortable and editable table of projects, allowing for creation, viewing,
 * editing, and deleting of projects. 
 *
 * @component
 *
 * @param {Object[]} projects - array of projects
 * @param {string} projects[].id - their IDs
 * @param {string} projects[].name - names
 * @param {Object} projects[].projectType - types
 * @param {Object} projects[].group - groups
 * @param {Date} projects[].lastchange - date of last edit or change
 *
 * @returns {JSX.Element} A CardCapsule component containing a sortable table to display projects,
 *                        with a "Create Project" functionality
 * @function
 */

export const ProjectsTableEditCard = ({projects}) => {
    const data = {
        "projectType_id" : "a825d8e1-2e60-4884-afdb-25642db581d8",
        "name" : "Nový projekt"
    }
    const columns = [
        { key: 'name', label: 'Projekt' },
        { key: 'startdate', label: 'Začátek' },
        { key: 'enddate', label: 'Konec' },
        { key: 'projectType.name', label: 'Typ' },
        { key: 'group.name', label: 'Tým' },
        { key: 'lastchange', label: 'Datum změny' }
    ];

    const renderRow = (project, columnKey) => {
        if (columnKey === 'name') {
            return <EditableAttributeText item={project} attributeName="name" label="Název" asyncUpdater={RawUpdateProjectAsyncAction} />;
        } else if (columnKey === 'startdate') {
            return <EditableAttributeText item={project} attributeName="startdate" label="Datum zahájení" asyncUpdater={RawUpdateProjectAsyncAction} type="datetime-local" />;
        } else if (columnKey === 'enddate') {
            return <EditableAttributeText item={project} attributeName="enddate" label="Datum ukončení" asyncUpdater={RawUpdateProjectAsyncAction} type="datetime-local" />;
        } else if (columnKey === 'projectType.name') {
            return <ProjectEditType project={project} />;
        } else if (columnKey === 'group.name') {
            return <ProjectEditGroup project={project} />;
        } else if (columnKey === 'lastchange') {
            return formatDate(project.lastchange);
        }
    };

    return (
        <div className="form-floating">
        <CardCapsule title={
            <ProjectCreateLink menu={true}></ProjectCreateLink>}>
                <SortableTable
                    columns={columns}
                    data={projects}
                    renderRow={renderRow}
                    edit={true}
                />
                <CreateButton data={data} asyncCreator={CreateProjectAsyncAction} />
        </CardCapsule>
        </div>
    )
}
