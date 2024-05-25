/* eslint-disable react/prop-types */
import { CardCapsule } from '@hrbolek/uoisfrontend-shared/src'
import Row from 'react-bootstrap/Row'
import Col from 'react-bootstrap/Col'
import { formatDate } from '../Misc/FormatDate'
import { MilestoneLink } from '../Milestone/MilestoneLink'
import { ProjectLink } from '../Project/ProjectLink'

/**
 * MilestoneMediumCard Component
 *
 * Displays a  card with attributes of milestone
 * 
 * @component
 *
 * @param {Object} milestone - milestone object from @query
 * @param {string} milestone.name - name
 * @param {Object} milestone.project - parent project to which the milestone belongs
 * @param {Date} milestone.startdate - start date
 * @param {Date} milestone.enddate - end date
 * @param {Object[]} milestone.previous - proceeding milestones as list
 * @param {Object[]} milestone.nexts - following milestones as list
 * 
 * @returns {JSX.Element} The rendered MilestoneMediumCard component.
 */

export const MilestoneMediumCard = ({milestone}) => {
    return (
        <CardCapsule title={
            <div>
                <span>Milník:  </span>
                <MilestoneLink milestone={milestone} menu={true}></MilestoneLink>
            </div>
        }>
            <Row>
                <Col>Název</Col>
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
                <Col>Předcházející</Col>
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
                <Col>Následující</Col>
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
