import { CardCapsule } from '@hrbolek/uoisfrontend-shared/src'
import Row from 'react-bootstrap/Row'
import Col from 'react-bootstrap/Col'
import { ProjectMediumCard } from './ProjectMediumCard'
import { ProjectLink } from './ProjectLink'

// @module Projects
/**
 * ProjectLargeCard Component
 *
 * Displays a comprehensive overview of a project and its assigned milestones and finances.
 *
 * @component
 *
 * @param {Object} project - The project object containing project details.
 * @param {ReactNode} children - 
 *
 * @returns {JSX.Element} A CardCapsule component containing one row with three columns:
 *   - ProjectMediumCard displaying project details.
 *   - MilestonesTableCard displaying project milestones.
 *   - FinancesTableCard displaying project finances.
 * @function
 */

export const ProjectLargeCard = ({project, children, extraChildren}) => {
    return (
        <CardCapsule title={<div>
            <span>Projekt: </span>
            <ProjectLink project={project} menu={true}></ProjectLink>
        </div>}>
        <Row>
            <Col md={4}>
                <ProjectMediumCard project={project} />
            </Col>
            <Col md={4}>
                {children}
                {/*<MilestonesTableCard project={project} />*/}
            </Col>
            <Col md={4}>
                {extraChildren}
                {/*<FinancesTableCard project={project} />*/}
            </Col>
        </Row>
    </CardCapsule>
    )
}