import { CardCapsule } from '@hrbolek/uoisfrontend-shared/src'
import Row from 'react-bootstrap/Row'
import Col from 'react-bootstrap/Col'
import { ProjectLink, ProjectCreateLink } from "./ProjectLink.jsx";
import { formatDate } from "../Misc/FormatDate.jsx"

export const ProjectsViewCard = ({projects}) => {
    return (
        <CardCapsule title={<div>
            <ProjectCreateLink menu={true}></ProjectCreateLink>
        </div>}>
            <Row>
                <Col>
                    <table className="table">
                        <thead>
                        <tr>
                            <th scope="col">Projekt</th>
                            <th scope="col">Typ</th>
                            <th scope="col">Tým</th>
                            <th scope="col">Datum změny</th>
                        </tr>
                        </thead>
                        <tbody>
                        {projects.map((project) => (
                            <tr key={project.id}>
                                <td>
                                    <ProjectLink project={project} menu={true}></ProjectLink>
                                </td>
                                <td>{project.projectType.name}</td>
                                <td>{project.group.name}</td>
                                <td>{formatDate(project.lastchange)}</td>
                            </tr>
                        ))}
                        </tbody>
                    </table>
                </Col>
            </Row>
        </CardCapsule>

    )
}
