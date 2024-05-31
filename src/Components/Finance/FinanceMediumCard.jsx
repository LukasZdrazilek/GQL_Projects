/* eslint-disable react/prop-types */
import { CardCapsule } from '@hrbolek/uoisfrontend-shared/src'
import Row from 'react-bootstrap/Row'
import Col from 'react-bootstrap/Col'
import { formatDate } from '../Misc/FormatDate'
import { formatNumber } from "../Misc/FormatNumber.jsx";
import { FinanceLink } from './FinanceLink.jsx'
import { ProjectLink } from '../Project/ProjectLink'

// @module Projects
/**
 * FinanceMediumCard Component
 *
 * Shows "basic" info card for finance
 *
 * @component
 *
 * @param {Object} finance -  object containing the data, response on @query 
 * @param {string} finance.name - name 
 * @param {float} finance.amount - budget in czk
 * @param {Object} finance.project - parent project
 * @param {Date} finance.lastchange - date of the last change
 * @param {Object[]} finance.financeType - array of finance type objects
 * @param {string} finance.financeType[].name - name of each finance type to be shown
 *
 * @returns {JSX.Element} the render of the finance card with basic attributes
 * @function
 */

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
