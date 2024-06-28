import { useParams } from "react-router-dom"
import { useFreshItem, CreateAsyncQueryValidator, useDispatch } from "@hrbolek/uoisfrontend-shared/src"
import { FetchProjectByIdAsyncAction } from "../../Queries/Project/FetchProjectByIdAsyncAction.js"
import { ProjectLargeCard } from "../../Components/Project/ProjectLargeCard.jsx"
import { ProjectEditCard } from "../../Components/Project/ProjectEditCard.jsx"

// @module Projects
/**
 * ProjectEditPage Component
 *
 * This component is responsible for:
 * -Retrieving project data based on the project ID
 * -Providing visual feedback to the user via pop ups
 * - rendering`ProjectEditLargeCard` to display the project details 
 * - rendering`ProjectEditCard` for editing 
 *
 * @component
 * @function
 */

const validator = CreateAsyncQueryValidator({error: "Nepovedlo se načíst projekt", success: "Načtení projektu se povedlo"})
export const ProjectEditPage = ()  => {
    const {id} = useParams()
    const [onResolve, onReject] = validator(useDispatch())
    const [project, userPromise] = useFreshItem({id}, FetchProjectByIdAsyncAction)
    userPromise.then(onResolve, onReject)

    if (project) {
        return (

            <ProjectLargeCard project={project}>
                <ProjectEditCard project={project} />
            </ProjectLargeCard>
        )
    } else {
        return (
            <div>Nahrávám projekty...</div>
        )
    }
    
}
