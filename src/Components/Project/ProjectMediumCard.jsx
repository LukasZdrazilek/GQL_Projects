/* eslint-disable react/prop-types */
import { CardCapsule } from '@hrbolek/uoisfrontend-shared/src'
import Row from 'react-bootstrap/Row'
import Col from 'react-bootstrap/Col'
import { formatDate } from '../Misc/FormatDate'
import { ProjectLink } from './ProjectLink'
import { formatDateTime } from "../Misc/FormatDateTime.jsx";
import { GroupLink } from "../Group/index.js";

export const ProjectMediumCard = ({project}) => {
    return (
        <CardCapsule title=
            {
            <div>
                <span>Projekt: </span>
                <ProjectLink project={project} menu={true}></ProjectLink>
            </div>
            }>
            
            <Row>
                <Col>Název</Col>
                <Col>{project?.name}</Col>
            </Row>
           
            <Row>
                <Col>Typ</Col>
                <Col>{project?.projectType?.name}</Col>
            </Row>
            <Row>
                <Col>Tým</Col>
                <Col><GroupLink group={project.group} menu={true} /></Col>
            </Row>
            <Row>
                <Col>Vytvořeno</Col>
                <Col>{formatDate(project?.created)}</Col>
            </Row>
            <Row>
                <Col>Počátek</Col>
                <Col>{formatDate(project?.startdate)}</Col>
            </Row>
            <Row>
                <Col>Konec</Col>
                <Col>{formatDate(project?.enddate)}</Col>
            </Row>
            <Row>
                <Col>Poslední změna</Col>
                <Col>{formatDateTime(project?.lastchange)} UTC</Col>
            </Row>
            
        </CardCapsule>
    )
}
