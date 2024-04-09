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
                <Col>Počátek</Col>
                <Col>{finance?.startdate}</Col>
            </Row>
            <Row>
                <Col>Konec</Col>
                <Col>{finance?.enddate}</Col>
            </Row>
        </CardCapsule>
    )
}
