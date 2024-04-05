/* eslint-disable react/prop-types */
import { CardCapsule } from '@hrbolek/uoisfrontend-shared/src'
import Row from 'react-bootstrap/Row'
import Col from 'react-bootstrap/Col'

export const ProjectMediumCard = ({project}) => {
    return (
        <CardCapsule title={"Projekt " + project?.name + " - atributy"}>
            
            <Row>
                <Col>Název</Col>
                <Col>{project?.name}</Col>
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
