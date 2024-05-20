import { CardCapsule } from '@hrbolek/uoisfrontend-shared/src'
import Row from 'react-bootstrap/Row'
import Col from 'react-bootstrap/Col'
import { ProjectLink } from "../Project/ProjectLink.jsx";

export const MilestonesLinkLargeCard = ({project, children}) => {
    return (
        <CardCapsule title={
            <div>
                <span>Projekt: </span>
                <ProjectLink project={project} menu={true}></ProjectLink>
            </div>
        }>
            <Row>

            </Row>
        </CardCapsule>
    )
}