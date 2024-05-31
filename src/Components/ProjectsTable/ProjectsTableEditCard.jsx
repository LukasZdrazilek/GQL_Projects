import { CardCapsule } from '@hrbolek/uoisfrontend-shared/src';
import { ProjectLink, ProjectCreateLink } from '../Project/ProjectLink.jsx';
import { formatDate } from '../Misc/FormatDate.jsx';
import { SortableTable } from '../Misc/SortableTable.jsx';
import { CreateButton } from "../Misc/CreateButton.jsx";
import { CreateProjectAsyncAction } from "../../Queries/Project/CreateProjectAsyncAction.js";

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
        { key: 'projectType.name', label: 'Typ' },
        { key: 'group.name', label: 'Tým' },
        { key: 'lastchange', label: 'Datum změny' }
    ];

    const renderRow = (project, columnKey) => {
        if (columnKey === 'name') {
            return <ProjectLink project={project} menu={true}></ProjectLink>;
        } else if (columnKey === 'lastchange') {
            return formatDate(project.lastchange);
        } else if (columnKey === 'projectType.name') {
            return project.projectType.name;
        } else if (columnKey === 'group.name') {
            return project.group?.name;
        } else {
            return '';
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
