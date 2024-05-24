/* eslint-disable react/prop-types */
import { Dropdown } from "react-bootstrap";
import { useSearchParams } from "react-router-dom";
// import { ProxyLink } from "../ProxyLink";
import { ProxyLink } from "@hrbolek/uoisfrontend-shared/src";
// import { Link as ProxyLink } from "react-router-dom";

export const GroupLink_ = ({group}) => {
    return (
        <ProxyLink to={"/ug/group/view/" + group?.id}>{group?.name}</ProxyLink>
    )
}


// const composeLink()

export const GroupLink = ({group, children, menu=true}) => {
    let [searchParams, setSearchParams] = useSearchParams()
    // const asDict = {}
    // for (const [key, value] of searchParams) {
    //     asDict[key] = value

    // }
    // console.log(asDict)
    if (menu) {
        return (
            <Dropdown  className="d-inline" autoClose="outside" size="sm">
                <GroupLink_ group={group}>
                    {children}
                </GroupLink_>
                <Dropdown.Toggle split variant='secondary-outline' id="dropdown-basic" size="sm">
                    {/* ⋮ */}
                </Dropdown.Toggle>

                <Dropdown.Menu>
                    <Dropdown.Item as="div"><ProxyLink to={"/ug/group/view/" + group?.id} >Zobrazit</ProxyLink></Dropdown.Item>
                    <Dropdown.Item as="div"><ProxyLink to={"/ug/group/edit/" + group?.id} >Editovat</ProxyLink></Dropdown.Item>
                    {/* <Dropdown.Item href={"/group/view/" + group?.id} >Zobrazit</Dropdown.Item> */}
                    <Dropdown.Item as="div"><ProxyLink to={"/ug/subgroups/view/" + group?.id} >Zobrazit podřízené</ProxyLink></Dropdown.Item>
                    <Dropdown.Item as="div"><ProxyLink to={"/ug/subgroups/edit/" + group?.id} >Editovat podřízené</ProxyLink></Dropdown.Item>

                    <Dropdown.Item as="div"><ProxyLink to={"/ug/groupmembers/edit/" + group?.id} >Editovat členy</ProxyLink></Dropdown.Item>

                    <Dropdown.Item as="div"><ProxyLink to={"/ug/grouproles/edit/" + group?.id} >Editovat role</ProxyLink></Dropdown.Item>
                </Dropdown.Menu>
            </Dropdown>


        )
    } else {
        return (
            <GroupLink_ group={group}>{children}</GroupLink_>
        )
    }
}