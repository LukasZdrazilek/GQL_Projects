/* eslint-disable react/prop-types */
import { CardCapsule } from '@hrbolek/uoisfrontend-shared/src'
import Row from 'react-bootstrap/Row'
import Col from 'react-bootstrap/Col'
import { formatDate } from '../Misc/FormatDate'

export const MilestoneMediumCard = ({milestone}) => {
    return (
        <CardCapsule title={"Milestone " + milestone?.name + " - atributy"}>
            
            <Row>
                <Col>Název</Col>
                <Col>{milestone?.name}</Col>
            </Row>
            <Row>
                <Col>Počátek</Col>
                <Col>{formatDate(milestone?.startdate)}</Col>
            </Row>
            <Row>
                <Col>Konec</Col>
                <Col>{formatDate(milestone?.enddate)}</Col>
            </Row>
        </CardCapsule>
    )
}
