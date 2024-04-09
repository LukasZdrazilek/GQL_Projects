import { CardCapsule } from '@hrbolek/uoisfrontend-shared/src'
import Row from 'react-bootstrap/Row'
import Col from 'react-bootstrap/Col'
import { FinanceMediumCard } from './FinanceMediumCard'
// import { UserRolesCard } from './UserRolesCard'
// import { UserRawCard } from './UserRawCard'
// import { UserMediumCard } from './UserMediumCard'

export const FinanceLargeCard = ({finance, children}) => {
    return (
        <CardCapsule title={"Finance " + finance?.name}>
        <Row>
            <Col md={4}>
                <FinanceMediumCard finance={finance} />
                {/* <UserMediumCard user={user}/> */}
            </Col>
            <Col md={4}>
                {children}
            </Col>
            <Col md={4}>        
                <FinanceMediumCard finance={finance} />                            
                {/* <UserRolesCard user={user}/> */}
            </Col>
            
        </Row>
        <br />
        <Row>
            <Col>
                {/* <UserRawCard user={user}/> */}
                {JSON.stringify(finance)}
            </Col>
        </Row>
    </CardCapsule>

    )
}
