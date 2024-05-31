import { CardCapsule } from '@hrbolek/uoisfrontend-shared/src';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import { ProjectLink, ProjectCreateLink } from '../Project/ProjectLink.jsx';
import { formatDate } from '../Misc/FormatDate.jsx';
import { SortableTable } from '../Misc/SortableTable.jsx';

// @module Projects
/**
 * ProjectsTableCard Component
 *
 * Displays a sortable table of projects, providing information such as project name,
 * type, team, and last change date and dropdown menu for creating new projects.
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

export const ProjectsTableCard = ({projects}) => {
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
            return <ProjectLink project={project} menu={true}></ProjectLink>;
        } else if (columnKey === 'startdate') {
            return formatDate(project.startdate);
        } else if (columnKey === 'enddate') {
            return formatDate(project.enddate);
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
        <CardCapsule title={<div>
            <ProjectCreateLink menu={true}></ProjectCreateLink>
        </div>}>
            <Row>
                <Col>
                    <SortableTable
                        columns={columns}
                        data={projects}
                        renderRow={renderRow}
                    />
                </Col>
            </Row>
        </CardCapsule>
    )
}
