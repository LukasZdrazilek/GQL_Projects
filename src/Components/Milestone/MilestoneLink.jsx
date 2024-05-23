import { Dropdown } from "react-bootstrap";
import { ProxyLink } from "@hrbolek/uoisfrontend-shared/src/Components/ProxyLink.jsx";
import { CreateMilestoneAsyncAction } from "../../Queries/Milestone/CreateMilestoneAsyncAction.js";
import {onClickHandler} from "../Misc/onClickHandler.jsx";

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
                    <Dropdown.Item as="div"><ProxyLink to={"/projects/milestone/view/" + milestone?.id} >Zobrazit</ProxyLink></Dropdown.Item>
                    <Dropdown.Item as="div"><ProxyLink to={"/projects/milestone/edit/" + milestone?.id} >Editovat</ProxyLink></Dropdown.Item>
                    <Dropdown.Item as="div"><ProxyLink to={"/projects/project/milestones/" + milestone?.project?.id} >Zobrazit milníky</ProxyLink></Dropdown.Item>
                </Dropdown.Menu>
            </Dropdown>                
            

            )
    } else {
        return (
            <MilestoneLink_ milestone={milestone}>{children}</MilestoneLink_>
        )
    }
}

export const MilestoneCreateLink_ = ({project, children}) => {
    return (
        <ProxyLink to={"/projects/project/milestones/" + project?.id}>Milníky pro {project?.name}</ProxyLink>
    )
}

export const MilestoneCreateLink = ({project, menu=true}) => {
    const data = {
        "project_id": project?.id,
        "name": "Nový milník"
    }
    const onClick = onClickHandler(data, CreateMilestoneAsyncAction);

    if (menu) {
        return (
            <Dropdown  className="d-inline mx-2" autoClose="outside" size="sm">
                <MilestoneCreateLink_ project={project}>
                </MilestoneCreateLink_>
                <Dropdown.Toggle split variant='secondary-outline' id="dropdown-basic" size="sm">
                </Dropdown.Toggle>

                <Dropdown.Menu>
                    <Dropdown.Item as={"div"}><ProxyLink to={"/projects/project/milestones/" + project?.id} >Zobrazit milníky</ProxyLink></Dropdown.Item>
                    <Dropdown.Item as={"div"}><ProxyLink to={"/projects/project/milestones/edit/" + project?.id} >Editovat milníky</ProxyLink></Dropdown.Item>
                    <Dropdown.Item as={"div"} onClick={onClick}><ProxyLink to={"#"} >Vytvořit milník</ProxyLink></Dropdown.Item>

                </Dropdown.Menu>
            </Dropdown>


        )
    } else {
        return (
            <MilestoneLink_ project={project}>{children}</MilestoneLink_>
        )
    }
}