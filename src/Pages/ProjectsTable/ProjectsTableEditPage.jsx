import { useState } from "react"
import { ProjectsTableEditCard } from "../../Components/ProjectsTable/ProjectsTableEditCard.jsx";
import { FetchProjectsAsyncAction} from "../../Queries/Project/FetchProjectsAsynsAction.js";
import {useFreshItem } from "@hrbolek/uoisfrontend-shared/src";

// @module Projects
/**
 * ProjectsTableEditPage Component
 *
 * This component is responsible for:
 * - Retrieving all available projects and showing them in a sortable table
 * with delete and creation functionality
 *
 * @component
 * @function
 */

const id = ""
export const ProjectsTableEditPage = () => {
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
            <ProjectsTableEditCard projects={projecttypesdata}></ProjectsTableEditCard>
        )
    } else {
        return (
            <div>Nahrávám projekty...</div>
        )
    }

}
