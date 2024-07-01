import { Dropdown } from "react-bootstrap";
import { ProxyLink } from "@hrbolek/uoisfrontend-shared/src/Components/ProxyLink.jsx";


export const FinanceLink_ = ({finance, children}) => {
    return (
        <ProxyLink to={"/projects/finance/view/" + finance?.id}>{children?children:finance?.name}</ProxyLink>
    )
}

// @module Projects
/**
 * FinanceLink Component
 * Renders dropdown, which includes options to view, edit, and view all finances for the project with given ID
 * @param {Object} finance - finance object, response from @query
 * @param {ReactNode} [children] - Optional children to display as the main link/dropdown text.
 *
 * @returns {JSX.Element} dropdown component 
 * @function
 */

export const FinanceLink = ({finance, children, menu=true}) => {
    console.log(JSON.stringify(finance))
    if (menu) {
        return (
            <Dropdown  className="d-inline" autoClose="outside" size="sm">
                <FinanceLink_ finance={finance}>
                    {children}
                </FinanceLink_>
                <Dropdown.Toggle split variant='secondary-outline' id="dropdown-basic" size="sm">
                </Dropdown.Toggle>

                <Dropdown.Menu>
                    <Dropdown.Item as={"div"}><ProxyLink to={"/projects/finance/view/" + finance?.id} >Zobrazit</ProxyLink></Dropdown.Item>
                    <Dropdown.Item as={"div"}><ProxyLink to={"/projects/finance/edit/" + finance?.id} >Editovat</ProxyLink></Dropdown.Item>
                </Dropdown.Menu>
            </Dropdown>                
            

            )
    } else {
        return (
            <FinanceLink_ finance={finance}>{children}</FinanceLink_>
        )
    }
}
