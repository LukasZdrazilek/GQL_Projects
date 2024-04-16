/* eslint-disable react/prop-types */
import { CardCapsule } from '@hrbolek/uoisfrontend-shared/src'
import Row from 'react-bootstrap/Row'
import Col from 'react-bootstrap/Col'

export const FinanceMediumCard = ({finance}) => {
    return (
        <CardCapsule title={"Finance " + finance?.name + " - atributy"}>
            
            <Row>
                <Col>Název</Col>
                <Col>{finance?.name}</Col>
            </Row>
            <Row>
                <Col>Rozpočet</Col>
                <Col>{finance?.amount}</Col>
            </Row>
            <Row>
                <Col>Projekt</Col>
                <Col>{finance?.project?.name}</Col>
            </Row>
        </CardCapsule>
    )
}
