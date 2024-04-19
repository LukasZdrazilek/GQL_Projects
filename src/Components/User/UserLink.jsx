/* eslint-disable react/prop-types */
import { Link } from "react-router-dom";

export const UserLink = ({user}) => {
    return (
        <Link to={"/user/" + user?.id}>{user?.fullname}</Link>
    )
}

/*
import { Dropdown } from "react-bootstrap";
import { Link } from "react-router-dom";

export const UserLink_ = ({user, children}) => {
    return (
        <Link to={"/user/view/" + user?.id}>{children?children:user?.fullname}</Link>
    )
}

const UserMenuItems = {
    "Editovat": "local:/user/view",
    "Zobrazit": "local:/user/edit",

}

export const UserLink = ({user, children, menu=true}) => {
    if (menu) {
        return (
            <Dropdown  className="d-inline mx-2" autoClose="outside" size="sm">
                <UserLink_ user={user}>
                    {children}
                </UserLink_>
                <Dropdown.Toggle split variant='secondary-outline' id="dropdown-basic" size="sm">
                </Dropdown.Toggle>

                <Dropdown.Menu>
                    <Dropdown.Item ><Link to={"/user/view/" + user?.id} >Zobrazit</Link></Dropdown.Item>
                    <Dropdown.Item ><Link to={"/user/edit/" + user?.id} >Editovat</Link></Dropdown.Item>
                    <Dropdown.Item ><Link to={"/userroles/edit/" + user?.id} >Editovat role</Link></Dropdown.Item>
                </Dropdown.Menu>
            </Dropdown>                
            

            )
    } else {
        return (
            <UserLink_ user={user}>{children}</UserLink_>
        )
    }
}
*/