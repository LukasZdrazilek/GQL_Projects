import { CardCapsule } from '@hrbolek/uoisfrontend-shared/src'
import Row from 'react-bootstrap/Row'
import Col from 'react-bootstrap/Col'
import { MilestoneMediumCard } from './MilestoneMediumCard'
// import { UserRolesCard } from './UserRolesCard'
// import { UserRawCard } from './UserRawCard'
// import { UserMediumCard } from './UserMediumCard'
import { MilestoneLink } from '../Milestone/MilestoneLink'

export const MilestoneLargeCard = ({milestone, children}) => {
    return (
        <CardCapsule title={
            <div>
                <span>Milnik </span>
                <MilestoneLink milestone={milestone} menu={true}></MilestoneLink>
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
                <MilestoneMediumCard milestone={milestone} />                            
                {/* <UserRolesCard user={user}/> */}
            </Col>
            
        </Row>
        <br />
        <Row>
            <Col>
                {/* <UserRawCard user={user}/> */}
                {JSON.stringify(milestone)}
            </Col>
        </Row>
    </CardCapsule>

    )
}
