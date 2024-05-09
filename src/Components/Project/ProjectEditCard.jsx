/* eslint-disable react/prop-types */
import { CardCapsule, EditableAttributeText } from '@hrbolek/uoisfrontend-shared/src'
import Row from 'react-bootstrap/Row'
import Col from 'react-bootstrap/Col'
import { RawUpdateProjectAsyncAction} from '../../Queries/UpdateProjectAsyncAction'
import { ProjectEditType } from './ProjectEditType'
import { ProjectEditGroup} from "./ProjectEditGroup.jsx";


export const ProjectEditCard = ({project}) => {
    return (
        <CardCapsule title={"Projekt " + project?.name + " - atributy"}>
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
                    <EditableAttributeText item={project} attributeName="startdate" label="Datum zahajeni" asyncUpdater={RawUpdateProjectAsyncAction} type="datetime-local" />
                </Col>      
            </Row>
            <Row>
                <Col>
                    <EditableAttributeText item={project} attributeName="enddate" label="Datum ukonceni" asyncUpdater={RawUpdateProjectAsyncAction} type="datetime-local" />
                </Col>      
            </Row>
            <Row>
                <Col>
                    <ProjectEditGroup project={project} />
                </Col>
            </Row>
            
        </CardCapsule>
    );
};