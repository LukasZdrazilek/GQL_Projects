import { CardCapsule } from '@hrbolek/uoisfrontend-shared/src'
import Row from 'react-bootstrap/Row'
import Col from 'react-bootstrap/Col'
import { ProjectMediumCard } from './ProjectMediumCard'
import { ProjectTableCard } from './ProjectTableCard'
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
                {/* <UserMediumCard user={user}/> */}
            </Col>
            <Col md={4}>
                {children}
            </Col>
            <Col md={4}>        
                <ProjectMediumCard project={project} />                            
                {/* <UserRolesCard user={user}/> */}
            </Col>
            
        </Row>
            <ProjectTableCard project={project} />
        <Row>
            <Col>
                {/* <UserRawCard user={user}/> */}
                {JSON.stringify(project)}
            </Col>
        </Row>
    </CardCapsule>

    )
}
