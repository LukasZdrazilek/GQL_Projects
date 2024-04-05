// import { useFreshItem } from "@hrbolek/uoisfrontend-shared/src"
import { useParams } from "react-router-dom"
import { UserLargeCard } from "../Components"
import { useFreshItem, CreateAsyncQueryValidator, useDispatch } from "@hrbolek/uoisfrontend-shared/src"
import { FetchProjectByIdAsyncAction } from "../Queries/FetchProjectByIdAsyncAction"
import { ProjectLargeCard } from "../Components/Project/ProjectLargeCard"

const validator = CreateAsyncQueryValidator({error: "Nepovedlo se načíst projekt", success: "Načtení projektu se povedlo"})
export const ProjectsEditPage = ()  => {
    const {id} = useParams()
    const [onResolve, onReject] = validator(useDispatch())
    const [projects, userPromise] = useFreshItem({id}, FetchProjectByIdAsyncAction)
    userPromise.then(onResolve, onReject)

    if (projects) {             //      43dd2ff1-5c17-42a5-ba36-8b30e2a243bb            Project ID
        return (
            // // <UserLargeCard user={user} />           // ProjectLargeCard?
            // <div>
            //     Projekty nahrány
            //     {JSON.stringify(projects)}       // debug informace
            // </div>

            <ProjectLargeCard project={projects}>
                <ProjectLargeCard project={projects}>
                    Heureka
                </ProjectLargeCard>
            </ProjectLargeCard>
        )
    } else {
        return (
            <div>Nahrávám projekty...</div>
        )
    }
    
}