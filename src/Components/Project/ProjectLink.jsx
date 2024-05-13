import { Dropdown } from "react-bootstrap";
import { ProxyLink } from "@hrbolek/uoisfrontend-shared/src/Components/ProxyLink.jsx";

export const ProjectLink_ = ({project, children}) => {
    return (
        <ProxyLink to={"/projects/project/view/" + project?.id}>{children?children:project?.name}</ProxyLink>
    )
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
                    <Dropdown.Item as={"div"}><ProxyLink to={"/projects/project/milestones/" + project?.id} >Zobrazit milníky</ProxyLink></Dropdown.Item>
                    <Dropdown.Item as={"div"}><ProxyLink to={"/projects/project/finances/" + project?.id} >Zobrazit finance</ProxyLink></Dropdown.Item>

                </Dropdown.Menu>
            </Dropdown>                
            

            )
    } else {
        return (
            <ProjectLink_ project={project}>{children}</ProjectLink_>
        )
    }
}

export const ProjectCreateLink = ({menu=true}) => {
    if (menu) {
        return (
            <Dropdown  className="d-inline mx-2" autoClose="outside" size="sm">
                Projekty:
                <Dropdown.Toggle split variant='secondary-outline' id="dropdown-basic" size="sm">
                </Dropdown.Toggle>

                <Dropdown.Menu>
                    <Dropdown.Item as={"div"} ><ProxyLink to={"/projects/project/create"} >Vytvořit</ProxyLink></Dropdown.Item>
                </Dropdown.Menu>
            </Dropdown>


        )
    } else {
        return (
            <div>Error</div>
        )
    }
}

