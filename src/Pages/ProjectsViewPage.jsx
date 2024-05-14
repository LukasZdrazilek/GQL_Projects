import { useState } from "react"
import { ProjectsViewCard} from "../Components/Project/ProjectsViewCard.jsx";
import { FetchProjectsAsyncAction} from "../Queries/Project/FetchProjectsAsynsAction.js";
import {useFreshItem} from "@hrbolek/uoisfrontend-shared/src";

const id = ""
export const ProjectsViewPage = () => {
    const [projecttypes, projecttypesPromise] = useFreshItem({id}, FetchProjectsAsyncAction)
    const [projecttypesdata, setThem] = useState([])
    projecttypesPromise.then(json =>
    {
        console.log(json)
        const r = json?.data?.result
        if (r)
        {
            setThem(r)
            console.log(r)
        }
    })

    if (projecttypesdata) {
        return (
            <ProjectsViewCard projects={projecttypesdata}></ProjectsViewCard>
        )
    } else {
        return (
            <div>Nahrávám projekty...</div>
        )
    }

}
