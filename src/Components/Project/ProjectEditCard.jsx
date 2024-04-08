/* eslint-disable react/prop-types */
import { CardCapsule, EditableAttributeText } from '@hrbolek/uoisfrontend-shared/src'
import Row from 'react-bootstrap/Row'
import Col from 'react-bootstrap/Col'
import { UpdateProjectAsyncAction } from '../../Queries/UpdateProjectAsyncAction'

export const ProjectEditCard = ({project}) => {
    return (
        <CardCapsule title={"Projekt " + project?.name + " - atributy"}>
            
            <Row>
                <Col>Název</Col>
                <Col>{project?.name}</Col>
            </Row>
            <Row>
                <EditableAttributeText item={project} attributeName="name" label="Název" asyncUpdater={UpdateProjectAsyncAction} />
            </Row>
            <Row>
                <Col>Počátek</Col>
                <Col>{project?.startdate}</Col>
            </Row>
            <Row>
                <Col>Konec</Col>
                <Col>{project?.enddate}</Col>
            </Row>
        </CardCapsule>
    )
}
