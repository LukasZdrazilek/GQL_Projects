/* eslint-disable react/prop-types */
import { CardCapsule, EditableAttributeText, EditableAttributeSelect } from '@hrbolek/uoisfrontend-shared/src'
import Row from 'react-bootstrap/Row'
import Col from 'react-bootstrap/Col'
import { RawUpdateMilestoneAsyncAction } from '../../Queries/UpdateMilestoneAsyncAction'

export const MilestoneEditCard = ({milestone}) => {
    return (
        <CardCapsule title={"Milestone " + milestone?.name + " - atributy"}>
            
            <Row>
                <Col>Název</Col>
                <Col>{milestone?.name}</Col>
            </Row>
            <Row>
                <EditableAttributeText item={milestone} attributeName="name" label="Název" asyncUpdater={RawUpdateMilestoneAsyncAction} />
            </Row>
            <Row>
                <Col>
                    <EditableAttributeText item={milestone} attributeName="startdate" label="Datum zahajeni" asyncUpdater={RawUpdateMilestoneAsyncAction} type="date" />
                </Col>      
            </Row>
            <Row>
                <Col>
                    <EditableAttributeText item={milestone} attributeName="enddate" label="Datum ukonceni" asyncUpdater={RawUpdateMilestoneAsyncAction} type="date" />
                </Col>      
            </Row>
        </CardCapsule>
    )
}
