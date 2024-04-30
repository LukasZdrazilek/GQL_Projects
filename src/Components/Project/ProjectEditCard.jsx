/* eslint-disable react/prop-types */
import { CardCapsule, EditableAttributeText, EditableAttributeSelect } from '@hrbolek/uoisfrontend-shared/src'
import Row from 'react-bootstrap/Row'
import Col from 'react-bootstrap/Col'
import { RawUpdateProjectAsyncAction} from '../../Queries/UpdateProjectAsyncAction'
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