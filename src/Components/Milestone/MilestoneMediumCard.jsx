/* eslint-disable react/prop-types */
import { CardCapsule } from '@hrbolek/uoisfrontend-shared/src'
import Row from 'react-bootstrap/Row'
import Col from 'react-bootstrap/Col'
import { formatDate } from '../Misc/FormatDate'
import { MilestoneLink } from '../Milestone/MilestoneLink'
import { ProjectLink } from '../Project/ProjectLink'

export const MilestoneMediumCard = ({milestone}) => {
    return (
        <CardCapsule title={
            <div>
                <span>Milnik </span>
                <MilestoneLink milestone={milestone} menu={true}></MilestoneLink>
            </div>
        }>
            <Row>
                <Col>Nazev</Col>
                <Col>{milestone?.name}</Col>
            </Row>
            <Row>
                <Col>Projekt</Col>
                <Col><ProjectLink project={milestone?.project} menu={true}></ProjectLink></Col>
            </Row>
            <Row>
                <Col>Počátek</Col>
                <Col>{formatDate(milestone?.startdate)}</Col>
            </Row>
            <Row>
                <Col>Konec</Col>
                <Col>{formatDate(milestone?.enddate)}</Col>
            </Row>
            <Row>
                <Col>Predchazejici</Col>
                <Col>
                    <table>
                        <tbody>
                            {milestone.previous.map((previous, typeIndex) => (
                                <tr key={typeIndex}>
                                    <td><MilestoneLink milestone={previous} menu={true}></MilestoneLink></td>
                                </tr>
                            ))}
                        </tbody>
                    </table>
                </Col>
            </Row>
            <Row>
                <Col>Nasledujici</Col>
                <Col>
                    <table>
                        <tbody>
                            {milestone.nexts.map((nexts, typeIndex) => (
                                <tr key={typeIndex}>
                                    <td><MilestoneLink milestone={nexts} menu={true}></MilestoneLink></td>
                                </tr>
                            ))}
                        </tbody>
                    </table>
                </Col>
            </Row>
        </CardCapsule>
    )
}
