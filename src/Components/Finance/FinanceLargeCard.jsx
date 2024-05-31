import { CardCapsule } from '@hrbolek/uoisfrontend-shared/src'
import Row from 'react-bootstrap/Row'
import Col from 'react-bootstrap/Col'
import { FinanceMediumCard } from './FinanceMediumCard'
import { ProjectLink } from "../Project/ProjectLink.jsx";
import { FinancesTableCard } from "../FinancesTable/FinancesTableCard.jsx";

// @module Projects
/**
 * FinanceLargeCard Component
 * 
 * Main place to display all informations about finance in the scope of project, 
 * Basic informations are stored in the `FinanceMediumCard`,
 * provides a table summarizing finances for the associated project via `FinancesTableCard`.
 *
 * @component
 * 
 * @param {Object} finance - The finance object to be displayed in detail.
 * @param {Object} finance.project - The associated project object.
 * @param {ReactNode} children - Additional content (e.g., charts, graphs, or extra details) to be rendered alongside the finance details and project finances table.
 * 
 * @returns {JSX.Element} The rendered FinanceLargeCard component.
 * @function
 */

export const FinanceLargeCard = ({finance, children}) => {
    return (
        <CardCapsule title={
            <div>
                <span>Projekt: </span>
                <ProjectLink project={finance?.project} menu={true}></ProjectLink>
            </div>
        }>
        <Row>
            <Col md={4}>
                <FinanceMediumCard finance={finance} />
            </Col>
            <Col md={4}>
                {children}
            </Col>
            <Col md={4}>
                <FinancesTableCard project={finance?.project} />
            </Col>
        </Row>
        <br />
    </CardCapsule>

    )
}
