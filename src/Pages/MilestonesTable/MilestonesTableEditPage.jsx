import { useParams } from "react-router-dom"
import { useFreshItem, CreateAsyncQueryValidator, useDispatch } from "@hrbolek/uoisfrontend-shared/src"
import { FetchProjectByIdAsyncAction } from "../../Queries/Project/FetchProjectByIdAsyncAction.js"
import { MilestonesTableLargeCard } from "../../Components/MilestonesTable/MilestonesTableLargeCard.jsx";
import { MilestonesTableEditCard } from "../../Components/MilestonesTable/MilestonesTableEditCard.jsx";

// @module Projects
/**
 * MilestonesTableEditPage Component
 *
 * This component is responsible for:
 * - Retrieving milestones belonging to the project and showing them in a sortable table
 *  with delete and creation functionality
 *
 * @component
 * @function
 */


const validator = CreateAsyncQueryValidator({error: "Nepovedlo se načíst milníky", success: "Načtení milníků se povedlo"})
export const MilestonesTableEditPage = ()  => {
    const {id} = useParams()
    const [onResolve, onReject] = validator(useDispatch())
    const [project, userPromise] = useFreshItem({id}, FetchProjectByIdAsyncAction)
    userPromise.then(onResolve, onReject)

    if (project) {
        return (

            <MilestonesTableLargeCard project={project}>
                <MilestonesTableEditCard project={project} />
            </MilestonesTableLargeCard>
        )
    } else {
        return (
            <div>Nahrávám projekty...</div>
        )
    }

}
