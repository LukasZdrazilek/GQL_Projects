import { Dropdown } from "react-bootstrap";
import { Link } from "react-router-dom";

export const ProjectLink_ = ({project, children}) => {
    return (
        <Link to={"/project/view/" + project?.id}>{children?children:project?.name}</Link>
    )
}

const ProjectMenuItems = {
    "Editovat": "local:/project/edit",
    "Zobrazit": "local:/project/view",

}

export const ProjectLink = ({project, children, menu=true}) => {
    if (menu) {
        return (
            <Dropdown  className="d-inline mx-2" autoClose="outside" size="sm">
                <ProjectLink_ project={project}>
                    {children}
                </ProjectLink_>
                <Dropdown.Toggle split variant='secondary-outline' id="dropdown-basic" size="sm">
                </Dropdown.Toggle>

                <Dropdown.Menu>
                    <Dropdown.Item ><Link to={"/project/view/" + project?.id} >Zobrazit</Link></Dropdown.Item>
                    <Dropdown.Item ><Link to={"/project/edit/" + project?.id} >Editovat</Link></Dropdown.Item>
                </Dropdown.Menu>
            </Dropdown>                
            

            )
    } else {
        return (
            <ProjectLink_ project={project}>{children}</ProjectLink_>
        )
    }
}
