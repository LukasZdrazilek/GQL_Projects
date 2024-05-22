/* eslint-disable react/prop-types */
import { CardCapsule } from '@hrbolek/uoisfrontend-shared/src'
import Row from 'react-bootstrap/Row'
import Col from 'react-bootstrap/Col'
import { formatDate } from '../Misc/FormatDate'
import { formatNumber } from "../Misc/FormatNumber.jsx";
import { FinanceLink } from './FinanceLink.jsx'
import { ProjectLink } from '../Project/ProjectLink'


export const FinanceMediumCard = ({finance}) => {
    return (
        <CardCapsule title={
            <div>
                <span>Finance: </span>
                <FinanceLink finance={finance} menu={true}></FinanceLink>
            </div>
        }>
            
            <Row>
                <Col>Název</Col>
                <Col>{finance?.name}</Col>
            </Row>
            <Row>
                <Col>Rozpočet</Col>
                <Col>{formatNumber(finance?.amount)} Kč</Col>
            </Row>
            <Row>
                <Col>Projekt</Col>
                <Col><ProjectLink project={finance?.project} menu={true}></ProjectLink></Col>
            </Row>
            <Row>
                <Col>Poslední změna</Col>
                <Col>{formatDate(finance?.lastchange)}</Col>
            </Row>
            <Row>
                <Col>Typ</Col>
                <Col>
                    <table>
                        <tbody>
                            {finance.financeType.map((financeType, typeIndex) => (
                                <tr key={typeIndex}>
                                    <td>{financeType.name}</td>
                                </tr>
                            ))}
                        </tbody>
                    </table>
                </Col>
            </Row>
        </CardCapsule>
    )
}
