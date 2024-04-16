/* eslint-disable react/prop-types */
import { CardCapsule, EditableAttributeText, EditableAttributeSelect } from '@hrbolek/uoisfrontend-shared/src'
import Row from 'react-bootstrap/Row'
import Col from 'react-bootstrap/Col'
import { UpdateProjectAsyncAction } from '../../Queries/UpdateProjectAsyncAction'
import { ProjectEditType } from './ProjectEditType'

export const ProjectEditCard = ({project}) => {

    return (
        <CardCapsule title={"Projekt " + project?.name + " - atributy"}>
            
            <Row>
                <Col>
                    <EditableAttributeText item={project} attributeName="name" label="Název" asyncUpdater={UpdateProjectAsyncAction} />
                </Col>
            </Row>
            <Row>
                <Col>
                    <EditableAttributeSelect item={project} attributeName="projectType_id" label="Typ" asyncUpdater={UpdateProjectAsyncAction}>
                        <option value="a825d8e1-2e60-4884-afdb-25642db581d8">GAČR</option>
                        <option value="6abcd26b-4f9b-4b49-8a5d-8ec9880acf3e">TAČR</option>          
                        <option value="d5d91230-6e52-4ebf-b467-bfe89311e31a">MV</option>
                        <option value="4a9a0039-3363-4af7-866e-ee172bfb02ff">MŠMT</option>
                    </EditableAttributeSelect>      
                </Col>      
            </Row>
            <Row>
                <Col>
                    <EditableAttributeSelect item={project} attributeName="team_id" label="Tým" asyncUpdater={UpdateProjectAsyncAction}>
                        <option value="2d9dcd22-a4a2-11ed-b9df-0242ac120003">Uni</option>
                    </EditableAttributeSelect>      
                </Col>      
            </Row>
            
        </CardCapsule>
    )
}
    // <ProjectEditType project={project} /> pak misto dropboxu