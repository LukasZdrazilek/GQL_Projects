import { Dropdown } from "react-bootstrap";
import { ProxyLink } from "@hrbolek/uoisfrontend-shared/src/Components/ProxyLink.jsx";
import { onClickHandler } from "../Misc/onClickHandler.jsx";
import {CreateFinanceAsyncAction} from "../../Queries/Finance/CreateFinanceAsyncAction.js";


export const FinanceLink_ = ({finance, children}) => {
    return (
        <ProxyLink to={"/projects/finance/view/" + finance?.id}>{children?children:finance?.name}</ProxyLink>
    )
}

/**
 * FinanceLink Component
 * Renders dropdown, which includes options to view, edit, and view all finances for the project with given ID
 * @param {Object} finance - finance object, response from @query
 * @param {ReactNode} [children] - Optional children to display as the main link/dropdown text.
 *
 * @returns {JSX.Element} dropdown component 
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
                    <Dropdown.Item as={"div"}><ProxyLink to={"/projects/project/finances/" + finance?.project?.id} >Zobrazit finance</ProxyLink></Dropdown.Item>
                </Dropdown.Menu>
            </Dropdown>                
            

            )
    } else {
        return (
            <FinanceLink_ finance={finance}>{children}</FinanceLink_>
        )
    }
}

export const FinanceCreateLink_ = ({project, children}) => {
    return (
        <ProxyLink to={"/projects/project/finances/" + project?.id}>{project?.name}</ProxyLink>
    )
}

/**
 * FinanceCreateLink component
 *
 * Renders dropdown, which includes options to view, edit, and view all finances 
 * for the project with given ID, or create a new one
 * @param {Object} finance - finance object, response from @query
 * @param {ReactNode} [children] - Optional children to display as the main link/dropdown text.

 * @returns {JSX.Element} A Dropdown component  or also new finance object
 */

export const FinanceCreateLink = ({project, menu=true}) => {
    const data = {
        "project_id" : project.id,
        "name" : "Nové finance",
        "financeType_id" : "9e37059c-de2c-4112-9009-559c8b0396f1"
    }
    const onClick = onClickHandler(data, CreateFinanceAsyncAction);

    if (menu) {
        return (
            <Dropdown  className="d-inline" autoClose="outside" size="sm">
                <FinanceCreateLink_ project={project}>
                </FinanceCreateLink_>
                <Dropdown.Toggle split variant='secondary-outline' id="dropdown-basic" size="sm">
                </Dropdown.Toggle>

                <Dropdown.Menu>
                    <Dropdown.Item as={"div"}><ProxyLink to={"/projects/project/finances/" + project?.id} >Zobrazit finance</ProxyLink></Dropdown.Item>
                    <Dropdown.Item as={"div"}><ProxyLink to={"/projects/project/finances/edit/" + project?.id} >Editovat finance</ProxyLink></Dropdown.Item>
                    <Dropdown.Item as={"div"} onClick={onClick}><ProxyLink to={"#"}>Vytvořit finance</ProxyLink></Dropdown.Item>
                </Dropdown.Menu>
            </Dropdown>


        )
    } else {
        return (
            <FinanceLink_ project={project}>{children}</FinanceLink_>
        )
    }
}
