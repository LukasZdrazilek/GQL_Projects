/* eslint-disable react/prop-types */
import { CardCapsule, EditableAttributeText } from '@hrbolek/uoisfrontend-shared/src'
import Row from 'react-bootstrap/Row'
import Col from 'react-bootstrap/Col'
import { UpdateFinanceAsyncAction } from '../../Queries/UpdateFinanceAsyncAction'

export const FinanceEditCard = ({finance}) => {
    return (
        <CardCapsule title={"Finance " + finance?.name + " - atributy"}>
            
            <Row>
                <Col>Název</Col>
                <Col>{finance?.name}</Col>
            </Row>
            <Row>
                <EditableAttributeText item={finance} attributeName="name" label="Název" asyncUpdater={UpdateFinanceAsyncAction} />
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
