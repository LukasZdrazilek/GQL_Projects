/* eslint-disable react/prop-types */
import { CardCapsule, EditableAttributeText, EditableAttributeSelect} from '@hrbolek/uoisfrontend-shared/src'
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
                <Col>
                    <EditableAttributeText item={finance} attributeName="name" label="Název" asyncUpdater={UpdateFinanceAsyncAction} />
                </Col>
            </Row>
            <Row>
                <Col>
                    <EditableAttributeText item={finance} attributeName="amount" label="Rozpočet" asyncUpdater={UpdateFinanceAsyncAction} />
                </Col>
            </Row>
            <Row>
                <Col>Projekt</Col>
                <Col>{finance?.project?.name}</Col>
            </Row>
            <Row>
                <Col>
                    <EditableAttributeSelect item={finance} attributeName="financeType_id" label="Typ" asyncUpdater={UpdateFinanceAsyncAction}>
                        <option value="9e37059c-de2c-4112-9009-559c8b0396f1">Osobní náklady</option>
                    </EditableAttributeSelect>      
                </Col>      
            </Row>
        </CardCapsule>
    )
}
