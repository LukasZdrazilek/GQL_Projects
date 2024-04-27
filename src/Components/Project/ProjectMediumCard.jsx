/* eslint-disable react/prop-types */
import { CardCapsule } from '@hrbolek/uoisfrontend-shared/src'
import Row from 'react-bootstrap/Row'
import Col from 'react-bootstrap/Col'
import { formatDate } from '../Misc/FormatDate'

export const ProjectMediumCard = ({project}) => {
    return (
        <CardCapsule title={"Projekt " + project?.name + " - atributy"}>
            
            <Row>
                <Col>Název</Col>
                <Col>{project?.name}</Col>
            </Row>
           
            <Row>
                <Col>Typ</Col>
                <Col>{project?.projectType?.name}</Col>
            </Row>
            <Row>
                <Col>Tým</Col>
                <Col>{project?.team?.name}</Col>
            </Row>
            <Row>
                <Col>Počátek</Col>
                <Col>{formatDate(project?.startdate)}</Col>
            </Row>
            <Row>
                <Col>Konec</Col>
                <Col>{formatDate(project?.enddate)}</Col>
            </Row>
        </CardCapsule>
    )
}
