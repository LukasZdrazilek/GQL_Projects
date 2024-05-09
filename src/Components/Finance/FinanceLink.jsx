import { Dropdown } from "react-bootstrap";
import { Link } from "react-router-dom";
import {MilestoneLink_} from "../Milestone/MilestoneLink.jsx";

// eslint-disable-next-line react/prop-types
export const FinanceLink_ = ({finance, children}) => {
    return (
        <Link to={"/finance/view/" + finance?.id}>{children?children:finance?.name}</Link>
    )
}

const FinanceMenuItems = {
    "Editovat": "local:/finance/edit",
    "Zobrazit": "local:/finance/view",

}

export const FinanceLink = ({finance, children, menu=true}) => {
    if (menu) {
        return (
            <Dropdown  className="d-inline mx-2" autoClose="outside" size="sm">
                <FinanceLink_ finance={finance}>
                    {children}
                </FinanceLink_>
                <Dropdown.Toggle split variant='secondary-outline' id="dropdown-basic" size="sm">
                </Dropdown.Toggle>

                <Dropdown.Menu>
                    <Dropdown.Item ><Link to={"/finance/view/" + finance?.id} >Zobrazit</Link></Dropdown.Item>
                    <Dropdown.Item ><Link to={"/finance/edit/" + finance?.id} >Editovat</Link></Dropdown.Item>
                </Dropdown.Menu>
            </Dropdown>                
            

            )
    } else {
        return (
            <FinanceLink_ finance={finance}>{children}</FinanceLink_>
        )
    }
}

export const FinanceCreateLink = ({project, menu=true}) => {
    if (menu) {
        return (
            <Dropdown  className="d-inline mx-2" autoClose="outside" size="sm">
                Finance pro {project?.name}
                <Dropdown.Toggle split variant='secondary-outline' id="dropdown-basic" size="sm">
                </Dropdown.Toggle>

                <Dropdown.Menu>
                    <Dropdown.Item ><Link to={"/finance/create"} >Vytvořit</Link></Dropdown.Item>
                </Dropdown.Menu>
            </Dropdown>


        )
    } else {
        return (
            "error"
        )
    }
}