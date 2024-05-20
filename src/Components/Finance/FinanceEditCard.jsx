/* eslint-disable react/prop-types */
import { CardCapsule, EditableAttributeText, EditableAttributeSelect} from '@hrbolek/uoisfrontend-shared/src'
import Row from 'react-bootstrap/Row'
import Col from 'react-bootstrap/Col'
import { RawUpdateFinanceAsyncAction, ChangedUpdateFinanceAsyncAction } from '../../Queries/Finance/UpdateFinanceAsyncAction'
import { FinanceEditType } from './FinanceEditType'
import { DeleteButton } from '../Misc/DeleteButton'

export const FinanceEditCard = ({finance}) => {

    const handleDelete = async (financeId) => {               
        try {
            // SEM NAPSAT PAK FCI NA DELETE
            await deleteMilestoneAsyncAction(financeId);
            alert('Finance úspěšně smazány');
        } catch (error) {
            console.error('Nepovedlo se smazat finance:', error);
        }
    };

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
            <Row>
                <Col>
                    <DeleteButton onClick={handleDelete}>Delete</DeleteButton>
                </Col>
            </Row>
        </CardCapsule>
    )
}
