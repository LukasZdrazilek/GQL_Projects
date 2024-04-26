/* eslint-disable react/prop-types */
import { CardCapsule } from '@hrbolek/uoisfrontend-shared/src'
import Row from 'react-bootstrap/Row'
import Col from 'react-bootstrap/Col'

const formatDate = (dateString) => {
    if (!dateString) return ""; // If dateString is null or undefined, return empty string
    
    const date = new Date(dateString); // Parse dateString into a Date object

    // Extract day, month, and year components from the Date object
    const day = date.getDate().toString().padStart(2, "0"); // Ensure two digits for day
    const month = (date.getMonth() + 1).toString().padStart(2, "0"); // Ensure two digits for month (January is 0)
    const year = date.getFullYear();

    return `${day}. ${month}. ${year}`;
};

export const ProjectMediumCard = ({project}) => {
    return (
        <CardCapsule title={"Projekt " + project?.name + " - atributy"}>
            
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
                <Col>{project?.team?.name}</Col>
            </Row>
            <Row>
                <Col>Počátek</Col>
                <Col>{formatDate(project?.startdate)}</Col>
            </Row>
            <Row>
                <Col>Konec</Col>
                <Col>{formatDate(project?.enddate)}</Col>
            </Row>
        </CardCapsule>
    )
}
