import {CardCapsule} from "@hrbolek/uoisfrontend-shared/src";
import {ProjectLink} from "../Project/ProjectLink.jsx";
import Row from 'react-bootstrap/Row'
import Col from 'react-bootstrap/Col'

// @module Projects
/**
 * FinancesTableLargeCard Component
 *
 * Provides a layout structure for displaying project-related finance information 
 * (passed via `children`) within a `CardCapsule`. 
 * Header shows which project are the finances tied to
 *
 * @component
 *
 * @param {Object} project - The project object containing relevant information.
 * @param {ReactNode} children - The content to be displayed within the card => tables, cards
 *
 * @returns {JSX.Element} A CardCapsule component containing a row with a single column 
 *                       displaying the provided children.
 * @function
 */

export const FinancesTableLargeCard = ({project, children}) => {
    return (
        <CardCapsule title={<div>
            <span>Projekt: </span>
            <ProjectLink project={project} menu={true}></ProjectLink>
        </div>}>
            <Row>
                <Col md={12}>
                    {children}
                </Col>
            </Row>
        </CardCapsule>

    )
}
