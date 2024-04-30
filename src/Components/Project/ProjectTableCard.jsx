/* eslint-disable react/prop-types */
import { CardCapsule } from '@hrbolek/uoisfrontend-shared/src'
import Row from 'react-bootstrap/Row'
import Col from 'react-bootstrap/Col'
import { formatDate } from '../Misc/FormatDate'
import { formatNumber } from '../Misc/FormatNumber'

export const ProjectTableCard = ({project}) => {
    return (
        <div>
            <CardCapsule title={"Milníky pro " + project?.name}>
                
                <table className="table">
                <thead>
                    <tr>
                        <th scope="col">Milníky</th>
                        <th scope="col">Počátek</th>
                        <th scope="col">Konec</th>
                    </tr>
                </thead>
                <tbody>
                    {project?.milestones.map((milestone, index) => (
                        <tr key={milestone.id}>
                            <td>
                                <a href={`/projects/milestone/view/${milestone.id}`}>
                                {milestone.name}
                                </a>
                            </td>
                            <td>{formatDate(milestone.startdate)}</td>
                            <td>{formatDate(milestone.enddate)}</td>
                        </tr>
                    ))}
                </tbody>
            </table>
            </CardCapsule>

            <CardCapsule title={"Finance pro " + project?.name}>
                        
            <table className="table">
            <thead>
                <tr>
                    <th scope="col">Finance</th>
                    <th scope="col">Částka</th>
                    <th scope="col">Typ</th>
                </tr>
            </thead>
            <tbody>
                {project?.finances.map((finance, index) => (
                    <tr key={finance.id}>
                        <td>
                            <a href={`/projects/finance/view/${finance.id}`}>
                            {finance.name}
                            </a>
                        </td>
                        <td>{formatNumber(finance.amount)} Kč</td>
                        <td>
                            <table>
                                <tbody>
                                    {finance.financeType.map((financeType, typeIndex) => (
                                        <tr key={typeIndex}>
                                            <td>{financeType.name}</td>
                                        </tr>
                                    ))}
                                </tbody>
                            </table>
                        </td>
                    </tr>
                ))}
            </tbody>
            </table>
            </CardCapsule>
        </div>
    )
}
