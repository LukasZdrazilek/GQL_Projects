/* eslint-disable react/prop-types */
import { CardCapsule, EditableAttributeText } from '@hrbolek/uoisfrontend-shared/src'
import { ProjectLink } from "./ProjectLink.jsx";
import Row from 'react-bootstrap/Row'
import Col from 'react-bootstrap/Col'
import { RawUpdateProjectAsyncAction} from '../../Queries/Project/UpdateProjectAsyncAction'
import { ProjectEditType } from './ProjectEditType'
import { ProjectEditGroup} from "./ProjectEditGroup.jsx";

// @module Projects
/**
 * ProjectEditCard Component
 *
 * Provides a one place to edit all project attributes in one place
 *
 * @component
 *
 * @param {Object} project - project to be edited
 * @param {string} project.id - ID
 * @param {string} project.name - current name, 
 * @param {Object} [project.type] - current type of the project 
 * @param {string} [project.type.id] - ID of the current  type (if possible).
 * @param {Object} [project.group] - current group working on the project (optional).
 * @param {string} [project.group.id] - group id
 * @param {Date} project.startdate - start date
 * @param {Date} project.enddate - end date
 * @function
 */


export const ProjectEditCard = ({project}) => {
    return (
        <CardCapsule title={
            <>
            <span>Editace atributů projektu: </span>
            <ProjectLink project={project} menu={true} />
            </>
        }>
            <Row>
                <Col>
                    <EditableAttributeText item={project} attributeName="name" label="Název" asyncUpdater={RawUpdateProjectAsyncAction} />
                </Col>
            </Row>
            <Row>
                <Col>
                    <ProjectEditType project={project} />   
                </Col>      
            </Row>
            <Row>
                <Col>
                    <ProjectEditGroup project={project} />
                </Col>
            </Row>
            <Row>
                <Col>
                    <EditableAttributeText item={project} attributeName="startdate" label="Datum zahájení" asyncUpdater={RawUpdateProjectAsyncAction} type="datetime-local" />
                </Col>      
            </Row>
            <Row>
                <Col>
                    <EditableAttributeText item={project} attributeName="enddate" label="Datum ukončení" asyncUpdater={RawUpdateProjectAsyncAction} type="datetime-local" />
                </Col>      
            </Row>
            
        </CardCapsule>
    );
};
