import { useState } from "react"
import { ProjectsTableCard} from "../../Components/ProjectsTable/ProjectsTableCard.jsx";
import { FetchProjectsAsyncAction} from "../../Queries/Project/FetchProjectsAsynsAction.js";
import {useFreshItem} from "@hrbolek/uoisfrontend-shared/src";

/**
 * ProjectsTablePage Component
 *
 * This component is responsible for:
 * - Retrieving all available projects and showing them in a sortable table
 *
 * @component
 *
 */

const id = ""
export const ProjectsTablePage = () => {
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
            <ProjectsTableCard projects={projecttypesdata}></ProjectsTableCard>
        )
    } else {
        return (
            <div>Nahrávám projekty...</div>
        )
    }

}
