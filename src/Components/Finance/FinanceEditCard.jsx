/* eslint-disable react/prop-types */
import { CardCapsule, EditableAttributeText, EditableAttributeSelect} from '@hrbolek/uoisfrontend-shared/src'
import Row from 'react-bootstrap/Row'
import Col from 'react-bootstrap/Col'
import { RawUpdateFinanceAsyncAction, ChangedUpdateFinanceAsyncAction } from '../../Queries/UpdateFinanceAsyncAction'
import { FinanceEditType } from './FinanceEditType'

export const FinanceEditCard = ({finance}) => {
    return (
        <CardCapsule title={"Finance " + finance?.name + " - atributy"}>
            
            <Row>
                <Col>Název</Col>
                <Col>{finance?.name}</Col>
            </Row>
            <Row>
                <Col>
                    <EditableAttributeText item={finance} attributeName="name" label="Název" asyncUpdater={RawUpdateFinanceAsyncAction} />
                </Col>
            </Row>
            <Row>
                <Col>
                    <EditableAttributeText item={finance} attributeName="amount" label="Rozpočet" asyncUpdater={ChangedUpdateFinanceAsyncAction} type="number" />
                </Col>
            </Row>
            <Row>
                <Col>Projekt</Col>
                <Col>{finance?.project?.name}</Col>
            </Row>
            <Row>
                <Col>
                    <FinanceEditType finance={finance} />    
                </Col>      
            </Row>
        </CardCapsule>
    )
}
