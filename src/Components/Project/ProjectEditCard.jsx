/* eslint-disable react/prop-types */
import { CardCapsule, EditableAttributeText, EditableAttributeSelect } from '@hrbolek/uoisfrontend-shared/src'
import Row from 'react-bootstrap/Row'
import Col from 'react-bootstrap/Col'
import { RawUpdateProjectAsyncAction, ChangedUpdateProjectAsyncAction } from '../../Queries/UpdateProjectAsyncAction'
import { ProjectEditType } from './ProjectEditType'



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
                    <EditableAttributeSelect item={project} attributeName="team_id" label="Tým" asyncUpdater={RawUpdateProjectAsyncAction}>
                        <option value="2d9dcd22-a4a2-11ed-b9df-0242ac120003">Uni</option>
                    </EditableAttributeSelect>      
                </Col>      
            </Row>
            <Row>
                <Col>
                    <EditableAttributeText item={project} attributeName="startdate" label="Datum zahajeni" asyncUpdater={RawUpdateProjectAsyncAction} type="date" />
                </Col>      
            </Row>
            <Row>
                <Col>
                    <EditableAttributeText item={project} attributeName="enddate" label="Datum ukonceni" asyncUpdater={RawUpdateProjectAsyncAction} type="date" />
                </Col>      
            </Row>
            
        </CardCapsule>
    );
};
    // <ProjectEditType project={project} /> pak misto dropboxu