import { CardCapsule, EditableAttributeText} from '@hrbolek/uoisfrontend-shared/src'
import Row from 'react-bootstrap/Row'
import Col from 'react-bootstrap/Col'
import { RawUpdateFinanceAsyncAction, ChangedUpdateFinanceAsyncAction } from '../../Queries/Finance/UpdateFinanceAsyncAction'
import { FinanceEditType } from './FinanceEditType'
import { DeleteButton } from '../Misc/DeleteButton'

/**
 * FinanceEditCard Component
 * 
 * Provides a web component/card to edit attributes of finance object
 * This component includes editable fields for the name, amount, and type, and
 * a delete button to remove the finance.
 *
 * @component
 * 
 * @param {Object} finance - finance object to be edited.
 * @param {string} finance.id - ID of the finance object.
 * @param {string} finance.name - name
 * @param {float} finance.amount -  budget amount of the finance in czk
 * @param {Object} finance.financeType - finance type object 
 * 
 * @remarks
 * -  placeholder for the delete action. The actual
 *   `deleteMilestoneAsyncAction` is MIA 
 */

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
