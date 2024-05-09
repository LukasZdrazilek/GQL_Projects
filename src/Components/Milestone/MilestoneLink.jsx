import { Dropdown } from "react-bootstrap";
import { Link } from "react-router-dom";

export const MilestoneLink_ = ({milestone, children}) => {
    return (
        <Link to={"/milestone/view/" + milestone?.id}>{children?children:milestone?.name}</Link>
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
                    <Dropdown.Item ><Link to={"/milestone/view/" + milestone?.id} >Zobrazit</Link></Dropdown.Item>
                    <Dropdown.Item ><Link to={"/milestone/edit/" + milestone?.id} >Editovat</Link></Dropdown.Item>
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
                    <Dropdown.Item ><Link to={"/milestone/create"} >Vytvořit</Link></Dropdown.Item>
                </Dropdown.Menu>
            </Dropdown>


        )
    } else {
        return (
            "error"
        )
    }
}