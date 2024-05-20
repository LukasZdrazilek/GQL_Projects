import { CardCapsule } from '@hrbolek/uoisfrontend-shared/src'
import Row from 'react-bootstrap/Row'
import Col from 'react-bootstrap/Col'
import { FinanceMediumCard } from './FinanceMediumCard'
import { ProjectLink } from "../Project/ProjectLink.jsx";
import { ProjectFinancesTableCard } from "../Project/ProjectTableCard.jsx";


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
                <ProjectFinancesTableCard project={finance?.project} />
            </Col>
        </Row>
        <br />
    </CardCapsule>

    )
}
