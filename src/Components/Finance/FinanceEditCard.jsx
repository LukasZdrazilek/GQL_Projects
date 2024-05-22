import { CardCapsule, EditableAttributeText} from '@hrbolek/uoisfrontend-shared/src'
import Row from 'react-bootstrap/Row'
import Col from 'react-bootstrap/Col'
import { RawUpdateFinanceAsyncAction, ChangedUpdateFinanceAsyncAction } from '../../Queries/Finance/UpdateFinanceAsyncAction'
import { FinanceEditType } from './FinanceEditType'

export const FinanceEditCard = ({finance}) => {
    return (
        <CardCapsule title={"Finance " + finance?.name + " - atributy"}>
            
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
                <Col>
                    <FinanceEditType finance={finance} />    
                </Col>      
            </Row>
        </CardCapsule>
    )
}
