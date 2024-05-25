/* eslint-disable react/prop-types */
import { CardCapsule, EditableAttributeText } from '@hrbolek/uoisfrontend-shared/src'
import Row from 'react-bootstrap/Row'
import Col from 'react-bootstrap/Col'
import { RawUpdateMilestoneAsyncAction } from '../../Queries/Milestone/UpdateMilestoneAsyncAction'
import { DeleteButton } from '../Misc/DeleteButton'
import { MilestoneLink } from "./MilestoneLink.jsx";

/**
 * MilestoneEditCard Component
 *
 * Provides an interface for editing the key attributes of a project milestone. 
 * It also has a placeholder delete button for removing the milestone.
 *
 * @component
 *
 * @param {Object} milestone - object to be edited obtained from @query
 * @param {string} milestone.id - ID of the milestone object
 * @param {string} milestone.name - name
 * @param {Date} milestone.startdate - start date 
 * @param {Date} milestone.enddate - end date
 *
 * @remarks
 * -   `deleteMilestoneAsyncAction` function needs to be implemented and imported for delete button to work.
 */


export const MilestoneEditCard = ({milestone}) => {

    const handleDelete = async (milestoneId) => {               
        try {
            // SEM NAPSAT PAK FCI NA DELETE
            await deleteMilestoneAsyncAction(milestoneId);
            alert('Milník úspěšně smazán');
        } catch (error) {
            console.error('Nepovedlo se smazat milník:', error);
        }
    };

    return (
        <CardCapsule title={<>Milník: <MilestoneLink milestone={milestone} menu={true} /></>}>

            <Row>
                <EditableAttributeText item={milestone} attributeName="name" label="Název" asyncUpdater={RawUpdateMilestoneAsyncAction} />
            </Row>
            <Row>
                <Col>
                    <EditableAttributeText item={milestone} attributeName="startdate" label="Datum zahajeni" asyncUpdater={RawUpdateMilestoneAsyncAction} type="datetime-local" />
                </Col>      
            </Row>
            <Row>
                <Col>
                    <EditableAttributeText item={milestone} attributeName="enddate" label="Datum ukonceni" asyncUpdater={RawUpdateMilestoneAsyncAction} type="datetime-local" />
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
