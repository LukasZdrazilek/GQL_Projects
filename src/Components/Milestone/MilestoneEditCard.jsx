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
                <Col>Počátek</Col>
                <Col>{milestone?.startdate}</Col>
            </Row>
            <Row>
                <Col>Konec</Col>
                <Col>{milestone?.enddate}</Col>
            </Row>
        </CardCapsule>
    )
}
