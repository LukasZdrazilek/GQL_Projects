import { Dropdown } from "react-bootstrap";
import { ProxyLink } from "@hrbolek/uoisfrontend-shared/src/Components/ProxyLink.jsx";

export const MilestoneLink_ = ({milestone, children}) => {
    return (
        <ProxyLink to={"/projects/milestone/view/" + milestone?.id}>{children?children:milestone?.name}</ProxyLink>
    )
}


export const MilestoneLink = ({milestone, children, menu=true}) => {
    if (menu) {
        return (
            <Dropdown  className="d-inline mx-2" autoClose="outside" size="sm">
                <MilestoneLink_ milestone={milestone}>
                    {children}
                </MilestoneLink_>
                <Dropdown.Toggle split variant='secondary-outline' id="dropdown-basic" size="sm">
                </Dropdown.Toggle>

                <Dropdown.Menu>
                    <Dropdown.Item ><ProxyLink to={"/projects/milestone/view/" + milestone?.id} >Zobrazit</ProxyLink></Dropdown.Item>
                    <Dropdown.Item ><ProxyLink to={"/projects/milestone/edit/" + milestone?.id} >Editovat</ProxyLink></Dropdown.Item>
                </Dropdown.Menu>
            </Dropdown>                
            

            )
    } else {
        return (
            <MilestoneLink_ milestone={milestone}>{children}</MilestoneLink_>
        )
    }
}

export const MilestoneCreateLink = ({project, menu=true}) => {
    if (menu) {
        return (
            <Dropdown  className="d-inline mx-2" autoClose="outside" size="sm">
                Milníky pro {project?.name}
                <Dropdown.Toggle split variant='secondary-outline' id="dropdown-basic" size="sm">
                </Dropdown.Toggle>

                <Dropdown.Menu>
                    <Dropdown.Item ><ProxyLink to={"/projects/milestone/create"} >Vytvořit</ProxyLink></Dropdown.Item>
                </Dropdown.Menu>
            </Dropdown>


        )
    } else {
        return (
            "error"
        )
    }
}