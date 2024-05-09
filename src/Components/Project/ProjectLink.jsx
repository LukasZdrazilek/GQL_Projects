import { Dropdown } from "react-bootstrap";
import { Link } from "react-router-dom";
import { ProxyLink } from "@hrbolek/uoisfrontend-shared/src";

export const ProjectLink_ = ({project, children}) => {
    return (
        <ProxyLink to={"/projects/project/view/" + project?.id}>{children?children:project?.name}</ProxyLink>
    )
}

const ProjectMenuItems = {
    "Editovat": "local:/projects/project/edit",
    "Zobrazit": "local:/projects/project/view",

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
                    <Dropdown.Item as={"div"} ><ProxyLink to={"/projects/project/view/" + project?.id} >Zobrazit</ProxyLink></Dropdown.Item>
                    <Dropdown.Item as={"div"}><ProxyLink to={"/projects/project/edit/" + project?.id} >Editovat</ProxyLink></Dropdown.Item>
                </Dropdown.Menu>
            </Dropdown>                
            

            )
    } else {
        return (
            <ProjectLink_ project={project}>{children}</ProjectLink_>
        )
    }
}

