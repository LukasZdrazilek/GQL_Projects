import { CardCapsule } from '@hrbolek/uoisfrontend-shared/src'
import Row from 'react-bootstrap/Row'
import Col from 'react-bootstrap/Col'
import { MilestoneMediumCard } from './MilestoneMediumCard'
import { ProjectLink } from "../Project/ProjectLink.jsx";
import { MilestonesTableCard } from "../MilestonesTable/MilestonesTableCard.jsx"

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