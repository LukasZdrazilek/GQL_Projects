import React from 'react';
import { CardCapsule } from '@hrbolek/uoisfrontend-shared/src';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import { ProjectLink, ProjectCreateLink } from '../Project/ProjectLink.jsx';
import { formatDate } from '../Misc/FormatDate.jsx';
import { SortableTable } from '../Misc/SortableTable.jsx'; // Assuming you have the SortableTable component

export const ProjectsTableCard = ({projects}) => {
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
            return ''; // Handle other columns if needed
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