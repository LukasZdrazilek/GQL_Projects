import { useParams } from "react-router-dom"
import { useFreshItem, CreateAsyncQueryValidator, useDispatch } from "@hrbolek/uoisfrontend-shared/src"
import { FetchProjectByIdAsyncAction } from "../../Queries/Project/FetchProjectByIdAsyncAction.js"
import { ProjectLargeCard } from "../../Components/Project/ProjectLargeCard.jsx"
import { MilestonesTableCard } from '../../Components/MilestonesTable/MilestonesTableCard.jsx'
import { FinancesTableCard } from '../../Components/FinancesTable/FinancesTableCard.jsx'

// @module Projects
/**
 * ProjectPage Component
 *
 * This component is responsible for:
 * -Retrieving project data based on the project ID
 * -Providing visual feedback to the user via pop ups
 * - rendering`ProjectLargeCard` to display the project details, milestone and finance tables
 *
 * @component
 * @function
 */

const validator = CreateAsyncQueryValidator({error: "Nepovedlo se načíst projekt", success: "Načtení projektu se povedlo"})
export const ProjectPage = ()  => {
    const {id} = useParams()
    const [onResolve, onReject] = validator(useDispatch())
    const [project, userPromise] = useFreshItem({id}, FetchProjectByIdAsyncAction)
    userPromise.then(onResolve, onReject)

    if (project) {
        return (

            <ProjectLargeCard project={project} extraChildren={<FinancesTableCard project={project} />}>
                <MilestonesTableCard project={project} />
            </ProjectLargeCard>
        )
    } else {
        return (
            <div>Nahrávám projekty...</div>
        )
    }
    
}
