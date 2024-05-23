import { CardCapsule } from '@hrbolek/uoisfrontend-shared/src'
import Row from 'react-bootstrap/Row'
import Col from 'react-bootstrap/Col'
import { ProjectMediumCard } from './ProjectMediumCard'
import { FinancesTableCard } from '../FinancesTable/FinancesTableCard.jsx'
import { MilestonesTableCard } from '../MilestonesTable/MilestonesTableCard.jsx'
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
                <MilestonesTableCard project={project} />
            </Col>
            <Col md={4}>
                <FinancesTableCard project={project} />
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