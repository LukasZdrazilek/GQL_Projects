import { Dropdown } from "react-bootstrap";
import { ProxyLink } from "@hrbolek/uoisfrontend-shared/src/Components/ProxyLink.jsx";

export const ProjectLink_ = ({project, children}) => {
    return (
        <ProxyLink to={"/projects/project/view/" + project?.id}>{children?children:project?.name}</ProxyLink>
    )
}

// @module Projects
/**
 * ProjectLink Component
 *
 * Renders a dropdown menu which includes options to view, edit, view milestones, view finances, and view all projects.
 *
 * @param {Object} project - The project object.
 * @param {object} [children] - Optional children to display as the main link/dropdown text.
 * @param {boolean} [menu=true] - Determines whether to render a dropdown (true) or a simple link (false).
 *
 * @returns {JSX.Element} A `Dropdown` component (if `menu` is true) or a `ProjectLink_` component.
 * @function
 */

export const ProjectLink = ({project, children, menu=true}) => {
    if (menu) {
        return (
            <Dropdown  className="d-inline" autoClose="outside" size="sm">
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