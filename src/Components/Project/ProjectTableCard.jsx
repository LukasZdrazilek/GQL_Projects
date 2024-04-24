/* eslint-disable react/prop-types */
import { CardCapsule } from '@hrbolek/uoisfrontend-shared/src'
import Row from 'react-bootstrap/Row'
import Col from 'react-bootstrap/Col'

export const ProjectTableCard = ({project}) => {
    return (
        <CardCapsule title={"Milníky pro " + project?.name}>
            
            <table className="table">
            <thead>
                <tr>
                    <th scope="col">#</th>
                    <th scope="col">Milestones</th>
                    <th scope="col">Startdate</th>
                    <th scope="col">Enddate</th>
                </tr>
            </thead>
            <tbody>
                {project?.milestones.map((milestone, index) => (
                    <tr key={milestone.id}>
                        <th scope="row">{index + 1}</th>
                        <td>{milestone.name}</td>
                        <td>{milestone.startdate}</td>
                        <td>{milestone.enddate}</td>
                    </tr>
                ))}
            </tbody>
        </table>
        </CardCapsule>
    )
}
