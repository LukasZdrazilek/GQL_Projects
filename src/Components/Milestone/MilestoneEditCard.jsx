/* eslint-disable react/prop-types */
import { CardCapsule, EditableAttributeText } from '@hrbolek/uoisfrontend-shared/src'
import Row from 'react-bootstrap/Row'
import Col from 'react-bootstrap/Col'
import { RawUpdateMilestoneAsyncAction } from '../../Queries/Milestone/UpdateMilestoneAsyncAction'
import { MilestoneEditPrevious, MilestoneEditNext } from "./MilestoneEditMilestones.jsx";

export const MilestoneEditCard = ({milestone}) => {
    return (
        <CardCapsule title={"Milestone " + milestone?.name + " - atributy"}>
            
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
            {/*I case of reworked query*/}
            {/*<Row>*/}
            {/*    <Col>*/}
            {/*        <MilestoneEditPrevious milestone={milestone}></MilestoneEditPrevious>*/}
            {/*    </Col>*/}
            {/*</Row>*/}
            {/*<Row>*/}
            {/*    <Col>*/}
            {/*        <MilestoneEditNext milestone={milestone}></MilestoneEditNext>*/}
            {/*    </Col>*/}
            {/*</Row>*/}
        </CardCapsule>
    )
}
