import { CardCapsule } from "@hrbolek/uoisfrontend-shared/src";
import { ProjectLink } from "../Project/ProjectLink.jsx";
import Row from 'react-bootstrap/Row'
import Col from 'react-bootstrap/Col'

export const MilestonesTableLargeCard = ({project, children}) => {
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