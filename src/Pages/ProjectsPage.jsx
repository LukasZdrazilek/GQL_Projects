// import { useFreshItem } from "@hrbolek/uoisfrontend-shared/src"
import { useParams } from "react-router-dom"
import { UserLargeCard } from "../Components"
import { useFreshItem, CreateAsyncQueryValidator, useDispatch } from "@hrbolek/uoisfrontend-shared/src"
import { FetchProjectByIdAsyncAction } from "../Queries/FetchProjectByIdAsyncAction"       // fetchProjects
import { ProjectLargeCard } from "../Components/Project/ProjectLargeCard"

const validator = CreateAsyncQueryValidator({error: "Nepovedlo se načíst projekt", success: "Načtení projektu se povedlo"})
export const ProjectsPage = ()  => {
    const {id} = useParams()
    const [onResolve, onReject] = validator(useDispatch())
    const [projects, userPromise] = useFreshItem({id}, FetchProjectByIdAsyncAction)
    userPromise.then(onResolve, onReject)

    if (projects) {             //      2d9dc5ca-a4a2-11ed-b9df-0242ac120003            John Newbie ID
        return (
            // // <UserLargeCard user={user} />           // ProjectLargeCard?
            // <div>
            //     Projekty nahrány
            //     {JSON.stringify(projects)}       // debug informace
            // </div>

            <ProjectLargeCard project={projects} />
        )
    } else {
        return (
            <div>Nahrávám projekty...</div>
        )
    }
    
}