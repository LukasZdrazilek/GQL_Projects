import { Dropdown } from "react-bootstrap";
import { ProxyLink } from "@hrbolek/uoisfrontend-shared/src/Components/ProxyLink.jsx";



export const MilestoneLink_ = ({milestone, children}) => {
    return (
        <ProxyLink to={"/projects/milestone/view/" + milestone?.id}>{children?children:milestone?.name}</ProxyLink>
    )
}

// @module Projects
/**
 * MilestoneLink Component
 *
 * Renders a dropdown menu or a simple link for managing a milestone object. 
 * The dropdown includes options to view, edit, and view all milestones for the associated project.
 *
 * @param {Object} milestone - The milestone object.
 * @param {ReactNode} [children] - 
 * @param {boolean} [menu=true] - 
 *
 * @returns {JSX.Element} A `Dropdown` component
 * @function
 */

export const MilestoneLink = ({milestone, children, menu=true}) => {
    if (menu) {
        return (
            <Dropdown  className="d-inline" autoClose="outside" size="sm">
                <MilestoneLink_ milestone={milestone}>
                    {children}
                </MilestoneLink_>
                <Dropdown.Toggle split variant='secondary-outline' id="dropdown-basic" size="sm">
                </Dropdown.Toggle>

                <Dropdown.Menu>
                    <Dropdown.Item as="div"><ProxyLink to={"/projects/milestone/view/" + milestone?.id} >Zobrazit</ProxyLink></Dropdown.Item>
                    <Dropdown.Item as="div"><ProxyLink to={"/projects/milestone/edit/" + milestone?.id} >Editovat</ProxyLink></Dropdown.Item>
                </Dropdown.Menu>
            </Dropdown>                
            

            )
    } else {
        return (
            <MilestoneLink_ milestone={milestone}>{children}</MilestoneLink_>
        )
    }
}