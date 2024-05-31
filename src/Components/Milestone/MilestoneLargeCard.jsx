import { CardCapsule } from '@hrbolek/uoisfrontend-shared/src'
import Row from 'react-bootstrap/Row'
import Col from 'react-bootstrap/Col'
import { MilestoneMediumCard } from './MilestoneMediumCard'
import { ProjectLink } from "../Project/ProjectLink.jsx";
import { MilestonesTableCard } from "../MilestonesTable/MilestonesTableCard.jsx"

// @module Projects
/**
 * MilestoneLargeCard Component
 *
 * For display of a comprehensive overview of a milestone within the context of its project.
 *
 * This component creates a large card with three main sections:
 *   1. A detailed view of the milestone using `MilestoneMediumCard`.
 *   2. A customizable content area specified by the `children` prop.
 *   3. A table summarizing all milestones in the project using `MilestonesTableCard`.
 *
 * @component
 *
 * @param {Object} milestone - The milestone object to display in detail.
 * @param {Object} milestone.project - The associated project (must contain an `id`).
 * @param {ReactNode} children - Additional content 
 *
 * @returns {JSX.Element} The rendered MilestoneLargeCard component.
 * @function
 */

export const MilestoneLargeCard = ({milestone, children}) => {
    return (
        <CardCapsule title={
            <div>
                <span>Projekt: </span>
                <ProjectLink project={milestone?.project} menu={true}></ProjectLink>
            </div>
        }>
        <Row>
            <Col md={4}>
                <MilestoneMediumCard milestone={milestone} />
                {/* <UserMediumCard user={user}/> */}
            </Col>
            <Col md={4}>
                {children}
            </Col>
            <Col md={4}>
                <MilestonesTableCard project={milestone?.project} />
            </Col>
        </Row>
        <br />
    </CardCapsule>

    )
}
