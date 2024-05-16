import { CardCapsule } from '@hrbolek/uoisfrontend-shared/src'
import Row from 'react-bootstrap/Row'
import Col from 'react-bootstrap/Col'
import { ProjectMediumCard } from './ProjectMediumCard'
import { ProjectTableCard, ProjectMilestonesTableCard, ProjectFinancesTableCard } from './ProjectTableCard'
// import { UserRolesCard } from './UserRolesCard'
// import { UserRawCard } from './UserRawCard'
// import { UserMediumCard } from './UserMediumCard'
import { ProjectLink } from './ProjectLink'

export const ProjectLargeCard = ({project, children}) => {
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
                <ProjectMilestonesTableCard project={project} />
            </Col>
            <Col md={4}>
                <ProjectFinancesTableCard project={project} />
            </Col>
            
        </Row>
    </CardCapsule>

    )
}

export const ProjectEditLargeCard = ({project, children}) => {
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
                </Col>

            </Row>
        </CardCapsule>

    )
}

export const ProjectMilestonesLargeCard = ({project, children}) => {
    return (
        <CardCapsule title={<div>
            <span>Projekt: </span>
            <ProjectLink project={project} menu={true}></ProjectLink>
        </div>}>

            <ProjectMilestonesTableCard project={project} />
        </CardCapsule>

    )
}

export const ProjectFinancesLargeCard = ({project, children}) => {
    return (
        <CardCapsule title={<div>
            <span>Projekt: </span>
            <ProjectLink project={project} menu={true}></ProjectLink>
        </div>}>

            <ProjectFinancesTableCard project={project} />
        </CardCapsule>

    )
}